let menu_btn=document.getElementById('menu--btn');
let menu_burger=document.getElementById('menu--burger');
let Cross=document.getElementById('cross');
let menu_list=document.getElementById("menu--list");
let list_item=document.getElementById('list--item');
let val=false;

menu_btn.addEventListener('click', ()=>{
    val=val?false:true;
    console.log(val);
    if (val==true) {
        menu_burger.style.display="none";
        Cross.style.display='block'
         menu_list.style.display='flex';

        list_item.style.right=3;
        menu_list.addEventListener('click', (e)=>{
            menu_list.style.display="none";
            menu_burger.style.display="block";
            Cross.style.display='none'
            val=false;
        
            
        })
        
    }else{

        menu_burger.style.display="block";

        Cross.style.display='none'
        menu_list.style.display='none';

    }
})

let scroll_up = document.getElementById("scroll--up");

scroll_up.addEventListener("click", ()=>{
    window.scrollTo({top:0, left:0, behavior:"smooth"});
})

const books=[
    {
        id:1,
        title:"Desperation in Death (In death series #55)",
        author:"J.D Rob",
        img:"../public/img/despression.webp",
    },
    {
        id:2,
        title:"Farry Tale",
        author:"Stephen King",
        img:"../public/img/fairyTail.webp",
    },
    {
        id:3,
        title:"Clive Cussler's Hellburner",
        author:"Mike Maden",
        img:"../public/img/clive.webp",
    },
    {
        id:4,
        title:"After the War",
        author:"Anita Frank",
        img:"../public/img/afterTheWar.webp",
    },
    {
        id:5,
        title:"कर्नाली ब्लुज [Karnali Blues]",
        author:"Buddi Sager",
        img:"../public/img/karnali.jpg",
    },
    {
        id:6,
        title:"खुसी [Khusi]",
        author:"Vijay Kumar Panday",
        img:"../public/img/khusi.jpg",
    },
    {
        id:7,
        title:"अन्तर्मनको यात्रा [Antarmanko Yatra]",
        author:"Jagadish Ghimire",
        img:"../public/img/antarman.jpg",
    },
    {
        id:8,
        title:"उलार [Ular]",
        author:"Nayan Raj Pandey",
        img:"../public/img/ullar.jpg",
    },
]

window.addEventListener('DOMContentLoaded', () => {
    displayBooks(books)
})
let new_books=document.getElementById('new-release');
function displayBooks(books) {
    let book=books.map(({ author,title, img})=>{
        return `<div  class="w-4/5 lg:w-full mx-auto px-5">
        <div class="w-full mt-6 rounded-md">
            <img src=${img} class=" w-full rounded-md" alt="">
        </div>
      
        <h1 class="text-lg"> ${title}</h1>
       
       

        <h2 class="font-bold" >By : ${author}</h2>
        
    </div>`
    })
    book= book.join("")
    new_books.innerHTML=book;

}

let login= document.getElementById('login');
let loginPage = document.getElementById('login-page');
let loginCross = document.getElementById('loginCross');
login.addEventListener('click', () => {
    console.log(4);
    loginPage.style.display = 'flex'

})
loginCross.addEventListener('click', () => {
    loginPage.style.display = 'none';
})
loginPage.addEventListener('click', (e) => {
    let container=document.getElementById('inner-card');

    if (!container.contains(e.target)) {
    loginPage.style.display = 'none';
        
    }
})

let account_login=document.getElementById('account--login');
let account_create=document.getElementById('account--create');
let signUppage=document.getElementById('signUpPage');
let loginbox=document.getElementById('loginBox');
account_login.addEventListener("click", ()=>{
    signUppage.style.display="none";
    loginbox.style.display='flex';
    account_login.style.display="none";
    account_create.style.display="inline-block";
})
account_create.addEventListener("click", ()=>{
    signUppage.style.display="flex";
    loginbox.style.display='none';
    account_login.style.display="inline-block";
    account_create.style.display="none";
})

const username=document.getElementById('username');
const password=document.getElementById('password');
const submitbtn = document.getElementById('submit');
const inp=document.querySelectorAll('input');



submitbtn.addEventListener("click", ()=>{
   var name=document.myform.username.value;
   var password=document.myform.password.value;

   if ((name == null || name =="") && (password==null ||password=="")) {
        alert("Name cannot be blank");      
   } else if(password.length<6) {
    alert("Passwor must be at least 6 characters long.")
    
   }
})


