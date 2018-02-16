import $ from 'jquery';

class ScrollSection {
    constructor() {
        this.link = $(".main-menu a");
        this.mainMenu = $(".main-menu");
        this.events();
    }

    events() {
        this.link.click(function(e) {
            e.preventDefault();
            var section = $(this).attr("href");
            $("html, body").animate({
                scrollTop: $(section).offset().top
            }, 800);
        });
    }
}

export default ScrollSection;