let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
let user = global.db.data.users[who]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!global.db.data.settings[conn.user.jid].restrict) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsSoloOwner']()}`, fkontak, m) 
if (!text) throw `*𝗨𝗦𝗘 𝗗𝗘 𝗟𝗔 𝗦𝗜𝗚𝗨𝗜𝗘𝗡𝗧𝗘 𝗠𝗔𝗡𝗘𝗥𝗔:*\n*${usedPrefix + command} 573005094862*\n\n*𝗨𝗦𝗘 𝗧𝗛𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗞𝗘 𝗧𝗛𝗜𝗦:*\n*${usedPrefix + command} 573005094862*`
if (text.includes('+')) throw  `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗡𝗨𝗠𝗘𝗥𝗢 𝗧𝗢𝗗𝗢 𝗝𝗨𝗡𝗧𝗢 𝗦𝗜𝗡 𝗘𝗟 +*\n\n*𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗡𝗨𝗠𝗕𝗘𝗥 𝗔𝗟𝗟 𝗧𝗢𝗚𝗘𝗧𝗛𝗘𝗥 𝗪𝗜𝗧𝗛𝗢𝗧 𝗧𝗛𝗘 +*`
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `¡𝗛𝗼𝗹𝗮!, 𝗺𝗲 𝗽𝗿𝗲𝘀𝗲𝗻𝘁𝗼, 𝘀𝗼𝘆 𝗚𝗮𝘆𝗕𝗼𝘁, 𝘂𝗻𝗮 𝗽𝗲𝗿𝘀𝗼𝗻𝗮 𝗱𝗲𝗹 𝗴𝗿𝘂𝗽𝗼 𝘂𝘁𝗶𝗹𝗶𝘇𝗼́ 𝘂𝗻 𝗰𝗼𝗺𝗮𝗻𝗱𝗼 𝗽𝗮𝗿𝗮 𝗮𝗻̃𝗮𝗱𝗶𝗿𝘁𝗲 𝗮𝗹 𝗴𝗿𝘂𝗽𝗼, 𝗽𝗲𝗿𝗼 𝗻𝗼 𝗽𝘂𝗱𝗲 𝗮𝗴𝗿𝗲𝗴𝗮𝗿𝘁𝗲, 𝗮𝘀𝗶 𝗾𝘂𝗲 𝘁𝗲 𝗺𝗮𝗻𝗱𝗼 𝗹𝗮 𝗶𝗻𝘃𝗶𝘁𝗮𝗰𝗶𝗼́𝗻 𝗽𝗮𝗿𝗮 𝗾𝘂𝗲 𝗲𝗻𝘁𝗿𝗲𝘀. ¡𝗧𝗲 𝗲𝘀𝗽𝗲𝗿𝗮𝗺𝗼𝘀!\n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`*@${who.split`@`[0]}*\n*Enviando invitacion a su privado...*`) 

}
handler.help = ['add', '+'].map(v => v + ' número')
handler.tags = ['group']
handler.command = /^(add|agregar|invitar|invite|añadir|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler