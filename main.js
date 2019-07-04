
var arregloCama;
function crearCama(){

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle = "white";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	arregloCama = new Array(
			new Cama("yellow",5,5,10,10,10),
			new Cama("red",20,5,10,300,10), 
			new Cama("brown",1,5,10,600,10)



			);

	for (var i = arregloCama.length - 1; i >= 0; i--) {
		arregloCama[i].Dibujar(context);
	}
}



	/*var objCama = new Cama("red",
		                   5,
		                   10,
		                   10,
		                   10);
		        

	objCama.Dibujar(context);*/



	function ordenarCamaColorAlfabeticamente(){
	var n = arregloCama.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arregloCama[j].Color > arregloCama[j+1].Color){
				//Intercambio
				aux = arregloCama[j];
				aux_x_j = arregloCama[j].X;
				aux_y_j = arregloCama[j].Y;
				aux_x_j_1 = arregloCama[j+1].X;
				aux_y_j_1 = arregloCama[j+1].Y;
				
				arregloCama[j] = arregloCama[j+1];
				arregloCama[j+1] = aux;

				arregloCama[j].X = aux_x_j;
				arregloCama[j].Y = aux_y_j;

				arregloCama[j+1].X = aux_x_j_1;
				arregloCama[j+1].Y = aux_y_j_1;
		}

	}

}

   var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle = "white";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	for (var i = arregloCama.length - 1; i >= 0; i--) {
		arregloCama[i].Dibujar(context);
	}
}


	function ordenarCamaTiempoUso(){
	var n = arregloCama.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arregloCama[j].TiempoDeUso> arregloCama[j+1].TiempoDeUso){
				//Intercambio
				aux = arregloCama[j];
				aux_x_j = arregloCama[j].X;
				aux_y_j = arregloCama[j].Y;
				aux_x_j_1 = arregloCama[j+1].X;
				aux_y_j_1 = arregloCama[j+1].Y;
				
				arregloCama[j] = arregloCama[j+1];
				arregloCama[j+1] = aux;

				arregloCama[j].X = aux_x_j;
				arregloCama[j].Y = aux_y_j;

				arregloCama[j+1].X = aux_x_j_1;
				arregloCama[j+1].Y = aux_y_j_1;
		}

	}

}

   var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle = "white";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	for (var i = arregloCama.length - 1; i >= 0; i--) {
		arregloCama[i].Dibujar(context);
	}
}
     



