let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  await conn.send3Button(m.chat, `
*ミ💖 Hola estimado usuario 💖彡*

*ミ🤖 Estado del Bot 🤖彡*
*=> Bot activo ✔️*
*=> Bot uso público ✔️*
`.trim(), '©Alex - Bot [9.0]', '🔷️ MENÚ 🔷', `${usedPrefix}menu`, '🔶️ MENÚ SIMPLE 🔶️', `${usedPrefix}menusimple`, '💠️ INFORMACION 💠️', `${usedPrefix}menuaudios`)
}
handler.command = /^(estado|status|estate|state|stado|stats)$/i

handler.exp = 0

module.exports = handler