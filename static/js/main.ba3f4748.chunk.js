(this.webpackJsonpeod=this.webpackJsonpeod||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(7),o=c.n(i),a=(c(12),c(6)),d=c(2),r=(c(13),c(0));var u=function(){var e,t=Object(n.useState)(""),c=Object(d.a)(t,2),s=c[0],i=c[1],o=Object(n.useState)([]),u=Object(d.a)(o,2),l=u[0],b=u[1],j=Object(n.useState)(0),m=Object(d.a)(j,2),h=m[0],O=m[1],f=Object(n.useState)(1),p=Object(d.a)(f,2),x=p[0],v=p[1],g=Object(n.useState)(""),N=Object(d.a)(g,2),C=N[0],k=N[1],w=function(e){k(e.target.value)},S=function(e,t,c){switch(t){case 1:i(C),v(2);break;case 2:b([].concat(Object(a.a)(l),[{name:C}]));break;case 3:var n=Object(a.a)(l);switch(C){case"t":n[h].description="to be tested";break;case"c":n[h].description="code review";break;case"d":n[h].description="done";break;default:n[h].description=C}b(n),h<l.length-1?O(h+1):O(0)}e.preventDefault(),k("")};return Object(n.useEffect)((function(){1===x?document.getElementById("focus-1").focus():2===x?document.getElementById("focus-2").focus():document.getElementById("focus-3").focus(),console.log(document.getElementById("autoFocus"))}),[x]),Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"center",children:[Object(r.jsxs)("div",{className:3===x?"edit":"hide",children:["Editting: ",s+"-"+(null===(e=l[h])||void 0===e?void 0:e.name)]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col",children:[Object(r.jsx)("form",{onSubmit:function(e){return S(e,1)},className:1===x?"":"hidden",children:Object(r.jsx)("input",{id:"focus-1",value:C,onChange:w,placeholder:"Project (i.e. wcl)",required:!0})}),Object(r.jsx)("form",{onSubmit:function(e){return S(e,2)},className:2===x?"":"hidden",children:Object(r.jsx)("input",{id:"focus-2",value:C,onChange:w,placeholder:"Task number (i.e. 251)",autofocus:!0})}),Object(r.jsx)("form",{onSubmit:function(e){return S(e,3)},className:3===x?"":"hidden",children:Object(r.jsx)("input",{id:"focus-3",value:C,onChange:w,placeholder:"Status (i.e. done)"})}),Object(r.jsxs)("div",{className:"row btns",children:[Object(r.jsx)("button",{className:"btn",onClick:function(){k(""),i(""),b([]),v(1),O(0)},children:"Clear"}),3===x?Object(r.jsx)("button",{className:"btn",type:"button",onClick:function(){var e=document.getElementById("result").textContent;navigator.clipboard.writeText(e)},children:"Copy"}):2===x?Object(r.jsx)("button",{className:"btn",type:"button",onClick:function(){return v(3)},children:"Next"}):null]}),Object(r.jsxs)("div",{className:"col legend",children:[Object(r.jsx)("p",{children:"c = code review"}),Object(r.jsx)("p",{children:"d = done"}),Object(r.jsx)("p",{children:"t = to be tested"})]})]}),Object(r.jsx)("div",{className:"col",children:Object(r.jsx)("div",{id:"result",className:"row",children:l.map((function(e){return s+"-"+e.name+" -> "+(e.description?e.description:"")+"\n"}))})})]})]})})},l=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),i(e),o(e)}))};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),l()}},[[15,1,2]]]);
//# sourceMappingURL=main.ba3f4748.chunk.js.map