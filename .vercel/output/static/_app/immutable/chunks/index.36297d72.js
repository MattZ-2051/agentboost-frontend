import{p as i,g as x,a as F,b as r,y as o,t as c,d as $,e as m}from"./index.a462031a.js";import"./ProgressBar.svelte_svelte_type_style_lang.81cfea15.js";import{g as l}from"./navigation.c3684980.js";const v=async({address:t,keyInfo:s})=>(await i("/listings/descriptionfromAddress",{address:t,keyInfo:s})).data,C=async t=>(await i("/listings/create",{...t})).data,k=async({listingId:t,address:s,radius:e,status:a})=>(await i(`/listings/generate-cma/${t}`,{address:s,radius:e,status:a})).data,G=async t=>(await x(`/listings/${t}`)).data,I=async({address:t,bed:s,bath:e,squareFt:a,propertyDescription:n,location:y,listingId:u})=>(await i("/gmc/create",{address:t,bed:s,bath:e,squareFt:a,propertyDescription:n,location:y,listingId:u})).data,T=async({startDate:t,listingId:s})=>(await F("/addToCalender",{startDate:t,listingId:s})).data,f=r(),w=r(),h=r(),g=r(),L=o(G),D=o(v),b=o(C),d=o(I),p=o(k);d.doneData.watch(t=>{w(t.gmcs)});d.failData.watch(t=>{console.log("lising gmc error",t)});p.doneData.watch(t=>{h(t)});p.failData.watch(t=>{console.log("listing cma fail",t)});L.doneData.watch(t=>{var s,e,a,n;((s=t.cma)==null?void 0:s.length)===0&&p({listingId:((e=t.id)==null?void 0:e.toString())||"0",address:t.address,radius:2,status:"Active"}),((a=t.gmcs)==null?void 0:a.length)===0&&d({listingId:((n=t.id)==null?void 0:n.toString())||"0",address:t.formattedAddress,bed:t.bedrooms,bath:t.bathrooms,squareFt:t.bathrooms,propertyDescription:t.propertyDescription,location:"location"}),g(t)});L.failData.watch(t=>{var a,n;const s=(n=(a=t.response)==null?void 0:a.data)==null?void 0:n.message,e={message:s||"Listing not found",background:"variant-filled-error"};c.trigger(e),l("/home")});b.doneData.watch(t=>{const s={message:`Listing for ${t.address} created!`,background:"variant-filled-success"};c.trigger(s),g(t),$(),l(`/listings/${t.id}`)});b.failData.watch(t=>{var a,n;const s=(n=(a=t.response)==null?void 0:a.data)==null?void 0:n.message,e={message:s||"Signup failed",background:"variant-filled-error"};c.trigger(e)});D.doneData.watch(t=>{var s;console.log("result",t),f({propertyDescription:(s=t==null?void 0:t.choices[0])==null?void 0:s.content,zillowInfo:t.zillowInfo})});D.failData.watch(t=>{var a,n;const s=(n=(a=t.response)==null?void 0:a.data)==null?void 0:n.message,e={message:s||"Error generating Listing description",background:"variant-filled-error"};c.trigger(e)});const q=m(null).on(f,(t,s)=>s),E=m(null).on(g,(t,s)=>s).on(w,(t,s)=>t&&s&&{...t,gmcs:s}).on(h,(t,s)=>t&&s&&{...t,cma:s.cma});export{q as $,T as a,L as b,b as c,E as d,D as g};
