//
//By @NeKosmic || https://github.com/NeKosmic/
//

import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
  if (m.isBaileys && m.fromMe)
       return !0
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let delet = m.key.participant
  let bang = m.key.id
  let name = await conn.getName(m.sender)
  let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": '𝗚𝗮𝘆𝗕𝗼𝘁', 'jpegThumbnail': null}}}
   if (chat.antiTraba && m.text.length > 4000) { //Cantidad máxima de caracteres aceptados en un mensaje//
    if (isAdmin) return conn.sendMessage(m.chat, { text: `*@${m.sender.split("@")[0]} 𝗦𝗘 𝗗𝗘𝗧𝗘𝗖𝗧𝗢 𝗨𝗡 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗖𝗢𝗡 𝗠𝗨𝗖𝗛𝗢𝗦 𝗖𝗔𝗥𝗔𝗖𝗧𝗘𝗥𝗘𝗦, 𝗖𝗢𝗠𝗢 𝗘𝗥𝗘𝗦 𝗔𝗗𝗠𝗜𝗡 𝗡𝗢 𝗦𝗘𝗥𝗔𝗦 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗗𝗢 -.-*`, mentions: [m.sender] }, { quoted: fakemek })
    conn.sendMessage(m.chat, `*𝗦𝗘 𝗗𝗘𝗧𝗘𝗖𝗧𝗢 𝗨𝗡 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗤𝗨𝗘 𝗖𝗢𝗡𝗧𝗜𝗘𝗡𝗘 𝗠𝗨𝗖𝗛𝗢𝗦 𝗖𝗔𝗥𝗔𝗖𝗧𝗘𝗥𝗘𝗦*\n`, `${isBotAdmin ? '' : '*𝗡𝗢 𝗦𝗢𝗬 𝗔𝗗𝗠𝗜𝗡𝗜𝗦𝗧𝗥𝗔𝗗𝗢𝗥, 𝗡𝗢 𝗣𝗨𝗘𝗗𝗢 𝗛𝗔𝗖𝗘𝗥 𝗡𝗔𝗗𝗔* :/'}`, m)
    //await conn.sendButton(m.chat, `*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]*\n`, `${isBotAdmin ? '' : 'No soy administrador, no puedo hacer nada :/'}`, author, ['[ ᴅᴇsᴀᴄᴛɪᴠᴀ ᴀɴᴛɪᴛʀᴀʙᴀ ]', usedPrefix+'apagar antitraba'], fakemek )
        if (isBotAdmin) {
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
        	setTimeout(() => { 
        	conn.sendMessage(m.chat, { text: `*𝗘𝗟 𝗡𝗨𝗠𝗘𝗥𝗢: wa.me/${m.sender.split("@")[0]}*\n*𝗔𝗟𝗜𝗔𝗦: ${name}*\n*𝗔𝗖𝗔𝗕𝗔 𝗗𝗘 𝗘𝗡𝗩𝗜𝗔𝗥 𝗨𝗡 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗤𝗨𝗘 𝗖𝗢𝗡𝗧𝗜𝗘𝗡𝗘 𝗠𝗨𝗖𝗛𝗢𝗦 𝗖𝗔𝗥𝗔𝗖𝗧𝗘𝗥𝗘𝗦 𝗤𝗨𝗘 𝗣𝗨𝗘𝗗𝗘 𝗢𝗖𝗔𝗦𝗜𝗢𝗡𝗔𝗥 𝗙𝗔𝗟𝗟𝗢𝗦 𝗘𝗡 𝗟𝗢𝗦 𝗗𝗜𝗦𝗣𝗢𝗦𝗜𝗧𝗜𝗩𝗢𝗦*`, mentions: [m.sender] }, { quoted: fakemek })
        }, 0)
        setTimeout(() => { 
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }, 1000)
        } else if (!bot.restrict) return m.reply(`${lenguajeGB['smsSoloOwner']()}`)
    }
    return !0
} 
