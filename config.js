// S C R I P T  O R I  B Y  Bochilgaming 🔭

// - - THANKS TO - -
// • Allah SWT
// • Nurutomo
// • Bochilgaming
// • Rominaru
// • Kannachann
// • FahriAdison
// • The.Sad.Boy01
// • Rlxfly
// • Rasel comel
// • ImYanXiao
// • Xtreshe (Beban)
// • Dll

//[!] Jangan Lupa Ganti Bagian global.owner

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*============== SOCIAL ==============*/

// kalo ga punya biarin aja biar ada creditsnya :v
global.sig = 'https://instagram.com/Xiao_yan_21' //Link Instagrammu
global.sgh = 'https://github.com/ImYanXiao' //Link Githubmu
global.sgc = 'https://chat.whatsapp.com/DyBMXDw1IshFM9z0ZHZNlR'
global.sdc = '-' //Isi Pake Link Discordmu Kalo Gada Biarin aja
global.snh = 'https://nhentai.net/' //Hmmm, Ini boleh kalian isi terserah :v

/*============== PAYMENT ==============*/
global.pdana = '085736178354' //Nomor Danamu
global.ppulsa = '085736178354' //Nomor SimCard Yang Kamu Pake
global.psaweria = 'https://saweria.com/XiaoYan021' //Link Saweriamu Kalo Nggada Ketik - aja

/*============== NOMOR ==============*/
global.nomorbot = '6281231079387' //Nomor Bot
global.nomorown = '6285736178354' //Nomor Owner
global.namebot = 'Elaina BOT' //Nama Bot
global.nameown = '𝓧𝓲𝓪𝓸 - 𝓨𝓪𝓷' // Nama Owner

/*============== session ==============*/

global.sessionId = 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUtadFphSnpBQWNUUC9hbzIxa2xsQys0bEdJNWtRV29PeUpCTFlPRWNuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3R0c3FoVFdWaHhKdVE3eVpMOXFnNy9hbGtvNjZuYkZ3emMxdG9rVktYND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTUFBSkVNS0tYSms0QkgvSGlkK2l0Q09QN0RRRU1yNjFpSHZtMjhaMm1vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYMTJEUE9GdTVGYmxKa05SeVRVUEpCZHhYQ2NwUDExWWNwU1pPNWxRSldFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndOOW9iZGh6RGtGYnZYTUN0WnZucEZMdkdpVVpLakxhNnZiN2oxZ2o2bnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InloMXg1cmhoTThtaW0wL1I1QzliTWZLZFlzcDNMU1h0ZE5JZ0EzVjNzbkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEsyL2NPSGhRVkJsY1A1ek5aNWxBZlFkdkExS0NLaUZVeU1jRVg1UnJtQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY05LZER5MGNtRVdiRkxxUGxJUXJpeU15cmhwUXFjS3Nqc0hlcXJ3TmN6TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImF5M1Y0cy9IR0xHdjRMcU03SUlPbHlBVGhrV0F1dGVTWUk2ZGpiMm51RDg5N1JOZGh1V0FYQndsRmlmK2FyYmVrWXlqR0d6TFd0c0liK0dZSDkwRENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6IkdJbUtoRlNKRU5sSURFZ0poRDJ5VExWS0t6TzYrck1nQjlUUTdiUm9qRFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjBiVlJTZVhKUWp1NElkaWhkbnZ6ekEiLCJwaG9uZUlkIjoiN2Q3YzA2NGYtMTU2Mi00Y2NjLThmN2ItYjJmOTMyYWM1MWI4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlI3L1ZCc05oenlJK1I5UGNMRDhqOEpGUnRBWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtOFM1WW44ZWROMzNUUmdMZVpsa2o2YkFmZFU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVFNXTUFRMloiLCJsYXN0UHJvcEhhc2giOiIxbE9TRUkiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQT09In0sIm1lIjp7ImlkIjoiMjQzOTcyMDI4ODE5OjI1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTUxOTU2NDI5NDg0MTY0OjI1QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmI0MnZrSEVNS0N6YlVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVUlpaVlLYXBhZjdJNVBNbHBFVW9CU2hiZjA1MFUrK3pXRjRjeGhoMjNROD0iLCJhY2NvdW50U2lnbmF0dXJlIjoicXVaY0c0WE5TbUo0MGhLU1NxSjRhaUdmeEV4WFhOUmtIaVIwaW1TOUk3Y1Y4dFEyYTRURzBEcldsWjJObTc4d3pESld5NTQrSXVyUXIzbHh2djIrRGc9PSIsImRldmljZVNpZ25hdHVyZSI6ImpuOEZDeUUwNzhRRmRXMDRCWG10L3ZUZHliQXI4MFJvWDVQaWNGZTZyc1A0ZEtkYmlaRTkxRFd0ZExyL0VKYnZXSnA1c3BOMW9CWDg2YkRpZzQ3a0FnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQzOTcyMDI4ODE5OjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZDSW9tQ21xV24reU9UekphUkZLQVVvVzM5T2RGUHZzMWhlSE1ZWWR0MFAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMwMjM2ODUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRFprIn0='; // Espace pour stocker la session ID

