(this.webpackJsonpevaluation=this.webpackJsonpevaluation||[]).push([[0],{34:function(e,t,a){e.exports=a(61)},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(31),r=a.n(c),s=a(12),o=a(3),m=a(4),i=a(6),u=a(5),d=a(7),h=a(1),E=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"jumbotron jumbotron-fluid"},l.a.createElement("div",{class:"container"},l.a.createElement("h1",{class:"display-3 text-center text-danger"},l.a.createElement("b",null,"Employee Managment System")))),l.a.createElement("div",{class:" text-center text-success m-5 p-5"},l.a.createElement(s.b,{to:"/signin"},l.a.createElement("b",null,"Signin Here")),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/login"},l.a.createElement("b",null,"Login Here"))))}}]),t}(l.a.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null))}}]),t}(l.a.Component),p=a(14),f=a(17),v=a.n(f),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),v.a.post("http://localhost:8080/auth/login",a.state).then((function(e){e&&!1===e.data.error&&(alert("Success,You are In"),a.setState({entered:!0}))})).catch((function(e){return console.log(e)}))},a.state={username:"",password:"",entered:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.entered?l.a.createElement(h.a,{push:!0,to:"/displayform"}):l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"text-center text-success font-weight-bold"},"Login Here"),l.a.createElement("div",{className:"row text-center justify-content-center"},l.a.createElement("div",{className:"col-6 mt-4"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"h5"},"Enter UserName"),l.a.createElement("input",{type:"text",name:"username",onChange:this.handleChange,className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"h5"},"Enter Password"),l.a.createElement("input",{type:"Password",name:"password",onChange:this.handleChange,className:"form-control"})),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn btn-success mt-3"},"Enter To Login")))))))}}]),t}(l.a.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),v.a.post("http://localhost:8080/auth/register",a.state).then((function(e){e&&(!0===e.data.error?alert("You are already registered"):alert("Success"))})).catch((function(e){return console.log(e)})),a.reset()},a.reset=function(){a.setState({name:"",email:"",password:"",username:"",mobile:""})},a.state={name:"",email:"",password:"",username:"",mobile:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"text-center text-success font-weight-bold mb-5 "},"Enter New Employee Details and SignUP"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col text-center justify-content-center"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"h5"},"Name"),l.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.state.name,className:"form-control",placeholder:"Enter Your Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"h5"},"Email"),l.a.createElement("input",{type:"text",name:"email",onChange:this.handleChange,value:this.state.email,className:"form-control",placeholder:"Enter Your Valid Email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"h5"},"Password"),l.a.createElement("input",{type:"password",name:"password",onChange:this.handleChange,value:this.state.password,className:"form-control",placeholder:"Create a Password"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"h5"},"UserName"),l.a.createElement("input",{type:"text",name:"username",onChange:this.handleChange,value:this.state.username,className:"form-control",placeholder:"Ceate a Username (all small letter)"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"h5"},"Mobile No."),l.a.createElement("input",{type:"number",name:"mobile",onChange:this.handleChange,value:this.state.mobile,className:"form-control",placeholder:"+91"})),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn btn-success"},"Enter to SignIn")))))))}}]),t}(l.a.Component),j=a(16),y=function(e){return l.a.createElement("tr",null,l.a.createElement("th",null,e.name),l.a.createElement("th",null,e.class),l.a.createElement("th",null,e.section),l.a.createElement("th",null,e.subject),l.a.createElement("th",null,l.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.edit(e.id)}},"Edit")),l.a.createElement("th",null,l.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.delete(e.id)}},"Delete")))},S=function(e){return l.a.createElement("div",{className:"container text-center"},l.a.createElement("select",{onClick:e.filterSection,className:"btn btn-success m-2"},l.a.createElement("option",{value:"all"},"Filter Area"),l.a.createElement("option",{value:"all"},"All"),l.a.createElement("option",{value:"Factory"},"Factory "),l.a.createElement("option",{value:"Managment"},"Managment"),l.a.createElement("option",{value:"Warehouse"},"Warehouse")),l.a.createElement("select",{onClick:e.filterSubject,className:"btn btn-success m-2"},l.a.createElement("option",{value:"colc"},"Flter JOB"),l.a.createElement("option",{value:"Engieneer"},"Engieneer"),l.a.createElement("option",{value:"Sales"},"Sales Man"),l.a.createElement("option",{value:"Mechanical"},"Mechanical"),l.a.createElement("option",{value:"Security"},"Security"),l.a.createElement("option",{value:"HR"},"HR"),l.a.createElement("option",{value:"Misc"},"Misc")),l.a.createElement("div",{className:"col"},l.a.createElement("table",{className:"table border mt-4"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Employee Name"),l.a.createElement("th",null,"Department"),l.a.createElement("th",null,"Area"),l.a.createElement("th",null,"Job Assigned"),l.a.createElement("th",null),l.a.createElement("th",null))),l.a.createElement("tbody",null,e.data.map((function(t){return l.a.createElement(y,{key:t.id,id:t.id,name:t.name,class:t.class,section:t.section,subject:t.subject,edit:e.handleEdit,delete:e.handleDelete})}))))))},O=a(33),C=a.n(O),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={name:a.state.name,class:a.state.class,section:a.state.section,subject:a.state.subject,id:C()()};a.setState({dataFaculty:[].concat(Object(j.a)(a.state.dataFaculty),[t]),dataEdt:[].concat(Object(j.a)(a.state.dataEdt),[t]),misc:!0});var n=[].concat(Object(j.a)(a.state.dataFaculty),[t]);localStorage.setItem("data",JSON.stringify(n)),a.reset()},a.reset=function(){a.setState({name:"",class:"",section:"",subject:""})},a.changeFac=function(e){var t=a.state.dataEdt.find((function(t){return t.id===e}));a.setState({name:t.name,class:t.class,section:t.section,subject:t.subject,id:t.id,misc2:!0})},a.handleUpdate=function(e){e.preventDefault();var t={name:a.state.name,class:a.state.class,section:a.state.section,subject:a.state.subject,id:a.state.id},n=a.state,l=n.dataEdt,c=n.id,r=l.map((function(e){return e.id===c?t:e}));a.setState({dataFaculty:r,dataEdt:r,misc2:!1}),localStorage.setItem("data",JSON.stringify(r)),a.reset()},a.removeFac=function(e){var t=a.state.dataFaculty.filter((function(t){return t.id!==e}));a.setState({dataEdt:Object(j.a)(t)}),localStorage.setItem("data",JSON.stringify(t))},a.sectionsSort=function(e){"colc"===e.target.value?a.setState({dataEdt:a.state.dataFaculty}):a.setState({dataEdt:a.state.dataFaculty.filter((function(t){return t.section===e.target.value}))})},a.subjectSort=function(e){"colc"===e.target.value?a.setState({dataEdt:a.state.dataFaculty}):a.setState({dataEdt:a.state.dataFaculty.filter((function(t){return t.subject===e.target.value}))})},a.state={name:"",class:"",section:"",subject:"",dataFaculty:[],dataEdt:[],misc:!1,misc2:!1,id:null},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("data")&&this.setState({dataFaculty:JSON.parse(localStorage.getItem("data")),dataEdt:JSON.parse(localStorage.getItem("data")),misc:!0})}},{key:"render",value:function(){var e=this.state.misc2?this.handleUpdate:this.handleSubmit;return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("h1",{className:"text-center text-success display-3 mb-5 font-weight-bold"}," ","Welcome to Employee Managment System"),l.a.createElement("div",{className:"col text-center justify-content-center"},l.a.createElement("form",{onSubmit:e},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"h5"},"NewBee Here"),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,className:"form-control",placeholder:"Employee's Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"h5"},"Department"),l.a.createElement("select",{name:"class",value:this.state.class,onChange:this.handleChange,className:"form-control"},l.a.createElement("option",{value:"--"},"Choose Dept."),l.a.createElement("option",{value:"Mechanical"},"Mechanical"),l.a.createElement("option",{value:"Sales"},"Sales"),l.a.createElement("option",{value:"Marketing"},"Marketing"),l.a.createElement("option",{value:"Supply Chain"},"Supply Chain"),l.a.createElement("option",{value:"Warehouse & Security"},"Warehouse & Security"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"h5"}," Area Assigned"),l.a.createElement("select",{name:"section",value:this.state.section,onChange:this.handleChange,className:"form-control"},l.a.createElement("option",{value:"--"},"Choose Area"),l.a.createElement("option",{value:"Factory"},"Factory"),l.a.createElement("option",{value:"Managment"},"Managment"),l.a.createElement("option",{value:"Warehouse"},"Warehouse"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"h5"},"Job Assigned"),l.a.createElement("select",{name:"subject",value:this.state.subject,onChange:this.handleChange,className:"form-control"},l.a.createElement("option",{value:""},"Job"),l.a.createElement("option",{value:"Engieneer"},"Engieneer"),l.a.createElement("option",{value:"Sales"},"Sales Man"),l.a.createElement("option",{value:"Mechanical"},"Mechanical"),l.a.createElement("option",{value:"Security"},"Security"),l.a.createElement("option",{value:"HR"},"HR"),l.a.createElement("option",{value:"Misc"},"Misc"))),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn btn-primary mt-3 mb-5"},"Enter to Update")))),this.state.misc&&l.a.createElement(S,{data:this.state.dataEdt,handleEdit:this.changeFac,handleDelete:this.removeFac,filterSection:this.sectionsSort,filterSubject:this.subjectSort}))}}]),t}(l.a.Component),F=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.d,null,l.a.createElement(h.b,{path:"/",exact:!0,render:function(){return l.a.createElement(b,null)}}),l.a.createElement(h.b,{path:"/login",exact:!0,render:function(){return l.a.createElement(g,null)}}),l.a.createElement(h.b,{path:"/signin",exact:!0,render:function(){return l.a.createElement(N,null)}}),l.a.createElement(h.b,{path:"/displayform",exact:!0,render:function(){return l.a.createElement(x,null)}})))}}]),t}(l.a.Component),M=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(F,null))}}]),t}(l.a.Component);r.a.render(l.a.createElement(s.a,null,l.a.createElement(M,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.33a5413e.chunk.js.map