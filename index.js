const TelegramBot = require ('node-telegram-bot-api')

const TOKEN = '568191035:AAF66XCKEMpRbDnbd6oWcBPb0S9ZalRJzeo'

const bot = new TelegramBot(TOKEN, {
    polling:true
}
)


const KB = {
    shedule: 'Расписание звонков',
    links: 'ЗНУшные интернеты',
    back: 'Назад'
}


bot.onText(/\/start/, msg => {

    const text = `Приветствую в справочнике Wiki ZNU, ${msg.from.first_name}!\nВыбери нужный пункт:`

    bot.sendMessage(msg.chat.id, text, {
        reply_markup: {
            keyboard: [
                [KB.shedule, KB.links]
                ['Musthave студентам', 'Руководства']
                ['Факультеты', 'Карта ЗНУ']
                ['Сектора ЗНУ', 'Общежития']
                ['Техподдержка']
            ]
        }
    })

})

bot.on ('message', msg => {
    switch (msg.text) {
        case KB.shedule:
            break
        case KB.links:
            break
        case KB.back:
            break
    }
});