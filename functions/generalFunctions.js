
function randomNumber(message, args) {
    if (args[0]) {
        message.channel.send(Math.floor(Math.random() * args[0]))
    } else {
        message.channel.send(Math.random())
    }
}
function buildTheSize(message, number) {
    let d = "8"
    for (let i = 0; i < number; i++) {
        d = d + "=";
    }
    d = d + "B";
    message.channel.send(d)
}
function horoscopo(message,arg) {
    switch (arg) {
        case "acuario":
            message.channel.send(`Alo largo de esta semana tendrás muchas ocasiones para concretar tus deseos, para empezar a hacerlos realidad, luchadora Acuario. Iniciarás algunas cosas con las que soñabas desde hace tiempo. Estás en un momento óptimo de salud y energía, tienes la fuerza suficiente y lo vas a lograr si tienes un poco de paciencia. Te va a dar mucho ánimo ver que algunos planes que estaban estancados, empiezan a avanzar y que posibilitan llegar a los objetivos que te habías propuesto. En el trabajo, aunque tendrás cierta competencia, te admirarán por tu habilidad con la tarea que desempeñas y esto significa mejora económica en el futuro. Claro, a ti te gustaría que fuera inmediato, pero la vida tiene sus tiempos y los controla muy bien. Disfruta de lo que tienes ahora, que es mucho y también del amor. Si estás todavía libre, esta semana un amigo de siempre, sorprendentemente podría convertirse en algo más para ti. Estaba cantado, sólo que no te habías dado cuenta.
            Número de la suerte: 6`);
            break;
        case "aries":
            message.channel.send(`Estás llena de vitalidad y respiras energía por los cuatro poros, Aries. Entrarás en la semana con buen pie y si tomas las decisiones adecuadas puedes pasar unos días magníficos, aunque también te encontrarás con situaciones algo complicadas que tienes que resolver. La piedra en el zapato estos días es que puede surgir una discusión con tu pareja en la que pierdas los nervios y digas cosas que nunca hubieras imaginado. No es que tengas que callar lo que piensas sino que puedes enfocar el tema de otro modo, con más sutileza, pero si te sale así no podrás hacer nada y esto te puede traer problemas. Lo primero es no empezar peleas y lo siguiente es no perder los papeles. Si te ocurre, sé humilde y pide disculpas. Luego, prepara alguna sorpresa romántica para tu chico. Probablemente podrás arreglarlo, pero siempre será mejor que lo evites. El trabajo y el dinero te funcionan muy bien y de momento puedes despreocuparte. Céntrate en los sentimientos y en tus seres queridos.

            Número de la suerte: 0`);
            break;
        case "geminis":
            message.channel.send(`Un exceso de sensibilidad te puede jugar una mala pasada esta semana en muchos aspectos, susceptible Géminis. Cualquier pequeño problema que tengas que afrontar lo verás como un muro insalvable. Y así va a ser, porque te costará encontrar la salida correcta, precisamente porque tu estado de ánimo te pondrá una venda en los ojos. Puedes tener un bache económico, como le pasa a todo el mundo, pero para ti se convertirá en un atolladero. No serán unos días para tomar decisiones, ni tan sólo las de menor importancia, espera a tener más calma y verás las cosas con mayor objetividad. A causa de este estado emocional, puedes tener problemas sentimentales, pero en este caso es que tal vez no has dado todavía con la persona adecuada. Para no sentirte decepcionada tendrías que buscar personas más espirituales, te llenarán más y te harán descubrir un mundo distinto. Es una buena semana para ti, aunque lo dudes seriamente. Levanta el ánimo y espera con calma a que pase la tormenta.

            Número de la suerte: 8`);
            break;
        case "cancer":
            message.channel.send(`Esta semana vas a tener que hacer un esfuerzo y ser más tolerante que de costumbre con la gente que tienes a tu alrededor en todos los ámbitos, sensible Cáncer. Tú nunca eres demasiado crítica, por eso cuando dices algo con la mejor intención, muchos no soportan el toque de atención. Si alguien se molesta por un comentario tuyo, ajo y agua, no perderás demasiado. En el trabajo eres un hacha pero últimamente no puedes con todo. Tienes que confiar un poco más en quienes te rodean y aprender a delegar. La familia ocupará bastante espacio en estos próximos días, ten paciencia también con ellos, unas palabras amables te ayudarán a que se sientan más cerca de ti. Hazlo, porque lo están necesitando. Tu parte financiera sigue muy arriba y no te causa preocupación, todo lo contrario que el tema amoroso, que se presenta algo complicado, con ciertas discrepancias que no hay forma de resolver. Un poco de soledad te iría bien para reflexionar cuál es el mejor camino a tomar.

            Número de la suerte: 1`);
            break;
        case "leo":
            message.channel.send(`Tienes ahora la energía a tope y una salud óptima, afortunada Leo. Estos puntos tan positivos, sostienen a todos los demás. Te irá muy bien en estos días en el terreno profesional. Quizá se ha producido un cambio en las últimas semanas y todo pinta que será muy positivo de cara al futuro. Tus dotes son muy apreciadas en todas partes y tus jefes te valoran. Esto se traduce casi siempre en más ganancias. Tendrías que empezar a ahorrar para en el futuro no muy lejano disponer de un capital que te permita iniciar algún negocio que ya tienes en mente, ser tu propio jefe y liberarte de algunas ataduras que ahora se te hacen pesadas de sobrellevar. Esta semana, si sabes organizarte, compartirás a partes iguales trabajo y diversión. Procura no malgastar. En el amor puedes tener un pequeño altercado con tu pareja porque recela de tu fidelidad. A ti te gusta coquetear un poco y a él esto le sabe a rayos. Tendrás que planteártelo.

            Número de la suerte: 7`);
            break;
        case "virgo":
            message.channel.send(`Al empezar la semana puedes encontrarte con algún obstáculo en la vida laboral, Virgo. Una discusión o altercado con uno de tus superiores puede hacer que no te sientas tan fuerte ni tan segura como en días pasados en el trabajo y esto te puede incomodar. Hacia el fin de semana las aguas volverán a su cauce, pero no olvides lo que ha pasado ni confíes demasiado en esta persona, que tal vez siente amenazado su puesto o tiene celos profesionales porque se siente inferior. Abre bien los ojos para evitar caer en su trampa. A partir del viernes tendrás la intuición y la espiritualidad agudizadas, puede que tus sueños te revelen cómo debes actuar. Y relájate porque todo va a salir muy bien. Estás necesitando una actividad en la que intervenga también esa parte espiritual que ahora se está potenciando. ¿A qué estás esperando para meditar? También tu físico se armonizará. En el amor no hay novedades esta semana. Todo irá como la seda.

            Número de la suerte: 9`);
            break;
        case "libra":
            message.channel.send(`Tu situación laboral sigue siendo excelente, Libra. Tienes todas las de ganar y ahora puedes conseguir lo que te habías propuesto. Pero no confíes en los que quieren darte muchos consejos u opinar sobre lo que tienes que hacer o no. Tú tienes muy buen criterio y lo sabes, así que acepta lo que te digan, pero tú a lo tuyo. Tu voz interior te guiará por el camino acertado. Un amigo o un familiar pueden proponerte una asociación para un negocio. Está bien aspectado. Puede convenirte mucho. En el amor todo marcha según lo previsto, aunque en estos días corres el riesgo de sufrir una pequeña decepción con alguien a quien conociste recientemente. Sin embargo, también es probable que des una oportunidad a otra persona que se lo merece, tal vez después de ese pequeño contratiempo. El fin de semana el amor te sonreirá, tanto si es para mejorar una relación establecida como si es para sentir un flechazo por alguien inesperado. Aprovéchalo al máximo.

            Número de la suerte: 6`);
            break;
        case "escorpio":
            message.channel.send(`Te gusta hacer las cosas a tu manera y ahora es el momento oportuno para ello, independiente Escorpio. Te sientes libre y capaz de llevar a cabo todo aquello que siempre te has propuesto. Tu actitud es magnífica y, sin duda, te ayudará a que tus sueños o parte de ellos se materialicen. Esta fuerza que te llega a causa de un poderoso influjo lunar, te ayudará a adaptarte a los cambios que puedan producirse y de los que saldrás airosa si haces las cosas como crees que hay que hacerlas, sin hacer demasiado caso de consejos ajenos. En el terreno laboral, sin embargo, tendrás que esperar un poco para que se produzca esta nueva situación con la que sueñas. Todavía no es el momento. Pero sabrás adaptarte y pasar con éxito esta etapa de espera. Sal y diviértete para compensar la rutina del trabajo y aprovechar al máximo el verano. Tu vida amorosa mejora a pasos agigantados y puede avanzar todavía más si te lo propones.

            Número de la suerte: 4`);
            break;
        case "sagitario":
            message.channel.send(`Has de sacudirte de encima como sea esta melancolía que te invade a ratos, nostálgica Sagitario. En primer lugar porque no tienes verdaderos motivos para sentirte pesimista, en segundo porque no te beneficia en nada y tercero porque también porque podrías ahuyentar a personas importantes en tu vida que no saben cómo tratarte. Ésta es una semana trascendental para concretar temas, en especial los profesionales. Aquello que has deseado durante tanto tiempo empieza a materializarse y recibirás ayuda de tus superiores para ello. Les ha impactado tu capacidad creativa, que te hace encontrar soluciones ingeniosas a cualquier problema y comprobar que caes súper bien a los clientes. Puede que te salga en estos días un viaje profesional, un desplazamiento fuera del área donde normalmente te desenvuelves. Si es así, será muy positivo. El tema sentimental y el económico esta semana tendrán un gran empuje planetario, pero pon atención a tu relación de pareja porque le falta un poquitín de chispa y pasión. ¡Vuélcate en el amor!

            Número de la suerte: 5`);
            break;
        case "capricornio":
            message.channel.send(`Ya puedes empezar a animarte, nativa de Capricornio, porque el dinero seguirá llegando a tu bolsillo y poco a poco te irás equilibrando económicamente. Esto te dará más tranquilidad y ganas de hacer muchas cosas. Antes, sin embargo, tienes que estabilizar tus cuentas porque, aunque estás en un ciclo muy favorable, todavía no puedes cantar victoria. En cambio, tu vida amorosa está de momento estable, estés en la situación que estés y en este aspecto te espera una semana agradable, sobre todo el viernes y el domingo. Pueden surgir pequeñas novedades pero ninguna tiene pinta de ser trascendental en tu vida. Si te peleas con el novio, pasará. Si encuentras a una persona especial, puede que a la larga no sea el amor soñado, pero quizá sea un romance muy positivo para tu avance personal. En estos días presta atención a lo que comes o tendrás que hacer una dieta pre-vacaciones. Esta semana tira todo lo que no te sirve y deja espacio a lo nuevo. ¡Desatasca! Ganarás mucha energía.

            Número de la suerte: 3`);
            break;
        case "piscis":
            message.channel.send(`Entras en una semana feliz, Piscis, aunque también con sus pequeños problemitas que podrás resolver sin grandes esfuerzos. Tus asuntos amorosos, que tanto te han estado preocupando, siguen mejorando. Serán unos días de emociones fuertes, pero mucho cuidado con los celos, tanto los tuyos como los de tu pareja, porque pueden provocar un conflicto tonto entre vosotros. Tienes un gran magnetismo para las demás personas y esto a veces hace que él se sienta un poco inseguro, sobre todo cuando te prodigas en simpatía con otra gente. A tu chico le cuesta entender que les prestes tanta atención. En el trabajo las cosas marchan sobre ruedas y ya no vas apurada de dinero, pero controla las compras porque te puedes animar demasiado y luego sudarás tinta para llegar a fin de mes. Dedica parte de tu tiempo a tu familia y esto te proporcionará un gran bienestar emocional. Te darán un consejo importante que será muy positivo. Presta mucha atención a las conversaciones, tómalo como una señal.

            Número de la suerte: 4`);
            break;
        case "tauro":
            message.channel.send(`No eres de tener prejuicios, Tauro, pero esta semana esta característica de tu signo, puede brillar por su ausencia. Antes de hacerte una idea o tomar una decisión, piénsalo bien, porque seguramente la primera impresión no será la correcta. Sigues en muy buena racha laboral y social. Tu simpatía hace que la gente se te “pegue” y esto es muy positivo, pero también has de saber mantener distancias con quien sabes que no te interesa porque te puede perjudicar. Una conjunción astral favorable te dará mucha fuerza para afrontarlo todo. En estos días puedes recibir una propuesta de una empresa en la que trabajaste. Estarás tentada a dar una negativa, pero te equivocarías. Ahora te llegan grandes oportunidades camufladas como pequeños ofrecimientos. Las cosas no se paran ahí, siguen por un camino ascendente que te llevará a la cima. Te conviene asistir a reuniones o fiestas, incluso organizarlas. Relaciónate mucho socialmente estos días, en especial si eres una Tauro con el corazón libre. Puedes dar fácilmente con tu media naranja.

            Número de la suerte: 2`)
            break;
        default:
            message.channel.send(`https://www.lecturas.com/horoscopo/`)
            break;
    }
}


module.exports = { randomNumber, buildTheSize, horoscopo }