(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),s=a(6),c=a(2),o=a(7),r=a(1),l=(a(13),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),d=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],m=a(0),u=function(e){var t=e.name,a=e.email;return Object(m.jsxs)("div",{className:"user",children:[Object(m.jsx)("p",{className:"user__name",children:t}),Object(m.jsx)("p",{className:"user__email",children:a})]})},b=function(e){var t=e.title,a=e.completed,n=e.user;return Object(m.jsxs)("div",{className:"todo",children:[Object(m.jsx)("h2",{className:"todo__title",children:t}),Object(m.jsx)("p",{className:"todo__completed",children:a?"Completed":"Not completed"}),n&&Object(m.jsx)(u,{name:n.name,email:n.email})]})},h=function(e){var t=e.todos;return Object(m.jsx)("ul",{className:"todo__list",children:t.map((function(e){return Object(m.jsx)("li",{className:"todo__item",children:Object(m.jsx)(b,{title:e.title,completed:e.completed,user:e.user})},e.id)}))})},p=d.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{user:l.find((function(t){return t.id===e.userId}))})})),j=function(){var e,t=Object(r.useState)(Object(s.a)(p)),a=Object(c.a)(t,2),n=a[0],i=a[1],o=Object(r.useState)(""),d=Object(c.a)(o,2),u=d[0],b=d[1],j=Object(r.useState)(""),g=Object(c.a)(j,2),y=g[0],O=g[1],f=Object(r.useState)("not completed"),x=Object(c.a)(f,2),v=x[0],S=x[1],w=Object(r.useState)(!1),_=Object(c.a)(w,2),C=_[0],k=_[1],N=Object(r.useState)(!1),z=Object(c.a)(N,2),P=z[0],L=z[1],A=l.find((function(e){return e.name===y}));return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),""===y&&k(!0),""===u.trim()&&L(!0),y&&u.trim()&&(!function(){var e={userId:null===A||void 0===A?void 0:A.id,id:n.length+1,title:u,completed:"completed"===v,user:A};i([].concat(Object(s.a)(n),[e]))}(),b(""),O(""),S("not completed"),k(!1),L(!1))},children:[Object(m.jsxs)("label",{className:"form__element",children:["Title:",Object(m.jsx)("input",{type:"text",name:"title",value:(null===(e=u.match(/[A-Za-z\u0410-\u042f\u0430-\u044f0-9 ]/g))||void 0===e?void 0:e.join(""))||"",onChange:function(e){b(e.target.value),L(!1)}}),P&&Object(m.jsx)("span",{className:"error",children:"Please enter the title"})]}),Object(m.jsxs)("label",{className:"form__element",children:["User:",Object(m.jsxs)("select",{name:"user",value:y,onChange:function(e){O(e.target.value),k(!1)},children:[Object(m.jsx)("option",{value:"",children:"Choose a user"}),l.map((function(e){return Object(m.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),C&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsxs)("div",{className:"form__element",children:[Object(m.jsxs)("label",{children:["Completed",Object(m.jsx)("input",{type:"radio",name:"status",value:"completed",checked:"completed"===v,onChange:function(e){return S(e.target.value)}})]}),Object(m.jsxs)("label",{children:["Not completed",Object(m.jsx)("input",{type:"radio",name:"status",value:"not completed",checked:"not completed"===v,onChange:function(e){return S(e.target.value)}})]})]}),Object(m.jsx)("button",{type:"submit",children:"Add"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Todos: "}),Object(m.jsx)(h,{todos:n})]})]})};i.a.render(Object(m.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3b3e65df.chunk.js.map