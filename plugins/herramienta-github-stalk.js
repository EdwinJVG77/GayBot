import axios from 'axios'
var handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}*𝗜𝗡𝗚𝗥𝗘𝗦𝗘 𝗘𝗟 𝗡𝗢𝗠𝗕𝗥𝗘 𝗗𝗘 𝗨𝗡 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 𝗗𝗘 𝗚𝗜𝗧𝗛𝗨𝗕*`, m)

  await m.reply('*B U S C A N D O ✅*')
  let request = await githubstalk(text) 
    let { username, following, followers, type, bio, company, blog, location, email, public_repo, public_gists, profile_pic } = request
    let thumb = await (profile_pic)
    let hasil = `
*╭━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗡𝗢𝗠𝗕𝗥𝗘 | 𝗡𝗔𝗠𝗘:*
*┃ ${username}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗕𝗜𝗢:*
*┃ ${bio}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗖𝗢𝗠𝗣𝗔Ñ𝗜𝗔 | 𝗖𝗢𝗠𝗣𝗔𝗡𝗬:*
*┃ ${company}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗘𝗠𝗔𝗜𝗟:* 
*┃ ${email}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗕𝗟𝗢𝗚:* 
*┃* ${blog}
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗥𝗘𝗣𝗢𝗦𝗜𝗧𝗢𝗥𝗜𝗢𝗦:* 
*┃ ${public_repo}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗚𝗜𝗦𝗧𝗦 𝗣𝗨𝗕𝗟𝗜𝗞:* 
*┃ ${public_gists}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗦𝗘𝗚𝗨𝗜𝗗𝗢𝗥𝗘𝗦 | 𝗙𝗢𝗟𝗟𝗢𝗪𝗘𝗥𝗦:* 
*┃ ${followers}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗦𝗨𝗜𝗚𝗨𝗜𝗘𝗡𝗗𝗢 | 𝗙𝗢𝗟𝗟𝗢𝗪𝗜𝗡𝗚:*
*┃ ${following}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗨𝗕𝗜𝗖𝗔𝗖𝗜𝗢𝗡 | 𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡:*
*┃ ${location}*
*┃━━━━━━━━━━━━━━━━━━━━*
*┃ 𝗧𝗜𝗣𝗢 | 𝗧𝗬𝗣𝗘:* 
*┃ ${type}*
*╰━━━━━━━━━━━━━━━━━━━━*`

    conn.sendFile(m.chat, logogit, 'githubstalk.jpg', hasil, m)
}
handler.help = ['githubstalk'].map(v => v + ' <query>')
handler.tags = ['internet']
handler.command = /^(githubstalk)$/i

export default handler

async function githubstalk(user) {
    return new Promise((resolve, reject) => {
        axios.get('https://api.github.com/users/'+user)
        .then(({ data }) => {
            let hasil = {
                username: data.login,
                nickname: data.name,
                bio: data.bio,
                id: data.id,
                nodeId: data.node_id,
                profile_pic: data.avatar_url,
                url: data.html_url,
                type: data.type,
                admin: data.site_admin,
                company: data.company,
                blog: data.blog,
                location: data.location,
                email: data.email,
                public_repo: data.public_repos,
                public_gists: data.public_gists,
                followers: data.followers,
                following: data.following,
                ceated_at: data.created_at,
                updated_at: data.updated_at
            }
            resolve(hasil)
        })
    })
}
