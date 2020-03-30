var hamburger_Icon= document.querySelector('.side_navigation_mobile');
var side_nav_text= document.querySelector('.side_navigation_mobile__options');
var i=0;


function show_Side_Nav(show){
    hamburger_Icon.style.display= "block";
  
};

function no_show_Side_Nav(no_show){
    hamburger_Icon.style.display= "none";

};




    
    document.getElementById('side-nav').addEventListener("click",show_Side_Nav);







