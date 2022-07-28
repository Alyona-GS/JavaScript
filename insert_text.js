function insertText(el, obj) {
  elements = Array.from(el.children);
  elements.forEach (item => {

    attr = item.getAttribute("data-field");

    if (attr) {
      if (!obj[attr]) { throw `No attr in object: ${attr}` };

      item.textContent = obj[attr];
    }
  });
}