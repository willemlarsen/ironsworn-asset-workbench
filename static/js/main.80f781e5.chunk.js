(this["webpackJsonpironsworn-asset-workbench"]=this["webpackJsonpironsworn-asset-workbench"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);n(5);var a,o=n(0),i=n.n(o),l=n(2),r=n.n(l),c=function(e,t){var n=new RegExp("".concat(e,"=(?:\"|')(.*?)(?:\"|')"));return(t.match(n)||[])[1]};function s(e){return{d:c("d",e),fill:c("fill",e),fillOpacity:c("opacity",e),viewBox:c("viewBox",e)}}function m(e){return e.documentFormatVersion?2===e.documentFormatVersion?e:void 0:function(e){var t={documentFormatVersion:2,type:e.type,name:e.name,writeIn:e.writeIn,track:e.track,description:e.description,abilities:e.abilities};return"object"===typeof e.fonts&&(t.fonts={assetTypeFontSize:e.fonts.assetTypeFontSize,assetTypeFont:e.fonts.assetTypeFont,assetNameFontSize:e.fonts.assetNameFontSize,assetNameFont:e.fonts.assetNameFont,detailsFontSize:e.fonts.detailsFontSize,detailsFont:e.fonts.detailsFont,trackFontSize:e.fonts.trackFontSize,trackFont:e.fonts.trackFont}),"string"===typeof e.icon?t.icon=e.icon:"object"===typeof e.icon&&(t.icon={type:"svg",author:"",name:"",svg:s(e.icon.svg)}),t}(e)}var u=document.querySelector(".interface-input"),d=function(e){a=m(e),u.value=JSON.stringify(a,null,2)};document.querySelector(".update").onclick=function(){a=m(JSON.parse(u.value)),d(a),q(a)};var f,h=document.querySelector("#icon-fileselect"),y=document.querySelector("#icon-author");document.querySelector("#icon-import-button").onclick=function(){!function(){var e=h.files[0];if(e){var t=new FileReader;t.onload=function(t){var n=t.target.result;a.icon={type:"svg",name:e.name.split(".").slice(0,-1).join("."),author:y.value,svg:s(n)},d(a),q(a)},t.readAsText(e)}else alert("missing file")}()},function(e){e.Full="full",e.TwoThirds="two-thirds",e.OneHalf="one-half",e.OneThird="one-third"}(f||(f={}));var v={full:1,"two-thirds":2/3,"one-half":.5,"one-third":1/3},p={value:window.innerHeight>1070?f.Full:window.innerHeight>750?f.TwoThirds:f.OneHalf},g=document.querySelector("#scale-select");g.addEventListener("change",(function(e){var t;t=e.currentTarget.value,p.value=t,q(a)})),g.value=p.value;var w=function(e){return e.writeIn?i.a.createElement("div",{className:"write-in"},e.writeIn):null},k=function(e){return e.description?i.a.createElement("div",{className:"description"},e.description):null},F=function(e){var t;return i.a.createElement("div",{className:"ability"},i.a.createElement("i",{className:e.ability.filled?"dot filled":"dot unfilled"}),i.a.createElement("div",{className:"ability-description"},(t=e.ability.name)?i.a.createElement("span",{className:"ability-name"},t):"",i.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.ability.text}})))},S=function(e){return e.value>e.track?i.a.createElement("div",{className:"value empty"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",preserveAspectRatio:"none",viewBox:"0 0 100 100",height:95*v[e.scale],width:113*v[e.scale]},i.a.createElement("line",{x1:"0",y1:"100",x2:"100",y2:"0",stroke:"rgb(65,64,66)",style:{strokeWidth:3.5}}))):i.a.createElement("div",{className:"value number"},"+",e.value)},E=function(e){if(e.track){if(Array.isArray(e.track)){var t=e.track.map((function(e,t){return i.a.createElement("div",{className:"value text",key:t},e)}));return i.a.createElement("div",{className:"track"},t)}for(var n=e.track>5?e.track:5,a=[],o=1;o<=n;o++)a.push(i.a.createElement(S,{track:e.track,value:o,scale:e.scale,key:o}));return i.a.createElement("div",{className:"track"},i.a.createElement("div",{className:"value"},"0"),a)}return null},z=function(e){return"string"===typeof e.icon?i.a.createElement("div",{className:"header-circle"},i.a.createElement("i",{className:"header-icon"},e.icon)):"object"===typeof e.icon?i.a.createElement("div",{className:"header-circle"},i.a.createElement("svg",{height:154*v[e.scale],width:154*v[e.scale],viewBox:"0 0 512 512"},i.a.createElement("g",null,i.a.createElement("path",{d:e.icon.svg.d,fill:e.icon.svg.fill,fillOpacity:e.icon.svg.fillOpacity})))):null},N={assetTypeFontSize:"1.03em",assetTypeFont:"Simonetta",assetNameFontSize:"1.26em",assetNameFont:"Simonetta",detailsFontSize:"0.97em",detailsFont:"PT Serif",trackFontSize:"1.42em",trackFont:"Simonetta"},b=function(e){var t,n=e.fonts||{},a=(t=n,Object.assign({},N,t)),o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=Array.from(new Set(t)).filter((function(e){return e})).map((function(e){return e.replace(/ /g,"+")})).join("|");return a?"https://fonts.googleapis.com/css?family=".concat(a,"&display=swap"):""}(a.assetTypeFont,a.assetNameFont,a.detailsFont,a.trackFont);return i.a.createElement(i.a.Fragment,null,i.a.createElement("link",{rel:"stylesheet",href:o}),i.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                .type {\n                    font-size: ".concat(a.assetTypeFontSize,';\n                    font-family: "').concat(a.assetTypeFont,'";\n                }\n                .asset-name {\n                    font-size: ').concat(a.assetNameFontSize,';\n                    font-family: "').concat(a.assetNameFont,'";\n                }\n                .details {\n                    font-size: ').concat(a.detailsFontSize,';\n                    font-family: "').concat(a.detailsFont,'";\n                }\n                .value, .value.text, .value.number {\n                    font-size: ').concat(a.trackFontSize,';\n                    font-family: "').concat(a.trackFont,'";\n                }')}}))},x=function(e){var t=e.asset;return i.a.createElement("div",{className:"asset ".concat(e.scale.value)},i.a.createElement(b,{fonts:t.fonts}),i.a.createElement("div",{className:"main-matter"},i.a.createElement("div",{className:"top"},i.a.createElement("div",{className:"type"},t.type),i.a.createElement(z,{icon:t.icon,scale:e.scale.value}),i.a.createElement("div",{className:"asset-name"},t.name)),i.a.createElement("div",{className:"details"},i.a.createElement(w,{writeIn:t.writeIn}),i.a.createElement(k,{description:t.description}),i.a.createElement("div",{className:"abilities"},t.abilities.map((function(e,t){return i.a.createElement(F,{ability:e,key:t})}))))),i.a.createElement(E,{track:t.track,scale:e.scale.value}))},L=function(e,t){r.a.render(i.a.createElement(x,{asset:t,scale:p}),e)},T=document.querySelector(".assets"),q=function(e){L(T,e)},H={fonts:{assetTypeFontSize:"1.03em",assetTypeFont:"Noto Sans JP",assetNameFontSize:"1.76em",assetNameFont:"Russo One",detailsFontSize:"0.97em",detailsFont:"Quicksand",trackFontSize:"1.12em",trackFont:"Krona One"},type:"combat talent",name:"Ironclad",writeIn:"",track:["LIGHTLY ARMORED","GEARED FOR WAR"],description:"If you wear high-tech armor...",abilities:[{filled:!0,text:"When you equip or adjust your armor, choose one. <li>Lightly armored: When you <em>Endure Harm</em> in a fight, add +1 and take +1 momentum on a hit.</li> <li>Geared for war: Mark encumbered. When you <em>Endure Harm</em> in a fight, add +2 and take +1 momentum on a hit.</li>"},{filled:!1,text:"When you <em>Clash</em> while you are geared for war, add +1."},{filled:!1,text:"When you <em>Compel</em> in a situation where strength of arms is a factor, add +2."}],icon:{type:"svg",author:"Delapouite",name:"Light Helm icon",svg:'<svg style="height: 512px; width: 512px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="" style="touch-action: none;" transform="translate(0,0)"><path d="M246.488 29.5l-13.244 39.725 14.381 86.275h16.75l14.38-86.275L265.515 29.5h-19.026zM195 61.5l-40 30h63.709l-3.953-23.725 2.092-6.275H195zm100.152 0l2.092 6.275-3.953 23.725H357l-40-30h-21.848zM69.42 90.727L41.639 257.41 71 286.773V162.375l20.863-41.725L69.42 90.727zm373.16 0l-22.443 29.923L441 162.375v124.398l29.361-29.363-27.78-166.683zM117.563 109.5L89 166.625V400l110 82.5v-87.906l-80-32V211.576l35.393-72.076h72.316l-5-30H117.562zm172.728 0l-5 30h72.272L393 210.375v152.219l-80 32V482.5L423 400V166.625L394.437 109.5H290.291zm-124.684 48L137 215.758v3.742h238v-4.875L346.437 157.5h-64.146l-2.666 16h-47.25l-2.666-16h-64.102zM137 237.5v46h30v-46h-30zm96 0v46h46v-46h-46zm112 0v46h30v-46h-30zm-208 64v48.906l46.678 18.67 27.029-67.576H137zm93.092 0l-29.705 74.262L217 382.406v51.067l39 9.75 39-9.75v-51.067l16.613-6.644-29.705-74.262h-51.816zm71.201 0l27.03 67.576L375 350.406V301.5h-73.707z" fill="#fff" fill-opacity="1"></path></g></svg>'}},I={fonts:{assetTypeFontSize:"1.03em",assetNameFontSize:"1.26em",detailsFontSize:"0.97em",trackFontSize:"1.42em"},type:"ritual",name:"Lightbearer",track:6,abilities:[{filled:!0,text:"When you focus on a source of light and capture its essence, roll +wits. On a strong hit, set your light track to +6. On a weak hit, make it +3. Then, when you make a move to overcome or navigate darkness, you may add +2 and suffer -1 light."},{text:"You may use your light to <em>Strike</em> or <em>Clash</em> against a dark-dwelling foe. Choose the amount of light to unleash, and roll +light (instead of +iron or +edge). Suffer -light equal to that amount. On a hit, your harm is 1+your unleashed light."},{text:"When you perform this ritual, add +1 and take +1 momentum on a hit."}],icon:{type:"svg",author:"Lorc",name:"Explosion Rays icon",svg:'<svg class="Icon" style="height: 512px; width: 512px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="" style="touch-action: none;" transform="translate(0,0)"><path d="M54.184 19.512l116.02 144.838c-11.806 9.74-21.4 22.066-27.923 36.095L20.493 142.73v62.993l113.983 19.172c-1.12 6.056-1.707 12.295-1.707 18.67 0 3.502.177 6.965.52 10.378l-72.376 27.7 79.467.687c4.165 10.173 9.917 19.534 16.948 27.775L20.492 441.7v52.484h47.336l105.87-168.65c11.644 8.795 25.212 15.165 39.945 18.366l-23.7 150.284H294.22L253.25 344.69c8.668-1.524 16.964-4.14 24.744-7.7l37.262 42.268-21.326-51.365c6.885-4.792 13.16-10.402 18.68-16.692l182.533 146.61V348.556L329.43 284.865c4.29-9.722 7.118-20.227 8.195-31.238l84.7-25.93-86.78-7.008c-2.26-9.89-5.955-19.242-10.852-27.825l170.452-87.398V23.924L311.918 175.15c-5.33-5.95-11.342-11.28-17.912-15.86l15.533-38.382-29.968 29.967c-9.608-4.595-20.034-7.74-30.996-9.148L269.89 19.512h-40.12l1.27 121.478c-19.017.808-36.716 6.816-51.706 16.64L94.102 19.51H54.184z" fill="#fff" fill-opacity="1"></path></g></svg>'}},O={documentFormatVersion:2,type:"companion",name:"Cave Lion",writeIn:"Name",track:4,description:"Your cat takes down its prey.",abilities:[{filled:!1,name:"Eager",text:"When your cat chases down big game, you may <em>Resupply</em> with +edge (instead of +wits). If you do, take +1 supply or +1 momentum on a strong hit."},{filled:!1,name:"Inescapable",text:"When you <em>Enter the Fray</em> or <em>Strike</em> by sending your cat to attack, roll +edge. On a hit, take +2 momentum."},{filled:!1,name:"Protective",text:"When you <em>Make Camp</em>, your cat is alert to trouble. If you or an ally choose to relax, take +1 spirit. If you focus, take +1 momentum."}],icon:{type:"svg",author:"Delapouite",name:"Feline icon",svg:{d:"M110.056 64.815c-4.234.027-8.355.587-12.337 1.799C83.13 71.054 72.93 77.03 65.24 87.333c-7.691 10.303-13.122 25.717-15.516 49.713-.669 6.708 2.012 18.384 7.75 30.986 5.738 12.602 14.248 26.276 23.829 38.387l2.49 3.146-.678 3.955c-3.097 18.091-3.644 50.706-.252 68.778.836 4.454 5.766 14.497 13.611 26.296 7.846 11.8 18.412 25.829 30.032 40.944 23.239 30.23 50.678 64.773 69.81 96.547.024.038.347.525 2.139.886 1.791.362 4.605.28 7.127-.35 2.441-.609 4.524-1.766 5.338-2.458-9.946-42.286-16.14-84.185-37.51-125.14l-10.102-19.358 20.809 6.617c21.64 6.882 48.718 8.897 73.396 7.719 24.679-1.179 47.26-5.681 58.868-10.362l5.648-2.277 4.215 4.397c43.225 45.089 73.427 98.048 112.644 140.935.12.132-.139.16.91.088 1.05-.072 3-.714 4.706-1.914 1.705-1.2 3.106-2.882 3.722-4.234.617-1.353.659-2.086.268-3.149-20.396-55.487-30.565-109.894-61.84-162.258l-2.103-3.521 1.279-3.9c6.869-20.923 17.852-42.768 42.902-60.303l4.535-3.176 4.881 2.617c11.454 6.145 19.123 5.873 25.69 1.936 13.132-7.875 24.15-23.88 28.625-37.784l-14.768-8.31-.943-3.746c-4.025-15.96-8.255-25.48-14.625-32.719-6.37-7.24-15.576-12.896-30.977-19.543l-6.426-2.773 1.104-6.91c.89-5.57.052-11.481-1.184-17.768-36.228 29.915-52.892 64.4-86.533 100.086l-3.197 3.39-4.613-.652c-57.84-8.187-142.926-5.257-198.455 1.436-6.045.728-11.262-1.14-16.34-3.733-5.078-2.593-9.996-6.2-14.475-10.492-8.957-8.584-16.938-19.87-16.01-33.258.654-9.426 2.683-17.048 7.006-23.01 4.323-5.961 11.13-9.434 17.815-10.27 13.368-1.669 26.916 3.833 42.058 10.04 30.285 12.415 65.987 29.01 93.022 21.717 10.554-2.848 30.674-20.089 44.4-37.834 6.863-8.873 12.442-17.861 15.377-24.528 1.339-3.041 2.013-5.487 2.24-6.923-.507-.106-1.153-.163-2.355-.08-2.665.182-7.069 1.375-12.56 3.814-10.985 4.877-26.237 14.423-44.675 26.896-11.984 8.108-26.017 8.386-38.992 5.153-12.975-3.233-25.743-9.626-38.58-16.04-19.255-9.619-38.213-18.81-55.45-20.077a53.657 53.657 0 0 0-4.27-.147zm343.096 73.006l9.832 22.123-22.474-3.512 12.642-18.611zM75.28 308.858c-14.235 49.028-35.548 97.072-55.633 132.947-.014.026-.02.015-.03.028a.651.651 0 0 1 .122.207c.258.592 1.295 1.961 2.856 3.035 1.56 1.074 3.553 1.828 4.945 2.008 1.391.18 1.836-.11 1.84-.114 33.669-24.914 58.717-55.4 83.47-85.668l-.613-.794c-11.682-15.197-22.427-29.428-30.75-41.946-2.25-3.384-4.321-6.6-6.207-9.703zM19.615 441.833c-.108-.114-.099.11 0 0zm297.377-119.485c-7.129 2.366-15.533 4.408-24.863 6.022-12.418 40.091-33.327 77.867-52.203 112.605l-.141.26-.158.25c-.31.491-.252.186-.049.783s1.012 1.81 2.27 2.707c2.514 1.796 4.82 2.374 7.208.23l.047-.04.047-.041c32.285-28.17 59.254-61.458 85.242-102.867-5.621-6.799-11.396-13.455-17.4-19.909z",fill:"#fff",fillOpacity:1}}},M=function(e){d(e),q(a)};document.querySelector("#lightbearer-example").onclick=function(){return M(I)},document.querySelector("#ironclad-example").onclick=function(){return M(H)},document.querySelector("#cave-lion-example").onclick=function(){return M(O)};var V=function(e){"download"===e?document.body.className="download-screen":"main"===e?document.body.className="main-screen":"render"===e?document.body.className="render":"help"===e&&(document.body.className="help-screen")},W=n(3),R=n.n(W),A=document.querySelector(".image-container");document.querySelector("#download").onclick=function(){return function(e){var t=document.querySelector(".render");V("render"),L(t,e),window.scrollTo(0,0),R()(t.firstChild,{allowTaint:!0}).then((function(e){A.appendChild(e),V("download")}))}(a)};document.querySelector("#done-downloading").onclick=function(){A.innerHTML="",V("main")},document.querySelector("#show-help").onclick=function(){return V("help")},document.querySelector("#close-help").onclick=function(){return V("main")},M(O)},4:function(e,t,n){e.exports=n(10)},5:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.80f781e5.chunk.js.map