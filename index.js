// //get element by ID

// // const title = document.getElementById('main heading')
// //  console.log(title)

//  //get element by classname

// //  const listItems= document.getElementsByClassName('list-items')

// //  console.log(listItems)

//  //get element by tagname()

// //  const listItems = document.getElementsByTagName('li')

// //  console.log(listItems)
// //query selector


// // const container = document.querySelector('div')

// // console.log(container)

// //query selector all

// // const container = document.querySelectorAll('div')
// // console.log(container)


//                     //Dom manipulation
// // const title =  document.querySelector('#h1')

// // title.style.color= 'red' 
// // const listItem = document.querySelectorAll('.list-items');

// // for (i=0; i < listItem.length;i++){
// //     listItem[i].style.fontSize = '10rem'
// // }

// // console.log (listItem)

// const ul = document.querySelector('ul')
// const li = document.createElement('li')

// ul.append(li)
// li.innerText = 'X-Men';
// li.setAttribute('id','main-heading')
// li.removeAttribute('id');
// li.classList.add('list-items')
// const title = document.querySelector('#main-heading')

// console.log(title.getAttribute('id'))
// // const firstListItem =  document.querySelector('.list-items')

// // console.log(firstListItem.innerText)
// // console.log(firstListItem.innerHTML)
// // console.log(firstListItem.textContent)


// li.remove();




//let ul = document.querySelector('ul')

// console.log(ul.parentNode.parentNode)
// console.log(ul.parentElement.parentElement)


// const html = document.document.Element;
// console.log(html.parentNode);
// console.log(html.parentElement)


// let ul =document.querySelector('ul')
// const div = document.querySelector('div')
// // console.log(ul.firstChild)
// // console.log(ul.childNodes)
// // console.log(ul.lastChild)

// // //ul.firstChild.style.backgroundColor = 'blue'
// // ul.childNodes[1].style.backgroundColor = 'blue'
// // console.log(ul.children)
// // console.log(ul.firstElementChild)
// // console.log(ul.lastElementChild)
// console.log(div.childNodes)
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

const buttonTwo = document.querySelector('.btn-2')
function alertBtn(){
    alert('I also Love js nigga')
}
buttonTwo.addEventListener('click', alertBtn)


 const newBackGroundColor  = document.querySelector('.box-3')
function changeBgColor(){
    newBackGroundColor.style.backgroundColor = 'green'
}

newBackGroundColor.addEventListener('mouseover',changeBgColor)
























