const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukkan no hp anda : ', (nohp) => {
        fs.writeFile('data/data.json', {
            nama : `${nama}`,
            nohp : `${nohp}`,
        }, (e) => console.log(e));
        // console.log(`Terima kasih ${nama}, sudah menginputkan ${nohp}`);
        rl.close();
    });
});