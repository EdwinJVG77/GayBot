import fetch from 'node-fetch'
import fs from 'fs' 

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, text }) => { 
//try{
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'

let titulo = [ 
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.welcome ? '✅' : '❌' : lenguajeGB.smsNoGg()}`, 
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.detect ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.autolevelup ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaOw() + ' ' + `${bot.restrict ? '✅' : '❌'}`,    
lenguajeGB.smsParaOw() + ' ' + `${bot.antiCall ? '✅' : '❌'}`,
lenguajeGB.smsParaOw() + ' ' + `${bot.antiSpam ? '✅' : '❌'}`,	
lenguajeGB.smsParaOw() + ' ' + `${global.opts['self'] ? '❌' : '✅'}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.modoadmin ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaOw() + ' ' + `${global.opts['autoread'] ? '✅' : '❌'}`, 
lenguajeGB.smsParaOw() + ' ' + `${bot.temporal ? '✅' : '❌'}`,      
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.stickers ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.autosticker ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.reaction ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.audios ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.modohorny ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antitoxic ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.antiver ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.delete ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antifake ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,  
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink2 ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTiktok ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiYoutube ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTelegram ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiFacebook ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,   
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiInstagram ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTwitter ? '✅' : '❌' : lenguajeGB.smsNoGg()}`,    
lenguajeGB.smsParaOw() + ' ' + `${global.opts['pconly'] ? '✅' : '❌'}`,  
lenguajeGB.smsParaOw() + ' ' + `${global.opts['gconly'] ? '✅' : '❌'}`]

let nombre = [ lenguajeGB.smsWel1(), lenguajeGB.smsDete1(), lenguajeGB.smsANivel1(), lenguajeGB.smsRestri1(), lenguajeGB.smsLlamar1(), lenguajeGB.smsAntiSp1(), lenguajeGB.smsModP1(), lenguajeGB.smsModAd1(), lenguajeGB.smsLect1(), lenguajeGB.smsTempo1(), lenguajeGB.smsStik1(), lenguajeGB.smsStickA1(), lenguajeGB.smsReacc1(), lenguajeGB.smsAudi1(), lenguajeGB.smsModHor1(), lenguajeGB.smsAntitoc1(), lenguajeGB.smsModOb1(), lenguajeGB.smsAntiEli1(), lenguajeGB.smsAntiInt1(), lenguajeGB.smsAntiE1(), lenguajeGB.smsAntiEE1(), lenguajeGB.smsAntiTT1(), lenguajeGB.smsAntiYT1(), lenguajeGB.smsAntiTEL1(), lenguajeGB.smsAntiFB1(),
lenguajeGB.smsAntiIG1(), lenguajeGB.smsAntiTW1(), lenguajeGB.smsSOLOP1(), lenguajeGB.smsSOLOG1()]

let descripción = [ lenguajeGB.smsWel2(), lenguajeGB.smsDete2(), lenguajeGB.smsANivel2(), lenguajeGB.smsRestri2(), lenguajeGB.smsLlamar2(), lenguajeGB.smsAntiSp2(), lenguajeGB.smsModP2(), lenguajeGB.smsModAd2(), lenguajeGB.smsLect2(), lenguajeGB.smsTempo2(), lenguajeGB.smsStik2(), lenguajeGB.smsStickA2(), lenguajeGB.smsReacc2(), lenguajeGB.smsAudi2(), lenguajeGB.smsModHor2(), lenguajeGB.smsAntitoc2(), lenguajeGB.smsModOb2(), lenguajeGB.smsAntiEli2(), lenguajeGB.smsAntiInt2(), lenguajeGB.smsAntiE2(), lenguajeGB.smsAntiEE2(), lenguajeGB.smsAntiTT2(), lenguajeGB.smsAntiYT2(), lenguajeGB.smsAntiTEL2(), lenguajeGB.smsAntiFB2(),
lenguajeGB.smsAntiIG2(), lenguajeGB.smsAntiTW2(), lenguajeGB.smsSOLOP2(), lenguajeGB.smsSOLOG2()]

let comando = [ "welcome", "detect", "autolevelup", "restrict", "anticall", "antispam", "public", "modoadmin", "autoread", "temporal", "stickers", "autosticker", "reaction", "audios", "modohorny", "antitoxic", "antiviewonce", "antidelete", "antifake", "antilink", "antilink2", "antitiktok", "antiyoutube", "antitelegram", "antifacebook",
"antinstagram", "antitwitter", "pconly", "gconly"]

let sections = Object.keys(titulo, nombre, descripción, comando).map((v, index) => ({ title: `${titulo[v]}`,
rows: [{ title: `${nombre[v]} : ${command} ${comando[v]}`, description: `${1 + index}. ${descripción[v]}`, rowId: usedPrefix + command + ' ' + comando[v], }], }))

let name = await conn.getName(m.sender)
/*const listMessage = {
text: `${lenguajeGB.smsConfi10()}`,
footer: `╭━━━✦ *${lenguajeGB.smsConfi1()}* ✦━━━━⬣
┃
┃🌟 ${lenguajeGB.smsConfi2()} *${name}*
┃
${lenguajeGB.smsConfi3()}
${lenguajeGB.smsConfi4()}
┃
${lenguajeGB.smsConfi5()}
${lenguajeGB.smsConfi6()}
${lenguajeGB.smsConfi7()}
${lenguajeGB.smsConfi8()}
${m.isGroup ? `┃` : `┃\n${lenguajeGB.smsConfi9()}`}
╰━━━━━✦ *${vs}* ✦━━━━⬣
${wm}`,
title: null,
buttonText: `⚙️ ${lenguajeGB.smsConfi1()} ⚙️`,
sections }*/

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false

switch (type) {
case 'welcome': case 'bienvenida':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
    
case 'detect': case 'avisos':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
		
case 'antidelete': case 'antieliminar': case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
    
case 'public': case 'publico':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
    
case 'antilink': case 'antienlace':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
    
case 'antilink2': case 'antienlace2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
		
case 'antitiktok': case 'antitk': case 'antitik':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTiktok = isEnable 
break
		
case 'antiyoutube': case 'antiyt':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiYoutube = isEnable 
break
		
case 'antitelegram': case 'antitl': case 'antitele': case 'antitg': case 'antitel':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTelegram = isEnable 
break
		
case 'antifacebook': case 'antifb': case 'antifbook':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiFacebook = isEnable 
break
		
case 'antiinstagram': case 'antinstagram': case 'antiig': case 'antig': case 'antiinsta': case 'antinsta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiInstagram = isEnable 
break
		
case 'antitwitter': case 'antitw': case 'antitwit': case 'antitwter': case 'antitwiter': case 'antiTwr':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTwitter = isEnable 
break
    
case 'modohorny': case 'modocaliente':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
    
case 'stickers':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.stickers = isEnable          
break
    
case 'temporal':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.temporal = isEnable
break
		
case 'autolevelup': case 'autonivel': case 'nivelautomatico':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autolevelup = isEnable          
break
    
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
    
case 'reaction': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break
		
case 'antitoxic': case 'antitoxicos': case 'antimalos':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antitoxic = isEnable
break
    
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
    
case 'antiver': case 'modover': case 'modoobservar': case 'modobservar': case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break
		
case 'antiinternacional': case 'antinternacional': case 'antinternational': case 'antifake': case 'antifalsos': case 'antivirtuales': case 'antiextranjeros':		
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antifake = isEnable          
break
		
case 'jadibotmd': case 'modojadibot': case 'serbotmd': case 'modoserbot': 
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.jadibotmd = isEnable
break 
    
case 'restrict': case 'restringir':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
    
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
    
case 'autoread': case 'autovisto':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
    
case 'anticall': case 'antillamar':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
		
case 'antispam':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.antiSpam = isEnable
break
 
case 'modoadmin': case 'soloadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
   
case 'pconly': case 'privateonly': case 'soloprivados':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
    
case 'gconly': case 'grouponly': case 'sologrupos':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break

case 'antiprivado':
case 'privado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break

case 'antitrabas':
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break

case 'simi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break

case 'swonly': case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.reply(m.chat, `${lenguajeGB.smsConfi10()}\n\n👋🏻 ${lenguajeGB.smsConfi2()} *@${toUser}*

