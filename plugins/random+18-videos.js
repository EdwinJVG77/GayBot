import fetch from 'node-fetch';
const handler = async (m, {conn, command, usedPrefix}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`
  switch (command) {
  case 'pornvid': case 'pornovideo':
      const url = await pornvid[Math.floor(Math.random() * pornvid.length)];
      conn.sendMessage(m.chat, {video: {url: url}, caption: `_${command}_`}, {quoted: m});
      break;
    case 'pornvidgirl': case 'pornovideochica': case 'pornvid2':
      const url2 = await pornvidgirl[Math.floor(Math.random() * pornvidgirl.length)];
      conn.sendMessage(m.chat, {video: {url: url2}, caption: `_${command}_`}, {quoted: m});
      break;
      case 'pornvidboy': case 'pornovideochico': case 'pornvid3':
      const url3 = await pornvidboy[Math.floor(Math.random() * pornvidboy.length)];
      conn.sendMessage(m.chat, {video: {url: url3}, caption: `_${command}_`}, {quoted: m});
      break;
      case 'pornvidrandom': case 'pornovideorandom': case 'pornvid4':
      const url4 = await pornvidrandom[Math.floor(Math.random() * pornvidrandom.length)];
      conn.sendMessage(m.chat, {video: {url: url4}, caption: `_${command}_`}, {quoted: m});
      break;
  }
};
handler.command = /^(pornvid|pornovideo|pornvidgirl|pornovideochica|pornvid2|pornvidboy|pornovideochico|pornvid3|pornvidrandom|pornovideorandom|pornvid4)$/i;
handler.register = true
handler.limit = 5
export default handler;
global.pornvid = [
  "https://telegra.ph/file/186769995792df66cd305.mp4",
  
  "https://telegra.ph/file/ab97e9ef1dc140f63e4a7.mp4",
  
  "https://telegra.ph/file/a9f4b43ea025f2c66ac71.mp4",
  
  "https://telegra.ph/file/f288f9602fca8a7b231d7.mp4",
  
  "https://telegra.ph/file/39b08285e9d0bc2889cda.mp4",
  
  "https://telegra.ph/file/e3d42ea872c01763fdcb4.mp4",
  
  "https://telegra.ph/file/0b097d8773ee1fc73a9dd.mp4",
  
  "https://telegra.ph/file/fc53312eab4e3cdd0e371.mp4",
  
  "https://telegra.ph/file/9a4955347a56c9dd6270c.mp4",
  
  "https://telegra.ph/file/7a9f33856a067fb9c709d.mp4",
  
  "https://telegra.ph/file/b2f4cdbf9dfd33d86901e.mp4",
  
  "https://telegra.ph/file/70f1501d269653691fed2.mp4",
  
  "https://telegra.ph/file/6db60ae2260ee5fcecc72.mp4",
  
  "https://telegra.ph/file/0f1bac140d872a04ca9da.mp4",
  
  "https://telegra.ph/file/1744220a9eaa9273a77c3.mp4",
  
  "https://telegra.ph/file/b45619d07e97c717fac45.mp4",
  
  "https://telegra.ph/file/333f995f56e108e3b85d3.mp4",
  
  "https://telegra.ph/file/d06c59f0fba2f1b772335.mp4",
  
  "https://telegra.ph/file/98141de828da2859f3fb8.mp4",
  
  "https://telegra.ph/file/6efe0cc4d18f7074f78d0.mp4",
  
  "https://telegra.ph/file/82faeaace093abe6d3f9b.mp4",
  
  "https://telegra.ph/file/40c9c705e1f24b0334a7f.mp4",
  
  "https://telegra.ph/file/2014fecfe938b0d26ed4c.mp4",
  
  "https://telegra.ph/file/d46724d335b16263f6e4e.mp4"
];
global.pornvidgirl = [
  "https://telegra.ph/file/1eab154e00127965aee76.mp4",
  
  "https://telegra.ph/file/93d77a0f323127cc3efd2.mp4",
  
  "https://telegra.ph/file/f675a19abd59c80798c45.mp4",
  
  "https://telegra.ph/file/01cfdf119452e6a0433ef.mp4",
  
  "https://telegra.ph/file/850044bb7e1c104151514.mp4",
  
  "https://telegra.ph/file/ee8151d037a390fe6ba2e.mp4",
  
  "https://telegra.ph/file/eb280ba7355c00f32102b.mp4",
  
  "https://telegra.ph/file/92b25d2a7b0756bc72924.mp4",
  
  "https://telegra.ph/file/b0713a0435cd4195a7468.mp4",
  
  "https://telegra.ph/file/a34b6fad07e339da42bf7.mp4",
  
  "https://telegra.ph/file/045c13feafdae5642e56f.mp4",
  
  "https://telegra.ph/file/5d46f0f20c809c0067c59.mp4",
  
  "https://telegra.ph/file/f62c0e37dd400891537af.mp4",
  
  "https://telegra.ph/file/a24aa239a5857b8f2c1c8.mp4",
  
  "https://telegra.ph/file/da101c5d5a52f3b333483.mp4",
  
  "https://telegra.ph/file/7d84b61e577d9a8901316.mp4",
  
  "https://telegra.ph/file/71f12f334f2edc1bdd402.mp4",
  
  "https://telegra.ph/file/f202e165b1e3cb834b2fb.mp4",
  
  "https://telegra.ph/file/c147397a92dd9033d19b3.mp4",
  
  "https://telegra.ph/file/298196dd43b9b10d55d2c.mp4",
  
  "https://telegra.ph/file/171d9a94133ce88275df5.mp4",
  
  "https://telegra.ph/file/43b82fdc1cef5ac278cae.mp4",
  
  "https://telegra.ph/file/c9d68c49e8ffaee75cb2d.mp4",
  
  "https://telegra.ph/file/3b681977af30091541475.mp4",
  
  "https://telegra.ph/file/1f244359ee381fa6993e7.mp4",
  
  "https://telegra.ph/file/1da1a98ec40a5d3b99e05.mp4",
  
  "https://telegra.ph/file/5c4182ce9871fa4c61667.mp4",
  
  "https://telegra.ph/file/4d4a12b9e1895a66d09d1.mp4",
  
  "https://telegra.ph/file/5c7d23448c6228253c8cf.mp4",
  
  "https://telegra.ph/file/71cc4c67c858973079dac.mp4",
  
  "https://telegra.ph/file/375aa213731c04dd9230f.mp4",
  
  "https://telegra.ph/file/0c3d847b27fd93bd87886.mp4",
  
  "https://telegra.ph/file/f19000184e49c2c6cc42d.mp4",
  
  "https://telegra.ph/file/60187eba8454155fcf023.mp4",
  
  "https://telegra.ph/file/83ef4e78a76b44b6f84e1.mp4",
  
  "https://telegra.ph/file/37749edd0092570e1ef60.mp4",
  
  "https://telegra.ph/file/896d5221b5ea298768647.mp4",
  
  "https://telegra.ph/file/8b40753c3a646ad30077d.mp4",

"https://telegra.ph/file/c53b9115f8aae602a1416.mp4",

"https://telegra.ph/file/69ec35722940210ead025.mp4",

"https://telegra.ph/file/e6bb857f5b830068dbf15.mp4",

"https://telegra.ph/file/fdb9368daf71dd4cfa299.mp4",

"https://telegra.ph/file/5964240399d4af6bd6905.mp4",

"https://telegra.ph/file/2a50bbdecb382264d6dc0.mp4",

"https://telegra.ph/file/4a1af1ef3d1762c46239f.mp4",

"https://telegra.ph/file/3c7d2bc096dde72e3917e.mp4",

"https://telegra.ph/file/44471aa07c61f1fa3ac50.mp4",

"https://telegra.ph/file/5d859f1721e328e780725.mp4",

"https://telegra.ph/file/b1f3f77e09cbb00eb1687.mp4",

"https://telegra.ph/file/2bc5d53c57ad4f7483cd0.mp4",

"https://telegra.ph/file/33170131849c3988f5f92.mp4",

"https://telegra.ph/file/672cb85a258004bd8ad7f.mp4",

"https://telegra.ph/file/06ad2f4e8ffdc3f58beac.mp4",

"https://telegra.ph/file/ccc28d7be5a6ebc75d5fa.mp4",

"https://telegra.ph/file/51d443c115e3dc0a1e65f.mp4",

"https://telegra.ph/file/aedef288db5d179a84c14.mp4",

"https://telegra.ph/file/0146df108abd810539e8a.mp4",

"https://telegra.ph/file/413600d907aaff6fa2a1a.mp4",

"https://telegra.ph/file/7ca63fa097d54b7601bcf.mp4",

"https://telegra.ph/file/4cf07df81ef3540b702c0.mp4",

"https://telegra.ph/file/f678f9abfa39347c30602.mp4",

"https://telegra.ph/file/43b2c75c758688fc02027.mp4",

"https://telegra.ph/file/d44089d8f381f7e103be8.mp4",

"https://telegra.ph/file/06571ccedf3695d511561.mp4",

"https://telegra.ph/file/a3acc29375ce08762d663.mp4",

"https://telegra.ph/file/115465590f0af100ff7f5.mp4",

"https://telegra.ph/file/3972d4abfb44473478c15.mp4",

"https://telegra.ph/file/cd79747392652b84e1ada.mp4",

"https://telegra.ph/file/1f2915de1128d90989b0a.mp4",

"https://telegra.ph/file/3132499c6dabd293019b4.mp4",

"https://telegra.ph/file/cd8711cb016a1ae15db61.mp4",

"https://telegra.ph/file/bbe62b130df59d687bb1d.mp4",

"https://telegra.ph/file/76662bb6d28f74752a9cc.mp4",

"https://telegra.ph/file/a1954e9d511f6d9b4cda4.mp4",

"https://telegra.ph/file/33fbbe934371ce0de0186.mp4",

"https://telegra.ph/file/0f507593a75377f562f01.mp4",

"https://telegra.ph/file/1998c127897e40d8aefbc.mp4",

"https://telegra.ph/file/65176ea935d08f894dc0e.mp4",

"https://telegra.ph/file/240c8df0dfc9e9f995161.mp4",

"https://telegra.ph/file/33d1ce89476aa9d619b4e.mp4",

"https://telegra.ph/file/cc9d3b1579ddeb5d6390a.mp4",

"https://telegra.ph/file/091710bf5a5ff596a3d48.mp4",

"https://telegra.ph/file/89fac403d3a163dad452b.mp4",

"https://telegra.ph/file/46fb4bcba669bb79498ea.mp4",

"https://telegra.ph/file/d49cd47288bfd16e06ce7.mp4",

"https://telegra.ph/file/01005702c3c378a493dc8.mp4",

"https://telegra.ph/file/83f8b152ebdd49a702be2.mp4",

"https://telegra.ph/file/9f98bfd9a14f37e6e645d.mp4",

"https://telegra.ph/file/2259d1bb0a0b3ea130fc7.mp4",

"https://telegra.ph/file/ade2fa523552077a52aa2.mp4",

"https://telegra.ph/file/51d9a0bc9a927dedb6af0.mp4",

"https://telegra.ph/file/bcf9a07eadd9944be34bb.mp4",
];
global.pornvidboy = [
  "https://telegra.ph/file/ea7f0ee29609d4338b6e7.mp4",
  
  "https://telegra.ph/file/4b1202262eede42221529.mp4",
  
  "https://telegra.ph/file/ecb1704df3f1bdc10fd84.mp4",
  
  "https://telegra.ph/file/399c71c4010544779dfc7.mp4",
  
  "https://telegra.ph/file/e03529e1301e6b41ce8d3.mp4",
  
  "https://telegra.ph/file/be9dc079c6ced048e4248.mp4",
  
  "https://telegra.ph/file/a6636bcbeb0ed12c715e8.mp4",
  
  "https://telegra.ph/file/c0c310c255c19627f0978.mp4",
  
  "https://telegra.ph/file/a90239585745ab8905b83.mp4",
  
  "https://telegra.ph/file/e49fe0e68366676aed29a.mp4",
  
  "https://telegra.ph/file/b1930e990c87562e3cd6d.mp4",
  
  "https://telegra.ph/file/bdc8960b43709de6fe5dd.mp4"
];
global.pornvidrandom = [
  "https://telegra.ph/file/186769995792df66cd305.mp4",
  
  "https://telegra.ph/file/ab97e9ef1dc140f63e4a7.mp4",
  
  "https://telegra.ph/file/a9f4b43ea025f2c66ac71.mp4",
  
  "https://telegra.ph/file/f288f9602fca8a7b231d7.mp4",
  
  "https://telegra.ph/file/39b08285e9d0bc2889cda.mp4",
  
  "https://telegra.ph/file/e3d42ea872c01763fdcb4.mp4",
  
  "https://telegra.ph/file/0b097d8773ee1fc73a9dd.mp4",
  
  "https://telegra.ph/file/fc53312eab4e3cdd0e371.mp4",
  
  "https://telegra.ph/file/9a4955347a56c9dd6270c.mp4",
  
  "https://telegra.ph/file/7a9f33856a067fb9c709d.mp4",
  
  "https://telegra.ph/file/b2f4cdbf9dfd33d86901e.mp4",
  
  "https://telegra.ph/file/70f1501d269653691fed2.mp4",
  
  "https://telegra.ph/file/6db60ae2260ee5fcecc72.mp4",
  
  "https://telegra.ph/file/0f1bac140d872a04ca9da.mp4",
  
  "https://telegra.ph/file/1744220a9eaa9273a77c3.mp4",
  
  "https://telegra.ph/file/b45619d07e97c717fac45.mp4",
  
  "https://telegra.ph/file/333f995f56e108e3b85d3.mp4",
  
  "https://telegra.ph/file/d06c59f0fba2f1b772335.mp4",
  
  "https://telegra.ph/file/98141de828da2859f3fb8.mp4",
  
  "https://telegra.ph/file/6efe0cc4d18f7074f78d0.mp4",
  
  "https://telegra.ph/file/82faeaace093abe6d3f9b.mp4",
  
  "https://telegra.ph/file/40c9c705e1f24b0334a7f.mp4",
  
  "https://telegra.ph/file/2014fecfe938b0d26ed4c.mp4",
  
  "https://telegra.ph/file/d46724d335b16263f6e4e.mp4",
  
  "https://telegra.ph/file/1eab154e00127965aee76.mp4",
  
  "https://telegra.ph/file/93d77a0f323127cc3efd2.mp4",
  
  "https://telegra.ph/file/f675a19abd59c80798c45.mp4",
  
  "https://telegra.ph/file/01cfdf119452e6a0433ef.mp4",
  
  "https://telegra.ph/file/850044bb7e1c104151514.mp4",
  
  "https://telegra.ph/file/ee8151d037a390fe6ba2e.mp4",
  
  "https://telegra.ph/file/eb280ba7355c00f32102b.mp4",
  
  "https://telegra.ph/file/92b25d2a7b0756bc72924.mp4",
  
  "https://telegra.ph/file/b0713a0435cd4195a7468.mp4",
  
  "https://telegra.ph/file/a34b6fad07e339da42bf7.mp4",
  
  "https://telegra.ph/file/045c13feafdae5642e56f.mp4",
  
  "https://telegra.ph/file/5d46f0f20c809c0067c59.mp4",
  
  "https://telegra.ph/file/f62c0e37dd400891537af.mp4",
  
  "https://telegra.ph/file/a24aa239a5857b8f2c1c8.mp4",
  
  "https://telegra.ph/file/da101c5d5a52f3b333483.mp4",
  
  "https://telegra.ph/file/7d84b61e577d9a8901316.mp4",
  
  "https://telegra.ph/file/71f12f334f2edc1bdd402.mp4",
  
  "https://telegra.ph/file/f202e165b1e3cb834b2fb.mp4",
  
  "https://telegra.ph/file/c147397a92dd9033d19b3.mp4",
  
  "https://telegra.ph/file/298196dd43b9b10d55d2c.mp4",
  
  "https://telegra.ph/file/171d9a94133ce88275df5.mp4",
  
  "https://telegra.ph/file/43b82fdc1cef5ac278cae.mp4",
  
  "https://telegra.ph/file/c9d68c49e8ffaee75cb2d.mp4",
  
  "https://telegra.ph/file/3b681977af30091541475.mp4",
  
  "https://telegra.ph/file/1f244359ee381fa6993e7.mp4",
  
  "https://telegra.ph/file/1da1a98ec40a5d3b99e05.mp4",
  
  "https://telegra.ph/file/5c4182ce9871fa4c61667.mp4",
  
  "https://telegra.ph/file/4d4a12b9e1895a66d09d1.mp4",
  
  "https://telegra.ph/file/5c7d23448c6228253c8cf.mp4",
  
  "https://telegra.ph/file/71cc4c67c858973079dac.mp4",
  
  "https://telegra.ph/file/375aa213731c04dd9230f.mp4",
  
  "https://telegra.ph/file/0c3d847b27fd93bd87886.mp4",
  
  "https://telegra.ph/file/f19000184e49c2c6cc42d.mp4",
  
  "https://telegra.ph/file/60187eba8454155fcf023.mp4",
  
  "https://telegra.ph/file/83ef4e78a76b44b6f84e1.mp4",
  
  "https://telegra.ph/file/37749edd0092570e1ef60.mp4",
  
  "https://telegra.ph/file/896d5221b5ea298768647.mp4",
  
  "https://telegra.ph/file/8b40753c3a646ad30077d.mp4",

 "https://telegra.ph/file/c53b9115f8aae602a1416.mp4",

 "https://telegra.ph/file/69ec35722940210ead025.mp4",

 "https://telegra.ph/file/e6bb857f5b830068dbf15.mp4",

 "https://telegra.ph/file/fdb9368daf71dd4cfa299.mp4",

 "https://telegra.ph/file/5964240399d4af6bd6905.mp4",

 "https://telegra.ph/file/2a50bbdecb382264d6dc0.mp4",

 "https://telegra.ph/file/4a1af1ef3d1762c46239f.mp4",

 "https://telegra.ph/file/3c7d2bc096dde72e3917e.mp4",

 "https://telegra.ph/file/44471aa07c61f1fa3ac50.mp4",

 "https://telegra.ph/file/5d859f1721e328e780725.mp4",

 "https://telegra.ph/file/b1f3f77e09cbb00eb1687.mp4",

 "https://telegra.ph/file/2bc5d53c57ad4f7483cd0.mp4",

 "https://telegra.ph/file/33170131849c3988f5f92.mp4",

 "https://telegra.ph/file/672cb85a258004bd8ad7f.mp4",

 "https://telegra.ph/file/06ad2f4e8ffdc3f58beac.mp4",

 "https://telegra.ph/file/ccc28d7be5a6ebc75d5fa.mp4",

 "https://telegra.ph/file/51d443c115e3dc0a1e65f.mp4",

 "https://telegra.ph/file/aedef288db5d179a84c14.mp4",

 "https://telegra.ph/file/0146df108abd810539e8a.mp4",

 "https://telegra.ph/file/413600d907aaff6fa2a1a.mp4",

 "https://telegra.ph/file/7ca63fa097d54b7601bcf.mp4",

 "https://telegra.ph/file/4cf07df81ef3540b702c0.mp4",

 "https://telegra.ph/file/f678f9abfa39347c30602.mp4",

 "https://telegra.ph/file/43b2c75c758688fc02027.mp4",

 "https://telegra.ph/file/ea7f0ee29609d4338b6e7.mp4",
  
  "https://telegra.ph/file/4b1202262eede42221529.mp4",
  
  "https://telegra.ph/file/ecb1704df3f1bdc10fd84.mp4",
  
  "https://telegra.ph/file/399c71c4010544779dfc7.mp4",
  
  "https://telegra.ph/file/e03529e1301e6b41ce8d3.mp4",
  
  "https://telegra.ph/file/be9dc079c6ced048e4248.mp4",
  
  "https://telegra.ph/file/a6636bcbeb0ed12c715e8.mp4",
  
  "https://telegra.ph/file/c0c310c255c19627f0978.mp4",
  
  "https://telegra.ph/file/a90239585745ab8905b83.mp4",
  
  "https://telegra.ph/file/e49fe0e68366676aed29a.mp4",
  
  "https://telegra.ph/file/b1930e990c87562e3cd6d.mp4",
  
  "https://telegra.ph/file/bdc8960b43709de6fe5dd.mp4"
];
