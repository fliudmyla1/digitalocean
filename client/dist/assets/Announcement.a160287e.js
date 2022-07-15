import{h as A}from"./moment.9709ab41.js";import{_ as b}from"./staricon.d44262aa.js";import{_ as y,a as x}from"./line1.79af986b.js";import{_ as v}from"./townhall-quiet.bad14889.js";import{_ as k,o as a,c,a as s,q as d,h,F as g,d as C,g as _,t as i}from"./vendor.395bafa6.js";const T={name:"Proposal",data(){return{slug:this.$route.params.slug,index:"",date:"",announcements:[]}},computed:{role(){return this.$parent.$parent.role}},created(){this.getAnnouncementList("all")},mounted(){},methods:{trimmedAccountAddress(e){return e.length>10?e.slice(0,5)+"..."+e.slice(e.length-5,e.length):e},trimmedAccountNameAndLowercase(e){let t=e.replace(/[, ]+/g,"").trim().toLowerCase();return t.length>12?t.slice(0,9)+"..."+t.slice(t.length-4,t.length):t},trimmedAnnounceTitle(e){return e.length>38?e.slice(0,40)+"...":e},trimmedAnnounceSummary(e){return e.length>334?e.slice(0,334)+"...":e},goAnnounceDetail(e){this.$router.push(`/announcement/detail/${e}`)},getDateString(e){const t=["January","February","March","April","May","June","July","August","September","October","November","December"];let r=new Date(e);const m=("0"+r.getDate()).slice(-2),l=t[r.getMonth()],o=r.getFullYear();return`${m} ${l} ${o}`},goCreateAnnouncement(){this.$router.push(`/announcement/create/${this.slug}`)},getAnnouncementList(e){this.index=e,api.getAnnouncementList({slug:this.slug,index:this.index},t=>{this.announcements=t.data.list,this.announcements.map((r,m)=>{var l=new Date(r.expire_at);let o=A().utcOffset(r.timezone.offset).utcOffset()*60*1e3,n=l.getTime()-o,u=new Date,p=u.getTimezoneOffset()*60*1e3,f=u.getTime()-p;n>f?r.passed=!1:r.passed=!0}),console.log(this.announcements)},t=>{console.log(t)})}}},w={class:"head p-2",style:{width:"100%"}},L=s("span",{class:"px-3 py-1 fs-5 fw-bolder",style:{"border-right":"2px solid #959595"}},"Announcement",-1),D={class:"options"},N=s("button",{class:"none"},null,-1),O={key:0,class:"right-button-holder"},S={key:0,class:"right-section-content"},V=["onClick"],j={class:"header"},z={class:"fw-bolder text-dark",style:{"font-size":"22px"}},B={key:0,class:"mb-1",src:b},F={key:0,class:"status complete"},J={key:1,class:"status active"},M={class:"fw-bolder"},q={class:"text-dark",style:{height:"100px"}},E={class:"valid-till"},I=s("img",{src:y},null,-1),P=_("Valid Till \xA0"),U=s("img",{src:x,style:{height:"20px"}},null,-1),Y={key:1,class:"right-section-no-content"},$=s("img",{src:v},null,-1),G=s("span",null,"There are no announcements currently. Let\u2019s wait for someone to broadcast. ",-1),H=[$,G];function K(e,t,r,m,l,o){return a(),c(g,null,[s("div",w,[L,s("div",D,[s("button",{onClick:t[0]||(t[0]=n=>o.getAnnouncementList("all")),class:d(l.index==="all"?"selected":"")},"All",2),N,s("button",{onClick:t[1]||(t[1]=n=>o.getAnnouncementList("important")),class:d(l.index==="important"?"selected":"")},"Important",2),s("button",{onClick:t[2]||(t[2]=n=>o.getAnnouncementList("closed")),class:d(l.index==="closed"?"selected":"")},"Closed",2)]),o.role<2?(a(),c("div",O,[s("button",{onClick:t[3]||(t[3]=(...n)=>o.goCreateAnnouncement&&o.goCreateAnnouncement(...n)),class:"right-button"},"+ Broadcast Announcement")])):h("",!0)]),l.announcements.length>0?(a(),c("div",S,[(a(!0),c(g,null,C(l.announcements,n=>(a(),c("div",{onClick:u=>o.goAnnounceDetail(n._id),class:"block-container-announcement"},[s("div",j,[s("span",z,[_(i(o.trimmedAnnounceTitle(n.title))+" ",1),n.importance?(a(),c("img",B)):h("",!0)]),n.passed?(a(),c("span",F,"closed")):(a(),c("span",J,"open"))]),s("span",M,"Broadcast by "+i(n.creator.name?o.trimmedAccountNameAndLowercase(n.creator.name)+"."+n.slug:o.trimmedAccountAddress(n.creator.address)),1),s("span",q,i(o.trimmedAnnounceSummary(n.summary)),1),s("span",E,[I,P,U,_(" "+i(o.getDateString(n.expire_at))+" ("+i("UTC "+n.timezone.offset)+")",1)])],8,V))),256))])):(a(),c("div",Y,H))],64)}var ee=k(T,[["render",K]]);export{ee as default};
