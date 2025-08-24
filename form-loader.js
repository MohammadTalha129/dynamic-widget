(function(){
  const containerId="dynamic-widget";
  let container=document.getElementById(containerId);
  if(!container){container=document.createElement("div");container.id=containerId;document.body.appendChild(container)}


  fetch("https://dynamic-widget.pages.dev/form.min.html")
    .then(r => r.text())
    .then(html => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://dynamic-widget.pages.dev/form.min.css";
        document.head.appendChild(link);
        
        container.innerHTML = html;
        
        const script = document.createElement("script");
        script.src = "https://dynamic-widget.pages.dev/form.min.js";
        script.defer = true;
        document.body.appendChild(script);
    });
})();