/*============== STAFF ==============*/
global.owner = [
  ['6285736178354', '❦ 𝚇 𝚒 𝚊 𝚘 - 𝚈𝚊𝚗? 🎐', true] //Ganti jd nomormu sama Namamu
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


global.lolkey = 'apikeymu'
/*============== API ==============*/
// Tambahin Rest Apinya Sendiri Krn yg saya hapus apinya sudah Mati
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.lolhuman.xyz': 'Apikeymu'
}
// Kata APIKEY itu isi dengan apikeymu, dengan beli ke website itu

/*============== WATERMARK ==============*/
global.wm = '                「 ᴇʟᴀɪɴᴀ 𝙱𝙾𝚃 汉  」' //Main Watermark
global.wm2 = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘ᴇʟᴀɪɴᴀ - ᴄʜᴀɴ˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷'
global.wm3 = '⫹⫺ ᴇʟᴀɪɴᴀ 𝙱𝙾𝚃'
global.namedoc = 'Elaina`s Bot' //Main Name Menu Document
global.botdate = `⫹⫺ Day's: ${week} ${date}`
global.bottime = `ᴛɪᴍᴇ: ${wktuwib}`
global.titlebot = '🎋 ┊ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ'
global.author = global.namedoc


/*============== LOGO ==============*/
global.thumb = 'https://telegra.ph/file/cce9ab4551f7150f1970d.jpg' //Main Thumbnail
global.thumb2 = 'https://telegra.ph/file/26b515d170f1e599f78a7.jpg'
global.thumbbc = 'https://telegra.ph/file/05f874dc87f7e27fa8127.jpg' //For broadcast
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'
global.thumblvlup = 'https://telegra.ph/file/a3e66e0fa840b08236c75.jpg'

/*============== TEXT ==============*/
global.wait = '```「▰▰▰▱▱▱▱▱▱▱」Loading...```'
global.eror = '```404 error```'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
global.djson = 'application/json'

global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer

// COMMAND MENU
global.dashmenu = '┅━━━═┅═❏ *ღ 𝘿𝘼𝙎𝙃𝘽𝙊𝘼𝙍𝘿 ღ* ❏═┅═━━━┅'
global.cmenut = '❏––––––『'                       //top
global.cmenuh = '』––––––'                        //header
global.cmenub = '┊❀'                            //body
global.cmenuf = '┗━═┅═━––––––๑\n'                //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = '┊'                              //pembatas menu selector

global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

/*============== STICKER WM ==============*/
global.stickpack = '.'
global.packname = `☂︎\n𝗘\nl\na\ni\nn\na\n-\n𝗕\n𝗢\n𝗧\n✦\n\n⫹⫺ Whatsapp BOT\nwa.me/${global.nomorbot}`
global.requestpack = 'Sticker Request By '

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
