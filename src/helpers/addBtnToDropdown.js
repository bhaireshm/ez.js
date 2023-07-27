/**
* @param className - class name of the select tag (you can change to id)
* @param text - content for the link
*/

module.exports = function addBtnToDropdown(className, text) {
    let flg = 0;
    $(`.${className}`).on("select2:open", function () {
        flg++;
        if (flg == 1) {
            let $this_html = `<hr style="margin:2px"><a href="javascript:void(0)"
                        onclick="javascript:$('.${className}').select2('close');">${text}</a>`;
            $(".select2-results").append(`<div class='select2-results__option text-center'>${$this_html}</div>`);
        }
    });
}