import{w as n}from"./index.2333fd5d.js";function a(){const{subscribe:i,set:t,update:e}=n([]);return{subscribe:i,set:t,update:e,trigger:r=>e(s=>(s.push(r),s)),close:()=>e(r=>(r.length>0&&r.shift(),r)),clear:()=>t([])}}const o=a();export{o as m};
