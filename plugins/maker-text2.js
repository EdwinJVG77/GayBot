import {format} from 'util';
// let path = require('path')
import {spawn} from 'child_process';

// Font By MFarelS:V
const fontPath = 'src/font/Zahraaa.ttf';
const handler = async (m, {conn, args}) => {
  if (!global.support.convert &&
        !global.support.magick &&
        !global.support.gm) return handler.disabled = true; // Disable if doesnt support
  const inputPath = 'src/kertas/magernulis1.jpg';
  const d = new Date();
  const tgl = d.toLocaleDateString('id-Id');
  const hari = d.toLocaleDateString('id-Id', {weekday: 'long'});
  const teks = args.join` `;
  // conn.reply(m.chat, util.format({fontPath, inputPath, outputPath, tgl, hari, teks}), m)
  const bufs = [];
  const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []),
    'convert',
    inputPath,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+78',
    hari,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '18',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+102',
    tgl,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '-7.5',
    '-annotate',
    '+344+142',
    teks,
    'jpg:-',
  ];
  spawn(_spawnprocess, _spawnargs)
      .on('error', (e) => m.reply(format(e)))
      .on('close', () => {
        m.reply('_Cargando..._');
        conn.sendFile(m.chat, Buffer.concat(bufs), 'txt.jpg', '✍🏻');
      })
      .stdout.on('data', (chunk) => bufs.push(chunk));
};
handler.help = ['txt2 *<texto>*'];
handler.tags = ['fun'];
handler.command = ['escribe2', 'txt2'];
handler.money = 50


export default handler;
