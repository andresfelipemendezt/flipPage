
window.onload = function() {  

	function showCoords(event){
		var color = "#000";
		console.log(event.clientX +","+ event.clientX);
		var posX = event.clientX;
		var posY = event.clientY;
		var redcolor = Math.round((posX/500)*9);
		var greencolor = Math.round((posY/700)*9);
		var bluecolor = Math.round((posY*posX)%9);
		var rotateY = "r"+posY;
		var clipWidth = 500-posX;
		var clipRect = "\'"+posX+",0,"+clipWidth +",700\'";
		console.log(clipRect);
		color = "#"+redcolor+greencolor+bluecolor;
		console.log(color);

		page.attr({
	    	fill : color,
	    	transform: rotateY,
	    	'clip-rect': posX+',0,'+clipWidth +',700'
		    });

		return color;
	}

    var page1 = new Raphael(document.getElementById('page1'), 1000, 700);   
    var page = page1.rect(0,0,500,700);  
    page.attr(  
        {  
            gradient: '90-#526c7a-#64a0c1',  
            stroke: '#0f0',  
            'stroke-width': 10,  
            'stroke-linejoin': 'round',
            'clip-rect': '11,0,489,700'
        }  
    ); 
    // page.animate({"x": "0"}, 2000, "linear");
    // page.animate({"clip-rect": '0,0,500,700'}, 2000, "linear");
    page.mousemove(showCoords)


}