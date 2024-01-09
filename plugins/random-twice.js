let handler = async(m, { conn, text, command }) => {
let yh = global.twice
let url = yh[Math.floor(Math.random() * yh.length)]
conn.sendMessage(m.chat, { image: { url: url }, caption: "*乂 ⺀ K-POP - TWICE ⺀ 乂*" }, { quoted: m });
}
handler.command = /^(twice|fer|tuais)$/i
handler.limit = false
handler.tags = ['kpop']
handler.help = ['twice']
export default handler

global.twice = [
"https://telegra.ph/file/642ed3935636264aa50aa.jpg",
"https://telegra.ph/file/7de5562904881d463e5f9.jpg",
"https://telegra.ph/file/fc3ddd0ecfa3398583e74.jpg",
"https://telegra.ph/file/e26067919099c2d4bb53a.jpg",
"https://telegra.ph/file/f8d033184ba306e43e279.jpg",
"https://telegra.ph/file/2bcf7c516e1456709da67.jpg",
"https://telegra.ph/file/ca255d7d6b0472b71ea52.jpg",
"https://telegra.ph/file/89093d21c92001d8487f5.jpg",
"https://telegra.ph/file/249c84c96691e705bd12b.jpg",
"https://telegra.ph/file/6bb2c2edb9dc7f1e0feb9.jpg",
"https://telegra.ph/file/37dc1effd255d7f69aa3a.jpg", "https://telegra.ph/file/eacc7dcaa4afd73a47064.jpg", "https://telegra.ph/file/28e6d7d192b74a71b9d70.jpg", "https://telegra.ph/file/28e6d7d192b74a71b9d70.jpg", "https://telegra.ph/file/b482b31e159c8f3d8e2b0.jpg", "https://telegra.ph/file/ef78fba8048f4d4f3a45a.jpg", "https://telegra.ph/file/11cd6e2a29e281c68f313.jpg", "https://telegra.ph/file/2b1569c05d9c98a3cd49e.jpg", "https://telegra.ph/file/5bb58dfc723ded769b4f9.jpg", "https://telegra.ph/file/25ecb7751792d1b3e9954.jpg", "https://telegra.ph/file/4d5c83041669fb02099f8.jpg", "https://telegra.ph/file/88eef3a9fdcf7a7fe9f89.jpg", "https://telegra.ph/file/eacc7dcaa4afd73a47064.jpg", "https://telegra.ph/file/7ca3905da864ca7e83de1.jpg", "https://telegra.ph/file/4835450213d43c2eabd6c.jpg", "https://telegra.ph/file/04463625e7c21db7d65cb.jpg", "https://telegra.ph/file/c95fcecd2470954e2c633.jpg", "https://telegra.ph/file/482f9202722426cf53afb.jpg", "https://telegra.ph/file/d615296521e9ab3b438e7.jpg", "https://telegra.ph/file/254416459bc2c9938e644.jpg", "https://telegra.ph/file/4f882d3807e772bf1b59b.jpg", "https://telegra.ph/file/ac8add72919e6de6cb532.jpg", "https://telegra.ph/file/e224476c15879ba7d9e95.jpg", "https://telegra.ph/file/70ab3a22ecd15a959b21d.jpg", "https://telegra.ph/file/4fe84712f4aca4f6afec4.jpg", "https://telegra.ph/file/24c259bf8359df00d6844.jpg", "https://telegra.ph/file/31e8eb2ca05402a4bfe6c.jpg", "https://telegra.ph/file/9f442e934a60bbf22d251.jpg", "https://telegra.ph/file/1180c63e7ad87c5806e51.jpg", "https://telegra.ph/file/cd7b687e2f5aaa968125c.jpg", "https://telegra.ph/file/b07d54e37bbbd943372bc.jpg", "https://telegra.ph/file/591bdc6bd1a702cccde48.jpg", "https://telegra.ph/file/a73620ef951d8a41a997a.jpg", "https://telegra.ph/file/da97a9f1319bb0a877f9e.jpg", "https://telegra.ph/file/a11ef35c5905eac97fe4d.jpg", "https://telegra.ph/file/535bf2a438e803a7dafcd.jpg", "https://telegra.ph/file/03169e12f39a8ad25a8b7.jpg", "https://telegra.ph/file/e1ed82e1443c8d89cc32c.jpg", "https://telegra.ph/file/d66ea95c753dbd29f60a9.jpg", "https://telegra.ph/file/19f6b039d49766d97450b.jpg", "https://telegra.ph/file/b182cf36c3a6fa24cd5d2.jpg", "https://telegra.ph/file/07ba8f004c83239312208.png", "https://telegra.ph/file/feb1320d7193237880d08.jpg"
]
