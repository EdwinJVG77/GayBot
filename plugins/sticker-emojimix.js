import { sticker } from '../lib/sticker.js'
let MessageType = (await import(global.baileys)).default
import fetch from 'node-fetch'
import fs from "fs"
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}*𝗗𝗘𝗕𝗘 𝗨𝗦𝗔𝗥 𝗗𝗢𝗦 𝗘𝗠𝗢𝗝𝗜𝗦 𝗬 𝗘𝗡 𝗠𝗘𝗗𝗜𝗢 +*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢*\n*${usedPrefix + command} 👻+🙉*\n\n*𝗬𝗢𝗨 𝗠𝗨𝗦𝗧 𝗨𝗦𝗘 𝗧𝗪𝗢 𝗘𝗠𝗢𝗝𝗜𝗦 𝗔𝗡𝗗 𝗜𝗡 𝗧𝗛𝗘 𝗠𝗜𝗗𝗗𝗟𝗘 𝗨𝗦𝗘 𝗧𝗛𝗘 +*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘*\n*${usedPrefix + command} 👻+🙉*`
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let stiker = await sticker(false, res.url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}}
handler.help = ['emojimix'].map(v => v + ' emot1|emot2>')
handler.tags = ['fun']
handler.command = /^(emojimix|emogimix|combinaremojis|crearemoji|emojismix|emogismix)$/i
export default handler
const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})})
