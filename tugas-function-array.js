var data = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling(data){
    data.splice(4, 2, "Pria", 'SMA Internasional Metro');
    console.log(data);

    let ttl = data[3].split('/');
    ttl.sort(function(value1, value2){return value1 > value2});
    console.log(ttl);

    ttl2 = ttl.join('-');
    console.log(ttl2);

    data[1].slice(0,15);
    console.log(data[1]);
}


dataHandling(data);
