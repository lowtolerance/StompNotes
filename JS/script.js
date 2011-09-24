$(document).ready(function() {
	function positionNotes() {
		$('a[id^="fnref:"]').each(function(index) {
			p = $(this).position();
			$('li[id^="fn:'+(index)+'"]').css("top", p.top);
		});
	}
	$(window).resize(function() { 
		positionNotes(); 
	});
	$('body').addClass('stomped');
	positionNotes();		
});
