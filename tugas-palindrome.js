function palindrome(kata){
    function balikKata(kata){
        var ganti = '';
        for (var i = kata.length - 1; i >=0; i--){
            ganti += kata[i];
        }  return ganti;
       }
    balikKata(kata)
    if(kata === balikKata(kata)){
    console.log('true')
    }else {
    console.log('false')
    } 
} 

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false


 
/**/