import{u as U,e as se,f as ae,g as Y,h as te,P as le,t as re,i as ue,j as B,k as w,l as ie,w as z,m as a,n as oe,R as $,p as ne,q as ce,s as ve,C as pe,v as de,x as ye,y as he,z as me,A as ge,B as Q,D as fe,E as He,F as Re,G as j,H as I,I as ke}from"./app-CXoyqNql.js";const Ae=["/","/about/","/link","/%E6%96%87%E7%AB%A0/%E5%88%A9%E7%94%A8WSL2%E5%AE%89%E8%A3%85Miao-Yunzai.html","/404.html","/%E6%96%87%E7%AB%A0/","/category/","/category/%E6%9C%BA%E5%99%A8%E4%BA%BA/","/tag/","/tag/miao-yunzai/","/tag/windows/","/article/","/star/","/timeline/"],Ee="SEARCH_PRO_QUERY_HISTORY",g=U(Ee,[]),we=()=>{const{queryHistoryCount:t}=Q,l=t>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,t-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},F=t=>Ae[t.id]+("anchor"in t?`#${t.anchor}`:""),Qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=Q,f=U(Qe,[]),qe=()=>{const t=_>0;return{enabled:t,resultHistory:f,addResultHistory:l=>{if(t){const r={link:F(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,_-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},xe=t=>{const l=pe(),r=Y(),q=de(),i=B(0),k=w(()=>i.value>0),y=ye([]);return he(()=>{const{search:h,terminate:x}=me(),H=ge(c=>{const R=c.join(" "),{searchFilter:S=d=>d,splitWord:C,suggestionsFilter:P,...m}=l.value;R?(i.value+=1,h(c.join(" "),r.value,m).then(d=>S(d,R,r.value,q.value)).then(d=>{i.value-=1,y.value=d}).catch(d=>{console.warn(d),i.value-=1,i.value||(y.value=[])})):y.value=[]},Q.searchDelay-Q.suggestDelay);z([t,r],([c])=>H(c),{immediate:!0}),fe(()=>{x()})}),{isSearching:k,results:y}};var Ce=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(t,{emit:l}){const r=ae(),q=Y(),i=te(le),{enabled:k,addQueryHistory:y,queryHistory:h,removeQueryHistory:x}=we(),{enabled:H,resultHistory:c,addResultHistory:R,removeResultHistory:S}=qe(),C=k||H,P=re(t,"queries"),{results:m,isSearching:d}=xe(P),u=ue({isQuery:!0,index:0}),v=B(0),p=B(0),O=w(()=>C&&(h.value.length>0||c.value.length>0)),L=w(()=>m.value.length>0),D=w(()=>m.value[v.value]||null),M=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:h.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?h.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},V=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=D.value.contents.length-1},W=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},J=()=>{p.value<D.value.contents.length-1?p.value+=1:W()},K=()=>{p.value>0?p.value-=1:V()},b=e=>e.map(s=>ke(s)?s:a(s[0],s[1])),N=e=>{if(e.type==="customField"){const s=He[e.index]||"$content",[o,E=""]=Re(s)?s[q.value].split("$content"):s.split("$content");return e.display.map(n=>a("div",b([o,...n,E])))}return e.display.map(s=>a("div",b(s)))},A=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>k?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.queryHistory),h.value.map((e,s)=>a("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[a(j,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),x(s)}})]))])):null,Z=()=>H?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>a($,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{A()}},()=>[a(j,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(o=>b(o)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),S(s)}})]))])):null;return ie("keydown",e=>{if(t.isFocusing){if(L.value){if(e.key==="ArrowUp")K();else if(e.key==="ArrowDown")J();else if(e.key==="Enter"){const s=D.value.contents[p.value];y(t.queries.join(" ")),R(s),r.push(F(s)),A()}}else if(H){if(e.key==="ArrowUp")M();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",h.value[s]),e.preventDefault()):(r.push(c.value[s].link),A())}}}}),z([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:t.queries.length?!L.value:!O.value}],id:"search-pro-results"},t.queries.length?d.value?a(oe,{hint:i.value.searching}):L.value?a("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const E=v.value===o;return a("li",{class:["search-pro-result-list-item",{active:E}]},[a("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const T=E&&p.value===ee;return a($,{to:F(n),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{y(t.queries.join(" ")),R(n),A()}},()=>[n.type==="text"?null:a(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",N(n))])])})])})):i.value.emptyResult:C?O.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Ce as default};
