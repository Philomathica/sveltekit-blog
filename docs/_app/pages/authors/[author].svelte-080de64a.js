import{_ as t}from"../../chunks/goodbye-550c1fec.js";import{_ as s}from"../../chunks/hello-a54b36af.js";import{_ as e}from"../../chunks/second-post-86f894d9.js";import{S as a,i as o,s as r,e as n,t as h,c as l,a as c,g as f,d as p,b as i,f as u,E as m,h as d,k as g,n as b,I as j,J as k}from"../../chunks/vendor-1fda6636.js";import{b as v}from"../../chunks/paths-45dac81d.js";function E(t,s,e){const a=t.slice();return a[2]=s[e],a}function M(t){let s,e,a,o,r=t[2].title+"";return{c(){s=n("li"),e=n("a"),a=h(r),this.h()},l(t){s=l(t,"LI",{});var o=c(s);e=l(o,"A",{"sveltekit:prefetch":!0,href:!0});var n=c(e);a=f(n,r),n.forEach(p),o.forEach(p),this.h()},h(){i(e,"sveltekit:prefetch",""),i(e,"href",o=v+"/posts/"+t[2].filename)},m(t,o){u(t,s,o),m(s,e),m(e,a)},p(t,s){2&s&&r!==(r=t[2].title+"")&&d(a,r),2&s&&o!==(o=v+"/posts/"+t[2].filename)&&i(e,"href",o)},d(t){t&&p(s)}}}function O(t){let s,e,a,o,r,i=t[1],v=[];for(let n=0;n<i.length;n+=1)v[n]=M(E(t,i,n));return{c(){s=n("h1"),e=h("Posts from author "),a=h(t[0]),o=g(),r=n("ul");for(let t=0;t<v.length;t+=1)v[t].c()},l(n){s=l(n,"H1",{});var h=c(s);e=f(h,"Posts from author "),a=f(h,t[0]),h.forEach(p),o=b(n),r=l(n,"UL",{});var i=c(r);for(let t=0;t<v.length;t+=1)v[t].l(i);i.forEach(p)},m(t,n){u(t,s,n),m(s,e),m(s,a),u(t,o,n),u(t,r,n);for(let s=0;s<v.length;s+=1)v[s].m(r,null)},p(t,[s]){if(1&s&&d(a,t[0]),2&s){let e;for(i=t[1],e=0;e<i.length;e+=1){const a=E(t,i,e);v[e]?v[e].p(a,s):(v[e]=M(a),v[e].c(),v[e].m(r,null))}for(;e<v.length;e+=1)v[e].d(1);v.length=i.length}},i:j,o:j,d(t){t&&p(s),t&&p(o),t&&p(r),k(v,t)}}}const _=({page:a})=>{const o={"../posts/goodbye.md":t,"../posts/hello.md":s,"../posts/second-post.md":e},r=a.params.author,n=Object.entries(o).filter((([t,s])=>s.metadata.author===r)).map((([t,s])=>{const e=t.split("/"),a=e[e.length-1].replace(".md","");return Object.assign(Object.assign({},s.metadata),{filename:a})}));return{props:{author:r,postsMeta:n}}};function x(t,s,e){let{author:a}=s,{postsMeta:o}=s;return t.$$set=t=>{"author"in t&&e(0,a=t.author),"postsMeta"in t&&e(1,o=t.postsMeta)},[a,o]}class y extends a{constructor(t){super(),o(this,t,x,O,r,{author:0,postsMeta:1})}}export{y as default,_ as load};