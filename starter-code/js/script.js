const btnMenu = document.querySelector(".hamburguer-btn"),
      menu = document.querySelector(".menu");

btnMenu.addEventListener("click", (e)=>{
    menu.classList.toggle("is-active");
    btnMenu.firstElementChild.classList.toggle("none");
    btnMenu.lastElementChild.classList.toggle("none");
    menu.classList.remove("is-not-active");
    if (!menu.classList.contains("is-active")) {
        menu.classList.add("is-not-active");
        menu.classList.remove("is-active");
    }
});



/*document.addEventListener("click", (e) => {
    if(!e.target.matches(".menu a"))return false;

    btnMenu.firstElementChild.classList.remove("none");
    btnMenu.lastElementChild.classList.add("none");    
    menu.classList.remove("is-active");
})*/

function setupResponsiveImage() {
    const imageResponsive = document.querySelector('.technology-image');
    const mediaQuery = window.matchMedia('(min-width: 1200px)');

    const archiveName = imageResponsive.src;
    const parts = archiveName.split('-');
    parts.pop(); 
    const portraitName = parts.join('-') + '-portrait.jpg';
    const landscapeName = parts.join('-') + '-landscape.jpg';
    // console.log(landscapeName);
    // console.log(portraitName);

    function handleChange(e) {

        // console.log(e.matches);
        imageResponsive.src = e.matches ? portraitName : landscapeName;
    }
    
    
    handleChange(mediaQuery);
    mediaQuery.addEventListener('change', handleChange);
}

window.addEventListener('load', setupResponsiveImage);


