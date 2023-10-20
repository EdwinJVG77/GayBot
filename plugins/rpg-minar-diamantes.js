let handler = async (m, { conn, isPrems}) => { //lastmiming
const fkontak = {
        "key": {
        "participants":"0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"    
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

let user = global.db.data.users[m.sender]
let premium = user.premium  
let minar = `${pickRandom(['𝗤𝗨𝗘 𝗜𝗡𝗦𝗔𝗡𝗢 👻 𝗛𝗔𝗦 𝗠𝗜𝗡𝗔𝗗𝗢',
'¡𝗚𝗘𝗡𝗜𝗔𝗟! 𝗢𝗕𝗧𝗜𝗘𝗡𝗘𝗦',
'¡𝗪𝗢𝗪! 𝗘𝗥𝗘𝗦 𝗨𝗡(𝗔) 𝗚𝗥𝗔𝗡 𝗠𝗜𝗡𝗘𝗥𝗢(𝗔) ⛏️ 𝗢𝗕𝗧𝗜𝗘𝗡𝗘𝗦',
'¡𝗛𝗔𝗦 𝗠𝗜𝗡𝗔𝗗𝗢!',
'😲 𝗟𝗢𝗚𝗥𝗔𝗦𝗧𝗘 𝗠𝗜𝗡𝗔𝗥',
'𝗧𝗨𝗦 𝗜𝗡𝗚𝗥𝗘𝗦𝗢𝗦 𝗦𝗨𝗕𝗜𝗥𝗔𝗡 𝗚𝗥𝗔𝗖𝗜𝗔𝗦 𝗔 𝗤𝗨𝗘 𝗠𝗜𝗡𝗔𝗦𝗧𝗘',
'⛏️⛏️⛏️⛏️⛏️ 𝗠𝗜𝗡𝗔𝗡𝗗𝗢',
'¡𝗦𝗜! 𝗔𝗛𝗢𝗥𝗔 𝗧𝗜𝗘𝗡𝗘𝗦',
'𝗟𝗔 𝗠𝗜𝗡𝗘𝗥𝗜𝗔 𝗘𝗦𝗧𝗔 𝗗𝗘 𝗧𝗨 𝗟𝗔𝗗𝗢, 𝗣𝗢𝗥 𝗘𝗟𝗟𝗢 𝗢𝗕𝗧𝗜𝗘𝗡𝗘𝗦',
'𝗟𝗔 𝗦𝗨𝗘𝗥𝗧𝗘 𝗗𝗘 𝗠𝗜𝗡𝗔𝗥 𝗧𝗘 𝗛𝗔 𝗗𝗔𝗗𝗢',
' 𝗖𝗨𝗠𝗣𝗟𝗜𝗦𝗧𝗘 𝗧𝗨 𝗠𝗜𝗦𝗜𝗢𝗡, 𝗟𝗢𝗚𝗥𝗔𝗦𝗧𝗘 𝗠𝗜𝗡𝗔𝗥',
'⛏️ 𝗟𝗔 𝗠𝗜𝗡𝗘𝗥𝗜𝗔 𝗧𝗘 𝗛𝗔 𝗕𝗘𝗡𝗘𝗙𝗜𝗖𝗜𝗔𝗗𝗢 𝗖𝗢𝗡',
'𝗛𝗔𝗦 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗔𝗗𝗢 𝗨𝗡 𝗟𝗨𝗚𝗔𝗥 𝗬 𝗣𝗢𝗥 𝗠𝗜𝗡𝗔𝗥 𝗗𝗜𝗖𝗛𝗢 𝗟𝗨𝗚𝗔𝗥 𝗢𝗕𝗧𝗜𝗘𝗡𝗘𝗦',
'𝗚𝗥𝗔𝗖𝗜𝗔𝗦 𝗔 𝗤𝗨𝗘 𝗛𝗔𝗦 𝗠𝗜𝗡𝗔𝗗𝗢 𝗧𝗨𝗦 𝗜𝗡𝗚𝗥𝗘𝗦𝗢𝗦 𝗦𝗨𝗕𝗜𝗥𝗔𝗡',
'¡𝗙𝗘𝗟𝗜𝗖𝗜𝗗𝗔𝗗𝗘𝗦! 𝗔𝗛𝗢𝗥𝗔 𝗧𝗜𝗘𝗡𝗘𝗦','⛏️⛏️⛏️ 𝗢𝗕𝗧𝗜𝗘𝗡𝗘𝗦'])}`

let pp = 'https://png.pngtree.com/thumb_back/fw800/background/20220428/pngtree-cartoon-mining-game-design-composition-with-different-mining-equipment-inside-the-image_1108471.jpg'

let kyubi = `${pickRandom([0, 1, 3, 1, 2])}` * 1
let kyubipremium = `${pickRandom([2, 3, 5, 9, 10, 7])}` * 1

let diamond = `${pickRandom([0, 1, 0, 0, 2])}` * 1
let diamondpremium = `${pickRandom([3, 4, 5, 5, 5])}` * 1

let tiketcoin = `${pickRandom([1, 0, 0, 1, 0, 0, 2])}` * 1
let tiketcoinpremium = `${pickRandom([2, 3, 4, 5, 2, 3, 3])}` * 1

const recompensas = {	
  kyubi: premium ? kyubipremium : kyubi,
  diamond: premium ? diamondpremium : diamond,
  tiketcoin: premium ? tiketcoinpremium : tiketcoin,
}
//let xp = Math.floor(Math.random() * 2000)
let limit = `${pickRandom([2, 3, 4, 5, 0, 1, 6, 7, 8, 9, 10])}` * 1
let limitpremium = `${pickRandom([4, 7, 8, 9, 11, 13, 16, 17, 19, 22, 24, 26, 28, 30])}` * 1

let time = user.lastdiamantes + 900000 //15 min
if (new Date - user.lastdiamantes < 900000) return await conn.reply(m.chat, `*⏰ 𝗩𝗨𝗘𝗟𝗩𝗘 𝗘𝗡 ${msToTime(time - new Date())} 𝗣𝗔𝗥𝗔 𝗦𝗘𝗚𝗨𝗜𝗥 𝗠𝗜𝗡𝗔𝗡𝗗𝗢 ${global.rpgshopp.emoticon('limit')}*\n\n*⏰ 𝗚𝗘𝗧 𝗕𝗔𝗖𝗞 𝗜𝗡 ${msToTime(time - new Date())} 𝗧𝗢 𝗠𝗜𝗡𝗘 ${global.rpgshopp.emoticon('limit')}*`, fkontak,  m)
user.limit += premium ? limitpremium : limit  
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`}

let gat = `*${premium ? '🎟️ 𝗥𝗘𝗖𝗢𝗠𝗣𝗘𝗡𝗦𝗔 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🎟️' : '🆓 𝗥𝗘𝗖𝗢𝗠𝗣𝗘𝗡𝗦𝗔 𝗚𝗥𝗔𝗧𝗜𝗦 🆓'}*\n*${minar}*\n*${limit} ${global.rpgshop.emoticon('limit')}*\n\n🎁 *𝗕 𝗢 𝗡 𝗢* 🎁\n\n${texto}\n\n*𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠* » ${premium ? '✅' : '❌'}`
await conn.sendFile(m.chat, pp, 'gay.jpg', gat, fkontak)

user.lastdiamantes = new Date * 1  
}
handler.help = ['minar']
handler.tags = ['diamantes']
handler.command = ['minar3', 'miming3', 'mine3', 'minardiamantes', 'minargemas', 'minardiamante'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " 𝗠 𝗬 " + seconds + " 𝗦 " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
