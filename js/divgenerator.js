
var elements = [];
var itemNumber = 0;

function add(image){
	itemNumber++;
	elements[elements.length] = {
	    itemNumber: itemNumber,
	    image: image
	}
	console.log(itemNumber);
}

function makeDivs(){
	var numElements = elements.length;
	for (var i = 0; i < numElements; i++) {
		$('.works').append('' +
			'<div class="thumb" style="background: url(images/' + elements[i].image + ') center center no-repeat; background-size:cover">' +
			'\n</div>' +
			'\n\n');
	}
}

// function makeLinks(){
// 	var numElements = elements.length;
// 	for (var i = 0; i < numElements; i++) {
// 	$('.menu-primary').append('\
// 		<li class="link" id="link' + elements[i].itemNumber + '" >\
// 			<a href="#item' + elements[i].itemNumber + '"><img class="lazy-links links" src="/images/loading.gif" data-original="images/thumbs/thumb_' + elements[i].image + '" width="200" height="150"/></a>\
// 		</li>');
// 	}
// }


$(document).ready( function(){
	add('thumb-alchemy.jpg');
	add('thumb-diggin.jpg');
	add('thumb-disruption.jpg');
	add('thumb-greenway.jpg');
	add('thumb-motherboard.jpg');
	add('thumb-mrt.jpg');
	add('thumb-pantone.jpg');
	add('thumb-songs.jpg');
	add('thumb-subcon.jpg');
	add('thumb-timespace.jpg');
	makeDivs();
});