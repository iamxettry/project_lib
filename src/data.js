const Book = [
    {
    id: 1,
    
    title:"Along Came A Spider",
    category: "Crime",
    author:"James Patterson",
    img:"../public/img/dataImg/AlongCameSpider.jpg",
   
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quaerat laborum animi.",
    
},
    {
    id: 2,
    
    title:"समर लभ [Summer Love]",
    category: "Romance",
    author:"J.D Rob",
    img:"../public/img/dataImg/sumlove.jpg",
   
    desc: "There was crowd to see the entrance result in Central Department of Environmental Science, Kirtipur. In the notice board Atit saw the name - Saya in the number one. He did not see Saya but just her name.",
    
},

    {
    id: 3,
    
    title:"One Piece",
    category: "Comic",
    author:"Eiichiro Oda",
    img:"../public/img/dataImg/onepiece.webp",
   
    desc: "Someone has given Dorry the Giant exploding ale and he's not happy. Assuming it was Luffy and crew, he launches an all-out attack and is soundly defeated by the rubbery power of the Gum Gum Rocket.",
    
},
    {
    id: 4,
    
    title:"The Proposal",
    category: "Romance",
    author:"Jasmine Guillory",
    img:"../public/img/dataImg/proposal.jpg",
   
    desc: "There is so much to relate to and throughout the novel, there is a sharp feminist edge. Loved this one, and you will too--New York Times bestselling author Roxane Gay The New",
    
},
    {
    id: 5,
    
    title:"Fang",
    category: "Science",
    author:"James Patterson",
    img:"../public/img/dataImg/fang.jpg",
   
    desc: "Being a kid with wings -- constantly on the run -- has never been easy, and Max and her flock are more tense than ever.Angel says that Fang will be the first to die, and Angel is never wrong. ",
    
},
    {
    id: 6,
    
    title:"Death note",
    category: "Comic",
    author:"Tsugumi Ohba and Takeshi Obata",
    img:"../public/img/dataImg/deathnote.jpg",
   
    desc: "Light Yagami is an ace student with great prospects-and he's bored out of his mind. But all that changes when he finds the Death Note, a notebook dropped by a rogue Shinigami death god.",
    
},
    {
    id: 7,
    
    title:"The Amityville Horror",
    category: "Horror",
    author:"Jay Anson",
    img:"../public/img/dataImg/horror1.jpg",
   
    desc: "'A fascinating and frightening book' ( Los Angeles Times )--the bestselling true story about a house possessed by evil spirits, haunted by psychic phenomena almost too terrible to describe.",
    
},
{
    id: 8,
    
    title:"The Concrete Blonde",
    category: "Crime",
    author:"Michael Connelly",
    img:"../public/img/dataImg/michelconnelly.jpg",
   
    desc: "Detective Harry Bosch was sure he'd shot the serial killer responsible for a string of murders in LA . . . but now, a new crime makes him question his convictions.",
    
},
{
    id: 10,
    
    title:"Dark Matter",
    category: "Science",
    author:"Blake Crouch",
    img:"../public/img/dataImg/black.jpg",
   
    desc: "A mindbending, relentlessly surprising thriller from the author of the bestselling Wayward Pines trilogy. 'Are you happy with your life?' Those are the last words Jason Dessen hears before the masked abductor knocks him unconscious.",
    
},

];

const container = document.getElementById('container')
const btns = document.querySelectorAll('.header--items')
let cat_tittle=document.getElementById('cat-title');
window.addEventListener('DOMContentLoaded', () => {
   
displayBookItems(Book)
})

btns.forEach((btn) => {
btn.addEventListener('click', (e) => {
    const category = e.currentTarget.dataset.id;
    cat_tittle.innerHTML=category;
    const BookCategory = Book.filter((currentElem) => {
        if (currentElem.category === category) {
            return currentElem;
        }
    })
    if (category === 'All') {
        displayBookItems(Book)
    } else {
        displayBookItems(BookCategory)
    }

})
})


function displayBookItems(BookItems) {
let displayBook = BookItems.map(({id,title,img, desc,author,category}) => {

    
    return `<div  class=" w-full mx-auto px-5 rounded-md my-2 ${id%2!=0?" lg:border-r-2 lg:rounded-none border-gray-800":" "} md:w-4/5  md:flex gap-2 justify-between">
    <div class="w-full mt-6 rounded-md">
        <img src=${img} class=" w-full rounded-md" alt="">
    </div>
  
   <div class="mt-5 w-[100%] pl-3">
        <h1 class="text-lg font-serif"> ${title}</h1>
        <h2 class="font-bold" >By :${author}</h2>

        <h1 class="font-bold">Category : ${category}</h1>
        <h1 class="mt-5 font-bold">About</h1>
        <hr/>
        <h1 class="text-[14px]">${desc}</h1>

   </div>
    
</div>`
})
displayBook = displayBook.join("")
container.innerHTML = displayBook
}