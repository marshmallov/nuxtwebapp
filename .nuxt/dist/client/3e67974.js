(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,4,5,6],{279:function(t,e,n){var content=n(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(111).default)("e8133d5e",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";n.r(e);n(46),n(112);var o=n(200),r={setup:function(){return{State:o.State}},data:function(){return{songs:[{name:"Push it to the Limit",artist:"Scarface",path:"/audios/Scarface - Push it to the limit.mp3"},{name:"Shadows Of The Night",artist:"Gigi D'Agostino & Boostedkids",path:"/audios/Gigi D'Agostino & Boostedkids - Shadows Of The Night.mp3"},{name:"Happy Nation",artist:"Ace of Base",path:"/audios/Ace of Base - Happy Nation.mp3"}],currentIndex:0,isPlaying:!1,currentTime:0,duration:0,volume:99}},computed:{currentTrack:function(){return this.songs[this.currentIndex]},progress:function(){return this.currentTime/this.duration*100}},methods:{playPauseTrack:function(){this.State.isPlaying?this.pauseTrack():this.playTrack(),this.$emit("updateIsPlaying",this.isPlaying)},playTrack:function(){this.$refs.audio.play(),this.State.isPlaying=!0},pauseTrack:function(){this.$refs.audio.pause(),this.State.isPlaying=!1},nextTrack:function(){this.currentIndex<this.songs.length-1?this.currentIndex++:this.currentIndex=0,this.loadTrack()},prevTrack:function(){this.currentIndex>0?this.currentIndex--:this.currentIndex=this.songs.length-1,this.loadTrack()},loadTrack:function(){this.$refs.audio.src=this.currentTrack.path,this.$refs.audio.load(),this.playTrack()},seekTo:function(t){var e=t.target.value;this.$refs.audio.currentTime=e/100*this.duration},setVolume:function(t){var e=t.target.value;this.$refs.audio.volume=e/100},formatTime:function(t){var e=Math.floor(t/60),n=Math.floor(t%60);return"".concat(e,":").concat(n<10?"0":"").concat(n)},updateTime:function(){this.currentTime=this.$refs.audio.currentTime,this.duration=this.$refs.audio.duration}},mounted:function(){this.loadTrack(),this.$refs.audio.play(),this.playPauseTrack()}},l=(n(281),n(45)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"track-info overflow-hidden relative"},[e("div",{staticClass:"marquee text-white whitespace-nowrap overflow-hidden relative"},[t._v("\n        "+t._s(t.currentTrack.name)+" - "+t._s(t.currentTrack.artist)+"\n      ")])]),t._v(" "),e("div",{staticClass:"text-white",on:{click:t.prevTrack}},[e("svg",{staticClass:"w-8",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M4 5h3v10H4V5zm12 0v10l-9-5 9-5z"}})])]),t._v(" "),e("div",{staticClass:"text-white",on:{click:t.playPauseTrack}},[t.State.isPlaying?e("svg",{staticClass:"w-8",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M5 4h3v12H5V4zm7 0h3v12h-3V4z"}})]):e("svg",{staticClass:"w-8",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M 5 16 V 4 l 11 6 l -11 6 z"}})])]),t._v(" "),e("div",{staticClass:"text-white",on:{click:t.nextTrack}},[e("svg",{staticClass:"w-8",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M4 4l8 6-8 6V4zm10 0h2v12h-2z"}})])]),t._v(" "),e("div",{staticClass:"mx-8"},[e("div",{staticClass:"flex justify-between text-sm text-white"},[e("p",[t._v(t._s(t.formatTime(t.currentTime)))]),t._v("\n        /\n        "),e("p",[t._v(t._s(t.formatTime(t.duration)))])]),t._v(" "),e("div",{staticClass:"mt-1"},[e("div",{staticClass:"bg-grey-dark rounded-full"},[e("div",{staticClass:"bg-red-light rounded-full relative",style:{width:t.progress+"%"}})])])])]),t._v(" "),e("audio",{ref:"audio",on:{timeupdate:t.updateTime}})])}),[],!1,null,"57d4f096",null);e.default=component.exports},281:function(t,e,n){"use strict";n(279)},282:function(t,e,n){var o=n(110)((function(i){return i[1]}));o.push([t.i,"body[data-v-57d4f096]{background-color:#90ee90;transition:background-color .5s}.player[data-v-57d4f096]{align-items:center;display:flex;flex-direction:column;height:95vh}.track-info[data-v-57d4f096]{width:150px}.marquee[data-v-57d4f096]{animation:marquee-57d4f096 10s linear infinite;display:inline-block}@keyframes marquee-57d4f096{0%{transform:translateX(0)}to{transform:translateX(-100%)}}",""]),o.locals={},t.exports=o},283:function(t,e,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(111).default)("117faaba",content,!0,{sourceMap:!1})},284:function(t,e,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(111).default)("33e86eb7",content,!0,{sourceMap:!1})},285:function(t,e,n){var content=n(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(111).default)("7c7309d6",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n.r(e);var o={name:"Footer"},r=(n(289),n(45)),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("footer",[t("p",[this._v("© 2020 O'Vonel. All rights reserved.")])])}],!1,null,"439aad3f",null);e.default=component.exports;installComponents(component,{Footer:n(286).default})},287:function(t,e,n){"use strict";n(283)},288:function(t,e,n){var o=n(110)((function(i){return i[1]}));o.push([t.i,"nav[data-v-6e04362e]{background-color:#000;padding:1rem;position:fixed;top:0;width:100%;z-index:1000}ul[data-v-6e04362e]{display:flex;gap:1rem;list-style:none}li[data-v-6e04362e]{display:inline}a[data-v-6e04362e]{color:#fff;-webkit-text-decoration:none;text-decoration:none}a[data-v-6e04362e]:hover{-webkit-text-decoration:underline;text-decoration:underline}",""]),o.locals={},t.exports=o},289:function(t,e,n){"use strict";n(284)},290:function(t,e,n){var o=n(110)((function(i){return i[1]}));o.push([t.i,"footer[data-v-439aad3f]{background-color:#000;bottom:0;color:#fff;padding:1rem;position:fixed;text-align:center;width:100%}",""]),o.locals={},t.exports=o},291:function(t,e,n){"use strict";n(285)},292:function(t,e,n){var o=n(110)((function(i){return i[1]}));o.push([t.i,"body[data-v-ae4f43b4],html[data-v-ae4f43b4]{height:100%;margin:0;overflow-x:hidden}.parallax-container[data-v-ae4f43b4]{display:flex;flex-direction:column}.parallax-item[data-v-ae4f43b4]{align-items:center;background-position:50%;display:flex;height:100vh;justify-content:center;position:relative}.circle-image[data-v-ae4f43b4],.parallax-item[data-v-ae4f43b4]{background-attachment:fixed;background-size:cover}.circle-image[data-v-ae4f43b4]{border:1px solid #fff;border-radius:50%;height:550px;-o-object-fit:cover;object-fit:cover;width:550px}.icon-container[data-v-ae4f43b4]{align-items:center;display:flex;justify-content:center;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);z-index:1}@keyframes spin-ae4f43b4{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.spin[data-v-ae4f43b4]{animation:spin-ae4f43b4 4s linear infinite}.parallax-content[data-v-ae4f43b4]{align-items:center;display:flex;height:100%;justify-content:center;position:relative;width:100%;z-index:1}.content-card[data-v-ae4f43b4]{background-color:hsla(0,0%,100%,0);border-radius:8px;max-width:600px;padding:2rem;text-align:center}h1[data-v-ae4f43b4]{font-size:10rem}h1[data-v-ae4f43b4],h2[data-v-ae4f43b4]{color:#fff;margin-bottom:1rem}h2[data-v-ae4f43b4]{font-size:1.5rem}p[data-v-ae4f43b4]{color:#fff}",""]),o.locals={},t.exports=o},293:function(t,e,n){"use strict";n.r(e);var o=n(200),r={name:"Navbar",components:{AudioPlayer:n(280).default},setup:function(){return{State:o.State}},data:function(){return{audio:null,audioSources:["assets/audios/Ace of Base - Happy Nation.mp3","assets/audios/Elton John - Im Still Standing.mp3","assets/audios/Scarface - Push it to the limit.mp3"],currentAudioIndex:0}},methods:{scrollToSection:function(t){var e=document.getElementById(t).getBoundingClientRect().top+window.pageYOffset+-30;window.scrollTo({top:e,behavior:"smooth"})}}},l=(n(287),n(45)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("nav",{},[e("div",{staticClass:""},[e("div",{staticClass:"flex flex-col md:flex-row justify-between"},[t.State.isHomePage?e("ul",{},[e("li",[e("a",{staticClass:"text-white",attrs:{href:"#home-section"},on:{click:function(e){return e.preventDefault(),t.scrollToSection("home-section")}}},[t._v("Home")])]),t._v(" "),e("li",[e("a",{staticClass:"text-white",attrs:{href:"#about-section"},on:{click:function(e){return e.preventDefault(),t.scrollToSection("about-section")}}},[t._v("About")])]),t._v(" "),e("li",[e("a",{staticClass:"text-white",attrs:{href:"#services-section"},on:{click:function(e){return e.preventDefault(),t.scrollToSection("services-section")}}},[t._v("Services")])]),t._v(" "),e("li",[e("a",{staticClass:"text-white",attrs:{href:"#contact-section"},on:{click:function(e){return e.preventDefault(),t.scrollToSection("contact-section")}}},[t._v("Contact")])])]):e("ul",{},[e("li",[e("a",{staticClass:"text-white"},[e("NuxtLink",{attrs:{to:"/"}},[t._v("Back to Home")])],1)])]),t._v(" "),e("div",{staticClass:""},[e("AudioPlayer",{ref:"AudioPlayer"})],1)])])])}),[],!1,null,"6e04362e",null);e.default=component.exports;installComponents(component,{AudioPlayer:n(280).default})},294:function(t,e,n){"use strict";n.r(e);var o=n(200),r=(n(139),n(280)),l={name:"About",setup:function(){return o.State.isHomePage=!0,{State:o.State,AudioPlayer:r.default}},methods:{}},c=(n(291),n(45)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"parallax-container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("section",{attrs:{id:"services-section"}},[e("div",{staticClass:"parallax-item",staticStyle:{"background-image":"url('/images/IMG_3.jpg')"}},[e("div",{staticClass:"parallax-content"},[e("div",{staticClass:"content-card"},[e("div",{staticClass:"text-white"},[e("div",{staticClass:"icon-container"},[t.State.isPlaying?e("svg",{staticClass:"w-20",attrs:{fill:"black",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M5 4h3v12H5V4zm7 0h3v12h-3V4z"}})]):e("svg",{staticClass:"w-20",attrs:{fill:"black",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M 5 16 V 4 l 11 6 l -11 6 z"}})])])]),t._v(" "),e("div",{class:{spin:t.State.isPlaying}},[e("img",{staticClass:"circle-image",attrs:{src:"/images/vinyl_disc.jpg",alt:"Vinyl"}})])])])])]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"home-section"}},[e("div",{staticClass:"parallax-item",staticStyle:{"background-image":"url('/images/IMG_1.jpg')"}},[e("div",{staticClass:"parallax-content"},[e("div",{staticClass:"content-card"},[e("h1",[t._v("Ovonel")]),t._v(" "),e("p")])])])])},function(){var t=this._self._c;return t("section",{attrs:{id:"about-section"}},[t("div",{staticClass:"parallax-item",staticStyle:{"background-image":"url('/images/IMG_2.jpg')"}},[t("div",{staticClass:"parallax-content"},[t("div",{staticClass:"content-card"},[t("p",[this._v("\n            Ovonel is a dynamic and rapidly growing technology company\n            specializing in innovative software solutions and IT services.\n          ")])])])])])},function(){var t=this._self._c;return t("section",{attrs:{id:"contact-section"}},[t("div",{staticClass:"parallax-item",staticStyle:{"background-image":"url('/images/IMG_4.jpg')"}},[t("div",{staticClass:"parallax-content"},[t("div",{staticClass:"content-card"},[t("p")])])])])}],!1,null,"ae4f43b4",null);e.default=component.exports},298:function(t,e,n){"use strict";n.r(e);var o=n(293),r=n(286),l=n(294),c={name:"IndexPage",components:{Navbar:o.default,Footer:r.default,MainContent:l.default}},d=n(45),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("Navbar"),t._v(" "),e("MainContent"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(293).default,MainContent:n(294).default,Footer:n(286).default})}}]);