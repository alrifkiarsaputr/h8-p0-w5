/*
1. Diberikan input array 3D.
    deklarasi variabel jumlah=0
2. Buat rumus untuk menambahkan indeks2
    indeks dalam array.
3. Tampung hasil penambahan ke variabel
    jumlah.

Mulai dari indeks[0][0][0], tambah dg
indeks [0][0][1], lalu tambah dg 
indeks[0][0][2]. Semua ini tampung ke jumlah.

Mulai dari indeks[0][1][0]+
indeks[0][1][0]+
indeks[0][1][1]+
indeks[0][1][2]

*/

function deepSum(arr) {
    var jumlah = 0

    if (arr.length<1) {
        return 'No number'
    }
    else {


        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                for (var k = 0; k < arr[i][j].length; k++) {
                    jumlah = jumlah + arr[i][j][k]
                }
            }
        }
    }
    return jumlah
}

console.log(deepSum([
    [
        [4, 5, 6],
        [9, 1, 2, 10],
        [9, 4, 3]
    ],
    [
        [4, 14, 31],
        [9, 10, 18, 12, 20],
        [1, 4, 90]
    ],
    [
        [2, 5, 10],
        [3, 4, 5],
        [2, 4, 5, 10]
    ]
]))

console.log(deepSum([
    [
        [20, 10],
        [15],
        [1, 1]
    ],
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [2],
        [9, 11]
    ],
    [
        [3, 5, 1],
        [1, 5, 3],
        [1]
    ],
    [
        [2]
    ]
]))

console.log(deepSum([]))