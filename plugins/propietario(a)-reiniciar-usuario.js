*let handler = async (m, { conn, text }) => {
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)

if(isNaN(text)) {
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return conn.reply(m.chat, `*𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗘 𝗔𝗟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢, 𝗘𝗦𝗖𝗥𝗜𝗕𝗔 𝗦𝗨 𝗡𝗨𝗠𝗘𝗥𝗢 𝗢 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗔𝗟 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗣𝗔𝗥𝗔 𝗥𝗘𝗜𝗡𝗜𝗖𝗜𝗔𝗥 𝗗𝗔𝗧𝗢𝗦*`, m)
if(isNaN(number)) return conn.reply(m.chat, `*𝗘𝗟 𝗡𝗨𝗠𝗘𝗥𝗢 𝗤𝗨𝗘 𝗜𝗡𝗚𝗥𝗘𝗦𝗢 𝗡𝗢 𝗘𝗦 𝗩𝗔𝗟𝗜𝗗𝗢 𝗣𝗔𝗥𝗔 𝗥𝗘𝗜𝗡𝗜𝗖𝗜𝗔𝗥 𝗟𝗢𝗦 𝗗𝗔𝗧𝗢𝗦*`, m)
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
  
let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
let participants = m.isGroup ? groupMetadata.participants : []
let users = m.isGroup ? participants.find(u => u.jid == user) : {}
let number = user.split('@')[0]
  
delete global.global.db.data.users[user]
conn.reply(m.chat, `*𝗦𝗘 𝗥𝗘𝗜𝗡𝗜𝗖𝗜𝗢 𝗔 @${number} 𝗗𝗘 𝗟𝗔 𝗕𝗔𝗦𝗘 𝗗𝗘 𝗗𝗔𝗧𝗢𝗦*`, null, { mentions: [user] })
}}

handler.tags = ['owner']
handler.command = ['restablecerdatos', 'borrardatos', 'deletedatauser'] 
handler.owner = true

export default handler
