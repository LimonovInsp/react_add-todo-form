(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(10),r=a.n(s),o=a(3),c=(a(16),a(2)),l=a(4),m=a(5),u=a(8),d=a(7),h=(a(17),function(e){var t=e.handleTaskChange,a=e.task;return i.a.createElement("input",{type:"text",value:a,placeholder:"Write your task",maxLength:"25",onChange:t,className:"App__input",required:!0})}),p=a(1),g=a.n(p),b=(g.a.arrayOf(g.a.shape({id:g.a.number.isRequired,name:g.a.string.isRequired})),a(20),function(e){var t=e.usersList,a=e.handleNameChange,n=e.userId;return i.a.createElement("select",{value:n,onChange:a,className:"App__box",required:!0},i.a.createElement("option",{value:"",disabled:!0},"Choose a user"),t.map((function(e){return i.a.createElement("option",{className:"App__name",name:e.name,value:e.id,key:e.id},e.name)})))}),y=(a(21),function(){return i.a.createElement("button",{type:"submit",className:"App__button"},"Todo")}),f=a(6),_=(a(22),g.a.arrayOf(g.a.shape({completed:g.a.bool.isRequired,id:g.a.number.isRequired,name:g.a.string.isRequired,title:g.a.string.isRequired,userId:g.a.number.isRequired})),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).changeChecking=function(t,a){var n=a;e.setState((function(e){return{checkBoxId:e.checkBoxId.set(t,n)}}))},e.handleHighLight=function(e,t){return!0===t.get(e)?{textDecoration:"line-through"}:{textDecoration:"none"}},e.changeChecking=e.changeChecking.bind(Object(f.a)(e)),e.state={checkBoxId:new Map},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state.checkBoxId,a=this.props.dynamicList,n=Object(c.a)(this.props.todosList).map((function(e){return{userId:e.userId,task:e.title,name:e.name}})),s=[].concat(Object(c.a)(n),Object(c.a)(a)).map((function(e,t){return Object(o.a)(Object(o.a)({},e),{},{id:t})}));return i.a.createElement("ul",{className:"Todo__list"},i.a.createElement("li",{className:"Todo__item Todo__item-pattern"},i.a.createElement("p",{className:"Todo__content Todo__content-pattern"},"Status"),i.a.createElement("p",{className:"Todo__content Todo__content-pattern"},"Name"),i.a.createElement("p",{className:"Todo__content Todo__content-pattern"},"Title"),i.a.createElement("p",{className:"Todo__content Todo__content-pattern"},"User ID")),s.map((function(a){return i.a.createElement("li",{className:"Todo__item",key:a.id},i.a.createElement("input",{type:"checkbox",className:"Todo__content todo__checkbox",checked:!0===t.get(a.id),onChange:function(t){e.changeChecking(a.id,t.target.checked)}}),i.a.createElement("p",{className:"Todo__content"},a.name),i.a.createElement("p",{className:"Todo__content",style:e.handleHighLight(a.id,t)},a.task),i.a.createElement("p",{className:"Todo__content"},"User ID ".concat(a.userId)))})))}}]),a}(i.a.Component)),k=(a(23),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={task:"",dynamicList:[],userId:"",name:""},e.handleTaskChange=function(t){e.setState({task:t.target.value})},e.handleNameChange=function(t){e.setState({userId:t.target.value,name:e.props.usersList.find((function(e){return e.id===Number(t.target.value)})).name})},e.handleSubmit=function(t){t.preventDefault(),e.setState((function(e){return{dynamicList:[].concat(Object(c.a)(e.dynamicList),[{task:e.task,userId:e.userId,name:e.name}]),userId:"",task:""}}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.todosList,t=this.props.usersList,a=this.state.dynamicList,n=this.state.userId,s=this.state.task;return i.a.createElement("div",{className:"App__container"},i.a.createElement("form",{onSubmit:this.handleSubmit,className:"App__form"},i.a.createElement(h,{handleTaskChange:this.handleTaskChange,task:s}),i.a.createElement(b,{usersList:t,userId:n,handleNameChange:this.handleNameChange}),i.a.createElement(y,null)),i.a.createElement(_,{dynamicList:a,todosList:e}))}}]),a}(i.a.Component)),v=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],C=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],E=v.map((function(e){return{id:e.id,name:e.name}})),L=C.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{name:v.find((function(t){return t.id===e.userId})).name})}));var S=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Add todo form"),i.a.createElement("p",null,i.a.createElement("span",null,"Users: "),v.length),i.a.createElement(k,{usersList:E,todosList:L}))};r.a.render(i.a.createElement(S,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.7c65ba45.chunk.js.map