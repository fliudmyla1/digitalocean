import{m as o}from"./marked.esm.c06bdf4e.js";import{_ as l,o as n,c as i,a as t,t as r,F as d}from"./vendor.395bafa6.js";const c={name:"Details",data(){return{slug:this.$route.params.slug,details:{}}},computed:{markdownToHtml(){if(this.details.details)return o.parse(this.details.details.toString())}},created(){this.getTownhallData()},methods:{getTownhallData(){api.getTownhallData({slug:this.slug},s=>{s.data.townhall&&(console.log(this.$store.getters.name),this.details=s.data.townhall.details)},s=>{console.log(s)})}}},_={class:"head p-2",style:{width:"100%"}},h=t("span",{class:"px-3 py-1 fs-5 fw-bolder",style:{"border-right":"2px solid #959595"}},"Details ",-1),m={class:"options"},p={class:"right-section-content"},u=["src"],g=["innerHTML"];function f(s,w,v,D,e,a){return n(),i(d,null,[t("div",_,[h,t("div",m,[t("span",null,r(e.details.name),1)])]),t("div",p,[t("img",{src:e.details.bannerPhoto,style:{height:"220px"}},null,8,u),t("div",{innerHTML:a.markdownToHtml,class:"custom-markdown"},null,8,g)])],64)}var y=l(c,[["render",f]]);export{y as default};
