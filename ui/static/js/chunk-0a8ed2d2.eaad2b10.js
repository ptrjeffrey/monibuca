(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a8ed2d2"],{1742:function(t,e,n){},3724:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player-wrap"},[t.loading?n("div",{staticClass:"player-loading"},[t._v("视频加载中...")]):t._e(),t._v(" "),t.rtcStream?[t.controls?[n("video",{attrs:{autoplay:"",controls:"",controlslist:"nodownload nofullscreen noremoteplayback",disablePictureInPicture:""},domProps:{srcObject:t.rtcStream}})]:[n("video",{attrs:{autoplay:""},domProps:{srcObject:t.rtcStream}})]]:t._e()],2)},a=[],o=(n("96cf"),n("3b8d")),i=n("4ec3"),s={name:"WebrtcPlayer",rtcPeerConnection:null,data:function(){return{iceConnectionState:"",rtcPeerConnectionInit:!1,rtcStream:null,loading:!0}},props:{streamPath:{type:String,default:""},controls:{type:Boolean,default:!0}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.initRtcPeerConnection();case 2:if(console.log("initRtcPeerConnectioned"),!this.streamPath){t.next=10;break}return this.loading=!0,t.next=7,this.play(this.streamPath);case 7:this.loading=!1,console.log("played"),this.$emit("doPlayed");case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{initRtcPeerConnection:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new RTCPeerConnection,e.addTransceiver("video",{direction:"recvonly"}),e.addTransceiver("audio",{direction:"recvonly"}),e.onsignalingstatechange=function(t){console.log("onsignalingstatechange",t)},e.oniceconnectionstatechange=function(t){console.log("oniceconnectionstatechange",e.iceConnectionState)},e.onicecandidate=function(t){console.log("onicecandidate",t)},e.ontrack=function(t){console.log("ontrack",t),"video"===t.track.kind&&(r.rtcStream=t.streams[0])},t.next=9,e.createOffer();case 9:return n=t.sent,t.next=12,e.setLocalDescription(n);case 12:this.rtcPeerConnectionInit=!0,this.$options.rtcPeerConnection=e;case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),play:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this.$options.rtcPeerConnection,r=n.localDescription.toJSON(),t.prev=2,t.next=5,Object(i["n"])(e,r);case 5:if(a=t.sent,console.log(a),!a.errmsg){t.next=11;break}return this.$message({type:"error",message:a.errmsg}),this.close(),t.abrupt("return");case 11:n.setRemoteDescription(new RTCSessionDescription({type:a.type,sdp:a.sdp})),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](2),console.error(t.t0);case 17:case"end":return t.stop()}}),t,this,[[2,14]])})));function e(e){return t.apply(this,arguments)}return e}(),close:function(){var t=this.$options.rtcPeerConnection;t&&t.close()}},destroyed:function(){this.close()}},c=s,l=n("2877"),u=Object(l["a"])(c,r,a,!1,null,"1871937e",null);e["a"]=u.exports},"42c6":function(t,e,n){"use strict";n("ce33")},6280:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.time?n("el-tooltip",{attrs:{effect:"light",placement:"top"}},[n("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t._f("parseTimeFilter")(t.time)))]),t._v(" "),n("span",[t._v(t._s(t._f("formatPassTimeFilter")(t.time)))])]):t._e()},a=[],o={name:"ShowTime",props:["time"]},i=o,s=n("2877"),c=Object(s["a"])(i,r,a,!1,null,"68b4158a",null);e["a"]=c.exports},a7ca:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player-wrap"},[n("div",{ref:"container",attrs:{id:"container"}})])},a=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("2f62"),s=n("4ec3");n("ed08");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={name:"JessicaPlayer",jessibuca:null,data:function(){return{}},props:{streamPath:{type:String,default:""}},computed:l({},Object(i["b"])({plugins:function(t){return t.plugins}})),mounted:function(){this.create()},methods:{create:function(){var t=this,e=new window.Jessibuca({container:this.$refs.container,forceNoOffscreen:!0,videoBuffer:.2,loadingText:"加载中"});e.onLog=function(t){return console.error(t)},e.hasLoaded()?(this.play(),this.$emit("doPlayed")):e.onLoad=function(){t.play(),t.$emit("doPlayed")},e.on("timeout",(function(){console.log("timeout"),t.$message({type:"error",message:"播放超时"})})),this.$options.jessibuca=e},play:function(){if(this.streamPath){var t=this.getJessibucaHref(),e=t+this.streamPath;this.$options.jessibuca&&this.$options.jessibuca.play(e),this.$options.jessibuca.cancelMute()}},getJessibucaHref:function(){var t=s["a"].jessibucaHref,e=this.getJessibucaConfig();return e&&(e.ListenAddrTLS&&"https:"===location.protocol?t="wss://"+location.hostname+e.ListenAddrTLS+"/jessica/":e.ListenAddr&&(t="ws://"+location.hostname+e.ListenAddr+"/jessica/")),t},getJessibucaConfig:function(){return this.$store.getters.getConfig("Jessica")}},destroyed:function(){this.$options.jessibuca&&this.$options.jessibuca.destroy()}},d=u,p=(n("f42d"),n("2877")),f=Object(p["a"])(d,r,a,!1,null,"08c674f2",null);e["a"]=f.exports},ce33:function(t,e,n){},e7d7:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"搜索名称关键词"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}})],1),t._v(" "),n("el-form-item",{staticStyle:{float:"right"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.showRecordDialog}},[t._v("录制的视频\n      ")])],1)],1),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pageList,border:"",fit:""}},[n("el-table-column",{attrs:{prop:"StreamPath",label:"StreamPath"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"100px",label:"类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.Type||"await")+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"100px",label:"开始时间"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("show-time",{attrs:{time:t.row.StartTime}})]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"音频"}},[n("el-table-column",{attrs:{align:"center",width:"210px",label:"格式"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.audioTracks.length?[t._l(e.row.audioTracks,(function(r){return[n("div",[t._v(t._s(t._f("soundFormatFilter")(e.row.AudioTracks[r].CodecID)))])]}))]:t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"100px",label:"采样率"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.audioTracks.length?[t._l(e.row.audioTracks,(function(r){return[n("div",[t._v(t._s(t._f("soundRateFilter")(e.row.AudioTracks[r].SoundRate)))])]}))]:t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"80px",label:"声道"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.audioTracks.length?[t._l(e.row.audioTracks,(function(r){return[n("div",[t._v(t._s(e.row.AudioTracks[r].Channels))])]}))]:t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"80px",label:"码率"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.audioTracks.length?[t._l(e.row.audioTracks,(function(r){return[n("div",[t._v(t._s(t._f("unitSpeedFormatFilter")(e.row.AudioTracks[r].BPS)))])]}))]:t._e()]}}])})],1),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"视频"}},[n("el-table-column",{attrs:{align:"center",width:"100px",label:"格式"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.videoTracks.length?[t._l(e.row.videoTracks,(function(r){return[n("div",[t._v(t._s(t._f("codecIDFilter")(e.row.VideoTracks[r].CodecID)))])]}))]:t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"100px",label:"分辨率"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.videoTracks.length?[t._l(e.row.videoTracks,(function(r){return[n("div",[t._v("\n                "+t._s(e.row.VideoTracks[r].SPSInfo.Width)+"x"+t._s(e.row.VideoTracks[r].SPSInfo.Height)+"\n              ")])]}))]:t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"80px",label:"GOP"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.videoTracks.length?[t._l(e.row.videoTracks,(function(r){return[n("div",[t._v(t._s(e.row.VideoTracks[r].GOP))])]}))]:t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"120px",label:"码率"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.videoTracks.length?[t._l(e.row.videoTracks,(function(r,a){return[n("div",[t._v(t._s(t._f("unitSpeedFormatFilter")(e.row.VideoTracks[r].BPS)))])]}))]:t._e()]}}])})],1),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"100px",label:"订阅者"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.Subscribers?[t._v("\n          "+t._s(e.row.Subscribers.length)+"\n        ")]:t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.StreamPath?[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return t.onPlay(e.row)}}},[t._v("播放\n          ")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return t.onClose(e.row)}}},[t._v("关闭\n          ")]),t._v(" "),t.isRecording(e.row)?[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return t.onStopRecord(e.row)}}},[t._v("暂停录制\n            ")])]:[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){return t.onRecord(e.row)}}},[t._v("录制\n            ")])]]:t._e()]}}])})],1),t._v(" "),n("el-pagination",{staticStyle:{"margin-top":"10px"},attrs:{background:"","hide-on-single-page":"",layout:"prev, pager, next","current-page":t.currentLogPage,total:t.dataListFilter.length},on:{"update:currentPage":function(e){t.currentLogPage=e},"update:current-page":function(e){t.currentLogPage=e}}}),t._v(" "),n("el-dialog",{attrs:{title:"直播播放","show-close":!1,"before-close":t.handleCloseDialog,visible:t.dialogVisible,width:"800px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[t.dialogVisible&&t.tempRtcStream?n("div",{staticClass:"stream-play-wrap"},[t.webrtc?n("webrtc-player",{attrs:{"stream-path":t.tempRtcStream}}):n("jessibuca-player",{ref:"jessibucaPlayer",attrs:{"stream-path":t.tempRtcStream}})],1):t._e(),t._v(" "),n("div",{staticStyle:{"margin-top":"10px"}},[n("div",[t._v("播放地址：")]),t._v(" "),n("el-tabs",{model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[t.wsPlayerUrl?n("el-tab-pane",{attrs:{label:"WS-RAW",name:"wsRaw"}},[t._v(t._s(t.wsPlayerUrl))]):t._e(),t._v(" "),t.wsPlayerUrl?n("el-tab-pane",{attrs:{label:"WS-FLV",name:"wsFlv"}},[t._v(t._s(t.wsPlayerUrl+".flv"))]):t._e(),t._v(" "),t.httpPlayUrl?n("el-tab-pane",{attrs:{label:"HTTP-FLV",name:"httpFlv"}},[t._v(t._s(t.httpPlayUrl+".flv"))]):t._e(),t._v(" "),t.hlsPlayUrl?n("el-tab-pane",{attrs:{label:"HLS",name:"hls"}},[t._v(t._s(t.hlsPlayUrl+".m3u8"))]):t._e()],1)],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("span",[t._v("WebRTC")]),t._v(" "),n("el-switch",{model:{value:t.webrtc,callback:function(e){t.webrtc=e},expression:"webrtc"}}),t._v(" "),n("el-button",{on:{click:t.handleCloseDialog}},[t._v("关 闭")])],1)]),t._v(" "),n("el-dialog",{attrs:{title:"录制的视频","show-close":!1,visible:t.dialogVisible2,width:"900px"},on:{"update:visible":function(e){t.dialogVisible2=e}}},[t.dialogVisible2?n("records"):t._e(),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.handleCloseDialog2}},[t._v("关 闭")])],1)],1),t._v(" "),n("el-dialog",{attrs:{title:"是否开始录制",visible:t.dialogVisible3,width:"300px"},on:{"update:visible":function(e){t.dialogVisible3=e}}},[t._v("\n    追加模式:\n    "),n("el-tooltip",{attrs:{content:t.append?"是":"否",placement:"top"}},[n("el-switch",{model:{value:t.append,callback:function(e){t.append=e},expression:"append"}})],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible3=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSureDialog3}},[t._v("确 定")])],1)],1)],1)},a=[],o=(n("8e6e"),n("7514"),n("ac6a"),n("456d"),n("bd86")),i=n("2f62"),s=n("3724"),c=n("a7ca"),l=n("6280"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"搜索名称关键词"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}})],1)],1),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.dataListFilter,border:"",fit:""}},[n("el-table-column",{attrs:{prop:"Path",label:"文件路径"}}),t._v(" "),n("el-table-column",{attrs:{label:"大小",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("unitSpeedFormatFilter")(e.row.Size))+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"时长",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("formatDurationTimeFilter")(e.row.Duration))+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(n){return t.onPlay(e.row)}}},[t._v("播放")]),t._v(" "),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){return t.onDelete(e.row)}}},[t._v("删除")])]}}])})],1)],1)},d=[],p=n("4ec3"),f={name:"record",data:function(){return{searchKey:"",dataList:[]}},computed:{dataListFilter:function(){var t=[],e=this.searchKey.trim();return t=e?this.dataList.filter((function(t){return-1!==t.Path.indexOf(e)})):this.dataList,t}},created:function(){this.init()},methods:{init:function(){this.getList()},getList:function(){var t=this;this.dataList=[],Object(p["i"])().then((function(e){Array.isArray(e)&&(t.dataList=e||[])}))},onDelete:function(t){var e=this;this.$confirm("是否删除Flv文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(p["d"])(t.Path).then((function(t){"success"===t?(e.$message({type:"success",message:"删除成功!"}),e.getList()):e.$message({type:"error",message:t||"网络异常"})}))})).catch((function(){}))},onPlay:function(t){var e=this;Object(p["p"])(t.Path).then((function(t){"success"===t?e.$message({type:"success",message:"播放成功!"}):e.$message({type:"error",message:t||"网络异常"})}))}}},h=f,m=n("2877"),b=Object(m["a"])(h,u,d,!1,null,"ed484a42",null),g=b.exports;function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y={name:"stream",components:{ShowTime:l["a"],WebrtcPlayer:s["a"],Records:g,JessibucaPlayer:c["a"]},data:function(){return{webrtc:!1,dialogVisible:!1,dialogVisible2:!1,dialogVisible3:!1,searchKey:"",tempRtcStream:"",currentLogPage:1,append:!1,tempStreamPath:"",wsPlayerUrl:"",httpPlayUrl:"",hlsPlayUrl:"",currentTab:"wsRaw"}},computed:_(_({},Object(i["b"])({streamList:function(t){return t.Streams.map((function(t){var e=Object.keys(t.AudioTracks||{}),n=Object.keys(t.VideoTracks||{});return t.audioTracks=e||[],t.videoTracks=n||[],t}))}})),{},{dataListFilter:function(){var t=[],e=this.searchKey.trim();return t=e?this.streamList.filter((function(t){return-1!==t.StreamPath.indexOf(e)})):this.streamList,t},pageList:function(){return this.dataListFilter.slice(10*(this.currentLogPage-1),10*this.currentLogPage)}}),methods:{onPlay:function(t){var e=this;this.tempRtcStream=t.StreamPath,this.dialogVisible=!0,this.$nextTick((function(){if(e.$refs.jessibucaPlayer){var t=e.$refs.jessibucaPlayer.getJessibucaHref();e.wsPlayerUrl=t+e.tempRtcStream}var n=e.getHDLHref();e.httpPlayUrl=n+e.tempRtcStream;var r=e.getHLSHref();e.hlsPlayUrl=r+e.tempRtcStream}))},getHLSHref:function(){var t=p["a"].hlsHref,e=this.$store.getters.getConfig("HLS");return e&&(e.ListenAddrTLS&&"https:"===location.protocol?t=location.protocol+"//"+location.hostname+e.ListenAddrTLS+"/hls/":e.ListenAddr&&(t=location.protocol+"//"+location.hostname+e.ListenAddr+"/hls/")),t},getHDLHref:function(){var t=p["a"].hdlHref,e=this.$store.getters.getConfig("HDL");return e&&(e.ListenAddrTLS&&"https:"===location.protocol?t=location.protocol+"//"+location.hostname+e.ListenAddrTLS+"/hdl/":e.ListenAddr&&(t=location.protocol+"//"+location.hostname+e.ListenAddr+"/hdl/")),t},onClose:function(t){var e=this;this.$confirm("是否关闭流","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(p["y"])(t.StreamPath).then((function(t){e.$message({type:"success",message:"关闭成功!"})}))})).catch((function(){}))},showRecordDialog:function(){this.dialogVisible2=!0},onRecord:function(t){this.tempStreamPath=t.StreamPath,this.append=!1,this.dialogVisible3=!0},handleSureDialog3:function(){var t=this;this.tempStreamPath&&Object(p["t"])({streamPath:this.tempStreamPath,append:this.append}).then((function(e){t.dialogVisible3=!1,"success"===e?t.$message({type:"success",message:"开始录制"+(t.append?"(追加模式)":"")}):t.$message({type:"error",message:e||"网络异常"})})).catch((function(){t.dialogVisible3=!1}))},onStopRecord:function(t){var e=this;this.$confirm("是否停止录制","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(p["x"])(t.StreamPath).then((function(t){"success"===t?e.$message({type:"success",message:"停止录制，成功!"}):e.$message({type:"error",message:t||"网络异常"})}))})).catch((function(){}))},isRecording:function(t){return t.Subscribers&&t.Subscribers.find((function(t){return"FlvRecord"===t.Type}))},handleCloseDialog:function(){this.dialogVisible=!1,this.tempRtcStream=null},handleCloseDialog2:function(){this.dialogVisible2=!1}}},w=y,P=(n("42c6"),Object(m["a"])(w,r,a,!1,null,"10add62e",null));e["default"]=P.exports},f42d:function(t,e,n){"use strict";n("1742")}}]);