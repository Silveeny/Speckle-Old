(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64ccd1ca"],{"1a3b":function(t,e,s){},"3c97":function(t,e,s){"use strict";var r=s("b870"),a=s.n(r);a.a},5208:function(t,e,s){"use strict";var r=s("1a3b"),a=s.n(r);a.a},"5f9d":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"elevation-0 pt-4"},[s("v-toolbar",{staticClass:"elevation-0 transparent title font-weight-light",attrs:{dense:""}},[s("v-icon",{attrs:{small:"",left:""}},[t._v("cloud_upload")]),t._v(" \n    "),s("span",{staticClass:"title font-weight-light"},[t._v("Source")])],1),s("v-divider"),s("v-card-text",[t._l(t.senders,function(t){return s("client-card",{key:t._id,attrs:{client:t}})}),0===t.senders.length?s("p",[t._v("There seem to be no source clients for this stream.")]):t._e()],2),s("v-toolbar",{staticClass:"elevation-0 transparent title font-weight-light mt-4",attrs:{dense:""}},[s("v-icon",{attrs:{small:"",left:""}},[t._v("cloud_download")]),t._v(" \n    "),s("span",{staticClass:"title font-weight-light"},[t._v("Receivers")])],1),s("v-divider"),s("v-card-text",[t._l(t.receivers,function(t){return s("client-card",{key:t._id,attrs:{client:t}})}),0===t.receivers.length?s("p",[t._v("There seem to be no stream receivers.")]):t._e()],2)],1)},a=[],i=(s("f7fe"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{staticClass:"text-xs-left",attrs:{row:"",wrap:"","justfiy-space-between":""}},[s("v-flex",{staticClass:"caption"},[s("strong",[t._v(t._s(t.client.documentType))]),t._v(" "),t.client.documentName?s("span",[t._v("doc name: "+t._s(t.client.documentName))]):t._e()]),s("v-flex",{staticClass:"caption",attrs:{xs3:""}},[t._v("\n    last seen: "),s("strong",[s("timeago",{attrs:{datetime:t.client.updatedAt}})],1)]),s("v-flex",{staticClass:"caption",attrs:{xs4:""}},[t.owner?s("span",[t._v("Client Owner: "),s("strong",[t._v(t._s(t.owner.name)+" "+t._s(t.owner.surname))])]):t._e()])],1)}),n=[],o=(s("7514"),{name:"ClientCard",props:{client:Object},computed:{owner:function(){var t=this,e=this.$store.state.users.find(function(e){return e._id===t.client.owner});return e||this.$store.dispatch("getUser",{_id:this.client.owner}),e},icon:function(){return"sender"===this.client.role.toLowerCase()?"cloud_upload":"receiver"===this.client.role.toLowerCase()?"cloud_download":"hearing"}},data:function(){return{}},methods:{}}),c=o,u=(s("c036"),s("2877")),d=Object(u["a"])(c,i,n,!1,null,"479e63a7",null);d.options.__file="ClientCard.vue";var l=d.exports,m={name:"StreamDetailNetwork",components:{ClientCard:l},props:{stream:Object},watch:{stream:function(t,e){this.fetchData()}},computed:{canEdit:function(){return!!this.isOwner||-1!==this.stream.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.stream.owner===this.$store.state.user._id},senders:function(){return this.stream.onlineEditable?[{role:"sender",documentType:"",documentName:"Web UI",updatedAt:this.stream.updatedAt,owner:this.stream.owner}]:this.$store.getters.streamClients(this.stream.streamId).filter(function(t){return"sender"===t.role.toLowerCase()})},receivers:function(){return this.$store.getters.streamClients(this.stream.streamId).filter(function(t){return"receiver"===t.role.toLowerCase()})},clients:function(){return this.$store.getters.streamClients(this.stream.streamId)}},methods:{fetchData:function(){this.$store.dispatch("getStreamClients",{streamId:this.stream.streamId})}},created:function(){this.fetchData()}},v=m,p=(s("da36"),Object(u["a"])(v,r,a,!1,null,"3f0de2b7",null));p.options.__file="StreamDetailNetwork.vue";e["a"]=p.exports},7394:function(t,e,s){},8450:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.resource?s("v-card",{staticClass:"elevation-0"},[s("v-toolbar",{staticClass:"elevation-0 transparent"},[s("v-icon",{attrs:{left:"",small:""}},[t._v("book")]),s("span",{staticClass:"title font-weight-light"},[t._v(t._s(t.title)+" Description")]),s("v-spacer"),s("v-toolbar-items",[!1===t.editDescription&&t.canEdit?s("v-btn",{attrs:{flat:"",color:"primary"},nativeOn:{click:function(e){t.editDescription=!0}}},[t._v("Edit")]):t._e(),!0===t.editDescription?s("v-btn",{attrs:{flat:"",color:"primary"},nativeOn:{click:function(e){return t.updateDescription(e)}}},[t._v("Done")]):t._e()],1)],1),s("v-divider"),s("v-card-text",[s("v-layout",{directives:[{name:"show",rawName:"v-show",value:!t.editDescription,expression:"!editDescription"}]},[s("v-flex",{attrs:{xs12:""},domProps:{innerHTML:t._s(t.compiledDescription)}})],1),s("v-layout",{directives:[{name:"show",rawName:"v-show",value:t.editDescription,expression:"editDescription"}],attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"caption",attrs:{xs12:""}},[t._v("\n        Supports "),s("a",{attrs:{target:"_blank",href:"https://en.wikipedia.org/wiki/Markdown#Example"}},[t._v("markdown:")]),s("strong",[t._v(" ** bold **")]),t._v(", "),s("i",[t._v("* italic *")]),t._v(", "),s("code",[t._v("# Heading 1")]),t._v(", "),s("code",[t._v("## Heading 2")]),t._v(", "),s("code",[t._v("[links](http://example.com)")]),t._v(", etc.\n      ")]),s("v-flex",{attrs:{xs12:""}},[s("v-textarea",{attrs:{box:"",rows:"15"},model:{value:t.resource.description,callback:function(e){t.$set(t.resource,"description",e)},expression:"resource.description"}})],1)],1)],1),t.isStream?s("v-toolbar",{staticClass:"elevation-0 transparent",attrs:{transparent:"",dense:""}},[s("v-icon",{attrs:{left:"",small:""}},[t._v("power_input")]),s("span",{staticClass:"title font-weight-light"},[t._v("Units")])],1):t._e(),s("v-divider"),t.resource.baseProperties?s("v-card-text",{staticClass:"md-caption"},[s("span",[s("strong",[t._v("Units:")]),t._v(" "+t._s(t.resource.baseProperties.units))]),t._v(";\n    "),s("span",[s("strong",[t._v("Tolerance:")]),t._v(" "+t._s(t.resource.baseProperties.tolerance))]),t._v(".\n  ")]):t._e()],1):t._e()},a=[],i=(s("f7fe"),s("0e54")),n=s.n(i),o={name:"DetailDescription",props:{resource:Object},computed:{title:function(){return this.isStream?"Stream":this.isProcessor?"Processor":"Project"},compiledDescription:function(){return n()(this.resource.description,{sanitize:!0})},canEdit:function(){return!!this.isOwner||-1!==this.resource.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.resource.owner===this.$store.state.user._id},isStream:function(){return this.resource.hasOwnProperty("streamId")},isProcessor:function(){return this.resource.hasOwnProperty("blocks")}},data:function(){return{editDescription:!1}},methods:{updateDescription:function(){this.editDescription=!1,this.isStream?this.$store.dispatch("updateStream",{streamId:this.resource.streamId,description:this.resource.description}):this.isProcessor?this.$store.dispatch("updateProcessor",{_id:this.resource._id,description:this.resource.description}):this.$store.dispatch("updateProject",{_id:this.resource._id,description:this.resource.description})}}},c=o,u=(s("3c97"),s("2877")),d=Object(u["a"])(c,r,a,!1,null,"14a82606",null);d.options.__file="DetailDescription.vue";e["a"]=d.exports},"85f2":function(t,e,s){t.exports=s("ec5b")},"895e":function(t,e,s){},a29c:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("detail-description",{attrs:{resource:t.stream}}),s("stream-detail-network",{attrs:{stream:t.stream}}),s("v-card",{staticClass:"elevation-0 pt-4"},[s("v-toolbar",{staticClass:"elevation-0 transparent",attrs:{dense:""}},[s("v-icon",{attrs:{small:"",left:""}},[t._v("business")]),t._v(" \n        "),s("span",{staticClass:"title font-weight-light"},[t._v("Projects")])],1),s("v-divider"),s("v-card-text",[t._l(t.streamProjects,function(e,r){return s("v-chip",{key:e._id,staticClass:"md-primary",attrs:{"md-clickable":""}},[s("router-link",{attrs:{to:"/projects/"+e._id}},[t._v(t._s(e.name))]),t._v(" \n        ")],1)}),0===t.streamProjects.length?s("p",[t._v("This stream is not part of any projects.")]):t._e()],2)],1)],1)],1)},a=[],i=(s("6762"),s("2fdb"),s("ac6a"),s("7514"),s("f7fe"),s("13bb")),n=s.n(i),o=s("bdd8"),c=s("8450"),u=s("5f9d"),d=s("a41d"),l={name:"StreamDetailView",components:{StreamDetailTitle:o["a"],DetailDescription:c["a"],StreamDetailNetwork:u["a"],StreamDetailComments:d["a"]},computed:{stream:function(){var t=this,e=this.$store.state.streams.find(function(e){return e.streamId===t.$route.params.streamId});return e},canEdit:function(){return!!this.isOwner||-1!==this.stream.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.stream.owner===this.$store.state.user._id},streamProjects:function(){var t=this;return this.$store.state.projects.filter(function(e){return-1!==e.streams.indexOf(t.stream.streamId)})}},data:function(){return{error:"",editDescription:!1}},methods:{restore:function(){this.$store.dispatch("updateStream",{streamId:this.stream.streamId,deleted:!1})}},mounted:function(){var t=this,e=this.$store.state.streams.find(function(e){return e.streamId===t.$route.params.streamId});e?(this.$store.dispatch("getUser",{_id:e.owner}),n()(e.canRead,e.canWrite).forEach(function(e){return t.$store.dispatch("getUser",{_id:e})})):this.$store.dispatch("getStream",{streamId:this.$route.params.streamId}).then(function(e){t.$store.dispatch("getUser",{_id:e.data.resource.owner}),n()(e.data.resource.canRead,e.data.resource.canWrite).forEach(function(e){return t.$store.dispatch("getUser",{_id:e})})}).catch(function(e){e.message.includes("404")&&(t.error="Stream ".concat(t.$route.params.streamId," was not found.")),e.message.includes("401")&&(t.error="Stream ".concat(t.$route.params.streamId," is not accessible to you due to its protection level."))})}},m=l,v=(s("a682"),s("2877")),p=Object(v["a"])(m,r,a,!1,null,"1021f730",null);p.options.__file="StreamOverview.vue";e["default"]=p.exports},a41d:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("md-card",{staticClass:"md-elevation-3"},[s("md-card-content",[s("div",{staticClass:"md-title"},[t._v("Comments")]),s("md-divider",{attrs:{"md-inset":""}}),s("p",[t._v("TODO")])],1)],1)},a=[],i=(s("f7fe"),{name:"StreamDetailUserComments",props:{stream:Object},computed:{canEdit:function(){return!!this.isOwner||-1!==this.stream.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.stream.owner===this.$store.state.user._id}},methods:{}}),n=i,o=(s("5208"),s("2877")),c=Object(o["a"])(n,r,a,!1,null,"a151e346",null);c.options.__file="StreamDetailComments.vue";e["a"]=c.exports},a682:function(t,e,s){"use strict";var r=s("895e"),a=s.n(r);a.a},b870:function(t,e,s){},bd86:function(t,e,s){"use strict";s.d(e,"a",function(){return i});var r=s("85f2"),a=s.n(r);function i(t,e,s){return e in t?a()(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}},bdd8:function(t,e,s){"use strict";var r,a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"elevation-0 pa-3"},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"display-1 font-weight-light text-capitalize my-5",attrs:{xs12:""}},[s("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){return t.$router.push("/view/"+t.stream.streamId)}}},[s("v-icon",[t._v("360")])],1),t.canEdit?s("editable-span",{attrs:{text:t.stream.name},on:{update:t.updateName}}):s("span",[t._v(t._s(t.stream.name))])],1),s("v-flex",{staticClass:"caption",staticStyle:{"line-height":"32px"},attrs:{xs12:""}},[s("v-icon",{attrs:{small:""}},[t._v("fingerprint")]),t._v(" "),s("strong",{staticStyle:{"user-select":"all"}},[t._v(t._s(t.stream.streamId))]),t._v(" \n      "),s("v-icon",{attrs:{small:""}},[t._v("edit")]),t._v(" "),s("timeago",{attrs:{datetime:t.stream.updatedAt}}),t._v(" \n      "),s("v-icon",{attrs:{small:""}},[t._v("access_time")]),t._v("  "+t._s(t.createdAt)+" \n      "),s("v-icon",{attrs:{small:""}},[t._v(t._s(t.stream.private?"lock":"lock_open"))]),t._v(" link sharing "+t._s(t.stream.private?"off":"on")+"  \n      "),s("v-icon",{attrs:{small:""}},[t._v("person_outline")]),t._v(" "+t._s(t.allUsers.length)+"  \n      "),s("v-icon",{attrs:{small:""}},[t._v("history")]),t._v(" "+t._s(t.stream.children.length)+"  \n      "),s("span",{staticClass:"caption font-weight-light text-uppercase"},[t._v("Owned by "),s("strong",[t._v(t._s(t.owner))])])],1),s("v-flex",{staticClass:"ma-0 pa-0 mb-2",attrs:{xs12:""}},[s("v-combobox",{attrs:{"menu-props":{maxHeight:0,zIndex:"0"},"md-disabled":"!canEdit",items:t.stream.tags,hint:"add or remove tags",solo:"","persistent-hint":"","small-chips":"","deletable-chips":"",multiple:"",tags:""},on:{input:t.updateTags},scopedSlots:t._u([{key:"no-data",fn:function(){return[t._v("stream has no tags.")]},proxy:!0}]),model:{value:t.stream.tags,callback:function(e){t.$set(t.stream,"tags",e)},expression:"stream.tags"}})],1)],1)],1)},i=[],n=s("bd86"),o=(s("7f7f"),s("6762"),s("2fdb"),s("7514"),s("f7fe")),c=s.n(o),u=s("13bb"),d=s.n(u),l={name:"StreamDetailTitle",props:{stream:Object},computed:(r={canEdit:function(){return!!this.isOwner||-1!==this.stream.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.stream.owner===this.$store.state.user._id},streamProjects:function(){var t=this;return this.$store.state.projects.filter(function(e){return-1!==e.streams.indexOf(t.stream.streamId)})},viewLink:function(){var t=new URL(this.$store.state.server);return t.origin+"/view?streams=".concat(this.stream.streamId)}},Object(n["a"])(r,"isOwner",function(){return this.stream.owner===this.$store.state.user._id}),Object(n["a"])(r,"allUsers",function(){return d()(this.stream.canRead,this.stream.canWrite)}),Object(n["a"])(r,"owner",function(){var t=this,e=this.$store.state.users.find(function(e){return e._id===t.stream.owner});return e||this.$store.dispatch("getUser",{_id:this.stream.owner}),e?e.surname.includes("is you")?"you":"".concat(e.name," ").concat(e.surname):"Loading"}),Object(n["a"])(r,"createdAt",function(){var t=new Date(this.stream.createdAt);return t.toLocaleString("en",{year:"numeric",month:"long",day:"numeric"})}),r),data:function(){return{tag:null}},methods:{updateTags:c()(function(t){this.$store.dispatch("updateStream",{streamId:this.stream.streamId,tags:this.stream.tags})},1e3),updateName:function(t){this.$store.dispatch("updateStream",{streamId:this.stream.streamId,name:t.text})}},mounted:function(){}},m=l,v=(s("f031"),s("2877")),p=Object(v["a"])(m,a,i,!1,null,"1c5fa5ca",null);p.options.__file="StreamDetailTitle.vue";e["a"]=p.exports},c036:function(t,e,s){"use strict";var r=s("f48c"),a=s.n(r);a.a},da36:function(t,e,s){"use strict";var r=s("e702"),a=s.n(r);a.a},e341:function(t,e,s){var r=s("d13f");r(r.S+r.F*!s("7d95"),"Object",{defineProperty:s("3adc").f})},e702:function(t,e,s){},ec5b:function(t,e,s){s("e341");var r=s("a7d3").Object;t.exports=function(t,e,s){return r.defineProperty(t,e,s)}},f031:function(t,e,s){"use strict";var r=s("7394"),a=s.n(r);a.a},f48c:function(t,e,s){}}]);
//# sourceMappingURL=chunk-64ccd1ca.26def829.js.map