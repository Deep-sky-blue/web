(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d6755172"],{"0d26":function(t,e,i){var s=i("e330"),o=Error,a=s("".replace),r=function(t){return String(o(t).stack)}("zxcasd"),l=/\n\s*at [^:]*:[^\n]*/,n=l.test(r);t.exports=function(t,e){if(n&&"string"==typeof t&&!o.prepareStackTrace)while(e--)t=a(t,l,"");return t}},"2ba4":function(t,e,i){var s=i("40d5"),o=Function.prototype,a=o.apply,r=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(s?r.bind(a):function(){return r.apply(a,arguments)})},"577ed":function(t,e,i){var s=i("f5df"),o=String;t.exports=function(t){if("Symbol"===s(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},"6f19":function(t,e,i){var s=i("9112"),o=i("0d26"),a=i("b980"),r=Error.captureStackTrace;t.exports=function(t,e,i,l){a&&(r?r(t,e):s(t,"stack",o(i,l)))}},7156:function(t,e,i){var s=i("1626"),o=i("861d"),a=i("d2bb");t.exports=function(t,e,i){var r,l;return a&&s(r=e.constructor)&&r!==i&&o(l=r.prototype)&&l!==i.prototype&&a(t,l),t}},"8bf0":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA+CAYAAACY9hNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNzc2QzZCMTc4MDExRURCMEZDRTRBNkY1RDA4MkE2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQwNzc2QzZDMTc4MDExRURCMEZDRTRBNkY1RDA4MkE2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDA3NzZDNjkxNzgwMTFFREIwRkNFNEE2RjVEMDgyQTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDA3NzZDNkExNzgwMTFFREIwRkNFNEE2RjVEMDgyQTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7GECyLAAAGo0lEQVR42uybaWxUVRTH//e9aaedoUqQrYUiFlDbihDj0hSkICkVgrikEqLGoKIfcPkAaOKGC8aFRUAxyPLBEPlQBCTBRIUgWqVAgITFVqKCsrW0UCjQmc723vXcmfs6r9OxLdBX5g29ycnMW+bd87vn3HPPvXMfQ0xxz6h4mj4WcsZvgJ0LxykO/mTT6tG7WpzmHA7TMZOfS+lbT9Z8aNPCkEPgn9O3e5ubQRbFBCy+p9AVF5KkEFQGfTgkGzNDG8DiohOMcyRN0QVbqmRjBrhhaVVeTEcSFc51RTI5JGOzpRUTtJs8nyURtWBzSTbVsLRhdgPadTkBLBTUoQV0pLlUuB2Kpfp7Qjp8Xg1qqgJHSgfrilhaQPtJAvGgU0jSIv2g7YfqOoeTgGcWZ+Hxwj7IH+iCK1W1FNob0FB50otvKs5g1dZq+AlcUVhHoNMkmxILbQSy1PYq16jF8/unY+OsPAzqndZlnioa9Z6cjLC89OAAPPZpJSpPN0Ft08M4M7m2EhvImKlvt2nhOzNdKH93RJcCx5ZBvZ1hHYZT4wud2ilKvCHLnJy06S8O6r/rZ+dZ7sodtfyGOflwUDdrI5CxGK5Wlm43aM0kt8ru5UyY4Cx0mVmSFdbtckqHQ66I0lMpaCVamVrYN6ybJdBiWMobkHgZqtBJ6GYJtBiH01KUhIMWOl1ujpB4FF1QuqGvl+Loqor+Pgf8fFTHodNA9SUOb5D6I9XeP4Phjn5A0WCGvL4sOaDrGoEvduvYdqR15nSBpLaR40ANsHY/R+EghhcLGG7uyezr3rtPcjxRpsUFjlcqjnM8tY4a6Ci3p6V/OqJj7raWyg/vzzA+B7i9D0OGk5GLc/x5ltO9HPuqowtZc7fqCIxTMPFWZi/onunkRDxECW5khv4WQZQMY61WsXKpAR7OBX75R8e87Rw++omDco0+Lhta+q4s4KtSFfPLKWcvUDAys22rFd2iIPtGjiUVOl6m+4f1Zvbo02WHOJbuiObBQ29iWPmo2gq4iSL3gt+0cBAzl5xeDJ9NVlsAf0lBcPVePTEtvXy3hrUHIt+D0DFnVPz2vOADXtms4UgDw65jGpZNcSAzI/4zVxLs1wciDXPRp2HWaDWxLL3zBGteTd/0O8f721tH4HovMH0jAZ8Pz3VR62Hh42MNrZ+3uIJjzb7oM349loDuvaZUQcHA6Ox8y18cb27VouO1h+PZb3WcaWz5O48feG6jjqPno4Afl4ewgRrOmOXnU9JSNk1NzD69aJKKwmxjoYJTRAY+oUB2+AzHM+s11HuiYOZI7gtRg2zQUFXHsWqPju8OMzl4sfAwt+IRBZ25WNPp0Xv+RAVvbNFQ/m/kePNhHhbz4syro2mYylMwZrDwhkiQCukML2xqGbBGZnIse6jzl6Ysycg+nKBi3JA4S1Ykr90fAY4MUwwfFItY0Lr/3z2QWQJsaRo6b7yKkqGmoYqSlNeLGKbktqxyLI3PH01Q6HL03gICXjLJugzZ0tz77QcUFA9h6JFKqeVYhsm3xa9uzGAFC0oi991HMWHhJGtnvJbPst4Z3zGAApph/TC9a5aWu1dOuqG7oa9T6PD/w0E94QCETkI3S6DFH+JVp7wJB11V7Q3rZgm02AFQVlGXcNBlO+rCulkCLbY8LP+xGifO+RMGWOgidHKkWPi3TogeXrqoCt7Ate/bQofSRZVhnSyN3mKPx8EaL4re24/jZ6+dxUXdQoeDNU3t7zvpjDRU7PGorPVhxOw9eL44C1NH9UVuVjrcTmtTSI9fwx/VTVhHfdjYaKNe4Y6mK8q9ResGCfKzbTVY/P0ppKWrcKd04ZYqqvtqaruqCYcIIELEbLhRs3h3JU09ne7OmR91Z2TXM3Ty7A0FYx2D1oINScOs+erbCmRcCvx7VyxNGT5tBlMc7sguWs5sZH2xWM7JwDoPeOv9O5eswP+4stg72YOkF0k/kmySTHmcIa/bCBo+kkskZ0lqSE6S1JKI/1U8nPOg2dKalCAi24SF+GGsutuj6FJnv+QISiYdpnc4HPJAnAxJ0CbRIohsF+Y2s7QB3SgZfJKpBbjDZOWgBBY/cMrzfkT3StvBtXXJIYAvShYDPC60uCBWCRrkOdEAxvsPdrJ0UIIK4AuyAQLSk5uhza7tkRcCMhikImavtA2sbRjQJ3maTC7OzUOW0ULGjwy3Vm0IrZvAAyYr67HZlzEWqyZRbAYcC254sDmIcfHaIYuTfrIYgc0sbU62eMy58LuWjCfTC3cdLP8JMACJcGJ5X+lA7wAAAABJRU5ErkJggg=="},"91e7":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAbCAYAAADh0qZQAAAEZElEQVRYR7WY6auVVRTGf2amOWQOmQMONGiOEKjknEaWWZkign0TEesf8Jt/ht/kfhDEFIOyNLFSr0FRZmWOaeFEWpaVY3qzlJ+sLcfju/c5V3LD4XLPfffaz37Ws5613tuBe1sdgG5AX2Ag0A/oA/QGHgT+BS4Av8XnDHAWuBR/a9epHtae9QDQFRgMPAMMAx6L7zoDDwHGvAH8A1wDrgJ/AKeAw8BPwGXgerMHtwek4IYD44GngF6AwDo2cdh/QBtwETgJfA3sB87HhYohmgEpiEHAVODZSGunJoDlHhGw4GS1FTgaF8iGbARSpsYCLwJPBnNVwUyvTJliQRjXi7g/d4bpVqs7gC9Cr5VASyAfBiYBs4EBgHqsX4JTX+pNrf0C/B3a7B8XGwJ0L+yX1Z3AduDPKpQ5kOrP9L4UhVH1nIz9HAfsjWquZ1IHGA1MD8BWftVSq7uAj4Fz9Q9UHS7AKcDLDQAeA94DDtZoShBq2AsI2OV3TwCvAWPi9xxQU/9puMHtZ+pBNsOgKf4VeAf4LnxP61ESprZn6EsJyLQW5Dla1kLg6YJOKxmtBWlqTLEMasw5Kai5rcBHoT+1OxF4Hni8hsnfgc+iKDzcQpoJzAMeKbiDz1r1n6TUJyBumhwaLAGUxdPAauDHACRAGdLUay/msxbCltCtxj4UWAyMzBRSwm5nEqifMynoAmBGGHSp4m13GvHaAOCFlobWcvv0wTXA8WilbwCzwgFKdivQ3UBLCrwK6FFIcQomG1rFptCdjLwVPTt3oC3xXeDzYE9Lex1QJo3WFWB5AtkSmmm0SZDaxIeAAcYBy6JYcnsdNN4P0/a8FwDZtEgbLQ1/SQK5Mmwi52MpmLZiMWyMPuyA8XZMQrkDdYJ1wLdBxCuAny4NEGpj7l2RQMqIra/kY8a0GPRFmXf00hHmR2XbAuuXTHwFbIhKfRRYFJ2sRIgAT4RntiaQtjx7s1ppBNSKtRD2BGgrVqB2Fv3SWKmX/xDVfSi+M/abMbDkCi0B/ACwk7XVPmhwR7C5MVTkJh3ZEeD6GGjdp4lPCMnYp/VSRzKr057uHk1eEnSRKtbNggB1ATVvo7jVtepv44G2sFejKHJALRoLaFv0bOOoMb1Sl3DocCr3OVlVFtOAOQWbqwRYBTJ9Z+rtDKXUW7WarYOB3SVN2mkyT31bBp+LbuNrRm5YUYOm+DaDSeA5XSSNyqhA1VrVkqkDwPeRJvWq4bvfLqZe3e9HsDmApnhzAHQuvWOVuosHaTGarxN5ztcE5Uxoev8KHSkT0276reicbAR0JKSzr2ZyahpkSr3Dq6ObKbMN5qxD7akrf3p5L1mqYAeJb0Iujn1etnKVmKzdYMWOiGlnVBTCvbznCESJCOrLkIpt04tlV7MgDSAzMmlR6YnOhepMsGnYrT9IZi0orSSB8y3RFNtNmnqtbQ/IBEBAgnV21B8ddtVeesVNZm6fT/8g8N3HAdgxz051V3H8X0yW4tzXv90Ec9sPK6XSorIAAAAASUVORK5CYII="},a7b8:function(t,e,i){"use strict";i("e348")},ab36:function(t,e,i){var s=i("861d"),o=i("9112");t.exports=function(t,e){s(e)&&"cause"in e&&o(t,"cause",e.cause)}},aeb0:function(t,e,i){var s=i("9bf2").f;t.exports=function(t,e,i){i in t||s(t,i,{configurable:!0,get:function(){return e[i]},set:function(t){e[i]=t}})}},b980:function(t,e,i){var s=i("d039"),o=i("5c6c");t.exports=!s((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",o(1,7)),7!==t.stack)}))},c5fa:function(t,e,i){"use strict";(function(t){i("d9e2"),i("14d9");var s=i("fa79"),o=i("5ba3"),a=i("c0d8"),r=i.n(a),l=i("2eaf"),n=i("8977"),c=i("db16"),u=i("3bba"),h=i("4360");let d=Object(n["a"])("production"),p=d,m=p.rpcUrl,g=p.ETHNETWORK;e["a"]={data(){var t=(t,e,i)=>{if(!e)return i(new Error("Please enter the verification code"));i()},e=(t,e,i)=>{if(""===e)i(new Error("Please enter Your Password"));else{var s=/^(?=.*[a-z])(?=.*\d)[^]{8,16}$/,o=s.test(e);o?""!==this.ruleForm.checkPass&&0!=this.loginState&&this.$refs.ruleForm.validateField("checkPass"):i(new Error("Password should be 8-16 digits and contain numbers and letters")),i()}},s=(t,e,i)=>{""===e?i(new Error("Please enter password again")):e!==this.ruleForm.pass?i(new Error("The two passwords do not match")):i()};return{imgUrl:i("91e7"),loginRuleForm:{email:"",pass:""},ruleForm:{email:"",code:"",pass:"",checkPass:""},rules:{email:[{required:!0,message:"Please enter the email address",trigger:"blur"},{type:"email",message:"Incorrect E-mail address format",trigger:"blur"}],code:[{validator:t,trigger:"blur"}],pass:[{validator:e,trigger:"blur"}],checkPass:[{validator:s,trigger:"blur"}]},walletList:[{icon:i("fddf"),text:"Metamask"},{icon:i("8bf0"),text:"WalletConnect"}],loginState:0,isShowWalletPop:!1,isClickCode:!1,codeTime:60,codeTimer:null,isEmail:!1,isSubmit:!1,isRegister:!1,isShowBack:!1}},components:{sharePop:u["default"]},computed:{isMobile(){return this.$store.commit("setMobile"),this.$store.state.isMobile},from(){return this.$route.query.from||"/assets"}},watch:{$route:{handler:function(t,e){0==t.query.active?this.loginState=0:1==t.query.active&&1==t.query.tab?(this.loginState=1,this.isRegister=!1):2==t.query.active&&2==t.query.tab?(this.loginState=2,this.isRegister=!0):3==t.query.active&&3==t.query.tab&&(this.loginState=3,this.isRegister=!1)},deep:!0}},mounted(){if(this.$bus.$on("isConnected",t=>{this.isShowWalletPop=t,this.$router.push("/")}),this.$route.query.active)switch(this.isShowBack=!0,this.loginState=this.$route.query.active,this.$route.query.tab){case"1":this.isRegister=!1;break;case"2":this.isRegister=!0;break}},methods:{hideShowPsw(){let t=document.getElementById("input_code");"password"==t.type?(t.type="text",this.imgUrl=i("ee35")):(t.type="password",this.imgUrl=i("91e7"))},submitForm(e,i){if(this.checkAllInfo(e),this.isSubmit)if(3==i){let t={channelCode:"",code:this.ruleForm.code,inviteCode:"",mail:this.ruleForm.email,password:this.ruleForm.pass};Object(c["f"])(t).then(t=>{this.$popup.show({title:"Tips",text:"Account registration success!"})}).catch(t=>{this.$popup.show({title:"Tips",text:"Failed to register the account!"})})}else if(2==i){let e={account:this.ruleForm.email,code:this.ruleForm.code,mail:this.ruleForm.email,newPassword:t.from(this.ruleForm.pass).toString("base64")};Object(c["a"])(e).then(t=>{this.$popup.show({title:"Congratulations",text:"Password reset complete",btnFunLeft:this.backToLogin})}).catch(t=>{this.$popup.show({title:"Tips",text:"Reset password failed!"})})}},onClickGoBack(){return this.clearInterval(),2==this.loginState?(this.isShowBack=!0,void this.changeIndex(1)):3==this.loginState||1==this.loginState?(this.isShowBack=!1,void this.changeIndex(0)):void this.$router.go(-1)},onClickLogin(e){this.$refs[e].validate(e=>{if(e){let e={account:this.loginRuleForm.email,channelCode:"",credit:t.from(this.loginRuleForm.pass).toString("base64"),inviteCode:""};Object(c["d"])(e).then(t=>{this.$router.push("/home"),this.$bus.$emit("loginpass"),h["a"].commit("setIsConnectWallet",!0),h["a"].commit("setUserToken",t.data.token),h["a"].commit("setSelfInviteCode",t.data.inviteCode)}).catch(t=>{this.$popup.show({title:"Tips",text:"Login failed!"})})}})},onClickChooseWallet(){this.isShowWalletPop=!0},onClickSendCode(t,e){this.checkEmail(t),this.isEmail&&(3==e?(this.checkAllInfo("ruleForm"),Object(c["g"])(this.ruleForm.email).then(t=>{this.$popup.show({title:"Tips",text:"We have sent a code to your email address!"})}).catch(t=>{this.$popup.show({title:"Tips",text:"Failed to send the code!"})})):2==e&&Object(c["b"])(this.ruleForm.email).then(t=>{this.$popup.show({title:"Tips",text:"We have sent a code to your email address!"})}).catch(t=>{this.$popup.show({title:"Tips",text:"Failed to send the code!"})}),this.isClickCode=!0,this.codeInterval())},onClickWalletSelectState(t){switch(t){case 0:localStorage.setItem("wallet","Metamask"),!0===this.$store.getters.isConnectWallet&&this.isConnect?this.$router.push("/"):void 0!=window.ethereum?Object(s["b"])():(this.$store.commit("setInstallWalletState",0),this.isMobile?window.location.href="https://metamask.app.link/dapp/www.gamifylabs.io/":this.$popup.show({title:"Tips",text:"Please install wallet!"}));break;case 1:localStorage.setItem("wallet","Walletconnect"),this.walletConnectLogin()}},async walletConnectLogin(){localStorage.getItem("walletconnect")&&localStorage.removeItem("walletconnect");const t={};t[g]=m;const e=new l["a"]({rpc:t});await e.enable();const i=new r.a(e);this.allWalletLogin(i)},async allWalletLogin(e){const i=await e.eth.getAccounts();i.length>0&&(h["a"].commit("setCurrentWalletAddress",i[0]),Object(s["c"])(),Object(s["f"])(h["a"].getters.currentWalletAddress).then(i=>{let a=i.data.token;const r=Object(o["utf8ToHex"])(a);e.eth.personal.sign(r,h["a"].getters.currentWalletAddress,"").then(e=>{let i={account:h["a"].getters.currentWalletAddress.toString(),credit:t.from(e).toString("base64"),inviteCode:h["a"].getters.inviteCode,channelCode:h["a"].getters.channelCode,platform:"META_MASK"};Object(s["g"])(i)})}).catch(t=>{}))},codeInterval(){this.codeTimer=setInterval(()=>{this.codeTime=this.codeTime-1,0==this.codeTime&&this.clearInterval()},1e3)},clearInterval(){this.codeTimer&&(clearInterval(this.codeTimer),this.isClickCode=!1,this.codeTime=60)},checkEmail(t){this.$refs[t].validateField("email",t=>{this.isEmail=!t})},checkAllInfo(t){this.$refs[t].validate(t=>{this.isSubmit=!!t})},onclickRegister(){this.emailRegister(),this.isShowBack=!0},emailRegister(){this.changeIndex(3)},walletRegister(){this.isShowWalletPop=!0},backToLogin(){this.changeIndex(0)},popup_close(t){this.isShowWalletPop=t},onClickForgetPassword(){this.changeIndex(2)},changeIndex(t){this.loginState=t,0==t?this.$router.push("/login?active="+t):this.$router.push("/login?active="+t+"&tab="+t)},chooseWallet(){this.isShowWalletPop=!0},chooseEmail(){this.changeIndex(1),this.isShowBack=!0}}}}).call(this,i("1c35").Buffer)},d9e2:function(t,e,i){var s=i("23e7"),o=i("da84"),a=i("2ba4"),r=i("e5cb"),l="WebAssembly",n=o[l],c=7!==Error("e",{cause:7}).cause,u=function(t,e){var i={};i[t]=r(t,e,c),s({global:!0,constructor:!0,arity:1,forced:c},i)},h=function(t,e){if(n&&n[t]){var i={};i[t]=r(l+"."+t,e,c),s({target:l,stat:!0,constructor:!0,arity:1,forced:c},i)}};u("Error",(function(t){return function(e){return a(t,this,arguments)}})),u("EvalError",(function(t){return function(e){return a(t,this,arguments)}})),u("RangeError",(function(t){return function(e){return a(t,this,arguments)}})),u("ReferenceError",(function(t){return function(e){return a(t,this,arguments)}})),u("SyntaxError",(function(t){return function(e){return a(t,this,arguments)}})),u("TypeError",(function(t){return function(e){return a(t,this,arguments)}})),u("URIError",(function(t){return function(e){return a(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return a(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return a(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return a(t,this,arguments)}}))},dd7b:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("div",{staticClass:"login_view"}),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.loginState||1==t.loginState,expression:"loginState == 0 || loginState == 1"}],staticClass:"title"}),e("div",{directives:[{name:"show",rawName:"v-show",value:3==t.loginState,expression:"loginState == 3"}],staticClass:"title1"}),e("div",{directives:[{name:"show",rawName:"v-show",value:2==t.loginState,expression:"loginState == 2"}],staticClass:"title2"}),e("div",{staticClass:"login_content"},[0==t.loginState?e("div",{staticClass:"chooselogin"},[e("div",{staticClass:"choose"},[e("p",{staticClass:"titletext"},[t._v("Login or Register using your wallet")]),e("div",{staticClass:"wallet",on:{click:function(e){return t.chooseWallet()}}},[e("p",{attrs:{id:"up"}},[t._v("Connect wallet")]),e("p",{attrs:{id:"down"}},[t._v("Connect wallet")])]),e("p",{staticClass:"or"},[t._v("or")]),e("div",{staticClass:"email",on:{click:function(e){return t.chooseEmail()}}},[e("p",{attrs:{id:"up"}},[t._v("Login Via Email")]),e("p",{attrs:{id:"down"}},[t._v("Login Via Email")])]),e("div",{staticClass:"btn_register",on:{click:t.onclickRegister}},[e("p",[t._v("Create Account")])])])]):t._e(),1==t.loginState?e("div",{staticClass:"login_enter"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowBack,expression:"isShowBack"}],staticClass:"login_back",on:{click:t.onClickGoBack}}),e("div",{staticClass:"enter_info"},[e("el-form",{ref:"loginRuleForm",staticClass:"demo-loginRuleForm",attrs:{model:t.loginRuleForm,"status-icon:false":"",rules:t.rules,"label-width":"100px"}},[e("el-form-item",{attrs:{label:"",prop:"email"}},[e("el-input",{attrs:{placeholder:"Email address"},model:{value:t.loginRuleForm.email,callback:function(e){t.$set(t.loginRuleForm,"email",e)},expression:"loginRuleForm.email"}})],1),e("el-form-item",{attrs:{label:"",prop:"pass"}},[e("el-input",{attrs:{placeholder:"Password",id:"input_code",type:"password",oninput:"if(value.length>16)value=value.slice(0,16)"},model:{value:t.loginRuleForm.pass,callback:function(e){t.$set(t.loginRuleForm,"pass",e)},expression:"loginRuleForm.pass"}}),e("img",{attrs:{src:t.imgUrl,alt:"",id:"login_img"},on:{click:t.hideShowPsw}}),e("p",{on:{click:t.onClickForgetPassword}},[t._v("Forget password")])],1)],1)],1),e("div",{staticClass:"enten_btn"},[e("div",{staticClass:"btn_b",on:{click:function(e){return t.onClickLogin("loginRuleForm")}}},[e("p",[t._v("LOGIN")])])])]):t._e(),2==t.loginState||3==t.loginState?e("div",{staticClass:"login_mailbox"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowBack,expression:"isShowBack"}],staticClass:"login_back",on:{click:t.onClickGoBack}}),e("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,"status-icon:false":"",rules:t.rules,"label-width":"100px"}},[e("el-form-item"),e("el-form-item",{attrs:{label:"",prop:"email"}},[e("el-input",{attrs:{placeholder:"Email"},model:{value:t.ruleForm.email,callback:function(e){t.$set(t.ruleForm,"email",e)},expression:"ruleForm.email"}})],1),e("el-form-item",{attrs:{label:"",prop:"code"}},[e("el-input",{staticClass:"code_input",attrs:{placeholder:"Verification code"},model:{value:t.ruleForm.code,callback:function(e){t.$set(t.ruleForm,"code",e)},expression:"ruleForm.code"}}),t.isClickCode?e("el-button",{staticClass:"code_button_click",attrs:{type:"text"}},[e("p",[t._v(t._s(t.codeTime))])]):e("el-button",{staticClass:"code_button",attrs:{type:"text"},on:{click:function(e){return t.onClickSendCode("ruleForm",t.loginState)}}},[e("p",{attrs:{id:"up"}},[t._v("Send")]),e("p",{attrs:{id:"down"}},[t._v("Send")])])],1),e("el-form-item",{attrs:{label:"",prop:"pass"}},[e("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"Enter your password",oninput:"if(value.length>16)value=value.slice(0,16)"},model:{value:t.ruleForm.pass,callback:function(e){t.$set(t.ruleForm,"pass",e)},expression:"ruleForm.pass"}},[t._v(" >")])],1),e("el-form-item",{attrs:{label:"",prop:"checkPass"}},[e("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"Confirm password",oninput:"if(value.length>16)value=value.slice(0,16)"},model:{value:t.ruleForm.checkPass,callback:function(e){t.$set(t.ruleForm,"checkPass",e)},expression:"ruleForm.checkPass"}},[t._v(" >")])],1),e("el-form-item",[e("el-button",{staticClass:"submit_btn",attrs:{type:"text"},on:{click:function(e){return t.submitForm("ruleForm",t.loginState)}}},[t._v("Submit")])],1)],1)],1):t._e()]),e("sharePop",{attrs:{setClose:t.isShowWalletPop,setWidth:58.75,setHeight:34.125},on:{popup_close:t.popup_close}},[e("div",{staticClass:"wallet_pop"},[e("div",{staticClass:"close",on:{click:function(e){t.isShowWalletPop=!1}}}),e("div",{staticClass:"wallet_pop_title"},[e("p",{attrs:{id:"up"}},[t._v("CHOOSE WALLET")]),e("p",{attrs:{id:"down"}},[t._v("CHOOSE WALLET")])]),e("div",{staticClass:"wallet_pop_content"},t._l(t.walletList,(function(i,s){return e("div",{key:s,staticClass:"wallet_pop_content_index",on:{click:function(e){return t.onClickWalletSelectState(s)}}},[e("img",{staticClass:"content_index_icon",attrs:{src:i.icon,alt:""}}),e("p",[t._v(t._s(i.text))])])})),0)])])],1)},o=[],a=i("c5fa"),r=a["a"],l=(i("a7b8"),i("2877")),n=Object(l["a"])(r,s,o,!1,null,"060421e4",null);e["default"]=n.exports},e348:function(t,e,i){},e391:function(t,e,i){var s=i("577ed");t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:s(t)}},e5cb:function(t,e,i){"use strict";var s=i("d066"),o=i("1a2d"),a=i("9112"),r=i("3a9b"),l=i("d2bb"),n=i("e893"),c=i("aeb0"),u=i("7156"),h=i("e391"),d=i("ab36"),p=i("6f19"),m=i("83ab"),g=i("c430");t.exports=function(t,e,i,A){var f="stackTraceLimit",v=A?2:1,w=t.split("."),b=w[w.length-1],C=s.apply(null,w);if(C){var k=C.prototype;if(!g&&o(k,"cause")&&delete k.cause,!i)return C;var S=s("Error"),R=e((function(t,e){var i=h(A?e:t,void 0),s=A?new C(t):new C;return void 0!==i&&a(s,"message",i),p(s,R,s.stack,2),this&&r(k,this)&&u(s,this,R),arguments.length>v&&d(s,arguments[v]),s}));if(R.prototype=k,"Error"!==b?l?l(R,S):n(R,S,{name:!0}):m&&f in C&&(c(R,C,f),c(R,C,"prepareStackTrace")),n(R,C),!g)try{k.name!==b&&a(k,"name",b),k.constructor=R}catch(F){}return R}}},ee35:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAgCAYAAACPb1E+AAAFXUlEQVRYR72Y54tdVRTFf7G3GAtWFEvsFRWxxljA2BMrFvwv/OLf4hfxiwU7ihVLolGCFSuI2FBRY4u9y29Yezhz59737mTEAw9m3r3nnHXWXnvtfd4S5o8lwP7ACcBvwEvAxp73/revBNQdOwHnAyuAP4GngLXAT1NQbQH4qfE34GfRow/kgcANwOFZ/Rvg8QD9sbPjlsAuwJ7AzsA2AfoP8AvwPfBtIvI78OvmIO4DuRtwDXAKsBXghm70WAeorB0DXATsBQi4y+QfwM+AB/0AeAf4PFH5ayzgPpBudAiwGjgS2DpAvwvQZwEZ3RG4HjgjACftadjVt/M+Al4G3grTUyXRB9LNCuilwNEB6vcyaugFKkuXAOcC20d/7YaubSRkuB2+8wPwXiLzbqQxeMghkE7YFjgn4dy1WUFGHw1Q3zkr4Tasas4wuu52wLLoVd16EL+rPX3va2Ad8Fz+VlrzxhBIE+BY4EJgeRhpJ8toAXUzGZMhN6mNjIYsutbeSUSjsm+kUnvrGoZfzX/SzJ/drw+ki56UUO7XZKvhFUwlRzH6zAh7ch9Z1wH0X5PygBxAMGb+a8BDwIddoF2Qnvx4YA2gFflcZr6I0PcBDm00Wskk0K49DWlMEmRTLUvG0uwjUBl9APi0ndwFeTBwNXBUw+BnwMPAq9He5bGeSgiBPjLgo5MyXp2q5/MANS8WvVWNPpjMn5nfgnSSAM5MGGRQT7s/J/Skvq9Gr8hBWqCl0bGMur82djZwQYqC31kA7g1YJTYL0hCcClyVUwlQA/ZEz8fjihWBGnIlIeOLBWq4LQiGf4fIS+O/NQVgFuRBwJXJaBND2q3ZhllP647W8M3YLtAxydSuaVm9LknlWhr/E5HRpgq3pq3deCotxfJ1R6rDkK6GgFYJrco0SZf1zLXMesuxyekwWW8HXimQNzXJoKbuA55OVZm0SQHthn5zgErQtcBpcQ8Lg0l0W4G8OWYr1Qr3TmB9WJ3GhEBLo9b6Cn0BHRt6k0jJrUzimqgvArcUSGnWChSuGbUBuHsBza5Abe2UTZtMbWWa1o8ekYal/NnEFcO6AunCZrbdj2NTMlsWPNGYIdDDgMvSPVmdHGMY1Sf1Zx3Grstm+4VY0cYCKYPSbHsm7VqQ5eku4O0FdNgto4a+gNpImK19obfxsJG5OGXTg30ZC3pTLK2Z27ga9hOzuFluz3dP/Kq3Qxmwpwp9AS3f7QL1ECeniNiEVNXxPe3PzmpOxalO27CXLqTd01j4308YxoZeoPabSqk6fHXWAvU+dWPC7P4S83oS13I8M7q128pzehJgjzwXqACfBN4Y0fG03leMmhTV4dedSR8VlPal1Hz+cXQ4R2J9rZqatH5bT3cPUHtFzdUmw8y3pluVpklAdmxaLHt2V5LgHDValzv3s3WTVUmwU5eY2THU9DpRU12Vzrp6SA3WMLiQC9pSmf0uKisF2nXbpleda09Gx1EaFajJJAkyqU3Nu/NMuj7Y6h8X/5QN/68NrK2GTUZk2B8PrPF1ZZUxD2pnZTRMCstdrdEHdCZJ+sYkkL5v9bBB9UZoSLyzeOIaMqL5y6afut/Iosniu3UX79urZVSN9hr+NJAFRr1o9HbSdj3+73WgvWdPy3oloY41dw9g59Nmfd1C5wEdC7KcwCagLlVmrn8bwrq6tuupLZmVaZsWL1n6rldZf4DQvKuEVjLZ7FqvZ5rdGgsB2c6TRauUoNWcCSG7htY1ZU192qx8FfbUnB+fVVNihSugfu9vTgJ13qJBdteYxOQcO2kmtv2oXZQHsMoI1MT8T0FO0+Kk5yampVMP1R0MtXV7zvgXcIlpMMBcfiEAAAAASUVORK5CYII="},fddf:function(t,e,i){t.exports=i.p+"img/wallet_metamask.bd3cfcc2.png"}}]);