import axios from 'axios';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 𝗗𝗘 𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*\n*${usedPrefix + command} edwinjvg_*\n\n*𝗘𝗡𝗧𝗘𝗥 𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘:*\n*${usedPrefix + command} edwinjvg_*`;
  const res = await igstalk(args[0].replace(/^@/, ''));
  const res2 = await fetch(`https://api.lolhuman.xyz/api/stalkig/${args[0].replace(/^@/, '')}?apikey=${lolkeysapi}`);
  const res3 = await res2.json();
  const json = JSON.parse(JSON.stringify(res));
  const iggs = `
*╭━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗡𝗢𝗠𝗕𝗥𝗘 | 𝗡𝗔𝗠𝗘*
*┃ ${json.username}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢(𝗔) | 𝗨𝗦𝗘𝗥*
*┃ ${json.fullname}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗘𝗡𝗟𝗔𝗖𝗘 | 𝗟𝗜𝗡𝗞*
*┃ https://instagram.com/${json.username.replace(/^@/, '')}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗦𝗘𝗚𝗨𝗜𝗗𝗢𝗥𝗘𝗦 | 𝗙𝗢𝗟𝗟𝗢𝗪𝗘𝗥𝗦*
*┃ ${json.followers}* 
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗦𝗘𝗚𝗨𝗜𝗗𝗢𝗦 | 𝗙𝗢𝗟𝗟𝗢𝗪𝗜𝗡𝗚*
*┃ ${json.following}* 
*┃━━━━━━━━━━━━━━━━━━━━* 
*┃ 𝗣𝗨𝗕𝗟𝗜𝗖𝗔𝗖𝗜𝗢𝗡𝗘𝗦 | 𝗣𝗢𝗦𝗧𝗦*
*┃ ${json.post}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡 | 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡*
*┃* ${json.bio}
*╰━━━━━━━━━━━━━━━━━━━━*`.trim();
  const aa = `${res3.result.photo_profile || res.profile}`;
  await conn.sendFile(m.chat, aa, 'error.jpg', iggs, m);
};
handler.help = ['igstalk <username>'];
handler.tags = ['internet'];
handler.command = /^(igstalk|verig)$/i;
handler.limit = 1
export default handler;

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {'cookie': '_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8', 'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'}}).then((res) => {
      const $ = cheerio.load(res.data);
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts', ''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers', ''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following', ''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()};
      resolve(result);
    });
  });
}
