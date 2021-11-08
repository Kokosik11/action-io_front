var K=Object.defineProperty,q=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var J=(a,i,s)=>i in a?K(a,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[i]=s,b=(a,i)=>{for(var s in i||(i={}))W.call(i,s)&&J(a,s,i[s]);if(V)for(var s of V(i))X.call(i,s)&&J(a,s,i[s]);return a},y=(a,i)=>q(a,z(i));import{j as L,r as n,L as P,s as c,b as O,u as M,a as _,S as $,R as I,c as ee,d as te,H as se}from"./vendor.aeab2ba5.js";const re=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}};re();const ae=a=>{let i=document.cookie.match(new RegExp("(?:^|; )"+a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return i?decodeURIComponent(i[1]):void 0},R=(a,i,s={})=>{s=b({path:"/"},s),s.expires instanceof Date&&(s.expires=s.expires.toUTCString());let d=encodeURIComponent(a)+"="+encodeURIComponent(i);for(let o in s){d+="; "+o;let r=s[o];r!==!0&&(d+="="+r)}document.cookie=d},ie=a=>{R(a,"",{"max-age":-1})};var F={getCookie:ae,setCookie:R,deleteCookie:ie};var G="data:image/png;base64,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",ne="./assets/unknown-avatar.16fe43d3.png";const e=L.exports.jsx,t=L.exports.jsxs,D=a=>{const[i,s]=n.exports.useState();return n.exports.useEffect(()=>{let d=JSON.parse(localStorage.getItem("currentUser"));s(d.username)},[]),t("div",{className:"Header",children:[t(P,{to:"/",className:"Logo",children:[e("img",{src:G,alt:"Logo"}),e("h1",{children:"Action.io"})]}),a.back&&e(P,{to:`/user/${a.back}`,children:"Back"}),t("div",{className:"user-details",children:[t("div",{className:"welcome-phrase",children:["Lets do this, ",e("button",{children:i})]}),e("img",{className:"avatar",src:a.avatar?a.avatar:ne,alt:"avatar"})]})]})};var Z="./assets/Edit-Square.14a84e7c.svg";const ce=a=>{const[i,s]=n.exports.useState([]);n.exports.useEffect(()=>{let r=JSON.parse(localStorage.getItem("currentUser"));r.projects&&s([...r.projects])},[]);const d=new Date,o=r=>{let p=Math.trunc((d-new Date(r))/1e3/60/60);return p>24*30?t("span",{children:[Math.trunc(p/24/30)," months after"]}):p>24*7?t("span",{children:[Math.trunc(p/24/7)," weeks after"]}):p>24?t("span",{children:[Math.trunc(p/24)," days after"]}):t("span",{children:[p," hours after"]})};return e("div",{className:"actionplace",children:t("div",{className:"actionplace-content",children:[e("div",{className:"action-create",children:t("button",{onClick:()=>a.handleButtonClick(3),children:[e("img",{src:Z,alt:"Edit Square icon"}),"Add project"]})}),i&&i.map(r=>t(P,{to:`/project/${r.id}`,className:"Action",children:[t("div",{className:"action-heading",children:[t("div",{className:"daylefts",children:[e("div",{className:"circle red"}),e("div",{className:"daylefts-content",children:o(r.atCreated)})]}),t("div",{className:"action-title",children:[e("h2",{children:r.title}),e("div",{className:"description",children:r.description})]})]}),t("div",{className:"mini-statistic",children:["Actions: ",r.actions.length]})]},r.id))]})})},oe=a=>{const[i,s]=n.exports.useState([...a.searchProjects]);n.exports.useEffect(()=>{s(a.searchProjects)},[a.searchProjects]);const d=new Date,o=r=>{let p=Math.trunc((d-new Date(r))/1e3/60/60);return p>24*30?t("span",{children:[Math.trunc(p/24/30)," months after"]}):p>24*7?t("span",{children:[Math.trunc(p/24/7)," weeks after"]}):p>24?t("span",{children:[Math.trunc(p/24)," days after"]}):t("span",{children:[p," hours after"]})};return e("div",{className:"actionplace",children:e("div",{className:"actionplace-content",children:i&&i.map(r=>t(P,{to:`/project/${r.id}`,className:"Action",children:[t("div",{className:"daylefts",children:[e("div",{className:"circle red"}),e("div",{className:"daylefts-content",children:o(r.atCreated)})]}),t("div",{className:"action-title",children:[e("h2",{children:r.title}),e("div",{className:"description",children:r.description})]}),e("div",{className:"mini-statistic",children:r.actions.length})]},r.id))})},a.searchProjects)};const le=()=>{const[a,i]=n.exports.useState([]);return n.exports.useEffect(()=>{let s=JSON.parse(localStorage.getItem("users")),d=JSON.parse(localStorage.getItem("currentUser")),o=s.filter(r=>r.id!==d.id);i([...o])},[]),e("div",{className:"actionplace",children:e("div",{className:"actionplace-content",children:a.map(s=>t(P,{to:`/user/${s.id}`,className:"users-action",children:[e("h2",{children:s.username}),t("div",{children:["Projects: ",s.projects.length]})]},s.id))})})};const de=()=>e("div",{children:e("h2",{children:"In developing"})});const ue=a=>{const[i,s]=n.exports.useState(""),[d,o]=n.exports.useState(""),[r,p]=n.exports.useState([]),[N,h]=n.exports.useState(""),[u,S]=n.exports.useState(!1),[f,v]=n.exports.useState({});n.exports.useEffect(()=>{let g=JSON.parse(localStorage.getItem("currentUser"));v(g)},[]);const x=()=>{let g={id:c.generate(),title:"",isCompleted:!1};p([g,...r])},k=g=>{let j=r.map(A=>A.id===g&&y(b({},A),{isCompleted:!A.isCompleted})||A);p([...j])},B=(g,j)=>{let A=r.map(T=>T.id===g&&y(b({},T),{title:j})||T);p([...A])},E=g=>{if(g.preventDefault(),S(!0),h(""),!i)return h("Project Title is required");if(!d)return h("Project Description is required");let j={id:c.generate(),title:i,description:d,actions:r&&[...r]||[],author:f.username,atCreated:Date()};f.projects?v(A=>y(b({},A),{projects:[...A.projects,j]})):v(A=>y(b({},A),{projects:[j]}))};return n.exports.useEffect(()=>{localStorage.setItem("currentUser",JSON.stringify(f));let g=JSON.parse(localStorage.getItem("users"));for(let j=0;j<g.length;j++)g[j].id===f.id&&(g[j]=f);localStorage.setItem("users",JSON.stringify(g)),console.log(f)},[f]),t("div",{className:"create-project",children:[e("h2",{children:"Create project"}),t("div",{className:"create-project_content",children:[e("div",{className:"ErrorMessage",children:N}),e("input",{type:"text",placeholder:"Project title...",id:"projectTitle",name:"projectTitle",onChange:g=>s(g.target.value)}),e("textarea",{type:"text",placeholder:"Project description...",id:"projectDescription",name:"projectDescription",onChange:g=>o(g.target.value)}),t("div",{className:"project-action",children:[t("div",{className:"project-action_heading",children:[e("div",{className:"project-action_title",children:"Project actions"}),e("button",{className:"project-action_add",onClick:()=>x(),children:"+"})]}),e("div",{className:"project-action_placement",children:r.map(g=>t("div",{className:"project-action_new-action",children:[e("input",{type:"text",placeholder:"Action title...",id:"action",name:"action",onChange:j=>B(g.id,j.target.value)}),e("input",{type:"checkbox",name:"isCompleted",id:"isCompleted",checked:g.isCompleted?"checked":"",onChange:()=>k(g.id)})]},g.id))})]}),e("button",{onClick:E,children:"Create project"})]})]})};var pe="./assets/Search.f36b8e7a.svg";const he=a=>{const[i,s]=n.exports.useState(0),[d,o]=n.exports.useState(""),[r,p]=n.exports.useState([]),[N,h]=n.exports.useState([]);n.exports.useEffect(()=>{let f=JSON.parse(localStorage.getItem("currentUser"));f.projects&&p([...f.projects])},[]);const u=f=>{s(f)},S=f=>{o(f.target.value)};return n.exports.useEffect(()=>{if(r){const f=d.toLowerCase(),v=r.filter(x=>x.title.toLowerCase().search(f)!==-1);console.log(v),h([...v])}},[d]),e("div",{className:"content",children:t("div",{className:"Tabs",children:[t("div",{className:"tabHeader",children:[t("div",{className:"navigation",children:[e("button",{onClick:()=>{u(0)},className:i===0&&"tab-button tab-button_active"||"tab-button",children:"My Projects"}),e("button",{onClick:()=>{u(1)},className:i===1&&"tab-button tab-button_active"||"tab-button",children:"Users"}),e("button",{onClick:()=>{u(2)},className:i===2&&"tab-button tab-button_active"||"tab-button",children:"Current Project"})]}),t("div",{className:"search",children:[e("img",{src:pe,alt:"Search icon"}),e("input",{type:"text",placeholder:"Discover",value:d,onChange:S})]})]}),e("div",{className:"component-papper",children:d&&e(oe,{searchProjects:N})||i===0&&e(ce,{handleButtonClick:u})||i===1&&e(le,{})||i===2&&e(de,{})||i===3&&e(ue,{handleButtonClick:u})})]})})};const me=({isUserAuthenticated:a})=>(n.exports.useEffect(()=>{a()},[]),t("div",{className:"main-wrapper",children:[e(D,{}),e(he,{})]}));const ge=()=>{const[a,i]=n.exports.useState(""),[s,d]=n.exports.useState(""),[o,r]=n.exports.useState(""),p=()=>{window.location="/"};return t("div",{className:"Login",children:[e("div",{className:"ErrorMessage",children:a}),t("div",{children:[e("label",{htmlFor:"username",children:"Your username"}),e("input",{type:"text",name:"username",id:"username",value:s,onChange:h=>d(h.target.value)})]}),t("div",{children:[e("label",{htmlFor:"password",children:"Your password"}),e("input",{type:"password",name:"password",id:"password",value:o,onChange:h=>r(h.target.value)})]}),e("button",{className:"LoginBtn",onClick:()=>{if(i(""),!s)return i("Username is empty");if(!o)return i("Password is empty");const h=JSON.parse(localStorage.getItem("users"));if(!h)return i("This username is not a valid");for(let u=0;u<h.length;u++)h[u].username===s&&h[u].cryptoPass&&O.compareSync(o,h[u].cryptoPass[1])&&(F.setCookie("user",h[u].id,{"max-age":3600}),localStorage.setItem("currentUser",JSON.stringify(h[u])),p());return i("Password is not valid")},children:"Log in"})]})},fe=a=>{let i=O.genSaltSync(10),s=O.hashSync(a,i);return[i,s]},ve=({isSingUpConfirmed:a})=>{const[i,s]=n.exports.useState(!1),[d,o]=n.exports.useState(""),[r,p]=n.exports.useState(""),[N,h]=n.exports.useState(""),[u,S]=n.exports.useState("");return t("div",{className:"Signup",children:[e("div",{className:"ErrorMessage",children:d}),t("div",{children:[e("label",{htmlFor:"username",children:"Your username"}),e("input",{type:"text",name:"username",id:"username",onChange:v=>p(v.target.value)})]}),t("div",{children:[e("label",{htmlFor:"password",children:"Your password"}),e("input",{type:"password",name:"password",id:"password",onChange:v=>h(v.target.value)})]}),t("div",{children:[e("label",{htmlFor:"repeatpass",children:"Repeat your password"}),e("input",{type:"password",name:"repeatpass",id:"repeatpass",onChange:v=>S(v.target.value)})]}),e("button",{className:"LoginBtn",onClick:()=>{if(o(""),s(!0),!r)return s(!1),o("Please enter your username");if(N===u){let v=JSON.parse(localStorage.getItem("users")),x=fe(N);if(!v)return localStorage.setItem("users",JSON.stringify([{id:c.generate(),username:r,cryptoPass:x}])),s(!1),o(""),a();for(let k=0;k<v.length;k++)if(v[k].username===r)return s(!1),console.log(v.username),o("Username already exists");return v.push({id:c.generate(),username:r,cryptoPass:x}),localStorage.setItem("users",JSON.stringify(v)),s(!1),o(""),a()}else return s(!1),o("Your repeated password is incorrect")},children:i?"Waiting...":"Sign up"})]})},Ce=a=>t("div",{children:[t("div",{className:"is-content",children:[e("div",{className:"line"}),e("div",{className:"IsNotAuth",children:"if not sign up?"}),e("div",{className:"line"})]}),e("button",{className:"SignupBtn second-btn",onClick:a.handle,children:"Create account"})]}),Ne=a=>t("div",{children:[t("div",{className:"is-content",children:[e("div",{className:"line"}),e("div",{className:"IsNotAuth",children:"Already sign up?"}),e("div",{className:"line"})]}),e("button",{className:"LoginBtn second-btn",onClick:a.handle,children:"Log in"})]}),Se=()=>{const[a,i]=n.exports.useState(!1),s=()=>{i(!1)},d=()=>{i(o=>!o)};return e("div",{className:"AuthForm",children:t("div",{className:"Form",children:[t("div",{className:"heading",children:[e("img",{src:G,alt:"Logo"}),e("h1",{children:"Action.io"})]}),t("div",{className:"FormContent",children:[a&&e(ve,{isSingUpConfirmed:s})||e(ge,{}),a&&e(Ne,{handle:d})||e(Ce,{handle:d})]})]})})};const je=({action:a,handleChangeActionCompleted:i,handleActionSave:s,handleActionDelete:d})=>{const[o,r]=n.exports.useState(!1),[p,N]=n.exports.useState(a.title),h=()=>{r(u=>!u)};return o&&t("div",{className:"action action-item",children:[e("div",{className:"action-forms",children:e("input",{type:"text",placeholder:"Title",value:p,onChange:u=>N(u.target.value)})}),t("div",{className:"action-btns",children:[e("button",{onClick:()=>{s(a.id,p),h()},children:"Save"}),e("button",{onClick:h,children:"Cancel"}),e("button",{onClick:()=>d(a.id),children:"Delete"})]})]})||t("div",{className:"action action-item",children:[t("div",{className:"action-item_content",children:[e("h4",{children:a.title}),e("input",{type:"checkbox",id:"isCompleted_"+a.id,checked:a.isCompleted&&"checked"||"",onChange:()=>i(a.id)}),e("label",{htmlFor:"isCompleted_"+a.id,children:" completed"})]}),e("div",{className:"action-edit_button",children:e("button",{onClick:h,children:"Edit"})})]})},Ae=a=>{const{id:i}=M(),[s,d]=n.exports.useState(),[o,r]=n.exports.useState(0),[p,N]=n.exports.useState(!1),[h,u]=n.exports.useState(!1),[S,f]=n.exports.useState(),[v,x]=n.exports.useState(),[k,B]=n.exports.useState(""),[E,g]=n.exports.useState(!1);n.exports.useEffect(()=>{a.isUserAuthenticated()},[]),n.exports.useEffect(()=>{JSON.parse(localStorage.getItem("currentUser")).projects.forEach(C=>{if(C.id===i)return d(C)})},[]),n.exports.useEffect(()=>{if(s){let l=JSON.parse(localStorage.getItem("currentUser"));for(let m=0;m<l.projects.length;m++)l.projects[m].id===i&&(l.projects[m]=s);localStorage.setItem("currentUser",JSON.stringify(l));let C=JSON.parse(localStorage.getItem("users"));for(let m=0;m<C.length;m++)C[m].id===l.id&&(C[m]=l);localStorage.setItem("users",JSON.stringify(C)),f(s.title),x(s.description)}},[s]),n.exports.useEffect(()=>{s&&(r(0),s.actions.forEach(l=>{l.isCompleted&&r(C=>++C)}))},[s]);const j=l=>{console.log("checked");let C=s.actions.map(m=>m.id===l&&y(b({},m),{isCompleted:!m.isCompleted})||m);console.log(C),d(m=>y(b({},m),{actions:[...C]})),console.log(s)},A=()=>{N(l=>!l)},T=()=>{k&&(d(l=>y(b({},l),{actions:[{id:c.generate(),title:k,isCompleted:E},...l.actions]})),A())},Q=(l,C)=>{s.actions.forEach(m=>{m.id===l&&(m.title=C,d(w=>y(b({},w),{actions:[...w.actions]})))})},Y=()=>{if(s){let l=JSON.parse(localStorage.getItem("currentUser")),C=l.projects.filter(w=>w.id!==s.id);l.projects=[...C],localStorage.setItem("currentUser",JSON.stringify(l));let m=JSON.parse(localStorage.getItem("users"));for(let w=0;w<m.length;w++)m[w].id===l.id&&(m[w]=l);localStorage.setItem("users",JSON.stringify(m)),window.location="/"}},H=l=>{let C=s.actions.filter(m=>m.id!==l);d(m=>y(b({},m),{actions:[...C]}))},U=()=>{u(l=>!l)};return s&&t("div",{className:"Project",children:[e(D,{}),t("div",{className:"project-content",children:[h&&t("div",{className:"project-header",children:[e("label",{htmlFor:"projectTitle",children:"Title: "}),e("input",{type:"text",placeholder:"Project title...",id:"projectTitle",name:"projectTitle",value:S,onChange:l=>f(l.target.value)}),e("label",{htmlFor:"projectDescription",children:"Description: "}),e("textarea",{type:"text",placeholder:"Project description...",id:"projectDescription",name:"projectDescription",value:v,onChange:l=>x(l.target.value)}),t("div",{className:"project-btns",children:[t("div",{className:"project-btns_left",children:[e("button",{onClick:()=>{(S||v)&&(d(l=>(l.title=S,l.description=v,b({},l))),U())},children:"Save"}),e("button",{onClick:U,children:"Cancel"})]}),e("div",{className:"project-btns_right",children:e("button",{onClick:Y,children:"Delete"})})]})]})||t("div",{className:"project-header",children:[t("div",{className:"project-heading",children:[t("div",{className:"project-left",children:[e("h3",{children:s.title}),e("div",{className:"project-description",children:s.description})]}),e("div",{className:"project-right",children:e("button",{onClick:U,children:"Edit"})})]}),t("div",{className:"project-progress_content",children:[t("div",{className:"project-progress",children:[e("div",{className:"project-progress-bar",style:{width:`${o/s.actions.length*100}%`}}),t("span",{className:"project-progress-percent",children:[Math.round(o/s.actions.length*100)||0,"%"]})]}),t("div",{className:"project-progress_number",children:["Completed actions: ",o,"/",s.actions.length]})]})]}),t("div",{className:"project-actions",children:[p&&t("div",{className:"action action-add",children:[t("div",{className:"action-forms",children:[e("input",{type:"text",placeholder:"Title",value:k,onChange:l=>B(l.target.value)}),t("div",{className:"iscompleted",children:[e("input",{id:"isCompleted",type:"checkbox",checked:E&&"checked",onChange:()=>g(l=>!l)}),e("label",{htmlFor:"isCompleted",children:"is completed"})]})]}),t("div",{className:"action-btns",children:[e("button",{onClick:T,children:"Add"}),e("button",{onClick:A,children:"Cancel"})]})]})||e("div",{className:"action action-create",children:t("button",{onClick:A,children:[e("img",{src:Z,alt:"Edit Square icon"}),"Add action"]})}),s.actions&&s.actions.map(l=>e(je,{action:l,handleChangeActionCompleted:j,handleActionSave:Q,handleActionDelete:H},l.id))]})]})]})||e("h1",{children:"Project not found"})};const be=a=>{const{id:i}=M(),[s,d]=n.exports.useState(),[o,r]=n.exports.useState([]);n.exports.useEffect(()=>{a.isUserAuthenticated()},[]),n.exports.useEffect(()=>{JSON.parse(localStorage.getItem("users")).forEach(u=>{u.id===i&&(d(u),r([...u.projects]))})},[]);const p=new Date,N=h=>{let u=Math.trunc((p-new Date(h))/1e3/60/60);return u>24*30?t("span",{children:[Math.trunc(u/24/30)," months after"]}):u>24*7?t("span",{children:[Math.trunc(u/24/7)," weeks after"]}):u>24?t("span",{children:[Math.trunc(u/24)," days after"]}):t("span",{children:[u," hours after"]})};return s&&t("div",{className:"user",children:[e(D,{}),e("h3",{children:s.username}),e("div",{className:"actionplace",children:e("div",{className:"actionplace-content",children:o&&o.map(h=>t(P,{to:`/user/${s.id}/project/${h.id}`,className:"Action",children:[t("div",{className:"action-heading",children:[t("div",{className:"daylefts",children:[e("div",{className:"circle red"}),e("div",{className:"daylefts-content",children:N(h.atCreated)})]}),t("div",{className:"action-title",children:[e("h2",{children:h.title}),e("div",{className:"description",children:h.description})]})]}),t("div",{className:"mini-statistic",children:["Actions: ",h.actions.length]})]},h.id))})})]})||e("h1",{children:"Page not found"})},ye=({action:a})=>e("div",{className:"action action-item",children:t("div",{className:"action-item_content",children:[e("h4",{children:a.title}),e("input",{type:"checkbox",id:"isCompleted_"+a.id,defaultChecked:a.isCompleted&&"checked"||"",disabled:"disabled"}),e("label",{htmlFor:"isCompleted_"+a.id,children:" completed"})]})}),xe=a=>{const{id:i,projectId:s}=M(),[d,o]=n.exports.useState(),[r,p]=n.exports.useState(),[N,h]=n.exports.useState(0);return n.exports.useEffect(()=>{a.isUserAuthenticated()},[]),n.exports.useEffect(()=>{JSON.parse(localStorage.getItem("users")).forEach(S=>{S.id===i&&(o(S),S.projects.forEach(f=>{f.id===s&&p(f)}))})},[]),n.exports.useEffect(()=>{r&&(h(0),r.actions.forEach(u=>{u.isCompleted&&h(S=>++S)}))},[r]),r&&t("div",{className:"Project",children:[e(D,{back:d.id}),t("div",{className:"project-content",children:[t("div",{className:"project-header",children:[e("div",{className:"project-heading",children:t("div",{className:"project-left",children:[e("h3",{children:r.title}),e("div",{className:"project-description",children:r.description})]})}),t("div",{className:"project-progress_content",children:[t("div",{className:"project-progress",children:[e("div",{className:"project-progress-bar",style:{width:`${N/r.actions.length*100}%`}}),t("span",{className:"project-progress-percent",children:[Math.round(N/r.actions.length*100)||0,"%"]})]}),t("div",{className:"project-progress_number",children:["Completed actions: ",N,"/",r.actions.length]})]})]}),e("div",{className:"project-actions",children:r.actions&&r.actions.map(u=>e(ye,{action:u},u.id))})]})]})||e("h1",{children:"Project not found"})};function ke(){let a=_();n.exports.useEffect(()=>{F.getCookie("user")||localStorage.removeItem("currentUser")},[]);const i=()=>{document.cookie||a.push("/auth")};return n.exports.useEffect(()=>{if(!JSON.parse(localStorage.getItem("users"))){let s=[{id:c.generate(),username:"Konstantin",projects:[{id:c.generate(),title:"Create Action.io",description:"Action.io development plan",atCreated:Date.now(),author:"Konstantin",actions:[{id:c.generate(),title:"Develop an idea",isCompleted:!0},{id:c.generate(),title:"Make a design",isCompleted:!0},{id:c.generate(),title:"Pick up a stack",isCompleted:!0},{id:c.generate(),title:"Start development",isCompleted:!0},{id:c.generate(),title:"Upload to github",isCompleted:!1}]},{id:c.generate(),title:"Test",description:"Test project",atCreated:Date.now(),author:"Konstantin",actions:[{id:c.generate(),title:"Test",isCompleted:!0},{id:c.generate(),title:"Test",isCompleted:!0},{id:c.generate(),title:"Test",isCompleted:!0},{id:c.generate(),title:"Test",isCompleted:!0},{id:c.generate(),title:"Test",isCompleted:!1},{id:c.generate(),title:"Test",isCompleted:!1},{id:c.generate(),title:"Test",isCompleted:!1},{id:c.generate(),title:"Test",isCompleted:!0},{id:c.generate(),title:"Test",isCompleted:!0},{id:c.generate(),title:"Test",isCompleted:!0},{id:c.generate(),title:"Test",isCompleted:!1},{id:c.generate(),title:"Test",isCompleted:!1},{id:c.generate(),title:"Test",isCompleted:!0},{id:c.generate(),title:"Test",isCompleted:!0},{id:c.generate(),title:"Test",isCompleted:!0},{id:c.generate(),title:"Test",isCompleted:!1},{id:c.generate(),title:"Test",isCompleted:!1},{id:c.generate(),title:"Test",isCompleted:!1}]}]},{id:c.generate(),username:"Vasya",projects:[{id:c.generate(),title:"Grocery list",description:"I need to go to the store",atCreated:Date.now(),author:"Vasya",actions:[{id:c.generate(),title:"Buy milk",isCompleted:!0},{id:c.generate(),title:"Buy bread",isCompleted:!0},{id:c.generate(),title:"Buy cigarettes",isCompleted:!0},{id:c.generate(),title:"Buy water",isCompleted:!0},{id:c.generate(),title:"Buy pasta",isCompleted:!1},{id:c.generate(),title:"Buy a loaf",isCompleted:!1},{id:c.generate(),title:"Buy butter",isCompleted:!1},{id:c.generate(),title:"Buy cola",isCompleted:!1}]},{id:c.generate(),title:"Grocery list 2",description:"I need to go to the store",atCreated:Date.now(),author:"Vasya",actions:[{id:c.generate(),title:"Buy milk",isCompleted:!0},{id:c.generate(),title:"Buy bread",isCompleted:!0},{id:c.generate(),title:"Buy water",isCompleted:!0},{id:c.generate(),title:"Buy pasta",isCompleted:!1},{id:c.generate(),title:"Buy cola",isCompleted:!1}]},{id:c.generate(),title:"Grocery list 3",description:"I need to go to the store",atCreated:Date.now(),author:"Vasya",actions:[{id:c.generate(),title:"Buy cigarettes",isCompleted:!0},{id:c.generate(),title:"Buy water",isCompleted:!0},{id:c.generate(),title:"Buy pasta",isCompleted:!1},{id:c.generate(),title:"Buy a loaf",isCompleted:!1},{id:c.generate(),title:"Buy butter",isCompleted:!1},{id:c.generate(),title:"Buy cola",isCompleted:!1}]}]}];localStorage.setItem("users",JSON.stringify(s))}},[]),e("div",{className:"App",children:t($,{children:[e(I,{exact:!0,path:"/",children:e(me,{isUserAuthenticated:i})}),e(I,{path:"/auth",children:e(Se,{})}),e(I,{path:"/project/:id",children:e(Ae,{isUserAuthenticated:i})}),e(I,{path:"/user/:id/project/:projectId",children:e(xe,{isUserAuthenticated:i})}),e(I,{path:"/user/:id",children:e(be,{isUserAuthenticated:i})}),e(I,{children:e("h1",{children:"Page not found"})})]})})}ee.render(e(te.StrictMode,{children:e(se,{hashType:"noslash",children:e(ke,{})})}),document.getElementById("root"));