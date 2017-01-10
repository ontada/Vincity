//please contact me giaiphapthuonghieu.org@gmail.com
//website http://giaiphapthuonghieu.vn or http://faceseo.vn

(function($) {
    $.fn.linhnguyen = function(options) {        
        var defaults = {  
	    	animation: 'fadeAndPop', //fade, fadeAndPop, none
		    animationspeed: 300, //how fast animtions are
		    closeonbackgroundclick: true, //if you click background will modal close?
		    dismissmodalclass: 'close-linhnguyen-modal' //the class of a button or element that will close an open modal
    	}; 

        var options = $.extend({}, defaults, options); 
	
        return this.each(function() {
        	var modal = $(this),
        		topMeasure  = parseInt(modal.css('top')),
				topOffset = modal.height() + topMeasure,
          		locked = false,
				modalBG = $('.linhnguyen-modal-bg');

			if(modalBG.length == 0) {
				modalBG = $('<div class="linhnguyen-modal-bg" />').insertAfter(modal);
			}		    
			modal.bind('linhnguyen:open', function () {
			  modalBG.unbind('click.modalEvent');
				$('.' + options.dismissmodalclass).unbind('click.modalEvent');
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modal.css({'top': $(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"top": $(document).scrollTop()+topMeasure + 'px',
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					}
					if(options.animation == "fade") {
						modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': $(document).scrollTop()+topMeasure});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					} 
					if(options.animation == "none") {
						modal.css({'visibility' : 'visible', 'top':$(document).scrollTop()+topMeasure});
						modalBG.css({"display":"block"});	
						unlockModal()				
					}
				}
				modal.unbind('linhnguyen:open');
			}); 	

			modal.bind('linhnguyen:close', function () {
			  if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"top":  $(document).scrollTop()-topOffset + 'px',
							"opacity" : 0
						}, options.animationspeed/2, function() {
							modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
							unlockModal();
						});					
					}  	
					if(options.animation == "fade") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"opacity" : 0
						}, options.animationspeed, function() {
							modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
							unlockModal();
						});					
					}  	
					if(options.animation == "none") {
						modal.css({'visibility' : 'hidden', 'top' : topMeasure});
						modalBG.css({'display' : 'none'});	
					}		
				}
				modal.unbind('linhnguyen:close');
			});     
   	
    	modal.trigger('linhnguyen:open')
			
			//Close Modal Listeners
			var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
			  modal.trigger('linhnguyen:close')
			});
			
			if(options.closeonbackgroundclick) {
				modalBG.css({"cursor":"pointer"})
				modalBG.bind('click.modalEvent', function () {
				  modal.trigger('linhnguyen:close')
				});
			}
			$('body').keyup(function(e) {
        		if(e.which===27){ modal.trigger('linhnguyen:close'); } // 27 is the keycode for the Escape key
			});
			
			function unlockModal() { 
				locked = false;
			}
			function lockModal() {
				locked = true;
			}	
			
        });//each call
    }//orbit plugin call
})(jQuery);
        
