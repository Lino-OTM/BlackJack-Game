const miModulo=(()=>{"use strict";let e=[];const t=["C","D","H","S"],n=["A","J","Q","K"];let o=[];const a=document.querySelector("#btnPedir"),r=document.querySelector("#btnDetener"),s=(document.querySelector("#btnNuevo"),document.querySelectorAll(".divCartas")),l=document.querySelectorAll("small"),d=()=>{e=[];for(let n=2;n<=10;n++)for(let o of t)e.push(n+o);for(let o of t)for(let t of n)e.push(t+o);return _.shuffle(e)},c=()=>{if(0===e.length)throw"No hay cartas en el deck";return e.pop()},u=(e,t)=>(o[t]=o[t]+(e=>{const t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t})(e),l[t].innerText=o[t],o[t]),i=(e,t)=>{const n=document.createElement("img");n.src=`assets/cartas/${e}.png`,n.classList.add("carta"),s[t].append(n)},h=e=>{let t=0;do{const e=c();t=u(e,o.length-1),i(e,o.length-1)}while(t<e&&e<=21);(()=>{const[e,t]=o;setTimeout(()=>{t===e?alert("Es un empate!"):e>21?alert("La computadora gana!"):t>21?alert("El jugador gana!"):alert("La computadora gana!")},100)})()};return a.addEventListener("click",()=>{const e=c(),t=u(e,0);i(e,0),t>21?(console.warn("Te has pasado de 21 puntos!"),a.disabled=!0,r.disabled=!0,h(t)):21===t&&(console.warn("Has conseguido 21 puntos!"),a.disabled=!0,r.disabled=!0,h(t))}),r.addEventListener("click",()=>{a.disabled=!0,r.disabled=!0,h(o[0])}),{nuevoJuego:(t=2)=>{e=d(),o=[];for(let e=0;e<t;e++)o.push(0);l.forEach(e=>e.innerText=0),s.forEach(e=>e.innerHTML=""),a.disabled=!1,r.disabled=!1}}})();