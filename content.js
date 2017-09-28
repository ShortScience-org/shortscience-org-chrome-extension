(function() {
  var location = window.location.href;
  var paper_id = location.substr(location.lastIndexOf('/') + 1);
  //alert(paper_id);
  
  	// Create box and allow people to click and write summaries
	a = document.createElement("div");
	a.id = "shortscienceorg-box";
	a.style.position="absolute";
	a.style.top="0px";
	a.style.right="0px";
		
	document.body.appendChild(a)
	$("#shortscienceorg-box").html("<a href='http://www.shortscience.org/paper?bibtexKey=" + paper_id + "'>Write Summary</a>");
	
  
	//read rss and show summaries that have already been written
	
	//	var xml = chrome.extension.getURL('rss-all.xml')
	//	
	//	$.get(xml, function(data) {
	//		alert(jQuery.parseXML( data ))
	//	});
	//	
	
})();
