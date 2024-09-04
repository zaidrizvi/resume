
let Education = document.getElementById("Education");
let Experience = document.getElementById("Experience");
let skill = document.getElementById("skill");

let skills = document.getElementById("skills");
let skills2 = document.getElementById("skills2");
let skills3 = document.getElementById("skills3");  

function showssection(toshow){
       skills.style.display="none";
       skills2.style.display="none";
       skills3.style.display="none";

       toshow.style.display="block"
}

Experience.addEventListener("click", event => {
    showssection(skills2);
});

skill.addEventListener("click", event => {
    showssection(skills);
});

Education.addEventListener("click", event => {
    showssection(skills3);
});
 

