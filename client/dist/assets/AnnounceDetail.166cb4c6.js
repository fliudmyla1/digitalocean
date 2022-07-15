import{h as _,_ as f}from"./staricon.0523acfd.js";import{_ as p,r as v,o as a,c,a as e,h as m,g as r,t as i,e as g,f as b,p as y,w as x,v as k,q as w,F as A}from"./vendor.395bafa6.js";import{_ as C,a as D}from"./file-icon.2812097e.js";import{_ as M,a as T}from"./line1.79af986b.js";const V={name:"AnnounceDetail",data(){return{idx:this.$route.params.id,deleteModal:!1,deleteConfirm:"",validation:{invalid:{},valid:{}},announce:{title:"",passed:!1,creator:{name:"",address:""},timezone:{offset:""}}}},computed:{},created(){this.$store.getters.role==10?this.$router.push("/"):this.getAnnounceDate()},mounted(){},methods:{closeDeleteModal(){this.deleteModal=!1,this.deleteConfirm="",this.clearValidation("deleteConfirm")},validateDeleteModal(){if(this.deleteConfirm!="confirm"){this.validation.invalid.deleteConfirm="Please fill out this input correctly.";return}api.deleteAnnouncement({_id:this.announce._id},t=>{t&&(this.deleteModal=!1,this.$toast.success("You deleted the announcement."),this.backToAnnounceList())},t=>{console.log(t)})},clearValidation:function(t){this.validation.valid[t]="",this.validation.invalid[t]=""},trimmedAccountAddress(t){return t.length>10?t.slice(0,5)+"..."+t.slice(t.length-5,t.length):t},trimmedAccountNameAndLowercase(t){let n=t.replace(/[, ]+/g,"").trim().toLowerCase();return n.length>12?n.slice(0,9)+"..."+n.slice(n.length-4,n.length):n},trimmedAnnounceTitle(t){return t.length>38?t.slice(0,40)+"...":t},trimmedAnnounceSummary(t){return t.length>334?t.slice(0,334)+"...":t},getDateString(t){const n=["January","February","March","April","May","June","July","August","September","October","November","December"];let d=new Date(t);const u=("0"+d.getDate()).slice(-2),s=n[d.getMonth()],o=d.getFullYear();return`${u} ${s} ${o}`},backToAnnounceList(){this.$router.push(`/${this.announce.slug}/announcement`)},getAnnounceDate(){api.getAnnounceDate({_id:this.idx},t=>{this.announce=t.data.announce,console.log(this.announce);var n=new Date(this.announce.expire_at);let d=_().utcOffset(this.announce.timezone.offset).utcOffset()*60*1e3,u=n.getTime()-d,s=new Date,o=s.getTimezoneOffset()*60*1e3,h=s.getTime()-o;u>h?this.announce.passed=!1:this.announce.passed=!0,console.log(this.announce)},t=>{console.log(t)})}}},N={class:"ms-5 ps-3 py-5"},O={class:"row",style:{width:"100%"}},S={class:"col-md-10"},z=e("b",null,"\u2190 Back",-1),L=[z],F=e("img",{src:D,style:{height:"22px"}},null,-1),B=[F],j={class:"px-5 mt-5"},I={class:"block-container-announcement-detail"},J={class:"header mt-3"},P={class:"fw-bolder text-dark fs-2"},U={key:0,style:{height:"35px"},class:"mb-1",src:f},q={class:"fw-bolder mt-2"},Y={key:0,class:"status-complete ms-2"},E={key:1,class:"status-active ms-2"},G={class:"valid-till fw-bolder mt-2"},H=e("img",{src:M,class:"pb-1 me-2",style:{height:"25px"}},null,-1),K=r("Valid Till \xA0"),Q=e("img",{src:T,style:{height:"20px"}},null,-1),R={class:"mt-4"},W=e("p",{class:"fs-5 fw-bolder text-dark"},"Summary",-1),X={class:"mt-4"},Z=e("p",{class:"fs-5 fw-bolder text-dark"},"Attachment link",-1),$=e("img",{src:C,style:{height:"24px"}},null,-1),ee=["href"],te={class:"file-details mb-5"},se=e("span",null,"web3.storage CID",-1),ne={class:"modal-dialog",style:{"min-width":"600px"}},oe={class:"modal-content"},le=e("button",{style:{right:"15px",position:"absolute"},type:"button",class:"close border-0 mt-2 fs-4","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"\xD7")],-1),ie=[le],ae={class:"modal-body mx-5 px-3 py-4"},ce=e("p",{class:"modal-title mt-4 text-center text-dark fw-bolder",style:{"font-size":"25px"}},[e("span",{style:{color:"#dc062b"}},"Danger!"),r(" Are you really sure?")],-1),re=e("p",{class:"mt-3"},[r("The deletion action "),e("span",{class:"fw-bolder"},"CANNOT"),r(" be undone. This will remove the announcement from the townhall and no longer able to view or even vote it. If your proposal is in an active voting status, deletion may also cause the voting records and result fail to store in the IPFS storage tools. Only delete proposals that are wrongly created or confirm to be deleted. ")],-1),de={class:"mb-4 mt-2"},ue=e("label",{for:"title",class:"form-label fs-6"},"Please type in \u201Cconfirm\u201D to confirm your deletion.",-1),me={key:0,class:"valid-feedback"},he={key:1,class:"invalid-feedback"},_e=e("button",{class:"btn btn-danger mt-5",type:"submit"},"I understand the consequences. Delete this announcement.",-1);function fe(t,n,d,u,s,o){const h=v("Modal");return a(),c(A,null,[e("div",N,[e("div",O,[e("div",S,[e("button",{onClick:n[0]||(n[0]=(...l)=>o.backToAnnounceList&&o.backToAnnounceList(...l)),class:"btn btn-default p-0"},L),t.$store.getters.role<2?(a(),c("button",{key:0,onClick:n[1]||(n[1]=l=>s.deleteModal=!0),class:"btn btn-default p-0 float-end"},B)):m("",!0),e("div",j,[e("div",I,[e("div",J,[e("span",P,[r(i(s.announce.title)+" ",1),s.announce.importance?(a(),c("img",U)):m("",!0)])]),e("span",q,[r("Broadcast by "+i(s.announce.creator.name?o.trimmedAccountNameAndLowercase(s.announce.creator.name)+"."+s.announce.slug:o.trimmedAccountAddress(s.announce.creator.address))+" ",1),s.announce.passed?(a(),c("span",Y,"closed")):(a(),c("span",E,"open"))]),e("span",G,[H,K,Q,r(" "+i(o.getDateString(s.announce.expire_at))+" ("+i("UTC "+s.announce.timezone.offset)+")",1)])]),e("div",R,[W,e("p",null,i(s.announce.summary),1)]),e("div",X,[Z,e("p",null,[$,e("a",{href:`https://${s.announce.attachment}`,class:"text-dark",style:{color:"#595959","text-decoration":"none"}},i(s.announce.attachment),9,ee)]),e("div",te,[se,e("span",null,i(s.announce.cid),1)])])])])])]),g(h,{modelValue:s.deleteModal,"onUpdate:modelValue":n[6]||(n[6]=l=>s.deleteModal=l),close:o.closeDeleteModal,style:{"z-index":"9999"}},{default:b(()=>[e("div",ne,[e("div",oe,[e("div",{onClick:n[2]||(n[2]=(...l)=>o.closeDeleteModal&&o.closeDeleteModal(...l))},ie),e("div",ae,[ce,re,e("form",{onSubmit:n[5]||(n[5]=y((...l)=>o.validateDeleteModal&&o.validateDeleteModal(...l),["prevent"])),class:"my-3 p-2 text-center"},[e("div",de,[ue,x(e("input",{"onUpdate:modelValue":n[3]||(n[3]=l=>s.deleteConfirm=l),class:w([{"is-valid":s.validation.valid.deleteConfirm,"is-invalid":s.validation.invalid.deleteConfirm},"form-control"]),onFocus:n[4]||(n[4]=l=>o.clearValidation("deleteConfirm")),type:"text",id:"title",autocomplete:"false"},null,34),[[k,s.deleteConfirm]]),s.validation.valid.deleteConfirm?(a(),c("div",me,i(s.validation.valid.deleteConfirm),1)):m("",!0),s.validation.invalid.deleteConfirm?(a(),c("div",he,i(s.validation.invalid.deleteConfirm),1)):m("",!0)]),_e],32)])])])]),_:1},8,["modelValue","close"])],64)}var ye=p(V,[["render",fe]]);export{ye as default};