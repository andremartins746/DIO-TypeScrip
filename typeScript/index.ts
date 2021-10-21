const input = document.querySelector('input') as HTMLInputElement // aqui eu falou q a constante input é do tipo ou da interface HTMLinputElement
console.log(input.value) // value input, se eu nao tivesse colocado o tipo HTMLInputElement isso nao iria funcionar 

interface IAnimal {
    nome: String,
    idade: Number,
    terreno?: 'terrestre' | 'aquatico', // opcicional paremetro
    latir?(): String,
}


const cachorro: IAnimal = {
    nome: 'bisteca',
    idade: 9,
    latir: () => "hohohohohoho"

}


const foca: IAnimal = {
    nome: 'eu sou uma foca',
    idade: 1,
    terreno: 'aquatico'
}


type escolhido = 'cachorro' | 'foca';

function verify(escolhido: escolhido) {
    if(escolhido === 'cachorro'){
        console.log(
            cachorro.nome,
            cachorro.idade,
        )
    }
    else{
        console.log(
            foca.nome,
            foca.idade
        )

    }
}

verify("cachorro")
//verify("foca")

console.log(cachorro.latir())



/*
class leao implements IAnimal {
    nome: 'juana'
    idade: 28
    terreno: 'terrestre'
    latir: () => "hohohohohoho"


}
*/

function doar <T>(arr: T[], num: T) {
    return arr.map((data) => data)
}

doar([1,2,3], 1)