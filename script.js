$(document).ready(function(){
	$gridbox = "<div class='gridbox'></div>";
	$row;
	for (var i = 0; i < 8; i++) {
		$row = $row + $gridbox;
	};
	$box;
	for (var i = 0; i < 8; i++) {
		$container = $box + $row;
	};
	$('#container').append($box);
});