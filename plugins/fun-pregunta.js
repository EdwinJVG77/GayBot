import fetch from 'node-fetch'
let handler = async (m, {conn, command, usedPrefix, text }) => { 
if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝗘𝗦𝗖𝗥𝗜𝗕𝗔 𝗦𝗨 𝗣𝗥𝗘𝗚𝗨𝗡𝗧𝗔 𝗣𝗔𝗥𝗔 𝗤𝗨𝗘 𝗦𝗘𝗔 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗜𝗗𝗔*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢*\n*${usedPrefix + command} Hoy va a llover?*\n\n*𝗪𝗥𝗜𝗧𝗘 𝗬𝗢𝗨𝗥 𝗤𝗨𝗘𝗦𝗧𝗜𝗢𝗡 𝗧𝗢 𝗕𝗘 𝗔𝗡𝗦𝗪𝗘𝗥𝗘𝗗*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘*\n*${usedPrefix + command} Hoy va a llover?*`   
let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
let json = await res.json()
if (json.success)
  
m.reply(`*⁉️ 𝗣𝗥𝗘𝗚𝗨𝗡𝗧𝗔 | 𝗤𝗨𝗘𝗦𝗧𝗜𝗢𝗡:* 
🙀 ${text}
*━━━━━━━━━━━━━━━━━━━━*
*✅ 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 | 𝗥𝗘𝗦𝗣𝗢𝗡𝗦𝗘:*
😼 ${['Sí','Tal vez','Probablemente sí','Probablemente no','No'].getRandom()}`) 

}
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|question$/i  
handler.money = 100
export default handler
