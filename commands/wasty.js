const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

const mesajlar = ["Wasty'e mi seslendin bro? Kendisi sunucumuzun en yakışıklısıdır ama aynı zamanda bir obezdir O yüzden şuanda yemek yiyor etiket atayımda daha rahat görsün. <@852537099722948628>", "Dünyanın en güzel obezinden bahsettiğin için teşkkür ederiz.", "Sen sıradan her şeyden çok daha güzelsin. <@852537099722948628>", "Enerjin içimi aydınlatıyor.", "En güzel iyikimsin. <@852537099722948628>", "Masallardaki prensesin şekil bulmuş halisin. <@852537099722948628>"]
    const random = mesajlar[
      Math.floor(Math.random() * mesajlar.length)];

   
message.channel.send(random)

    }

exports.conf = {
  aliases: ["wisti"]
};
exports.help = {
  name: "wasty"
};