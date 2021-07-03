const { Message } = require('discord.js');
const aliases = require('../config/commands.json');
const { staffRoleID, prefix } = require('../config/config.json');
const { randomNumber } = require('../functions/generalFunctions');
const { runTheFecherWithDiscord } = require('../webchecker/webchecker');



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
            randomNumber(msg,args);
            return;
        }
        if (aliases.webChecker.includes(command))
        {
            runTheFecherWithDiscord(msg);
            return;
        }

    } catch (e) {
        console.log("ERROR ON COMMAND: ", command)
        console.log(e)
    }
}


module.exports = { handleMessage }