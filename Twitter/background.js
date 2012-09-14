window.addEventListener( 'load', function(){
			var twitterButton;
			var ToolbarUIItemProperties = {
					disabled: false,
					title: 'Twitter',
					icon: 'icons/icon.png',
					popup: {
						href: 'http://mobile.twitter.com/',
						width: 320,
						height: 369
					}
				}
			twitterButton = opera.contexts.toolbar.createItem(ToolbarUIItemProperties);
			opera.contexts.toolbar.addItem(twitterButton);
		}, false );