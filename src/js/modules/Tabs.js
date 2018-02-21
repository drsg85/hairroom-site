import $ from 'jquery';
class Tabs {
    constructor() {
        this.Tabs();
    }
    Tabs() {
       $('.tabs__list-item').on("click", () => {
        var tab_id = $(this).attr('data-tab');
        $('.tabs__list-item').removeClass('tabs__content--current');
        $('.tabs__content').removeClass('tabs__current');
        $(this).addClass('tabs__current');
        $("#"+tab_id).addClass('tabs__current');
       });
    }
}
export default Tabs;