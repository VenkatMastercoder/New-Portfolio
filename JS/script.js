let skills = document.getElementById("skills");
let Experience = document.getElementById("Experience");
let Eduction = document.getElementById("Eduction");

let ExperienceContent = document.getElementById("ExperienceContent");
let SkillContent = document.getElementById("SkillContent");
let EductionContent = document.getElementById("EductionContent");

// Tab Switching 

ExperienceContent.classList.add("d-none");
EductionContent.classList.add("d-none");

skills.onclick = function() {
  SkillContent.classList.remove("d-none");
  ExperienceContent.classList.add("d-none");
  EductionContent.classList.add("d-none");
}

Experience.onclick = function() {
  ExperienceContent.classList.remove("d-none");
  SkillContent.classList.add("d-none");
  EductionContent.classList.add("d-none");
}

Eduction.onclick = function() {
  EductionContent.classList.remove("d-none");
  ExperienceContent.classList.add("d-none");
  SkillContent.classList.add("d-none");
}

let typed = new Typed(".auto-input", {
  strings: ["Venkatesan", "Web Developer","Coder"],
  typeSpeed: 150,
  backspeed: 150,
  loop: true
});


let a = document.getElementById("btnxo");
let b = document.getElementById("ul-div");

a.addEventListener("click", function(e){ 
  b.classList.toggle("active");

});
