(function(){
  const containerId="dynamic-widget";
  let container=document.getElementById(containerId);
  if(!container){container=document.createElement("div");container.id=containerId;document.body.appendChild(container)}

  Promise.all([
    fetch("https://dynamic-widget.pages.dev/form.min.html").then(r=>r.text()),
    fetch("https://dynamic-widget.pages.dev/form.min.css").then(r=>r.text())
  ]).then(([html,css])=>{
    let style=document.createElement("style");
    style.textContent=css;
    document.head.appendChild(style);
    container.innerHTML=html;
    let script=document.createElement("script");
    script.src="https://dynamic-widget.pages.dev/form.min.js";
    script.defer=true;
    document.body.appendChild(script);
  });
})();