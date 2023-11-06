import{ai as M,aj as x,I as v,N as S}from"./index.617133b8.js";function P(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function b(t){const o=t-1;return o*o*o+1}function j(t,o){var p={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&o.indexOf(e)<0&&(p[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)o.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(p[e[n]]=t[e[n]]);return p}function U(t,{delay:o=0,duration:p=400,easing:e=M}={}){const n=+getComputedStyle(t).opacity;return{delay:o,duration:p,easing:e,css:a=>`opacity: ${a*n}`}}function q(t,{delay:o=0,duration:p=400,easing:e=b,x:n=0,y:a=0,opacity:h=0}={}){const d=getComputedStyle(t),l=+d.opacity,c=d.transform==="none"?"":d.transform,s=l*(1-h),[r,$]=x(n),[y,f]=x(a);return{delay:o,duration:p,easing:e,css:(u,g)=>`
			transform: ${c} translate(${(1-u)*r}${$}, ${(1-u)*y}${f});
			opacity: ${l-s*g}`}}function B(t,{delay:o=0,duration:p=400,easing:e=b,axis:n="y"}={}){const a=getComputedStyle(t),h=+a.opacity,d=n==="y"?"height":"width",l=parseFloat(a[d]),c=n==="y"?["top","bottom"]:["left","right"],s=c.map(i=>`${i[0].toUpperCase()}${i.slice(1)}`),r=parseFloat(a[`padding${s[0]}`]),$=parseFloat(a[`padding${s[1]}`]),y=parseFloat(a[`margin${s[0]}`]),f=parseFloat(a[`margin${s[1]}`]),u=parseFloat(a[`border${s[0]}Width`]),g=parseFloat(a[`border${s[1]}Width`]);return{delay:o,duration:p,easing:e,css:i=>`overflow: hidden;opacity: ${Math.min(i*20,1)*h};${d}: ${i*l}px;padding-${c[0]}: ${i*r}px;padding-${c[1]}: ${i*$}px;margin-${c[0]}: ${i*y}px;margin-${c[1]}: ${i*f}px;border-${c[0]}-width: ${i*u}px;border-${c[1]}-width: ${i*g}px;`}}function R(t){var{fallback:o}=t,p=j(t,["fallback"]);const e=new Map,n=new Map;function a(d,l,c){const{delay:s=0,duration:r=_=>Math.sqrt(_)*30,easing:$=b}=v(v({},p),c),y=d.getBoundingClientRect(),f=l.getBoundingClientRect(),u=y.left-f.left,g=y.top-f.top,i=y.width/f.width,O=y.height/f.height,k=Math.sqrt(u*u+g*g),m=getComputedStyle(l),C=m.transform==="none"?"":m.transform,F=+m.opacity;return{delay:s,duration:S(r)?r(k):r,easing:$,css:(_,w)=>`
				opacity: ${_*F};
				transform-origin: top left;
				transform: ${C} translate(${w*u}px,${w*g}px) scale(${_+(1-_)*i}, ${_+(1-_)*O});
			`}}function h(d,l,c){return(s,r)=>(d.set(r.key,s),()=>{if(l.has(r.key)){const $=l.get(r.key);return l.delete(r.key),a($,s,r)}return d.delete(r.key),o&&o(s,r,c)})}return[h(n,e,!1),h(e,n,!0)]}export{U as a,R as b,b as c,P as d,q as f,B as s};