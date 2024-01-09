import axios from 'axios'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗨𝗡 𝗘𝗡𝗟𝗔𝗖𝗘 𝗩𝗔𝗟𝗜𝗗𝗢 𝗗𝗘 𝗠𝗘𝗗𝗜𝗔𝗙𝗜𝗥𝗘*\n\n*𝗘𝗡𝗧𝗘𝗥 𝗔 𝗩𝗔𝗟𝗜𝗗 𝗠𝗘𝗗𝗜𝗔𝗙𝗜𝗥𝗘 𝗟𝗜𝗡𝗞*`
try {  
let res = await mediafireDl(args[0])
let { name, size, date, mime, link } = res
let caption = `
*╭━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗡𝗢𝗠𝗕𝗥𝗘 | 𝗡𝗔𝗠𝗘:*
*┃ ${name}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗣𝗘𝗦𝗢 | 𝗦𝗜𝗭𝗘:*
*┃ ${size}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗧𝗜𝗣𝗢 | 𝗧𝗬𝗣𝗘:*
*┃ ${mime}*
*╰━━━━━━━━━━━━━━━━━━━━*`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝗚𝗮𝘆𝗕𝗼𝘁 | 𝗘𝗱𝘄𝗶𝗻',
body: 'Super GayBot 👻',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/img.jpg"),
sourceUrl: `https://github.com/EdwinJVG77/GayBot`}}})
   await conn.sendFile(m.chat, link, name, '', m, null, { mimetype: mime, asDocument: true })
} catch (e) {
m.reply(`${lenguajeGB['smsAvisoFG']()}*𝗩𝗨𝗘𝗟𝗩𝗔 𝗔 𝗜𝗡𝗧𝗘𝗡𝗧𝗔𝗥. 𝗗𝗘𝗕𝗘 𝗦𝗘𝗥 𝗨𝗡 𝗘𝗡𝗟𝗔𝗖𝗘 𝗩𝗔𝗟𝗜𝗗𝗢 𝗗𝗘 𝗠𝗘𝗗𝗜𝗔𝗙𝗜𝗥𝗘.*\n\n*𝗣𝗟𝗘𝗔𝗦𝗘 𝗧𝗥𝗬 𝗔𝗚𝗔𝗜𝗡. 𝗠𝗨𝗦𝗧 𝗕𝗘 𝗔 𝗩𝗔𝗟𝗜𝗗 𝗠𝗘𝗗𝗜𝗔𝗙𝗜𝗥𝗘 𝗟𝗜𝗡𝗞.*`)
handler.limit = false      
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
handler.register = false
handler.limit = true
export default handler

async function mediafireDl(url) {
const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/','')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`)
const $ = cheerio.load(res.data)
const link = $('#downloadButton').attr('href')
const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ','').replaceAll('\n','')
const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text()
const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ','')
let mime = ''
let rese = await axios.head(link)
mime = rese.headers['content-type']
return { name, size, date, mime, link }
}
