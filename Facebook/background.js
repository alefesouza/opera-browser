window.addEventListener( 'load', function(){
			var facebookButton;
			var ToolbarUIItemProperties = {
					disabled: false,
					title: 'Facebook',
					icon: 'icons/icon.png',
					popup: {
						href: 'http://touch.facebook.com/',
						width: 425,
						height: 480
					}
				}
			facebookButton = opera.contexts.toolbar.createItem(ToolbarUIItemProperties);
			opera.contexts.toolbar.addItem(facebookButton);
		}, false );