import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class SmoothScrolling {
    constructor() {
        this.menuLinks = $('.main-menu a');
        this.scrollSpyLinks = $('.scroll-spy__link');
        this.addSmoothScrolling();
    }

    addSmoothScrolling() {
        this.menuLinks.smoothScroll({
            offset: -40
        });

        this.scrollSpyLinks.smoothScroll({
            offset: -40
        });
    }
}

export default SmoothScrolling;