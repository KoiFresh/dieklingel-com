import d from"./ContentQuery.41fe478a.js";import{l as c,m as l,s as p}from"./entry.bf2ff9a1.js";import"./query.a83f8ff1.js";import"./preview.ee4fc56a.js";import"./utils.43671059.js";const u=(r,t)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:r,data:t},null,2)),y=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(r){const t=l(),{path:f,query:o}=r,m={...o||{},path:f||(o==null?void 0:o.path)||"/"};return p(d,m,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:n})=>t.default({list:e,refresh:a,isPartial:n,...this.$attrs}):e=>u("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):u("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):u("not-found",e==null?void 0:e.data)}})}}),s=y;export{s as default};
