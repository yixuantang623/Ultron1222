/*********支援youtube**********/
$(document).ready(function() {
		$("#tip4").click(function() {
			$.fancybox({
					'padding'		: 0,
					'autoScale'		: false,
					'transitionIn'	: 'none',
					'transitionOut'	: 'none',
					'width'			: 680,
					'height'		: 495,
					'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
					'type'			: 'swf',
					'swf'			: {
					'wmode'		: 'transparent',
					'allowfullscreen'	: 'true'
					}
					});
					return false;
					});
					});
/*********支援圖片**********/	
	$(document).ready(function() {
		$("a.iframe").fancybox({'hideOnContentClick': true});
		$("a.group").fancybox({
			'overlayOpacity': 0.8,
			'zoomSpeedIn': 300, 
			'zoomSpeedOut': 300,
			'overlayShow': true
			//Put overlayShow in the last line, and REMOVE THE COMMA otherwise Fancybox won't work in IE6 and IE7.
			}); 
			}); 