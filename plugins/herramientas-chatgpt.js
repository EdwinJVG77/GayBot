import fetch from 'node-fetch'
import axios from 'axios'
import translate from '@vitalets/google-translate-api'
import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({ organization: global.openai_org_id, apiKey: global.openai_key });
const openaiii = new OpenAIApi(configuration);
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return    
if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗨𝗡𝗔 𝗣𝗘𝗧𝗜𝗖𝗜𝗢𝗡 𝗣𝗔𝗥𝗔 𝗨𝗦𝗔𝗥 𝗟𝗔 𝗙𝗨𝗡𝗖𝗜𝗢𝗡 𝗗𝗘 𝗖𝗛𝗔𝗧𝗚𝗣𝗧*\n\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢𝗦:*\n*${usedPrefix + command} Recomienda un top 10 de películas de acción*\n*${usedPrefix + command} Código en JS para un juego de cartas*`     
try {
conn.sendPresenceUpdate('composing', m.chat)  
let syms = `Actuarás como un Bot de WhatsApp el cual fue creado por Edwin, tú serás GayBot`
let res = await gpt.ChatGpt(text, syms)
await m.reply(res.text)
} catch {
try {   
let ia2 = await fetch(`https://api.amosayomide05.cf/gpt/?question=${text}&string_id=${m.sender}`) 
let resu2 = await ia2.json()
m.reply(resu2.response.trim())    
} catch {        
try {    
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${lolkeysapi}&text=${text}`)
let hasill = await tioress.json()
m.reply(`${hasill.result}`.trim())   
} catch {    
}}}}
handler.command = ['openai', 'chatgpt', 'ia', 'hey']
export default handler
