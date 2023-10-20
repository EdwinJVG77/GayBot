/* Creado por Bruno Sobrino (https://github.com/BrunoSobrino) */

import fetch from 'node-fetch'
import axios from 'axios'
import { load } from 'cheerio'
let handler = async (m, {text, usedPrefix, command, conn}) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗡𝗢𝗠𝗕𝗥𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗡𝗔 𝗣𝗘𝗟𝗜𝗖𝗨𝗟𝗔 𝗣𝗔𝗥𝗔 𝗕𝗨𝗦𝗖𝗔𝗥*\n\n*𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗡𝗔𝗠𝗘 𝗢𝗙 𝗔𝗡 𝗠𝗢𝗩𝗜𝗘 𝗧𝗢 𝗦𝗘𝗔𝗥𝗖𝗛*`   
let aaaa = await searchC(text)
if (command == 'pelisplus') aaaa = await searchP(text)
if (aaaa == '') throw `${lenguajeGB['smsAvisoFG']()}*𝗡𝗢 𝗦𝗘 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗢 𝗡𝗜𝗡𝗚𝗨𝗡𝗔 𝗣𝗘𝗟𝗜𝗖𝗨𝗟𝗔*`
let img = 'https://cinefilosoficial.com/wp-content/uploads/2021/07/cuevana.jpg'
if (command == 'pelisplus') img = 'https://elcomercio.pe/resizer/RJM30xnujgfmaODGytH1rRVOrAA=/400x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/BJ2L67XNRRGHTFPKPDOEQ2AH5Y.jpg'
let res = await aaaa.map((v) => `
*╭━━━━━━━━━━━━━━━━━━*
*┃ 𝗡𝗢𝗠𝗕𝗥𝗘 | 𝗡𝗔𝗠𝗘*
*┃ ${v.title}*
*┃━━━━━━━━━━━━━━━━━━*
*┃ 𝗘𝗡𝗟𝗔𝗖𝗘 | 𝗟𝗜𝗡𝗞:*
*┃ ${v.link}*`).join`
*╰━━━━━━━━━━━━━━━━━━*\n\n`
let ads = '
*╭━━━━━━━━━━━━━━━━━━*
*┃ 𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗢𝗥 𝗗𝗘 𝗔𝗡𝗨𝗡𝗖𝗜𝗢𝗦*
*┃ 𝗥𝗘𝗖𝗢𝗠𝗘𝗡𝗗𝗔𝗗𝗢: Block This*
*┃━━━━━━━━━━━━━━━━━━*
*┃ 𝗘𝗡𝗟𝗔𝗖𝗘 | 𝗟𝗜𝗡𝗞:*
*┃ https://block-this.com/block-this-latest.apk*
*╰━━━━━━━━━━━━━━━━━━*\n\n'
conn.sendMessage(m.chat, { image: { url: img }, caption: ads + res }, {quoted: m})
}
handler.command = ['cuevana', 'pelisplus']
handler.level = false
handler.limit = 1
export default handler

const safeLoad = async(url, options = {}) => {
try {
const { data: pageData } = await axios.get(url, options)
const $ = load(pageData) 
return $
} catch (err) {
if (err.response)
throw new Error(err.response.statusText)
throw err }}

async function searchC(query, numberPage = 1) {
const $ = await safeLoad(`https://cuevana3.info/page/${numberPage}/`, {
params: { s: query }})
const resultSearch = []
$(".results-post > article").each((_, e) => {
const element = $(e)
const title = element.find("header > h2").text()
const link = element.find(".lnk-blk").attr("href")
resultSearch.push({ title: title, link: link })})
return resultSearch }

async function searchP(query, numberPage = 1) { 
const $ = await safeLoad(`https://pelisplushd.cx/search/`, {
params: { s: query, page: numberPage }})
const resultSearch = []
$("a[class^='Posters']").each((_, e) => {
const element = $(e)
const title = element.find(".listing-content > p").text()
const link = element.attr("href")
resultSearch.push({ title: title,  link: link })})
return resultSearch }