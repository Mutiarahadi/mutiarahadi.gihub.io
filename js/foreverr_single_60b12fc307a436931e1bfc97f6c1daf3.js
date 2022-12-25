(function($){$.fn.rekAccord=function(options){const $this=$(this);if(!$this.hasClass("rekAccord")){$this.addClass("rekAccord").addClass("no-act")
$this.find(".rekAccord-kapat").click(function(){$this.addClass("no-act");$("#0").trigger("click");if($("#dark-back")[0])
$("#dark-back").hide();$("body").css("overflow","inherit");});$(document).on("click","#dark-back",function(){$(this).hide();$this.addClass("no-act");$("body").css("overflow","inherit");$("#0").trigger("click");});if(typeof options==="object"||!options){var settings=$.extend({duration:"1000",animation:"cubic-bezier(.96,.33,0,1)",background:true,radiusLeft:"15px",radiusRight:"15px",distance:20,width:"100%",contentScroll:true},options);setTimeout(()=>{$this.css('transition','transform '+settings.duration+'ms '+settings.animation+'');$this.css('border-radius',''+settings.radiusLeft+' '+settings.radiusRight+' 0px 0px');$this.css('width',''+settings.width+'');const hgt=(((100-settings.distance)-10)+1);if(settings.contentScroll){$this.find(".rekAccord-content").css('height',''+hgt+'%');$this.find(".rekAccord-content").css('overflow-y','scroll');}},100);if(settings.background==true){if(!$("#dark-back")[0])
$("body").append("<div id='dark-back'></div>");$this.attr("bg",1);}}}
if(typeof options!=="object"){if(options==="open"){$(".rekAccord").addClass("no-act");if($this.attr("bg")==1)
$("#dark-back").show();$this.removeClass("no-act").css('transform','translate(-50%, '+$this.attr('distance')+'vh)');$("body").css("overflow","hidden");}
if(options==="close"){if($this.attr("bg")==1)
$this.addClass("no-act");$("body").css("overflow","inherit");}}}}(jQuery));function copyText(el){var content=jQuery(el).siblings('div.copy-content').html()
var temp=jQuery("<textarea>");jQuery("body").append(temp);temp.val(content.replace(/<br ?\/?>/g,"\n")).select();document.execCommand("copy");temp.remove();var text=jQuery(el).html()
jQuery(el).html(jQuery(el).data('message'))
var counter=0;var interval=setInterval(function(){counter++;if(counter==1){jQuery(el).html(text)}},500);}
var acc=document.getElementsByClassName("accordionnya");var panel=document.getElementsByClassName('panelnya');for(var i=0;i<acc.length;i++){acc[i].onclick=function(){var setClasses=!this.classList.contains('aktifkan');setClass(acc,'aktifkan','remove');setClass(panel,'tampilkan','remove');if(setClasses){this.classList.toggle("aktifkan");this.nextElementSibling.classList.toggle("tampilkan");}}}
function setClass(els,className,fnName){for(var i=0;i<els.length;i++){els[i].classList[fnName](className);}}
(function($){$.fn.qrCode=function(options){const $this=$(this);if(!$this.hasClass("qrCode")){$this.addClass("qrCode").addClass("no-act")
$this.find(".qrCode-kapat").click(function(){$this.addClass("no-act");if($("#dark-back")[0])
$("#dark-back").hide();$("body").css("overflow","inherit");});$(document).on("click","#dark-back",function(){$(this).hide();$this.addClass("no-act");$("body").css("overflow","inherit");});if(typeof options==="object"||!options){var settings=$.extend({duration:"1000",animation:"cubic-bezier(.96,.33,0,1)",background:true,radiusLeft:"15px",radiusRight:"15px",distance:0,width:"100%",contentScroll:true},options);setTimeout(()=>{$this.css('transition','transform '+settings.duration+'ms '+settings.animation+'');$this.css('border-radius',''+settings.radiusLeft+' '+settings.radiusRight+' 0px 0px');$this.css('width',''+settings.width+'');},100);if(settings.background==true){if(!$("#dark-back")[0])
$("body").append("<div id='dark-back'></div>");$this.attr("bg",1);}}}
if(typeof options!=="object"){if(options==="open"){$(".qrCode").addClass("no-act");if($this.attr("bg")==1)
$("#dark-back").show();$this.removeClass("no-act").css('transform','translate(-50%, '+$this.attr('distance')+'vh)');$("body").css("overflow","hidden");}
if(options==="close"){if($this.attr("bg")==1)
$this.addClass("no-act");$("body").css("overflow","inherit");}}}}(jQuery));