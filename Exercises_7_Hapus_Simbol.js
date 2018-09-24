/*
Algoritma
1. Diberikan input berupa string
2. Buat suatu fungsi yg dapat menghapus unsur2 pada string yg bukan a-z dan bukan 0-9.
    2.a Cek indeks ke-0. apakah huruf atau number.
        Jika indeks ke i === huruf atau indeks ke i === angka, maka simpan huruf ke variabel kata.
        Jika indeks ke i !== huruf atau indeks ke i !== angka, maka replace simbol dg string kosong.

3. Panggil fungsi untuk menampilkan hasil
*/

function hapusSimbol (str) {
    var strBersih = str.replace(/[^a-z0-9]+/g,"")

    return strBersih
}

console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100