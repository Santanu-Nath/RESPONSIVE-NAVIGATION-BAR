const humburger = document.querySelector('.humburger');
const ul = document.querySelector('ul');

humburger.addEventListener('click',()=>{
    ul.classList.toggle('ham_active');

    let ham_child = hamburger.firstElementchild;
    if(ul.classList.contains('ham_active')){
        ham_child.classList.replace('fa-bars','fa-xmark');
    }
    else{
        ham_child.classList.replace('fa-xmark','fa-bars');

    }
})