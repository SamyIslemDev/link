const Modification=document.querySelector(".Modification");
const next=document.querySelector(".next");

const passwordModified=document.querySelector(".passwordModified");


const firstInbox=document.querySelector(".passEmail");
const secondInbox=document.querySelector(".passPassword");
const thirdInbox=document.querySelector(".validPassword");

const fin=document.querySelector(".fin");


firstInbox.classList.add("nonValid");
secondInbox.classList.add("nonValid");
thirdInbox.classList.add("nonValid");

next.addEventListener("click",()=>{
    console.log("nick zebi");
})


Modification.addEventListener("click",()=>{
    firstInbox.classList.remove("nonValid");

})

next.addEventListener("click",()=>{
    firstInbox.classList.add("nonValid");
    secondInbox.classList.remove("nonValid");
})



passwordModified.addEventListener("click",()=>{
    secondInbox.classList.add("nonValid");
    thirdInbox.classList.remove("nonValid");
})


fin.addEventListener("click",()=>{
    thirdInbox.classList.add("nonValid");
})


