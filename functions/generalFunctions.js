
function randomNumber(message, args)
{
    if(args[0])
    {
        message.channel.send(Math.floor(Math.random() * args[0]))
    }else{
        message.channel.send(Math.random())
    }
}
function buildTheSize(message, number)
{
    let d = "8"
    for (let i = 0; i < number; i++) {
        d = d + "=";
    }
    d = d + "B";
    message.channel.send(d)
}


module.exports = { randomNumber, buildTheSize }