// dom - document object model - modelo de documento por objeto 

// capturar elemento por ID

const logo = document.getElementById('logo')


// capturar elemnto por classe

const h1 = document.getElementsByClassName('h1-title')
console.log(h1)

const  post = document.getElementsByClassName('post')
console.log(post[0])

const data = document.querySelector('.post-data')
console.log(data)

const posts = document.querySelectorAll('.post')
console.log(posts[0].innerText)

const strong = document.querySelectorAll('strong')
console.log(strong[4].innerText)