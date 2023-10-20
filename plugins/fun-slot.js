/* CREDITOS A https://github.com/FG98F */

const handler = async (m, {args, usedPrefix, command}) => {
  const fa = `${lenguajeGB['smsAvisoMG']()}*𝗗𝗘𝗕𝗘 𝗗𝗘 𝗨𝗦𝗔𝗥 𝗗𝗘 𝗟𝗔 𝗦𝗜𝗚𝗨𝗜𝗘𝗡𝗧𝗘 𝗠𝗔𝗡𝗘𝗥𝗔:*\n*𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command} 100*\n\n*𝗬𝗢𝗨 𝗠𝗨𝗦𝗧 𝗨𝗦𝗘 𝗔𝗦 𝗙𝗢𝗟𝗟𝗢𝗪𝗦:*\n*𝗘𝗫𝗔𝗠𝗣𝗟𝗘: ${usedPrefix + command} 100*`.trim();
  if (!args[0]) throw fa;
  if (isNaN(args[0])) throw fa;
  const apuesta = parseInt(args[0]);
  const users = global.db.data.users[m.sender];
  const time = users.lastslot + 100;
  if (new Date - users.lastslot < 100) throw `*𝗘𝗦𝗣𝗘𝗥𝗘 ${msToTime(time - new Date())} 𝗣𝗔𝗥𝗔 𝗩𝗢𝗟𝗩𝗘𝗥 𝗔 𝗔𝗣𝗢𝗦𝗧𝗔𝗥*`;
  if (apuesta < 100) throw `${lenguajeGB['smsAvisoFG']()}*𝗘𝗟 𝗠𝗜𝗡𝗜𝗠𝗢 𝗣𝗔𝗥𝗔 𝗔𝗣𝗢𝗦𝗧𝗔𝗥 𝗘𝗦 𝗗𝗘 100 𝗫𝗣*`;
  if (users.exp < apuesta) {
    throw `${lenguajeGB['smsAvisoFG']()}*𝗫𝗣 𝗜𝗡𝗦𝗨𝗙𝗜𝗖𝗜𝗘𝗡𝗧𝗘*\n*𝗜𝗡𝗦𝗨𝗙𝗙𝗜𝗖𝗜𝗘𝗡𝗧 𝗫𝗣*`;
  }
  const emojis = ['🐋', '🐉', '🕊️'];
  let a = Math.floor(Math.random() * emojis.length);
  let b = Math.floor(Math.random() * emojis.length);
  let c = Math.floor(Math.random() * emojis.length);
  const x = [];
  const y = [];
  const z = [];
  for (let i = 0; i < 3; i++) {
    x[i] = emojis[a];
    a++;
    if (a == emojis.length) a = 0;
  }
  for (let i = 0; i < 3; i++) {
    y[i] = emojis[b];
    b++;
    if (b == emojis.length) b = 0;
  }
  for (let i = 0; i < 3; i++) {
    z[i] = emojis[c];
    c++;
    if (c == emojis.length) c = 0;
  }
  let end;
  if (a == b && b == c) {
    end = `*¡𝗚𝗔𝗡𝗔𝗦𝗧𝗘 +${apuesta + apuesta} 𝗫𝗣! ⚡*`;
    users.exp += apuesta;
  } else if (a == b || a == c || b == c) {
    end = `*¡𝗖𝗔𝗦𝗜 𝗟𝗢 𝗟𝗢𝗚𝗥𝗔𝗦!, 𝗦𝗜𝗚𝗨𝗘 𝗜𝗡𝗧𝗘𝗡𝗧𝗔𝗡𝗗𝗢*\n*𝗧𝗢𝗠𝗔 +10 𝗫𝗣*`;
    users.exp += 10;
  } else {
    end = `*¡𝗣𝗘𝗥𝗗𝗜𝗦𝗧𝗘 -${apuesta} 𝗫𝗣!* ⚡`;
    users.exp -= apuesta;
  }
  users.lastslot = new Date * 1;
  return await m.reply(
      `
🎰 *┃ 𝗦𝗟𝗢𝗧𝗦* 
*╭━━━━━━━━━*
*┃ ${x[0]} ┃ ${y[0]} ┃ ${z[0]}*
*┃ ${x[1]} ┃ ${y[1]} ┃ ${z[1]}*
*┃ ${x[2]} ┃ ${y[2]} ┃ ${z[2]}*
*╰━━━━━━━━━*
🎰 *┃* ${end}`);
};
handler.help = ['slot <apuesta>'];
handler.tags = ['game'];
handler.command = ['casino', 'slot'];
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ' 𝗠 ' + seconds + ' 𝗦 ';
}

