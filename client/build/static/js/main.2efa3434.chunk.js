(this.webpackJsonptodoappfullstack=this.webpackJsonptodoappfullstack||[]).push([[0],{104:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),l=t.n(c),s=(t(70),t(11)),o=t(26),i=t(60),m=t(35),u=t(7),d="LOGIN",f="LOGOUT",E="GET_ALL_USERS",h="GET_TASKS",p="GET_CATEGORIES",g="GET_SHARED_TASKS",y={tasks:[],categories:[]};var b=[];var v=JSON.parse(localStorage.getItem("user")),O=v?{token:v.token,username:v.username,email:v.email,authenticated:!0}:{token:void 0,username:void 0,email:void 0,authenticated:!1};var k=[];var N=t(25),j=t(47),w=t(15),S=Object(w.a)(),x=Object(o.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case d:return Object(u.a)(Object(u.a)(Object(u.a)({},e),a.payload),{},{authenticated:!0});case f:return{token:void 0,username:void 0,email:void 0,authenticated:!1};default:return e}},task:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case h:return Object(u.a)(Object(u.a)({},e),{},{tasks:a.tasks});case p:return Object(u.a)(Object(u.a)({},e),{},{categories:a.categories});case f:return Object(u.a)({},y);default:return e}},allUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case E:return Object(m.a)(a.payload);default:return e}},sharedTasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case g:return Object(m.a)(a.payload);case f:return[];default:return e}},router:Object(N.b)(S)}),T="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,C=Object(o.e)(x,T(Object(o.a)(i.a,Object(j.a)(S)))),P=(t(77),t(78),t(9)),D=t(6),L=t(127),I=t(113),_=t(109),U=t(126),A=t(61),F=function e(a,t,n){return Object(A.a)(this,e),this.token=localStorage.getItem("Token"),fetch("http://127.0.0.1:8000/".concat(t),Object(u.a)({method:a,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Token ".concat(this.token)}},n)).then((function(e){return e.ok?e.json():Promise.reject(e.statusText)}))},G=function(){return new F("GET","api/task-list/")},J=function(e){return new F("POST","api/task-create/",{body:JSON.stringify(e)})},q=function(){return new F("GET","api/get-task-categories/")},H=function(e){return new F("POST","api/create-task-category/",{body:JSON.stringify(e)})},R=function(e){return new F("PATCH","api/toggle-task-completed/".concat(e,"/"))},B=function(e,a){return new F("POST","api/task-update/".concat(e,"/"),{body:JSON.stringify(a)})},V=function(e){return new F("DELETE","api/task-delete/".concat(e,"/"))},M=function(e){return new F("POST","api/share-task/",{body:JSON.stringify(e)})},z=function(e){return new F("GET","api/shared-tasks-list/")},K=t(106),W=t(107),X=t(108),Y=t(110),$=t(111),Q=t(112),Z=t(21),ee=function(e){return new F("POST","api/register/",{body:JSON.stringify(e)})},ae=function(e){return new F("POST","api/login/",{body:JSON.stringify(e)})},te=function(){return new F("GET","api/logout/")},ne=function(){return new F("GET","api/user-list/")},re=function(e){return localStorage.setItem("loggedIn","true"),localStorage.setItem("Token",e.token||""),localStorage.setItem("user",JSON.stringify(e)),{type:d,payload:e}},ce=function(){return localStorage.clear(),{type:f}},le=function(e){return{type:E,payload:e}},se=t(14),oe=Object(s.c)((function(e){return{user:e.user}}),(function(e){return{logoutDispatch:function(){return e(ce())},historyPush:function(a){return e(Object(se.d)(a))}}}))((function(e){var a=Object(n.useState)(!1),t=Object(D.a)(a,2),c=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(K.a,{color:"light",light:!0,expand:"md"},r.a.createElement(W.a,{href:"/"},"TODO APP"),r.a.createElement(X.a,{onClick:function(){return l(!c)}}),r.a.createElement(_.a,{isOpen:c,navbar:!0},r.a.createElement(Y.a,{className:"d-flex mr-auto",navbar:!0},r.a.createElement($.a,{className:"ml-2"},r.a.createElement(Z.a,{className:"nav-link text-primary",to:"/"},"My Tasks")),r.a.createElement($.a,{className:"ml-2"},r.a.createElement(Z.a,{className:"nav-link text-primary",to:"/shared-tasks"},"Shared Tasks"))),r.a.createElement(Q.a,null,"Hi ",e.user.username,r.a.createElement(I.a,{color:"link",onClick:function(){te().then((function(){var a=e.logoutDispatch;(0,e.historyPush)("/login"),a()}))}},"Log Out")))))})),ie=t(18),me=t(115),ue=t(116),de=t(114),fe=t(117),Ee=t(118),he=t(119),pe=t(23),ge=t(65),ye=function(e){return{type:h,tasks:e}};var be=Object(s.c)((function(e){return{categories:e.task.categories}}),(function(e){return{setCategoriesDispatch:function(a){return e(function(e){return{type:p,categories:e}}(a))}}}))((function(e){var a=e.handleCategorySelect,t=e.hideLabel,c=e.selectedCategory,l=Object(pe.a)(e,["handleCategorySelect","hideLabel","selectedCategory"]),s=Object(n.useState)(!1),o=Object(D.a)(s,2),i=o[0],m=o[1],d=Object(n.useState)(c),f=Object(D.a)(d,2),E=f[0],h=f[1],p=function(){var e=l.setCategoriesDispatch;m(!0),q().then((function(a){m(!1),e(a.map((function(e){return{label:e.name,value:e.id}})))})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){0===l.categories.length&&p()}),[]),r.a.createElement(r.a.Fragment,null,!t&&r.a.createElement(de.a,{htmlFor:"categorySelect"},"Select or Create Category"),r.a.createElement(ge.a,{id:"categorySelect",isClearable:!0,isDisabled:i,isLoading:i,onChange:function(e,t){h(e),a((function(a){return Object(u.a)(Object(u.a)({},a),{},{category_id:e&&e.value})}))},onCreateOption:function(e){m(!0),H({name:e}).then((function(e){p(),h({label:e.category.name,value:e.category.id}),a((function(a){return Object(u.a)(Object(u.a)({},a),{},{category_id:e.category.id})})),m(!1)})).catch((function(e){return console.log(e)}))},options:l.categories,value:E,placeholder:"start typing.."}))})),ve=function(e){var a=e.submitCallback,t=Object(n.useState)({title:"",priority:"normal",description:"",category_id:""}),c=Object(D.a)(t,2),l=c[0],s=c[1],o=function(e){var a=e.target.value,t=e.target.name;s(Object(u.a)(Object(u.a)({},l),{},Object(ie.a)({},t,a)))};return r.a.createElement(me.a,{onSubmit:function(e){e.preventDefault(),console.log(l),J(l).then((function(e){a(),s({title:"",priority:"normal",description:"",category_id:""}),console.log(e)}))}},r.a.createElement(ue.a,null,r.a.createElement(de.a,{for:"taskTitle"},"Title"),r.a.createElement(fe.a,{type:"text",name:"title",id:"taskTitle",placeholder:"title..",value:l.title,onChange:o})),r.a.createElement(Ee.a,{form:!0},r.a.createElement(he.a,{md:6},r.a.createElement(be,{handleCategorySelect:s})),r.a.createElement(he.a,{md:6},r.a.createElement(ue.a,null,r.a.createElement(de.a,{for:"taskPriority"},"Priority"),r.a.createElement(fe.a,{type:"select",name:"priority",id:"taskPriority",value:l.priority,onChange:o},r.a.createElement("option",{value:"low"},"Low"),r.a.createElement("option",{value:"normal"},"Normal"),r.a.createElement("option",{value:"high"},"High"))))),r.a.createElement(ue.a,null,r.a.createElement(de.a,{for:"taskDescription"},"Description"),r.a.createElement(fe.a,{type:"textarea",name:"description",id:"taskDescription",placeholder:"description for your task..",style:{minHeight:"150px",whiteSpace:"pre-wrap"},value:l.description,onChange:o})),r.a.createElement(I.a,{color:"primary"},"Save"))},Oe=t(129),ke=t(131),Ne=t(128),je=t(120),we=t(121),Se=t(122),xe=t(123),Te=t(64),Ce=t(124),Pe=t(125),De=Object(s.c)((function(e){return{allUsers:e.allUsers}}))((function(e){var a=e.taskId,t=Object(pe.a)(e,["taskId"]),c=Object(n.useState)(!1),l=Object(D.a)(c,2),s=l[0],o=l[1],i=Object(n.useState)(null),m=Object(D.a)(i,2),u=m[0],d=m[1],f=Object(n.useState)("idle"),E=Object(D.a)(f,2),h=E[0],p=E[1],g=Object(n.useState)(t.allUsers),y=Object(D.a)(g,2),b=y[0],v=y[1],O=Object(n.useState)(""),k=Object(D.a)(O,2),N=k[0],j=k[1],w=function(){return o(!s)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{id:"sharePopover"+a,color:"info",onClick:w},r.a.createElement("i",{className:"fa fa-share"})," Share"),r.a.createElement(ke.a,{target:"#sharePopover"+a,isOpen:s,placement:"bottom",toggle:w,trigger:"legacy"},r.a.createElement(je.a,{style:{width:"300px"}},r.a.createElement(we.a,null,r.a.createElement("div",{className:"mb-2"},r.a.createElement("h5",null,"Select User: "),r.a.createElement(Se.a,{className:"mb-2"},r.a.createElement(xe.a,{addonType:"prepend"},r.a.createElement(Te.a,null,r.a.createElement("i",{className:"fa fa-search text-info"}))),r.a.createElement(fe.a,{onChange:function(e){var a=e.target.value,n=t.allUsers.filter((function(e){return e.username.toLowerCase().includes(a.toLowerCase())||""===a}));v(n),j(a)},value:N,placeholder:"find username..",name:"userFilterInput"})),r.a.createElement(Ce.a,{style:{maxHeight:"300px",overflow:"scroll"}},b.map((function(e){return r.a.createElement(Pe.a,{key:"user"+e.id,action:!0,onClick:function(){return a=e.id,void d(a);var a},color:u===e.id?"primary":""},e.username)})))),r.a.createElement(I.a,{disabled:"loading"===h,color:"success",onClick:function(){p("loading"),M({taskId:a,taskToId:u}).then((function(e){console.log(e),w(),p("success")})).catch((function(e){console.log(e),p("error")}))}},"loading"===h?r.a.createElement(U.a,{color:"white"}):r.a.createElement("span",null,"Share"))))))})),Le=function(e){var a=e.taskDetails,t=e.getTaskList,c=e.taskSharedBy,l=Object(n.useState)(a),s=Object(D.a)(l,2),o=s[0],i=s[1],m=o.id,d=o.category,f=o.completed,E=o.description,h=o.due_date,p=o.priority,g=o.title,y=Object(n.useState)(!1),b=Object(D.a)(y,2),v=b[0],O=b[1],k=Object(n.useState)(!1),N=Object(D.a)(k,2),j=N[0],w=N[1],S=Object(n.useState)("idle"),x=Object(D.a)(S,2),T=x[0],C=x[1],P=Object(n.useState)({title:g,priority:p,description:E,category_id:d&&d.id}),_=Object(D.a)(P,2),A=_[0],F=_[1],G=function(e){var a=e.target.value,t=e.target.name;F(Object(u.a)(Object(u.a)({},A),{},Object(ie.a)({},t,a)))},J=function(){C("loading"),R(m).then((function(e){i(e),C("success")})).catch((function(e){console.log(e),C("error")}))},q=function(){w(!j)};return r.a.createElement("div",{className:"position-relative shadow border-left-info m-2"},"loading"===T&&r.a.createElement("div",{className:"blurred-container-inner"},r.a.createElement(U.a,{type:"grow",style:{zIndex:"3"},color:"warning"})),r.a.createElement("div",{className:"".concat("loading"===T&&"blurred-container")},v?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex bg-info align-items-center"},r.a.createElement("div",{className:"p-4"},r.a.createElement(L.a,{style:{cursor:"pointer"},color:f?"success":"secondary",onClick:J},f?r.a.createElement("i",{className:"fa fa-check-square fa-2x"}):r.a.createElement("i",{className:"fa fa-square fa-2x"}))),r.a.createElement("div",{className:"my-2"},r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col-4"},r.a.createElement(de.a,{className:"text-white font-weight-bold",htmlFor:"editTitleInput"+m},"Title")),r.a.createElement("div",{className:"col-8"},r.a.createElement(fe.a,{id:"editTitleInput"+m,type:"text",name:"title",placeholder:"title..",value:A.title,onChange:G}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement(de.a,{className:"text-white font-weight-bold",htmlFor:"editCategorySelect"+m},"Category")),r.a.createElement("div",{className:"col-8"},r.a.createElement(be,{id:"editCategorySelect"+m,hideLabel:!0,selectedCategory:{label:d&&d.name,value:d&&d.id},handleCategorySelect:F})))),r.a.createElement("div",{className:"ml-auto"},r.a.createElement(I.a,{color:"success",onClick:function(){C("loading"),B(m,A).then((function(e){i(e),O(!1),C("success")})).catch((function(e){console.log(e),C("error")}))}},r.a.createElement("i",{className:"fa fa-check"}))),r.a.createElement("div",{className:"mx-2"},r.a.createElement(I.a,{color:"danger",onClick:function(){return O(!1)}},r.a.createElement("i",{className:"fa fa-times"})))),r.a.createElement(ue.a,{className:"float-right mr-4",style:{width:"100px"}},r.a.createElement(de.a,{for:"taskPriority"},"Priority"),r.a.createElement(fe.a,{type:"select",name:"priority",id:"taskPriority",value:A.priority,onChange:G},r.a.createElement("option",{value:"low"},"Low"),r.a.createElement("option",{value:"normal"},"Normal"),r.a.createElement("option",{value:"high"},"High"))),r.a.createElement("div",{className:"mt-2 p-4"},r.a.createElement(fe.a,{type:"textarea",name:"description",id:"taskDescription",placeholder:"description for your task..",style:{minHeight:"150px",whiteSpace:"pre-wrap"},value:A.description,onChange:G}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex bg-info align-items-center"},r.a.createElement("div",{className:"p-4"},!c&&r.a.createElement(L.a,{style:{cursor:"pointer"},color:f?"success":"secondary",onClick:J},f?r.a.createElement("i",{className:"fa fa-check-square fa-2x"}):r.a.createElement("i",{className:"fa fa-square fa-2x"}))),r.a.createElement("div",{className:"ml-2"},r.a.createElement("h4",{className:"text-white"},g),r.a.createElement("h6",{className:"text-white"},d&&r.a.createElement("small",null,"Category: ",d.name))),c?r.a.createElement("div",{className:"ml-auto mr-2"},r.a.createElement("span",{className:"text-white"},"Shared From: "),r.a.createElement(L.a,{color:"primary"},c.username)):r.a.createElement("div",{className:"d-flex ml-auto"},r.a.createElement("div",{className:""},r.a.createElement(De,{taskId:m})),r.a.createElement("div",{className:"ml-2"},r.a.createElement(I.a,{color:"warning",onClick:function(){return O(!0)}},r.a.createElement("i",{className:"fa fa-edit text-white"}))),r.a.createElement("div",{className:"mx-2"},r.a.createElement(I.a,{color:"danger",onClick:q,id:"delete-task-button"+m},r.a.createElement("i",{className:"fa fa-trash"})),r.a.createElement(ke.a,{isOpen:j,trigger:"legacy",placement:"bottom",target:"delete-task-button"+m,toggle:q},r.a.createElement(Ne.a,{className:"text-center"},r.a.createElement("i",{className:"fa fa-exclamation text-danger fa-2x"})," ",r.a.createElement("br",null),"Are you sure to delete this task?",r.a.createElement("div",{className:"d-flex justify-content-between mt-2"},r.a.createElement(I.a,{color:"secondary",onClick:q},"Cancel"),r.a.createElement(I.a,{color:"danger",onClick:function(){C("loading"),q(),V(m).then((function(e){t(),C("success")}))}},"Delete"))))))),r.a.createElement(L.a,{color:"high"===p?"danger":"normal"===p?"info":"secondary",className:"float-right mr-4 mt-2"},"Priority: ",p),r.a.createElement("div",{className:"mt-2 p-4"},r.a.createElement("p",{style:{whiteSpace:"pre-wrap"}},E),r.a.createElement(L.a,{color:"light",className:"float-right"},"Due Date: ",h)))))},Ie=Object(s.c)((function(e){return{myTasks:e.task.tasks,sharedTasks:e.sharedTasks}}),(function(e){return{setTasksDispatch:function(a){return e(ye(a))},getAllUsersDispatch:function(a){return e(le(a))},setSharedTasksDispatch:function(a){return e({type:g,payload:a})}}}))((function(e){var a=e.sharedTasksView,t=Object(pe.a)(e,["sharedTasksView"]),c=Object(n.useState)("idle"),l=Object(D.a)(c,2),s=l[0],o=l[1],i=function(){var e=t.setTasksDispatch;o("loading"),G().then((function(a){o("success"),e(a)})).catch((function(e){o("error"),console.log(e)}))};return Object(n.useEffect)((function(){!function(){var e=t.getAllUsersDispatch;ne().then((function(a){e(a)}))}(),a?function(){var e=t.setSharedTasksDispatch;o("loading"),z().then((function(a){o("success"),e(a)})).catch((function(e){o("error"),console.log(e)}))}():i()}),[]),r.a.createElement("div",{className:"task-container"},"loading"===s&&r.a.createElement(U.a,{className:"d-flex mx-auto my-2",color:"primary"}),a?t.sharedTasks.map((function(e){return r.a.createElement(Le,{getTaskList:i,taskDetails:e.task,taskSharedBy:e.shared_by,key:"task"+e.task.id})})):t.myTasks.map((function(e){return r.a.createElement(Le,{getTaskList:i,taskDetails:e,key:"task"+e.id})})),!a&&0===t.myTasks.length&&"success"===s&&r.a.createElement(Oe.a,{className:"text-center",color:"info"},r.a.createElement("i",{className:"fa fa-info fa-4x"})," ",r.a.createElement("br",null)," You haven't created any task yet. Start adding by clicking Add Task button."),a&&0===t.sharedTasks.length&&"success"===s&&r.a.createElement(Oe.a,{className:"text-center",color:"info"},r.a.createElement("i",{className:"fa fa-info fa-4x"})," ",r.a.createElement("br",null)," You haven't recevied any task from other users yet."," "))}));var _e=Object(s.c)(null,(function(e){return{setTasks:function(a){return e(ye(a))}}}))((function(e){var a=Object(n.useState)(!1),t=Object(D.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)("idle"),o=Object(D.a)(s,2),i=o[0],m=o[1],u=function(){l(!c)};return r.a.createElement("div",{className:"container"},r.a.createElement(oe,null),r.a.createElement("div",{className:"card mt-4"},r.a.createElement("div",{className:"card-header d-flex"},r.a.createElement("h2",{className:"text-primary"},r.a.createElement(L.a,{color:"",pill:!0},r.a.createElement("i",{className:"fa fa-tasks"})),"My Tasks"),r.a.createElement(I.a,{className:"ml-auto",color:"success",onClick:u},r.a.createElement("i",{className:"fa fa-plus fa-fw"})," Add Task")),r.a.createElement(_.a,{isOpen:c},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body border-left-primary p-4"},r.a.createElement("h4",{className:"text-primary"},"New Task"),r.a.createElement(ve,{submitCallback:function(){!function(){var a=e.setTasks;m("loading"),G().then((function(e){a(e),m("success")})).catch((function(e){console.log(e),m("error")}))}(),u()}})))),r.a.createElement("div",{className:"card-body m-0 p-0"},"loading"===i&&r.a.createElement(U.a,{className:"d-flex mx-auto my-2",color:"primary"}),r.a.createElement(Ie,null))))})),Ue=t(130),Ae=Object(s.c)(null,(function(e){return{loginDispatch:function(a){return e(re(a))},historyPush:function(a){return e(Object(se.d)(a))}}}))((function(e){var a=Object(n.useState)({username:"",password:""}),t=Object(D.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(null),o=Object(D.a)(s,2),i=o[0],m=o[1],d=Object(n.useState)("idle"),f=Object(D.a)(d,2),E=f[0],h=f[1],p=function(e){var a=e.target.value,t=e.target.name;l(Object(u.a)(Object(u.a)({},c),{},Object(ie.a)({},t,a)))};return r.a.createElement("div",{className:"d-flex",style:{height:"80vh"}},r.a.createElement("div",{className:"mx-auto my-auto"},r.a.createElement(je.a,null,r.a.createElement(Ue.a,{className:"mb-0"},r.a.createElement("h1",{className:"text-center"},"TODO APP"),r.a.createElement("p",{className:"text-center"},"Fullstack todo app, created for interview.")),r.a.createElement(we.a,null,r.a.createElement(me.a,{className:"mx-auto",style:{width:"300px"},onSubmit:function(a){var t=e.loginDispatch,n=e.historyPush;a.preventDefault(),h("loading"),ae(c).then((function(e){m(null),t(e),h("success"),n("/")})).catch((function(e){console.log(e),m("upps, password or username not correct.."),h("error")}))}},r.a.createElement("h3",{className:"text-primary text-center"},"Login"),r.a.createElement(ue.a,null,r.a.createElement(de.a,{for:"formUsername"},"Username"),r.a.createElement(fe.a,{type:"text",name:"username",id:"formUsername",placeholder:"username..",value:c.username,onChange:p,required:!0,invalid:null!==i})),r.a.createElement(ue.a,null,r.a.createElement(de.a,{for:"formPassword"},"Password"),r.a.createElement(fe.a,{type:"password",name:"password",id:"formPassword",value:c.password,onChange:p,required:!0,invalid:null!==i})),i&&r.a.createElement(Oe.a,{color:"danger"},i),r.a.createElement(I.a,{className:"w-100",color:"primary",disabled:"loading"===E},"loading"===E?r.a.createElement(U.a,null):"Login")),r.a.createElement("h6",{className:"text-center my-2"},"OR"),r.a.createElement(Z.a,{className:"button-link",to:"/register"},r.a.createElement(I.a,{className:"w-100",color:"success",outline:!0},"Register"))))))})),Fe=Object(s.c)(null,(function(e){return{loginDispatch:function(a){return e(re(a))},historyPush:function(a){return e(Object(se.d)(a))}}}))((function(e){var a=Object(n.useState)({username:"",password:"",email:""}),t=Object(D.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(null),o=Object(D.a)(s,2),i=o[0],m=o[1],d=Object(n.useState)("idle"),f=Object(D.a)(d,2),E=f[0],h=f[1],p=function(e){var a=e.target.value,t=e.target.name;l(Object(u.a)(Object(u.a)({},c),{},Object(ie.a)({},t,a)))};return r.a.createElement("div",{className:"d-flex",style:{height:"80vh"}},r.a.createElement("div",{className:"mx-auto my-auto"},r.a.createElement(je.a,null,r.a.createElement(Ue.a,{className:"mb-0"},r.a.createElement("h1",{className:"text-center"},"TODO APP"),r.a.createElement("p",{className:"text-center"},"Fullstack todo app, created for interview.")),r.a.createElement(we.a,null,r.a.createElement("h3",{className:"text-success text-center"},"Register"),r.a.createElement(me.a,{className:"mx-auto",style:{width:"300px"},onSubmit:function(a){a.preventDefault(),localStorage.setItem("token",""),h("loading"),ee(c).then((function(a){var t=e.loginDispatch,n=e.historyPush;t(a),m(null),h("success"),n("/")})).catch((function(e){console.log(e),m("Username or password is not valid. Please try again.."),h("error")}))}},r.a.createElement(ue.a,null,r.a.createElement(de.a,{for:"formUsername"},"Username"),r.a.createElement(fe.a,{type:"text",name:"username",id:"formUsername",placeholder:"username..",value:c.username,onChange:p,required:!0})),r.a.createElement(ue.a,null,r.a.createElement(de.a,{for:"formEmail"},"Email"),r.a.createElement(fe.a,{type:"email",name:"email",id:"formEmail",placeholder:"email (optional..)",value:c.email,onChange:p})),r.a.createElement(ue.a,null,r.a.createElement(de.a,{for:"formPassword"},"Password"),r.a.createElement(fe.a,{type:"password",name:"password",id:"formPassword",value:c.password,onChange:p,required:!0})),i&&r.a.createElement(Oe.a,{color:"danger"},i),r.a.createElement(I.a,{color:"success",className:"w-100"},"loading"===E?r.a.createElement(U.a,null):"Register")),r.a.createElement("div",{className:"my-2 d-flex justify-content-center align-items-center"},"Already have an account?"),r.a.createElement(Z.a,{className:"button-link",to:"/login"},r.a.createElement(I.a,{className:"w-100",color:"primary",outline:!0},"Login"))))))}));var Ge=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(oe,null),r.a.createElement("div",{className:"card mt-4"},r.a.createElement("div",{className:"card-header d-flex"},r.a.createElement("h2",{className:"text-primary"},r.a.createElement(L.a,{color:"",pill:!0},r.a.createElement("i",{className:"fa fa-tasks"})),"Shared Tasks From Other Users")),r.a.createElement("div",{className:"card-body m-0 p-0"},r.a.createElement(Ie,{sharedTasksView:!0}))))},Je=Object(s.c)((function(e){return{user:e.user}}))((function(e){var a=e.component,t=Object(pe.a)(e,["component"]);return r.a.createElement(P.b,Object.assign({},t,{render:function(e){return!0===t.user.authenticated?r.a.createElement(a,e):r.a.createElement(P.a,{to:"/login"})}}))})),qe=function(){return r.a.createElement(P.d,null,r.a.createElement(P.b,{exact:!0,path:"/login",component:Ae}),r.a.createElement(P.b,{exact:!0,path:"/register",component:Fe}),r.a.createElement(Je,{exact:!0,path:"/",component:_e}),r.a.createElement(Je,{exact:!0,path:"/shared-tasks",component:Ge}))},He=function(e){return r.a.createElement(s.a,{store:C},r.a.createElement(N.a,{history:S},r.a.createElement(qe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(He,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,a,t){},77:function(e,a,t){}},[[104,1,2]]]);
//# sourceMappingURL=main.2efa3434.chunk.js.map