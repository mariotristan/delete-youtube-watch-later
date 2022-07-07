
setInterval(function() {
	document.querySelector('#contents button[aria-label="Men\ú de acciones"]').click();
	var things = document.evaluate('//span[contains(text(),"À regarder plus tard")]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
		for (var i = 0; i < things.snapshotLength; i++) {
		    things.snapshotItem(i).click();
		}		
}, 1000);

