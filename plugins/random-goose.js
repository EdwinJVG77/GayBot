import fetch from "node-fetch";
let handler = async (m, {conn}) => {
  try {
    let res = await fetch("https://nekos.life/api/v2/img/goose");
    let json = await res.json();
    let img = await json.url;
    let caption = `
🪿💕
`.trim();
    conn.sendFile(m.chat, img, "goose.jpg", caption, m);
  } catch (e) {
    console.log(e);
    throw "*Error!*";
  }
};
handler.help = ["goose"];
handler.tags = ["random"];
handler.command = ["goose", "ganso"];
handler.limit = false
handler.fail = null;
export default handler;
