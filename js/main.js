// $(document).ready( function(){

// 	$(".level-map-content").hide();

// 		$(".level-map").click(function(){

// 			console.log("click");

// 			 $(this).next().addClass("active");
				
// 				console.log(test);


// 		});


// });

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 

    $(".expand").click(function(){
    	window.open("code-window.html","bfs","fullscreen,scrollbars")

    });
});