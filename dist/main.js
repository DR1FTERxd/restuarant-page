(()=>{"use strict";function t(t,e,n){const c=document.createElement("li");return c.setAttribute("id",t),c.classList.add(n),c.textContent=e,c}(function(){const e=document.getElementById("content"),n=function(t,e){const n=document.createElement("header");n.setAttribute("id","header");const c=document.createElement("h1");return c.textContent="Turbo Burger",n.appendChild(c),n}();e.appendChild(n);const c=function(e){const n=document.createElement("div");n.setAttribute("id","navbara");const c=document.createElement("ul"),o=t("home","Home","navbar_item"),d=t("menu","Menu","navbar_item"),a=t("contact","Contact","navbar_item");return o.setAttribute("data-tab-target","#homeTab"),d.setAttribute("data-tab-target","#menuTab"),a.setAttribute("data-tab-target","#contactTab"),n.appendChild(c),c.appendChild(o),c.appendChild(d),c.appendChild(a),n}();e.appendChild(c);const o=function(t,e){const n=document.createElement("div");return n.setAttribute("id","screen"),n}();e.appendChild(o);const d=function(t,e){const n=document.createElement("div");n.setAttribute("id","footer");const c=document.createElement("p");return c.textContent="Hope we see you in Turbo burger",n.appendChild(c),n}();e.appendChild(d)})(),function(){const t=document.getElementById("screen"),e=function(){const t=document.createElement("div");t.setAttribute("id","menuTab"),t.setAttribute("data-tab-content","#menu");const e=document.createElement("h1");e.setAttribute("id","menuTxt1"),e.innerHTML="Our new special!";const n=document.createElement("img");n.setAttribute("id","MenuPhoto1"),n.src="/dist/images/menuphoto.png";const c=document.createElement("p");return c.setAttribute("id","menuTxt2"),c.innerHTML="our menu",t.appendChild(e),t.appendChild(n),t.appendChild(c),t}();t.appendChild(e),screen}(),function(){const t=document.getElementById("screen"),e=function(){const t=document.createElement("div");t.setAttribute("id","contactTab"),t.setAttribute("data-tab-content","#contact");const e=document.createElement("h1");e.setAttribute="contactTxt1",e.innerHTML="Contact";const n=document.createElement("p");return n.setAttribute="contactTxt2",n.innerHTML="our number: +47641264682",t.appendChild(e),t.appendChild(n),t}();t.appendChild(e)}(),function(){const t=document.getElementById("screen"),e=function(){const t=document.createElement("div");t.setAttribute("id","homeTab"),t.setAttribute("data-tab-content","#home"),t.setAttribute("class","active");const e=document.createElement("h1");e.setAttribute("id","homeTxt1"),e.innerHTML="Hello and Welcome to Turbo Burger, fast food restuarant.";const n=document.createElement("p");n.setAttribute("id","homeTxt2"),n.innerHTML="The fastest delivery food in the country.";const c=document.createElement("div");c.setAttribute("id","box");const o=document.createElement("img");o.setAttribute("id","photo1"),o.src="./images/screenshot_2022-08-05_13-43-44.png";const d=document.createElement("img");return d.setAttribute("id","photo2"),d.src="./images/screenshot_2022-08-06_15-03-29.png",t.appendChild(e),t.appendChild(n),t.appendChild(c),c.appendChild(o),c.appendChild(d),t}();t.appendChild(e)}(),function(){const t=document.querySelectorAll("[data-tab-target]"),e=document.querySelectorAll("[data-tab-content]");t.forEach((t=>{t.addEventListener("click",(()=>{const n=document.querySelector(t.dataset.tabTarget);e.forEach((t=>{t.classList.remove("active")})),n.classList.add("active")}))}))}()})();