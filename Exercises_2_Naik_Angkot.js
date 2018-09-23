/*
1. Diberikan input berupa array
    deklarasi var jarak=0
    deklarasi var arrayKosong=[]
2. Buat rumus untuk menghitung jarak
    antar huruf dg indexOf. simpan ke
    variabel jarak??
    jarakAwal=rute.indexOf(arrPenumpang[i][1])
    jarakAkhir=rute.indexOf(arPenumpang[i][2])
    deklarasi jarak, jarakAwal, dan jarakAkhir di awal setelah looping i

3. buat suatu obj berisikan penumpang
    dan tujuan. Masukkan value tujuan
    dg jarak.
4. push obj ke arrayKosong.
5. tampilkan arrayKosong
*/

function naikAngkot(arrPenumpang) {
    if (arrPenumpang.length < 1) {
        return arrPenumpang
    }

    else {
        rute = ['A', 'B', 'C', 'D', 'E', 'F']
        var arrayKosong = []
        var A = rute.indexOf('A')
        var B = rute.indexOf('B')
        var C = rute.indexOf('C')
        var D = rute.indexOf('D')
        var E = rute.indexOf('E')
        var F = rute.indexOf('F')

        for (var i = 0; i < arrPenumpang.length; i++) {
            var jarak = 0
            var jarakAwal = 0
            var jarakAkhir = 0
            var bayar = 2000
            jarakAwal = rute.indexOf(arrPenumpang[i][1])
            jarakAkhir = rute.indexOf(arrPenumpang[i][2])
            jarak = jarakAkhir - jarakAwal
            bayar = bayar * jarak
            var obj = {
                penumpang: arrPenumpang[i][0],
                naikDari: arrPenumpang[i][1],
                tujuan: arrPenumpang[i][2],
                bayar: bayar
            }
            arrayKosong.push(obj)
        }
    }
    return arrayKosong
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]))
console.log(naikAngkot([]))

