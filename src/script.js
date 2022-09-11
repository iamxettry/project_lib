

let search=document.getElementById('search');
let search_box_toggle=document.getElementById('search-box-toggle');
let search_box=document.getElementById('search-box');
let main_div=document.getElementById('main-div');

search.addEventListener('click', ()=>{
    search_box_toggle.style.display="flex";     
    search_box.style.border="2px";
    search_box.style.borderColor="gray";
    search_box.style.borderStyle="solid";
})
main_div.addEventListener('click', (e)=>{
   
    if(!search_box.contains(e.target)){
    search_box_toggle.style.display="none";
    search_box.style.border="none";

    }
})


