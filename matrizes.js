const arr = [
    "1° Nível",
    ["2° Nível", 42, true],
    [
        ["3° Nível, 1° item", "Olá, mundo!"],
        ["3° Nível, 1° item", "Olá, mundo!"],
    ],
    []
]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[0][1])
console.log(arr[2])
console.log(arr[2][1][0])

const matriz = [
    ["p1, d1", "p2, d2", "p3, d3", "p4, d4"],
    ["p1, d1", "p2, d2", "p3, d3", "p4, d4"],
    ["p1, d1", "p2, d2", "p3, d3", "p4, d4"],
]


//console.table(matriz)

//matriz.push(["Nova linha"])
//matriz[0].push("Nova coluna")

//console.table(matriz)


for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++){
    const elemento = matriz[i][j]
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
    }
}

