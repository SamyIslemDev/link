console.log("chat est connecté");
const Serv=document.querySelectorAll(".Serv");
console.log(Serv.length);
console.log("en haut");


Serv[1].addEventListener("click",()=>{
  console.log("yo");
})

const chatBox=document.querySelector(".chat-box");

chatBox.classList.add("chatDisparition")

if (Serv) {
    for (let i = 0; i < Serv.length; i++) {
      Serv[i].addEventListener('click', (event) => {
        event.stopPropagation();
        if (chatBox.classList.contains('chatDisparition')) {
          chatBox.classList.remove('chatDisparition');
        }
      });
    }
  }
  
  window.addEventListener('click', (event) => {
    if (!chatBox.classList.contains('chatDisparition') && !event.target.classList.contains('Serv') && !event.target.classList.contains('chat-card') && !event.target.closest('.chat-card')) {
      chatBox.classList.add('chatDisparition');
    }
  });