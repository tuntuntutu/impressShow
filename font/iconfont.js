(function(window){var svgSprite='<svg><symbol id="icon-youjiantou" viewBox="0 0 1000 1000"><path d="M606.6875 856.6875l312.5-312.5c24.4063-24.4063 24.4063-63.9688 0-88.375l-312.5-312.5c-24.4063-24.4063-63.9688-24.4063-88.375 0-24.4063 24.4063-24.4063 63.9688 0 88.375l205.8125 205.8125h-599.125c-34.5313 0-62.5 27.9688-62.5 62.5s27.9688 62.5 62.5 62.5h599.125l-205.8125 205.8125c-12.1875 12.1875-18.3125 28.1875-18.3125 44.1875s6.0938 32 18.3125 44.1875c24.4063 24.4063 63.9688 24.4063 88.375 0z"  ></path></symbol><symbol id="icon-dakuohao" viewBox="0 0 1024 1024"><path d="M530.432 870.4c0 38.912 6.144 69.632 20.48 94.208 14.336 22.528 36.864 34.816 69.632 34.816V1024c-40.96 0-71.68-12.288-92.16-38.912-18.432-24.576-28.672-71.68-28.672-137.216v-194.56c0-36.864-4.096-65.536-14.336-88.064-10.24-22.528-32.768-34.816-67.584-38.912v-26.624c32.768-4.096 53.248-16.384 65.536-34.816 12.288-18.432 16.384-49.152 16.384-90.112V178.176c0-67.584 10.24-112.64 28.672-139.264C548.864 12.288 579.584 0 620.544 0v26.624c-32.768 0-55.296 10.24-69.632 32.768-14.336 20.48-20.48 53.248-20.48 96.256v225.28c0 49.152-8.192 81.92-26.624 100.352-18.432 18.432-36.864 26.624-57.344 26.624v8.192c22.528 0 40.96 10.24 57.344 32.768 16.384 20.48 24.576 53.248 24.576 96.256v225.28z" fill="#231815" ></path></symbol><symbol id="icon-231" viewBox="0 0 1024 1024"><path d="M547.303041 405.64574l-0.967024-330.194304 0-5.203512 0-5.20351199L386.046357 65.04441201l0 18.94753799L493.551836 83.991949 493.551836 424.575882l71.668273 75.69089001-71.668273 94.62000798L493.551836 935.48913 386.046357 935.48913 386.046357 954.39573599 546.336016 954.395736l0-5.203512 0-5.203512 0.967024-349.10091 89.58738799-94.620008L547.303041 405.64574z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)