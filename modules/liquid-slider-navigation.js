addNavigation:function(){var h=this,g,f="<"+h.options.navElementTag+' class="liquid-nav"><ul id="'+(h.$elem).attr("id")+'-nav-ul"></ul></'+h.options.navElementTag+">",i=(h.options.mobileNavDefaultText)?'<option disabled="disabled" selected="selected">'+h.options.mobileNavDefaultText+"</option>":null;if(h.options.responsive&&h.options.mobileNavigation){g='<div class="liquid-slider-select-box"><select id="'+(h.$elem).attr("id")+'-nav-select" name="navigation">'+i+"</select></div>"}if(h.options.dynamicTabsPosition==="bottom"){(h.$sliderId).after(f)}else{(h.$sliderId).before(f)}if(h.options.responsive){h.$sliderNavUl=d(h.sliderId+"-nav-ul");(h.$sliderNavUl).before(g)}d.each((h.$elem).find(h.options.panelTitleSelector),function(j){d((h.$sliderWrap)).find(".liquid-nav ul").append('<li class="tab'+(j+1)+'"><a href="#'+(j+1)+'" title="'+d(this).text()+'">'+d(this).text()+"</a></li>")});if(h.options.responsive&&h.options.mobileNavigation){d.each((h.$elem).find(h.options.panelTitleSelector),function(j){d((h.$sliderWrap)).find(".liquid-slider-select-box select").append('<option value="tab'+(j+1)+'">'+d(this).text()+"</option>")})}},alignNavigation:function(){var f=this,g=(f.options.dynamicArrowsGraphical)?"-arrow":"";if(f.options.dynamicTabsAlign!=="center"){if(!f.options.responsive){d((f.$sliderWrap)).find(".liquid-nav ul").css("margin-"+f.options.dynamicTabsAlign,d((f.$sliderWrap)).find(".liquid-nav-"+f.options.dynamicTabsAlign+g).outerWidth(true)+parseInt((f.$sliderId).css("margin-"+f.options.dynamicTabsAlign),10))}d((f.$sliderWrap)).find(".liquid-nav ul").css("float",f.options.dynamicTabsAlign)}f.totalNavWidth=d((f.$sliderWrap)).find(".liquid-nav ul").outerWidth(true);if(f.options.dynamicTabsAlign==="center"){f.totalNavWidth=0;d((f.$sliderWrap)).find(".liquid-nav li a").each(function(){f.totalNavWidth+=d(this).outerWidth(true)});d((f.$sliderWrap)).find(".liquid-nav ul").css("width",f.totalNavWidth+1)}},