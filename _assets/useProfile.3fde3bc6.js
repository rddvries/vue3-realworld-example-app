import{r as a,z as e,A as n,B as o,C as t,a as i,k as s,D as l}from"./index.fa5f435f.js";function u({username:s,following:l,onUpdate:u}){const{active:r,run:c}=t((async function(){let t;t=!0===l.value?await async function(t){const i=await a.checkableDelete(`/profiles/${t}/follow`),s=e(i);return s.isOk()?n(s.value.profile):o(s.value)}(s.value):await async function(t){const i=await a.checkablePost(`/profiles/${t}/follow`),s=e(i);return s.isOk()?n(s.value.profile):o(s.value)}(s.value),t.isOk()?u(t.value):await i("login")}));return{followProcessGoing:r,toggleFollow:c}}function r({username:e}){const n=s({});async function o(a){Object.assign(n,a)}return l(e,(async function(){o(await async function(e){return a.get("/profiles/"+e).then((a=>a.profile))}(e.value))}),{immediate:!0}),{profile:n,updateProfile:o}}export{r as a,u};
