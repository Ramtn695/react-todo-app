(this.webpackJsonpmyreactproject=this.webpackJsonpmyreactproject||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){},18:function(t,e,s){},19:function(t,e,s){"use strict";s.r(e);var a=s(2),n=s.n(a),i=s(6),c=s.n(i),l=(s(15),s(4)),o=s(3),r=s(7),h=s(8),u=s(1),d=s(10),j=s(9),b=s(0),m=function(t){Object(d.a)(s,t);var e=Object(j.a)(s);function s(t){var a;return Object(r.a)(this,s),(a=e.call(this,t)).state={task:"",list:[],taskEnd:[],status:"all"},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a.handleRemove=a.handleRemove.bind(Object(u.a)(a)),a.filterItem=a.filterItem.bind(Object(u.a)(a)),a.displayList=a.displayList.bind(Object(u.a)(a)),a}return Object(h.a)(s,[{key:"handleChange",value:function(t){this.setState({task:t.target.value})}},{key:"handleSubmit",value:function(t){t.preventDefault();var e=Object(o.a)(this.state.list),s={id:Date.now(),task:this.state.task,status:"running"};e.push(s),this.setState({list:e,task:""}),console.log(s)}},{key:"handleRemove",value:function(t){var e=Object(o.a)(this.state.list).map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},e),{},{status:"completed"}):e})),s=Object(o.a)(this.state.taskEnd);s=[].concat(Object(o.a)(s),[Object(l.a)(Object(l.a)({},t),{},{status:"completed"})]),e=e.filter((function(e){return e.id!==t.id})),this.setState({list:e,taskEnd:s}),console.log(t),console.log(s)}},{key:"filterItem",value:function(t){t.target.checked&&(this.setState({status:t.target.value}),console.log(this.state.status))}},{key:"displayList",value:function(){var t=this,e=this.state.status,s=this.state.taskEnd.map((function(e){return Object(b.jsxs)("div",{className:"TaskList",children:[e.task,Object(b.jsx)("button",{className:"Clear",onClick:function(){return t.handleRemove(e)},children:" X "})]},e.id)})),a=this.state.list.map((function(e){return Object(b.jsxs)("div",{className:"TaskList",children:[e.task,Object(b.jsx)("button",{className:"Clear",onClick:function(){return t.handleRemove(e)},children:" X "})]},e.id)}));return Object(b.jsx)("div",{children:"completed"===e?s:a})}},{key:"render",value:function(t){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"ToDoForm",children:[Object(b.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(b.jsx)("label",{htmlFor:"task",children:" Task : "}),Object(b.jsx)("input",{type:"text",value:this.state.task,name:"task",placeholder:"Enter a Task to Do",onChange:function(t){return e.handleChange(t)},required:!0}),Object(b.jsx)("button",{value:"submit",className:"Submit",children:" Submit "})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"checkbox",value:"all",name:"task",className:"Checkbox",onChange:function(t){return e.filterItem(t)}}),Object(b.jsx)("label",{htmlFor:"All Tasks ",children:"All Tasks"}),Object(b.jsx)("input",{type:"checkbox",value:"completed",name:"task",className:"Checkbox",onChange:function(t){return e.filterItem(t)}}),Object(b.jsx)("label",{htmlFor:"Completed ",children:"Completed"}),Object(b.jsx)("input",{type:"checkbox",value:"running",name:"task",className:"Checkbox",onChange:function(t){return e.filterItem(t)}}),Object(b.jsx)("label",{htmlFor:"Running Task ",children:"Running Task"})]})]}),"completed"===this.state.status?this.state.taskEnd.length>0?Object(b.jsxs)("h1",{children:["You have completed ",this.state.list.length," tasks"]}):Object(b.jsx)("h1",{children:"Complete Some Tasks"}):this.state.list.length>0?Object(b.jsxs)("h1",{children:["You have ",this.state.list.length," tasks to do"]}):Object(b.jsx)("h1",{children:"Add Some Tasks to do"}),Object(b.jsx)("div",{className:"ToDoList",children:this.displayList()})]})}}]),s}(a.Component),k=(s(17),s.p+"static/media/task.1f5e3e8d.png");s(18);var O=function(t){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"App-header",children:[Object(b.jsx)("img",{src:k,alt:k,height:"100px",className:"App-logo"}),Object(b.jsx)("h3",{style:{color:"white"},children:"Your Favourite To_Do App "})]}),Object(b.jsx)("h1",{children:"Your ToDo's Here"}),Object(b.jsx)(m,{})]})},p=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(e){var s=e.getCLS,a=e.getFID,n=e.getFCP,i=e.getLCP,c=e.getTTFB;s(t),a(t),n(t),i(t),c(t)}))};c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),p()}},[[19,1,2]]]);
//# sourceMappingURL=main.f21f7278.chunk.js.map