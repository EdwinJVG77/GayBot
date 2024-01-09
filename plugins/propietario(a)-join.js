let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw `${mg}*𝗗𝗘𝗕𝗘 𝗦𝗘𝗥 𝗨𝗡 𝗘𝗡𝗟𝗔𝗖𝗘 | 𝗠𝗨𝗦𝗧 𝗕𝗘 𝗔 𝗟𝗜𝗡𝗞*\n*Ingrese el enlace de un grupo.*\n*Enter the link of a group.*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢 | 𝗘𝗫𝗔𝗠𝗣𝗟𝗘*\n*#unete ${nnt}*\n\n*#join ${nnt2}*`

if ( isMods || isOwner || m.fromMe) {
m.reply(`*¡𝗚𝗔𝗬𝗕𝗢𝗧 𝗦𝗘 𝗛𝗔 𝗨𝗡𝗜𝗗𝗢 𝗔𝗟 𝗚𝗥𝗨𝗣𝗢!✅*\n*𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬 𝗝𝗢𝗜𝗡𝗘𝗗! ✅*`)
await delay(5 * 5000)
let res = await conn.groupAcceptInvite(code)
} else {
const data = global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)

await delay(5 * 5000)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`${iig}╭══•───────────────•══╮\n┃ 📧 *𝗦𝗢𝗟𝗜𝗖𝗜𝗧𝗨𝗗 𝗣𝗔𝗥𝗔 𝗨𝗡 𝗚𝗥𝗨𝗣𝗢*\n┃ 📧 *𝗚𝗥𝗢𝗨𝗣 𝗥𝗘𝗤𝗨𝗘𝗦𝗧*\n╰══•───────────────•══╯\n\n*👤 𝗦𝗢𝗟𝗜𝗖𝗜𝗧𝗔𝗡𝗧𝗘 | 𝗔𝗣𝗣𝗟𝗜𝗖𝗔𝗡𝗧*\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*𝗘𝗡𝗟𝗔𝗖𝗘 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢 | 𝗚𝗥𝗢𝗨𝗣 𝗟𝗜𝗡𝗞*\n ' + link, jid)

m.reply(`${ag}*✅ Su enlace se envió a Mí Propietario(a).*\n*Your link was sent to My Owner.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *Su Grupo será Evaluado y Quedará a decisión de Mí Propietario(a) si ${gt} se une o no al Grupo.*\n*Your Group will be Evaluated and it will be up to My Owner if ${gt} joins the Group or not.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ *Es posible que su Solicitud sea Rechazada por las siguientes Causas:*\n*Your Application may be Rejected for the following Reasons:*\n*1️⃣ El Bot está Saturado.*\n*The Bot is Saturated.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ *El Bot fue eliminado del Grupo.*\n*The Bot was removed from the Group.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ *El Grupo no cumple con las Normativas de ${gt}*\n*The Group does not comply with the Regulations of ${gt}*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ *El enlace del grupo se restableció.*\n*The group link was restored.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5️⃣ *No se agrega a Grupos según Mi Propietario(a).*\n*Not added to Groups by My Owner*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n💌 *La solicitud puede tardar Horas en ser Respondida. Por favor Tener Paciencia. Gracias*\n*The request may take hours to be answered. Please be patient. Thank you*`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i 
handler.register = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
