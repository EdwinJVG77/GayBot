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
'𝗠𝗜𝗦𝗜𝗢𝗡 𝗖𝗨𝗠𝗣𝗟𝗜𝗗𝗔, 𝗟𝗢𝗚𝗥𝗔𝗦𝗧𝗘 𝗠𝗜𝗡𝗔𝗥',
'⛏️ 𝗟𝗔 𝗠𝗜𝗡𝗘𝗥𝗜𝗔 𝗧𝗘 𝗛𝗔 𝗕𝗘𝗡𝗘𝗙𝗜𝗖𝗜𝗔𝗗𝗢 𝗖𝗢𝗡',
'𝗛𝗔𝗦 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗔𝗗𝗢 𝗨𝗡 𝗟𝗨𝗚𝗔𝗥 𝗬 𝗣𝗢𝗥 𝗠𝗜𝗡𝗔𝗥 𝗗𝗜𝗖𝗛𝗢 𝗟𝗨𝗚𝗔𝗥 𝗢𝗕𝗧𝗜𝗘𝗡𝗘𝗦',
'𝗚𝗥𝗔𝗖𝗜𝗔𝗦 𝗔 𝗤𝗨𝗘 𝗛𝗔𝗦 𝗠𝗜𝗡𝗔𝗗𝗢 𝗧𝗨𝗦 𝗜𝗡𝗚𝗥𝗘𝗦𝗢𝗦 𝗦𝗨𝗠𝗔𝗡',
'¡𝗙𝗘𝗟𝗜𝗖𝗜𝗗𝗔𝗗𝗘𝗦! 𝗔𝗛𝗢𝗥𝗔 𝗧𝗜𝗘𝗡𝗘𝗦','⛏️⛏️⛏️ 𝗢𝗕𝗧𝗜𝗘𝗡𝗘𝗦'])}`

let pp = 'https://media.istockphoto.com/vectors/basic-rgb-vector-id1315251368?b=1&k=6&m=1315251368&s=170667a&w=0&h=2BgQx5Pu2CewGeq93Qxsyoyw5oT4gioHOOIkHb7PoyY='

let string = `${pickRandom([1, 2, 3, 4, 5])}` * 1
let stringpremium = `${pickRandom([3, 4, 6, 7, 9, 11])}` * 1

let coal = `${pickRandom([4, 5, 8, 10, 12])}` * 1
let coalpremium = `${pickRandom([9, 14, 15, 17, 20])}` * 1

let emas = `${pickRandom([1, 0, 2, 3, 0, 0, 0])}` * 1
let emaspremium = `${pickRandom([2, 4, 5, 1, 1, 7, 8])}` * 1

const recompensas = {	
  string: premium ? stringpremium : string,
  coal: premium ? coalpremium : coal,
  emas: premium ? emaspremium : emas,
}
//let xp = Math.floor(Math.random() * 2000)
let xp = `${pickRandom([100, 200, 250, 300, 370, 400, 450, 480, 500, 510, 640, 680, 704, 760, 800, 840, 880, 900, 1000, 1059, 1080, 1100, 0, 0, 10, 1, 99, 999])}` * 1
let exppremium = `${pickRandom([500, 600, 700, 800, 900, 1000, 1050, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1950, 2000, 2100,])}` * 1

let time = user.lastmiming + 600000 //10 min
if (new Date - user.lastmiming < 600000) return await conn.reply(m.chat, `*⏰ 𝗩𝗨𝗘𝗟𝗩𝗘 𝗘𝗡 ${msToTime(time - new Date())} 𝗣𝗔𝗥𝗔 𝗦𝗘𝗚𝗨𝗜𝗥 𝗠𝗜𝗡𝗔𝗡𝗗𝗢 ${global.rpgshopp.emoticon('exp')}*\n\n*⏰ 𝗚𝗘𝗧 𝗕𝗔𝗖𝗞 𝗜𝗡 ${msToTime(time - new Date())} 𝗧𝗢 𝗠𝗜𝗡𝗘 ${global.rpgshopp.emoticon('exp')}*`, fkontak,  m)
user.exp += premium ? exppremium : xp  
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`}

await conn.reply(m.chat, `*${minar} ${xp} 𝗫𝗣 ⚡*`, fkontak,  m)
user.lastmiming = new Date * 1  
}
handler.help = ['minar']
handler.tags = ['xp']
handler.command = ['minar', 'miming', 'mine', 'minarxp', 'minarexp', 'minarexperiencia'] 
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

