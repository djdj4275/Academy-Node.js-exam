"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[438],{438:function(e,t,m){m.r(t),m.d(t,{default:function(){return u}});var o=function(){var e=this,t=e.$createElement,m=e._self._c||t;return m("div",[m("h1",[e._v("글을 수정하는 곳입니다")]),m("input",{directives:[{name:"model",rawName:"v-model",value:e.memo.title,expression:"memo.title"}],attrs:{type:"text"},domProps:{value:e.memo.title},on:{input:function(t){t.target.composing||e.$set(e.memo,"title",t.target.value)}}}),e._v(" "),m("br"),m("textarea",{directives:[{name:"model",rawName:"v-model",value:e.memo.memo,expression:"memo.memo"}],attrs:{cols:"30",rows:"10"},domProps:{value:e.memo.memo},on:{input:function(t){t.target.composing||e.$set(e.memo,"memo",t.target.value)}}}),e._v(" "),m("br"),m("button",{on:{click:e.updatememo}},[e._v("제출")])])},a=[],n={data(){return{memo:{title:"",memo:""}}},created(){this.$http.get(`/api/memo/${this.$route.params.id}`).then((e=>{this.memo=e.data}))},methods:{updatememo(){this.$http.put("/api/memo/updateform",{data:{memo:this.memo}}).then((e=>{console.log(e.data)})),this.$router.push("/")}}},r=n,i=m(1),s=(0,i.Z)(r,o,a,!1,null,null,null),u=s.exports}}]);
//# sourceMappingURL=438-legacy.31e3fd50.js.map