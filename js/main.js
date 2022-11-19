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


// toggle-skills    overflow-y: scroll;

let btnSkMore = document.getElementById("btn-sk-more");
let btnSkLess = document.getElementById("btn-sk-less");

let lessGroup = document.getElementById("lessGroup");
let moreGroup = document.getElementById("moreGroup");

let skillsCont = document.getElementById("skillsCont");

                    // moreBtn   // toggle OFF to BTN
                    btnSkMore.addEventListener("click", () =>  {
                          btnSkMore.classList.toggle("off");
                          btnSkLess.classList.toggle("off");

                          // lessGroup.classList.toggle("off");
                          moreGroup.classList.toggle("off");


                          
                    });

                    // lessBtn // toggle OFF to BTN
                    btnSkLess.addEventListener("click", () =>  {
                      btnSkMore.classList.toggle("off");
                      btnSkLess.classList.toggle("off");


                      // lessGroup.classList.toggle("off");
                      moreGroup.classList.toggle("off");
                    });








// go Up Button
let goUp = document.querySelector(".goUp");
window.onscroll = function () {
  // console.log(this.scrollY);
  this.scrollY >= 919
  ? goUp.classList.add("UpShow")
  : goUp.classList.remove("UpShow");
};












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



