console.log("ça marche");

const Appointments=document.querySelector(".Appointments");
const rendezVous=document.querySelector(".Rendez-Vous");


Appointments.classList.add("toggle")

rendezVous.addEventListener("click", () => {
    Appointments.classList.toggle("toggle");
  });
  
  document.addEventListener("click", (event) => {
    const isClickInside = rendezVous.contains(event.target);
  
    if (!isClickInside && !Appointments.classList.contains("toggle")) {
      Appointments.classList.add("toggle");
    }
  });