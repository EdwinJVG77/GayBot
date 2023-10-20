//import { areJidsSameUser } from '@adiwajshing/baileys'
let areJidsSameUser =  (await import(global.baileys)).default
let handler = async (m, { conn, text, participants, args, command }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "fantasmas": 
if(total == 0) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}*𝗘𝗦𝗧𝗘 𝗚𝗥𝗨𝗣𝗢 𝗡𝗢 𝗧𝗜𝗘𝗡𝗘 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗔𝗦 :D*`, m) 
m.reply(`⚠️ *𝗥𝗘𝗩𝗜𝗦𝗜𝗢𝗡 𝗗𝗘 𝗜𝗡𝗔𝗖𝗧𝗜𝗩𝗢𝗦* ⚠️\n\n*𝗚𝗥𝗨𝗣𝗢: ${await conn.getName(m.chat)}*\n*𝗠𝗜𝗘𝗠𝗕𝗥𝗢𝗦 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢: ${sum}*\n\n*[ 👻 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗔𝗦 👻 ]*\n${sider.map(v => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*𝗡𝗢𝗧𝗔: 𝗘𝗦𝗧𝗢 𝗣𝗨𝗘𝗗𝗘 𝗡𝗢 𝗦𝗘𝗥 ℅100 𝗔𝗖𝗘𝗥𝗧𝗔𝗗𝗢, 𝗘𝗟 𝗕𝗢𝗧 𝗜𝗡𝗜𝗖𝗜𝗔 𝗘𝗟 𝗖𝗢𝗡𝗧𝗘𝗢 𝗗𝗘 𝗠𝗘𝗡𝗦𝗔𝗝𝗘𝗦 𝗔𝗣𝗔𝗥𝗧𝗜𝗥 𝗗𝗘 𝗤𝗨𝗘 𝗦𝗘 𝗔𝗖𝗧𝗜𝗩𝗢 𝗘𝗡 𝗘𝗦𝗧𝗘 𝗡𝗨𝗠𝗘𝗥𝗢*`, null, { mentions: sider }) 
  break   
case "kickfantasmas":  
        if(total == 0) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}*𝗘𝗦𝗧𝗘 𝗚𝗥𝗨𝗣𝗢 𝗡𝗢 𝗧𝗜𝗘𝗡𝗘 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗔𝗦 :D*`, m) 
       await m.reply(`⚠️ *𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗖𝗜𝗢𝗡 𝗗𝗘 𝗜𝗡𝗔𝗖𝗧𝗜𝗩𝗢𝗦* ⚠️\n\n*𝗚𝗥𝗨𝗣𝗢: ${await conn.getName(m.chat)}*\n*𝗠𝗜𝗘𝗠𝗕𝗥𝗢𝗦: ${sum}*\n\n*[ 👻 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗥 𝗙𝗔𝗡𝗧𝗔𝗦𝗠𝗔𝗦 👻 ]*\n${sider.map(v => '@' + v.replace(/@.+/, '')).join('\n')}\n\n*𝗘𝗟 𝗕𝗢𝗧 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗥𝗔 𝗔 𝗟𝗔 𝗟𝗜𝗦𝗧𝗔 𝗠𝗘𝗡𝗖𝗜𝗢𝗡𝗔𝗗𝗔, 𝗘𝗠𝗣𝗘𝗭𝗔𝗡𝗗𝗢 𝗘𝗡 20 𝗦𝗘𝗚𝗨𝗡𝗗𝗢𝗦, 𝗬 𝗖𝗔𝗗𝗔 10 𝗦𝗘𝗚𝗨𝗡𝗗𝗢𝗦 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗥𝗔 𝗨𝗡 𝗡𝗨𝗠𝗘𝗥𝗢*`, null, { mentions: sider }) 
       await delay(1 * 10000)
       let chat = global.db.data.chats[m.chat]
       chat.welcome = false
       try{
       
         let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
       let kickedGhost = sider.map(v => v.id).filter(v => v !== conn.user.jid)
       for (let user of users)
           if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin)
        {
        let res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
        kickedGhost.concat(res)
       await delay(1 * 10000)
       }} finally{
        chat.welcome = true
       }
break            
}}
handler.command = /^(fantasmas|kickfantasmas)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


    //desarrollado por https://github.com/ReyEndymion
    //participa en desactivacion de despedida https://github.com/BrunoSobrino/


