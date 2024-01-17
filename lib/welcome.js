require("../settings");
const axios = require('axios');
const chalk = require('chalk');
const fs = require('fs');
const { TelegraPh } = require('./uploader');
const { getRandom, smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./myfunc');
const { isSetWelcome, getTextSetWelcome } = require('./setwelcome');
const { isSetLeft, getTextSetLeft } = require('./setleft');
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
const welcome2 = global.auto_welcomeMsg
const leave2 = global.auto_leaveMsg
const {
	delay,
	proto,
	jidDecode,
	jidNormalizedUser,
	generateForwardMessageContent,
	generateWAMessageFromContent,
	downloadContentFromMessage,
} = require('@whiskeysockets/baileys')
const moment = require('moment-timezone')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const knights = require("knights-canvas");

module.exports.welcome = async(iswel, isleft, HuBotZ, anu) => {
	try {
            const metadata = await HuBotZ.groupMetadata(anu.id)
            const participants = anu.participants
            const memeg = metadata.participants.length;
  	        const groupName = metadata.subject
  		      const groupDesc = metadata.desc
  		      
            for (let num of participants) {
  		      const fkontaku = { key: {participant: `0@s.whatsapp.net`, ...(anu.id ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': ``, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;,;;;\nFN:,\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': global.thumb, thumbnail: global.thumb,sendEphemeral: true}}}
//Get pp User
                try {
                    pp_user = await HuBotZ.profilePictureUrl(num, 'image')
                } catch {
                    pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
                }
                ppuser = await getBuffer(pp_user)
                
                //Get pp Group
                try {
                    pp_group = await HuBotZ.profilePictureUrl(anu.id, 'image')
                } catch {
                    pp_group = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
                }
                ppgroup = await getBuffer(pp_group)
                
                //Get Background
                let back = await fetchJson('https://raw.githubusercontent.com/clicknetcafe/Databasee/main/azamibot/menus.json');
                let randomIndex = Math.floor(Math.random() * back.images.length);
                let result = back.images[randomIndex];

                
                if (anu.action == 'add' && (iswel || global.auto_welcomeMsg)) {
                	console.log(anu)
                if (isSetWelcome(anu.id, set_welcome_db)) {
                
                var get_teks_welcome = await getTextSetWelcome(anu.id, set_welcome_db)
                var replace_pesan = (get_teks_welcome.replace(/@user/gi, `@${num.split('@')[0]}`))
                var full_pesan = (replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc))
                HuBotZ.sendMessage(anu.id, { text: `${full_pesan}` })
                } else {
let capt = `\t\t*]--------- WELCOME ---------[*\n\n👋 Welcome @${num.split("@")[0]}\nWelcome To Group ${groupName}\nObedient the Group Rules!`
let wel = await new knights.Welcome2()
    .setAvatar(ppuser)
    .setUsername(`${num.split("@")[0]}`)
    .setBg(result)
    .setGroupname(groupName)
    .setMember(memeg)
    .toAttachment();
    
/*let wel = await (await new knights.Welcome2()
            .setAvatar(ppuser)
            .setUsername(`${num.split("@")[0]}`)
            .setBg(background)
            .setGroupname(groupName)
            .setMember(memeg)
            .toAttachment());
            let data = wel.toBuffer();*/
            
//        HuBotZ.sendFile(anu.id, data, 'sewelkom.png', capt, null, { mentions: [num]})

HuBotZ.sendMessage(anu.id, {
    image: wel.toBuffer(),
    caption: capt,
    mentions: [num]
});
                }
                } else if (anu.action == 'remove' && (isleft || global.auto_leaveMsg)) {
                	console.log(anu)
                	if (isSetLeft(anu.id, set_left_db)) {            	
                        var get_teks_left = await getTextSetLeft(anu.id, set_left_db)
                        var replace_pesan = (get_teks_left.replace(/@user/gi, `@${num.split('@')[0]}`))
                        var full_pesan = (replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc))
                      HuBotZ.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `${full_pesan}` })
                       } else {
let lev, txt = `\t\t*]--------- GOODBYE ---------[*\n\n👋 Sayonara @${num.split("@")[0]}\nDon't Come Back to This Group Again. . .`
lev = await new knights.Goodbye()
    .setUsername(`${num.split("@")[0]}`)
    .setGuildName(groupName)
    .setGuildIcon(ppgroup)
    .setMemberCount(memeg)
    .setAvatar(ppuser)
    .setBackground(result)
    .toAttachment();

HuBotZ.sendMessage(anu.id, {
    image: lev.toBuffer(), // Directly use Buffer data
    caption: txt,
    mentions: [num]
});
    }
                } else if (anu.action == 'promote') {
                  /*HuBotZ.relayMessage(anu.id, {
		scheduledCallCreationMessage: {
		callType: "AUDIO",
		scheduledTimestampMs: 100,
		title: `@${num.split("@")[0]} Telah Di Promote Menjadi Admin\n`, 
		}
	}, {})*/
                } else if (anu.action == 'demote') {
                    /*HuBotZ.relayMessage(anu.id, {
		scheduledCallCreationMessage: {
		callType: "AUDIO",
		scheduledTimestampMs: 100,
		title: `@${num.split("@")[0]} Telah Di Demote Dan Menjadi Member Biasa\n`, 
		}
	}, {})*/
              }
}
        } catch (err) {
            console.log(err)
            }
	}

	module.exports.aDelete = async (global, HuBotZ, m) => {
	  if (global.antiDelete){
	try {
		const dataChat = global.dbc
		const mess = dataChat.find((a) => a.id == m.id);
		const mek = mess.m;
    //console.log(mek)
		const participant = mek.key.remoteJid.endsWith("@g.us") ? mek.key.participant : mek.key.remoteJid;
		console.log(participant)
		const froms = mek.key.remoteJid;
		await HuBotZ.sendMessage(
			froms, {
				text: `「 *ANTI DELETE MESSAGE* 」
    
📛 *Name* : ${mek.pushName}
👤 *User* : @${mek.sender.split("@")[0]}
⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB 
✍️ *MessageType* : ${mek.mtype}
    `,
				mentions: [participant],
			}, {
				quoted: mek
			}
		);

		await HuBotZ.copyNForward(froms, mek, true);
  	await delay(4000)
		let messek = dataChat.find((a) => a.id == m.id);
		for (let [i, te] of dataChat.entries()) {
			if (te.id === m.id) {
				dataChat.splice(i, 1); // Tim is now removed from "users"
		}
		}

	} catch (err) {
	  console.log(err)
	}
	  }
	}

module.exports.oneTime = async (global, HuBotZ, m) => {
  if (global.antiViewOnce){
  			try {
let teks = `「 *ANTI VIEWONCE MESSAGE* 」
      
📛 *Name* : ${m.pushName}
👤 *User* : @${m.sender.split("@")[0]}
⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB  
✍️ *MessageType* : ${m.mtype}
💬 *Caption* : ${m.msg.caption ? m.msg.caption : "no caption"}`

await HuBotZ.sendTextWithMentions(m.chat, teks, m)
  await delay(500)

  m.copyNForward(m.chat, true, {
  readViewOnce: true,
    quoted: m
  })

			} catch (err) {
				console.log(err)
			}
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
