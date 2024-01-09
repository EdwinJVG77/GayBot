import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  let user = db.data.users[m.sender]
  let time = user.lastmining + 10000 //tiempo de espera en min
if (new Date - user.lastmiming < 10000) return await conn.reply(m.chat, `*ESPERA UNOS MINUTOS PARA USAR OTRO COMANDO*`,  m)
  try {
  	
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply(`${lenguajeGB['smsAvisoAG']()}*𝗘𝗟 𝗩𝗜𝗗𝗘𝗢 𝗡𝗢 𝗗𝗘𝗕𝗘 𝗗𝗨𝗥𝗔𝗥 𝗠𝗔𝗦 𝗗𝗘 7 𝗦𝗘𝗚𝗨𝗡𝗗𝗢𝗦*\n\n*𝗧𝗛𝗘 𝗩𝗜𝗗𝗘𝗣 𝗦𝗛𝗢𝗨𝗟𝗗 𝗡𝗢𝗧 𝗟𝗔𝗦𝗧 𝗠𝗢𝗥𝗘 𝗧𝗛𝗔𝗡 7 𝗦𝗘𝗖𝗢𝗡𝗗𝗦*`)
      let img = await q.download?.()
      if (!img) throw `${lenguajeGB['smsAvisoMG']()}*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗔 𝗨𝗡𝗔 𝗜𝗠𝗔𝗚𝗘𝗡, 𝗩𝗜𝗗𝗘𝗢, 𝗚𝗜𝗙 𝗢 𝗘𝗡𝗟𝗔𝗖𝗘 𝗗𝗘 𝗧𝗜𝗣𝗢 .jpg 𝗣𝗔𝗥𝗔 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗥 𝗘𝗟 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗨𝗦𝗘 ${usedPrefix + command}*\n\n𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 𝗔𝗡 𝗜𝗠𝗔𝗚𝗘, 𝗩𝗜𝗗𝗘𝗢, 𝗚𝗜𝗙 𝗢𝗥 𝗟𝗜𝗡𝗞 𝗢𝗙 𝗧𝗬𝗣𝗘 .jpg 𝗧𝗢 𝗠𝗔𝗞𝗘 𝗧𝗛𝗘 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗨𝗦𝗘 *${usedPrefix + command}_*`
      let out
      try {
        stiker = await sticker(img, false, global.packname, global.author)
      } catch (e) {
        console.error(e)
      } finally {
      await conn.reply(m.chat, `${eg}_Creando sticker..._`, m)
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out, global.packname, global.author)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
      else return m.reply('URL invalido')
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
     if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: ``, mediaType: 2, sourceUrl: nnt, nnt2, nnt3, thumbnail: imagen1}}}, { quoted: m })
    else throw `${lenguajeGB['smsAvisoMG']()}*𝗩𝗨𝗘𝗟𝗩𝗔 𝗔 𝗜𝗡𝗧𝗘𝗡𝗧𝗔𝗥, 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗔 𝗨𝗡𝗔 𝗜𝗠𝗔𝗚𝗘𝗡, 𝗩𝗜𝗗𝗘𝗢, 𝗚𝗜𝗙 𝗢 𝗘𝗡𝗟𝗔𝗖𝗘 𝗧𝗜𝗣𝗢 .jpg 𝗣𝗔𝗥𝗔 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗥 𝗘𝗟 𝗦𝗧𝗜𝗖𝗞𝗘𝗥*\n\n*𝗧𝗥𝗬 𝗔𝗚𝗔𝗜𝗡 𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 𝗔𝗡 𝗜𝗠𝗔𝗚𝗘, 𝗩𝗜𝗗𝗘𝗢, 𝗚𝗜𝗙 𝗢𝗥 𝗟𝗜𝗡𝗞 𝗢𝗙 𝗧𝗬𝗣𝗘 .jpg 𝗧𝗢 𝗠𝗔𝗞𝗘 𝗧𝗛𝗘 𝗦𝗧𝗜𝗖𝗞𝗘𝗥*`
  }
user.lastmiming = new Date * 1
}
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = ['s', 'sticker', 'stiker'] 

export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
