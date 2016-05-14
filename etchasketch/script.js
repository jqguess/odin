$(document).ready(function () {
	displayGrid(30);
	
	$('.squares').on('mouseenter', function(){
		$(this).css('background-color', 'white');
	});
	
	$('#random').on('click', function(){
		newGrid();
	   var color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	
		$('.squares').on('mouseenter', function(){
			$(this).css('background-color', color);
		});
	});
	
});


function displayGrid(gridSize){
	
	var boxsize = (750 - 2*gridSize)/gridSize;
	var container = $('#container').html('');
	
	for (var i = 0; i < gridSize; i++) {
		
		for (var j = 0; j < gridSize; j++) {
			container.append( $('<div><div></div>').addClass('squares').height(boxsize).width(boxsize) );
		}
		
		container.append($('<div></div>').css('clear', 'both').css('margin-top', '-4px'));
		
	}
}

function newGrid() {
		var newSize = prompt('Enter new grid size up to 55: ');
		if(newSize <=55){
		displayGrid(newSize);
       } else {
		var newSize = prompt('Really this time, only to 55: '); 
	   }
		$('.squares').css('background-color', 'black');
	}

