let amigo = {nome:'josé', sexo:'Masculino', peso:'85,6', engordar(p=0){console.log('Engordou') this.peso += p}}

amigo.engordar(2) 
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`) 