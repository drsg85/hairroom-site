import $ from 'jquery';

class Tabs {
    constructor() {
        const tabItem = $(".tabs__list-item");
        const tabItemCurrent = $(".tabs__list-item--current");
        const tabContent = $(".tabs__content");

        this.Tabs();
    }
    Tabs() {
        $('.tabs__list-item').on('click', this.TabsChanged);
    }

    TabsChanged() {
        let tab_id = $(this).attr("data-tab");
        $('.tabs__list-item').removeClass('tabs__list-item--current');
        $('.tabs__content').removeClass('tabs__content--current');
        $(this).addClass('tabs__list-item--current');
        $("#"+tab_id).addClass('tabs__content--current');

    }
}
export default Tabs;