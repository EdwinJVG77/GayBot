let handler = async (m, { usedPrefix }) => {
try {
delete global.chatgpt.data.users[m.sender]  
m.reply(`${lenguajeGB['smsAvisoEG']()}*𝗦𝗘 𝗘𝗟𝗜𝗠𝗜𝗡𝗢 𝗖𝗢𝗡 𝗘𝗫𝗜𝗧𝗢 𝗘𝗟 𝗛𝗜𝗦𝗧𝗢𝗥𝗜𝗔𝗟 𝗗𝗘 𝗠𝗘𝗡𝗦𝗔𝗝𝗘𝗦 𝗘𝗡𝗧𝗥𝗘 𝗨𝗦𝗧𝗘𝗗 𝗬 𝗖𝗛𝗔𝗧𝗚𝗣𝗧, 𝗥𝗘𝗖𝗨𝗘𝗥𝗗𝗘 𝗤𝗨𝗘 𝗣𝗨𝗘𝗗𝗘 𝗨𝗧𝗜𝗟𝗜𝗭𝗔𝗥 𝗘𝗦𝗧𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗖𝗨𝗔𝗡𝗗𝗢 𝗧𝗘𝗡𝗚𝗔 𝗔𝗟𝗚𝗨𝗡 𝗘𝗥𝗥𝗢𝗥 𝗖𝗢𝗡 𝗘𝗟 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 ${usedPrefix}ia*`)    
} catch (error1) {   
console.log(error1)
throw `${lenguajeGB['smsAvisoFG']()}*𝗩𝗨𝗘𝗟𝗩𝗔 𝗔 𝗜𝗡𝗧𝗘𝗡𝗧𝗔𝗥𝗟𝗢*`   
}} 
handler.command = ['delchatgpt', 'delia', 'delhey']
export default handler
