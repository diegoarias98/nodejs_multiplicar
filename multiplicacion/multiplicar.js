const fs = require('fs');

let listartabla = (base) => {

    return new Promise((resolve, reject) => {

        let data = ''

        if (Number(base)) {
            for (let i = 1; i <= 10; i++) {
                data += ` ${base} x ${i} = ${base*i}\n`;
            }
        } else {
            reject("no es numero");
            return;
        }
        resolve(data)

    })
}

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        let data = ''

        if (Number(base)) {
            for (let i = 1; i <= 10; i++) {
                data += ` ${base} x ${i} = ${base*i}\n`;
            }
        } else {
            reject("no es numero");
            return;
        }
        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla${base}.txt`);
            }
        });

    })

}

module.exports = {
    crearArchivo,
    listartabla
}