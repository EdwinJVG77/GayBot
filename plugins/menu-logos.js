import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return    
try {
let pp = imagen12
let img =  'GayBot/GayBot/media/menus/img.jpg'
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
*┃ 📝 𝗟𝗢𝗚𝗢𝗦 📝*
*┃━━━━━━━━━━━━━━━━━*
*┃ ¿𝗖𝗢𝗠𝗢 𝗨𝗦𝗔𝗥 𝗘𝗦𝗧𝗘*
*┃ 𝗖𝗢𝗠𝗔𝗡𝗗𝗢?*
*┃ ${usedPrefix}logo <efecto> <texto>*
*┃ 𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*
*┃ ${usedPrefix}logo 3d-deep-sea-metal GayBot*
*┃━━━━━━━━━━━━━━━━━*
*┃ 𝗖𝗨𝗔𝗡𝗗𝗢 𝗗𝗜𝗚𝗔 𝗤𝗨𝗘*
*┃ 𝗛𝗔𝗖𝗘 𝗙𝗔𝗟𝗧𝗔 𝗨𝗡 𝗧𝗘𝗫𝗧𝗢*
*┃ 𝗘𝗟 𝗨𝗦𝗢 𝗦𝗘𝗥𝗜𝗔:*
*┃ ${usedPrefix}logo <efecto> <texto1|texto2>*
*┃ 𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*
*┃ ${usedPrefix}logo Wolf-Logo-Galaxy Logo|Bot*
*┃━━━━━━━━━━━━━━━━━*
*┃📝➯ ${usedPrefix}logo 3d-deep-sea-metal*
*┃📝➯ ${usedPrefix}logo American-flag-3D*
*┃📝➯ ${usedPrefix}logo 3D-sci-fi*
*┃📝➯ ${usedPrefix}logo 3D-rainbow-color-calligraphy*
*┃📝➯ ${usedPrefix}logo 3D-water-pipe*
*┃📝➯ ${usedPrefix}logo Halloween-skeleton*
*┃📝➯ ${usedPrefix}logo a-spooky-Halloween*
*┃📝➯ ${usedPrefix}logo a-cinematic-horror*
*┃📝➯ ${usedPrefix}logo a-sketch*
*┃📝➯ ${usedPrefix}logo blue-circuit-style*
*┃📝➯ ${usedPrefix}logo space*
*┃📝➯ ${usedPrefix}logo a-metallic*
*┃📝➯ ${usedPrefix}logo Creat-glossy-metalic*
*┃📝➯ ${usedPrefix}logo a-Captain-America*
*┃📝➯ ${usedPrefix}logo science-fiction*
*┃📝➯ ${usedPrefix}logo Video-game-classic-8-bit*
*┃📝➯ ${usedPrefix}logo green-horror-style*
*┃📝➯ ${usedPrefix}logo a-transformer*
*┃📝➯ ${usedPrefix}logo berry*
*┃📝➯ ${usedPrefix}logo layered*
*┃📝➯ ${usedPrefix}logo Online-thunder--generator*
*┃📝➯ ${usedPrefix}logo a-magma-hot*
*┃📝➯ ${usedPrefix}logo 3D-stone-cracked-cool*
*┃📝➯ ${usedPrefix}logo 3D-neon-light*
*┃📝➯ ${usedPrefix}logo impressive-glitch*
*┃📝➯ ${usedPrefix}logo a-glitch*
*┃📝➯ ${usedPrefix}logo embossed--on-cracked-surface*
*┃📝➯ ${usedPrefix}logo Broken-glass*
*┃📝➯ ${usedPrefix}logo art-paper-cut*
*┃📝➯ ${usedPrefix}logo artistic-black-and-white-status-and-quote-with-your-photos*
*┃📝➯ ${usedPrefix}logo Online-3D-gradient--generator*
*┃📝➯ ${usedPrefix}logo a-3D-glossy-metal*
*┃📝➯ ${usedPrefix}logo 3D-realistic--on-the-beach*
*┃📝➯ ${usedPrefix}logo a-watercolor*
*┃📝➯ ${usedPrefix}logo Online-multicolor-3D-paper-cut*
*┃📝➯ ${usedPrefix}logo Write-text-on-foggy-window*
*┃📝➯ ${usedPrefix}logo neon-devil-wings*
*┃📝➯ ${usedPrefix}logo 3D-underwater--generator*
*┃📝➯ ${usedPrefix}logo Online-black-and-white-bear-mascot-logo-creation*
*┃📝➯ ${usedPrefix}logo wonderful-graffiti-art*
*┃📝➯ ${usedPrefix}logo a-cool-graffiti-text-on-the-wall*
*┃📝➯ ${usedPrefix}logo cool-wall-graffiti*
*┃📝➯ ${usedPrefix}logo a-christmas-holiday-snow*
*┃📝➯ ${usedPrefix}logo a-futuristic-technology-neon-light*
*┃📝➯ ${usedPrefix}logo snow--for-winter-holidays*
*┃📝➯ ${usedPrefix}logo a-cloud--on-the-sky*
*┃📝➯ ${usedPrefix}logo 3D-luxury-gold*
*┃📝➯ ${usedPrefix}logo 3D-gradient*
*┃📝➯ ${usedPrefix}logo Blackpink-logo-style*
*┃📝➯ ${usedPrefix}logo realistic-vintage-style-light-bulb*
*┃📝➯ ${usedPrefix}logo realistic-cloud*
*┃📝➯ ${usedPrefix}logo a-cloud--in-the-sky*
*┃📝➯ ${usedPrefix}logo Write-in-Sand-Summer-Beach*
*┃📝➯ ${usedPrefix}logo Sand-Writing*
*┃📝➯ ${usedPrefix}logo Sand-engraved-3d*
*┃📝➯ ${usedPrefix}logo a-summery-sand-writing*
*┃📝➯ ${usedPrefix}logo Foil-Balloon--For-Birthday*
*┃📝➯ ${usedPrefix}logo 3d-glue--with-realistic-style*
*┃📝➯ ${usedPrefix}logo space-3D*
*┃📝➯ ${usedPrefix}logo Metal-Dark-Gold*
*┃📝➯ ${usedPrefix}logo Glitch--Style-Tik-Tok*
*┃📝➯ ${usedPrefix}logo a-Stone*
*┃📝➯ ${usedPrefix}logo Neon-Light--With-Galaxy-Style*
*┃📝➯ ${usedPrefix}logo 1917-Style*
*┃📝➯ ${usedPrefix}logo 80's-Retro-Neon*
*┃📝➯ ${usedPrefix}logo Minion--3D*
*┃📝➯ ${usedPrefix}logo Pornhub-Style-Logo*
*┃📝➯ ${usedPrefix}logo Double-Exposure--Black-&-White*
*┃📝➯ ${usedPrefix}logo Holographic-3D*
*┃📝➯ ${usedPrefix}logo 3D-Avengers-logo*
*┃📝➯ ${usedPrefix}logo Metal-Purple-Dual-Effect*
*┃📝➯ ${usedPrefix}logo logo-style-Marvel-studios-Ver:-metal*
*┃📝➯ ${usedPrefix}logo logo-style-Marvel-studios*
*┃📝➯ ${usedPrefix}logo Deluxe-Silver*
*┃📝➯ ${usedPrefix}logo Color-Full-Luxury-Metal*
*┃📝➯ ${usedPrefix}logo Glossy-Blue-Metal*
*┃📝➯ ${usedPrefix}logo Deluxe-Gold*
*┃📝➯ ${usedPrefix}logo Glossy-Carbon*
*┃📝➯ ${usedPrefix}logo Fabric*
*┃📝➯ ${usedPrefix}logo Neon*
*┃📝➯ ${usedPrefix}logo New-Year-Cards-3D-By-Name*
*┃📝➯ ${usedPrefix}logo Happ-new-year-card-firework-gif*
*┃📝➯ ${usedPrefix}logo Fullcolor-Balloon*
*┃📝➯ ${usedPrefix}logo Text-Logo-3D-Metal*
*┃📝➯ ${usedPrefix}logo avatar-gold*
*┃📝➯ ${usedPrefix}logo Text-Logo-3D-Metal-Silver*
*┃📝➯ ${usedPrefix}logo Text-Logo-3D-Metal-Rose-Gold*
*┃📝➯ ${usedPrefix}logo Text-Logo-3D-Metal-Gold*
*┃📝➯ ${usedPrefix}logo Text-Logo-3D-Metal-Galaxy*
*┃📝➯ ${usedPrefix}logo Xmas-Cards-3D*
*┃📝➯ ${usedPrefix}logo Blood-Text-On-The-Frosted-Glass*
*┃📝➯ ${usedPrefix}logo Halloween-Fire*
*┃📝➯ ${usedPrefix}logo Metal-Dark-Gold*
*┃📝➯ ${usedPrefix}logo Lion-Logo-Mascot*
*┃📝➯ ${usedPrefix}logo Wolf-Logo-Black-&-White*
*┃📝➯ ${usedPrefix}logo Wolf-Logo-Galaxy*
*┃📝➯ ${usedPrefix}logo Ninja-Logo*
*┃📝➯ ${usedPrefix}logo Logo-Joker*
*┃📝➯ ${usedPrefix}logo Wicker*
*┃📝➯ ${usedPrefix}logo Natural-Leaves*
*┃📝➯ ${usedPrefix}logo Firework-Sparkle*
*┃📝➯ ${usedPrefix}logo Skeleton*
*┃📝➯ ${usedPrefix}logo Red-Foil-Balloon*
*┃📝➯ ${usedPrefix}logo Purple-Foil-Balloon*
*┃📝➯ ${usedPrefix}logo Pink-Foil-Balloon*
*┃📝➯ ${usedPrefix}logo Green-Foil-Balloon*
*┃📝➯ ${usedPrefix}logo Cyan-Foil-Balloon*
*┃📝➯ ${usedPrefix}logo Blue-Foil-Balloon*
*┃📝➯ ${usedPrefix}logo Gold-Foil-Balloon*
*┃📝➯ ${usedPrefix}logo Steel*
*┃📝➯ ${usedPrefix}logo Ultra-Gloss*
*┃📝➯ ${usedPrefix}logo Denim*
*┃📝➯ ${usedPrefix}logo Decorate-Green*
*┃📝➯ ${usedPrefix}logo Decorate-Purple*
*┃📝➯ ${usedPrefix}logo Peridot-Stone*
*┃📝➯ ${usedPrefix}logo Rock*
*┃📝➯ ${usedPrefix}logo Lava*
*┃📝➯ ${usedPrefix}logo Yellow-Glass*
*┃📝➯ ${usedPrefix}logo Purple-Glass*
*┃📝➯ ${usedPrefix}logo Orange-Glass*
*┃📝➯ ${usedPrefix}logo Green-Glass*
*┃📝➯ ${usedPrefix}logo Cyan-Glass*
*┃📝➯ ${usedPrefix}logo Blue-Glass*
*┃📝➯ ${usedPrefix}logo Red-Glass*
*┃📝➯ ${usedPrefix}logo Purple-Shiny-Glass*
*┃📝➯ ${usedPrefix}logo Captain-America*
*┃📝➯ ${usedPrefix}logo Robot-R2-D2*
*┃📝➯ ${usedPrefix}logo Rainbow-Equalizer*
*┃📝➯ ${usedPrefix}logo Toxic*
*┃📝➯ ${usedPrefix}logo Pink-Sparkling-Jewelry*
*┃📝➯ ${usedPrefix}logo Blue-Sparkling-Jewelry*
*┃📝➯ ${usedPrefix}logo Green-Sparkling-Jewelry*
*┃📝➯ ${usedPrefix}logo Purple-Sparkling-Jewelry*
*┃📝➯ ${usedPrefix}logo Gold-Sparkling-Jewelry*
*┃📝➯ ${usedPrefix}logo Red-Sparkling-Jewelry*
*┃📝➯ ${usedPrefix}logo Cyan-Sparkling-Jewelry*
*┃📝➯ ${usedPrefix}logo Purple-Glass*
*┃📝➯ ${usedPrefix}logo Decorative-Glass*
*┃📝➯ ${usedPrefix}logo Chocolate-Cake*
*┃📝➯ ${usedPrefix}logo Strawberry*
*┃📝➯ ${usedPrefix}logo Koi-Fish*
*┃📝➯ ${usedPrefix}logo Bread*
*┃📝➯ ${usedPrefix}logo Matrix-Style*
*┃📝➯ ${usedPrefix}logo Horror-Blood*
*┃📝➯ ${usedPrefix}logo Neon-Light*
*┃📝➯ ${usedPrefix}logo Thunder*
*┃📝➯ ${usedPrefix}logo 3D-Box*
*┃📝➯ ${usedPrefix}logo Neon*
*┃📝➯ ${usedPrefix}logo Road-Warning*
*┃📝➯ ${usedPrefix}logo 3D-Steel*
*┃📝➯ ${usedPrefix}logo Bokeh*
*┃📝➯ ${usedPrefix}logo Green-Neon*
*┃📝➯ ${usedPrefix}logo Free-Advanced-Glow*
*┃📝➯ ${usedPrefix}logo Dropwater*
*┃📝➯ ${usedPrefix}logo Break-Wall*
*┃📝➯ ${usedPrefix}logo Chrismast-Gift*
*┃📝➯ ${usedPrefix}logo Honey*
*┃📝➯ ${usedPrefix}logo Plastic-Bag-Drug*
*┃📝➯ ${usedPrefix}logo Horror-Gift*
*┃📝➯ ${usedPrefix}logo Marble-Slabs*
*┃📝➯ ${usedPrefix}logo Marble*
*┃📝➯ ${usedPrefix}logo Ice-Cold*
*┃📝➯ ${usedPrefix}logo Fruit-Juice*
*┃📝➯ ${usedPrefix}logo Rusty-Metal*
*┃📝➯ ${usedPrefix}logo Abstra-Gold*
*┃📝➯ ${usedPrefix}logo Biscuit*
*┃📝➯ ${usedPrefix}logo Bagel*
*┃📝➯ ${usedPrefix}logo Wood*
*┃📝➯ ${usedPrefix}logo SCI---Fi*
*┃📝➯ ${usedPrefix}logo Metal-Rainbow*
*┃📝➯ ${usedPrefix}logo Purple-Gem*
*┃📝➯ ${usedPrefix}logo Shiny-Metal*
*┃📝➯ ${usedPrefix}logo Yellow-Jewelry*
*┃📝➯ ${usedPrefix}logo Silver-Jewelry*
*┃📝➯ ${usedPrefix}logo Red-Jewelry*
*┃📝➯ ${usedPrefix}logo Purple-Jewelry*
*┃📝➯ ${usedPrefix}logo Orange-Jewelry*
*┃📝➯ ${usedPrefix}logo Green-Jewelry*
*┃📝➯ ${usedPrefix}logo Cyan-Jewelry*
*┃📝➯ ${usedPrefix}logo Blue-Jewelry*
*┃📝➯ ${usedPrefix}logo Hot-Metal*
*┃📝➯ ${usedPrefix}logo Hexa-Golden*
*┃📝➯ ${usedPrefix}logo Blue-Glitter*
*┃📝➯ ${usedPrefix}logo Purple-Glitter*
*┃📝➯ ${usedPrefix}logo Pink-Glitter*
*┃📝➯ ${usedPrefix}logo Green-Glitter*
*┃📝➯ ${usedPrefix}logo Silver-Glitter*
*┃📝➯ ${usedPrefix}logo Gold-Glitter*
*┃📝➯ ${usedPrefix}logo Bronze-Glitter*
*┃📝➯ ${usedPrefix}logo Eroded-Metal*
*┃📝➯ ${usedPrefix}logo Carbon*
*┃📝➯ ${usedPrefix}logo Pink-Candy*
*┃📝➯ ${usedPrefix}logo Blue-Metal*
*┃📝➯ ${usedPrefix}logo Blue-Gem*
*┃📝➯ ${usedPrefix}logo Black-Metal*
*┃📝➯ ${usedPrefix}logo 3D-Glowing-Metal*
*┃📝➯ ${usedPrefix}logo 3D-Chrome*
*╰━━━━━━━━━━━━━━━━━*`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝗜𝗡𝗙𝗢❗] 𝗘𝗟 𝗠𝗘𝗡𝗨 𝗧𝗜𝗘𝗡𝗘 𝗨𝗡 𝗘𝗥𝗥𝗢𝗥 𝗬 𝗡𝗢 𝗙𝗨𝗘 𝗣𝗢𝗦𝗜𝗕𝗟𝗘 𝗘𝗡𝗩𝗜𝗔𝗥𝗟𝗢, 𝗥𝗘𝗣𝗢𝗥𝗧𝗘𝗟𝗢 𝗔 𝗘𝗟 𝗣𝗥𝗢𝗣𝗜𝗘𝗧𝗔𝗥𝗜𝗢 𝗗𝗘𝗟 𝗕𝗢𝗧*', m)
}}
handler.command = /^(menulogos|logos)$/i
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
