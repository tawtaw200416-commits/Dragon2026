const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    return ctx.reply('ကျေးဇူးပြု၍ အောက်ပါလင့်ခ်များကို အသုံးပြုပါ -', {
        reply_markup: {
            inline_keyboard: [
                [{ text: '📢 Join Group သို့သွားရန်', url: 'https://t.me/+6iY7D2rwWxAyZTZl' }],
                [{ text: '🎮 Game Link သို့သွားရန်', url: 'https://www.shwe003.com/#/register?invitationCode=47287101664' }]
            ]
        }
    });
});

module.exports = async (req, res) => {
    try {
        if (req.method === 'POST') {
            await bot.handleUpdate(req.body);
            return res.status(200).json({ ok: true });
        }
        return res.status(200).send('Bot is running!');
    } catch (error) {
        console.error('Webhook error:', error);
        return res.status(500).json({ error: error.message });
    }
};
