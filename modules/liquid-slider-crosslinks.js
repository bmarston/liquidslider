registerCrossLinks:function(){var f=this;if(f.options.crossLinks){f.$crosslinks=d("[data-liquidslider-ref="+(f.sliderId).split("#")[1]+"]");(f.$crosslinks).on("click",function(){if(!f.clickable){return false}if(f.options.autoSlideControls){if(d(this).attr("name")==="stop"){f.options.autoSlide=false;clearTimeout(f.autoslideTimeout);d(this).html(f.options.autoSlideStartText);d(this).attr("name","start");return false}if(d(this).attr("name")==="start"){d(this).html(f.options.autoSlideStopText);f.autoSlideStopped=false;f.options.autoSlide=true;f.hover();f.setCurrent(f.options.autoSliderDirection);f.autoSlide();d(this).attr("name","stop");return false}}if(typeof f.options.callforwardFunction==="function"){f.animationCallForward(true)}var g=(d(this).attr("href").split("#")[1]);if(g==="left"||g==="right"){f.setCurrent(g)}else{if(f.options.hashCrossLinks){f.getHashTags("#"+g);f.setCurrent(parseInt(f.hashValue-1,10)-~~(f.options.continuous))}else{f.setCurrent(parseInt(g-1,10))}}f.checkAutoSlideStop();if(typeof f.options.callbackFunction==="function"){f.animationCallback(true)}return false})}},