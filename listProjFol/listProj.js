window.addEventListener("load", function startPageEvent() {

    //These variables are declared to make reading/writing code a cleaner process.
    const $listUl = $('ul');
    const listItems = document.getElementsByTagName('li');
    const $form = $('#newItemForm');

    //These are not child nodes of the list.
    const $orderListBtn = $('button.orderList');
    const $changeTitleBtn = $('button.newTitle');
    const inputBox = document.querySelector('input.newValue'); //Input box

    //Load localStorage
    loadLocals = () => {
        for(i = 0; i < localStorage.length; i++){
            const li = document.createElement('li');
            const span = document.createElement('span');
            let myJsonObj = localStorage.getItem(localStorage.key(i));

            span.id = JSON.parse(myJsonObj).itemId;
            span.textContent = JSON.parse(myJsonObj).itemName;

            li.appendChild(span);
            $listUl.append(li);
            attachButtons(li);
        }
    }
    loadLocals();
    tickTrue();

    //Creates & appends buttons to list items then assigns the class name and text content.
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
    }

    //Takes the info from ticked/non-ticked items and stores it into localStorage
    $('li').each(function() {
        $('.tickBox').on('change', (x) => {
            const checkbox = x.target;
            const listItemLine = checkbox.parentNode;
            const span = listItemLine.firstElementChild;
            
            if (checkbox.checked) {
                localStorage.setItem(span.id, JSON.stringify({itemName:span.textContent, itemChecked:true, itemId:span.id}));
            } else {
                localStorage.setItem(span.id, JSON.stringify({itemName:span.textContent, itemChecked:false, itemId:span.id}));
            }
            tickTrue();
        });
    });

    //Finds ticked entries and applies changes
    function tickTrue() {
        for(i = 0; i < localStorage.length; i++){
            if(JSON.parse(localStorage.getItem(localStorage.key(i))).itemChecked == true){
                document.querySelectorAll('.tickBox')[i].checked=true;
                document.getElementsByTagName('li')[i].style.backgroundColor = "grey";
                document.getElementsByTagName('li')[i].style.textDecoration = "line-through"
            } else {
                document.querySelectorAll('.tickBox')[i].checked=false;
                document.getElementsByTagName('li')[i].style.backgroundColor = "";
                document.getElementsByTagName('li')[i].style.textDecoration = "";
            }
        }
    }
    
    //All new entries will use this to capitalize the first letter
    upperFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    //Adds functionality to buttons.
    $listUl.on('click', (x) => {
        const li = x.target.parentNode;
        const ul = li.parentNode;
        const span = li.firstElementChild;
        let prevContent = span.id;

        if(x.target.tagName == 'INPUT'){
            if(x.target.className == 'up'){   
                let prevLi = li.previousElementSibling; 
                if(prevLi){
                    ul.insertBefore(li, prevLi);
                }            
            }
            if(x.target.className == 'down'){
                let nextLi = li.nextElementSibling;
                ul.insertBefore(li, nextLi.nextElementSibling);
            }
            if(x.target.className == 'remove'){
                ul.removeChild(li);
                for(let i = 0; i < localStorage.length; i++){
                    if(span.id == localStorage.key(i)){
                        localStorage.removeItem(localStorage.key(i));
                    }
                }
            }
            if(x.target.className == 'edit'){
                li.querySelector('.edit').style.display = 'none';
                li.querySelector('.save').style.display = 'block';

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

                const input = li.firstElementChild;
                const span = document.createElement('span');
                let upper = upperFirst(input.value);

                span.id = 'item'+upper;
                span.textContent = upper;

                localStorage.setItem(span.id, JSON.stringify({itemName:upper, itemChecked:false, itemId:span.id}));
                li.querySelector('.tickBox').checked=false;
                tickTrue();
                
                li.insertBefore(span, input);
                li.removeChild(input);
            }
        }
    });

    //Takes the content from the Input box and places into the list if not empty. It then clears the input box.
    $form.on('submit', (e) => {
        let submitEntry = true;
        e.preventDefault();
        const li = document.createElement('li');
        const span = document.createElement('span');
        li.appendChild(span);
        
        let listItemValue = inputBox.value;
        listItemValue = upperFirst(listItemValue);
        span.textContent = listItemValue

        for(i=0;i<listItems.length;i++){
            if(li.textContent == listItems[i].textContent){
                submitEntry = false;
            }
        }

        //stop entry insertion if box is not between 1 to 25 characters or is already on the list.
        if (li.textContent != '' && li.textContent.length <= 25 && submitEntry == true){
            span.id = 'item' + listItemValue;
            $listUl.append(li);
          
            console.log(li);
            attachButtons(li);

            let tempListObj = {
                itemName: span.textContent,
                itemChecked: false,
                itemId: 'item' + span.textContent,
            };

            localStorage.setItem('item' + tempListObj.itemName, JSON.stringify(tempListObj));

        } else {
            alert("Entry must be between 1 to 25 characters long and not already be on the list");
        }

        inputBox.value = '';
    });

    //Reads input box and places the value into the heading.
    $changeTitleBtn.on('click', () => {
        const titleTxt = document.querySelector('#listTitle');
        titleTxt.textContent = inputBox.value;
        inputBox.value = '';
    });

    //Checks each item in the list begins if their beginning letter is higher than it's neighbours.
    //The switches are used to trigger the ordering 'insertBefore' function to correctly place each list item if the above case is true.
    $orderListBtn.on('click', (x) => {
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