$(window).load(function() {
		if(document.cookie.indexOf("adf") == -1)
		{
			document.cookie = "adfpopunder1=adf";
			var divpopup = document.createElement("div");
			$(divpopup).attr('id', 'myModal');
			$(divpopup).attr('class', 'linhnguyen-modal');
			$( "body" ).append(divpopup);
			$("#myModal").html("<a href='http://goo.gl/rKJWvA' target='_blank'> <img src='https://3.bp.blogspot.com/-Nt1trczuizE/WG4UNGke0oI/AAAAAAAADSQ/sA9MANvnO0o5Ambpx1_GtTC2FbpKP0PnQCPcB/s1600/khu-can-ho-vincity-.jpg' width='500px'/>
					   <form action='https://docs.google.com/forms/d/e/1FAIpQLSf-S-MAi1nAZBv9tP8pu9EDsOlqqbBr7RR6dbT0Wr5QMWeLOA/formResponse' id='ss-form' method='POST' onsubmit='submitted=true;' target='hidden_iframe'>

                                                <ol class='ss-question-list' role='list' style='padding-left: 0;'>

                                                <div class='ss-form-question errorbox-good' role='listitem'>
                                                <div class='ss-item ss-item-required ss-text' dir='auto'><div class='ss-form-entry'>
                                                <label class='ss-q-item-label' for='entry_310345738'><div class='ss-q-title'>Họ tên
                                                <label aria-label='(Trường bắt buộc)' for='itemView.getDomIdToLabel()'/>
                                                <span aria-hidden='true' class='ss-required-asterisk'>*</span></label></div>
                                                <div class='ss-q-help ss-secondary-text' dir='auto'/></div></label>

                                                <input aria-label='Họ và tên  ' aria-required='true' class='ss-q-short' dir='auto' id='entry_1912055730' name='entry.573846332' required='' title='' type='text' value='' placeholder="Họ và tên"/>
                                                <div class='error-message' id='276435902_errorMessage'/>
                                                </div></div></div> <div class='ss-form-question errorbox-good' role='listitem'>
                                                <div class='ss-item ss-item-required ss-text' dir='auto'><div class='ss-form-entry'>
                                                <label class='ss-q-item-label' for='entry_1527642830'><div class='ss-q-title'>Số điện thoại
                                                <label aria-label='(Trường bắt buộc)' for='itemView.getDomIdToLabel()'/>
                                                <span aria-hidden='true' class='ss-required-asterisk'>*</span></label></div>
                                                <div class='ss-q-help ss-secondary-text' dir='auto'/></div></label>

                                                <input aria-label='Số điện thoại  ' aria-required='true' class='ss-q-short' dir='auto' id='entry_110265657' name='entry.358056185' required='' title='' type='text' value='' placeholder="Số điện thoại"/>
                                                <div class='error-message' id='655797015_errorMessage'/>
                                                </div></div></div> <div class='ss-form-question errorbox-good' role='listitem'>
                                                <div class='ss-item  ss-text' dir='auto'><div class='ss-form-entry'>
                                                <label class='ss-q-item-label' for='entry_1610039042'><div class='ss-q-title'>Email
                                                </div>
                                                <div class='ss-q-help ss-secondary-text' dir='auto'/></div></label>

                                                <input aria-label='Email  ' class='ss-q-short' dir='auto' id='entry_2075508322' name='entry.1385428571' title='' type='text' value='' placeholder="Địa chỉ Email"/>
                                                <div class='error-message' id='249321228_errorMessage'/>
                                                </div></div></div>
                                                <input name='draftResponse' type='hidden' value='[,,&quot;-8475930517372583444&quot;]'/>
                          <input name='pageHistory' type='hidden' value='0'/>

<input aria-describedby='i.desc.‎1335455696 i.err.‎1335455696' aria-label='Dự án' autocomplete='off' class='quantumWizTextinputPaperinputInput exportInput' data-initial-dir='auto' data-initial-value='VinCity Quận 9' dir='auto' jsname='YPqjbf' name='entry.1210090854' tabindex='0' type='hidden' value='VinCity Quận 9'/>

                          <input name='fbzx' type='hidden' value='-8475930517372583444'/>
                                                <div class='ss-send-email-receipt' dir='ltr' style='margin-bottom: 4px;'><label for='emailReceipt' style='display:inline;'/></label></div>
                                                <div class='ss-item ss-navigate'>
                                                <input class='btn btn-lg btn-danger jfk-button jfk-button-action ' id='ss-submit' name='submit' type='submit' value='Gửi'/>
                                                        </div></div></div></div></ol></form><br/>13 Kỹ thuật đẩy top vượt trội</a>. Học tại nhà CEO Faceseo. <h2><a class='close-linhnguyen-modal'>X</a></h2>");
			$('#myModal').linhnguyen($('#myModal').data());
		}
});
