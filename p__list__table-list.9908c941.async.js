(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4747],{12648:function(ye,V,r){"use strict";r.r(V),r.d(V,{default:function(){return fe}});var Ce=r(57338),N=r(25084),ge=r(57663),w=r(71577),je=r(47673),z=r(4107),K=r(93224),j=r(2824),Z=r(11849),Se=r(34792),p=r(48086),f=r(3182),H=r(94043),n=r.n(H),J=r(49101),y=r(67294),Q=r(15103),X=r(85224),k=r(16894),q=r(37476),I=r(5966),P=r(90672),_=r(12826),xe=r(71194),ee=r(57016),x=r(65554),A=r(64317),re=r(86615),ue=r(22452),u=r(85893),ae=function(t){return(0,u.jsxs)(x.Z,{stepsProps:{size:"small"},stepsFormRender:function(a,c){return(0,u.jsx)(ee.Z,{width:640,bodyStyle:{padding:"32px 40px 48px"},destroyOnClose:!0,title:"\u89C4\u5219\u914D\u7F6E",visible:t.updateModalVisible,footer:c,onCancel:function(){t.onCancel()},children:a})},onFinish:t.onSubmit,children:[(0,u.jsxs)(x.Z.StepForm,{initialValues:{name:t.values.name,desc:t.values.desc},title:"\u57FA\u672C\u4FE1\u606F",children:[(0,u.jsx)(I.Z,{name:"name",label:"\u89C4\u5219\u540D\u79F0",width:"md",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u89C4\u5219\u540D\u79F0\uFF01"}]}),(0,u.jsx)(P.Z,{name:"desc",width:"md",label:"\u89C4\u5219\u63CF\u8FF0",placeholder:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u89C4\u5219\u63CF\u8FF0\uFF01",min:5}]})]}),(0,u.jsxs)(x.Z.StepForm,{initialValues:{target:"0",template:"0"},title:"\u914D\u7F6E\u89C4\u5219\u5C5E\u6027",children:[(0,u.jsx)(A.Z,{name:"target",width:"md",label:"\u76D1\u63A7\u5BF9\u8C61",valueEnum:{0:"\u8868\u4E00",1:"\u8868\u4E8C"}}),(0,u.jsx)(A.Z,{name:"template",width:"md",label:"\u89C4\u5219\u6A21\u677F",valueEnum:{0:"\u89C4\u5219\u6A21\u677F\u4E00",1:"\u89C4\u5219\u6A21\u677F\u4E8C"}}),(0,u.jsx)(re.Z.Group,{name:"type",label:"\u89C4\u5219\u7C7B\u578B",options:[{value:"0",label:"\u5F3A"},{value:"1",label:"\u5F31"}]})]}),(0,u.jsxs)(x.Z.StepForm,{initialValues:{type:"1",frequency:"month"},title:"\u8BBE\u5B9A\u8C03\u5EA6\u5468\u671F",children:[(0,u.jsx)(ue.Z,{name:"time",width:"md",label:"\u5F00\u59CB\u65F6\u95F4",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4\uFF01"}]}),(0,u.jsx)(A.Z,{name:"frequency",label:"\u76D1\u63A7\u5BF9\u8C61",width:"md",valueEnum:{month:"\u6708",week:"\u5468"}})]})]})},te=ae,E=r(48910);function ne(d,t){return B.apply(this,arguments)}function B(){return B=(0,f.Z)(n().mark(function d(t,i){return n().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,E.WY)("/api/rule",(0,Z.Z)({method:"GET",params:(0,Z.Z)({},t)},i||{})));case 1:case"end":return c.stop()}},d)})),B.apply(this,arguments)}function se(d){return T.apply(this,arguments)}function T(){return T=(0,f.Z)(n().mark(function d(t){return n().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,E.WY)("/api/rule",(0,Z.Z)({method:"PUT"},t||{})));case 1:case"end":return a.stop()}},d)})),T.apply(this,arguments)}function le(d){return b.apply(this,arguments)}function b(){return b=(0,f.Z)(n().mark(function d(t){return n().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,E.WY)("/api/rule",(0,Z.Z)({method:"POST"},t||{})));case 1:case"end":return a.stop()}},d)})),b.apply(this,arguments)}function ie(d){return $.apply(this,arguments)}function $(){return $=(0,f.Z)(n().mark(function d(t){return n().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,E.WY)("/api/rule",(0,Z.Z)({method:"DELETE"},t||{})));case 1:case"end":return a.stop()}},d)})),$.apply(this,arguments)}var de=function(){var d=(0,f.Z)(n().mark(function t(i){var a;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.default.loading("\u6B63\u5728\u6DFB\u52A0"),e.prev=1,e.next=4,le((0,Z.Z)({},i));case 4:return a(),p.default.success("\u6DFB\u52A0\u6210\u529F"),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(1),a(),p.default.error("\u6DFB\u52A0\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01"),e.abrupt("return",!1);case 14:case"end":return e.stop()}},t,null,[[1,9]])}));return function(i){return d.apply(this,arguments)}}(),oe=function(){var d=(0,f.Z)(n().mark(function t(i){var a;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.default.loading("\u6B63\u5728\u914D\u7F6E"),e.prev=1,e.next=4,se({name:i.name,desc:i.desc,key:i.key});case 4:return a(),p.default.success("\u914D\u7F6E\u6210\u529F"),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(1),a(),p.default.error("\u914D\u7F6E\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01"),e.abrupt("return",!1);case 14:case"end":return e.stop()}},t,null,[[1,9]])}));return function(i){return d.apply(this,arguments)}}(),ce=function(){var d=(0,f.Z)(n().mark(function t(i){var a;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=p.default.loading("\u6B63\u5728\u5220\u9664"),i){e.next=3;break}return e.abrupt("return",!0);case 3:return e.prev=3,e.next=6,ie({key:i.map(function(R){return R.key})});case 6:return a(),p.default.success("\u5220\u9664\u6210\u529F\uFF0C\u5373\u5C06\u5237\u65B0"),e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e.catch(3),a(),p.default.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),e.abrupt("return",!1);case 16:case"end":return e.stop()}},t,null,[[3,11]])}));return function(i){return d.apply(this,arguments)}}(),me=function(){var t=(0,y.useState)(!1),i=(0,j.Z)(t,2),a=i[0],c=i[1],e=(0,y.useState)(!1),R=(0,j.Z)(e,2),he=R[0],D=R[1],ve=(0,y.useState)(!1),M=(0,j.Z)(ve,2),pe=M[0],U=M[1],C=(0,y.useRef)(),Ze=(0,y.useState)(),W=(0,j.Z)(Ze,2),h=W[0],S=W[1],Fe=(0,y.useState)([]),Y=(0,j.Z)(Fe,2),g=Y[0],G=Y[1],L=[{title:"\u89C4\u5219\u540D\u79F0",dataIndex:"name",tip:"\u89C4\u5219\u540D\u79F0\u662F\u552F\u4E00\u7684 key",render:function(s,l){return(0,u.jsx)("a",{onClick:function(){S(l),U(!0)},children:s})}},{title:"\u63CF\u8FF0",dataIndex:"desc",valueType:"textarea"},{title:"\u670D\u52A1\u8C03\u7528\u6B21\u6570",dataIndex:"callNo",sorter:!0,hideInForm:!0,renderText:function(s){return"".concat(s,"\u4E07")}},{title:"\u72B6\u6001",dataIndex:"status",hideInForm:!0,valueEnum:{0:{text:"\u5173\u95ED",status:"Default"},1:{text:"\u8FD0\u884C\u4E2D",status:"Processing"},2:{text:"\u5DF2\u4E0A\u7EBF",status:"Success"},3:{text:"\u5F02\u5E38",status:"Error"}}},{title:"\u4E0A\u6B21\u8C03\u5EA6\u65F6\u95F4",sorter:!0,dataIndex:"updatedAt",valueType:"dateTime",renderFormItem:function(s,l,v){var F=l.defaultRender,m=(0,K.Z)(l,["defaultRender"]),O=v.getFieldValue("status");return"".concat(O)==="0"?!1:"".concat(O)==="3"?(0,u.jsx)(z.Z,(0,Z.Z)((0,Z.Z)({},m),{},{placeholder:"\u8BF7\u8F93\u5165\u5F02\u5E38\u539F\u56E0\uFF01"})):F(s)}},{title:"\u64CD\u4F5C",dataIndex:"option",valueType:"option",render:function(s,l){return[(0,u.jsx)("a",{onClick:function(){D(!0),S(l)},children:"\u914D\u7F6E"},"config"),(0,u.jsx)("a",{href:"https://procomponents.ant.design/",children:"\u8BA2\u9605\u8B66\u62A5"},"subscribeAlert")]}}];return(0,u.jsxs)(Q.ZP,{children:[(0,u.jsx)(k.ZP,{headerTitle:"\u67E5\u8BE2\u8868\u683C",actionRef:C,rowKey:"key",search:{labelWidth:120},toolBarRender:function(){return[(0,u.jsxs)(w.Z,{type:"primary",onClick:function(){c(!0)},children:[(0,u.jsx)(J.Z,{})," \u65B0\u5EFA"]},"primary")]},request:ne,columns:L,rowSelection:{onChange:function(s,l){G(l)}}}),(g==null?void 0:g.length)>0&&(0,u.jsxs)(X.Z,{extra:(0,u.jsxs)("div",{children:["\u5DF2\u9009\u62E9"," ",(0,u.jsx)("a",{style:{fontWeight:600},children:g.length})," ","\u9879 \xA0\xA0",(0,u.jsxs)("span",{children:["\u670D\u52A1\u8C03\u7528\u6B21\u6570\u603B\u8BA1 ",g.reduce(function(o,s){return o+s.callNo},0)," \u4E07"]})]}),children:[(0,u.jsx)(w.Z,{onClick:(0,f.Z)(n().mark(function o(){var s,l;return n().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,ce(g);case 2:G([]),(s=C.current)===null||s===void 0||(l=s.reloadAndRest)===null||l===void 0||l.call(s);case 4:case"end":return F.stop()}},o)})),children:"\u6279\u91CF\u5220\u9664"}),(0,u.jsx)(w.Z,{type:"primary",children:"\u6279\u91CF\u5BA1\u6279"})]}),(0,u.jsxs)(q.Z,{title:"\u65B0\u5EFA\u89C4\u5219",width:"400px",visible:a,onVisibleChange:c,onFinish:function(){var o=(0,f.Z)(n().mark(function s(l){var v;return n().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,de(l);case 2:v=m.sent,v&&(c(!1),C.current&&C.current.reload());case 4:case"end":return m.stop()}},s)}));return function(s){return o.apply(this,arguments)}}(),children:[(0,u.jsx)(I.Z,{rules:[{required:!0,message:"\u89C4\u5219\u540D\u79F0\u4E3A\u5FC5\u586B\u9879"}],width:"md",name:"name"}),(0,u.jsx)(P.Z,{width:"md",name:"desc"})]}),(0,u.jsx)(te,{onSubmit:function(){var o=(0,f.Z)(n().mark(function s(l){var v;return n().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,oe(l);case 2:v=m.sent,v&&(D(!1),S(void 0),C.current&&C.current.reload());case 4:case"end":return m.stop()}},s)}));return function(s){return o.apply(this,arguments)}}(),onCancel:function(){D(!1),S(void 0)},updateModalVisible:he,values:h||{}}),(0,u.jsx)(N.Z,{width:600,visible:pe,onClose:function(){S(void 0),U(!1)},closable:!1,children:(h==null?void 0:h.name)&&(0,u.jsx)(_.Z,{column:2,title:h==null?void 0:h.name,request:(0,f.Z)(n().mark(function o(){return n().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",{data:h||{}});case 1:case"end":return l.stop()}},o)})),params:{id:h==null?void 0:h.name},columns:L})})]})},fe=me}}]);
