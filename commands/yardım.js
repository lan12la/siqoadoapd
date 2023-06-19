const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  const charonn = new Discord.MessageEmbed()

  .setTitle('Yardım Menüsü') //başlığınız.

  .setColor('GREEN') // Embed Rengi

  .addField('.unban','Kişinin Yasağını Kaldırırsınız') //Yardım Komutlarınız

  .setThumbnail(client.user.avatarURL())

  .addField('.ban','Kişiyi Sunucudan Yasaklarsınız')

  .addField('.cezapuanı','Kişinin Kaç Kez Ceza Aldığını Gösterir.')

  .addField('.kilit','Kanalı Kilitlersiniz')

  .addField('.mute','Kişiyi Mutelersiniz')

  .addField('.unmute','Kişinin Mutesini Kaldırırsınız')

  .addField('.sicil','Kişinin Sicilini Gösterir.') //Daha Fazla Komut Eklemek İçin .addField Satırlarını Çoğaltın

  .addField('warn','Kişiyi Uyarırsınız')
  
  .addField('.kick','Kişiyi Sunucudan Atarsınız')

  .addField('.jail','Kişiyi Jaillersiniz.')

  .addField('.unjail','Kişinin Jailini Açarsınız')

  .addField('.notlar','Kişinin Notlarını Görürsünüz.')

  .addField('.bilgi','Kişinin Bilgilerini Görürsünüz.')

  .addField('.sil','Belirtilen Mektar Kadar Mesaj Siler')

  .setFooter('Charonn % Atlantic Park ')


  message.channel.send(charonn)

 

};

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['help', 'YARDIM', 'HELP', 'HELPS'],

  permLevel: 0,

};

exports.help = {

  name: 'yardım',

  usage: "!yardım"

};