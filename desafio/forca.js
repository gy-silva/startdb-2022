class Forca {
	constructor (palavra){
		this.palavraCerta = palavra;
		this.palavra = [];
		this.vidas = 6;    // Regra 1
		this.estado = "aguardando chute";   //Regra 2
		this.letrasChutadas = [];   //Regra 5
		for (const letra of this.palavraCerta){
			this.palavra.push("_");
		}
	
		
	}
	

  chutar(letra) {
// contar quantidade de letras Regra 3
if (letra.length != 1){
	console.log("tamanho diferente de 1");
	return;
	}
// verificar se ela ja foi chutada  Regra 4
if (this.letrasChutadas.includes(letra)){
	console.log ("letras ja chutadas");
	return;
	} 
// guardar letras nas letras chutadas  Regra 5	 
this.letrasChutadas.push (letra);
// se não estiver na palavra, subtrair uma vida Regra 6
if (!this.palavraCerta.includes (letra)){this.vidas--;}
// se a letra estiver na palavra deve ser substituida e retornar Regra 7
else{
	var i=0;
	var novaPalavra =[]; 
	for (const letraPalavraCerta of this.palavraCerta){
		if (letra==letraPalavraCerta){novaPalavra.push (letra);}
		else {novaPalavra.push (this.palavra[i]);}
		i++;
	}
	this.palavra = novaPalavra;
} 
// caso a quatidade de vidas 0 muda para perdeu Regra 8
if (this.vidas==0) {this.estado = "perdeu";}
// caso acertar muda para ganhou Regra 9 
if (this.palavraCerta==this.palavra.join("")){
	this.estado = "ganhou";
}
}

  buscarEstado() { return this.estado; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;

