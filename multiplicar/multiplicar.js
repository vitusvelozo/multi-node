//requireds
const fs = require('fs');
const colors = require('colors');
//const fs = require('express');
//const fs = require('../fs');



let listarTabla = (base, limite = 10) => {
    console.log(`=======================`.red);
    console.log(`tabla de ${ base } `.red);
    console.log(`=======================`.red);
    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}`);
    }
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}



module.exports = {
    crearArchivo,
    listarTabla
};