const btnCalc = document.getElementById('calc');
btnCalc.addEventListener("click", () => {
	const peso = Number(document.getElementById('kg').value);
	const altura = Number(document.getElementById('alt').value/100);
	let res = document.getElementById('res');
 	let imc = peso / (altura*altura);
	
		 if (imc < 16){
         res.innerHTML = 'baixo peso(grau 3)';
       } else if(imc < 17){
         res.innerHTML = 'baixo peso(grau 2)';
       } else if(imc < 18.5){
         res.innerHTML = 'um pouco abaixo do peso(grau 1)';
       } else if(imc < 25){
         res.innerHTML = 'parabens! você está com o peso ideal';
       } else if(imc < 30){
         res.innerHTML = 'um pouco acima do peso(sobrepeso, grau 1)';
       } else  if(imc < 35){
         res.innerHTML = 'obesidade(grau 2)';
       } else if(imc > 39.9){
			res.innerHTML = 'obesidade(grau 3)';
       }
});