(function() {
    var closeMenu = document.getElementById("close-menu");
    var openMenu = document.getElementById("open-menu");
    var menuList = document.getElementById("menu-top");
    closeMenu.addEventListener("click", function(e){
        e.preventDefault();
        menuList.classList.add('menu-top__list--close');
    });
    openMenu.addEventListener("click", function(e){
        e.preventDefault();
        menuList.classList.remove('menu-top__list--close');
    });
})();