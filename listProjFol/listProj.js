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
    const newVal = document.querySelector('input.newValue'); //Input box

    //Creates & appends buttons to list items then assigns the class name and text content.
    function attachButtons(li){
        function createListFunction(elementName, elementClass, elementSrc){
            const element = document.createElement(elementName);
            element.className = elementClass;
            element.id = 'funcBtn';
            element.type = 'image';
            element.src = elementSrc;
            return element;
        }
        const up = createListFunction('input', 'up', 'listProjFol/UpArrow.png');
        li.appendChild(up);

        const down = createListFunction('input', 'down', 'listProjFol/DownArrow.png');
        li.appendChild(down);

        const remove = createListFunction('input', 'remove', 'listProjFol/RemoveBtn.png');
        li.appendChild(remove);

        let edit = document.createElement('button');
        edit.className = 'edit'
        edit.textContent = 'E';
        li.appendChild(edit);

        let tickBox = document.createElement('input')
        tickBox.type = 'checkbox';
        li.appendChild(tickBox);
    }

    for(let i=0;i<listItems.length;i++){
        attachButtons(listItems[i]);
    }

    //Adds functionality to the buttons called above.
    listUl.addEventListener('click', (x) => {
        let li = x.target.parentNode;
        let ul = li.parentNode;
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
            }
        }
        if(x.target.tagName == 'BUTTON' ){
            if(x.target.textContent == 'E'){               
                const span = li.firstElementChild;
                const input = document.createElement('input');
                input.type = 'text';
                input.value = span.textContent;
                li.insertBefore(input, span);
                li.removeChild(span);
                x.target.textContent = 'S';
            } else if (x.target.textContent == 'S'){
                const input = li.firstElementChild;
                const span = document.createElement('span');
                span.textContent = input.value;
                li.insertBefore(span, input);
                li.removeChild(input);
                x.target.textContent = 'E';
            }
        }
    });

    //Gives the user a chance to tick/cross off items on the list by watching if the tickbox is checked.
    listUl.addEventListener('change', (x) => {
        const checkbox = x.target;
        const listItemLine = checkbox.parentNode;

        if (checkbox.checked) {
            listItemLine.style.backgroundColor = "grey";
            listItemLine.style.textDecoration = "line-through"
            listItemLine.setAttribute('id', 'listChecked');
        } else {
            listItemLine.style.backgroundColor = "";
            listItemLine.style.textDecoration = ""
            listItemLine.setAttribute('id', 'listUnchecked');
        }
    });

    //When creating the order-list button later, it will not treat upper and lower case equally, 
    //this function will help keep the list organized & make sense.
    function upperFirst(string) 
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //Takes the content from the Input box and places into the list if not empty. It then clears the input box.
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let li = document.createElement('li');
        let span = document.createElement('span');
        li.appendChild(span);
        let listItemVar = newVal.value;
        listItemVar = upperFirst(listItemVar);

        span.textContent = listItemVar

        //stop item insertion if box is empty or over 20 characters.
        if (li.textContent != '' && li.textContent.length <= 25){
            listUl.appendChild(li);
        } else {
            alert("Input must be between 1 and 25 characters long");
        }
        newVal.value = '';
        attachButtons(li);
    });

    //Reads input box and places the value into the heading.
    changeTitleBtn.addEventListener('click', () => {
        let titleTxt = document.querySelector('#listTitle');
        titleTxt.textContent = newVal.value;
        newVal.value = '';
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