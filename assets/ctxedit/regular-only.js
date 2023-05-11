// Replace all font-weight: 700 samples with font-weight: 400
// because some fonts do not have a bold version
window.onload = function () {
  let elements = document.getElementsByTagName("livesample");
  for (let i = 0; i < elements.length; i++) {
    let style = elements[i].getAttribute("style");
    if (style && /font-weight:\s*700;/.test(style)) {
      let newStyle = style.replace(/(font-weight:\s*)700;/, "$1400;");
      elements[i].setAttribute("style", newStyle);
    }
  }
};
