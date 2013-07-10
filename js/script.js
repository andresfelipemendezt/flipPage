


window.onload = function() {  
	var posX = 0;
	var posY = 0;

	function readMouse(e){
		posX = "e.clientX";
		posY = "e.clientY";
		color = "#f"+posX+"0";
		return color
	};

	// var m_color = readMouse();

    console.log(readMouse());

    var page1 = new Raphael(document.getElementById('page1'), 1000, 700);   
    var page = page1.rect(500,0,500,700);  
    page.attr(  
        {  
            gradient: '90-#526c7a-#64a0c1',  
            stroke: '#0f0',  
            'stroke-width': 10,  
            'stroke-linejoin': 'round',
            'clip-rect': '0,0,500,700'
        }  
    ); 

    page.animate({"x": "0"}, 2000, "linear");
    page.animate({"clip-rect": "00,0,500,700"}, 2000, "linear");

    page.mouseover(
    	readMouse(event)
    );
    page.attr({
		fill: color
    });
}