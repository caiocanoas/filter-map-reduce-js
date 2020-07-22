const pets = [
    {
        name: "rex",
        type: "dog",
        age: 9,
        peso: 15
    },
    {
        name: "chana",
        type: "cat",
        age: 5,
        peso: 3
    },
    {
        name: "nemo",
        type: "fish",
        age: 1,
        peso: 0.01
    },
    {
        name: "epona",
        type: "horse",
        age: 22,
        peso: 200
    },
    {
        name: "policarpio",
        type: "donkey",
        age: 7,
        peso: 150
    },
    {
        name: "esguicho",
        type: "turtle",
        age: 112,
        peso: 55
    }
]

const ehMenorQueSeis = (numero) => {
    return numero < 6
}

const youngPets = pets.filter(({age}) => ehMenorQueSeis(age))

const petNames = pets.map((pet) => {
    return pet.name // + ' ' + pet.age
})

// console.log(pets)
// console.log(youngPets)
// console.log(petNames)