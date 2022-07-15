import{_ as f,i as b,r as w,o as l,c as n,a as t,t as c,F as r,d as h,e as y,f as g,p as k,w as _,v as u,q as m,h as d}from"./vendor.395bafa6.js";import{_ as x,a as v}from"./logo-icon.f0c5b91f.js";const A={name:"Profile",data(){return{account:{name:"",address:"",bio:""},tempAccount:{name:"",bio:""},test:"",bio:"",townhalls:[],superwardens:[],masters:[],wardens:[],profileModalShow:!1,validation:{invalid:{},valid:{}}}},watch:{bio(s,e){this.bio&&(this.bio.length>120?this.bio=e:this.bio=s),this.tempAccount.bio=this.bio}},computed:{},created(){this.getProfile()},mounted(){},methods:{trimmedAccountName(s){return s.length>12?s.slice(0,5)+"..."+s.slice(s.length-5,s.length):s},trimmedAccountAddress(s){return s.length>10?s.slice(0,5)+"..."+s.slice(s.length-5,s.length):s},trimmedAccountBio(s){return s.length>95?s.slice(0,5)+"..."+s.slice(s.length-5,s.length):s},trimmedTownhallName(s){return s.length>20?s.slice(0,15)+"..."+s.slice(s.length-4,s.length):s},trimmedTownhallBio(s){return s.length>95?s.slice(0,95)+"...":s},closeModal(){this.profileModalShow=!1},editProfile(){this.profileModalShow=!0,this.tempAccount.name=this.account.name,this.tempAccount.bio=this.account.bio,this.bio=this.account.bio},async validateEditForm(){let s=0;if(this.tempAccount.name!=this.account.name){if(!this.tempAccount.name&&(await b.get("http://164.92.118.10/api/v1/search/accountName?s="+this.tempAccount.name)).data.count>0){this.validation.invalid.name="This name is already taken.";return}this.validation.valid.name="The name of townhall is valid"}else s+=1;if(this.tempAccount.bio!=this.account.bio||(s+=1),s==2){this.$toast.error("Nothing to update.");return}this.updateProfile(this.tempAccount),this.resetValidation()},clearValidation:function(s){this.validation.valid[s]="",this.validation.invalid[s]=""},resetValidation(){this.validation.valid={},this.validation.invalid={}},myFunction(){var s=this.account.address;navigator.clipboard.writeText(s);var e=document.getElementById("myTooltip");e.innerHTML="Copied"},updateProfile(s){api.updateProfile({_addr:this.$store.getters._addr,account:s},async e=>{this.account=e.data.account,await this.$parent.$parent.getAccountData(),this.profileModalShow=!1,this.$toast.success("Updated your profile."),this.getProfile()},e=>{console.log(e)})},getProfile(){api.getProfile({_addr:this.$store.getters._addr},s=>{this.account=s.data.account,console.log("profile"),console.log(this.account),this.townhalls=[],this.superwardens=[],this.wardens=[],this.townhalls=s.data.townhalls,this.townhalls.map(e=>{e.superwarden==this.account.address?this.superwardens.push(e):e.details.master.includes(this.account.name)||e.details.master.includes(this.account.address)?this.masters.push(e):(e.details.warden.includes(this.account.name)||e.details.warden.includes(this.account.address))&&this.wardens.push(e)})},s=>{console.log(s)})}}},M={class:""},P={class:"content row"},V={class:"col-12 col-lg-5"},N={class:"left-block p-4 mb-4"},T={class:"head"},S={key:0,class:"title"},C={key:1,class:"title"},F={class:"coppy"},B={class:"superwarden-tooltip"},E=t("span",{class:"tooltiptext",id:"myTooltip"},"Copy to",-1),U={key:0,class:"description my-4"},z={key:1,class:"description my-4"},D=t("span",null,"Edit Profile",-1),j=[D],L={class:"col-12 col-lg-7"},q={class:"block-container-profile mb-4"},H=t("div",{class:"block-head"},[t("span",{class:"block-title"},"Joined Townhall")],-1),I={class:"block-contect"},J={class:"items"},W=["src"],X={class:"block-container-profile mb-4"},G=t("div",{class:"block-head"},[t("span",{class:"block-title"}," Superwarden of")],-1),K={key:0},O=t("div",{class:"block-contect"},[t("span",{class:"block-title",style:{color:"#959595"}},"Not a warden of any townhall.")],-1),Q=[O],R={class:"block-contect"},Y={class:"row"},Z={class:"col-12 col-lg-5 col-xl-4 col-xxl-3"},$=["src"],tt={class:"col-12 col-lg-7 col-xl-8 col-xxl-9",style:{display:"flex","flex-direction":"column"}},st={class:"block-title",style:{color:"black"}},et={class:"mt-1 mb-2 villagers"},ot={class:"text-dark"},it={class:"block-container-profile mb-4"},lt=t("div",{class:"block-head"},[t("span",{class:"block-title"}," Warden of")],-1),nt={key:0},at=t("div",{class:"block-contect"},[t("span",{class:"block-title",style:{color:"#959595"}},"Not a warden of any townhall.")],-1),ct=[at],dt={key:1},rt=t("div",{class:"block-contect"},[t("div",{class:"items"},[t("img",{src:v})])],-1),ht=[rt],_t={class:"block-container-profile mb-4"},ut=t("div",{class:"block-head"},[t("span",{class:"block-title"}," Master of")],-1),mt={key:0},vt=t("div",{class:"block-contect"},[t("span",{class:"block-title",style:{color:"#959595"}},"Not a master of any townhall.")],-1),pt=[vt],ft={key:1},bt=t("div",{class:"block-contect"},[t("div",{class:"items"},[t("img",{src:v})])],-1),wt=[bt],yt={class:"modal-dialog",style:{"min-width":"600px"}},gt={class:"modal-content"},kt=t("button",{style:{right:"15px",position:"absolute"},type:"button",class:"close border-0 mt-2 fs-4","aria-label":"Close"},[t("span",{"aria-hidden":"true"},"\xD7")],-1),xt=[kt],At=t("p",{class:"modal-title mt-4 text-center text-dark fw-bolder",style:{"font-size":"25px"}},"Edit Profile",-1),Mt={class:"mb-3 mt-3"},Pt=t("label",{class:"form-label fw-bolder fs-6"},"Name",-1),Vt={key:0,class:"valid-feedback"},Nt={key:1,class:"invalid-feedback"},Tt={class:"mb-3"},St=t("label",{for:"bio",class:"form-label fw-bolder fs-6"},"Bio",-1),Ct={key:0,class:"valid-feedback"},Ft={key:1,class:"invalid-feedback"},Bt=t("button",{type:"submit",class:"btn btn-danger text-center",style:{width:"100%"}},"Save",-1);function Et(s,e,Ut,zt,o,a){const p=w("Modal");return l(),n(r,null,[t("section",M,[t("section",P,[t("div",V,[t("div",N,[t("div",T,[o.account.name?(l(),n("span",S,c(a.trimmedAccountName(o.account.name)),1)):(l(),n("span",C,c(a.trimmedAccountAddress(o.account.address)),1)),t("div",F,[t("span",null,c(a.trimmedAccountAddress(o.account.address)),1),t("div",B,[t("img",{src:x,style:{cursor:"pointer"},onClick:e[0]||(e[0]=(...i)=>a.myFunction&&a.myFunction(...i))}),E])])]),o.account.bio?(l(),n("span",U,c(o.account.bio),1)):(l(),n("span",z)),t("button",{onClick:e[1]||(e[1]=(...i)=>a.editProfile&&a.editProfile(...i)),type:"button",class:"action-button mt-3"},j)])]),t("div",L,[t("div",q,[H,t("div",I,[(l(!0),n(r,null,h(o.townhalls,(i,Dt)=>(l(),n("div",J,[t("img",{src:i.details.avatar},null,8,W)]))),256))])]),t("div",X,[G,o.superwardens.length<1?(l(),n("div",K,Q)):(l(!0),n(r,{key:1},h(o.superwardens,i=>(l(),n("div",R,[t("div",Y,[t("div",Z,[t("img",{class:"avator",src:i.details.avatar},null,8,$)]),t("div",tt,[t("span",st,c(a.trimmedTownhallName(i.details.name)),1),t("span",et,c(i.villagers.length)+" Villagers",1),t("span",ot,c(a.trimmedTownhallBio(i.details.bio)),1)])])]))),256))]),t("div",it,[lt,o.wardens.length<1?(l(),n("div",nt,ct)):(l(),n("div",dt,ht))]),t("div",_t,[ut,o.masters.length<1?(l(),n("div",mt,pt)):(l(),n("div",ft,wt))])])])]),y(p,{modelValue:o.profileModalShow,"onUpdate:modelValue":e[8]||(e[8]=i=>o.profileModalShow=i),close:a.closeModal,style:{"z-index":"9999"}},{default:g(()=>[t("div",yt,[t("div",gt,[t("div",{onClick:e[2]||(e[2]=i=>o.profileModalShow=!1),style:{cursor:"pointer"}},xt),t("form",{class:"modal-body mx-5 px-5 py-4",onSubmit:e[7]||(e[7]=k((...i)=>a.validateEditForm&&a.validateEditForm(...i),["prevent"]))},[At,t("div",Mt,[Pt,_(t("input",{"onUpdate:modelValue":e[3]||(e[3]=i=>o.tempAccount.name=i),class:m([{"is-valid":o.validation.valid.name,"is-invalid":o.validation.invalid.name},"form-control"]),onFocus:e[4]||(e[4]=i=>a.clearValidation("name")),type:"text"},null,34),[[u,o.tempAccount.name]]),o.validation.valid.name?(l(),n("div",Vt,c(o.validation.valid.name),1)):d("",!0),o.validation.invalid.name?(l(),n("div",Nt,c(o.validation.invalid.name),1)):d("",!0)]),t("div",Tt,[St,_(t("textarea",{"onUpdate:modelValue":e[5]||(e[5]=i=>o.bio=i),class:m([{"is-valid":o.validation.valid.bio,"is-invalid":o.validation.invalid.bio},"form-control"]),onFocus:e[6]||(e[6]=i=>a.clearValidation("bio")),rows:"6",placeholder:"120 characters MAX"},null,34),[[u,o.bio]]),o.validation.valid.bio?(l(),n("div",Ct,c(o.validation.valid.bio),1)):d("",!0),o.validation.invalid.bio?(l(),n("div",Ft,c(o.validation.invalid.bio),1)):d("",!0)]),Bt],32)])])]),_:1},8,["modelValue","close"])],64)}var qt=f(A,[["render",Et]]);export{qt as default};
