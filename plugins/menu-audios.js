import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return    
try {
let pp = imagen10
let img =  'media/menus/img.jpg'
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `
*╭━━━━━━━━━━━━━━━━━*
*┃➯ 𝗛𝗼𝗹𝗮, ${taguser}*
*┃➯ 𝗢𝘄𝗻𝗲𝗿: 𝗘𝗱𝘄𝗶𝗻*
*┃➯ 𝗙𝗲𝗰𝗵𝗮: ${date}*
*┃➯ 𝗧𝗶𝗲𝗺𝗽𝗼 𝗮𝗰𝘁𝗶𝘃𝗼: ${uptime}*
*┃➯ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼𝘀: ${rtotalreg}*
*╰━━━━━━━━━━━━━━━━━*

*╭━━━━━━━━━━━━━━━━━*
*┃ 🔊 𝗔𝗨𝗗𝗜𝗢𝗦 🔊*
*┃━━━━━━━━━━━━━━━━━*
*┃ 𝗡𝗢 𝗘𝗦 𝗡𝗘𝗖𝗘𝗦𝗔𝗥𝗜𝗢 𝗨𝗦𝗔𝗥*
*┃ 𝗣𝗥𝗘𝗙𝗜𝗝𝗢 𝗘𝗡 𝗔𝗨𝗗𝗜𝗢𝗦* 🙉
*┃━━━━━━━━━━━━━━━━━*
*┃🔊➯ Noche de paz*
*┃🔊➯ Buenos dias*
*┃🔊➯ Audio hentai*
*┃🔊➯ Fiesta del admin*
*┃🔊➯ Fiesta del admin 2*
*┃🔊➯ Fiesta del administrador* 
*┃🔊➯ Viernes*
*┃🔊➯ Mierda de Bot*
*┃🔊➯ Me olvidé*
*┃🔊➯ Baneado*
*┃🔊➯ Feliz navidad*
*┃🔊➯ A nadie le importa*
*┃🔊➯ Sexo*
*┃🔊➯ Vete a la vrg*
*┃🔊➯ Ara ara*
*┃🔊➯ Hola*
*┃🔊➯ Un pato*
*┃🔊➯ Nyanpasu*
*┃🔊➯ Te amo*
*┃🔊➯ Yamete*
*┃🔊➯ Te diagnostico con gay*
*┃🔊➯ Quien es tu sempai botsito 7w7*
*┃🔊➯ Bañate*
*┃🔊➯ Vivan los novios*
*┃🔊➯ Marica quien*
*┃🔊➯ Es puto*
*┃🔊➯ La biblia*
*┃🔊➯ Onichan*
*┃🔊➯ Bot puto*
*┃🔊➯ Feliz cumpleaños*
*┃🔊➯ Pasa pack Bot*
*┃🔊➯ Atencion grupo*
*┃🔊➯ Homero chino*
*┃🔊➯ Oh me vengo*
*┃🔊➯ Murio el grupo*
*┃🔊➯ Siuuu*
*┃🔊➯ Rawr*
*┃🔊➯ UwU*
*┃🔊➯ :c*
*┃🔊➯ a*
*┃🔊➯ Hey*
*┃🔊➯ Enojado*
*┃🔊➯ Enojada*
*┃🔊➯ Chao*
*┃🔊➯ Hentai*
*┃🔊➯ Triste*
*┃🔊➯ Estoy triste*
*┃🔊➯ Me pican los cocos*
*┃🔊➯ Contexto*
*┃🔊➯ Me voy*
*┃🔊➯ Tengo los calzones del admin*
*┃🔊➯ Entrada épica* 
*┃🔊➯ Esto va ser épico papus*
*┃🔊➯ Ingresa épicamente*
*┃🔊➯ Bv*
*┃🔊➯ Yoshi*
*┃🔊➯ No digas eso papu*
*┃🔊➯ Ma ma masivo*
*┃🔊➯ Masivo*
*┃🔊➯ Basado*
*┃🔊➯ Basada*
*┃🔊➯ Fino señores*
*┃🔊➯ Verdad que te engañe*
*┃🔊➯ Sus*
*┃🔊➯ Ohayo*
*┃🔊➯ La voz de hombre*
*┃🔊➯ Pero esto*
*┃🔊➯ Bien pensado Woody*
*┃🔊➯ Jesucristo*
*┃🔊➯ Wtf*
*┃🔊➯ Una pregunta*
*┃🔊➯ Que sucede*
*┃🔊➯ Hablame*
*┃🔊➯ Pikachu*
*┃🔊➯ Niconico*
*┃🔊➯ Yokese*
*┃🔊➯ Omaiga*
*┃🔊➯ Nadie te preguntó*
*┃🔊➯ Bueno si*
*┃🔊➯ Usted está detenido*
*┃🔊➯ No me hables*
*┃🔊➯ No chu*
*┃🔊➯ El pepe*
*┃🔊➯ Pokémon*
*┃🔊➯ No me hagas usar esto*
*┃🔊➯ Esto va para ti*
*┃🔊➯ Abduzcan*
*┃🔊➯ Joder*
*┃🔊➯ Hablar primos*
*┃🔊➯ Mmm*
*┃🔊➯ Orale*
*┃🔊➯ Me anda buscando anonymous*
*┃🔊➯ Blackpink in your area*
*┃🔊➯ Cambiate a Movistar*
*┃🔊➯ Momento equisde/Momento XD*
*┃🔊➯ Todo bien/😇*
*┃🔊➯ Te gusta el Pepino/🥒*
*┃🔊➯ El tóxico*
*┃🔊➯ Moshi moshi*
*┃🔊➯ Calla Fan de BTS*
*┃🔊➯ Que tal grupo*
*┃🔊➯ Muchachos*
*┃🔊➯ Está Zzzz/😴*
*┃🔊➯ Goku Pervertido*
*┃🔊➯ Potaxio/🥑*
*┃🔊➯ Nico nico*
*┃🔊➯ El rap de Fernanfloo*
*┃🔊➯ Tal vez*
*┃🔊➯ Corte corte*
*┃🔊➯ Buenas noches*
*┃🔊➯ Porque ta tite*
*┃🔊➯ Eres Fuerte*
*┃🔊➯ Bueno Master/🫂*
*┃🔊➯ No Rompas más*
*┃🔊➯ Traiganle una falda*
*┃🔊➯ Se están riendo de mí*
*┃🔊➯ Su nivel de pendejo*
*┃🔊➯ Bienvenido/a 🥳/👋*
*┃🔊➯ Elmo sabe donde vives*
*┃🔊➯ tunometecabrasaramambiche*
*┃🔊➯ Y este quien es*
*┃🔊➯ Motivación*
*┃🔊➯ En caso de una investigación*
*┃🔊➯ Buen día grupo/🙌*
*┃🔊➯ Las reglas del grupo*
*┃🔊➯ Oye/🐔*
*┃🔊➯ Ig de la minita*
*┃🔊➯ Gaspi frase*
*┃🔊➯ Vamos!!*
*┃🔊➯ Se pudrio*
*┃🔊➯ Gol!*
*╰━━━━━━━━━━━━━━━━━*`.trim()
if (m.isGroup) {

let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    

let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, `${lenguajeGB['smsAvisoIG']()} 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗧𝗜𝗘𝗡𝗘 𝗨𝗡 𝗘𝗥𝗥𝗢𝗥 𝗬 𝗡𝗢 𝗙𝗨𝗘 𝗣𝗢𝗦𝗜𝗕𝗟𝗘 𝗘𝗡𝗩𝗜𝗔𝗥𝗟𝗢, 𝗥𝗘𝗣𝗢𝗥𝗧𝗘𝗟𝗢 𝗔 𝗘𝗟 𝗣𝗥𝗢𝗣𝗜𝗘𝗧𝗔𝗥𝗜𝗢 𝗗𝗘𝗟 𝗕𝗢𝗧*`, m)
}}
handler.command = /^(audios|menuaudios)$/i
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
