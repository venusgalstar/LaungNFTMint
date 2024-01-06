(this["webpackJsonpmint-ui"]=this["webpackJsonpmint-ui"]||[]).push([[0],{209:function(e,t){},213:function(e,t){},241:function(e,t,n){},242:function(e,t){},256:function(e,t){},272:function(e,t){},327:function(e,t,n){},329:function(e,t,n){"use strict";n.r(t);var r,a=n(1),i=n.n(a),c=n(69),s=n.n(c),o=(n(241),n(25)),u=n(11),l=n(2),f=n(9),d=n(51),p=n(0),b=n.n(p),g=n(84),h=n(397),m=n(389),v=n(395),x=n(388),y=n(393),j=n(398),O=n(5),k=n(379),w=n(136),S=n(378),P=n(78),T=n(42),M=n(215),A=n(216),E=n(4),R=Object(A.a)("div")((function(e){var t=e.theme;return{display:"flex",padding:t.spacing(0),"& > *":{margin:t.spacing(.4),width:t.spacing(6),height:t.spacing(6),display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontSize:10}}})),D=Object(A.a)("span")((function(e){var t=e.theme;return{display:"flex",margin:0,marginBottom:t.spacing(.5),height:t.spacing(3.5),padding:t.spacing(1),flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontWeight:"bold",fontSize:18}})),C=Object(A.a)("span")({fontWeight:"bold",fontSize:18}),I=function(e){var t=e.date,n=e.status,r=e.style,a=e.onComplete;return t?Object(E.jsx)(M.a,{date:t,onComplete:a,renderer:function(e){var t=e.days,a=e.hours,i=e.minutes,c=e.seconds;return a+=24*t,e.completed?n?Object(E.jsx)(D,{children:n}):null:Object(E.jsxs)(R,{style:r,children:[Object(E.jsxs)(v.a,{elevation:0,children:[Object(E.jsx)(C,{children:a<10?"0".concat(a):a}),Object(E.jsx)("span",{children:"hrs"})]}),Object(E.jsxs)(v.a,{elevation:0,children:[Object(E.jsx)(C,{children:i<10?"0".concat(i):i}),Object(E.jsx)("span",{children:"mins"})]}),Object(E.jsxs)(v.a,{elevation:0,children:[Object(E.jsx)(C,{children:c<10?"0".concat(c):c}),Object(E.jsx)("span",{children:"secs"})]})]})}}):null},K=n(332),B=n(396),N=n(70),L=n(135),W=n(220),_=Object(g.default)(K.a)(r||(r=Object(d.a)(["\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),U=function(e){var t=e.onMint,n=e.candyMachine,r=e.isMinting,i=e.setIsMinting,c=e.isActive,s=Object(L.b)(),o=Object(a.useState)(!1),u=Object(f.a)(o,2),d=u[0],p=u[1],g=Object(N.useGateway)().gatewayStatus,h=Object(a.useState)(-1),m=Object(f.a)(h,1)[0],v=Object(a.useState)(!1),x=Object(f.a)(v,2),y=x[0],j=x[1],O=Object(a.useState)(!1),k=Object(f.a)(O,2),w=k[0],S=k[1];Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.removeAccountChangeListener)(s.connection,m);case 2:return e.next=4,t();case 4:j(!1),p(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();d&&y&&e()}),[d,y,s.connection,t,m]);var P=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current=e}),[e]),t.current}(g);return Object(a.useEffect)((function(){var e=[N.GatewayStatus.NOT_REQUESTED,N.GatewayStatus.REFRESH_TOKEN_REQUIRED],t=[].concat(e,[N.GatewayStatus.UNKNOWN]);e.find((function(e){return P===e}))&&!t.find((function(e){return g===e}))&&i(!0),console.log("change: ",N.GatewayStatus[g])}),[w,P,g]),Object(a.useEffect)((function(){w&&g===N.GatewayStatus.ACTIVE&&(console.log("Minting after token active"),S(!1),t())}),[w,g,t]),Object(E.jsx)(_,{disabled:r||!c,onClick:Object(l.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:j(!1);case 3:case"end":return e.stop()}}),e)}))),variant:"contained",children:null!==n&&void 0!==n&&n.state.isSoldOut?"SOLD OUT":r?Object(E.jsx)(B.a,{}):null!==n&&void 0!==n&&n.state.isPresale||null!==n&&void 0!==n&&n.state.isWhitelistOnly?"WHITELIST MINT":"MINT"})};var F,Y,z=n(48),H=Object(g.default)(S.a)(F||(F=Object(d.a)(["\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),G=g.default.div(Y||(Y=Object(d.a)([""]))),V=function(e){var t;return e.state.isActive&&null!==(t=e.state.endSettings)&&void 0!==t&&t.endSettingType.date?Object(T.g)(e.state.endSettings.number):Object(T.g)(e.state.goLiveDate?e.state.goLiveDate:e.state.isPresale?new o.a((new Date).getTime()/1e3):void 0)},q=function(e){var t,n,r,i=Object(a.useState)(!1),c=Object(f.a)(i,2),s=c[0],d=c[1],p=Object(a.useState)(),g=Object(f.a)(p,2),S=g[0],M=g[1],A=Object(a.useState)({open:!1,message:"",severity:void 0}),R=Object(f.a)(A,2),D=R[0],C=R[1],K=Object(a.useState)(!1),B=Object(f.a)(K,2),L=B[0],W=B[1],_=Object(a.useState)(),F=Object(f.a)(_,2),Y=F[0],q=F[1],J=Object(a.useState)(),Z=Object(f.a)(J,2),Q=Z[0],X=Z[1],$=Object(a.useState)(!1),ee=Object(f.a)($,2),te=ee[0],ne=ee[1],re=Object(a.useState)(!1),ae=Object(f.a)(re,2),ie=ae[0],ce=ae[1],se=Object(a.useState)(!1),oe=Object(f.a)(se,2),ue=oe[0],le=oe[1],fe=Object(a.useState)(),de=Object(f.a)(fe,2),pe=de[0],be=de[1],ge=Object(a.useState)(!0),he=Object(f.a)(ge,2),me=he[0],ve=he[1],xe=Object(a.useState)(),ye=Object(f.a)(xe,2),je=ye[0],Oe=ye[1],ke=e.rpcHost,we=Object(k.a)(),Se=Object(w.b)(),Pe=Se.connect,Te=Se.connected,Me=Se.publicKey,Ae=Se.wallet,Ee=e.network,Re=Object(a.useCallback)(Object(l.a)(b.a.mark((function t(){var n,r,a,i,c,s,u,l,d,p,g,h,m,v,x,y,j,k,w,S,A,E,R,D,I,K,B,N=arguments;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=N.length>0&&void 0!==N[0]?N[0]:"confirmed",Me){t.next=3;break}return t.abrupt("return");case 3:if(void 0===e.error){t.next=6;break}return C({open:!0,message:e.error,severity:"error",hideDuration:null}),t.abrupt("return");case 6:if(r=new O.Connection(e.rpcHost,n),!e.candyMachineId){t.next=94;break}return t.prev=8,t.next=11,Object(P.d)(we,e.candyMachineId,r);case 11:if(l=t.sent,console.log("Candy machine state: ",l),d=!(null===l||void 0===l||!l.state.goLiveDate)&&(null===l||void 0===l?void 0:l.state.goLiveDate.toNumber())<(new Date).getTime()/1e3,p=!1,g=!1,h=l.state.price,null===l||void 0===l||!l.state.whitelistMintSettings){t.next=39;break}return l.state.whitelistMintSettings.presale&&(!l.state.goLiveDate||l.state.goLiveDate.toNumber()>(new Date).getTime()/1e3)&&(p=!0),l.state.whitelistMintSettings.discountPrice?(be(l.state.whitelistMintSettings.discountPrice),h=l.state.whitelistMintSettings.discountPrice):(be(void 0),l.state.whitelistMintSettings.presale||(l.state.isWhitelistOnly=!0)),m=new o.e.PublicKey(l.state.whitelistMintSettings.mint),t.next=23,Object(T.d)(m,Me);case 23:return v=t.sent[0],t.prev=24,t.next=27,r.getTokenAccountBalance(v);case 27:x=t.sent,g=parseInt(x.value.amount)>0,ne(g),l.state.isWhitelistOnly&&(d=g&&(p||d)),t.next=39;break;case 33:t.prev=33,t.t0=t.catch(24),ne(!1),l.state.isWhitelistOnly&&(d=!1),console.log("There was a problem fetching whitelist token balance"),console.log(t.t0);case 39:if(h=g?h:l.state.price,null===l||void 0===l||!l.state.tokenMint){t.next=62;break}return y=new o.e.PublicKey(l.state.tokenMint),t.next=44,Object(T.d)(y,Me);case 44:return j=t.sent[0],t.prev=45,t.next=48,r.getTokenAccountBalance(j);case 48:k=t.sent,w=new o.a(k.value.amount).gte(h),le(w),d=d&&w,t.next=60;break;case 54:t.prev=54,t.t1=t.catch(45),le(!1),d=!1,console.log("There was a problem fetching SPL token balance"),console.log(t.t1);case 60:t.next=70;break;case 62:return t.t2=o.a,t.next=65,r.getBalance(Me);case 65:t.t3=t.sent,S=new t.t2(t.t3),A=S.gte(h),le(A),d=d&&A;case 70:return null!==l&&void 0!==l&&null!==(a=l.state.endSettings)&&void 0!==a&&a.endSettingType.date&&(q(Object(T.g)(l.state.endSettings.number)),l.state.endSettings.number.toNumber()<(new Date).getTime()/1e3&&(d=!1)),null!==l&&void 0!==l&&null!==(i=l.state.endSettings)&&void 0!==i&&i.endSettingType.amount?(E=Math.min(l.state.endSettings.number.toNumber(),l.state.itemsAvailable),l.state.itemsRedeemed<E?X(E-l.state.itemsRedeemed):(X(0),l.state.isSoldOut=!0)):X(l.state.itemsRemaining),l.state.isSoldOut&&(d=!1),t.next=75,Object(P.e)(e.candyMachineId);case 75:return R=t.sent,D=Object(f.a)(R,1),I=D[0],t.next=80,r.getAccountInfo(I);case 80:K=t.sent,W(l.state.isActive=d),ce(l.state.isPresale=p),M(l),B=892+(K&&l.state.retainAuthority?182:0)+(l.state.tokenMint?66:0)+(l.state.whitelistMintSettings?34:0)+(null!==(c=l.state.whitelistMintSettings)&&void 0!==c&&null!==(s=c.mode)&&void 0!==s&&s.burnEveryTime?34:0)+(l.state.gatekeeper?33:0)+(null!==(u=l.state.gatekeeper)&&void 0!==u&&u.expireOnUse?66:0),ve(B>1230),t.next=92;break;case 88:t.prev=88,t.t4=t.catch(8),t.t4 instanceof Error?t.t4.message==="Account does not exist ".concat(e.candyMachineId)?C({open:!0,message:"Couldn't fetch candy machine state from candy machine with address: ".concat(e.candyMachineId,", using rpc: ").concat(e.rpcHost,"! You probably typed the REACT_APP_CANDY_MACHINE_ID value wrong in your .env file, or you are using the wrong RPC!"),severity:"error",hideDuration:null}):t.t4.message.startsWith("failed to get info about account")&&C({open:!0,message:"Couldn't fetch candy machine state with rpc: ".concat(e.rpcHost,"! This probably means you have an issue with the REACT_APP_SOLANA_RPC_HOST value in your .env file, or you are not using a custom RPC!"),severity:"error",hideDuration:null}):C({open:!0,message:"".concat(t.t4),severity:"error",hideDuration:null}),console.log(t.t4);case 92:t.next=95;break;case 94:C({open:!0,message:"Your REACT_APP_CANDY_MACHINE_ID value in the .env file doesn't look right! Make sure you enter it in as plain base-58 address!",severity:"error",hideDuration:null});case 95:case"end":return t.stop()}}),t,null,[[8,88],[24,33],[45,54]])}))),[we,e.candyMachineId,e.error,e.rpcHost]),De=function(){var t=Object(l.a)(b.a.mark((function t(){var n,r,a,i,c,s,o,u,l,f,p=arguments;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=p.length>0&&void 0!==p[0]?p[0]:[],r=p.length>1&&void 0!==p[1]?p[1]:[],t.prev=2,d(!0),!(Te&&null!==S&&void 0!==S&&S.program&&Me)){t.next=40;break}if(!me||void 0!==je){t.next=25;break}return C({open:!0,message:"Please sign account setup transaction",severity:"info"}),t.next=9,Object(P.c)(S,Me);case 9:if(i=t.sent,c={err:!0},!i.transaction){t.next=15;break}return t.next=14,Object(P.b)(i.transaction,e.txTimeout,e.connection,!0);case 14:c=t.sent;case 15:if(!c||c.err){t.next=20;break}Oe(i),C({open:!0,message:"Setup transaction succeeded! Please sign minting transaction",severity:"info"}),t.next=23;break;case 20:return C({open:!0,message:"Mint failed! Please try again!",severity:"error"}),d(!1),t.abrupt("return");case 23:t.next=26;break;case 25:C({open:!0,message:"Please sign minting transaction",severity:"info"});case 26:return t.next=28,Object(P.f)(S,Me,n,r,null!==(a=i)&&void 0!==a?a:je);case 28:if(s=t.sent,o={err:!0},u=null,!s){t.next=39;break}return t.next=34,Object(P.b)(s.mintTxId,e.txTimeout,e.connection,!0);case 34:return o=t.sent,t.next=37,S.program.provider.connection.getAccountInfo(s.metadataKey,"processed");case 37:u=t.sent,console.log("Metadata status: ",!!u);case 39:o&&!o.err&&u?(X(l=Q-1),W(S.state.isActive=l>0),S.state.isSoldOut=0===l,Oe(void 0),C({open:!0,message:"Congratulations! Mint succeeded!",severity:"success",hideDuration:7e3}),Re("processed")):o&&!o.err?(C({open:!0,message:"Mint likely failed! Anti-bot SOL 0.01 fee potentially charged! Check the explorer to confirm the mint failed and if so, make sure you are eligible to mint before trying again.",severity:"error",hideDuration:8e3}),Re()):(C({open:!0,message:"Mint failed! Please try again!",severity:"error"}),Re());case 40:t.next=48;break;case 42:t.prev=42,t.t0=t.catch(2),f=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(console.log(t.t0),f="SOLD OUT!",window.location.reload()):312===t.t0.code&&(f="Minting period hasn't started yet."):t.t0.message?t.t0.message.indexOf("0x137")?(console.log(t.t0),f="SOLD OUT!"):t.t0.message.indexOf("0x135")&&(f="Insufficient funds to mint. Please fund your wallet."):f="Transaction timeout! Please try again.",C({open:!0,message:f,severity:"error"}),Re();case 48:return t.prev=48,d(!1),t.finish(48);case 51:case"end":return t.stop()}}),t,null,[[2,42,48,51]])})));return function(){return t.apply(this,arguments)}}(),Ce=function(){var e=!L||ie;e&&(S.state.isWhitelistOnly&&!te&&(e=!1),Y&&Date.now()>=Y.getTime()&&(e=!1)),ie&&S.state.goLiveDate&&S.state.goLiveDate.toNumber()<=(new Date).getTime()/1e3&&ce(S.state.isPresale=!1),W(S.state.isActive=e)};return Object(a.useEffect)((function(){Re()}),[we,e.candyMachineId,e.connection,Re]),Object(a.useEffect)((function(){!function e(){setTimeout((function(){Re(),e()}),2e4)}()}),[Re]),Object(E.jsxs)(h.a,{style:{marginTop:100},children:[Object(E.jsxs)(h.a,{maxWidth:"xs",style:{position:"relative"},children:[Object(E.jsx)(j.a,{variant:"caption",align:"center",display:"block",style:{marginTop:7,color:"grey",fontSize:32,fontWeight:"bold",marginBottom:20},children:"Test Degods Mint"}),Object(E.jsx)(v.a,{style:{padding:24,paddingBottom:10,backgroundColor:"#151A1F",borderRadius:6},children:Te?Object(E.jsxs)(E.Fragment,{children:[S&&Object(E.jsxs)(y.a,{container:!0,direction:"row",justifyContent:"center",wrap:"nowrap",children:[Object(E.jsxs)(y.a,{item:!0,xs:3,children:[Object(E.jsx)(j.a,{variant:"body2",color:"textSecondary",children:"Remaining"}),Object(E.jsx)(j.a,{variant:"h6",color:"textPrimary",style:{fontWeight:"bold"},children:"".concat(Q)})]}),Object(E.jsxs)(y.a,{item:!0,xs:4,children:[Object(E.jsx)(j.a,{variant:"body2",color:"textSecondary",children:te&&pe?"Discount Price":"Price"}),Object(E.jsx)(j.a,{variant:"h6",color:"textPrimary",style:{fontWeight:"bold"},children:"\u25ce ".concat(te&&pe?T.c.asNumber(pe):T.c.asNumber(S.state.price))})]}),Object(E.jsx)(y.a,{item:!0,xs:5,children:L&&Y&&Date.now()<Y.getTime()?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(I,{date:V(S),style:{justifyContent:"flex-end"},status:"COMPLETED",onComplete:Ce},"endSettings"),Object(E.jsx)(j.a,{variant:"caption",align:"center",display:"block",style:{fontWeight:"bold"},children:"TO END OF MINT"})]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(I,{date:V(S),style:{justifyContent:"flex-end"},status:null!==S&&void 0!==S&&null!==(t=S.state)&&void 0!==t&&t.isSoldOut||Y&&Date.now()>Y.getTime()?"COMPLETED":ie?"PRESALE":"LIVE",onComplete:Ce},"goLive"),ie&&S.state.goLiveDate&&S.state.goLiveDate.toNumber()>(new Date).getTime()/1e3&&Object(E.jsx)(j.a,{variant:"caption",align:"center",display:"block",style:{fontWeight:"bold"},children:"UNTIL PUBLIC MINT"})]})})]}),Object(E.jsx)(G,{children:null!==S&&void 0!==S&&S.state.isActive&&null!==S&&void 0!==S&&S.state.gatekeeper&&Me&&null!==we&&void 0!==we&&we.signTransaction?Object(E.jsx)(N.GatewayProvider,{wallet:{publicKey:Me||new O.PublicKey(P.a),signTransaction:we.signTransaction},gatekeeperNetwork:null===S||void 0===S||null===(n=S.state)||void 0===n||null===(r=n.gatekeeper)||void 0===r?void 0:r.gatekeeperNetwork,clusterUrl:ke,cluster:Ee,options:{autoShowModal:!1},children:Object(E.jsx)(U,{candyMachine:S,isMinting:s,setIsMinting:function(e){return d(e)},onMint:De,isActive:L||ie&&te&&ue})}):Object(E.jsx)(U,{candyMachine:S,isMinting:s,setIsMinting:function(e){return d(e)},onMint:De,isActive:L||ie&&te&&ue})})]}):Object(E.jsx)(H,{onClick:function(e){(null===Ae||void 0===Ae?void 0:Ae.adapter.name)===z.b&&(Pe(),e.preventDefault())},children:"Connect Wallet"})})]}),Object(E.jsx)(m.a,{open:D.open,autoHideDuration:void 0===D.hideDuration?6e3:D.hideDuration,onClose:function(){return C(Object(u.a)(Object(u.a)({},D),{},{open:!1}))},children:Object(E.jsx)(x.a,{onClose:function(){return C(Object(u.a)(Object(u.a)({},D),{},{open:!1}))},severity:D.severity,children:D.message})})]})},J=n(86),Z=n(384),Q=n(386),X=n(385),$=n(226),ee=n(391),te=n(381),ne=n(383),re=n(382),ae=n(392),ie=Object($.a)({palette:{mode:"dark"}}),ce=function(){try{return new o.e.PublicKey("9sjiCCKpzHwkHbQUExVhJZwX9BGbq1tR5AjLTas9B8Kg")}catch(e){return void console.log("Failed to construct CandyMachineId",e)}}(),se="devnet",oe=o.e.clusterApiUrl("devnet"),ue=new o.e.Connection(oe),le=function(){var e=Object(a.useMemo)((function(){return Object(O.clusterApiUrl)(se)}),[]),t=Object(a.useMemo)((function(){return[new te.a,new re.a({network:se}),new ne.a,new ae.b({network:se}),new ae.a({network:se})]}),[]);return Object(E.jsx)(ee.a,{theme:ie,children:Object(E.jsx)(Z.a,{endpoint:e,children:Object(E.jsx)(Q.a,{wallets:t,autoConnect:!0,children:Object(E.jsx)(X.a,{children:Object(E.jsx)(q,{candyMachineId:ce,connection:ue,txTimeout:J.a,rpcHost:oe,network:se})})})})})},fe=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,405)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};n(327);s.a.render(Object(E.jsx)(i.a.StrictMode,{children:Object(E.jsx)(le,{})}),document.getElementById("root")),fe()},42:function(e,t,n){"use strict";(function(e){n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return g})),n.d(t,"f",(function(){return h}));var r=n(2),a=n(0),i=n.n(a),c=n(25),s=n(39),o=n(5),u=function(e){if(e)return new Date(1e3*e.toNumber())},l=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),f={format:function(e){return e?l.format(e):"--"},asNumber:function(e){if(e)return e.toNumber()/o.LAMPORTS_PER_SOL}},d=new c.e.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),p=new c.e.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs"),b=function(){var e=Object(r.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),s.b.toBuffer(),t.toBuffer()],d);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var t=Object(r.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),e.from("expire")],p);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(r.a)(i.a.mark((function t(n,r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),e.from("gateway"),e.from([0,0,0,0,0,0,0,0]),r.toBuffer()],p);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n(14).Buffer)},78:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return O})),n.d(t,"c",(function(){return w})),n.d(t,"f",(function(){return S}));var r=n(9),a=n(2),i=n(0),c=n.n(i),s=n(25),o=n(39),u=n(5),l=n(86),f=n(42),d=new s.e.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),p=new s.e.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),b=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,s,o,u,l=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>3&&void 0!==l[3]&&l[3],s=!1,o={slot:0,confirmations:0,err:null},u=0,e.next=6,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(u,l){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);case 1:if(s||!i){e.next=7;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,o=n&&n.value[0],s||(o?o.err?(console.log("REST error for",t,o),s=!0,l(o.err)):o.confirmations?(console.log("REST confirmation for",t,o),s=!0,u(o)):console.log("REST no confirmations for",t,o):console.log("REST null result for",t,o)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=5,P(2e3);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 6:return o=e.sent,e.prev=7,e.next=10,r.removeSignatureListener(u);case 10:e.next=14;break;case 12:e.prev=12,e.t0=e.catch(7);case 14:return s=!0,console.log("Returning status",o),e.abrupt("return",o);case 17:case"end":return e.stop()}}),e,null,[[7,12]])})));return function(t,n,r){return e.apply(this,arguments)}}(),g=function(t,n,r,a){var i=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:s.e.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:s.e.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new s.e.TransactionInstruction({keys:i,programId:f.b,data:e.from([])})},h=function(){var e=Object(a.a)(c.a.mark((function e(t,n,i){var o,u,l,f,p,b,g,h,m,v,x,y,j;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new s.c(i,t,{preflightCommitment:"processed"}),u=function(){var e=Object(a.a)(c.a.mark((function e(){var t,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.fetchIdl(d,o);case 2:return t=e.sent,r=new s.b(t,d,o),e.next=6,r.account.candyMachine.fetch(n);case 6:return a=e.sent,e.abrupt("return",[r,a]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.getSlot();case 2:return n=e.sent,e.next=5,i.getBlockTime(n);case 5:if(e.t1=t=e.sent,e.t0=null!==e.t1,!e.t0){e.next=9;break}e.t0=void 0!==t;case 9:if(!e.t0){e.next=13;break}e.t2=t,e.next=14;break;case 13:e.t2=(new Date).getTime()/1e3;case 14:return e.abrupt("return",e.t2);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=5,Promise.all([u(),l()]);case 5:return f=e.sent,p=Object(r.a)(f,2),b=Object(r.a)(p[0],2),g=b[0],h=b[1],m=p[1],v=h.data.itemsAvailable.toNumber(),x=h.itemsRedeemed.toNumber(),y=v-x,j=(new Date).getTime()/1e3-m,null!==h.data.goLiveDate?h.data.goLiveDate+j:null,e.abrupt("return",{id:n,program:g,state:{authority:h.authority,itemsAvailable:v,itemsRedeemed:x,itemsRemaining:y,isSoldOut:0===y,isActive:!1,isPresale:!1,isWhitelistOnly:!1,goLiveDate:h.data.goLiveDate,treasury:h.wallet,tokenMint:h.tokenMint,gatekeeper:h.data.gatekeeper,endSettings:h.data.endSettings,whitelistMintSettings:h.data.whitelistMintSettings,hiddenSettings:h.data.hiddenSettings,price:h.data.price,retainAuthority:h.data.retainAuthority}});case 17:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.account.freezePda.fetch(n);case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer(),e.from("edition")],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer()],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("candy_machine"),n.toBuffer()],d);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("freeze"),n.toBuffer()],d);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("collection"),n.toBuffer()],d);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(a.a)(c.a.mark((function t(n,r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer(),e.from("collection_authority"),r.toBuffer()],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),w=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.e.Keypair.generate(),e.next=3,Object(f.d)(r.publicKey,n);case 3:return a=e.sent[0],i=[r],e.t0=s.e.SystemProgram,e.t1=n,e.t2=r.publicKey,e.t3=o.a.span,e.next=11,t.program.provider.connection.getMinimumBalanceForRentExemption(o.a.span);case 11:return e.t4=e.sent,e.t5=o.b,e.t6={fromPubkey:e.t1,newAccountPubkey:e.t2,space:e.t3,lamports:e.t4,programId:e.t5},e.t7=e.t0.createAccount.call(e.t0,e.t6),e.t8=o.c.createInitMintInstruction(o.b,r.publicKey,0,n,n),e.t9=g(a,n,n,r.publicKey),e.t10=o.c.createMintToInstruction(o.b,r.publicKey,a,n,[],1),u=[e.t7,e.t8,e.t9,e.t10],e.t11=r,e.t12=a,e.next=23,Object(l.c)(t.program.provider.connection,t.program.provider.wallet,[u],[i],l.b.StopOnFailure,"singleGossip",(function(){}),(function(){return!1}),void 0,[],[]);case 23:return e.t13=e.sent.txs[0].txid,e.abrupt("return",{mint:e.t11,userTokenAccount:e.t12,transaction:e.t13});case 25:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var a,i,d,b,h,w,S,P,T,M,A,E,R,D,C,I,K,B,N,L,W,_,U,F,Y,z,H,G,V,q,J,Z,Q,X,$=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=$.length>2&&void 0!==$[2]?$[2]:[],d=$.length>3&&void 0!==$[3]?$[3]:[],b=$.length>4?$[4]:void 0,h=null!==(a=null===b||void 0===b?void 0:b.mint)&&void 0!==a?a:s.e.Keypair.generate(),e.next=6,Object(f.d)(h.publicKey,n);case 6:if(w=e.sent[0],!t.state.tokenMint){e.next=13;break}return e.next=10,Object(f.d)(t.state.tokenMint,n);case 10:e.t0=e.sent[0],e.next=14;break;case 13:e.t0=n;case 14:if(S=e.t0,P=t.id,T=[],M=[],A=[],console.log("SetupState: ",b),b){e.next=39;break}return A.push(h),e.t1=M.push,e.t2=M,e.t3=s.e.SystemProgram,e.t4=n,e.t5=h.publicKey,e.t6=o.a.span,e.next=30,t.program.provider.connection.getMinimumBalanceForRentExemption(o.a.span);case 30:e.t7=e.sent,e.t8=o.b,e.t9={fromPubkey:e.t4,newAccountPubkey:e.t5,space:e.t6,lamports:e.t7,programId:e.t8},e.t10=e.t3.createAccount.call(e.t3,e.t9),e.t11=o.c.createInitMintInstruction(o.b,h.publicKey,0,n,n),e.t12=g(w,n,n,h.publicKey),e.t13=o.c.createMintToInstruction(o.b,h.publicKey,w,n,[],1),e.t14=[e.t10,e.t11,e.t12,e.t13],e.t1.apply.call(e.t1,e.t2,e.t14);case 39:if(!t.state.gatekeeper){e.next=54;break}return e.t15=T,e.next=43,Object(f.f)(n,t.state.gatekeeper.gatekeeperNetwork);case 43:if(e.t16=e.sent[0],e.t17={pubkey:e.t16,isWritable:!0,isSigner:!1},e.t15.push.call(e.t15,e.t17),!t.state.gatekeeper.expireOnUse){e.next=54;break}return T.push({pubkey:f.a,isWritable:!1,isSigner:!1}),e.t18=T,e.next=51,Object(f.e)(t.state.gatekeeper.gatekeeperNetwork);case 51:e.t19=e.sent[0],e.t20={pubkey:e.t19,isWritable:!1,isSigner:!1},e.t18.push.call(e.t18,e.t20);case 54:if(!t.state.whitelistMintSettings){e.next=61;break}return E=new s.e.PublicKey(t.state.whitelistMintSettings.mint),e.next=58,Object(f.d)(E,n);case 58:R=e.sent[0],T.push({pubkey:R,isWritable:!0,isSigner:!1}),t.state.whitelistMintSettings.mode.burnEveryTime&&(T.push({pubkey:E,isWritable:!0,isSigner:!1}),T.push({pubkey:n,isWritable:!1,isSigner:!0}));case 61:return t.state.tokenMint&&(T.push({pubkey:S,isWritable:!0,isSigner:!1}),T.push({pubkey:n,isWritable:!1,isSigner:!0})),e.next=64,x(h.publicKey);case 64:return D=e.sent,e.next=67,v(h.publicKey);case 67:return C=e.sent,e.next=70,y(P);case 70:return I=e.sent,K=Object(r.a)(I,2),B=K[0],N=K[1],e.next=76,j(P);case 76:return L=e.sent[0],console.log(L.toString()),e.next=80,m(t.program,L);case 80:if(W=e.sent,console.log("Freeze state: "),console.log(W),null==W){e.next=91;break}if(T.push({pubkey:L,isWritable:!0,isSigner:!1}),T.push({pubkey:w,isWritable:!1,isSigner:!1}),null==t.state.tokenMint){e.next=91;break}return e.next=89,Object(f.d)(t.state.tokenMint,L);case 89:_=e.sent[0],T.push({pubkey:_,isWritable:!0,isSigner:!1});case 91:return console.log(T.map((function(e){return e.pubkey.toBase58()}))),e.t21=M,e.next=95,t.program.instruction.mintNft(N,{accounts:{candyMachine:P,candyMachineCreator:B,payer:n,wallet:t.state.treasury,mint:h.publicKey,metadata:D,masterEdition:C,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:p,tokenProgram:o.b,systemProgram:u.SystemProgram.programId,rent:s.e.SYSVAR_RENT_PUBKEY,clock:s.e.SYSVAR_CLOCK_PUBKEY,recentBlockhashes:u.SYSVAR_SLOT_HASHES_PUBKEY,instructionSysvarAccount:s.e.SYSVAR_INSTRUCTIONS_PUBKEY},remainingAccounts:T.length>0?T:void 0});case 95:return e.t22=e.sent,e.t21.push.call(e.t21,e.t22),e.next=99,O(P);case 99:return U=e.sent,F=Object(r.a)(U,1),Y=F[0],e.next=104,t.program.provider.connection.getAccountInfo(Y);case 104:if(!e.sent||!t.state.retainAuthority){e.next=135;break}return e.prev=106,e.next=109,t.program.account.collectionPda.fetch(Y);case 109:return z=e.sent,console.log(z),H=z.mint,e.next=114,k(H,Y);case 114:if(G=e.sent,console.log(H),!H){e.next=130;break}return e.next=119,x(H);case 119:return V=e.sent,e.next=122,v(H);case 122:return q=e.sent,console.log("Collection PDA: ",Y.toBase58()),console.log("Authority: ",t.state.authority.toBase58()),e.t23=M,e.next=128,t.program.instruction.setCollectionDuringMint({accounts:{candyMachine:P,metadata:D,payer:n,collectionPda:Y,tokenMetadataProgram:p,instructions:s.e.SYSVAR_INSTRUCTIONS_PUBKEY,collectionMint:H,collectionMetadata:V,collectionMasterEdition:q,authority:t.state.authority,collectionAuthorityRecord:G}});case 128:e.t24=e.sent,e.t23.push.call(e.t23,e.t24);case 130:e.next=135;break;case 132:e.prev=132,e.t25=e.catch(106),console.error(e.t25);case 135:return J=[M],Z=[A],e.prev=137,e.next=140,Object(l.c)(t.program.provider.connection,t.program.provider.wallet,J,Z,l.b.StopOnFailure,"singleGossip",(function(){}),(function(){return!1}),void 0,i,d);case 140:return Q=e.sent.txs.map((function(e){return e.txid})),X=Q[0],e.abrupt("return",{mintTxId:X,metadataKey:D});case 145:e.prev=145,e.t26=e.catch(137),console.log(e.t26);case 148:return e.abrupt("return",null);case 149:case"end":return e.stop()}}),e,null,[[106,132],[137,145]])})));return function(t,n){return e.apply(this,arguments)}}(),P=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(14).Buffer)},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return f}));var r,a=n(10),i=n(2),c=n(0),s=n.n(c),o=n(5),u=n(19),l=6e4;!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var f=function(){var e=Object(i.a)(s.a.mark((function e(t,n,i,c){var l,f,d,b,g,h,m,v,x,y,j,O,k,w,S,P,T,M,A=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=A.length>4&&void 0!==A[4]?A[4]:r.Parallel,f=A.length>5&&void 0!==A[5]?A[5]:"singleGossip",d=A.length>6&&void 0!==A[6]?A[6]:function(e,t){},b=A.length>7&&void 0!==A[7]?A[7]:function(e,t){return!1},g=A.length>8?A[8]:void 0,h=A.length>9&&void 0!==A[9]?A[9]:[],m=A.length>10&&void 0!==A[10]?A[10]:[],n.publicKey){e.next=9;break}throw new u.h;case 9:if(v=h,g){e.next=14;break}return e.next=13,t.getLatestBlockhash(f);case 13:g=e.sent.blockhash;case 14:x=function(e){var t=i[e],r=c[e];if(0===t.length)return"continue";var s=new o.Transaction;t.forEach((function(e){return s.add(e)})),s.recentBlockhash=g,s.feePayer=n.publicKey,r.length>0&&s.partialSign.apply(s,Object(a.a)(r)),v.push(s)},y=0;case 16:if(!(y<i.length)){e.next=23;break}if("continue"!==x(y)){e.next=20;break}return e.abrupt("continue",20);case 20:y++,e.next=16;break;case 23:return v.push.apply(v,Object(a.a)(m)),j=v.filter((function(e){return e.signatures.find((function(e){return e.publicKey.equals(n.publicKey)}))})),O=v.filter((function(e){return!e.signatures.find((function(e){return e.publicKey.equals(n.publicKey)}))})),e.next=28,n.signAllTransactions(j);case 28:k=e.sent,k=O.concat(k),w=[],console.log("Signed txns length",k.length,"vs handed in length",i.length),S=s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=p({connection:t,signedTransaction:k[n]}),l===r.Parallel){e.next=22;break}return e.prev=2,e.next=5,a.then((function(e){var t=e.txid;e.slot;return d(t,n)}));case 5:w.push(a),e.next=20;break;case 8:if(e.prev=8,e.t0=e.catch(2),console.log("Failed at txn index:",n),console.log("Caught failure:",e.t0),b(k[n],n),l!==r.StopOnFailure){e.next=20;break}return e.t1=n,e.next=17,Promise.all(w);case 17:return e.t2=e.sent,e.t3={number:e.t1,txs:e.t2},e.abrupt("return",{v:e.t3});case 20:e.next=23;break;case 22:w.push(a);case 23:case"end":return e.stop()}}),e,null,[[2,8]])})),P=0;case 34:if(!(P<k.length)){e.next=42;break}return e.delegateYield(S(P),"t0",36);case 36:if("object"!==typeof(T=e.t0)){e.next=39;break}return e.abrupt("return",T.v);case 39:P++,e.next=34;break;case 42:if(l===r.Parallel){e.next=47;break}return e.next=45,Promise.all(w);case 45:return M=e.sent,e.abrupt("return",{number:k.length,txs:M});case 47:return e.t1=k.length,e.next=50,Promise.all(w);case 50:return e.t2=e.sent,e.abrupt("return",{number:e.t1,txs:e.t2});case 52:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),d=function(){return(new Date).getTime()/1e3};function p(e){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(s.a.mark((function e(t){var n,r,a,c,o,u,f,p,b,h,v,y,j;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,c=void 0===a?l:a,o=n.serialize(),u=d(),f=0,e.next=6,r.sendRawTransaction(o,{skipPreflight:!0});case 6:return p=e.sent,console.log("Started awaiting confirmation for",p),b=!1,Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b||!(d()-u<c)){e.next=6;break}return r.sendRawTransaction(o,{skipPreflight:!0}),e.next=4,x(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,m(p,c,r,"recent",!0);case 13:if(h=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!h.err){e.next=19;break}throw console.error(h.err),new Error("Transaction failed: Custom instruction error");case 19:f=(null===h||void 0===h?void 0:h.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return v=null,e.prev=28,e.next=31,g(r,n,"single");case 31:v=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!v||!v.err){e.next=47;break}if(!v.logs){e.next=46;break}y=v.logs.length-1;case 39:if(!(y>=0)){e.next=46;break}if(!(j=v.logs[y]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+j.slice("Program log: ".length));case 43:--y,e.next=39;break;case 46:throw new Error(JSON.stringify(v.err));case 47:return e.prev=47,b=!0,e.finish(47);case 50:return console.log("Latency",p,d()-u),e.abrupt("return",{txid:p,slot:f});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function g(e,t,n){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(s.a.mark((function e(t,n,r){var a,i,c,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),i=n._serialize(a),c=i.toString("base64"),o=[c,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",o);case 10:if(!(u=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+u.error.message);case 13:return e.abrupt("return",u.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t,n){return v.apply(this,arguments)}function v(){return v=Object(i.a)(s.a.mark((function e(t,n,r){var a,c,o,u,l,f=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f.length>3&&void 0!==f[3]?f[3]:"recent",c=f.length>4&&void 0!==f[4]&&f[4],o=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(i.a)(s.a.mark((function e(f,d){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),d({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){o=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),d(u)):(console.log("Resolved via websocket",e),f(u))}),a)}catch(p){o=!0,console.error("WS error in setup",t,p)}case 2:if(o||!c){e.next=8;break}return Object(i.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],o||(u?u.err?(console.log("REST error for",t,u),o=!0,d(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),o=!0,f(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,x(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,e.prev=8,e.next=11,r.removeSignatureListener(l);case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(8);case 15:return o=!0,console.log("Returning status",u),e.abrupt("return",u);case 18:case"end":return e.stop()}}),e,null,[[8,13]])}))),v.apply(this,arguments)}function x(e){return new Promise((function(t){return setTimeout(t,e)}))}}},[[329,1,2]]]);
//# sourceMappingURL=main.baad3289.chunk.js.map