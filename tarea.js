const boton1 = document.getElementById("boton1");
const boton0 = document.getElementById("boton0");
boton1.addEventListener("click", accion1);
boton0.addEventListener("click", reiniciar);

const Minutos = document.querySelector(".minutos");
const Segundos = document.querySelector(".segundos");
const Centesimas = document.querySelector(".centesimas");

let minutos = 0;
let segundos = 0;
let centesimas = 0;

let corriendo = null;

function dibujarTiempo(){
	Minutos.innerHTML = minutos;
	Segundos.innerHTML = segundos;
	Centesimas.innerHTML = centesimas;
 }
function reiniciar(){
	minutos = 0;
	segundos = 0;
	centesimas = 0;
	dibujarTiempo();
}
function accion1(){
	if(corriendo){
		reiniciar();
		boton0.disabled = false;
	}
	else{
		boton0.disabled = false;
		iniciar();
	}
}
function iniciar(){
	const sumarMinuto = () => {
		if(minutos < 99) minutos++;
	}
	const sumarSegundo = () => {
		if(segundos === 59){
			segundos = 0;
			sumarMinuto();
		}
		else{
			segundos++;
		}
        corriendo = null;
	}
	const incrementar = () => {
		if(centesimas === 99){
			centesimas = 0;
			sumarSegundo();
		}
		else{
			centesimas++;
		}
		dibujarTiempo();
	}
	corriendo = setInterval(incrementar, 10);
}



