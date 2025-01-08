const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    react: "📜",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
    const voice = {
    menu: 'media/media_menu.mp3'
}
let menu = {
main: '',
download: '',
group: '',
owner: '',
misc: '',
search: '',
fun: '',
anime: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu = `
👋 𝐇𝐄𝐋𝐋𝐎, ${pushname}!
╭────《 𝐃𝐄𝐖-𝐌𝐃 》─────⊷
│ ╭──────────────◆
│ │ Owner Name: Hansa Dewmina
│ │ Owner Number: ${config.BOT_NUMBER}
│ │ Uptime: ${runtime(process.uptime())}
│ ╰──────────────◆
╰───────────────⊷
╭────❏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ❏
${menu.download}
╰━━━━━━━━━━━━━──⊷
╭────❏ ɢᴇɴᴇʀᴀʟ ❏
${menu.main}
╰━━━━━━━━━━━━━──⊷
╭────❏ ꜰᴜɴ ❏
${menu.fun}
╰━━━━━━━━━━━━━──⊷
╭────❏ ɢʀᴏᴜᴘ ❏
${menu.group}
╰━━━━━━━━━━━━━──⊷
╭────❏ ᴏᴡɴᴇʀ ❏
${menu.owner}
╰━━━━━━━━━━━━━──⊷
╭────❏ ᴍɪꜱᴄ ❏
${menu.misc}
╰━━━━━━━━━━━━━──⊷
╭────❏ ꜱᴇᴀʀᴄʜ ❏
${menu.search}
╰━━━━━━━━━━━━━──⊷
╭────❏ ᴡᴇᴇʙ ❏
${menu.anime}
╰━━━━━━━━━━━━━──⊷

𝐃𝐄𝐖-𝐌𝐃-𝐋𝐈𝐓𝐄 - 𝐌𝐃
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
