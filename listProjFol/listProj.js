window.addEventListener("DOMContentLoaded", function startPageEvent() {

    //These variables are declared to make reading/writing code a cleaner process.
    const listItems = document.getElementsByTagName('li');
    const $form = $('#newItemForm');
    const inputBox = document.querySelector('input.newValue'); //Input box

    //Array for each item added to list.
    let entries = [];

    //Constructor for each entry object.
    function Entry(name) {
        this.name = name;
        this.ticked = false;
    }

    //Turn entry into an object and pushes it into the array 'entries'.
    addEntry = (name) => {
        let item = new Entry(name);
        entries.push(item);
        saveEntry();
    }

    //Removes entry from it's position on the list.
    removeEntry = (index) => {
        entries.splice(index, 1);
        saveEntry();
    }
    
    //Saves current state of list.
    saveEntry = () => {
        let str = JSON.stringify(entries);
        localStorage.setItem('entries', str);
    }

    //Returns the objects from the 'entries' array at the particular index.
    getEntry = (index) => entries[index];

    //Parses the data in localStorage and puts it back into the 'entries' array.
    loadEntries = () => {
        let str = localStorage.getItem('entries');
        entries = JSON.parse(str);
        if (!entries){
            entries = [];
        }
    }

    //Returns the list to the web page after it's parsed from the function 'loadEntries'.
    listEntries = () => {
        for (var i in entries){
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = entries[i].name;
            li.appendChild(span);
            $('ul').append(li);
            attachButtons(li);
            if (entries[i].ticked == true){

            }

        }
    }

    titleLoad = () => {
        let str = localStorage.getItem('title')
        $('#listTitle').text(str);
    }

    loadEntries();
    listEntries();
    titleLoad();

    //Creates & appends buttons to each list item.
    function attachButtons(li){
        function createListFunction(elementName, elementClass, elementSrc){
            const element = document.createElement(elementName);
            element.className = elementClass;
            element.id = 'funcBtn';
            element.type = 'image';
            element.src = elementSrc;
            li.appendChild(element);
        }
        createListFunction('input', 'up', 'listProjFol/UpArrow.png');
        createListFunction('input', 'down', 'listProjFol/DownArrow.png');
        createListFunction('input', 'remove', 'listProjFol/RemoveBtn.png');
        createListFunction('input', 'edit', 'listProjFol/editBtn.png' );
        createListFunction('input', 'save', 'listProjFol/saveBtn.png');

        const tickBox = document.createElement('input')
        tickBox.type = 'checkbox';
        tickBox.className = 'tickBox';
        li.appendChild(tickBox);
        tickBox.value = tickBox.parentNode.textContent;
    }

    //All new entries will use this to capitalize the first letter
    upperFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    //Adds functionality to buttons.
    $('ul').on('click change', (x) => {
        const li = x.target.parentNode;
        const ul = li.parentNode;
        const span = li.firstElementChild;
        let prevContent = span.id;

        if(x.target.tagName == 'INPUT'){
            if(x.target.className == 'up'){   
                let prevLi = li.previousElementSibling; 
                if(prevLi){
                    ul.insertBefore(li, prevLi);
                    entries.indexOf
                }            
            }
            if(x.target.className == 'down'){
                let nextLi = li.nextElementSibling;
                ul.insertBefore(li, nextLi.nextElementSibling);
            }
            if(x.target.className == 'remove'){
                ul.removeChild(li);
                for(let i = 0; i < entries.length; i++){
                    if (span.textContent == entries[i].name){
                        removeEntry(i)
                    }
                }
            }
            if(x.target.className == 'edit'){
                li.querySelector('.edit').style.display = 'none';
                li.querySelector('.save').style.display = 'block';
                li.querySelector('.tickBox').style.display = 'none';

                const inputEdit = document.createElement('input');
                inputEdit.type = 'text';
                inputEdit.value = span.textContent;
                li.insertBefore(inputEdit, span);
                li.removeChild(span);
                localStorage.removeItem(prevContent);
            }
            if (x.target.className == 'save'){
                li.querySelector('.edit').style.display = 'block';
                li.querySelector('.save').style.display = 'none';
                li.querySelector('.tickBox').style.display = 'inline-block';
                
                const input = li.firstElementChild;
                const span = document.createElement('span');
                let upper = upperFirst(input.value);

                span.id = 'item'+upper;
                span.textContent = upper;

                li.querySelector('.tickBox').checked=false;
                li.className = '';
                
                li.insertBefore(span, input);
                li.removeChild(input);
            }
        }
        //Checks entries are ticked and swaps the class for appropriate CSS change.
        if (x.target.className == 'tickBox'){
            for (i = 0; i < entries.length; i++){
                if (entries[i].name == x.target.value && x.target.checked){
                    li.className = 'ticked';
                    entries[i].ticked = true;
                    saveEntry();
                }
                if (entries[i].name == x.target.value && !x.target.checked) {
                    li.className = ' ';
                    entries[i].ticked = false;
                    saveEntry();
                }
            }
        };
    });

    //Takes the content from the Input box and places into the list if not empty, then clearing the input box.
    $form.on('submit', (e) => {
        let submitEntry = true;
        e.preventDefault();
        const li = document.createElement('li');
        const span = document.createElement('span');
        li.appendChild(span);
        
        let listItemValue = inputBox.value;
        listItemValue = upperFirst(listItemValue);
        span.textContent = listItemValue

        //checks item is not already on list
        for(i=0;i<listItems.length;i++){
            if(li.textContent == listItems[i].textContent){
                submitEntry = false;
            }
        }

        //stop entry insertion if box is not between 1 to 25 characters or is already on the list.
        if (li.textContent != '' && li.textContent.length <= 25 && submitEntry == true){
            span.id = 'item' + listItemValue;

            addEntry(listItemValue);
            saveEntry();
            $('ul').append(li);
            attachButtons(li);

        } else {
            alert("Entry must be between 1 to 25 characters long and not already be on the list");
        }

        inputBox.value = '';
    });

    //Reads input box and places the value into the heading.
    $('button.newTitle').on('click', () => {
        const titleTxt = document.querySelector('#listTitle');
        titleTxt.textContent = inputBox.value;
        localStorage.setItem('title', inputBox.value);
        inputBox.value = '';
    });

    //Checks each item in the list begins if their beginning letter is higher than it's neighbours.
    //The switches are used to trigger the ordering 'insertBefore' function to correctly place each list item if the above case is true.
    $('button.orderList').on('click', (x) => {
        let switching = true, shouldSwitch, i;
        
        while(switching){
            switching = false;
            for(i=0;i<(listItems.length - 1);i++){
                shouldSwitch = false;
                if (listItems[i].textContent > listItems[i+1].textContent){
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch){
                listItems[i].parentNode.insertBefore(listItems[i + 1], listItems[i]);
                switching = true;
            }
        }
    });
});