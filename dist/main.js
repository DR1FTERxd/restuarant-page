(()=>{"use strict";function e(e,t,n){const c=document.createElement("li");return c.setAttribute("id",e),c.classList.add(n),c.textContent=t,c}const t=function(){const e=document.getElementById("screen"),t=function(){const e=document.createElement("div");e.setAttribute("id","menuTab");const t=document.createElement("div");return t.setAttribute("id","menuTxt"),t.innerHTML="menutxt",e.appendChild(t),e}();return e.appendChild(t),screen};(function(){const t=document.getElementById("content"),n=function(e,t){const n=document.createElement("header");n.setAttribute("id","header");const c=document.createElement("h1");return c.textContent="Turbo Burger",n.appendChild(c),n}();t.appendChild(n);const c=function(t){const n=document.createElement("div");n.setAttribute("id","navbara");const c=document.createElement("ul"),d=e("home","home","navbar_item"),o=e("menu","menu","navbar_item"),i=e("contact","contact","navbar_item");return n.appendChild(c),c.appendChild(d),c.appendChild(o),c.appendChild(i),n}();t.appendChild(c);const d=function(e,t){const n=document.createElement("div");return n.setAttribute("id","screen"),n.textContent="aaa",n}();t.appendChild(d);const o=function(e,t){const n=document.createElement("div");n.setAttribute("id","footer");const c=document.createElement("p");return c.textContent="Hope we see you in Turbo burger",n.appendChild(c),n}();t.appendChild(o)})(),t(),function(){const e=document.getElementById("home"),n=document.getElementById("menu"),c=document.getElementById("contact");e.addEventListener("click",loadHome),n.addEventListener("click",t),c.addEventListener("click",loadContact)}()})();