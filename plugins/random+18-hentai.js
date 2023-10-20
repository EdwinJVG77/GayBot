import axios from "axios"
import fetch from 'node-fetch'
let handler = async (m, {command, conn}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`

if (command == 'nsfwloli') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/nsfwloli.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: haha }, caption: `*乂 ⺀ NSFW - LOLI ⺀ 乂*`.trim() }, { quoted: m })}

if (command == 'nsfwfoot') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/nsfwfoot.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: haha }, caption: `*乂 ⺀ NSFW - FOOT ⺀ 乂*`.trim() }, { quoted: m })}

if (command == 'nsfwass') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/nsfwass.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]      
conn.sendMessage(m.chat, { image: { url: haha }, caption: `*乂 ⺀ NSFW - ASS ⺀ 乂*`.trim() }, { quoted: m })}

if (command == 'nsfwbdsm') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/nsfwbdsm.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendMessage(m.chat, { image: { url: haha }, caption: `*乂 ⺀ NSFW - BDSM ⺀ 乂*`.trim() }, { quoted: m })}

if (command == 'nsfwcum') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/nsfwcum.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: haha }, caption: `*乂 ⺀ NSFW - CUM ⺀ 乂*`.trim() }, { quoted: m })}

if (command == 'nsfwero') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/nsfwero.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]     
conn.sendMessage(m.chat, { image: { url: haha }, caption: `*乂 ⺀ NSFW - ERO ⺀ 乂*`.trim() }, { quoted: m })}

if (command == 'nsfwfemdom') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/nsfwfemdom.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: haha }, caption: `*乂 ⺀ NSFW - FEMDOM ⺀ 乂*`.trim() }, { quoted: m })} 

if (command == 'nsfwglass') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/nsfwglass.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: haha }, caption: `*乂 ⺀ NSFW - GLASS ⺀ 乂*`.trim() }, { quoted: m })}

if (command == 'hentai') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/hentai.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: haha }, caption: `*乂 ⺀ NSFW - HENTAI ⺀ 乂*`.trim() }, { quoted: m })}

if (command == 'nsfworgy') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/nsfworgy.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: haha }, caption: `*乂 ⺀ NSFW - ORGY ⺀ 乂*`.trim() }, { quoted: m })}

if (command == 'nsfwecchi') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/ecchi.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendMessage(m.chat, { image: { url: url }, caption: `*乂 ⺀ NSFW - ECCHI ⺀ 乂*`.trim() }, { quoted: m })}

if (command == 'nsfwfurry') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/furro.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendMessage(m.chat, { image: { url: url }, caption: `*乂 ⺀ NSFW - FURRY ⺀ 乂*`.trim() }, { quoted: m })}

if (command == 'nsfwtrapito', 'diego') {
let res = await fetch(`https://api.waifu.pics/nsfw/trap`)
let json = await res.json()
let url = json.url
conn.sendMessage(m.chat, { image: { url: url }, caption: `*乂 ⺀ NSFW - TRAPITO ⺀ 乂*`.trim() }, { quoted: m })}

if (command == 'nsfwyaoi') {
let res = await fetch(`https://nekobot.xyz/api/image?type=yaoi`)
let json = await res.json()
let url = json.message
conn.sendMessage(m.chat, { image: { url: url }, caption: `*乂 ⺀ NSFW - YAOI ⺀ 乂*`.trim() }, { quoted: m })}

if (command == 'nsfwyaoi2') {
let res = await fetch(`https://purrbot.site/api/img/nsfw/yaoi/gif`)
let json = await res.json()
let url = json.link
conn.sendMessage(m.chat, { image: { url: url }, caption: `*乂 ⺀ NSFW - YAOI 2 ⺀ 乂*`.trim() }, { quoted: m })}

if (command == 'nsfwyuri') { 
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/yuri.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: url }, caption: `*乂 ⺀ NSFW - YURI ⺀ 乂*`.trim() }, { quoted: m })}

if (command == 'nsfwyuri2') {
let resError = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/yuri.json`)).data   
let res = await fetch(`https://purrbot.site/api/img/nsfw/yuri/gif`)
let json = await res.json()
let url = json.link
if (url == '' || !url || url == null) url = await resError[Math.floor(resError.length * Math.random())]
conn.sendMessage(m.chat, { image: { url: url }, caption: `*乂 ⺀ NSFW - YURI 2 ⺀ 乂*`.trim() }, { quoted: m })}  

handler.help = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy', 'nsfwyuri', 'nsfwyuri2', 'nsfwyaoi', 'nsfwyaoi2', 'nsfwecchi', 'nsfwfurry', 'hentai']
handler.command = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglass', 'nsfworgy', 'nsfwyuri', 'nsfwyuri2', 'nsfwyaoi', 'nsfwyaoi2', 'nsfwecchi', 'nsfwfurry', 'hentai', 'nsfwtrapito', 'diego']
handler.tags = ['nsfw']
handler.register = true
handler.limit = 1
export default handler