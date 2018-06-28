import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.body = $("body");
        this.blackout = $(".main-menu--blackout");
        this.mainMenu = $(".main-menu");
        this.mainMenuShown = $(".main-menu--shown");
        this.menuIcon = $(".menu-icon");
        this.menuLinks = $(".main-menu a");
        this.events();
    }
    
    events(e) {
        this.menuIcon.click(
            this.toggleTheMenu.bind(this)
        );
        this.menuLinks.click(
            this.toggleTheMenu.bind(this)
        );
        this.menuLinks.on("tap",
            this.toggleTheMenu.bind(this)
        );
        this.blackout.click(
            this.toggleTheMenu.bind(this)
        );
    }

    toggleTheMenu() {
        this.mainMenu.toggleClass("main-menu--shown");
        this.menuIcon.toggleClass("menu-icon--close-x");
        this.blackout.toggleClass("main-menu--blackout-on");
    }
}

export default MobileMenu;