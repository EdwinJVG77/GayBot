/*---------------------------------------------------------------------------------------
  🍀 • By https://github.com/HACHEJOTA
-----------------------------------------------------------------------------------------*/
import util from 'util'
import path from 'path'
let user = a => '@' + a.split('@')[0]
async function handler(m, { groupMetadata, command, conn, text, usedPrefix}) {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗨𝗡 𝗧𝗘𝗫𝗧𝗢*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} pene*\n\n*𝗘𝗡𝗧𝗘𝗥 𝗔 𝗧𝗘𝗫𝗧*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘: ${usedPrefix + command} pene*`
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let k = Math.floor(Math.random() * 70);
let x = `${pickRandom(['🤓','😅','😂','😳','😎', '🥵', '😱', '🤑', '🙄', '💩','🍑','🤨','🥴','🔥','🍆','😔', '👀','🌚'])}`
let l = Math.floor(Math.random() * x.length);
let vn = `https://hansxd.nasihosting.com/sound/sound${k}.mp3`
let top = `*𝗚𝗔𝗡𝗔𝗗𝗢𝗥 𝗗𝗘𝗟 𝗦𝗢𝗥𝗧𝗘𝗢: ${text}*\n*${user(a)} ${x}*`
let txt = '';
let count = 0;
for (const c of top) {
    await new Promise(resolve => setTimeout(resolve, 15));
    txt += c;
    count++;

    if (count % 10 === 0) {
        conn.sendPresenceUpdate('composing' , m.chat);
    }
}
    await conn.sendMessage(m.chat, { text: txt.trim(), mentions: conn.parseMention(txt) }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100} );

conn.sendFile(m.chat, vn, '🏆ACERQUESE A RECLAMAR SU PREMIO🏅', null, m, true, {
type: 'audioMessage',
ptt: true })}
handler.help = handler.command = ['sorteo']
handler.tags = ['fun']
handler.group = true
handler.money = 100
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
