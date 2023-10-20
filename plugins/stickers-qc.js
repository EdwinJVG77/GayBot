import { sticker } from '../lib/sticker.js'
import axios from 'axios'

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw `${lenguajeGB['smsAvisoMG']()}*𝗔𝗚𝗥𝗘𝗚𝗨𝗘 𝗨𝗡 𝗧𝗘𝗫𝗧𝗢 𝗣𝗔𝗥𝗔 𝗖𝗥𝗘𝗔𝗥 𝗘𝗟 𝗦𝗧𝗜𝗖𝗞𝗘𝗥*\n\n*𝗔𝗗𝗗 𝗔 𝗧𝗘𝗫𝗧 𝗧𝗢 𝗖𝗥𝗘𝗔𝗧𝗘 𝗧𝗛𝗘 𝗦𝗧𝗜𝗖𝗞𝗘𝗥*`
   if (!text) return m.reply('*¿𝗬 𝗘𝗟 𝗧𝗘𝗫𝗧𝗢?*')
   if (text.length > 50) return m.reply('*¡𝗠𝗔𝗫𝗜𝗠𝗢 50 𝗟𝗘𝗧𝗥𝗔𝗦!*')
    let pp = await conn.profilePictureUrl(m.quoted.sender, 'image').catch(_ => 'https://telegra.ph/file/e45b0cf673908d4a3abac.jpg')

   const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#000000",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.quoted.name,
            "photo": {
               "url": pp
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
   let stiker = await sticker(buffer, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
}

handler.help = ['qc']
handler.tags = ['sticker']
handler.command = /^(qc)$/i

export default handler