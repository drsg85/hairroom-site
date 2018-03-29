import $ from 'jquery';
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';

class ScrollSpy {
    constructor() {
        this.navSections = $('.nav-link');
        this.ScrollSpyLinks = $('.scroll-spy__link');
        this.createWaypoints();
    }

    createWaypoints() {
        var self = this;
        this.navSections.each(function() {
            let currentNavSection = this;
            new Waypoint({
                element: currentNavSection,
                handler: function(direction) {
                    if(direction == "down" ) {
                        let matchingSpyLink = "#" + currentNavSection.getAttribute('id') + "-link";
                        self.ScrollSpyLinks.removeClass('scroll-spy__link--current');
                        $(matchingSpyLink).addClass('scroll-spy__link--current');
                    }
                 },
                 offset: ("20%")
            });

            new Waypoint({
                element: currentNavSection,
                handler: function(direction) {
                    if(direction == "up" ) {
                        let matchingSpyLink = "#" + currentNavSection.getAttribute('id') + "-link";
                        self.ScrollSpyLinks.removeClass('scroll-spy__link--current');
                        $(matchingSpyLink).addClass('scroll-spy__link--current');
                    }
                 },
                 offset: ("-20%")
            });

        });
    }
}

export default ScrollSpy;