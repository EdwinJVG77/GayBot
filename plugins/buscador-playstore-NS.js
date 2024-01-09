import fetch from 'node-fetch'; 
 import translate from '@vitalets/google-translate-api'; 
 const handler = async (m, {conn, text, args}) => { 
   if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗡𝗢𝗠𝗕𝗥𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗡𝗔 𝗔𝗣𝗞 𝗣𝗔𝗥𝗔 𝗕𝗨𝗦𝗖𝗔𝗥*\n*𝗘𝗡𝗧𝗘𝗥 𝗧𝗛𝗘 𝗡𝗔𝗠𝗘 𝗢𝗙 𝗔𝗡 𝗔𝗣𝗞 𝗧𝗢 𝗦𝗘𝗔𝗥𝗖𝗛*`; 
   try { 
     const enc = encodeURIComponent(text); 
     const json = await fetch(`https://latam-api.vercel.app/api/playstore?apikey=Diego-Ofc&q=${enc}`); 
     const gPlay = await json.json(); 
  
     const shadowgod = await translate(`${gPlay.descripcion}`, {to: 'es', autoCorrect: true}); 
     if (!gPlay.titulo) return m.reply(`${lenguajeGB['smsAvisoFG']()}*𝗦𝗜𝗡 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢𝗦*`); 
     conn.sendMessage(m.chat, {image: {url: gPlay.imagen}, caption: `
*╭━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢 | 𝗥𝗘𝗦𝗨𝗟𝗧:*
*┃ ${gPlay.titulo}*' 
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗜𝗗𝗘𝗡𝗧𝗜𝗙𝗜𝗖𝗔𝗗𝗢𝗥:*
*┃ ${gPlay.id}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗘𝗡𝗟𝗔𝗖𝗘 | 𝗟𝗜𝗡𝗞:*
*┃ ${gPlay.link}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗜𝗠𝗔𝗚𝗘𝗡 | 𝗜𝗠𝗔𝗚𝗘:*
*┃ ${gPlay.imagen}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗗𝗘𝗦𝗔𝗥𝗥𝗢𝗟𝗟𝗔𝗗𝗢𝗥*
*┃ ${gPlay.desarrollador}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡 | 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡:*
*┃ ${shadowgod.text}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗠𝗢𝗡𝗘𝗗𝗔 | 𝗖𝗨𝗥𝗥𝗘𝗡𝗖𝗬*
*┃ ${gPlay.moneda}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ ¿𝗚𝗥𝗔𝗧𝗜𝗦? | 𝗙𝗥𝗘𝗘?*
*┃ ${gPlay.gratis}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗣𝗥𝗘𝗖𝗜𝗢 | 𝗣𝗥𝗜𝗖𝗘*
*┃ ${gPlay.precio}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗣𝗨𝗡𝗧𝗨𝗔𝗖𝗜𝗢𝗡*
*┃ ${gPlay.puntuacion}*
*╰━━━━━━━━━━━━━━━━━━━━*`}, {quoted: m}); 
   } catch { 
     await m.reply(`${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗧𝗘𝗡𝗧𝗔𝗟𝗢 𝗗𝗘 𝗡𝗨𝗘𝗩𝗢*`); 
   } 
 }; 
 handler.help = ['playstore <aplicacion>']; 
 handler.tags = ['internet']; 
 handler.command = /^(playstore)$/i; 
 export default handler;