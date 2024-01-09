import axios from "axios";
import cheerio from "cheerio";
async function wikipedia(querry) {
  try {
    const link = await axios.get(`https://es.wikipedia.org/wiki/${querry}`);
    const $ = cheerio.load(link.data);
    let judul = $("#firstHeading").text().trim();
    let thumb =
      $("#mw-content-text").find("div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img").attr("src") ||
      `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`;
    let isi = [];
    $("#mw-content-text > div.mw-parser-output").each(function (rayy, Ra) {
      let penjelasan = $(Ra).find("p").text().trim();
      isi.push(penjelasan);
    });
    for (let i of isi) {
      const data = {
        status: link.status,
        result: {
          judul: judul,
          thumb: "https:" + thumb,
          isi: i,
        },
      };
      return data;
    }
  } catch (err) {
    var notFond = {
      status: link.status,
      Pesan: eror,
    };
    return notFond;
  }
}
let handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text)
    throw `${lenguajeGB['smsAvisoMG']()}*𝗘𝗦𝗖𝗥𝗜𝗕𝗔 𝗟𝗔 𝗣𝗔𝗟𝗔𝗕𝗥𝗔 𝗖𝗟𝗔𝗩𝗘 𝗣𝗔𝗥𝗔 𝗕𝗨𝗦𝗖𝗔𝗥*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢:*\n*${usedPrefix + command} Luna*\n\n*𝗧𝗬𝗣𝗘 𝗧𝗛𝗘 𝗞𝗘𝗬𝗪𝗢𝗥𝗗 𝗧𝗢 𝗦𝗘𝗔𝗥𝗖𝗛*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘:*\n*${usedPrefix + command} Universe*`;
  wikipedia(`${text}`)
    .then((res) => {
      m.reply(`` + res.result.isi);
    })
    .catch(() => {
      m.reply(`${lenguajeGB['smsAvisoMG']()}*𝗡𝗢 𝗦𝗘 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗢 𝗟𝗢 𝗤𝗨𝗘 𝗕𝗨𝗦𝗖𝗔. 𝗣𝗥𝗢𝗖𝗨𝗥𝗘 𝗨𝗦𝗔𝗥 𝗨𝗡𝗔 𝗣𝗔𝗟𝗔𝗕𝗥𝗔 𝗖𝗟𝗔𝗩𝗘*\n\n*𝗡𝗢𝗧 𝗙𝗢𝗨𝗡𝗗 𝗪𝗛𝗔𝗧 𝗬𝗢𝗨 𝗔𝗥𝗘 𝗟𝗢𝗢𝗞𝗜𝗡𝗚 𝗙𝗢𝗥. 𝗧𝗥𝗬 𝗧𝗢 𝗨𝗦𝗘 𝗔 𝗞𝗘𝗬𝗪𝗢𝗥𝗗*`);
    });
};
handler.help = ["wikipedia"].map((v) => v + " <apa>");
handler.tags = ["internet"];
handler.command = /^(wiki|wikipedia)$/i;
export default handler;
