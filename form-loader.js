(function(){
  const containerId = "dynamic-widget";
  let container = document.getElementById(containerId);
  if(!container){
    container = document.createElement("div");
    container.id = containerId;
    document.body.appendChild(container);
  }
  Promise.all([
    fetch("https://dynamic-widget.pages.dev/form.min.html").then(r => r.text()),
    fetch("https://dynamic-widget.pages.dev/form-critical.min.css").then(r => r.text())
  ]).then(([html, css]) => {
    let styleTag = document.querySelector("style");
    if(!styleTag){
      styleTag = document.createElement("style");
      document.head.appendChild(styleTag);
    }
    styleTag.textContent += "\n" + css;
    container.innerHTML = html;
    let linkTag = document.createElement("link");
    linkTag.rel = "stylesheet";
    linkTag.href = "https://dynamic-widget.pages.dev/form.min.css";
    document.head.appendChild(linkTag);
    const script = document.createElement("script");
    script.src = "https://dynamic-widget.pages.dev/form.min.js";
    script.defer = true;
    document.body.appendChild(script);
  });
})();