 /* Aula de array */
// Nessa aula estamos aprendendo como usar variaveis compostas(array)
let num = [5,8,2]
console.log(num)
num[3] = 6
console.log(num) 
for (let pos = 0; pos < num.length;pos++){
    console.log(`O ${pos+1}° numero é ${num[pos]}`)
}
let pos = num.indexOf(8)
if(pos == -1){
    console.log('Numero não encontrado')
} else{
    console.log(`O valor esta na posição ${pos}`)
}