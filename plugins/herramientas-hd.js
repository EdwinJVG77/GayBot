import FormData from "form-data";
import Jimp from "jimp";
const handler = async (m, {conn, usedPrefix, command}) => {
 try {    
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || q.mediaType || "";
  if (!mime) throw `${lenguajeGB['smsAvisoMG']()}*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗔 𝗨𝗡𝗔 𝗜𝗠𝗔𝗚𝗘𝗡*\n*𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 𝗔𝗡 𝗜𝗠𝗔𝗚𝗘*`;
  if (!/image\/(jpe?g|png)/.test(mime)) throw `*${lenguajeGB['smsAvisoMG']()}*𝗘𝗟 𝗙𝗢𝗥𝗠𝗔𝗧𝗢 𝗗𝗘𝗟 𝗔𝗥𝗖𝗛𝗜𝗩𝗢 (${mime}) 𝗡𝗢 𝗘𝗦 𝗖𝗢𝗠𝗣𝗔𝗧𝗜𝗕𝗟𝗘, 𝗘𝗡𝗩𝗜𝗔 𝗢 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘 𝗔 𝗨𝗡𝗔 𝗙𝗢𝗧𝗢*`;
  m.reply(`${lenguajeGB['smsAvisoMG']()}*𝗣𝗥𝗢𝗖𝗘𝗦𝗔𝗡𝗗𝗢 𝗜𝗠𝗔𝗚𝗘𝗡...*\n*𝗣𝗥𝗢𝗖𝗘𝗦𝗦𝗜𝗡𝗚 𝗜𝗠𝗔𝗚𝗘...*`);
  let img = await q.download?.();
  let pr = await remini(img, "enhance");
  conn.sendMessage(m.chat, {image: pr}, {quoted: m});
 } catch {
  throw `${lenguajeGB['smsAvisoMG']()}*𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗔 𝗨𝗡𝗔 𝗜𝗠𝗔𝗚𝗘𝗡*\n*𝗥𝗘𝗦𝗣𝗢𝗡𝗗 𝗧𝗢 𝗔𝗡 𝗜𝗠𝗔𝗚𝗘*`;
 }
};
handler.help = ["remini", "hd", "enhance"];
handler.tags = ["ai", "tools"];
handler.command = ["remini", "hd", "enhance"];
export default handler;

async function remini(imageData, operation) {
  return new Promise(async (resolve, reject) => {
    const availableOperations = ["enhance", "recolor", "dehaze"];
    if (availableOperations.includes(operation)) {
      operation = operation;
    } else {
      operation = availableOperations[0];
    }
    const baseUrl = "https://inferenceengine.vyro.ai/" + operation + ".vyro";
    const formData = new FormData();
    formData.append("image", Buffer.from(imageData), {filename: "enhance_image_body.jpg", contentType: "image/jpeg"});
    formData.append("model_version", 1, {"Content-Transfer-Encoding": "binary", contentType: "multipart/form-data; charset=utf-8"});
    formData.submit({url: baseUrl, host: "inferenceengine.vyro.ai", path: "/" + operation, protocol: "https:", headers: {"User-Agent": "okhttp/4.9.3", Connection: "Keep-Alive", "Accept-Encoding": "gzip"}},
      function (err, res) {
        if (err) reject(err);
        const chunks = [];
        res.on("data", function (chunk) {chunks.push(chunk)});
        res.on("end", function () {resolve(Buffer.concat(chunks))});
        res.on("error", function (err) {
        reject(err);
        });
      },
    );
  });
}
