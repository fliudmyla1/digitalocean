import{s as S}from"./default.css_vue&type=style&index=0&src&lang.3148612e.js";import{_ as T,i as w,r as P,o,c as a,a as e,p as m,w as c,v,q as p,t as d,h as n,e as C,f as V,g as h,s as b,F,u as U}from"./vendor.395bafa6.js";import{_ as N}from"./upload.cf859253.js";import{_ as u}from"./index.398a18ae.js";var A="/assets/master.e92a2ec0.png",B="/assets/warden.b03fc2bd.png",I="/assets/superwarden.a950f74f.png",j="/assets/townhall-complete.f6b88f72.png";const M={name:"Setup",components:{Multiselect:S},data(){return{succeedCreationModalShow:!1,disableCreation:!1,value:[],filename:"",categories:["Media","Social","Entertainment","Protocol","Investment","Collectors","Grant","Art and Culture","Education","Research","Creator","Service"],steps:1,stepOne:{name:"",categories:[],bio:"",avatar:"",coverPhoto:"",slug:""},bio:"",tempName:"",tempSlug:"",tempAvatar:"",tempCoverPhoto:"",stepTwo:{twitter:"",discord:"",github:"",forum:"",details:"",bannerPhoto:""},tempBannerPhoto:"",stepThree:{webThrKey:"",pinataKey:"",pinataSecret:"",private:!1},stepFour:{master:""},stepFive:{warden:""},stepSix:{mtr_status:!0,threshold:{status:!1,tk_symbol:"",tk_addr:"",threshold:""},tcr:{status:!1,tk_symbol:"",tk_addr:""}},stepSeven:{role:!1,oneTownhall:!1,ready:!1},validation:{invalid:{},valid:{}}}},watch:{bio(r,s){this.bio&&(String(this.bio).match(/(\w+)/g).length>50?this.bio=s:this.bio=r),this.stepOne.bio=this.bio}},created(){},mounted(){},methods:{async validateFirstStep(){let r=!1;if(this.tempName?((await w.get("http://164.92.118.10/api/v1/search/slugName?s="+this.tempName)).data.count>0&&(this.validation.invalid.name="This name is already taken.",r=!0),this.stepOne.name=this.tempName,this.validation.valid.name="The name of townhall is valid"):(this.validation.invalid.name="Please type the name of your townhall.",r=!0),this.stepOne.categories.length<2?(this.validation.invalid.categories="Choose 2 categories that best describe your townhall",r=!0):this.validation.valid.categories="The category of townhall is valid",this.stepOne.bio?this.validation.valid.bio="The bio of townhall is valid":(this.validation.invalid.bio="Please type the bio of your townhall.",r=!0),!this.tempAvatar)this.validation.invalid.avatar="Please type the url of your townhall avatar.",r=!0;else{let s=await this.checkImageURL(this.tempAvatar);s?(this.stepOne.avatar=s,this.validation.valid.avatar="The url of avatar is valid"):(this.validation.invalid.avatar="An invalid avatar url",r=!0)}if(!this.tempCoverPhoto)this.validation.invalid.coverPhoto="Please type the url of your cover photo.",r=!0;else{let s=await this.checkImageURL(this.tempCoverPhoto);s?(this.stepOne.coverPhoto=s,this.validation.valid.coverPhoto="The url of cover photo is valid"):(this.validation.invalid.coverPhoto="An invalid photo url",r=!0)}if(!this.tempSlug)this.validation.invalid.slug="Please type the slug of your townhall.",r=!0;else{let s=this.tempSlug.replace(/\s+/g,"").trim().toLowerCase()+".tron",f=!1;(await w.get("http://164.92.118.10/api/v1/search/slugName?s="+s)).data.count==0?f=!0:f=!1,f?(this.stepOne.slug=s,this.validation.valid.slug="The slug of your townhall is valid"):(this.validation.invalid.slug="This slug is already taken.",r=!0)}r||(this.steps=2,this.resetValidation())},async validateSecondStep(){if(this.stepTwo.twitter)this.validation.valid.twitter="The url of your twitter is added.";else{this.validation.invalid.twitter="Please type the url of your twitter.";return}if(this.stepTwo.discord)this.validation.valid.discord="The url of your discord is added.";else{this.validation.invalid.discord="Please type the url of your discord.";return}if(this.stepTwo.github)this.validation.valid.github="The url of your github is added.";else{this.validation.invalid.github="Please type the url of your github.";return}if(this.stepTwo.forum)this.validation.valid.forum="The url of your forum is added.";else{this.validation.invalid.forum="Please type the url of your forum.";return}if(this.stepTwo.details)this.validation.valid.details="The md file is loaded.";else{this.validation.invalid.details="Please insert md file for details.";return}if(this.tempBannerPhoto){let r=await this.checkImageURL(this.tempBannerPhoto);if(!r){this.validation.invalid.bannerPhoto="An invalid avatar url";return}this.stepTwo.bannerPhoto=r,this.validation.valid.bannerPhoto="The url of banner photo is valid"}else{this.validation.invalid.bannerPhoto="Please type the url of your cover photo.";return}this.steps=3,this.resetValidation()},validateThirdStep(){if(this.stepThree.webThrKey)this.validation.valid.webThrKey="The API key of your web3.storage is added.";else{this.validation.invalid.webThrKey="Please type the API key of your web3.storage.";return}this.steps=4,this.resetValidation()},validateFourthStep(){this.steps=5,this.resetValidation()},validateFifthStep(){this.steps=6,this.resetValidation()},validateSixthStep(){if(this.stepSix.threshold.status){if(this.stepSix.threshold.tk_symbol)this.validation.valid.tk_symbol="The symbol of your threshold is added.";else{this.validation.invalid.tk_symbol="Please type the symbol of your threshold.";return}if(this.stepSix.threshold.tk_addr)this.validation.valid.tk_addr="The address of your threshold is added.";else{this.validation.invalid.tk_addr="Please type the address of your threshold.";return}if(this.stepSix.threshold.threshold)parseInt(this.stepSix.threshold.threshold)<0&&(this.validation.invalid.threshold="The threshold can not be less than 0."),this.validation.valid.threshold="The threshold of your threshold is added.";else{this.validation.invalid.threshold="Please type the threshold of your threshold.";return}}if(this.stepSix.tcr.status){if(this.stepSix.tcr.tk_symbol)this.validation.valid.tcr_tk_symbol="The symbol of your TRC721 is added.";else{this.validation.invalid.tcr_tk_symbol="Please type the symbol of your TRC721.";return}if(this.stepSix.tcr.tk_addr)this.validation.valid.tcr_tk_addr="The address of your TRC721 is added.";else{this.validation.invalid.tcr_tk_addr="Please type the address of your TRC721.";return}}this.steps=7,this.resetValidation()},resetValidation(){this.validation.valid={},this.validation.invalid={}},checkImageURL(r){if(r.startsWith("ipfs://")||r.startsWith("ipns://")||r.startsWith("https://")||r.startsWith("http://")){let s="https://ipfs.io";return r.startsWith("ipfs://")?r.replace("ipfs://",`${s}/ipfs/`):r.startsWith("ipns://")?r.replace("ipns://",`${s}/ipns/`):r}else return null},clearValidation:function(r){this.validation.valid[r]="",this.validation.invalid[r]=""},async backToHome(){await this.$parent.$parent.getAccountData(),this.$router.push("/")},checkCategoryNumber(){if(this.stepOne.categories.length>2){this.stepOne.categories=this.stepOne.categories.slice(0,2);return}},nextStep(){console.log(this.stepOne),this.steps+=1},onMarkdownSelected(r){if(console.log(r),typeof r!="undefined"){this.filename=r.target.files[0].name;var s=new FileReader;s.readAsText(r.target.files[0]),s.onloadend=async()=>{this.stepTwo.details=s.result}}},checkCreation(){let r=!0;for(var s=0;s<3;s++)this.stepSeven[Object.keys(this.stepSeven)[s]]||(r=!1);if(r){let f=Object.assign(this.stepOne,this.stepTwo,this.stepThree,this.stepFour,this.stepFive,this.stepSix);api.createTownHall({_addr:this.$store.getters._addr,data:f},y=>{y&&(this.succeedCreationModalShow=!0)},y=>{console.log(y)})}},createTownHall(){let r=Object.assign(this.stepOne,this.stepTwo,this.stepThree,this.stepFour,this.stepFive,this.stepSix);api.createTownHall({_addr:this.$store.getters._addr,data:r},s=>{s&&(this.succeedCreationModalShow=!0)},s=>{console.log(s)})},prevStep(){console.log(this.stepThree),this.steps-=1},change(r){console.log(r),console.log(this.search)}}},D={style:{"padding-left":"35px","margin-left":"100px"}},R=e("p",{class:"mt-5 mb-4 fw-bolder fs-1 text-dark"},"Create a townhall",-1),E={class:"col-lg-6"},O=e("p",{class:"fw-bolder fs-4"},"1. Basic Info",-1),W={class:"mb-3 mt-3"},K=e("label",{for:"name",class:"form-label fw-bolder fs-6"},"Name of the townhall",-1),H={key:0,class:"valid-feedback"},G={key:1,class:"invalid-feedback"},z={class:"mb-3"},L=e("label",{for:"category",class:"form-label fw-bolder fs-6"},"Categories",-1),Z=["onClick"],J=e("span",{class:"multiselect-tag-remove-icon"},null,-1),Q=[J],X={key:0,class:"valid-feedback"},q={key:1,class:"invalid-feedback"},Y={class:"mb-3"},$=e("label",{for:"bio",class:"form-label fw-bolder fs-6"},"Bio",-1),ee={key:0,class:"valid-feedback"},te={key:1,class:"invalid-feedback"},se={class:"mb-3 mt-3"},ie=e("label",{for:"name",class:"form-label fw-bolder fs-6"},"Avatar (Recommended | 250*250 pixel)",-1),le={key:0,class:"valid-feedback"},oe={key:1,class:"invalid-feedback"},ae={class:"mb-3 mt-3"},ne=e("label",{for:"name",class:"form-label fw-bolder fs-6"},"Cover photo (Recommended | 1920*1080 pixel)",-1),de={key:0,class:"valid-feedback"},re={key:1,class:"invalid-feedback"},ce={class:"mb-3 mt-3"},ve=e("label",{for:"slug",class:"form-label fw-bolder fs-6"},"Slug",-1),he={class:"input-group"},pe=e("span",{class:"input-group-text fw-bolder"},".tron",-1),ue={key:0,class:"valid-feedback",style:{display:"flex"}},me={key:1,class:"invalid-feedback",style:{display:"flex"}},fe=e("button",{class:"btn btn-danger float-end mt-3 px-4",type:"submit"},"Next",-1),be={class:"col-lg-6"},ye=e("p",{class:"fw-bolder fs-4"},"2. Social Media and Details",-1),_e={class:"mb-3 mt-3"},we=e("label",{for:"name",class:"form-label fw-bolder fs-6"},"Twitter",-1),ke={key:0,class:"valid-feedback"},ge={key:1,class:"invalid-feedback"},xe={class:"mb-3"},Se=e("label",{class:"form-label fw-bolder fs-6"},"Discord",-1),Te={key:0,class:"valid-feedback"},Pe={key:1,class:"invalid-feedback"},Ce={class:"mb-3 mt-3"},Ve=e("label",{for:"name",class:"form-label fw-bolder fs-6"},"Github",-1),Fe={key:0,class:"valid-feedback"},Ue={key:1,class:"invalid-feedback"},Ne={class:"mb-3 mt-3"},Ae=e("label",{for:"name",class:"form-label fw-bolder fs-6"},"Website/Forum",-1),Be={key:0,class:"valid-feedback"},Ie={key:1,class:"invalid-feedback"},je={class:"mb-3 mt-3"},Me=e("label",{for:"name",class:"form-label fw-bolder fs-6"},"Details (markdown format)",-1),De=e("p",{style:{"font-size":"12px"}}," You can upload a more detail introduction of your townhall. This will be displayed in the tonwhall \u2018Details\u2019 section. ",-1),Re=["value"],Ee=e("span",{class:"input-group-text"},[e("img",{src:N,style:{height:"22px"}})],-1),Oe={key:0,class:"valid-feedback",style:{display:"flex"}},We={key:1,class:"invalid-feedback",style:{display:"flex"}},Ke={class:"mb-3 mt-3"},He=e("label",{for:"name",class:"form-label fw-bolder fs-6"},"Banner photo for \u2018Details\u2019 (Recommended | 1920*400 pixel)",-1),Ge={key:0,class:"valid-feedback"},ze={key:1,class:"invalid-feedback"},Le=e("b",null,"\u2190 Back",-1),Ze=[Le],Je=e("button",{type:"submit",class:"btn btn-danger float-end mt-3 px-4"},"Next",-1),Qe={class:"col-lg-6"},Xe=e("p",{class:"fw-bolder fs-4"},"3. IPFS Settings and Visibility",-1),qe={class:"mb-3 mt-3"},Ye=e("label",{for:"name",class:"form-label fw-bolder fs-6"},"Web3.storage API key",-1),$e={key:0,class:"valid-feedback"},et={key:1,class:"invalid-feedback"},tt={class:"mb-3"},st=e("label",{class:"form-label fw-bolder fs-6"},"Pinata API key",-1),it={class:"mb-3 mt-3"},lt=e("label",{for:"name",class:"form-label fw-bolder fs-6"},"Pinata API secret",-1),ot={class:"mb-3 mt-3"},at=e("label",{for:"name",class:"form-label fw-bolder fs-6"},"Private townhall?",-1),nt=e("p",{style:{"font-size":"12px"}}," If check, the townhall will not appear in World page. However, it is still accessible via URL link. ( Eg. superwarden.org/mydao.tron ) ",-1),dt={class:"form-check form-switch"},rt=e("b",null,"\u2190 Back",-1),ct=[rt],vt=e("button",{type:"submit",class:"btn btn-danger float-end mt-3 px-4"},"Next",-1),ht={class:"col-lg-6"},pt=e("p",{class:"fw-bolder fs-4"},"4. Assign Masters",-1),ut=e("p",{class:"fw-bolder",style:{color:"#959595"}},[e("img",{src:u,style:{width:"25px"}}),h(" Master can only create and publish proposal")],-1),mt=e("p",{class:"fw-bolder",style:{color:"#959595"}},[e("img",{src:u,style:{width:"25px"}}),h(" Can only be assigned by superwarden and warden ")],-1),ft=e("p",{class:"fw-bolder",style:{color:"#959595"}},[e("img",{src:u,style:{width:"25px"}}),h(" Can only be removed by superwarden and warden ")],-1),bt=e("p",{class:"fw-bolder",style:{color:"#959595"}},[e("img",{src:u,style:{width:"25px"}}),h(" You can edit the role assignment anytime")],-1),yt=e("p",{class:"fs-5 fw-bolder mt-5"},"Masters",-1),_t=e("p",{class:"fw-bolder",style:{color:"#959595"}},"Format of assigning:",-1),wt=e("p",{class:"fw-bolder",style:{color:"#959595"}},d("Tronlink wallet address 1 < SPACE > nickname < new line >"),-1),kt=e("p",{class:"fw-bolder",style:{color:"#959595"}},d("Tronlink wallet address 2 < SPACE > nickname < new line >"),-1),gt=e("p",{class:"fw-bolder",style:{color:"#959595"}},"...",-1),xt=e("p",{class:"fw-bolder",style:{color:"#959595"}},"*Nickname should be all lowercase and no space allowed",-1),St={class:"mb-3 mt-2"},Tt={key:0,class:"valid-feedback"},Pt={key:1,class:"invalid-feedback"},Ct=e("b",null,"\u2190 Back",-1),Vt=[Ct],Ft=e("button",{type:"submit",class:"btn btn-danger float-end mt-3 px-4"},"Next",-1),Ut=e("div",{class:"col-lg-5",style:{position:"relative"}},[e("img",{src:A,alt:"",style:{height:"50%",position:"absolute",bottom:"0"}})],-1),Nt={class:"col-lg-6"},At=e("p",{class:"fw-bolder fs-4"},"5. Assign Wardens",-1),Bt=e("p",{class:"fw-bolder",style:{color:"#959595"}},[e("img",{src:u,style:{width:"25px"}}),h(" Warden can create and publish proposal")],-1),It=e("p",{class:"fw-bolder",style:{color:"#959595"}},[e("img",{src:u,style:{width:"25px"}}),h(" Warden can broadcast announcement ")],-1),jt=e("p",{class:"fw-bolder",style:{color:"#959595"}},[e("img",{src:u,style:{width:"25px"}}),h(" Can only be assigned and removed by superwarden ")],-1),Mt=e("p",{class:"fw-bolder",style:{color:"#959595"}},[e("img",{src:u,style:{width:"25px"}}),h(" Warden can assign master")],-1),Dt=e("p",{class:"fw-bolder",style:{color:"#959595"}},[e("img",{src:u,style:{width:"25px"}}),h(" You can edit the role assignment anytime")],-1),Rt=e("p",{class:"fs-5 fw-bolder mt-5"},"Wardens",-1),Et=e("p",{class:"fw-bolder",style:{color:"#959595"}},"Format of assigning:",-1),Ot=e("p",{class:"fw-bolder",style:{color:"#959595"}},d("Tronlink wallet address 1 < SPACE > nickname < new line >"),-1),Wt=e("p",{class:"fw-bolder",style:{color:"#959595"}},d("Tronlink wallet address 2 < SPACE > nickname < new line >"),-1),Kt=e("p",{class:"fw-bolder",style:{color:"#959595"}},"...",-1),Ht=e("p",{class:"fw-bolder",style:{color:"#959595"}},"*Nickname should be all lowercase and no space allowed",-1),Gt={class:"mb-3 mt-2"},zt={key:0,class:"valid-feedback"},Lt={key:1,class:"invalid-feedback"},Zt=e("b",null,"\u2190 Back",-1),Jt=[Zt],Qt=e("button",{type:"submit",class:"btn btn-danger float-end mt-3 px-4"},"Next",-1),Xt=e("div",{class:"col-lg-5",style:{position:"relative"}},[e("img",{src:B,alt:"",style:{height:"50%",position:"absolute",bottom:"0"}})],-1),qt={class:"col-lg-6"},Yt=U('<p class="fw-bolder fs-4">6. Proposal Publishing Permission</p><div class="form-check mt-3 mb-3"><input class="form-check-input" type="checkbox" checked disabled id="flexCheckDefault"><label class="form-check-label fw-bolder fs-6" for="flexCheckDefault" style="font-weight:bold;"> Allow masters to create and publish proposal </label><p class="fw-bolder" style="color:#959595;font-size:14px;">This is the default proposal publishing permission and can be unticked. If the following two options are not chosen, this rule will apply automatically.</p></div>',2),$t={class:"form-check mt-3 mb-3"},es=e("label",{class:"form-check-label fw-bolder fs-6",for:"flexCheckDefault",style:{"font-weight":"bold"}}," Anyone who exceeds the token threshold ",-1),ts=e("p",{class:"fw-bolder",style:{color:"#959595","font-size":"14px"}},"If the token held by the user exceeds the token threshold set, he/she has the proposal publishing permission. ",-1),ss={class:"mb-3 mt-3"},is=e("label",{for:"name",class:"form-label fw-bolder fs-6"},"Token symbol",-1),ls={key:0,class:"valid-feedback"},os={key:1,class:"invalid-feedback"},as={class:"mb-3 mt-3"},ns=e("label",{for:"name",class:"form-label fw-bolder fs-6"},"Token address",-1),ds={key:0,class:"valid-feedback"},rs={key:1,class:"invalid-feedback"},cs={class:"mb-3 mt-3"},vs=e("label",{for:"name",class:"form-label fw-bolder fs-6"},"Threshold",-1),hs={key:0,class:"valid-feedback"},ps={key:1,class:"invalid-feedback"},us={class:"form-check mt-3 mb-3"},ms=e("label",{class:"form-check-label fw-bolder fs-6",for:"flexCheckDefault",style:{"font-weight":"bold"}}," Anyone with a specific TRC721 ",-1),fs=e("p",{class:"fw-bolder",style:{color:"#959595","font-size":"14px"}},"If he user hold a TRC721 token (NFT) of a specific collection, he/she has the proposal publishing permission.",-1),bs={class:"mb-3 mt-3"},ys=e("label",{for:"name",class:"form-label fw-bolder fs-6"},"Token symbol",-1),_s={key:0,class:"valid-feedback"},ws={key:1,class:"invalid-feedback"},ks={class:"mb-3 mt-3"},gs=e("label",{for:"name",class:"form-label fw-bolder fs-6"},"Token address",-1),xs={key:0,class:"valid-feedback"},Ss={key:1,class:"invalid-feedback"},Ts=e("b",null,"\u2190 Back",-1),Ps=[Ts],Cs=e("button",{type:"submit",class:"btn btn-danger float-end mt-3 px-4"},"Next",-1),Vs={key:6,class:"row mb-5",style:{width:"95%"}},Fs={class:"col-lg-6"},Us=e("p",{class:"fw-bolder fs-4"},"7. Understanding your role | Superwarden",-1),Ns=e("p",{class:"fw-bolder",style:{color:"#959595"}},[e("img",{src:u,style:{width:"25px"}}),h(" Superwarden can create and publish proposal")],-1),As=e("p",{class:"fw-bolder",style:{color:"#959595"}},[e("img",{src:u,style:{width:"25px"}}),h(" Superwarden can broadcast announcement")],-1),Bs=e("p",{class:"fw-bolder",style:{color:"#959595"}},[e("img",{src:u,style:{width:"25px"}}),h(" Can\u2019t be removed by anyone")],-1),Is=e("p",{class:"fw-bolder",style:{color:"#959595"}},[e("img",{src:u,style:{width:"25px"}}),h(" Can remove warden and master")],-1),js=e("p",{class:"fw-bolder",style:{color:"#959595"}},[e("img",{src:u,style:{width:"25px"}}),h(" Superwarden can assign warden and master")],-1),Ms=e("p",{class:"fw-bolder",style:{color:"#959595"}},[e("img",{src:u,style:{width:"25px"}}),h(" Superwarden can edit townhall settings")],-1),Ds=e("p",{class:"fw-bolder",style:{color:"#959595"}},[e("img",{src:u,style:{width:"25px"}}),h(" Every townhall has only one superwarden")],-1),Rs={class:"form-check mt-5 mb-3"},Es=e("label",{class:"form-check-label form-label fw-bolder fs-6",for:"flexCheckDefault",style:{"font-weight":"bold"}}," I understand my role as a superwarden. ",-1),Os={class:"form-check mt-3 mb-3"},Ws=e("label",{class:"form-check-label form-label fw-bolder fs-6",for:"flexCheckDefault",style:{"font-weight":"bold"}}," I understand this is the only townhall I can create (one wallet, one townhall). ",-1),Ks={class:"form-check mt-3 mb-3"},Hs=e("label",{class:"form-check-label form-label fw-bolder fs-6",for:"flexCheckDefault",style:{"font-weight":"bold"}}," I am ready to launch my townhall in the Superwarden World! ",-1),Gs=e("b",null,"\u2190 Back",-1),zs=[Gs],Ls=e("div",{class:"col-lg-5",style:{position:"relative"}},[e("img",{src:I,alt:"",style:{height:"50%",position:"absolute",bottom:"0"}})],-1),Zs=e("div",null,null,-1),Js={key:0,class:"modal",style:{display:"block"}},Qs={class:"modal-dialog"},Xs={class:"modal-content"},qs={class:"modal-body mt-3 p-5"},Ys=e("h5",{class:"modal-title text-center"},"Townhall created successfully!",-1),$s=e("div",{class:"mb-3 mt-5 text-center"},[e("img",{class:"",src:j,style:{width:"80%"}})],-1),ei=e("div",{class:"mb-1 mt-3"},[e("label",{class:"form-label",style:{color:"#a8a8aa"}},"What you can do now?")],-1),ti=e("div",{class:"",style:{display:"flex","justify-content":"center","align-items":"center"}},[e("p",{class:"pt-1 pb-1 ps-2 border border-secondary",style:{width:"100%"}},[e("img",{src:u,style:{width:"25px"}}),h(" Create and publish your first proposal")])],-1),si=e("div",{class:"",style:{display:"flex","justify-content":"center","align-items":"center"}},[e("p",{class:"pt-1 pb-1 ps-2 border border-secondary",style:{width:"100%"}},[e("img",{src:u,style:{width:"25px"}}),h(" Broadcast your first townhall announcement")])],-1),ii=e("div",{class:"",style:{display:"flex","justify-content":"center","align-items":"center"}},[e("p",{class:"ps-2 pt-1 pb-1 border border-secondary",style:{width:"100%"}},[e("img",{src:u,style:{width:"25px"}}),h(" Invite your community to join the townhall")])],-1),li={key:1,class:"modal-backdrop fade show"};function oi(r,s,f,y,t,l){const k=P("Multiselect");return o(),a(F,null,[e("div",D,[R,t.steps==1?(o(),a("form",{key:0,onSubmit:s[12]||(s[12]=m((...i)=>l.validateFirstStep&&l.validateFirstStep(...i),["prevent"])),autocomplete:"off",class:"row mb-5",style:{width:"95%"}},[e("div",E,[O,e("div",W,[K,c(e("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>t.tempName=i),class:p([{"is-valid":t.validation.valid.name,"is-invalid":t.validation.invalid.name},"form-control"]),onFocus:s[1]||(s[1]=i=>l.clearValidation("name")),type:"text"},null,34),[[v,t.tempName]]),t.validation.valid.name?(o(),a("div",H,d(t.validation.valid.name),1)):n("",!0),t.validation.invalid.name?(o(),a("div",G,d(t.validation.invalid.name),1)):n("",!0)]),e("div",z,[L,C(k,{modelValue:t.stepOne.categories,"onUpdate:modelValue":s[2]||(s[2]=i=>t.stepOne.categories=i),options:t.categories,onSelect:l.checkCategoryNumber,onFocus:s[3]||(s[3]=i=>l.clearValidation("categories")),class:p({"is-valid":t.validation.valid.categories,"is-invalid":t.validation.invalid.categories}),placeholder:"2 categories that best describe your townhall",mode:"tags","track-by":"name",label:"name"},{tag:V(({option:i,handleTagRemove:g,disabled:_})=>[e("div",{class:p(["multiselect-tag is-user",{"is-disabled":_}])},[h(d(i.name)+" ",1),_?n("",!0):(o(),a("span",{key:0,class:"multiselect-tag-remove",onClick:x=>g(i,x)},Q,8,Z))],2)]),_:1},8,["modelValue","options","onSelect","class"]),t.validation.valid.categories?(o(),a("div",X,d(t.validation.valid.categories),1)):n("",!0),t.validation.invalid.categories?(o(),a("div",q,d(t.validation.invalid.categories),1)):n("",!0)]),e("div",Y,[$,c(e("textarea",{"onUpdate:modelValue":s[4]||(s[4]=i=>t.bio=i),class:p([{"is-valid":t.validation.valid.bio,"is-invalid":t.validation.invalid.bio},"form-control"]),onFocus:s[5]||(s[5]=i=>l.clearValidation("bio")),rows:"6",placeholder:"50 word max"},null,34),[[v,t.bio]]),t.validation.valid.bio?(o(),a("div",ee,d(t.validation.valid.bio),1)):n("",!0),t.validation.invalid.bio?(o(),a("div",te,d(t.validation.invalid.bio),1)):n("",!0)]),e("div",se,[ie,c(e("input",{"onUpdate:modelValue":s[6]||(s[6]=i=>t.tempAvatar=i),class:p([{"is-valid":t.validation.valid.avatar,"is-invalid":t.validation.invalid.avatar},"form-control"]),onFocus:s[7]||(s[7]=i=>l.clearValidation("avatar")),type:"text",placeholder:"Image link"},null,34),[[v,t.tempAvatar]]),t.validation.valid.avatar?(o(),a("div",le,d(t.validation.valid.avatar),1)):n("",!0),t.validation.invalid.avatar?(o(),a("div",oe,d(t.validation.invalid.avatar),1)):n("",!0)]),e("div",ae,[ne,c(e("input",{"onUpdate:modelValue":s[8]||(s[8]=i=>t.tempCoverPhoto=i),class:p([{"is-valid":t.validation.valid.coverPhoto,"is-invalid":t.validation.invalid.coverPhoto},"form-control"]),onFocus:s[9]||(s[9]=i=>l.clearValidation("coverPhoto")),type:"text",placeholder:"Image link"},null,34),[[v,t.tempCoverPhoto]]),t.validation.valid.coverPhoto?(o(),a("div",de,d(t.validation.valid.coverPhoto),1)):n("",!0),t.validation.invalid.coverPhoto?(o(),a("div",re,d(t.validation.invalid.coverPhoto),1)):n("",!0)]),e("div",ce,[ve,e("div",he,[c(e("input",{"onUpdate:modelValue":s[10]||(s[10]=i=>t.tempSlug=i),onFocus:s[11]||(s[11]=i=>l.clearValidation("slug")),type:"text",class:"form-control border-end-0",placeholder:"Eg. superwarden"},null,544),[[v,t.tempSlug]]),pe,t.validation.valid.slug?(o(),a("div",ue,d(t.validation.valid.slug),1)):n("",!0),t.validation.invalid.slug?(o(),a("div",me,d(t.validation.invalid.slug),1)):n("",!0)])]),fe])],32)):n("",!0),t.steps==2?(o(),a("form",{key:1,onSubmit:s[27]||(s[27]=m((...i)=>l.validateSecondStep&&l.validateSecondStep(...i),["prevent"])),autocomplete:"off",class:"row mb-5",style:{width:"95%"}},[e("div",be,[ye,e("div",_e,[we,c(e("input",{"onUpdate:modelValue":s[13]||(s[13]=i=>t.stepTwo.twitter=i),class:p([{"is-valid":t.validation.valid.twitter,"is-invalid":t.validation.invalid.twitter},"form-control"]),onFocus:s[14]||(s[14]=i=>l.clearValidation("twitter")),type:"text",placeholder:"Eg. https://twitter.com/superwarden"},null,34),[[v,t.stepTwo.twitter]]),t.validation.valid.twitter?(o(),a("div",ke,d(t.validation.valid.twitter),1)):n("",!0),t.validation.invalid.twitter?(o(),a("div",ge,d(t.validation.invalid.twitter),1)):n("",!0)]),e("div",xe,[Se,c(e("input",{"onUpdate:modelValue":s[15]||(s[15]=i=>t.stepTwo.discord=i),class:p([{"is-valid":t.validation.valid.discord,"is-invalid":t.validation.invalid.discord},"form-control"]),onFocus:s[16]||(s[16]=i=>l.clearValidation("discord")),type:"text",placeholder:"Eg. https://discord.gg/superwarden"},null,34),[[v,t.stepTwo.discord]]),t.validation.valid.discord?(o(),a("div",Te,d(t.validation.valid.discord),1)):n("",!0),t.validation.invalid.discord?(o(),a("div",Pe,d(t.validation.invalid.discord),1)):n("",!0)]),e("div",Ce,[Ve,c(e("input",{"onUpdate:modelValue":s[17]||(s[17]=i=>t.stepTwo.github=i),class:p([{"is-valid":t.validation.valid.github,"is-invalid":t.validation.invalid.github},"form-control"]),onFocus:s[18]||(s[18]=i=>l.clearValidation("github")),type:"text",placeholder:"Eg. https://github.com/superwarden"},null,34),[[v,t.stepTwo.github]]),t.validation.valid.github?(o(),a("div",Fe,d(t.validation.valid.github),1)):n("",!0),t.validation.invalid.github?(o(),a("div",Ue,d(t.validation.invalid.github),1)):n("",!0)]),e("div",Ne,[Ae,c(e("input",{"onUpdate:modelValue":s[19]||(s[19]=i=>t.stepTwo.forum=i),class:p([{"is-valid":t.validation.valid.forum,"is-invalid":t.validation.invalid.forum},"form-control"]),onFocus:s[20]||(s[20]=i=>l.clearValidation("forum")),type:"text"},null,34),[[v,t.stepTwo.forum]]),t.validation.valid.forum?(o(),a("div",Be,d(t.validation.valid.forum),1)):n("",!0),t.validation.invalid.forum?(o(),a("div",Ie,d(t.validation.invalid.forum),1)):n("",!0)]),e("div",je,[Me,De,e("input",{type:"file",ref:"markdown",onChange:s[21]||(s[21]=(...i)=>l.onMarkdownSelected&&l.onMarkdownSelected(...i)),accept:".md",style:{display:"none"}},null,544),e("div",{class:"input-group mb-3",onClick:s[23]||(s[23]=m(i=>r.$refs.markdown.click(),["prevent"]))},[e("input",{value:t.filename,onFocus:s[22]||(s[22]=i=>l.clearValidation("details")),type:"text",class:"form-control border-end-0",readonly:"",placeholder:"Upload you markdown file"},null,40,Re),Ee,t.validation.valid.details?(o(),a("div",Oe,d(t.validation.valid.details),1)):n("",!0),t.validation.invalid.details?(o(),a("div",We,d(t.validation.invalid.details),1)):n("",!0)])]),e("div",Ke,[He,c(e("input",{"onUpdate:modelValue":s[24]||(s[24]=i=>t.tempBannerPhoto=i),class:p([{"is-valid":t.validation.valid.bannerPhoto,"is-invalid":t.validation.invalid.bannerPhoto},"form-control"]),onFocus:s[25]||(s[25]=i=>l.clearValidation("bannerPhoto")),type:"text",placeholder:"Image link"},null,34),[[v,t.tempBannerPhoto]]),t.validation.valid.bannerPhoto?(o(),a("div",Ge,d(t.validation.valid.bannerPhoto),1)):n("",!0),t.validation.invalid.bannerPhoto?(o(),a("div",ze,d(t.validation.invalid.bannerPhoto),1)):n("",!0)]),e("div",null,[e("button",{type:" ",class:"btn btn-default float-start mt-3 p-0",onClick:s[26]||(s[26]=(...i)=>l.prevStep&&l.prevStep(...i))},Ze),Je])])],32)):n("",!0),t.steps==3?(o(),a("form",{key:2,onSubmit:s[34]||(s[34]=m((...i)=>l.validateThirdStep&&l.validateThirdStep(...i),["prevent"])),class:"row mb-5",style:{width:"95%"}},[e("div",Qe,[Xe,e("div",qe,[Ye,c(e("input",{"onUpdate:modelValue":s[28]||(s[28]=i=>t.stepThree.webThrKey=i),class:p([{"is-valid":t.validation.valid.webThrKey,"is-invalid":t.validation.invalid.webThrKey},"form-control"]),onFocus:s[29]||(s[29]=i=>l.clearValidation("webThrKey")),type:"text"},null,34),[[v,t.stepThree.webThrKey]]),t.validation.valid.webThrKey?(o(),a("div",$e,d(t.validation.valid.webThrKey),1)):n("",!0),t.validation.invalid.webThrKey?(o(),a("div",et,d(t.validation.invalid.webThrKey),1)):n("",!0)]),e("div",tt,[st,c(e("input",{"onUpdate:modelValue":s[30]||(s[30]=i=>t.stepThree.pinataKey=i),class:"form-control",type:"text"},null,512),[[v,t.stepThree.pinataKey]])]),e("div",it,[lt,c(e("input",{"onUpdate:modelValue":s[31]||(s[31]=i=>t.stepThree.pinataSecret=i),type:"text",class:"form-control"},null,512),[[v,t.stepThree.pinataSecret]])]),e("div",ot,[at,nt,e("div",dt,[c(e("input",{"onUpdate:modelValue":s[32]||(s[32]=i=>t.stepThree.private=i),class:"form-check-input fs-5",style:{"margin-left":"-40px"},type:"checkbox"},null,512),[[b,t.stepThree.private]])])]),e("div",null,[e("button",{type:" ",class:"btn btn-default float-start mt-3 p-0",onClick:s[33]||(s[33]=(...i)=>l.prevStep&&l.prevStep(...i))},ct),vt])])],32)):n("",!0),t.steps==4?(o(),a("form",{key:3,onSubmit:s[38]||(s[38]=m((...i)=>l.validateFourthStep&&l.validateFourthStep(...i),["prevent"])),class:"row mb-5",style:{width:"95%"}},[e("div",ht,[pt,ut,mt,ft,bt,yt,_t,wt,kt,gt,xt,e("div",St,[c(e("textarea",{"onUpdate:modelValue":s[35]||(s[35]=i=>t.stepFour.master=i),class:p([{"is-valid":t.validation.valid.master,"is-invalid":t.validation.invalid.master},"form-control"]),onFocus:s[36]||(s[36]=i=>l.clearValidation("master")),rows:"6",placeholder:`Eg. \r
TRzQrtxrEJbSbQNwAsgAHkBMxTX47yNmjo jimmy\r
TUjx6w55Nx9G4GjjRNEB4e7w5BUH3WmJTZ johnny\r
TSF2rqLdrrZG7PZkDxtvu6B2PTpofidMAX mary`},null,34),[[v,t.stepFour.master]]),t.validation.valid.master?(o(),a("div",Tt,d(t.validation.valid.master),1)):n("",!0),t.validation.invalid.master?(o(),a("div",Pt,d(t.validation.invalid.master),1)):n("",!0)]),e("div",null,[e("button",{type:" ",class:"btn btn-default float-start mt-3 p-0",onClick:s[37]||(s[37]=(...i)=>l.prevStep&&l.prevStep(...i))},Vt),Ft])]),Ut],32)):n("",!0),t.steps==5?(o(),a("form",{key:4,onSubmit:s[42]||(s[42]=m((...i)=>l.validateFifthStep&&l.validateFifthStep(...i),["prevent"])),class:"row mb-5",style:{width:"95%"}},[e("div",Nt,[At,Bt,It,jt,Mt,Dt,Rt,Et,Ot,Wt,Kt,Ht,e("div",Gt,[c(e("textarea",{"onUpdate:modelValue":s[39]||(s[39]=i=>t.stepFive.warden=i),class:p([{"is-valid":t.validation.valid.warden,"is-invalid":t.validation.invalid.warden},"form-control"]),onFocus:s[40]||(s[40]=i=>l.clearValidation("warden")),rows:"6",placeholder:`Eg. \r
TRzQrtxrEJbSbQNwAsgAHkBMxTX47yNmjo jimmy\r
TUjx6w55Nx9G4GjjRNEB4e7w5BUH3WmJTZ johnny\r
TSF2rqLdrrZG7PZkDxtvu6B2PTpofidMAX mary`},null,34),[[v,t.stepFive.warden]]),t.validation.valid.warden?(o(),a("div",zt,d(t.validation.valid.warden),1)):n("",!0),t.validation.invalid.warden?(o(),a("div",Lt,d(t.validation.invalid.warden),1)):n("",!0)]),e("div",null,[e("button",{type:" ",class:"btn btn-default float-start mt-3 p-0",onClick:s[41]||(s[41]=(...i)=>l.prevStep&&l.prevStep(...i))},Jt),Qt])]),Xt],32)):n("",!0),t.steps==6?(o(),a("form",{key:5,onSubmit:s[56]||(s[56]=m((...i)=>l.validateSixthStep&&l.validateSixthStep(...i),["prevent"])),class:"row mb-5",style:{width:"95%"}},[e("div",qt,[Yt,e("div",$t,[c(e("input",{"onUpdate:modelValue":s[43]||(s[43]=i=>t.stepSix.threshold.status=i),class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"},null,512),[[b,t.stepSix.threshold.status]]),es,ts,e("div",ss,[is,c(e("input",{"onUpdate:modelValue":s[44]||(s[44]=i=>t.stepSix.threshold.tk_symbol=i),class:p([{"is-valid":t.validation.valid.tk_symbol,"is-invalid":t.validation.invalid.tk_symbol},"form-control"]),onFocus:s[45]||(s[45]=i=>l.clearValidation("tk_symbol")),type:"text"},null,34),[[v,t.stepSix.threshold.tk_symbol]]),t.validation.valid.tk_symbol?(o(),a("div",ls,d(t.validation.valid.tk_symbol),1)):n("",!0),t.validation.invalid.tk_symbol?(o(),a("div",os,d(t.validation.invalid.tk_symbol),1)):n("",!0)]),e("div",as,[ns,c(e("input",{"onUpdate:modelValue":s[46]||(s[46]=i=>t.stepSix.threshold.tk_addr=i),class:p([{"is-valid":t.validation.valid.tk_addr,"is-invalid":t.validation.invalid.tk_addr},"form-control"]),onFocus:s[47]||(s[47]=i=>l.clearValidation("tk_addr")),type:"text"},null,34),[[v,t.stepSix.threshold.tk_addr]]),t.validation.valid.tk_addr?(o(),a("div",ds,d(t.validation.valid.tk_addr),1)):n("",!0),t.validation.invalid.tk_addr?(o(),a("div",rs,d(t.validation.invalid.tk_addr),1)):n("",!0)]),e("div",cs,[vs,c(e("input",{"onUpdate:modelValue":s[48]||(s[48]=i=>t.stepSix.threshold.threshold=i),class:p([{"is-valid":t.validation.valid.threshold,"is-invalid":t.validation.invalid.threshold},"form-control"]),onFocus:s[49]||(s[49]=i=>l.clearValidation("threshold")),type:"number"},null,34),[[v,t.stepSix.threshold.threshold]]),t.validation.valid.threshold?(o(),a("div",hs,d(t.validation.valid.threshold),1)):n("",!0),t.validation.invalid.threshold?(o(),a("div",ps,d(t.validation.invalid.threshold),1)):n("",!0)])]),e("div",us,[c(e("input",{"onUpdate:modelValue":s[50]||(s[50]=i=>t.stepSix.tcr.status=i),class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"},null,512),[[b,t.stepSix.tcr.status]]),ms,fs,e("div",bs,[ys,c(e("input",{"onUpdate:modelValue":s[51]||(s[51]=i=>t.stepSix.tcr.tk_symbol=i),class:p([{"is-valid":t.validation.valid.tcr_tk_symbol,"is-invalid":t.validation.invalid.tcr_tk_symbol},"form-control"]),onFocus:s[52]||(s[52]=i=>l.clearValidation("tcr_tk_symbol")),type:"text"},null,34),[[v,t.stepSix.tcr.tk_symbol]]),t.validation.valid.tcr_tk_symbol?(o(),a("div",_s,d(t.validation.valid.tcr_tk_symbol),1)):n("",!0),t.validation.invalid.tcr_tk_symbol?(o(),a("div",ws,d(t.validation.invalid.tcr_tk_symbol),1)):n("",!0)]),e("div",ks,[gs,c(e("input",{"onUpdate:modelValue":s[53]||(s[53]=i=>t.stepSix.tcr.tk_addr=i),class:p([{"is-valid":t.validation.valid.tcr_tk_addr,"is-invalid":t.validation.invalid.tcr_tk_addr},"form-control"]),onFocus:s[54]||(s[54]=i=>l.clearValidation("tcr_tk_addr")),type:"text"},null,34),[[v,t.stepSix.tcr.tk_addr]]),t.validation.valid.tcr_tk_addr?(o(),a("div",xs,d(t.validation.valid.tcr_tk_addr),1)):n("",!0),t.validation.invalid.tcr_tk_addr?(o(),a("div",Ss,d(t.validation.invalid.tcr_tk_addr),1)):n("",!0)])]),e("div",null,[e("button",{type:" ",class:"btn btn-default float-start mt-3 p-0",onClick:s[55]||(s[55]=(...i)=>l.prevStep&&l.prevStep(...i))},Ps),Cs])])],32)):n("",!0),t.steps==7?(o(),a("div",Vs,[e("div",Fs,[Us,Ns,As,Bs,Is,js,Ms,Ds,e("div",Rs,[c(e("input",{"onUpdate:modelValue":s[57]||(s[57]=i=>t.stepSeven.role=i),class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"},null,512),[[b,t.stepSeven.role]]),Es]),e("div",Os,[c(e("input",{"onUpdate:modelValue":s[58]||(s[58]=i=>t.stepSeven.oneTownhall=i),class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"},null,512),[[b,t.stepSeven.oneTownhall]]),Ws]),e("div",Ks,[c(e("input",{"onUpdate:modelValue":s[59]||(s[59]=i=>t.stepSeven.ready=i),class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"},null,512),[[b,t.stepSeven.ready]]),Hs]),e("div",null,[e("button",{type:" ",class:"btn btn-default float-start mt-3 ps-0",onClick:s[60]||(s[60]=(...i)=>l.prevStep&&l.prevStep(...i))},zs),e("button",{type:" ",class:"btn btn-danger mt-3 ms-4 px-4",onClick:s[61]||(s[61]=(...i)=>l.checkCreation&&l.checkCreation(...i))},"Create")])]),Ls])):n("",!0)]),Zs,t.succeedCreationModalShow?(o(),a("div",Js,[e("div",Qs,[e("div",Xs,[e("div",qs,[Ys,$s,ei,ti,si,ii,e("button",{onClick:s[62]||(s[62]=(...i)=>l.backToHome&&l.backToHome(...i)),type:"button",class:"btn btn-danger text-center",style:{width:"100%"}},"Back to World")])])])])):n("",!0),t.succeedCreationModalShow?(o(),a("div",li)):n("",!0)],64)}var ci=T(M,[["render",oi]]);export{ci as default};
