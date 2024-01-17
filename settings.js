const chalk = require("chalk")
const fs = require("fs")

//Api Keys
global.keyopenai = "your_key" //Login In Openai 

global.ZeeApi = "your_key", //Login In https://api.zeeoneofc.xyz

global.ZenzKey = "zenzkey_a22c7789e1", //Login In https://api.zahwazein.xyz
global.XznKey = "keyz", //Login In https://skizo.tech

global.miftah = "TOBIASHYTAM", //Login In https://api.miftahganzz.tech Or https://api.miftahganzz.my.id

global.botzAku = "fBZG21GWEr", //Login In https://api.botzaku.com

global.ibeng = "tLYGbKvRqE", //Login In https://api.ibeng.tech Or https://ibeng.onrender.com

global.lolhuman = "DAVIDHUMAN", //Login In https://api.lolhuman.xyz


//Settings Doc
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//Owner Settings Name
global.owner = ['6281383141734@s.whatsapp.net'] //ur owner number
global.ownername = "David XD" //ur owner name
global.botnumber = "bot_Number" //ur bot number

//Bot Settings
global.public = true
global.botname = "HuBotZ"
global.wagc = "https://chat.whatsapp.com/KwIfgCBCPR2Jwxf5uxpV1z"
global.wm = "WhatsApp Bot"
global.packname = "Sticker By"
global.author = "HuBotZ-MD"
global.creator = "6281383141734@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'sessions'
global.hituet = 0
global.auto_welcomeMsg = false
global.auto_leaveMsg = false
global.antiViewOnce = false
global.grupOnly = false
global.antiDelete = false
global.autobio = false
global.anticall = false
global.autorespond = false
global.autoblok212 = true
global.autoread = false
global.autoTyping = false
global.autoRecord = false

//Auto Download
global.auto_down_tt = false
global.auto_down_yt = false
global.auto_down_fb = false
global.auto_down_ig = false

//Auto Ai
global.auto_ai_grup = false
global.auto_ai_japri = false

//media target
global.thumb = fs.readFileSync("./HuBotZ/theme/jembot.jpg")
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//User Limit
global.limitawal = {
   premium: "Infinity", //Unlimited
   free: 25
}

//User Game Limit
global.limitgameawal = {
   premium: 500, //:V
   free: 25
}

//Multiplier
global.multiplier = 69 //Don't Change!


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
