;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-xiangji" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M928.192 241.28l-180.16 0L748.032 238.848c0-66.112-53.504-119.744-119.168-119.744L395.328 119.104c-65.792 0-119.168 53.568-119.168 119.744L276.16 241.28 96 241.28C52.096 241.28 0 326.016 0 370.112l0 423.168c0 44.032 52.096 121.28 96 121.28l832.192 0c43.776 0 95.808-77.248 95.808-121.28L1024 370.112C1024 326.016 971.968 241.28 928.192 241.28zM512.832 802.24c-112.064 0-209.344-91.264-209.344-203.776 0-112.512 97.28-203.712 209.344-203.712 111.808 0 209.28 91.136 209.28 203.712C722.048 710.976 624.64 802.24 512.832 802.24zM913.728 401.344l-85.184 0L828.544 355.008l85.184 0L913.728 401.344zM512.832 470.592c-64.32 0-114.304 56.704-114.304 121.344 0 64.512 49.92 127.744 114.304 127.744 64.192 0 114.112-63.232 114.112-127.744C626.944 527.232 577.024 470.592 512.832 470.592z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-saomiao" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M46.545545 372.363364c-27.927727 0-46.545545-18.617819-46.545545-46.545545L0 139.636636C0 65.163364 65.163364 0 139.636636 0l186.181182 0c27.927727 0 46.545545 18.617819 46.545545 46.545545 0 27.927727-18.617819 46.545545-46.545545 46.545545L139.636636 93.091091c-27.927727 0-46.545545 18.617819-46.545545 46.545545l0 186.181182C93.091091 353.745545 74.473272 372.363364 46.545545 372.363364zM325.817819 1024 139.636636 1024C65.163364 1024 0 958.836636 0 884.364363L0 698.181182c0-27.926728 18.617819-46.545545 46.545545-46.545545 27.927727 0 46.544546 18.618818 46.544546 46.545545l0 186.182181c0 27.926728 18.617819 46.544546 46.545545 46.544546l186.181182 0c27.927727 0 46.545545 18.618818 46.545545 46.546544S353.745545 1024 325.817819 1024zM884.363364 1024 698.181182 1024c-27.926728 0-46.545545-18.617819-46.545545-46.545545s18.618818-46.546544 46.545545-46.546544l186.181182 0c27.927727 0 46.546544-18.617819 46.546544-46.544546L930.908909 698.181182c0-27.926728 18.617819-46.545545 46.545545-46.545545s46.545545 18.618818 46.545545 46.545545l0 186.182181C1024 958.836636 958.836636 1024 884.363364 1024zM977.454455 372.363364c-27.927727 0-46.545545-18.617819-46.545545-46.545545L930.908909 139.636636c0-27.927727-18.618818-46.545545-46.546544-46.545545L698.181182 93.091091c-27.926728 0-46.545545-18.617819-46.545545-46.545545 0-27.927727 18.618818-46.545545 46.545545-46.545545l186.181182 0c74.474271 0 139.636636 65.163364 139.636636 139.636636l0 186.181182C1024 353.745545 1005.382181 372.363364 977.454455 372.363364zM977.454455 558.545545 46.545545 558.545545C18.617819 558.545545 0 539.926728 0 512c0-27.927727 18.617819-46.545545 46.545545-46.545545l930.908909 0c27.927727 0 46.545545 18.617819 46.545545 46.545545C1024 539.926728 1005.382181 558.545545 977.454455 558.545545z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