${lenguajeGB.smsConfi3()}
${lenguajeGB.smsConfi4()}

${lenguajeGB.smsConfi5()}
${lenguajeGB.smsConfi6()}
${lenguajeGB.smsConfi7()}
${lenguajeGB.smsConfi8()}
${m.isGroup ? `` : `${lenguajeGB.smsConfi9()}`}


${m.isGroup ? chat.antiTwitter ? '✅' : '❌' : lenguajeGB.smsNoGg()}

*𝗢𝗣𝗖𝗜𝗢𝗡: ✨ ┃ ${lenguajeGB.smsWel1()}*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} welcome*
*𝗘𝗦𝗧𝗔𝗗𝗢:* ${m.isGroup ? chat.welcome ? '✅' : '❌' : lenguajeGB.smsNoGg()}
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* ${lenguajeGB.smsWel2()}

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 🌎 ┃ ${lenguajeGB.smsModP1()}*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} public*
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* ${lenguajeGB.smsModP2()}
*𝗡𝗢𝗧𝗔: Este comando solo podrá ser usado por owners del Bot.*

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 🥵 ┃ 𝗠𝗢𝗗𝗢 𝗛𝗢𝗥𝗡𝗬*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} modohorny*
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* Activa o desactiva los comandos +18 en el grupo.*

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 🔗 ┃ 𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} antilink
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* Activa o desactiva el anti-enlaces de WhatsApp.
*𝗡𝗢𝗧𝗔: Se necesita tener activo el restrict.

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 🔗 ┃ 𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞 2*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} antilink2
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* Activa o desactiva el anti-enlaces que inician en HTTPS.
*𝗡𝗢𝗧𝗔: Se necesita tener activo el restrict.

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 🔎 ┃ 𝗗𝗘𝗧𝗘𝗖𝗧*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} detect
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* Activa o desacriva las notificaciones de cambios en el grupo.

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 🔎 ┃ 𝗗𝗘𝗧𝗘𝗖𝗧 2*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} detect2
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* Detecta modificaciones en el grupo y mantiene una mejor gestion.

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 ❗ ┃ 𝗥𝗘𝗦𝗧𝗥𝗜𝗖𝗧*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} restrict
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* Activa o desactiva las restricciones del Bot, como la de sacar o agregar personas a un grupo.
*𝗡𝗢𝗧𝗔: Este comando solo podrá ser usado por owners del Bot.

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 ☑️ ┃ 𝗔𝗨𝗧𝗢𝗥𝗘𝗔𝗗*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} autoread
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* Marca como leido los mensajes y los estados automáticamente.
*𝗡𝗢𝗧𝗔: Este comando solo podrá ser usado por owners del Bot.

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 🔊 ┃ 𝗔𝗨𝗗𝗜𝗢𝗦*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} audios
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* Activa o desactiva los comandos de audios sin prefijos, en el grupo.

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 👾 ┃ 𝗔𝗨𝗧𝗢𝗦𝗧𝗜𝗖𝗞𝗘𝗥*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} autosticker 
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* Todas las imagenes o videos enviados en el grupo se convierten en stickers. 

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 💬 ┃ 𝗣𝗖𝗢𝗡𝗟𝗬*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} pconly
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* El Bot solo responderá a los comandos si es un chat privado.
*𝗡𝗢𝗧𝗔: Este comando solo podrá ser usado por owners del Bot.

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 🏢 ┃ 𝗚𝗖𝗢𝗡𝗟𝗬*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} gconly
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* El Bot solo respondera a los comandos si es un grupo. 
*𝗡𝗢𝗧𝗔: Este comando solo podrá ser usado por owners del Bot.

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 ❌ ┃ 𝗔𝗡𝗧𝗜𝗩𝗜𝗘𝗪𝗢𝗡𝗖𝗘* 
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} antiviewonce
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* Las imagenes enviadas para ver solo una vez, son reenviadas normal por el Bot. 

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 📵 ┃ 𝗔𝗡𝗧𝗜𝗟𝗟𝗔𝗠𝗔𝗗𝗔𝗦*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} anticall
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* El Bot bloquerá a las personas que llamen al Bot. 
*𝗡𝗢𝗧𝗔: Este comando solo podra ser usado por owners del Bot.

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 💬 ┃ 𝗔𝗡𝗧𝗜𝗣𝗥𝗜𝗩𝗔𝗗𝗢*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} antiprivado
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* El Bot bloquerá a las personas que escriban al privado del Bot. 
*𝗡𝗢𝗧𝗔: Este comando solo podrá ser usado por owners del Bot.

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 🤬 ┃ 𝗔𝗡𝗧𝗜𝗧𝗢𝗫𝗜𝗖*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} antitoxic
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* Detecta la malas palabras y advierte al participante del grupo, antes de ser eliminado.
*𝗡𝗢𝗧𝗔: Se necesita tener activo el restrict.

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 🕸️ ┃ 𝗔𝗡𝗧𝗜𝗧𝗥𝗔𝗕𝗔𝗦*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} antitraba
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* El Bot detecta textos largos que podrian ser virus y causar lag en el chat y elimina al usuario.
*𝗡𝗢𝗧𝗔: Se necesita tener activo el restrict.

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 👎 ┃ 𝗔𝗡𝗧𝗜𝗔𝗥𝗔𝗕𝗘𝗦*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} antiarabes
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* Si un numero árabe se uné al grupo, el Bot lo elimina automaticamente.
*𝗡𝗢𝗧𝗔: Se necesita tener activo el welcome y el restrict.

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 👎 ┃ 𝗔𝗡𝗧𝗜𝗔𝗥𝗔𝗕𝗘𝗦 2*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} antiarabes2
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* Si un numero árabe escribe en el grupo, el Bot lo elimina automaticamente.
*𝗡𝗢𝗧𝗔: Se necesita tener activo el restrict.

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 🤖 ┃ 𝗠𝗢𝗗𝗘𝗝𝗔𝗗𝗜𝗕𝗢𝗧*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} modejadibot
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* Activa o desactiva el uso del comando para sub bots (${usedPrefix}serbot / ${usedPrefix}jadibot). 
*𝗡𝗢𝗧𝗔: Este comando solo podrá ser usado por owners del Bot.

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 👑 ┃ 𝗠𝗢𝗗𝗢 𝗔𝗗𝗠𝗜𝗡*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} modoadmin
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* El Bot solo responderá a los admins del grupo.

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 😃 ┃ 𝗦𝗜𝗠𝗦𝗜𝗠𝗜*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} simsimi
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* El Bot empezará a responder a los mensajes usando la IA de SimSimi.

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 ⏳ ┃ 𝗔𝗡𝗧𝗜𝗦𝗣𝗔𝗠*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} antispam
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* El Bot detecta cuando un usuario hace spam de comando y lo banea por 5 segundos y lo advierte.
*𝗡𝗢𝗧𝗔: Este comando solo podrá ser usado por owners del Bot.

