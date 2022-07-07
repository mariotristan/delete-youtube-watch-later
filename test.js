
setInterval(function() {
	document.querySelector('#contents button[aria-label="Men\ú de acciones"]').click();
	var things = document.evaluate('//span[contains(text(),"À regarder plus tard")]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
		for (var i = 0; i < things.snapshotLength; i++) {
		    things.snapshotItem(i).click();
		}		
}, 1000);


----
setInterval(function() {
	document.querySelector('#contents button[aria-label="Menú de acciones"]').click();
	var things = document.evaluate('//span[contains(text(),"Ver más tarde")]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
		for (var i = 0; i < things.snapshotLength; i++) {
		    things.snapshotItem(i).click();
		}		
}, 1000);
