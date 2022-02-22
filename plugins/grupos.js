let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de Alex - Bot [9.0]*

*_➤ Grupos oficiales del Bot:_*
*_1.-_* *https://chat.whatsapp.com/Bs0EAPB8qxf8yR7loELb7W*

*_2.-_* *https://chat.whatsapp.com/DgdjNeD6GSoCij3M5L1RnA*

*_3.-_* *https://chat.whatsapp.com/LEuqnG9NYRULoZurV0ElRP*

*_4.-_* *https://chat.whatsapp.com/FRc7UdRVIGHD2Bfuu1ngAa*

*_5.-_* *https://chat.whatsapp.com/Bk7Wvt1tetg8w5thrHaXti*
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 ALEX BOT [9.0]🔥*', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler
