let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, 𝗬𝗮 𝗲𝘀 𝗵𝗼𝗿𝗮 𝗱𝗲 𝗾𝘂𝗲 𝘁𝗲 𝗰𝗮𝘀𝗲𝘀 💍 𝗰𝗼𝗻 ${toM(b)}, 𝗹𝗶𝗻𝗱𝗮 𝗽𝗮𝗿𝗲𝗷𝗮 💞*\n*${toM(a)}, 𝗜𝘁'𝘀 𝗮𝗯𝗼𝘂𝘁 𝘁𝗶𝗺𝗲 𝘆𝗼𝘂 💍 𝗺𝗮𝗿𝗿𝘆 ${toM(b)}, 𝗰𝘂𝘁𝗲 𝗽𝗼𝘂𝗽𝗹𝗲 💞*`, null, {
mentions: [a, b]
  
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['formarpareja', 'pareja']
handler.group = true
export default handler
