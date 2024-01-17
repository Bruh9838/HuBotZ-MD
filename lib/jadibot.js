const { modul } = require('./module');
const { baileys, boom, chalk, fs, figlet, FileType, path, process, PhoneNumber } = modul;
const { Boom } = boom
const { default: HuBotZConnect, useMultiFileAuthState, DisconnectReason, jidNormalizedUser, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, delay, PHONENUMBER_MCC, Browsers } = baileys
const { color, bgcolor } = require('./color')
const log = (pino = require("pino"));
const qrcode = require('qrcode');
const usePairingCode = true
const readline = require("readline");
const rimraf = require("rimraf");
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./myfunc')
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};
const owner = JSON.parse(fs.readFileSync('./database/jadibot/owner.json').toString())
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

if (global.conns instanceof Array) console.log()
else global.conns = []

const jadibot = async (HuBotZ, m, from) => {
const { sendImage, sendMessage } = HuBotZ;
const { reply, sender } = m;
const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, `./session/jadibot/${sender}`), log({ level: "silent" }));
try {
async function start() {
let { version, isLatest } = await fetchLatestBaileysVersion();
const HuBotZ = await HuBotZConnect({
printQRInTerminal: !usePairingCode,
auth: state,
browser: ['Chrome (Linux)', '', ''],
logger: log({ level: "silent" }),
version,
})

HuBotZ.ws.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))}})

HuBotZ.ws.on('CB:call', async (json) => {
const callerId = json.content[0].attrs['call-creator']
const idCall = json.content[0].attrs['call-id']
const Id = json.attrs.id
const T = json.attrs.t
HuBotZ.sendNode({
  tag: 'call',
    attrs: {
      from: '6281383141734@s.whatsapp.net',
      id: Id,
      t: T
    },
    content: [
      {
        tag: 'reject',
        attrs: {
          'call-creator': callerId,
          'call-id': idCall,
          count: '0'
        },
        content: null
      }
    ]
})
if (json.content[0].tag == 'offer') {
let qutsnya = await HuBotZ.sendContact(callerId, owner)
await HuBotZ.sendMessage(callerId, { text: `Sistem Otomatis Block!!!\nJangan Menelpon Bot!!!\nSilahkan Hubungi Owner Untuk Dibuka!!!`}, { quoted : qutsnya })
await sleep(8000)
await HuBotZ.updateBlockStatus(callerId, "block")
}
})

HuBotZ.ev.on('messages.upsert', async chatUpdate => {
try {
kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast') return
if (!HuBotZ.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
m = smsg(HuBotZ, kay, store)
require('../HuBotZ')(HuBotZ, m, chatUpdate, store)
} catch (err) {
console.log(err)}
})

HuBotZ.public = true

store.bind(HuBotZ.ev);
HuBotZ.ev.on("creds.update", saveCreds);
HuBotZ.ev.on("connection.update", async up => {
const { lastDisconnect, connection } = up;
if (connection == "connecting") return
if (connection){
if (connection != "connecting") console.log("Connecting to jadibot..")
}
console.log(up)
/*if (up.qr) await sendMessage(from, await qrcode.toDataURL(up.qr,{scale : 8}), 'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \nQR Expired dalam 30 detik', m)*/
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
  m.reply(`Your Pairing Code: ${code}`);
  rl.close();
}
console.log(connection)
if (connection == "open") {
HuBotZ.id = HuBotZ.decodeJid(HuBotZ.user.id)
HuBotZ.time = Date.now()
global.conns.push(HuBotZ)
await m.reply(`*Connected to Whatsapp - Bot*\n\n*User :*\n _*× id : ${HuBotZ.decodeJid(HuBotZ.user.id)}*_`)
user = `${HuBotZ.decodeJid(HuBotZ.user.id)}`
txt = `*Terdeteksi menumpang Jadibot*\n\n _× User : @${user.split("@")[0]}_`
sendMessage(`6281383141734@s.whatsapp.net`,{text: txt, mentions : [user]})
}
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { 
console.log(`Bad Session File, Please Delete Session and Pair Again`); HuBotZ.logout(); }
else if (reason === DisconnectReason.connectionClosed) { 
console.log("Connection closed, reconnecting...."); start(); }
else if (reason === DisconnectReason.connectionLost) { 
console.log("Connection Lost from Server, reconnecting..."); start(); }
else if (reason === DisconnectReason.connectionReplaced) { 
console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); HuBotZ.logout(); }
else if (reason === DisconnectReason.loggedOut) { 
console.log(`Device Logged Out, Please Pair Again And Run.`); HuBotZ.logout(); }
else if (reason === DisconnectReason.restartRequired) { 
console.log("Restart Required, Restarting..."); start(); }
else if (reason === DisconnectReason.timedOut) { 
console.log("Connection TimedOut, Reconnecting..."); start(); }
else HuBotZ.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
})

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

HuBotZ.getName = (jid, withoutContact  = false) => {
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

HuBotZ.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

HuBotZ.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await HuBotZ.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await HuBotZ.getName(i + '@s.whatsapp.net')}\n
FN:${await HuBotZ.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
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
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
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

HuBotZ.sendText = (jid, text, quoted = '', options) => HuBotZ.sendMessage(jid, { text: text, ...options }, { quoted })

}
start()
} catch (e) {
console.log(e)
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

module.exports = { jadibot, conns }