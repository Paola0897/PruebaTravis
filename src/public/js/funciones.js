function calculaDescuento(id){

	var monto = document.getElementById("inputTotal").value;
	var descuento = document.getElementById("inputDescuento").value;
	var porcentaje = descuento/100;
	var totalDescontado = monto * porcentaje;
	var totalResultante = monto - totalDescontado;

	document.getElementById("inputTotal").value = totalResultante;

	document.getElementById("inputDescuento").value= descuento;

	anticipoSugerido(id);

	return false;
}

function anticipoSugerido(id){
	//**************************FUNCION PARA CONVERTIR**********************************
	var formatNumber = {
 separador: ",", // separador para los miles
 sepDecimal: '.', // separador para los decimales
 formatear:function (num){
 num +='';
 var splitStr = num.split('.');
 var splitLeft = splitStr[0];
 var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
 var regx = /(\d+)(\d{3})/;
 while (regx.test(splitLeft)) {
 splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
 }
 return this.simbol + splitLeft +splitRight;
 },
 new:function(num, simbol){
 this.simbol = simbol ||'';
 return this.formatear(num);
 }
}
	//**********************************************************************************
	var total = document.getElementById("inputTotal").value;
	var sugerido1 = parseFloat(total * 0.20).toFixed(0);
	var sugerido = parseFloat(sugerido1).toFixed(2);

	document.getElementById("inputAnticipoSugerido").value = formatNumber.new(sugerido);

	restoDeCalculos(id);

	return false;
}

var anticipo = function (precioVenta){

	//**********************************************************************************
	var total = precioVenta;
	var sugerido1 = parseFloat(total * 0.20).toFixed(0);
	var sugerido = parseFloat(sugerido1).toFixed(2);

	return sugerido;
}

function restoDeCalculos(id){

		var formatNumber = {
	 		separador: ",", // separador para los miles
	 		sepDecimal: '.', // separador para los decimales
	 		formatear:function (num){
	 			num +='';
	 			var splitStr = num.split('.');
	 			var splitLeft = splitStr[0];
	 			var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
	 			var regx = /(\d+)(\d{3})/;
	 			while (regx.test(splitLeft)) {
	 				splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
	 			}
	 			return this.simbol + splitLeft +splitRight;
	 	},
	 	new:function(num, simbol){
	 	this.simbol = simbol ||'';
	 	return this.formatear(num);
	 	}
	}
	//**************************FUNCION PARA CONVERTIR**********************************
	//**********************************************************************************
	var total = (document.getElementById("inputTotal").value);
	var recibido = (document.getElementById("inputAnticipoRecibido").value);
	var balance;
	var cuota;
	var saldo;
	var cuota24;
	var cuota18;
	var cuota12;
	var cuota6;
	var comp = "";

	if(recibido.length != 0){recibido = document.getElementById("inputAnticipoRecibido").value;}
	

	balance = parseFloat(total - recibido).toFixed(2);
	cuota = parseFloat(balance*0.05).toFixed(2);
	saldo = parseFloat(cuota*24).toFixed(2);
	cuota24 = parseFloat(saldo/24).toFixed(2);
	cuota18 = parseFloat(saldo/18).toFixed(2);
	cuota12 = parseFloat(saldo/12).toFixed(2);
	cuota6 = parseFloat(saldo/6).toFixed(2);

	var facturar = Number(recibido) + Number(saldo);
	document.getElementById("inputAnticipoRecibido").value = recibido;
	document.getElementById("inputBalance").value = formatNumber.new(balance);
	document.getElementById("inputCuota").value = formatNumber.new(cuota);
	document.getElementById("inputSaldoFinanciar").value = formatNumber.new(saldo);
	document.getElementById("input24").value = formatNumber.new(cuota24);
	document.getElementById("input18").value = formatNumber.new(cuota18);
	document.getElementById("input12").value = formatNumber.new(cuota12);
	document.getElementById("input6").value = formatNumber.new(cuota6);
	var facturar2 = facturar.toFixed(2);
	document.getElementById("inputFacturar").value = formatNumber.new(facturar2);

	return false;

}

function reiniciar(id){
	//alert("[AVISO]:Todos los campos se han reiniciado!");
	return true;
}


module.exports = {anticipoSugerido, anticipo};