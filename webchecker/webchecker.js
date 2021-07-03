let fetch = require('node-fetch');
let mailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const credPath = path.resolve(__dirname, './credentials.json')

//TODO mejorar la forma en la que obtiene los mails, que sea por mails especificos
const mailObject = JSON.parse(fs.readFileSync(credPath));
const fromMailer = mailObject.fromMailer.mail;
const toFirstMailer = mailObject.toMail.firstmail;
const toSecondMailer = mailObject.toMail.secondmail;
const toThirdMailer = mailObject.toMail.thirdmail;
const fromMailerPassword = mailObject.fromMailer.password;

const minutesToRetry = 2400000 // 40 minutes = 2400000 ms, 30 seconds = 30000 ms

let transporter = mailer.createTransport({
    service: mailObject.fromMailer.service,
    auth: {
        user: fromMailer,
        pass: fromMailerPassword
    }
})



function fechThePage(webpage, fromMailer, toFirstMailer, toSecondMailer, toThirdMailer, message) {
    try {
        fetch(webpage)
            .catch(err => {
                message.channel.send(`Se cayo la página ${webpage}, avisando a ${toFirstMailer}, ${toSecondMailer}, ${toThirdMailer}`)
                console.error(`La página ${webpage} respondio con el error: ${err.code}`)
                transporter.sendMail(mailOptions = {
                    from: fromMailer,
                    to: toFirstMailer + ', ' + toSecondMailer + ', ' + toThirdMailer,
                    subject: `Se cayó la página ${webpage}`,
                    text: `La página ${webpage} está caida, al intentar establecer conección con la página el sistema respondió: ${err.code}`
                }, function (error, data) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(`Email sent: ${data.response}`)
                    }
                })
                console.log("Retrying fech");
            })

            .then(res => {
                console.log(`Res status for website: ${webpage} is ${res.statusText}`)
            })
            .then(setTimeout(fechThePage, minutesToRetry, webpage, fromMailer, toFirstMailer,toSecondMailer, toThirdMailer, message))
    } catch (error) {
        console.error("TRY CATCH ERROR: " + error)
    }

}

function runTheFecherWithDiscord(message) {

    fechThePage('https://chat.smsmasivos.biz/Admin/Login', fromMailer, toFirstMailer, toSecondMailer, toThirdMailer, message);
    fechThePage('http://run0km.com/', fromMailer, toFirstMailer, toSecondMailer, toThirdMailer, message);
    fechThePage('https://delivery.run0km.com/', fromMailer, toFirstMailer, toSecondMailer, toThirdMailer, message)
    message.channel.send(`Starting fetcher for chat, run, delivery`)
}

function fechByPage(message, args) {
    if(!(message.content.includes('http://') || message.content.includes('https://')))
    {
        args[0] = `http://${args[0]}`
    }
    fechThePage(args[0], fromMailer, toFirstMailer, toSecondMailer, toThirdMailer, message);
    message.channel.send(`Starting fetcher for ${args[0]}`)
}


module.exports = { runTheFecherWithDiscord, fechByPage };