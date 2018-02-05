window.addEventListener("load", function startPageEvent() {

    //These variables are declared to make reading/writing code a cleaner process.
    const listUl = document.querySelectorAll('ul')[0];
    const listItems = listUl.getElementsByTagName('li');
    const listTitle = document.querySelector('#listTitle');
    const form = document.querySelector('#newItemForm');

    //These buttons are not child nodes of the list.
    const orderListBtn = document.querySelector('button.orderList');
    const changeTitleBtn = document.querySelector('button.newTitle');
    const addToListBtn = document.querySelector('button.newItem'); //type='submit'
    const inputBox = document.querySelector('input.newValue'); //Input box

    //Local storage
    loadLocals = () => {
        for(i = 0; i < localStorage.length; i++){
            const li = document.createElement('li');
            const span = document.createElement('span');

            let myJsonObj = localStorage.getItem(localStorage.key(i));

            span.id = JSON.parse(myJsonObj).itemId;
            span.textContent = JSON.parse(myJsonObj).itemName;

            li.appendChild(span);
            listUl.appendChild(li);
            console.log(JSON.parse(myJsonObj));
            }
        };
    loadLocals();

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

        const edit = document.createElement('button');
        edit.className = 'edit'
        edit.textContent = 'E';
        li.appendChild(edit);

        const tickBox = document.createElement('input')
        tickBox.type = 'checkbox';
        tickBox.className = 'tickBox';
        li.appendChild(tickBox);
    }

    //Checks there are items on the list, then enables checks if entry has been ticked('checked').
    function itemCheck() {
        for(let i = 0; i < listItems.length ; i++){
            document.querySelectorAll('.tickBox')[i].addEventListener('change', (x) => {
                const checkbox = x.target;
                const listItemLine = checkbox.parentNode;
                const span = listItemLine.firstElementChild;
        
                if (checkbox.checked) {
                    localStorage.setItem(span.id, JSON.stringify({itemName:span.textContent, itemChecked:true, itemId:span.id}));
                    listItemLine.style.backgroundColor = "grey";
                    listItemLine.style.textDecoration = "line-through"
        
                } else {
                    localStorage.setItem(span.id, JSON.stringify({itemName:span.textContent, itemChecked:false, itemId:span.id}));
                    listItemLine.style.backgroundColor = "";
                    listItemLine.style.textDecoration = "";
                }
            });
        }
    }

    //When creating the order-list button later, it will not treat upper and lower case equally, 
    //this function will help keep the list organized & make sense.
    function upperFirst(string) 
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //Attaches all buttons to each list item
    for(let i=0;i<listItems.length;i++){
        attachButtons(listItems[i]);
    } 
    
    //Checks if list items were checked by accessing localStorage object boolean
    for(let i=0;i<listItems.length;i++){
        if(JSON.parse(localStorage.getItem(localStorage.key(i))).itemChecked == true){
            document.querySelectorAll('.tickBox')[i].checked=true;
        }
        //Applies neccessary changes checked items
        if(document.querySelectorAll('.tickBox')[i].checked){
            listItems[i].style.backgroundColor = "grey";
            listItems[i].style.textDecoration = "line-through"
        } else {
            listItems[i].style.backgroundColor = "";
            listItems[i].style.textDecoration = ""
        }
    }
    
    itemCheck();

    //Adds functionality to the buttons called above.
    listUl.addEventListener('click', (x) => {
        const li = x.target.parentNode;
        const ul = li.parentNode;
        const span = li.firstElementChild;

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
        }
        if(x.target.tagName == 'BUTTON' ){
            let prevContent = span.id;
            console.log(prevContent);
            changeFunc = {
                Edit: () => {
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.value = span.textContent;
                    li.insertBefore(input, span);
                    li.removeChild(span);
                    x.target.textContent = 'S';
                    localStorage.removeItem(prevContent)
                },
                Save: () => {
                    const input = li.firstElementChild;
                    const span = document.createElement('span');
                    let upper = upperFirst(input.value);

                    span.id = 'item'+upper;
                    span.textContent = upper;

                    localStorage.setItem(span.id, JSON.stringify({itemName:upper, itemChecked:false, itemId:span.id}));
                    li.style.backgroundColor = "";
                    li.style.textDecoration = "";
                    
                    li.insertBefore(span, input);
                    li.removeChild(input);
                    x.target.textContent = 'E';
                    console.log(prevContent);
                }
            }
            if(x.target.textContent == 'E'){               
                changeFunc.Edit();
            } else if (x.target.textContent == 'S'){
                changeFunc.Save();
            }
        }
    });

    //Takes the content from the Input box and places into the list if not empty. It then clears the input box.
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const li = document.createElement('li');
        const span = document.createElement('span');
        li.appendChild(span);
        
        let listItemValue = inputBox.value;
        listItemValue = upperFirst(listItemValue);
        span.textContent = listItemValue

        //stop item insertion if box is empty or over 25 characters.
        if (li.textContent != '' && li.textContent.length <= 25){
            span.id = 'item' + listItemValue;
            listUl.appendChild(li);
            
            console.log(li);
            attachButtons(li);

            let tempListObj = {
                itemName: span.textContent,
                itemChecked: false,
                itemId: 'item' + span.textContent,
            };

            localStorage.setItem('item' + tempListObj.itemName, JSON.stringify(tempListObj));

        } else {
            alert("Input must be between 1 and 25 characters long");
        }
        inputBox.value = '';
        itemCheck();
    });

    //Reads input box and places the value into the heading.
    changeTitleBtn.addEventListener('click', () => {
        let titleTxt = document.querySelector('#listTitle');
        titleTxt.textContent = inputBox.value;
        inputBox.value = '';
    });

    //Checks each item in the list begins if their beginning letter is higher than it's neighbours.
    //The switches are used to trigger the ordering 'insertBefore' function to correctly place each list item if the above case is true.
    orderListBtn.addEventListener('click', (x) => {
        let switching = true;
        let shouldSwitch;
        let i;

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