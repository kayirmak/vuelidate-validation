(function(e){function t(t){for(var s,o,n=t[0],d=t[1],u=t[2],l=0,m=[];l<n.length;l++)o=n[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(e[s]=d[s]);c&&c(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],s=!0,n=1;n<r.length;n++){var d=r[n];0!==a[d]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var s={},a={app:0},i=[];function o(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=s,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vuelidate-validation/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=t,n=n.slice();for(var u=0;u<n.length;u++)t(n[u]);var c=d;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"254d":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}}),r("router-view")],1)},i=[],o=(r("5c0b"),r("2877")),n={},d=Object(o["a"])(n,a,i,!1,null,null,null),u=d.exports,c=r("8c4f"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"})},m=[],p={name:"Home"},v=p,f=Object(o["a"])(v,l,m,!1,null,null,null),g=f.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register-user"},[r("div",{ref:"toast",attrs:{id:"snackbar"}},[e._v("Клиент успешно создан")]),r("h2",{staticClass:"register-user__title"},[e._v("Добавить клиента")]),r("form",{staticClass:"form",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.submitHandler.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("h2",{staticClass:"form-group__title"},[e._v("Клиент")]),r("div",{staticClass:"form-group__item"},[r("label",{staticClass:"required",attrs:{for:"last-name"}},[e._v("Фамилия")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],staticClass:"form-group__input",class:{invalid:e.$v.lastName.$dirty&&!e.$v.lastName.required},attrs:{id:"last-name",type:"text",placeholder:"Фамилия"},domProps:{value:e.lastName},on:{keypress:function(t){return e.doNotNumber(t)},input:function(t){t.target.composing||(e.lastName=t.target.value)}}}),e.$v.lastName.$dirty&&!e.$v.lastName.required?r("small",{staticClass:"form-group__errors"},[e._v(" Введите Фамилию ")]):e._e()]),r("div",{staticClass:"form-group__item"},[r("label",{staticClass:"required",attrs:{for:"name"}},[e._v("Имя")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"name",modifiers:{trim:!0}}],staticClass:"form-group__input",class:{invalid:e.$v.name.$dirty&&!e.$v.name.required},attrs:{id:"name",type:"text",placeholder:"Имя"},domProps:{value:e.name},on:{keypress:function(t){return e.doNotNumber(t)},input:function(t){t.target.composing||(e.name=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.name.$dirty&&!e.$v.name.required?r("small",{staticClass:"form-group__errors"},[e._v(" Введите имя ")]):e._e()]),r("div",{staticClass:"form-group__item"},[r("label",{attrs:{for:"patronymic"}},[e._v("Отчество")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.patronymic,expression:"patronymic"}],staticClass:"form-group__input",attrs:{id:"patronymic",type:"text",placeholder:"Отчество"},domProps:{value:e.patronymic},on:{keypress:function(t){return e.doNotNumber(t)},input:function(t){t.target.composing||(e.patronymic=t.target.value)}}})]),r("div",{staticClass:"form-group__item"},[r("label",{staticClass:"required",attrs:{for:"date"}},[e._v("Дата рождения")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.dateValue,expression:"dateValue"}],staticClass:"form-group__input",class:{invalid:e.$v.dateValue.$dirty&&!e.$v.dateValue.required},attrs:{id:"date",type:"date",max:e.dateToToday},domProps:{value:e.dateValue},on:{input:function(t){t.target.composing||(e.dateValue=t.target.value)}}}),e.$v.dateValue.$dirty&&!e.$v.dateValue.required?r("small",{staticClass:"form-group__errors"},[e._v(" Установите дату рождения ")]):e._e()]),r("div",{staticClass:"form-group__item"},[r("label",{staticClass:"required",attrs:{for:"phone"}},[e._v("Номер телефона")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.phone,expression:"phone",modifiers:{trim:!0}},{name:"phoneMask",rawName:"v-phoneMask"}],staticClass:"form-group__input",class:{invalid:e.$v.phone.$dirty&&!e.$v.phone.required||e.$v.phone.$dirty&&!e.$v.phone.minLength},attrs:{id:"phone",type:"tel",maxlength:"16",placeholder:"+7 777 777 77 77"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.phone.$dirty&&!e.$v.phone.required?r("small",{staticClass:"form-group__errors"},[e._v(" Введите номер телефона ")]):e._e(),e.$v.phone.$dirty&&!e.$v.phone.minLength?r("small",{staticClass:"form-group__errors"},[e._v(" номер должен состоять из 11 цифр ")]):e._e()]),r("div",{staticClass:"form-group__item"},[r("label",{attrs:{for:"radio-gender-group"}},[e._v("Пол")]),r("div",{staticClass:"gender-group form-group__input",attrs:{id:"radio-gender-group"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.genderPicked,expression:"genderPicked"}],attrs:{type:"radio",name:"gender-group",id:"gender-man",value:"man"},domProps:{checked:e._q(e.genderPicked,"man")},on:{change:function(t){e.genderPicked="man"}}}),r("div",{attrs:{for:"gender-man"}},[e._v("М")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.genderPicked,expression:"genderPicked"}],attrs:{type:"radio",name:"gender-group",id:"gender-woman",value:"woman"},domProps:{checked:e._q(e.genderPicked,"woman")},on:{change:function(t){e.genderPicked="woman"}}}),r("div",{attrs:{for:"gender-woman"}},[e._v("Ж")])])]),r("div",{staticClass:"form-group__item"},[r("label",{staticClass:"required",attrs:{for:""}},[e._v("Группа клиентов")]),r("div",{staticClass:"checkbox-clients-group form-group__input"},[e._l(e.groupClients,(function(t,s){return r("div",{key:s,class:{invalid:e.$v.clientChoice.$dirty&&!e.$v.clientChoice.required}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.clientChoice,expression:"clientChoice"}],attrs:{id:"checkbox-button",type:"checkbox"},domProps:{value:t,checked:Array.isArray(e.clientChoice)?e._i(e.clientChoice,t)>-1:e.clientChoice},on:{change:function(r){var s=e.clientChoice,a=r.target,i=!!a.checked;if(Array.isArray(s)){var o=t,n=e._i(s,o);a.checked?n<0&&(e.clientChoice=s.concat([o])):n>-1&&(e.clientChoice=s.slice(0,n).concat(s.slice(n+1)))}else e.clientChoice=i}}}),e._v(" "+e._s(t)+" ")])})),e.$v.clientChoice.$dirty&&!e.$v.clientChoice.required?r("small",{staticClass:"form-group__errors"},[e._v(" Выберите до 3 значений ")]):e._e()],2)]),r("div",{staticClass:"form-group__item"},[r("label",{attrs:{for:"select-therapist"}},[e._v("Лечащий врач")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedOption,expression:"selectedOption"}],staticClass:"form-group__input",attrs:{id:"select-therapist"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedOption=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"",selected:""}},[e._v("Не выбрано")]),e._l(e.therapists,(function(t,s){return r("option",{key:s,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])}))],2)]),r("div",{staticClass:"checkbox-sms form-group__input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.sms,expression:"sms"}],attrs:{type:"checkbox",id:"sms"},domProps:{checked:Array.isArray(e.sms)?e._i(e.sms,null)>-1:e.sms},on:{change:function(t){var r=e.sms,s=t.target,a=!!s.checked;if(Array.isArray(r)){var i=null,o=e._i(r,i);s.checked?o<0&&(e.sms=r.concat([i])):o>-1&&(e.sms=r.slice(0,o).concat(r.slice(o+1)))}else e.sms=a}}}),r("label",{attrs:{for:"sms"}},[e._v("Не отправлять СМС")])])]),r("div",{staticClass:"form-group"},[r("h2",{staticClass:"form-group__title"},[e._v("Адрес")]),r("div",{staticClass:"form-group__item"},[r("label",{attrs:{for:"address-index"}},[e._v("Индекс")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.address.index,expression:"address.index"}],staticClass:"form-group__input",attrs:{type:"number",name:"",id:"address-index"},domProps:{value:e.address.index},on:{input:function(t){t.target.composing||e.$set(e.address,"index",t.target.value)}}})]),r("div",{staticClass:"form-group__item"},[r("label",{attrs:{for:"address-country"}},[e._v("Страна")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.address.country,expression:"address.country"}],staticClass:"form-group__input",attrs:{type:"text",name:"",id:"address-country"},domProps:{value:e.address.country},on:{keypress:function(t){return e.doNotNumber(t)},input:function(t){t.target.composing||e.$set(e.address,"country",t.target.value)}}})]),r("div",{staticClass:"form-group__item"},[r("label",{attrs:{for:"address-region"}},[e._v("Область")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.address.region,expression:"address.region"}],staticClass:"form-group__input",attrs:{type:"text",name:"",id:"address-region"},domProps:{value:e.address.region},on:{keypress:function(t){return e.doNotNumber(t)},input:function(t){t.target.composing||e.$set(e.address,"region",t.target.value)}}})]),r("div",{staticClass:"form-group__item"},[r("label",{staticClass:"required",attrs:{for:"address-city"}},[e._v("Город")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.address.city,expression:"address.city"}],staticClass:"form-group__input",class:{invalid:e.$v.address.city.$dirty&&!e.$v.address.city.required},attrs:{id:"address-city",type:"text"},domProps:{value:e.address.city},on:{keypress:function(t){return e.doNotNumber(t)},input:function(t){t.target.composing||e.$set(e.address,"city",t.target.value)}}}),e.$v.address.city.$dirty&&!e.$v.address.city.required?r("small",{staticClass:"form-group__errors"},[e._v(" Введите город проживания ")]):e._e()]),r("div",{staticClass:"form-group__item"},[r("label",{attrs:{for:"address-street"}},[e._v("Улица")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.address.street,expression:"address.street"}],staticClass:"form-group__input",attrs:{type:"text",name:"",id:"address-street"},domProps:{value:e.address.street},on:{input:function(t){t.target.composing||e.$set(e.address,"street",t.target.value)}}})]),r("div",{staticClass:"form-group__item"},[r("label",{attrs:{for:"address-house"}},[e._v("Дом")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.address.house,expression:"address.house"}],staticClass:"form-group__input",attrs:{type:"text",name:"",id:"address-house"},domProps:{value:e.address.house},on:{input:function(t){t.target.composing||e.$set(e.address,"house",t.target.value)}}})])]),r("div",{staticClass:"form-group"},[r("h2",{staticClass:"form-group__title"},[e._v("Документ")]),r("div",{staticClass:"form-group__item"},[r("label",{staticClass:"required",attrs:{for:"select-document-type"}},[e._v("Тип документа")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.document.type,expression:"document.type"}],staticClass:"form-group__input",class:{invalid:e.$v.document.type.$dirty&&!e.$v.document.type.required},attrs:{id:"select-document-type"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.document,"type",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",selected:""}},[e._v("Не выбрано")]),e._l(e.document.documentsByType,(function(t,s){return r("option",{key:s,domProps:{value:t}},[e._v(e._s(t))])}))],2),e.$v.document.type.$dirty&&!e.$v.document.type.required?r("small",{staticClass:"form-group__errors"},[e._v(" Выберите тип документа ")]):e._e()]),r("div",{staticClass:"form-group__item"},[r("label",{attrs:{for:"type-document"}},[e._v("Серия")]),"checkbox"===("Свидетельство о рождении"===e.document.type?"text":"number")?r("input",{directives:[{name:"model",rawName:"v-model",value:e.document.serial,expression:"document.serial"}],staticClass:"form-group__input",class:{invalid:e.$v.document.serial.$dirty&&!e.$v.document.serial.minLength||e.$v.document.serial.$dirty&&!e.$v.document.serial.maxLength},attrs:{id:"type-document",disabled:!e.document.type,type:"checkbox"},domProps:{checked:Array.isArray(e.document.serial)?e._i(e.document.serial,null)>-1:e.document.serial},on:{change:function(t){var r=e.document.serial,s=t.target,a=!!s.checked;if(Array.isArray(r)){var i=null,o=e._i(r,i);s.checked?o<0&&e.$set(e.document,"serial",r.concat([i])):o>-1&&e.$set(e.document,"serial",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.document,"serial",a)}}}):"radio"===("Свидетельство о рождении"===e.document.type?"text":"number")?r("input",{directives:[{name:"model",rawName:"v-model",value:e.document.serial,expression:"document.serial"}],staticClass:"form-group__input",class:{invalid:e.$v.document.serial.$dirty&&!e.$v.document.serial.minLength||e.$v.document.serial.$dirty&&!e.$v.document.serial.maxLength},attrs:{id:"type-document",disabled:!e.document.type,type:"radio"},domProps:{checked:e._q(e.document.serial,null)},on:{change:function(t){return e.$set(e.document,"serial",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.document.serial,expression:"document.serial"}],staticClass:"form-group__input",class:{invalid:e.$v.document.serial.$dirty&&!e.$v.document.serial.minLength||e.$v.document.serial.$dirty&&!e.$v.document.serial.maxLength},attrs:{id:"type-document",disabled:!e.document.type,type:"Свидетельство о рождении"===e.document.type?"text":"number"},domProps:{value:e.document.serial},on:{input:function(t){t.target.composing||e.$set(e.document,"serial",t.target.value)}}}),e.$v.document.serial.$dirty&&!e.$v.document.serial.minLength||e.$v.document.serial.$dirty&&!e.$v.document.serial.maxLength?r("small",{staticClass:"form-group__errors"},[e._v(" Серия состоит из 4 чисел ")]):e._e()]),r("div",{staticClass:"form-group__item"},[r("label",{attrs:{for:"type-document"}},[e._v("Номер")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.document.number,expression:"document.number"}],staticClass:"form-group__input",class:{invalid:e.$v.document.number.$dirty&&!e.$v.document.number.minLength||e.$v.document.number.$dirty&&!e.$v.document.number.maxLength},attrs:{id:"type-document",type:"number",disabled:!e.document.type},domProps:{value:e.document.number},on:{input:function(t){t.target.composing||e.$set(e.document,"number",t.target.value)}}}),e.$v.document.number.$dirty&&!e.$v.document.number.minLength||e.$v.document.number.$dirty&&!e.$v.document.number.maxLength?r("small",{staticClass:"form-group__errors"},[e._v(" Номер состоит из 6 чисел ")]):e._e()]),r("div",{staticClass:"form-group__item"},[r("label",{attrs:{for:"type-document"}},[e._v("Кем выдан")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.document.issuedBy,expression:"document.issuedBy"}],staticClass:"form-group__input",attrs:{id:"type-document",type:"text",disabled:!e.document.type},domProps:{value:e.document.issuedBy},on:{input:function(t){t.target.composing||e.$set(e.document,"issuedBy",t.target.value)}}})]),r("div",{staticClass:"form-group__item"},[r("label",{staticClass:"required",attrs:{for:"type-document"}},[e._v("Дата выдачи")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.document.dateOfIssue,expression:"document.dateOfIssue"}],staticClass:"form-group__input",class:{invalid:e.$v.document.dateOfIssue.$dirty&&!e.$v.document.dateOfIssue.required},attrs:{id:"type-document",type:"date",disabled:!e.document.type,max:e.dateToToday},domProps:{value:e.document.dateOfIssue},on:{input:function(t){t.target.composing||e.$set(e.document,"dateOfIssue",t.target.value)}}}),e.$v.document.dateOfIssue.$dirty&&!e.$v.document.dateOfIssue.required?r("small",{staticClass:"form-group__errors"},[e._v(" Введите дату выдачи документа ")]):e._e()])]),r("div"),r("button",{staticClass:"form-btn",attrs:{type:"submit"}},[e._v("Создать")])])])},y=[],h=(r("ac1f"),r("466d"),r("5319"),r("fb6a"),r("1276"),r("b0c0"),r("00b4"),r("b5ae")),$={name:"RegisterUser",data:function(){return{lastName:"",name:"",patronymic:"",dateValue:"",phone:"",genderPicked:"",groupClients:["VIP","Проблемные","ОМС"],clientChoice:[],therapists:["Иванов","Захаров","Чернышева"],selectedOption:"",sms:"",address:{index:"",country:"",region:"",city:"",street:"",house:""},document:{documentsByType:["Паспорт","Свидетельство о рождении","Водительское удостоверение"],type:"",serial:"",number:"",issuedBy:"",dateOfIssue:""}}},validations:{lastName:{required:h["required"]},name:{required:h["required"]},dateValue:{required:h["required"]},phone:{minLength:Object(h["minLength"])(16),required:h["required"]},clientChoice:{required:h["required"]},address:{city:{required:h["required"]}},document:{type:{required:h["required"]},serial:{minLength:Object(h["minLength"])(4),maxLength:Object(h["maxLength"])(4)},number:{minLength:Object(h["minLength"])(6),maxLength:Object(h["maxLength"])(6)},dateOfIssue:{required:h["required"]}}},directives:{phoneMask:{bind:function(e){function t(e){var t="",r=e.replace(/\D/g,"").match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);return t=r[2]||""===r[1]?r[3]?"+"+r[1]+"("+r[2]+") "+r[3]+(r[4]?"-"+r[4]:""):"+"+r[1]+r[2]:"7"===r[1]?r[1]:"7"+r[1],t}function r(e){var r=e.replace(/\D/g,""),s=r;return"8"===s.charAt(0)&&(s="7"+s.slice(1)),t(s)}e.oninput=function(e){e.isTrusted&&(this.value=t(this.value))},e.onpaste=function(){var t=this;setTimeout((function(){var s=e.value;t.value=r(s)}))}}}},computed:{dateToToday:function(){return(new Date).toISOString().split("T")[0]}},updated:function(){console.log(this.document.type)},methods:{toast:function(){var e=this.$refs.toast;e.classList.add("show"),setTimeout((function(){e.classList.remove("show")}),3e3)},submitHandler:function(){console.log(this.$v),this.$v.$invalid?this.$v.$touch():this.$v.$invalid||(this.toast(),this.lastName="",this.name="",this.patronymic="",this.dateValue="",this.phone="",this.genderPicked="",this.clientChoice=[],this.selectedOption="",this.sms="",this.address.index="",this.address.country="",this.address.region="",this.address.city="",this.address.street="",this.address.house="",this.document.type="",this.document.serial="",this.document.number="",this.document.issuedBy="",this.document.dateOfIssue="")},doNotNumber:function(e){if(console.log(e.key),/^[A-Za-zА-Яа-я]+$/.test(e.key))return!0;e.preventDefault()}}},b=$,C=(r("779b"),Object(o["a"])(b,_,y,!1,null,"5b093faf",null)),x=C.exports;s["a"].use(c["a"]);var N=[{path:"/",name:"Home",component:g},{path:"/register-user",name:"RegisterUser",component:x}],k=new c["a"]({mode:"history",base:"/vuelidate-validation/",routes:N}),w=k,q=r("2f62");s["a"].use(q["a"]);var P=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=r("1dce"),L=r.n(O);s["a"].use(L.a),s["a"].config.productionTip=!1,new s["a"]({router:w,store:P,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"779b":function(e,t,r){"use strict";r("254d")},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.560fcd7f.js.map