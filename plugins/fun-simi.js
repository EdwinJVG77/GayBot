import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';
const handler = async (m, {text, command, args, usedPrefix}) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝗘𝗦𝗖𝗥𝗜𝗕𝗔 𝗨𝗡 𝗧𝗘𝗫𝗧𝗢 𝗣𝗔𝗥𝗔 𝗛𝗔𝗕𝗟𝗔𝗥 𝗖𝗢𝗡𝗠𝗜𝗚𝗢*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} Hola*\n\n*𝗪𝗥𝗜𝗧𝗘 𝗔 𝗧𝗘𝗫𝗧 𝗧𝗢 𝗧𝗔𝗟𝗞 𝗧𝗢 𝗠𝗘*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘: ${usedPrefix + command} Hello*`
try {
await conn.sendPresenceUpdate('composing', m.chat)
const api = await fetch('https://api.simsimi.net/v2/?text=' + text + '&lc=es');
const resSimi = await api.json();
m.reply(resSimi.success);
} catch {
try {
if (text.includes('Hola')) text = text.replace('Hola', 'Hello');
if (text.includes('hola')) text = text.replace('hola', 'Hello');
if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO');
const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + text);
const resu = await reis.json();
const nama = m.pushName || '1';
const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0]);
const res = await api.json();
const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt);
const resu2 = await reis2.json();
m.reply(resu2[0][0][0]);
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}}}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['bot', 'simi', 'simsimi'] 
export default handler
