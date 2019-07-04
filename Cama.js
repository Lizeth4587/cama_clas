
class Cama{
	constructor(c, tu, al, an, x, y){
		    this.Color = c;
        this.TiempoDeUso=tu;
		    this.Altura = al;
		    this.Ancho = an;
        this.X=x;
        this.Y=y;
		
	}

	Dibujar(contextoDeDibujo){

		//Crear una pluma con el color
		contextoDeDibujo.strokeStyle = this.Color; // Stroke lines in blue

          //pata derecha
           contextoDeDibujo.beginPath();
           contextoDeDibujo.strokeStyle = "brown";
           contextoDeDibujo.fillStyle = "brown";
           contextoDeDibujo.fillRect(this.X+196,this.Y+60, 10, 100);
           //contextoDeDibujo.rect(200,60, Ancho, Altura);
           contextoDeDibujo.stroke();

           //Dibujar los circulos derecho
           contextoDeDibujo.beginPath();
           contextoDeDibujo.fillStyle="brown";
           var radio = this.Ancho/2*2;
           contextoDeDibujo.arc(this.X+20*radio, 
                                this.Y+6*radio,
                                radio,
                                0,
                                2*3.1416,
                               true);
           contextoDeDibujo.fill();
           contextoDeDibujo.closePath();
           //contextoDeDibujo.stroke();

           //curva de la cabecera de arriba
           contextoDeDibujo.beginPath();
           contextoDeDibujo.moveTo(this.X+35,this.Y+100);
           contextoDeDibujo.bezierCurveTo(this.X+20,this.Y+40,this.X+160,this.Y+20,this.X+205,this.Y+80);
           contextoDeDibujo.lineTo(this.X+30, this.Y+80);
           contextoDeDibujo.lineTo(this.X+30, this.Y+80);
           contextoDeDibujo.fill();
           contextoDeDibujo.closePath();
           //contextoDeDibujo.stroke();

           contextoDeDibujo.beginPath();
           contextoDeDibujo.fillRect(this.X+38, this.Y+80, 160,35);
           contextoDeDibujo.fill();
           contextoDeDibujo.closePath();
           
           //colchon de la cama
           contextoDeDibujo.beginPath();
           contextoDeDibujo.fillStyle="black";
           contextoDeDibujo.moveTo(this.X+28,this.Y+110);
           contextoDeDibujo.lineTo(this.X+235,this.Y+300);
           contextoDeDibujo.lineTo(this.X+445,this.Y+300);
           contextoDeDibujo.lineTo(this.X+200,this.Y+110);
           contextoDeDibujo.lineTo(this.X+28,this.Y+110);
           contextoDeDibujo.fill();
           contextoDeDibujo.closePath();
           //contextoDeDibujo.stroke();

          
           //pata izquierda
           contextoDeDibujo.beginPath();
           contextoDeDibujo.strokeStyle = "brown";
           contextoDeDibujo.fillStyle = "brown";
           contextoDeDibujo.fillRect(this.X+28,this.Y+60,10,100);
           //contextoDeDibujo.rect(35,60,10, 100);
           contextoDeDibujo.stroke();

            //Dibujar los circulo izquierdo
           contextoDeDibujo.beginPath();
           contextoDeDibujo.fillStyle="brown";
           var radio = this.Ancho/2*2;
           contextoDeDibujo.arc(this.X+3.2*radio, 
                               this.Y+6*radio,
                               radio,
                               0,
                               2*3.1416,
                               true);
           contextoDeDibujo.fill();
           contextoDeDibujo.closePath();
           //contextoDeDibujo.stroke();

           //curva de la acabecera de abajo
           contextoDeDibujo.beginPath();
           contextoDeDibujo.moveTo(this.X+245,this.Y+300);
           contextoDeDibujo.bezierCurveTo(this.X+245,this.Y+300,this.X+330,this.Y+200,this.X+445,this.Y+300);
           contextoDeDibujo.lineTo(this.X+235, this.Y+300)
           contextoDeDibujo.lineTo(this.X+235, this.Y+300)
           contextoDeDibujo.fill();
           contextoDeDibujo.closePath();
           //contextoDeDibujo.stroke();

           contextoDeDibujo.beginPath();
           contextoDeDibujo.fillRect(this.X+240, this.Y+300, 200,20);
           contextoDeDibujo.fill();
           contextoDeDibujo.closePath();

           contextoDeDibujo.beginPath();
           contextoDeDibujo.fillStyle="pink";
           var radio = this.Ancho/2*2;
           contextoDeDibujo.arc(this.X+35*radio, 
                                this.Y+28*radio,
                                radio,
                                0,
                                2*3.1416,
                               true);
           contextoDeDibujo.fill();
           contextoDeDibujo.closePath();
           //contextoDeDibujo.stroke();

           //pata izquierda de abajo
           contextoDeDibujo.beginPath();
           contextoDeDibujo.strokeStyle = "brown";
           contextoDeDibujo.fillStyle = "brown";
           contextoDeDibujo.fillRect(this.X+235,this.Y+280,10,50);
           //contextoDeDibujo.rect(235,280,10, 50);
           contextoDeDibujo.stroke();

            //circulo izquierdo de abjo
            contextoDeDibujo.beginPath();
            contextoDeDibujo.fillStyle="brown";
            var radio = this.Ancho/2*2;
            contextoDeDibujo.arc(this.X+24*radio, 
                                this.Y+28*radio,
                                radio,
                                0,
                                2*3.1416,
                                true);
            contextoDeDibujo.fill();
            contextoDeDibujo.closePath();
           //contextoDeDibujo.stroke();

           //pata derecha de abajo
           contextoDeDibujo.beginPath();
           contextoDeDibujo.strokeStyle = "brown";
           contextoDeDibujo.fillStyle = "brown";
           contextoDeDibujo.fillRect(this.X+436,this.Y+280,10,50);
           //contextoDeDibujo.rect(436,280,10,50);
           contextoDeDibujo.stroke();

           //circulos derecho de abajo
           contextoDeDibujo.beginPath();
           contextoDeDibujo.fillStyle="brown";           
           var radio = this.Ancho/2*2;
           contextoDeDibujo.arc(this.X+44*radio, 
                                this.Y+27.2*radio,
                                radio,
                                0,
                                2*3.1416,
                                true);
           contextoDeDibujo.fill();
           contextoDeDibujo.closePath();
           //contextoDeDibujo.stroke();


           //color
           contextoDeDibujo.fillStyle='black';
           contextoDeDibujo.fillText(this.Color, this.X+335,this.Y+395);
           contextoDeDibujo.font='bold 20px sans';
           contextoDeDibujo.stroke();

            //tiempo de uso de cada cama
           contextoDeDibujo.fillStyle='blue';
           contextoDeDibujo.fillText(this.TiempoDeUso, this.X+348,this.Y+420);
           contextoDeDibujo.font='bold 20px sans';
           contextoDeDibujo.stroke();
           
 
       }
}
