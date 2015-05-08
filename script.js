$(document).ready(function(){
	//console.log("derp");
	$gridbox = "<div class='gridbox'></div>";
	$row = "";
	for (var i = 0; i < 8; i++) {
		$row = $row + $gridbox;
		//console.log(i+" "+$row);
	};
	$row = "<div class='row'>"+$row+"</div>";

	$box = "";
	for (var i = 0; i < 8; i++) {
		$box = $box + $row;
		//console.log(i+" "+$box);
	};
	//console.log($box);

	$('#container').append($box);

	$('.gridbox').hover(function() {
		/* Stuff to do when the mouse enters the element */
		//console.log("Estoy en hover!");
		//$(this).animate({'background-color':"#FF0000"}, 500);
		$(this).css('background-color', '#FF0000');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		//console.log("Salgo de hover");
		//$(this).animate({'background-color':"#FFFFFF"}, 500);
		//$(this).css('background-color', '#FFFFFF');
	});
});