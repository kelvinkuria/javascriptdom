//get element by ID

// const title = document.getElementById('main heading')
//  console.log(title)

 //get element by classname

//  const listItems= document.getElementsByClassName('list-items')

//  console.log(listItems)

 //get element by tagname()

//  const listItems = document.getElementsByTagName('li')

//  console.log(listItems)
//query selector


// const container = document.querySelector('div')

// console.log(container)

//query selector all

// const container = document.querySelectorAll('div')
// console.log(container)


                    //Dom manipulation
// const title =  document.querySelector('#h1')

// title.style.color= 'red' 
const listItem = document.querySelectorAll('.list-items');

for (i=0; i < listItem.length;i++){
    listItem[i].style.fontSize = '10rem'
}

console.log (listItem)