const aliases = require('../config/commands.json');
const { staffRoleID, prefix } = require('../config/config.json');
const { randomNumber, buildTheSize, horoscopo } = require('../functions/generalFunctions');
const { runTheFecherWithDiscord , fechByPage} = require('../webchecker/webchecker');



const handleMessage = (msg) => {
    var havePrefix = false;

    for (let index = 0; index < prefix.length; index++) {
        if (msg.content.startsWith(prefix[index])) havePrefix = true;
    }

    if (!havePrefix || msg.channel.type === 'dm') return;

    //input= !maxsize 2
    const args = msg.content.slice(1).trim().split(' ');
    const command = args.shift().toLowerCase();
    // prefix = "!"
    // command = "maxsize"
    // args = ["2"]

    try {


        if (aliases.randomNumber.includes(command)) {
            randomNumber(msg, args);
            return;
        }
        if (aliases.webChecker.includes(command)) {
            //TODO: a test to see if this works
            if (!args.length > 0) {
                runTheFecherWithDiscord(msg);
                return;
            } else {
                fechByPage(msg, args);
                return;
            }
        }
        if(aliases.horoscopo.includes(command))
        {
            if(!args.length > 0)
            {
                return;
            }else{
                horoscopo(msg,args[0]);
                return;
            }
        }
        if (aliases.dicksize.includes(command))
        {
            if(!args.length > 0)
            {
                let number = Math.floor(Math.random() * 20)
                msg.channel.send(`Te mide ${number} cm`);
                buildTheSize(msg, number);
                return;
            }else{
                let number = Math.floor(Math.random() * 20)
                msg.channel.send(`A ${args[0]} mide ${number} cm`);
                buildTheSize(msg, number);
                return;
            }
        }
        if (aliases.changeNamesOfEveryUser.includes(command)){
            //@everyone === 412117081329238037
            const list = msg.client.guilds.cache.get("412117081329238037");
            list.members.cache.each(member => {
               //do stuff with guild memebrs here
               console.log(member.user.username, ", ")
               member.setNickname(`${member.user.username} 🐷`)
            })
            return;
        }

    } catch (e) {
        console.log("ERROR ON COMMAND: ", command)
        console.log(e)
    }
}


module.exports = { handleMessage }