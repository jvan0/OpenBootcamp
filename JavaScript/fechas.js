// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// - La fecha de hoy
// - La fecha de tu nacimiento

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
// - Una variable que contenga el día de tu nacimiento

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
Date();
Date(1999,03,12);
const compare = (Date()>Date(1999,03,12));
const nacimiento = new Date(1999,04 -1,12);
const mesNacimiento= nacimiento.getMonth() +1;
const anyoNacimiento = nacimiento.getFullYear()

