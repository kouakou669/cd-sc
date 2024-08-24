const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Hacking_Md,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function HACKING_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Hacking_Md = Hacking_Md({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Safari (Ubuntu)", "Chrome (MacOs)", "Chrome (Linux)"]
             });
             if(!Pair_Code_By_Hacking_Md.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Hacking_Md.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Hacking_Md.ev.on('creds.update', saveCreds)
            Pair_Code_By_Hacking_Md.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Hacking_Md.sendMessage(Pair_Code_By_Hacking_Md.user.id, { text: 'HACKING-MD;;;=>' + b64data });

               let HACKING_MD_TEXT = `
*✅sᴇssɪᴏɴ ᴄᴏɴɴᴇᴄᴛᴇᴅ✅*
Use the session Id Above to
deploy your Bot.
╔════◇
║『 *YOU'VE CHOSEN HACKING-MD* 』
║ You've Completed the First Step
║ to Deploy a Whatsapp Bot.
╚════════════════╝
╔═════◇
║ 『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ 𝐎𝐰𝐧𝐞𝐫: https://wa.me/2250545065189
║❒ 𝐑𝐞𝐩𝐨: https://github.com/HACKING995/HACKING--MD9
║❒ 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦: https://t.me/freeeherokucc
║❒ 𝐘𝐨𝐮𝐭𝐮𝐛𝐞: https://youtube.com/@device.bot.thomas?si=1XTGwLjhIuk5XeNN
║❒ 𝐖𝐚𝐆𝐫𝐨𝐮𝐩: https://chat.whatsapp.com/CmrAOrFSBMi4eXW8xL5UHZ
║❒ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: https://whatsapp.com/channel/0029VaYrk3lIiRozw8zeoh00
║ 💜💜💜
╚════════════════╝
Don't Forget To Give Star⭐ To My Repo`
 await Pair_Code_By_Hacking_Md.sendMessage(Pair_Code_By_Hacking_Md.user.id,{text:HACKING_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Hacking_Md.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    HACKING_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service Restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service is Currently Unavailable"});
         }
        }
    }
    return await HACKING_MD_PAIR_CODE()
});
module.exports = router
