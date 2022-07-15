const fs = require('fs');

//write Sync
//fs.writeFileSync('data/tes2.txt', 'Hai Andri Selamat Datang');

//write Async
// fs.writeFile('data/tes2.txt', 'Hai Budi Sampai Jumpa', (e) => {
//     console.log(e);
// });

//readFile dgn Sync
// const a1 = fs.readFileSync('data/tes2.txt', 'utf-8');
// console.log(a1);
//atau
// const a1 = fs.readFileSync('data/tes2.txt');
// console.log(a1.toString());

//readFile dgn Async
// fs.readFile('data/tes2.txt', 'utf-8', (e, data) => {
//     if (e) throw e;
//     console.log(data);
// })

// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukkan Nama : ', (nama) => {
    rl.question('Berapa Umur Anda : ', (umur) => {
        const kontak = {nama , umur};
        const file = fs.readFileSync('data/kontak.json','utf-8');
        const kontaks = JSON.parse(file);
        kontaks.push(kontak);
        fs.writeFileSync('data/kontak.json', JSON.stringify(kontaks));
        console.log(`Terima kasih ${nama} (${umur} tahun) sudah memasukkan data`);
        rl.close();
    })
});
