// Replace all font-weight: 700 samples with font-weight: 400
// because some fonts do not have a bold version
window.onload = function () {
  var liveSampleElements = document.querySelectorAll("livesample");
  liveSampleElements.forEach(function (element) {
    if (
      window.getComputedStyle(element, null).getPropertyValue("font-weight") ===
      "700"
    ) {
      element.style.fontWeight = "400";
    }
  });
};
