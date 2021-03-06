let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './Menu2.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
//    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
*_γπ Hola ${username} πε½‘_*

*<EXPLICACION/>*
- Hola, soy Alex Cap, el creador del bot; en resumen el bot es una inteligencia artificial creada con el fin de brindar servicios a personas y/o grupos en el que este agregado. Cabe recalcar que este bot esta libre de virus y por lo tanto *"NO"* es peligroso, tiene funciones como:
 
 πΎ Crear stickers.
 πΎ Descargar musica y videos.
 πΎ Resolver Problemas matematicos.
 πΎ Personalizar y/o crear logos.
 πΎ Llamar a todos los miembros de un grupo.
 πΎ Tiene funciones para jugar.
 πΎ Tiene funciones basicas para grupos.
 πΎ Tambien hay comandos +18 (Pidele al creador que te brinde el comando para ver sus comandos)
 πΎ Funciones Extras
 
*_γ ALEX BOT 9.0  γ_*`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menu2']
handler.tags = ['General']
handler.command = /^(menu2|audios|menΓΊ2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
