import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝗘𝗦𝗖𝗥𝗜𝗕𝗔 𝗨𝗡 𝗧𝗘𝗫𝗧𝗢 𝗣𝗔𝗥𝗔 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗥 𝗘𝗡 𝗖𝗢𝗗𝗜𝗚𝗢 𝗤𝗥*\n\n*𝗪𝗥𝗜𝗧𝗘 𝗔 𝗧𝗘𝗫𝗧 𝗧𝗢 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗜𝗡𝗧𝗢 𝗤𝗥 𝗖𝗢𝗗𝗘*`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png')
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i
handler.money = false
export default handler
