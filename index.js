let reiDoMato = {
    name: "zepelin",
    age: 30,
    tipo: {
        0: ["Guerreiro","Espada"],
        1: ["Mago", "Magia"],
        2: ["Monge", "Artes Marciais"],
        3: ["Ninja" , "Shuriken"],
    }
}

function atacar(reiDoMato){
    console.log(`o nome do herói é: ${reiDoMato.name}`)
    console.log(`a idade é: ${reiDoMato.age} anos`)
    
    for(let index in reiDoMato.tipo){
        let [tipoH, metH] = reiDoMato.tipo[index]
        console.log(` o ${tipoH} atacou usando ${metH}`)
    }
}

atacar(reiDoMato)
