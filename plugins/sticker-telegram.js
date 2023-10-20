import fetch from "node-fetch"
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗘𝗡𝗟𝗔𝗖𝗘 𝗗𝗘 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*\n*${usedPrefix + command} https://t.me/addstickers/Porcientoreal*\n\n*𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠 𝗟𝗜𝗡𝗞*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘*:\n*${usedPrefix + command} https://t.me/addstickers/Porcientoreal*`
    if (!args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) throw `${lenguajeGB['smsAvisoFG']()}*𝗟𝗔 𝗨𝗥𝗟 𝗘𝗦 𝗜𝗡𝗖𝗢𝗥𝗥𝗘𝗖𝗧𝗔* ❌\n*𝗧𝗛𝗘 𝗨𝗥𝗟 𝗜𝗦 𝗜𝗡𝗖𝗢𝗥𝗥𝗘𝗧* ❌`
    let packName = args[0].replace("https://t.me/addstickers/", "") 
    let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
    if (!gas.ok) throw eror
    let json = await gas.json()
    m.reply(`*𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 𝗧𝗢𝗧𝗔𝗟𝗘𝗦: ${json.result.stickers.length}*
*𝗘𝗡𝗩𝗜𝗔𝗡𝗗𝗢 𝗘𝗡: ${json.result.stickers.length * 1.5} 𝗦𝗘𝗚𝗨𝗡𝗗𝗢𝗦*`.trim())
    for (let i = 0; i < json.result.stickers.length; i++) {
        let fileId = json.result.stickers[i].thumb.file_id
        let gasIn = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
        let jisin = await gasIn.json()
        let stiker = await sticker(false, "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path, global.packname, global.author)
        await delay(5000)
        if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: ``, mediaType: 2, sourceUrl: nnt, thumbnail: imagen1}}}, { quoted: m })
        await delay(3000)
    }
    throw `*✅ ¡𝗟𝗜𝗦𝗧𝗢! ✅*`
}
handler.help = ['stikertele *<url>*']
handler.tags = ['sticker', 'downloader']
handler.command = /^(stic?kertele(gram)?)$/i

handler.limit = 1
handler.register = true
export default handler

const delay = time => new Promise(res => setTimeout(res, time))