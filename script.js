
/*THEME*/
const themeToggleBtn = document.getElementById('theme-toggle');
let theme = false;

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light_theme');
  
  if (document.body.classList.contains('light_theme')) {
    theme=true;
    themeToggleBtn.style.color = "#FF5722";
  } else {
    theme = false;
    themeToggleBtn.style.color = "black";
  }
  changecolor(null);
});

/*CHANGEMENT DE PAGE*/

let menu = document.getElementById("menu_page");
let realisations = document.getElementById("realisations_page");
let projets = document.getElementById("competence_page");
let parcours = document.getElementById("parcours_page");

let nav = document.getElementById("nav");
let nav_real = document.getElementById("nav_real");
let nav_proj = document.getElementById("nav_comp");
let nav_parc = document.getElementById("nav_parc");
let nav_acceuil = document.getElementById("nav_acceuil");
let id_select;

let id_list = [menu,realisations,projets,parcours];
let nav_list = [nav_real, nav_parc, nav_proj]

document.getElementById("nav_acceuil").onclick = ()=>{
    changepage(menu); 
    nav.style.display = "none";
}
document.getElementById("realisations").onclick = ()=>{
    changepage(realisations);
    changecolor(nav_real);
}
document.getElementById("competence").onclick = ()=>{
    changepage(projets);
    changecolor(nav_proj);
}
document.getElementById("parcours").onclick = ()=>{
    changepage(parcours);
    changecolor(nav_parc);
}

nav_real.onclick = ()=>{
    changepage(realisations);
    changecolor(nav_real);
    
}
nav_proj.onclick = ()=>{
    changepage(projets);
    changecolor(nav_proj);
}
nav_parc.onclick = ()=>{
    changepage(parcours);
    changecolor(nav_parc);
}
function changecolor(id){
    for (let i = 0; i<nav_list.length; i++){
        if(theme==false){
            nav_list[i].style.border = "#CCCCCC 3px dashed";
        }else{
            nav_list[i].style.border = "#000000 3px dashed";
        }
    }
    if(id != null){
        id.style.border = "#FF7043 3px dashed";
        id_select = id;
    }
    console.log(id);

}


function changepage(id){
for (let i = 0; i<id_list.length; i++){
    id_list[i].style.display = "none";
}
    nav.style.display = "flex";
    id.style.display = "flex";
    
    console.log(id);
    
}

/* MENU CONTEXTUELLE */
const interface = document.getElementById("interface");
const body = document.getElementById("body");
const boutonOff = document.getElementById("exit");
let page;

function activeWindow(id){

    interface.style.display = "flex";
    body.style.overflow = "hidden";
    console.log(id);
    activePage(id);

}

function activePage (id){ // A LANCER SUR LE BOUTON
    page = document.getElementById(id);
    page.style.display = "flex";
    if(theme==false){
        id_select.style.border = "#CCCCCC 3px dashed";
    }else{
        id_select.style.border = "#000000 3px dashed";
    }
}

function disableWindow(){
    disabledPage();
    interface.style.display = "none";
}

function disabledPage (){
    id_select.style.border = "#FF7043 3px dashed";
    page.style.display = "none";
    body.style.overflowY = "auto";
    console.log(page);
}

