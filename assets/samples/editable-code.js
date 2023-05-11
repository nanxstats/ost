window.onload = function () {
  const els = document.querySelectorAll("code");
  els.forEach((el) => {
    el.setAttribute("contenteditable", true);
  });
};