━━━━━━━━━━━━━━━

*𝗢𝗣𝗖𝗜𝗢𝗡 🛡️ | 𝗔𝗡𝗧𝗜𝗗𝗘𝗟𝗘𝗧𝗘*
*𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} antidelete
*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:* El Bot detecta cuando un usuario elimina un mensaje y lo reenvía.

${wm}`, fkontak, { mentions: [aa,] })
//conn.sendMessage(m.chat, { text: texto }, { quoted: fkontak })
//conn.sendMessage(m.chat, texto, {quoted: fkontak})	
throw false
}
await conn.reply(m.chat, `${lenguajeGB['smsAvisoRG']()}🙉 *${lenguajeGB['smsMens1']()}* *|* ${type} 
🙉 *${lenguajeGB['smsMens2']()}* *|* ${isEnable ? lenguajeGB.smsEncender() : lenguajeGB.smsApagar()} 
🙉 *${lenguajeGB['smsMens3']()}* *|* ${isAll ? lenguajeGB.smsMens4() : isUser ? '' : lenguajeGB.smsMens5()}`, fkontak, m)}	
/*await conn.sendButton(m.chat, `${lenguajeGB['smsAvisoRG']()}🙉 *${lenguajeGB['smsMens1']()}* *|* ${type} 
🙉 *${lenguajeGB['smsMens2']()}* *|* ${isEnable ? lenguajeGB.smsEncender() : lenguajeGB.smsApagar()} 
🙉 *${lenguajeGB['smsMens3']()}* *|* ${isAll ? lenguajeGB.smsMens4() : isUser ? '' : lenguajeGB.smsMens5()}`, wm, null, [[`${isEnable ? lenguajeGB.smsApagar() : lenguajeGB.smsEncender()}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], [lenguajeGB.smsConMenu(), '.menu']], fkontak, m)}*/

handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
