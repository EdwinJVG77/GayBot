let handler = async (m, { conn }) => {
let vn = './media/gay2.mp3';
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/gay', {  
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),   
}), 'error.png', `*🏳️‍🌈 𝗠𝗔𝗥𝗜𝗖𝗢𝗡 🏳️‍🌈*`, m)   
await await await conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, { 
type: 'audioMessage', 
ptt: true });
};
handler.help = ['gay']
handler.tags = ['maker']
handler.command = /^(gay)$/i
handler.limit = false
export default handler
