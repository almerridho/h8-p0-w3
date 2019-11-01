/*var no = 12356
var string = no.toString()

console.log(string)

function pasanganTerbesar(num){
    string = num.toString()
    console.log(string)
    var a = string.slice(i,i++)
    var b = a + 1
    for (i = 0; i < string.length; i++){

    }
    if (var a > b){
        console.log(a)
    }else (var b > a){
        console.log(b)
    }
}
*/



function pasanganTerbesar(num){
    let arr = [];
    var angka = String(num);
    var maxNumber = 0;
    for( var i = 0; i < angka.length - 1; i++){
        if (angka[i]+angka[i+1] > maxNumber){
           maxNumber = angka[i]+angka[i+1]
        arr.push(maxNumber)
        } else if (i === 0){
           maxNumber = num[i]
        }
    }
    return maxNumber;
}   

console.log(pasanganTerbesar(9869532910))
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99