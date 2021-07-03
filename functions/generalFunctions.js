
function randomNumber(message, args)
{
    console.log("ingrese al random")
    if(args[0])
    {
        message.channel.send(Math.floor(Math.random() * args[0]))
    }else{
        message.channel.send(Math.random())
    }
}


module.exports = { randomNumber }