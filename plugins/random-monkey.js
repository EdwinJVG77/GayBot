let handler = async(m, { conn, text, command }) => {
let yh = global.monkey
let url = yh[Math.floor(Math.random() * yh.length)]
conn.sendMessage(m.chat, { image: { url: url }, caption: "🐒💕" }, { quoted: m });
}
handler.command = /^(monkey|mono)$/i
handler.tags = ['random']
handler.help = ['monkey']
handler.limit = false 
export default handler

global.monkey = [
"https://telegra.ph/file/d9b3a93526f31ca9de4d7.jpg", "https://telegra.ph/file/a926b153748e3a7e6d2c2.jpg", "https://telegra.ph/file/6c7d49833503e26fc7787.jpg", "https://telegra.ph/file/0e7cf4701bfdfc719e336.jpg", "https://telegra.ph/file/ce2e0a09fc838712999b3.jpg", "https://telegra.ph/file/9372394525960834ef202.jpg", "https://telegra.ph/file/1bce43c3674fd1eb8b1cd.jpg", "https://telegra.ph/file/b73bf13a6a62655934227.jpg", "https://telegra.ph/file/3671ce08d0693a46c7ea4.jpg", "https://telegra.ph/file/d2f27a659cb1ed4bb12a0.jpg", "https://telegra.ph/file/1be9874201d06a069a171.jpg", "https://telegra.ph/file/497cc9eb484716433b9b2.jpg", "https://telegra.ph/file/a2989f2af2bce89313fa5.jpg", "https://telegra.ph/file/6fc64bbd6e4e1d218dda7.jpg", "https://telegra.ph/file/607fdb53bca6c38112316.jpg", "https://telegra.ph/file/ab7a1a2bd64d635676e9f.jpg", "https://telegra.ph/file/a585446ae5d3020eb86d8.jpg", "https://telegra.ph/file/03f83dd63bdea48233b81.jpg", "https://telegra.ph/file/77e542d8c5717ccfde3b9.jpg", "https://telegra.ph/file/35789078f2017e6f85196.jpg", "https://telegra.ph/file/12a50a088fbb3735b0f0d.jpg", "https://telegra.ph/file/6531e93dcc4e8ce828db4.jpg", "https://telegra.ph/file/5a76928942f6726c70130.jpg"
]
