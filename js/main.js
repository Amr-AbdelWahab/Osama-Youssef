// toggol ham icon
let ham = document.getElementById("ham");
let nList = document.getElementById("nList");

ham.addEventListener("click", () =>  {

  console.log(ham);
  ham.classList.toggle("toggle-icon");
  console.log(nList);
  nList.classList.toggle("nListOn");

});


// let nLink = document.getElementsByClassName("nLink");

  nList.addEventListener("click", () => {
  nList.classList.remove("nListOn");
  ham.classList.remove("toggle-icon");
});

// animate skill section
// console.log("her");

let skillSec = document.querySelector(".Skills");
let progress = document.querySelectorAll(".prog span");

window.onscroll = function () {
  if (window.scrollY >= skillSec.offsetTop -50){  
    progress.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  
  }


};


// toggle-skills

let btnSkMore = document.getElementById("btn-sk-more");
let btnSkLess = document.getElementById("btn-sk-less");
let btnSkill = document.getElementById("btn-skill");
let toggleSkills = document.getElementsByClassName("toggleskills");

btnSkMore.addEventListener("click", () =>  {
  console.log(toggleSkills);
  btnSkMore.classList.toggle("off");
  btnSkLess.classList.toggle("off");

  toggleSkills.classList.toggle("off");

});



btnSkLess.addEventListener("click", () =>  {
  btnSkMore.classList.toggle("off");
  btnSkLess.classList.toggle("off");

});








// go Up Button

// let up = document.querySelector(".goUp");

// window.onscroll = function () {
//   console.log(this.scrollY);

//   this.scrollY >= 800
//     ? up.classList.add("goUpShow")
//     : up.classList.remove("goUpShow");
// };

// up.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };









// let ham = document.getElementById("ham");
// let dnNav = document.getElementById("dnNav");
// let header = document.getElementById("header");
// ham.addEventListener("click", () => {
//     console.log(dnNav);
//     console.log(ham);
//     ham.classList.toggle("ham-activ");
//     dnNav.classList.toggle("dNavShow");
//     header.classList.toggle("btmBd");
// });

// dnNav.addEventListener("click", ()=>{
//   ham.classList.toggle("ham-activ");
//   dnNav.classList.toggle("dNavShow");
//   header.classList.toggle("btmBd");})



