import fetch from 'node-fetch';
const handler = async (m, {conn, command, usedPrefix}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`
  switch (command) {
  case 'packgirl': case 'girlpack': case 'packchica': case 'chicapack': case 'pack':
      const url2 = await packgirl[Math.floor(Math.random() * packgirl.length)];
      conn.sendMessage(m.chat, {image: {url: url2}, caption: `_${command}_`}, {quoted: m});
      break;
    case 'packboy': case 'boypack': case 'packmen': case 'menpack': case 'packchico': case 'chicopack': case 'pack2':
      const url3 = await packmen[Math.floor(Math.random() * packmen.length)];
      conn.sendMessage(m.chat, {image: {url: url3}, caption: `_${command}_`}, {quoted: m});
      break;
      case 'nsfwcosplay':
      const url = await nsfwcosplay[Math.floor(Math.random() * nsfwcosplay.length)];
      conn.sendMessage(m.chat, {image: {url: url}, caption: `*乂 ⺀ NSFW - COSPLAY ⺀ 乂*`}, {quoted: m});
      break;
    case 'packvid': case 'packvideo': case 'videopack':
      const url4 = await packvidgirl[Math.floor(Math.random() * packvidgirl.length)];
      await conn.sendMessage(m.chat, {video: {url: url4}, caption: `_${command}_`}, {quoted: m});
      break;
  }
};
handler.command = /^(pack|packgirl|girlpack|packchica|chicapack|pack2|packboy|boypack|packmen|menpack|packchico|chicopack|nsfwcosplay|packvid|packvideo|videopack)$/i;
handler.register = true
handler.limit = 2
export default handler;
global.packgirl = [
  'https://telegra.ph/file/368d54d3a50a3a191ad70.jpg',
  'https://telegra.ph/file/c0da7289bee2d97048feb.jpg',
  'https://telegra.ph/file/b8564166f9cac4d843db3.jpg',
  'https://telegra.ph/file/fdefd621a17712be15e0e.jpg',
  'https://telegra.ph/file/6e1a6dcf1c91bf62d3945.jpg',
  'https://telegra.ph/file/0224c1ecf6b676dda3ac0.jpg',
  'https://telegra.ph/file/b71b8f04772f1b30355f1.jpg',
  'https://telegra.ph/file/6561840400444d2d27d0c.jpg',
  'https://telegra.ph/file/37e445df144e1dfcdb744.jpg',
  'https://telegra.ph/file/155b6ac6757bdd9cd05f9.jpg',
  'https://telegra.ph/file/2255a8a013540c2820a2b.jpg',
  'https://telegra.ph/file/450e901ac153765f095c5.jpg',
  'https://telegra.ph/file/f18e421a70810015be505.jpg',
  'https://telegra.ph/file/d3d190691ec399431434e.jpg',
  'https://telegra.ph/file/1fd2b897a1dbc3fdc2a70.jpg',
  'https://telegra.ph/file/607d54a909035bca7444f.jpg',
  'https://telegra.ph/file/818ba7c0ae82876b190b6.jpg',
  'https://telegra.ph/file/0f2bb426951b4a8fe1e5a.jpg',
  'https://telegra.ph/file/7e895b5b933226a07558a.jpg',
  'https://telegra.ph/file/f9d9f0da337512a1b1882.jpg',
  'https://telegra.ph/file/09ff5bfce02f1f78e3861.jpg',
  'https://telegra.ph/file/4ad840d401ab1f90444df.jpg',
  'https://telegra.ph/file/7b4bdcad3dde870355c94.jpg',
  'https://telegra.ph/file/f69a5beaca50fc52a4a71.jpg',
  'https://telegra.ph/file/411d7cdee24669e167adb.jpg',
  'https://telegra.ph/file/36a63288e27e88e2f8e10.jpg',
  'https://telegra.ph/file/1ac7657a5e7b354cd9991.jpg',
  'https://telegra.ph/file/14161eab0c1d919dc3218.jpg',
  'https://telegra.ph/file/810411b9128fe11dd639a.jpg',
  'https://telegra.ph/file/5fe7e98533754b007e7a1.jpg',
  'https://telegra.ph/file/f220d8c4587c5af574ed7.jpg',
  'https://telegra.ph/file/6171ad2cf43a2fcd1c159.jpg',
  'https://telegra.ph/file/ea20cf17f568aa67f3332.jpg',
  'https://telegra.ph/file/fc9d7a5527c523d6dd5d0.jpg',
  'https://telegra.ph/file/3e92fa41480711fc613a8.jpg',
  'https://telegra.ph/file/43d7a83e32c2766ea95e8.jpg',
  'https://telegra.ph/file/099823531e64e7cf860b4.jpg',
  'https://telegra.ph/file/67e454c2dce92a5b60159.jpg',
  'https://telegra.ph/file/15fc4079b3b5d1e500cef.jpg',
  'https://telegra.ph/file/791bd3a5efc084aaa7b61.jpg',
  'https://telegra.ph/file/d8ecfce9387cd9bc202f2.jpg',
  'https://telegra.ph/file/0f480c175e1b2aa795acc.jpg',
  'https://telegra.ph/file/ff9ef2f05aca46341a7ed.jpg',
  'https://telegra.ph/file/fb0fbd961527ab742bc76.jpg',
  'https://telegra.ph/file/43a97cd2a633253403bf3.jpg',
  'https://telegra.ph/file/f9aada086694663a93b36.jpg',
  'https://telegra.ph/file/6815ab1051276c9c02d7e.jpg',
  'https://telegra.ph/file/cc90b418217f4409127a4.jpg',
  'https://telegra.ph/file/635f64a0caec2372ce2ed.jpg',
  'https://telegra.ph/file/0d9dacd9c1c5992c09036.jpg',
  'https://telegra.ph/file/37a68dce80e66318ae646.jpg',
  'https://telegra.ph/file/fdc7e965d33f0159372e3.jpg',
  'https://telegra.ph/file/d2ad930f9f1e057baf97f.jpg',
  'https://telegra.ph/file/12b2f9e7f6e190af93d81.jpg',
  'https://telegra.ph/file/1befbd76cce43455ccca9.jpg',
  'https://telegra.ph/file/c715d730dd4599b1e976f.jpg',
  'https://telegra.ph/file/be6fe35be2eb8c9375ee7.jpg',
  'https://telegra.ph/file/6a4ff3ef5d834a50fa858.jpg',
  'https://telegra.ph/file/722c1ab3bb912f6fd24dc.jpg',
  'https://telegra.ph/file/46b9589f4d7c48e63c144.jpg',
  'https://telegra.ph/file/ae22e3d1fb173a709f41b.jpg',
  'https://telegra.ph/file/114ad141e979211786cb9.jpg',
  'https://telegra.ph/file/56c99aa9b04d4592e2a07.jpg',
  'https://telegra.ph/file/e1044714c86609efa8ec9.jpg',
  'https://telegra.ph/file/f4ada4c1b422600b66aae.jpg',
  'https://telegra.ph/file/aff8602c11ed027695506.jpg',
  'https://telegra.ph/file/550619e60ee3b957d6eec.jpg',
  'https://telegra.ph/file/23a7acb477d776892343e.jpg',
  'https://telegra.ph/file/8c4293b7e5227588ef43f.jpg',
  'https://telegra.ph/file/d5b9f63c6b71fcffa2228.jpg',
  'https://telegra.ph/file/d7b426e2b873f2f9dbc53.jpg',
  'https://telegra.ph/file/f07b6b5dce67f8e0e33a3.jpg',
  'https://telegra.ph/file/05ee3bc7a350d7f2f53f6.jpg',
  'https://telegra.ph/file/4ac21a1c27377fbc30a12.jpg',
  'https://telegra.ph/file/ed48dfe12b8e1bb2b0d68.jpg',
  'https://telegra.ph/file/4db5368e4aeda5d621fe1.jpg',
  'https://telegra.ph/file/1938fd82aad888b95c2d6.jpg',
  'https://telegra.ph/file/dc6a74ca67a591efcc775.jpg',
  'https://telegra.ph/file/96f9170da14d5fc3498a4.jpg',
  'https://telegra.ph/file/8f1b4f5824e4897e53ea2.jpg',
  'https://telegra.ph/file/42c06e0059b0d1276afa5.jpg',
  'https://telegra.ph/file/bd1556b68a6a4b3b93961.jpg',
  'https://telegra.ph/file/92b294edc757a547de852.jpg',
  'https://telegra.ph/file/5a97a86c74d7b3dae2a09.jpg',
  'https://telegra.ph/file/dbabc0ce54c6e562f75da.jpg',
  'https://telegra.ph/file/7f07a68e237f1b9fcc2fa.jpg',
  'https://telegra.ph/file/78093c65d5da609eced73.jpg',
  'https://telegra.ph/file/02a601565ed4d8f5cb291.jpg',
  'https://telegra.ph/file/9a6e0b7d341285266a2f1.jpg',
  'https://telegra.ph/file/efd30d41e3d8c0f98973e.jpg',
  'https://telegra.ph/file/43f4982b5d19f45750508.jpg',
  'https://telegra.ph/file/23e5cffc7c2678d4a34d3.jpg',
  'https://telegra.ph/file/4fde7a7cf570d99fcbbe8.jpg',
  'https://telegra.ph/file/ba386cbf7076386828167.jpg',
  'https://telegra.ph/file/d8cf475c30b83e100eeda.jpg',
  'https://telegra.ph/file/1aab87b3bdf740ca2abca.jpg',
  'https://telegra.ph/file/37b975b24e2b1afa3f242.jpg',
  'https://telegra.ph/file/d7944f4f2d981cebd9dbe.jpg',
  'https://telegra.ph/file/7a6379a71968eb8b81315.jpg',
  'https://telegra.ph/file/64aba76e9bfef6a1abc44.jpg',
  'https://telegra.ph/file/b0a9fdf90b195059712fd.jpg',
  'https://telegra.ph/file/e25c5522bdbe42dfec00f.jpg',
  'https://telegra.ph/file/395f75b73e1a1ff1493b4.jpg',
  'https://telegra.ph/file/8a7e43c0b116cb4b15b13.jpg',
  'https://telegra.ph/file/ec458495463b33526d5e6.jpg',
  'https://telegra.ph/file/219a3f3f9d8f20d31ac48.jpg',
  'https://telegra.ph/file/d2014dcb8f9530e37790f.jpg',
  'https://telegra.ph/file/7a739d5c47de7e7c8cea8.jpg',
  'https://telegra.ph/file/ea74b8817031a25c8d37f.jpg',
  'https://telegra.ph/file/477e9cc1fd124574dc8d5.jpg',
  'https://telegra.ph/file/7ba7c032c02c1ccbf0ee2.jpg',
  'https://telegra.ph/file/91ec62c59230d84baa1c2.jpg',
  'https://telegra.ph/file/d0731c6b1b25c7f1b1d8e.jpg',
  'https://telegra.ph/file/93ea219b1c78815ebb79c.jpg',
  'https://telegra.ph/file/e668a9e5a7e3adff75cc5.jpg',
  'https://telegra.ph/file/eea82f1361cf6cff50605.jpg',
  'https://telegra.ph/file/9e900ae5081f6ea0a51b0.jpg',
  'https://telegra.ph/file/ce85388f8ac002fc87a13.jpg',
  'https://telegra.ph/file/7bfb670df5c673b581ead.jpg',
  'https://telegra.ph/file/c19aa365425dda85825cb.jpg',
  'https://telegra.ph/file/2a429fb0857b62328cfbe.jpg',
  'https://telegra.ph/file/da519919054f0d58656a5.jpg',
  'https://telegra.ph/file/e281087c41152a90d2306.jpg',
  'https://telegra.ph/file/9b01dcb35114737ed6592.jpg',
  'https://telegra.ph/file/6acf3d303c7afe96e7107.jpg',
  'https://telegra.ph/file/03022d047c47a93818588.jpg',
  'https://telegra.ph/file/e0e69d51376e4c20a86da.jpg',
  'https://telegra.ph/file/3fa2ebde2a1199d18985d.jpg',
  'https://telegra.ph/file/68bdb1a3447e94b305468.jpg',
  'https://telegra.ph/file/42b2a403d232a1fa69fa6.jpg',
  'https://telegra.ph/file/286ce18f16e2bd76d0931.jpg',
  'https://telegra.ph/file/b377719a8c38e0f227900.jpg',
  'https://telegra.ph/file/6298aeb84715fea4b2065.jpg',
  'https://telegra.ph/file/04bdef4ab2e0f5926536a.jpg',
  'https://telegra.ph/file/0dabc5420aaaef69ccb27.jpg',
  'https://telegra.ph/file/2ca4e7ae3a905425af11d.jpg',
  'https://telegra.ph/file/b4aec241c66dca255cdec.jpg',
  'https://telegra.ph/file/6bd8a1dfb65f58889fc28.jpg',
];

global.packmen = [
  'https://telegra.ph/file/bf303b19b9834f90e9617.jpg',
  'https://telegra.ph/file/36ef2b807251dfccd17c2.jpg',
  'https://telegra.ph/file/bcc34403d16de829ea5d2.jpg',
  'https://telegra.ph/file/5c6b7615662fb53a39e53.jpg',
  'https://telegra.ph/file/1a8183eff48671ea265c2.jpg',
  'https://telegra.ph/file/f9745dcd22f67cbc62e08.jpg',
  'https://telegra.ph/file/02219f503317b0596e101.jpg',
  'https://telegra.ph/file/470c8ec30400a73d03207.jpg',
  'https://telegra.ph/file/c94fa8ed20f2c0cf16786.jpg',
  'https://telegra.ph/file/1b02a1ca6a39e741faec7.jpg',
  'https://telegra.ph/file/eea58bf7043fd697cdb43.jpg',
  'https://telegra.ph/file/ee3db7facdfe73c8df05a.jpg',
  'https://telegra.ph/file/d45b4e4af4f2139507f8c.jpg',
  'https://telegra.ph/file/d176e7fc8720f98f6b182.jpg',
  'https://telegra.ph/file/ce1e072829d1fa5d99f5f.jpg',
  'https://telegra.ph/file/a947933701be6d579c958.jpg',
  'https://telegra.ph/file/9027e5a464ec88e8ab5c1.jpg',
  'https://telegra.ph/file/049a8c611a838ea2f6daa.jpg',
  'https://telegra.ph/file/37b35fbc7e2ee73482ee1.jpg',
  'https://telegra.ph/file/9bcfade24ae85cd417f06.jpg',
  'https://telegra.ph/file/ac0c711585f4300c54355.jpg',
];

global.nsfwcosplay = [
  'https://telegra.ph/file/957fe4031132ef90b66ec.jpg',
  'https://telegra.ph/file/c4b85bd53030cb648382f.jpg',
  'https://telegra.ph/file/df56f8a76145df9c923ad.jpg',
  'https://telegra.ph/file/d5d1c2c710c4b5ee8bc6c.jpg',
  'https://telegra.ph/file/d0c0cd47e87535373ab68.jpg',
  'https://telegra.ph/file/651a5a9dc96c97c8ef8fc.jpg',
  'https://telegra.ph/file/f857ae461ceab18c38de2.jpg',
  'https://telegra.ph/file/5d2a2aeff5e6fbd229eff.jpg',
  'https://telegra.ph/file/b93573531f898ea875dd0.jpg',
  'https://telegra.ph/file/c798b3959f84d345b0f25.jpg',
  'https://telegra.ph/file/de820647f8cabce533557.jpg',
  'https://telegra.ph/file/e105097d5fadf3e522eb5.jpg',
  'https://telegra.ph/file/8592e352a9ee6c7244737.jpg',
  'https://telegra.ph/file/bb9c7d879b7dc1d86a2ce.jpg',
  'https://telegra.ph/file/83f108601e6105446ad1f.jpg',
  'https://telegra.ph/file/2a6bff14e53ed2533ad25.jpg',
  'https://telegra.ph/file/e37d74aeccc5bdfd6be3e.jpg',
  'https://telegra.ph/file/ca984650af06b951e961d.jpg',
  'https://telegra.ph/file/ebb3ac7f7498dd09f6afc.jpg',
  'https://telegra.ph/file/6192305a24ffb8fa30942.jpg',
  'https://telegra.ph/file/ee67c17d0043b98dc757e.jpg',
  'https://telegra.ph/file/6ae756b686cd2b5950721.jpg',
  'https://telegra.ph/file/b1e1da38d897d117c2aa9.jpg',
  'https://telegra.ph/file/6b759437dc8b863c2fa19.jpg',
  'https://telegra.ph/file/960d8c268aecb5eb117f0.jpg',
  'https://telegra.ph/file/d0dd518bdd147cb10b0b5.jpg',
  'https://telegra.ph/file/31f2d59b5cd68ec5acb21.jpg',
  'https://telegra.ph/file/14ab9bd02f24e0f1a1a03.jpg',
  'https://telegra.ph/file/e02bf6bc9227f7f8b7e2a.jpg',
  'https://telegra.ph/file/ab55fca1d6b602b1a69df.jpg',
  'https://telegra.ph/file/42105cac3666b37da3d1c.jpg',
  'https://telegra.ph/file/8622c1594882a09b7f39d.jpg',
  'https://telegra.ph/file/2c706964a4ec853947478.jpg',
  'https://telegra.ph/file/118d27a5369b77e8ddf1d.jpg',
  'https://telegra.ph/file/bf9ef3f8050e81a0e71da.jpg',
  'https://telegra.ph/file/80a58f330aecd10644779.jpg',
  'https://telegra.ph/file/0ec223117d9504bc95ebc.jpg',
  'https://telegra.ph/file/45725310603627aa9bd78.jpg',
  'https://telegra.ph/file/471af82566e45f5306547.jpg',
  'https://telegra.ph/file/8d33c675dec16c60eec40.jpg',
  'https://telegra.ph/file/d2ea0f353cb9ada004d87.jpg',
  'https://telegra.ph/file/6e1b88667510b4121a80e.jpg',
  'https://telegra.ph/file/2b6ac6db2669b9694e69f.jpg',
  'https://telegra.ph/file/85d3fe71cc3b72db20d59.jpg',
  'https://telegra.ph/file/5dcccc2dc4d25762290d1.jpg',
  'https://telegra.ph/file/6c3184f95784844b58d55.jpg',
  'https://telegra.ph/file/3cff0c7b54d288d9220f6.jpg',
  'https://telegra.ph/file/589be84d7b66f5aa95049.jpg',
  'https://telegra.ph/file/9b1c7ae12b8ddae3d23c9.jpg',
  'https://telegra.ph/file/f1c35b43732e8ea74120a.jpg',
  'https://telegra.ph/file/a84c08fab522d8d7ff7f4.jpg',
  'https://telegra.ph/file/7d96a82b1a851429751c3.jpg',
  'https://telegra.ph/file/61bb4da4985f2490c1858.jpg',
  'https://telegra.ph/file/98557b19f801193fd087d.jpg',
  'https://telegra.ph/file/649d9b041764c6286ed8b.jpg',
  'https://telegra.ph/file/58c154ed8cb5c5a1fd9e2.jpg',
  'https://telegra.ph/file/2381be18ccacceec0f5e7.jpg',
  'https://telegra.ph/file/ca125d2e0ead5f510d14b.jpg',
  'https://telegra.ph/file/1b5d2c189948565056b17.jpg',
  'https://telegra.ph/file/53cca27e4b5f655ee678e.jpg',
  'https://telegra.ph/file/34c29f0c2046fd00991b9.jpg',
  'https://telegra.ph/file/7a6d04262d07c86b0ad8a.jpg',
  'https://telegra.ph/file/5228051ec5cf0b3155edc.jpg',
  'https://telegra.ph/file/0f13438f7652ac3ef6120.jpg',
  'https://telegra.ph/file/c239ea179d821b77a397e.jpg',
  'https://telegra.ph/file/11f44143eebfd71421ed5.jpg',
  'https://telegra.ph/file/e945d0ba5f7dcb132c0cf.jpg',
  'https://telegra.ph/file/60020cce2e47116fea120.jpg',
  'https://telegra.ph/file/b909fb46cee83bf3b6e54.jpg',
  'https://telegra.ph/file/557518c1e730682e69e58.jpg',
  'https://telegra.ph/file/a9eaf2f08630829054ea5.jpg',
  'https://telegra.ph/file/4dff57c35f995758601d3.jpg',
  'https://telegra.ph/file/3b319ab308926cf88b91e.jpg',
  'https://telegra.ph/file/29b9e83839cdef0db0789.jpg',
  'https://telegra.ph/file/c8c87f40abe707ab569a5.jpg',
  'https://telegra.ph/file/ae49c38d1224f4747ea91.jpg',
  'https://telegra.ph/file/f0907a865113833c80763.jpg',
  'https://telegra.ph/file/7e3ea4a818aada2dda77f.jpg',
  'https://telegra.ph/file/ea2a920d7aec175d67126.jpg',
  'https://telegra.ph/file/4b7ff16abfa7e42055241.jpg',
  'https://telegra.ph/file/637f93d7b28ba433f6b07.jpg',
  'https://telegra.ph/file/46046cdf32482824b2f67.jpg',
  'https://telegra.ph/file/aae469f02f243dfaaa294.jpg',
  'https://telegra.ph/file/5aadf3b437fb946b25dd1.jpg',
  'https://telegra.ph/file/45720925c820059e582a0.jpg',
  'https://telegra.ph/file/3917d704c77183c749dc2.jpg',
  'https://telegra.ph/file/54f89b49456bb711ca65c.jpg',
  'https://telegra.ph/file/7bef8ce6cf751f3e5cfc7.jpg',
  'https://telegra.ph/file/9b871dc493bd6199e4fdd.jpg',
  'https://telegra.ph/file/88f9f6dcf6986f7b6217e.jpg',
  'https://telegra.ph/file/239427f83a17a34afdc3e.jpg',
  'https://telegra.ph/file/9afbf97a2e717b4fe293b.jpg',
  'https://telegra.ph/file/56a9e487052dcb58facf8.jpg',
  'https://telegra.ph/file/85d272eeb7612e14cb812.jpg',
  'https://telegra.ph/file/85d8d721c60b6fd24c85e.jpg',
  'https://telegra.ph/file/c52583e0ed29a5ce2cab3.jpg',
  'https://telegra.ph/file/0d4a52bfce939b18b1e1c.jpg',
  'https://telegra.ph/file/daf4d512bf4886289f5b0.jpg',
  'https://telegra.ph/file/db8d51b41d655fbef1aef.jpg',
  'https://telegra.ph/file/eb0786c0e63da8dde445a.jpg',
  'https://telegra.ph/file/07b5fc383885b5c1a21f1.jpg',
  'https://telegra.ph/file/cc88cf8ae713a199b6e9b.jpg',
  'https://telegra.ph/file/74ddb46b14e0a83f0f6f9.jpg',
  'https://telegra.ph/file/6062db707fb1f5d0e6704.jpg',
  'https://telegra.ph/file/b6f35f9270caf1fc8258e.jpg',
  'https://telegra.ph/file/84f7468ddf4817cc5f261.jpg',
  'https://telegra.ph/file/c10c5fd3423bf6aef4c67.jpg',
  'https://telegra.ph/file/53f3bcc68e3f5b44a78ba.jpg',
  'https://telegra.ph/file/f2f8194168c64ab66b466.jpg',
  'https://telegra.ph/file/59c534f05d9c4d5a82436.jpg',
  'https://telegra.ph/file/bd7427e3113b1fae06e56.jpg',
  'https://telegra.ph/file/4a5046e4af92e4e7bc68a.jpg',
  'https://telegra.ph/file/d444cec62413ab6a4a093.jpg',
  'https://telegra.ph/file/0440ed939a9c7a4528dbf.jpg',
  'https://telegra.ph/file/35d5ae188b365cf95075d.jpg',
  'https://telegra.ph/file/5ab46f3ae9081f13570bb.jpg',
  'https://telegra.ph/file/770502c49cfe64035a3e7.jpg',
  'https://telegra.ph/file/e8e4c85c01bdc5c376882.jpg',
  'https://telegra.ph/file/f74470001ef0488ed0cbb.jpg',
  'https://telegra.ph/file/eb8ef77b08bc5f4c5eb30.jpg',
  'https://telegra.ph/file/f4957ba369178ded75268.jpg',
  'https://telegra.ph/file/2b424332f6c1c52459a42.jpg',
  'https://telegra.ph/file/d0112fef2671de2f690cb.jpg',
  'https://telegra.ph/file/1fdd48d52a63da47986e6.jpg',
  'https://telegra.ph/file/b83be8c337fd8a60bae32.jpg',
  'https://telegra.ph/file/6efef35f108a349c8554d.jpg',
  'https://telegra.ph/file/bf4f2e96f8a1731cd991b.jpg',
  'https://telegra.ph/file/df93e2aad0e5fb5e8141b.jpg',
  'https://telegra.ph/file/4a972730665ddabcb47b1.jpg',
  'https://telegra.ph/file/14bb3ad47b92eeb19ccc4.jpg',
  'https://telegra.ph/file/5ee64816a8dcca7201a9f.jpg',
  'https://telegra.ph/file/89205a5a6aad0cff8f182.jpg',
  'https://telegra.ph/file/51c0bf91b7002274c615c.jpg',
  'https://telegra.ph/file/982bfb9754de869cd0be1.jpg',
  'https://telegra.ph/file/d3aa04e3b8ec8706fcaf8.jpg',
  'https://telegra.ph/file/ee6dd4d5cadc32b2923fe.jpg',
  'https://telegra.ph/file/f14f06b3615c10e0755d0.jpg',
  'https://telegra.ph/file/dcb321ca2ddaece06c50b.jpg',
  'https://telegra.ph/file/4ba93a0eb03e3b8b430ec.jpg',
  'https://telegra.ph/file/56474ec820186ed367fef.jpg',
  'https://telegra.ph/file/a174169d1b8fe1ca0e80a.jpg',
  'https://telegra.ph/file/3b53833d52674fac84ec0.jpg',
  'https://telegra.ph/file/c458659d9d878110445d8.jpg',
  'https://telegra.ph/file/47e8c01e2f095f8e2437a.jpg',
  'https://telegra.ph/file/e2ae3aee31b01545fa12f.jpg',
  'https://telegra.ph/file/7d68b63573dfe7995aef2.jpg',
  'https://telegra.ph/file/ce778225c293206c91d2a.jpg',
  'https://telegra.ph/file/cb529ecaea5ea3f0c6049.jpg',
  'https://telegra.ph/file/2c80b3a08f1be77bac9f3.jpg',
  'https://telegra.ph/file/6e2a324be4996426f5308.jpg',
  'https://telegra.ph/file/3aa56a25fb30ea23ad868.jpg',
  'https://telegra.ph/file/44f6d6784c4c818e5d3b8.jpg',
  'https://telegra.ph/file/c6fe9d05a4a798e355ee8.jpg',
  'https://telegra.ph/file/b4f7617788ebb389de2e2.jpg',
  'https://telegra.ph/file/5568a77bc7f886e54c35e.jpg',
  'https://telegra.ph/file/c2c7afca3a62143af8bd5.jpg',
  'https://telegra.ph/file/b963e47d8ad09fc0aa561.jpg',
  'https://telegra.ph/file/71a0cd540f9c7ebd77870.jpg',
  'https://telegra.ph/file/85502eedf19da2705f90f.jpg',
  'https://telegra.ph/file/2dcfdaec7e45a1034b689.jpg',
  'https://telegra.ph/file/dfbe0cbf91e137fa9ad60.jpg',
  'https://telegra.ph/file/932da4aff6c7f9e470d7f.jpg',
  'https://telegra.ph/file/4906034c3bca29b094777.jpg',
  'https://telegra.ph/file/6334e92af04f70b7d9592.jpg',
  'https://telegra.ph/file/53fcf6a4a4d1f6251c9db.jpg',
  'https://telegra.ph/file/bd5918f080d66f21a11b3.jpg',
  'https://telegra.ph/file/1c63cdc3602fb08e11254.jpg',
  'https://telegra.ph/file/53112a9d9ac80f05530c9.jpg',
  'https://telegra.ph/file/421642a4845a537597ee1.jpg',
  'https://telegra.ph/file/e0ae3d1400bec3bd4b925.jpg',
  'https://telegra.ph/file/f20783ffce50250df599f.jpg',
  'https://telegra.ph/file/2e8c2cda1f5e6997b0418.jpg',
  'https://telegra.ph/file/99227950e3e534120f455.jpg',
  'https://telegra.ph/file/4587f757ad1a45b1c9df8.jpg',
  'https://telegra.ph/file/19b44defdb240073666f9.jpg',
  'https://telegra.ph/file/38a149fe32ae887ce7a1e.jpg',
  'https://telegra.ph/file/888a4e34209ef18adf350.jpg',
  'https://telegra.ph/file/511ee8eaeb3d836227d6c.jpg',
  'https://telegra.ph/file/089b54ecb8e179cd6454a.jpg',
  'https://telegra.ph/file/1aa3ae52ecb297443f366.jpg',
  'https://telegra.ph/file/45dd98f0e2707cefb6970.jpg',
  'https://telegra.ph/file/3ce798e0fab021f8626a8.jpg',
  'https://telegra.ph/file/92d6b109a78a7da9baeb5.jpg',
  'https://telegra.ph/file/f2859076dba4c228158fd.jpg',
  'https://telegra.ph/file/7c4f0a1b038693a8af875.jpg',
  'https://telegra.ph/file/28a2e78bee1e577f7d54c.jpg',
  'https://telegra.ph/file/026802fc3e56aed419421.jpg',
  'https://telegra.ph/file/dbbe21e2099dd57ade085.jpg',
  'https://telegra.ph/file/a86988e777abcf7bd8809.jpg',
  'https://telegra.ph/file/119686934601fb0c8ef62.jpg',
  'https://telegra.ph/file/67e6526238674f4988dd8.jpg',
  'https://telegra.ph/file/e522cb60339acdf2b7835.jpg',
  'https://telegra.ph/file/19e2dcf31a12ba561f4ed.jpg',
  'https://telegra.ph/file/15fc1809f5999f6d25f98.jpg',
  'https://telegra.ph/file/51cc07e892bbe300baa6c.jpg',
  'https://telegra.ph/file/79eb9229792b5d217f77e.jpg',
  'https://telegra.ph/file/365938ba8e8ad04c46607.jpg',
  'https://telegra.ph/file/ef8ca48f07dfa3863cba4.jpg',
  'https://telegra.ph/file/bd90906265387db2f8028.jpg',
  'https://telegra.ph/file/2b42ba3fd3f381c3132d2.jpg',
  'https://telegra.ph/file/dd148757616b5ab37a0d5.jpg',
  'https://telegra.ph/file/a9a13a165d5c8def35a33.jpg',
  'https://telegra.ph/file/907f5790a23c0cc15adb0.jpg',
  'https://telegra.ph/file/7abe2d9a5d1effc60499e.jpg',
  'https://telegra.ph/file/358130cd10b55b6cb0ec3.jpg',
  'https://telegra.ph/file/e113bd0083fa221c2a42d.jpg',
  'https://telegra.ph/file/bb9132a4d6db2387e8e06.jpg',
  'https://telegra.ph/file/abea9fdb6b11ead211ac8.jpg',
  'https://telegra.ph/file/da7ead48fa1af5e52748b.jpg',
  'https://telegra.ph/file/d843fb6e3241b0307f19a.jpg',
  'https://telegra.ph/file/e5e43a737a6623d770638.jpg',
  'https://telegra.ph/file/ab50901d0388de39c0d36.jpg',
  'https://telegra.ph/file/6cc9a583e7078cc6c65fb.jpg',
  'https://telegra.ph/file/d48cf98b20834c29980d2.jpg',
  'https://telegra.ph/file/c55caafd61772e77b044b.jpg',
  'https://telegra.ph/file/d97aa3c63950d2cc35847.jpg',
  'https://telegra.ph/file/4f6af4664432263dcfdae.jpg',
  'https://telegra.ph/file/1005dc44f3419a29f4216.jpg',
  'https://telegra.ph/file/479025156f0f755f3d584.jpg',
  'https://telegra.ph/file/cf5607bcee29f74ebf5b2.jpg',
  'https://telegra.ph/file/0723f53103443f54b1fe3.jpg',
  'https://telegra.ph/file/c883193b72d74f9b7eb27.jpg',
  'https://telegra.ph/file/d0ec9c77d50c03e1f0579.jpg',
  'https://telegra.ph/file/d5e2ee956346cf957f1bb.jpg',
  'https://telegra.ph/file/22dc87d1c48ad0fec29c7.jpg',
  'https://telegra.ph/file/0957b138f13c4164d8a0e.jpg',
  'https://telegra.ph/file/3b52d33a4743711bd899d.jpg',
  'https://telegra.ph/file/6f58dbb0b8fa6c9a6e2bd.jpg',
  'https://telegra.ph/file/676cee63cd2d6a943a3f1.jpg',
  'https://telegra.ph/file/f0e62a92d96c8c1e80184.jpg',
  'https://telegra.ph/file/91410f48fb9954b5519e8.jpg',
  'https://telegra.ph/file/2d2a748b5e58fbd89e14d.jpg',
  'https://telegra.ph/file/1cb447772a12d4755ec19.jpg',
  'https://telegra.ph/file/d2aa208149a95288d08a1.jpg',
  'https://telegra.ph/file/be4083fa44923c90aff24.jpg',
  'https://telegra.ph/file/bd4b11c2f24efd7708284.jpg',
  'https://telegra.ph/file/a8b13a1481f24c5ae385c.jpg',
  'https://telegra.ph/file/cdffd0cf44a9bc268b811.jpg',
  'https://telegra.ph/file/22fe02d3d2574b88b6884.jpg',
  'https://telegra.ph/file/2d5d51bd5b20215eb2e0a.jpg',
  'https://telegra.ph/file/71a9cd128b37382bf3d04.jpg',
  'https://telegra.ph/file/6a368b9f7223889e85cf5.jpg',
  'https://telegra.ph/file/4bd9dd7277ad2c7fcdd56.jpg',
  'https://telegra.ph/file/38397ecfa82e1afe7af11.jpg',
  'https://telegra.ph/file/3392870488f317411532d.jpg',
  'https://telegra.ph/file/4ec430de18ccac574fdee.jpg',
  'https://telegra.ph/file/176efdcb599e944eb9c92.jpg',
  'https://telegra.ph/file/f566ece59354fb0b0a588.jpg',
  'https://telegra.ph/file/3cb92b77623107931aa51.jpg',
  'https://telegra.ph/file/4a071bff0d7289670f368.jpg',
  'https://telegra.ph/file/9a6ed72859e491fd6dfbd.jpg',
  'https://telegra.ph/file/4b923aafa7ce8850b3868.jpg',
  'https://telegra.ph/file/d4b9b2d407e0c22534f6a.jpg',
  'https://telegra.ph/file/240be94bd04768f65c6d5.jpg',
  'https://telegra.ph/file/0f90f1ade615a11c31e4d.jpg',
  'https://telegra.ph/file/24db279396427582073bb.jpg',
  'https://telegra.ph/file/6a2c591843ebf9614984e.jpg',
  'https://telegra.ph/file/bd87d3a063ef41f81baa0.jpg',
  'https://telegra.ph/file/bd222456bfefb8c75a969.jpg',
  'https://telegra.ph/file/27f41c90f2a8ad85c11c7.jpg',
  'https://telegra.ph/file/2acfc5f7a5812bbbb67ba.jpg',
  'https://telegra.ph/file/4cf7e8af5f0fbaa66d88d.jpg',
  'https://telegra.ph/file/02debf44783e822cb6134.jpg',
  'https://telegra.ph/file/586b7785a8351bf6b3f1e.jpg',
  'https://telegra.ph/file/e405c78b2b2bc24107e59.jpg',
  'https://telegra.ph/file/3315a40d6c8e61d8790cc.jpg',
  'https://telegra.ph/file/4aa87b21aee2f70c00733.jpg',
  'https://telegra.ph/file/907305a1c5926441bb14c.jpg',
  'https://telegra.ph/file/9219cc9fce5769d83c9a6.jpg',
  'https://telegra.ph/file/26e552153b6acfda294a4.jpg',
  'https://telegra.ph/file/2e87fe2c758537064c89f.jpg',
  'https://telegra.ph/file/2074c46ef00f3c9a3531d.jpg',
  'https://telegra.ph/file/1fbe201e0e3a30e2cb16b.jpg',
  'https://telegra.ph/file/ce23e910ad445b82bd5d8.jpg',
  'https://telegra.ph/file/ba768863cfa927bd9c940.jpg',
  'https://telegra.ph/file/c7d0f8f9b81e88d48e8fd.jpg',
  'https://telegra.ph/file/1c746c5ba1f934c751024.jpg',
  'https://telegra.ph/file/24b371ddc7fada34c50de.jpg',
  'https://telegra.ph/file/ca37d55d71cb99b2a244f.jpg',
  'https://telegra.ph/file/8871ee2162543a8fa7feb.jpg',
  'https://telegra.ph/file/2fea977115f3caa5bb7d6.jpg',
  'https://telegra.ph/file/157bf3e01f79aefd79272.jpg',
  'https://telegra.ph/file/c11f61659497448185737.jpg',
  'https://telegra.ph/file/b4fffc766dc831606846d.jpg',
  'https://telegra.ph/file/3830af2737668b02b2248.jpg',
  'https://telegra.ph/file/a794895416b4d8fcf1699.jpg',
  'https://telegra.ph/file/8f3ad456e9ed3e598f5b6.jpg',
  'https://telegra.ph/file/7a4cc977f41c2a670ef83.jpg',
  'https://telegra.ph/file/4221d17f0ca77d89dc459.jpg',
  'https://telegra.ph/file/35d596eb3b7ad50811889.jpg',
  'https://telegra.ph/file/ba266c86f97f0852a9c12.jpg',
  'https://telegra.ph/file/c14bb2108c7f82cafc484.jpg',
  'https://telegra.ph/file/353270a510d138406bda0.jpg',
  'https://telegra.ph/file/e25db315531200f81c2cf.jpg',
  'https://telegra.ph/file/95006e53ebf58e75116c6.jpg',
  'https://telegra.ph/file/670619b2f7e099fb0cd59.jpg',
  'https://telegra.ph/file/3d8037907c4dd2102680b.jpg',
  'https://telegra.ph/file/f443dc4a2ad88b82b078d.jpg',
  'https://telegra.ph/file/a8edf905f5308540e096a.jpg',
  'https://telegra.ph/file/3a656bf1690bf456a3529.jpg',
  'https://telegra.ph/file/5332e5ad23e1881b3f7c7.jpg',
  'https://telegra.ph/file/aab5f7311f6d8154d7445.jpg',
  'https://telegra.ph/file/483859e826fcdca91cbaf.jpg',
  'https://telegra.ph/file/4ae884439958fa99de184.jpg',
  'https://telegra.ph/file/a444033ec5f6a419aa3df.jpg',
  'https://telegra.ph/file/1b94205493e5e5a66f7e1.jpg',
  'https://telegra.ph/file/596720d881d5ceb721330.jpg',
  'https://telegra.ph/file/642b0fceac5c4630d8815.jpg',
  'https://telegra.ph/file/cb483b04b97c61d020880.jpg',
  'https://telegra.ph/file/278a10a1e2ef4c58f980d.jpg',
  'https://telegra.ph/file/69ae494cb8a7cedb0b2a3.jpg',
  'https://telegra.ph/file/1d8ac602b03628c88d2c6.jpg',
  'https://telegra.ph/file/4c96c1f0d9bdc7152e52e.jpg',
  'https://telegra.ph/file/6b99e5ff19bbbc42af78d.jpg',
  'https://telegra.ph/file/abba577c53ca76d59ce6b.jpg',
  'https://telegra.ph/file/7cd35e178ac2c83f24b15.jpg',
  'https://telegra.ph/file/10b7bef4de054e0984204.jpg',
  'https://telegra.ph/file/f66d0c41b9373583ea105.jpg',
  'https://telegra.ph/file/c4cd5f3093caf8049f715.jpg',
  'https://telegra.ph/file/b5d2e81f2aaba87797dbf.jpg',
  'https://telegra.ph/file/4b26db118f9db6abb108b.jpg',
  'https://telegra.ph/file/0cc86c46ea4a699a83304.jpg',
  'https://telegra.ph/file/21c8183b827ecda8f7907.jpg',
  'https://telegra.ph/file/9d001cd2797e9c9b93b77.jpg',
  'https://telegra.ph/file/e9dbe4acc80c20a20043f.jpg',
  'https://telegra.ph/file/c614fc4c1a02da305729e.jpg',
  'https://telegra.ph/file/d2cd89c2f23212a5b5310.jpg',
  'https://telegra.ph/file/33592674218d9defff11e.jpg',
  'https://telegra.ph/file/011f9e4c2cf0a39445b6a.jpg',
  'https://telegra.ph/file/52ded54bfc06bc8edbc68.jpg',
  'https://telegra.ph/file/9452749b961d145d4e4aa.jpg',
  'https://telegra.ph/file/39771051e616883b2c5c2.jpg',
  'https://telegra.ph/file/c8f4a98bb4a950216f100.jpg',
  'https://telegra.ph/file/7fee65bb84cc4cb0f7905.jpg',
  'https://telegra.ph/file/b9ac28d8d9fe46dda87fd.jpg',
  'https://telegra.ph/file/7895f2ad0b1fd26eccd3f.jpg',
  'https://telegra.ph/file/fe082808c7bf551627842.jpg',
  'https://telegra.ph/file/c0b4890df0ef384bbf77c.jpg',
  'https://telegra.ph/file/a81998814cc191eea0d3d.jpg',
  'https://telegra.ph/file/2832e851a614ff92f5a54.jpg',
  'https://telegra.ph/file/9700225bc45e6aa1e4d4e.jpg',
  'https://telegra.ph/file/4e8d2440efc1c3d918aee.jpg',
  'https://telegra.ph/file/20536ef169287520e27a2.jpg',
  'https://telegra.ph/file/d706bc897570fd6208494.jpg',
  'https://telegra.ph/file/bf7a61b70215cff6d8e35.jpg',
  'https://telegra.ph/file/b2807294d06656c47b8d1.jpg',
  'https://telegra.ph/file/40dd915f4477332e62b1c.jpg',
  'https://telegra.ph/file/a4a96955f555dcfc6dea7.jpg',
  'https://telegra.ph/file/8798aef340abcb2e0bcd6.jpg',
  'https://telegra.ph/file/748c99ade252cfd7c736c.jpg',
  'https://telegra.ph/file/69c65a9cf8cba9069eb3d.jpg',
  'https://telegra.ph/file/f98093a63f074471790f3.jpg',
  'https://telegra.ph/file/cf9f780b1bfecb3b77995.jpg',
  'https://telegra.ph/file/5fdfcd58cb15eb46d37a2.jpg',
  'https://telegra.ph/file/426d41e243b198e7a8744.jpg',
  'https://telegra.ph/file/80992a38c875b464926c4.jpg',
  'https://telegra.ph/file/d1a604dfe766370b4467c.jpg',
  'https://telegra.ph/file/e44a9d849522fa45b3e03.jpg',
  'https://telegra.ph/file/89db80bc062666450de5c.jpg',
  'https://telegra.ph/file/9590a38514b77cef592e0.jpg',
  'https://telegra.ph/file/8a0acb5f3b29ae505f4b4.jpg',
  'https://telegra.ph/file/698017a1c3125410a7b82.jpg',
  'https://telegra.ph/file/1e85ee6ee96c4703dfd25.jpg',
  'https://telegra.ph/file/1795294c23375d7aed8b5.jpg',
  'https://telegra.ph/file/d256e83ebd94a41f83883.jpg',
  'https://telegra.ph/file/fa67ea58f7785e21bc445.jpg',
  'https://telegra.ph/file/9f1bf5e94d3a19448d86e.jpg',
  'https://telegra.ph/file/d58505bc9ea79d0dd7d6e.jpg',
  'https://telegra.ph/file/3703adee099cef8bd3459.jpg',
  'https://telegra.ph/file/6b2261e970e1b9de46e45.jpg',
  'https://telegra.ph/file/480c5990a0808de60ea8f.jpg',
  'https://telegra.ph/file/2e853caec794fbebb9568.jpg',
  'https://telegra.ph/file/2e0f07568a62d667732b1.jpg',
  'https://telegra.ph/file/37747f7e826679f7c1e64.jpg',
  'https://telegra.ph/file/7bc77957c263ce77853ee.jpg',
  'https://telegra.ph/file/4f645d8f231a88d90ae98.jpg',
  'https://telegra.ph/file/2e5c73ecbfbcdaa32b03c.jpg',
  'https://telegra.ph/file/90b723f9177394654fd9d.jpg',
  'https://telegra.ph/file/3b07388c8548bbe593cf8.jpg',
  'https://telegra.ph/file/8fd6a5a700442209f39d0.jpg',
  'https://telegra.ph/file/e0ce1585e8ae0a71c9974.jpg',
  'https://telegra.ph/file/860d69e84677f1b225f4e.jpg',
  'https://telegra.ph/file/983564cc5608dbf27f053.jpg',
  'https://telegra.ph/file/8f3d82276c31415c9d889.jpg',
  'https://telegra.ph/file/0837d6ef156a457e5c9f2.jpg',
  'https://telegra.ph/file/4e8a0089ceada9829b657.jpg',
  'https://telegra.ph/file/e7b4b0208f6289f856156.jpg',
  'https://telegra.ph/file/e26011fa9f0e5f7d913b7.jpg',
  'https://telegra.ph/file/e9b06b8a991cbf44d433e.jpg',
  'https://telegra.ph/file/c11f61659497448185737.jpg',
];

global.packvidgirl = [
  'https://telegra.ph/file/4a270d9945ac46f42d95c.mp4',
  'https://telegra.ph/file/958c11e84d271e783ea3f.mp4',
  'https://telegra.ph/file/f753759342337c4012b3f.mp4',
  'https://telegra.ph/file/379cee56c908dd536dd33.mp4',
  'https://telegra.ph/file/411d8f59a5cefc2a1d227.mp4',
  'https://telegra.ph/file/ee2cf1b359d6eef50d7b7.mp4',
  'https://telegra.ph/file/1e316b25c787f94a0f8fd.mp4',
  'https://telegra.ph/file/c229d33edce798cde0ca4.mp4',
  'https://telegra.ph/file/b44223e72dd7e80e415f2.mp4',
  'https://telegra.ph/file/61486d45a8a3ea95a7c86.mp4',
  'https://telegra.ph/file/76ba0dc2a07f491756377.mp4',
  'https://telegra.ph/file/831bb88f562bef3f1a15d.mp4',
  'https://telegra.ph/file/ee2cf1b359d6eef50d7b7.mp4',
  'https://telegra.ph/file/598857924f3a29ffd37ae.mp4',
  'https://telegra.ph/file/528caef6ea950ec45aeef.mp4',
  'https://telegra.ph/file/4a270d9945ac46f42d95c.mp4',
  'https://telegra.ph/file/958c11e84d271e783ea3f.mp4',
  'https://telegra.ph/file/f753759342337c4012b3f.mp4',
  'https://telegra.ph/file/379cee56c908dd536dd33.mp4',
  'https://telegra.ph/file/411d8f59a5cefc2a1d227.mp4',
  'https://telegra.ph/file/76ba0dc2a07f491756377.mp4',
  'https://telegra.ph/file/831bb88f562bef3f1a15d.mp4',
];