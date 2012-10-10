window.addEventListener( 'load', function(){
			var googleplusButton;
			var ToolbarUIItemProperties = {
					disabled: false,
					title: 'Google+',
					icon: 'icons/icon.png',
					popup: {
						href: 'http://plus.google.com/app/plus/',
						width: 425,
						height: 480
					}
				}
			googleplusButton = opera.contexts.toolbar.createItem(ToolbarUIItemProperties);
			opera.contexts.toolbar.addItem(googleplusButton);
		}, false );