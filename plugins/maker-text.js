import {format} from 'util';
// let path = require('path')
import {spawn} from 'child_process';

const fontPath = 'src/font/Zahraaa.ttf';
const handler = async (m, {conn, args}) => {
  if (!global.support.convert &&
        !global.support.magick &&
        !global.support.gm) return handler.disabled = true; // Disable if doesnt support
  const inputPath = 'src/kertas/magernulis1.jpg';
  const d = new Date;
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
    '-fill',
    'blue',
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
    '-fill',
    'blue',
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
    '-fill',
    'blue',
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
handler.help = ['txt *<texto>*'];
handler.tags = ['fun'];
handler.command = ['escribe', 'txt'];
handler.limit = 1
export default handler;

// BY MFARELS
// https://GitHub.com/MFarelS/
