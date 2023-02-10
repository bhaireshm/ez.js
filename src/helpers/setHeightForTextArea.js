export function setHeightTextarea() {
  $("textarea")
    .on("change keyup keydown paste cut", function () {
      $(this).height(0).height(this.scrollHeight);
    })
    .find("textarea")
    .change();
}