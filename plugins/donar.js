// NO QUITES NI CAMBIES NADA DE AQUI POR FAVOR
// AGREGA TUS DATOS SI QIERES, PERO NO QUITES LOS MIOS
let handler = async m => m.reply(`
*┏ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┇       「 DONAR 」*
*┣ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┃ ❖ Hola persona hermosa 💙*
*┃ 👉🏻 Aquí tienes algunos datos*
*┃ para que puedas apoyar <3*
*┃*
*┃ -   CLABE: 011-814-000215822740-11* 
*┃ -   BANCO: BBVA CONTINENTAL* 
*┃ -   BENEFICIARIO: Alexander Capiso* 
*┃ -   CONCEPTO: APOYO*  
*┃❖ Contáctame si necesitas otros*
*┃datos y para darte las gracias <3*
*┃❖ wa.me/51951856266*
*┗ ┅ ━━━━━━━━━━━━━ ┅ ━*
`.trim()) 
//PUEDES AGREGAR TUS DATOS, PERO NO QUITES LOS QUE YA ESTÁN PUESTOS
handler.help = ['donar']
handler.tags = ['info']
handler.command = /^(dona|donar|apoyar|dardinero|apoyo)$/i

module.exports = handler