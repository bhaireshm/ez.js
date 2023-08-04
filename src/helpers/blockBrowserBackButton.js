function blockBrowserBackButton() {
  if (history) history.pushState(null, null, location.href);
  else console.error("`history` object is not accessible.");
  if (window)
    window.onpopstate = function () {
      history.go(1);
    };
  else console.error("`window` object is not accessible.");
}

module.exports = blockBrowserBackButton;
