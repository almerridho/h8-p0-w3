
function balikString(str) {
    var ganti = "";
    for (var i = str.length - 1; i >= 0; i--) {
        ganti += str[i];
    }
    return ganti;
}


console.log(balikString('Halo teman-teman semua!'))
