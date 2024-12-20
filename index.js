class hero{
	constructor(tipo, ataque, nome, idade){
		this.tipo = tipo
        this.ataque = ataque
        this.nome = nome
        this.idade = idade
	}
    
    escrever(){
    	console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
        console.log("O bravo guerreiro de nome " + this.nome + " tem " + this.idade + " anos")
    }     
}

let saida = new hero("Guerreiro", "a espada", "Jovir", "24")
saida.escrever()
