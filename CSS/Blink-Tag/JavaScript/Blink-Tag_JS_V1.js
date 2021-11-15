// JQuery example
setInterval(function(){
	$('blink').each(function() {
		$(this).toggle();
});
}, 250);
// Vanilla JavaScript example
(function() {
	var blinks = document.getElementsByTagName('blink');
	var visibility = 'hidden';
	window.setInterval(function() {
	for (var i = blinks.length - 1; i >= 0; i--) {
		blinks[i].style.visibility = visibility;
}
	visibility = (visibility === 'visible') ? 'hidden' : 'visible';
	}, 250);
})();

