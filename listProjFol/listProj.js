window.addEventListener("load", function startPageEvent() {

    //These variables are declared to make reading/writing code a cleaner process.
    const listUl = document.querySelectorAll('ul')[0];
    const listItems = listUl.children;
    const listTitle = document.querySelector('#listTitle');
    const form = document.querySelector('#newItemForm');

    //These buttons are not child nodes of the list.
    const orderListBtn = document.querySelector('button.orderList');
    const changeTitleBtn = document.querySelector('button.newTitle');
    const addToListBtn = document.querySelector('button.newItem'); //type='submit'
    const newVal = document.querySelector('input.newValue'); //Input box

    //Creates & appends buttons to list items then assigns the class name and text content.
    function attachButtons(li){
        let up = document.createElement('input');
        up.className = 'up';
        up.id = 'funcBtn'
        up.type = 'image';
        up.src = "listProjFol/UpArrow.png"
        li.appendChild(up);

        let down = document.createElement('input');
        down.className = 'down';
        down.id = 'funcBtn'
        down.type = 'image';
        down.src = "listProjFol/DownArrow.png"
        li.appendChild(down);

        let remove = document.createElement('input');
        remove.className = 'remove';
        remove.id = 'funcBtn'
        remove.type = 'image';
        remove.src = "listProjFol/RemoveBtn.png"
        li.appendChild(remove);

        let tickBox = document.createElement('input')
        tickBox.type = 'checkbox';
        tickBox.className = 'complete';
        li.appendChild(tickBox);
    }

    for(let i=0;i<listItems.length;i++){
        attachButtons(listItems[i]);
    }

    //Adds functionality to the buttons called above.
    listUl.addEventListener('click', (x) => {
        if(x.target.tagName == 'INPUT'){
            let li = x.target.parentNode;
            let ul = li.parentNode;
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
    });

    //Gives the user a chance to tick/cross off items on the list by watching if the tickbox is checked.
    listUl.addEventListener('change', (x) => {
        const checkbox = x.target;
        const listItemLine = checkbox.parentNode;

        if (checkbox.checked) {
            listItemLine.style.backgroundColor = "grey";
            listItemLine.style.color = "black";
            listItemLine.style.textDecoration = "line-through"
        } else {
            listItemLine.style.backgroundColor = "";
            listItemLine.style.color = "black";
            listItemLine.style.textDecoration = ""
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
        let listItemVar = newVal.value;
        listItemVar = upperFirst(listItemVar);

        li.textContent = listItemVar

        //stop item insertion if box is empty or over 20 characters.
        if (li.textContent != '' && li.textContent.length <= 20){
            listUl.appendChild(li);
        } else {
            alert("Input must be between 1 and 20 characters long");
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

    //Creates an array to store in each list item. It then sorts it from within the array and appends it to the list again.
    orderListBtn.addEventListener('click', () => {
        let listArr = [];
        for (let i = 0; i < listItems.length; i++ ){  
            listArr[i] = listItems[i].textContent;
        }
        console.log(listArr);
        listArr.sort();
        console.log(listArr);

        //Removes the unordered list and replaces it with the ordered list from the array.
        for (let item of listArr){
            listUl.removeChild(document.querySelectorAll('li')[0]);
            let li = document.createElement('li');
            li.innerHTML = item;
            listUl.appendChild(li);
            attachButtons(li);
        }
    });
});