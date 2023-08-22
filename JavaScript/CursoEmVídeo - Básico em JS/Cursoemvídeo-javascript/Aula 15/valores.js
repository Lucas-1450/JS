let valores = [8, 1, 7, 4, 2, 9]

/*
Console.log(valores[0])
Console.log(valores[1])
Console.log(valores[2])
Console.log(valores[3])
Console.log(valores[4])
Console.log(valores[5])

simplificando ______________>>

for(let pos = 0;pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/


for(let pos in valores){   //simplificação mais ainda
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}












/*Saída: ______________________>>

A posição 0 tem o valor 8
A posição 1 tem o valor 1
A posição 2 tem o valor 7
A posição 3 tem o valor 4
A posição 4 tem o valor 2
A posição 5 tem o valor 9

*/

num.indexOf(7) // 3
num.indexOf(3) // -1  (não há o valor dentro do vetor)