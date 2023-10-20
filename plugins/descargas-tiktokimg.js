import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗨𝗡 𝗘𝗡𝗟𝗔𝗖𝗘 𝗗𝗘 𝗨𝗡 𝗧𝗜𝗞 𝗧𝗢𝗞 𝗗𝗘 𝗜𝗠𝗔𝗚𝗘𝗡𝗘𝗦*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*\n*https://vm.tiktok.com/ZMjkD9Xwf*\n\n*𝗘𝗡𝗧𝗘𝗥 𝗔 𝗟𝗜𝗡𝗞 𝗧𝗢 𝗔 𝗧𝗜𝗞 𝗧𝗢𝗞 𝗜𝗠𝗔𝗚𝗘*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘:*\n*https://vm.tiktok.com/ZMjkD9Xwf*`
if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
if (!text.includes('tiktok.com')) return m.reply(`*⚠️ URL INVALIDA.*`)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/tiktokslide?apikey=${global.lolkeysapi}&url=${text}`)
let anu = await res.json()
if (anu.status != '200') throw Error(anu.message)
anu = anu.result
if (anu.length == 0) throw Error('Error : no data')
let c = 0
for (let x of anu) {
if (c == 0) await conn.sendMessage(m.chat, { image: { url: x }, caption: `${lenguajeGB['smsAvisoEG']()}*𝗦𝗘 𝗛𝗔 𝗘𝗡𝗩𝗜𝗔𝗗𝗢 1 𝗗𝗘 ${anu.length} 𝗜𝗠𝗔𝗚𝗘𝗡𝗘𝗦.*\n*𝗘𝗟 𝗥𝗘𝗦𝗧𝗢 𝗦𝗘 𝗘𝗡𝗩𝗜𝗔𝗥𝗔 𝗔𝗟 𝗣𝗥𝗜𝗩𝗔𝗗𝗢* 😸` }, { quoted : m })
else await conn.sendMessage(m.sender, { image: { url: x } }, { quoted : m })
c += 1
}
} catch (e) {
console.log(e)
throw `${lenguajeGB['smsAvisoFG']()}*𝗜𝗡𝗧𝗘𝗡𝗧𝗔𝗟𝗢 𝗗𝗘 𝗡𝗨𝗘𝗩𝗢*`
}}

handler.menu = ['tiktokslide <url>']
handler.tags = ['search']
handler.command = /^((tt|tiktok)imagen)$/i

handler.premium = true
handler.limit = true

export default handler
