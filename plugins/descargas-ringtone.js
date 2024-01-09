import fetch from 'node-fetch'
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗧𝗘𝗫𝗧𝗢 𝗤𝗨𝗘 𝗗𝗘𝗦𝗘𝗔 𝗕𝗨𝗦𝗖𝗔𝗥*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} Hola*\n\n*𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗧𝗘𝗫𝗧 𝗬𝗢𝗨 𝗪𝗔𝗡𝗧 𝗧𝗢 𝗦𝗘𝗔𝗥𝗖𝗛*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘: ${usedPrefix + command} Hello*` 
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
conn.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })}
handler.command  = ['ringtone']
handler.limit = 1
handler.register = false
export default handler
async function ringtone(title) {
return new Promise((resolve, reject) => {
axios.get('https://meloboom.com/es/search/'+title).then((get) => {
let $ = cheerio.load(get.data)
let hasil = []
$('#__next > main > section > div.jsx-2244708474.container > div > div > div > div:nth-child(4) > div > div > div > ul > li').each(function (a, b) {
hasil.push({ title: $(b).find('h4').text(), source: 'https://meloboom.com/'+$(b).find('a').attr('href'), audio: $(b).find('audio').attr('src') })
})
resolve(hasil)})})}

