import{u as U,e as se,f as ae,g as z,h as te,P as le,t as re,i as ue,j as F,k as Q,l as ie,w as Y,m as a,n as ne,R as $,p as oe,q as ce,s as ve,C as pe,v as ye,x as de,y as he,z as me,A as ge,B as fe,D as He,E as B,F as I,G as Re,H as x,I as ke}from"./app-DikRqDLR.js";const qe=["/","/about","/bz","/jinyi","/link","/qsign","/404.html","/category/","/category/%E9%94%A6%E8%A1%A3/","/category/%E6%9C%BA%E5%99%A8%E4%BA%BA/","/tag/","/tag/miao-yunzai/","/tag/qsign/","/tag/icqq/","/article/","/star/","/timeline/"],we="SEARCH_PRO_QUERY_HISTORY",g=U(we,[]),Qe=()=>{const{queryHistoryCount:t}=x,l=t>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,t-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},P=t=>qe[t.id]+("anchor"in t?`#${t.anchor}`:""),xe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=x,f=U(xe,[]),Ae=()=>{const t=_>0;return{enabled:t,resultHistory:f,addResultHistory:l=>{if(t){const r={link:P(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,_-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},Ce=t=>{const l=pe(),r=z(),A=ye(),i=F(0),k=Q(()=>i.value>0),d=de([]);return he(()=>{const{search:h,terminate:C}=me(),H=Re(c=>{const R=c.join(" "),{searchFilter:E=y=>y,splitWord:S,suggestionsFilter:j,...m}=l.value;R?(i.value+=1,h(c.join(" "),r.value,m).then(y=>E(y,R,r.value,A.value)).then(y=>{i.value-=1,d.value=y}).catch(y=>{console.warn(y),i.value-=1,i.value||(d.value=[])})):d.value=[]},x.searchDelay-x.suggestDelay);Y([t,r],([c])=>H(c),{immediate:!0}),ge(()=>{C()})}),{isSearching:k,results:d}};var Se=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(t,{emit:l}){const r=ae(),A=z(),i=te(le),{enabled:k,addQueryHistory:d,queryHistory:h,removeQueryHistory:C}=Qe(),{enabled:H,resultHistory:c,addResultHistory:R,removeResultHistory:E}=Ae(),S=k||H,j=re(t,"queries"),{results:m,isSearching:y}=Ce(j),u=ue({isQuery:!0,index:0}),v=F(0),p=F(0),O=Q(()=>S&&(h.value.length>0||c.value.length>0)),b=Q(()=>m.value.length>0),D=Q(()=>m.value[v.value]||null),M=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:h.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?h.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},V=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=D.value.contents.length-1},J=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},K=()=>{p.value<D.value.contents.length-1?p.value+=1:J()},N=()=>{p.value>0?p.value-=1:V()},L=e=>e.map(s=>ke(s)?s:a(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=fe[e.index]||"$content",[n,w=""]=He(s)?s[A.value].split("$content"):s.split("$content");return e.display.map(o=>a("div",L([n,...o,w])))}return e.display.map(s=>a("div",L(s)))},q=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>k?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.queryHistory),h.value.map((e,s)=>a("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[a(B,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:n=>{n.preventDefault(),n.stopPropagation(),C(s)}})]))])):null,Z=()=>H?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>a($,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{q()}},()=>[a(B,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(n=>L(n)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:n=>{n.preventDefault(),n.stopPropagation(),E(s)}})]))])):null;return ie("keydown",e=>{if(t.isFocusing){if(b.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const s=D.value.contents[p.value];d(t.queries.join(" ")),R(s),r.push(P(s)),q()}}else if(H){if(e.key==="ArrowUp")M();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",h.value[s]),e.preventDefault()):(r.push(c.value[s].link),q())}}}}),Y([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:t.queries.length?!b.value:!O.value}],id:"search-pro-results"},t.queries.length?y.value?a(ne,{hint:i.value.searching}):b.value?a("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},n)=>{const w=v.value===n;return a("li",{class:["search-pro-result-list-item",{active:w}]},[a("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((o,ee)=>{const T=w&&p.value===ee;return a($,{to:P(o),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{d(t.queries.join(" ")),R(o),q()}},()=>[o.type==="text"?null:a(o.type==="title"?oe:o.type==="heading"?ce:ve,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?a("div",{class:"content-header"},o.header):null,a("div",W(o))])])})])})):i.value.emptyResult:S?O.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Se as default};
