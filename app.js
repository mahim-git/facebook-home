const rightAnchor = document.querySelectorAll('.right-nav li a.right-anchor')
const caretDrop = document.querySelector("ul.right-nav-dd")
const caretBtn= document.querySelector("a.caret-btn");
const likeBtnIcon = document.querySelector(".like-btn-icon");
const likeBtn = document.querySelector(".like-btn");
const postArea = document.querySelector(".post-area");
const postCard = document.querySelector(".post-card");
const chatItem = document.querySelector(".chat-list");
caretBtn.addEventListener('click',()=>{
    caretDrop.classList.toggle('open');
});

rightAnchor.forEach(rAnchor=>{
    rAnchor.addEventListener("click",()=>{
        rAnchor.classList.toggle('active-nav');
    })
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:8,
        loop: false,
        nav:true,
        dots:false,
        margin:30,
        center:false,
        autoWidth:true,
        slideBy:8,
        rewind:false,
        autoPlay:false
    });
});

likeBtn.addEventListener('click',()=>{
    likeBtnIcon.classList.toggle('fas');
    if(likeBtnIcon.classList.contains("fas")){
        likeBtn.style.color = "#119AF6"
    }
    else{
        likeBtn.style.color = "#666"
    }
});

//duplicate chat card

document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));
document.getElementById("chat-nav").appendChild(chatItem.cloneNode(true));


