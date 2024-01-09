//import * as baileys from '@adiwajshing/baileys'
let baileys = (await import(global.baileys)).default

let handler = async (m, { conn, text }) => {
	let [, code] = text.match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
	if (!code) throw `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗨𝗡 𝗘𝗡𝗟𝗔𝗖𝗘 𝗗𝗘 𝗨𝗡 𝗚𝗥𝗨𝗣𝗢*\n*𝗘𝗡𝗧𝗘𝗥 𝗔 𝗚𝗥𝗢𝗨𝗣 𝗟𝗜𝗡𝗞*`
	let res = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code } }] }),
		data = extractGroupMetadata(res),
		txt = Object.keys(data).map(v => `*${v.capitalize()}:* ${data[v]}`).join('\n'),
		pp = await conn.profilePictureUrl(data.id, 'image').catch(console.error)
	if (pp) return conn.sendMessage(m.chat, { image: { url: pp }, caption: txt }, { quoted: m })
	let groupinfo = `
*╭━━━━━━━━━━━━━━━━━━━━*
*┃ ⫹⫺ 𝗜𝗗:*
*┃ ${data.id}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ ⫹⫺ 𝗡𝗢𝗠𝗕𝗥𝗘 | 𝗡𝗔𝗠𝗘:*
*┃ ${data.subject}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ ⫹⫺ 𝗖𝗥𝗘𝗔𝗖𝗜𝗢𝗡 | 𝗖𝗥𝗘𝗔𝗧𝗜𝗢𝗡:*
*┃ ${data.creation}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ ⫹⫺ 𝗣𝗥𝗢𝗣𝗜𝗘𝗧𝗔𝗥𝗜𝗢 | 𝗢𝗪𝗡𝗘𝗥:*
*┃ ${data.owner}*
*╰━━━━━━━━━━━━━━━━━━━━*
 _Enviando descripción..._`
	await conn.reply(m.chat, groupinfo, m)
	await conn.reply(m.chat, `${data.desc}`, m)
}
handler.command = /^(inspect)$/i
handler.register = false
export default handler

const extractGroupMetadata = (result) => {
	const group = baileys.getBinaryNodeChild(result, 'group')
	const descChild = baileys.getBinaryNodeChild(group, 'description')
	let desc
	if (descChild) desc = baileys.getBinaryNodeChild(descChild, 'body')?.content
	const metadata = {
		id: group.attrs.id.includes('@') ? group.attrs.id : baileys.jidEncode(group.attrs.id, 'g.us'),
		subject: group.attrs.subject,
		creation: new Date(+group.attrs.creation * 1000).toLocaleString('id', { timeZone: 'Asia/Jakarta' }),
		owner: group.attrs.creator ? 'wa.me/' + baileys.jidNormalizedUser(group.attrs.creator).split('@')[0] :
			// group.attrs.s_o ? 'wa.me/' + baileys.jidNormalizedUser(group.attrs.s_o).split('@')[0] :
			group.attrs.id.includes('-') ? 'wa.me/' + group.attrs.id.split('-')[0] : '',
		desc
	}
	return metadata
}
