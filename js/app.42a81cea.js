(function(e){function t(t){for(var n,i,u=t[0],a=t[1],l=t[2],s=0,p=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);c&&c(t);while(p.length)p.shift()();return d.push.apply(d,l||[]),o()}function o(){for(var e,t=0;t<d.length;t++){for(var o=d[t],n=!0,u=1;u<o.length;u++){var a=o[u];0!==r[a]&&(n=!1)}n&&(d.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={app:0},d=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/ToDo/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=a;d.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"container"}},[o("div",{staticClass:"md-layout"},[o("div",{staticClass:"md-layout-item"},[o("md-card",[o("md-card-content",[o("md-card-header",[e._v("Your "),o("b",[e._v("To Do")]),e._v(" list")]),o("div",[o("md-card-content",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.currentTodo,expression:"currentTodo"}],staticClass:"todoInput",attrs:{placeholder:"Add a todo"},domProps:{value:e.currentTodo},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo()},input:function(t){t.target.composing||(e.currentTodo=t.target.value)}}}),o("ul",{staticClass:"todos"},e._l(e.todos,(function(t){return o("li",{key:t.id},[o("div",[o("span",[o("input",{staticClass:"md-primary",attrs:{type:"checkbox"},domProps:{checked:t.done},on:{click:function(o){return e.done(t)}}})]),o("span",{attrs:{id:"todoItem"}},[o("label",{on:{dblclick:function(e){t.edit=!0}}},[t.done?o("del",[e._v(" "+e._s(t.label)+" ")]):o("span",[e._v(e._s(t.label))])])]),o("span",{staticClass:"xButton"},[o("md-button",{staticClass:"md-accent",on:{click:function(o){return e.removeTodo(t.id)}}},[e._v("×")])],1)]),o("input",{directives:[{name:"show",rawName:"v-show",value:1==t.edit,expression:"todo.edit == true"},{name:"model",rawName:"v-model",value:t.label,expression:"todo.label"}],attrs:{id:"todoEdit"},domProps:{value:t.label},on:{blur:function(o){t.edit=!1,e.$emit("update")},keyup:function(o){if(!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter"))return null;t.edit=!1,e.$emit("update")},input:function(o){o.target.composing||e.$set(t,"label",o.target.value)}}})])})),0)])],1)],1)],1)],1)])])},d=[],i=(o("4de4"),{data:function(){return{todos:[],currentTodo:"",editedTodo:null}},methods:{addTodo:function(){this.todos.push({id:this.todos.length,label:this.currentTodo,completed:!1,edit:!1,done:!1}),this.currentTodo=""},done:function(e){e.done=!e.done},editTodo:function(e){this.editedTodo=e},removeTodo:function(e){this.todos=this.todos.filter((function(t){return t.id!==e}))}}}),u=i,a=(o("034f"),o("2877")),l=Object(a["a"])(u,r,d,!1,null,null,null),c=l.exports,s=o("9c30"),p=o("43f9"),f=o.n(p);o("51de"),o("e094");n["default"].use(f.a),n["default"].use(s["MdCard"]),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,o){}});
//# sourceMappingURL=app.42a81cea.js.map