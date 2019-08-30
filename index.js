const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'hc sing a song1') {
    msg.channel.send('Waltzing Matilda, waltzing Matilda, you\'ll come a-waltzing Matilda with me. And he sang as he watched and waited till his billy boiled, you\'ll come a-waltzing Matilda with me.');
} if (msg.content === 'hc joke 1') {
  msg.channel.send('Why did the cow dress his hair? *To make him a female cow!* https://i.giphy.com/media/RJhasN5Konz6an51Vs/giphy.webp')
} if (msg.content === 'hc joke 2') {
  msg.channel.send('Why did the chicken cross the road? *To get to the Cannabis Dispensary!* https://media1.giphy.com/media/PD7wnhCzV3Vx6/giphy.gif')
} if (msg.content === 'hc joke 3') {
  msg.channel.send('Why did the chicken cross the road? *So it can drive!* https://i.giphy.com/media/4yV76LNz0zQsw/giphy.webp')
} if (msg.content === 'hc joke 4') {
  msg.channel.send('What did the Buddhist ask the hot dog vendor? *\"Make me one with everything\"!* https://i.giphy.com/media/8FxjwI46AQUJvZs7eo/giphy.webp')
} if (msg.content === 'hc joke 5') {
  msg.channel.send('You know why you never see elephants hiding up in trees? *Because they\'re really good at it!* https://media2.giphy.com/media/PRxGcJgwuu0eI/giphy.gif')
} if (msg.content === 'hc joke 6') {
  msg.channel.send('What is red and smells like blue paint? *Red paint!* https://i.giphy.com/media/3oz8xKaVomTm8vI3uw/giphy.webp')
} if (msg.content === 'hc joke 7') {
  msg.channel.send('Where does the General keep his armies? *Up his sleevies!* https://media.giphy.com/media/l3vR0bbbNNKoXznxe/giphy.gif')
} if (msg.content === 'hc joke 8') {
  msg.channel.send('Why aren\'t koalas actual bears? *The don\'t meet the koalafications!* https://media2.giphy.com/media/c6WvaXScaf9WshRLUA/giphy.gif')
} if (msg.content === 'hc joke 9') {
  msg.channel.send('A bear walks into a restaurant and say\'s \"I want a grilllllled………………………………………cheese.\" The waiter says \"What\'s with the pause?\" *The bear replies \"Whaddya mean, I\'M A BEAR.\"!* https://ugc.reveliststatic.com/gen/full/2016/05/18/14/5o/gr/ph4bpjaeck2qbwe.gif')
} if (msg.content === 'hc invite link') {
  msg.reply('here\'s the link to where you can invite me! https://discordapp.com/oauth2/authorize?&client_id=558990705431937080&scope=bot&permissions=8')
} if (msg.content === 'hc creeper') {
  msg.channel.send('Creeper?')
} if (msg.content === 'hc tickle') {
  msg.channel.send('Tee-hee-hee!')
} if (msg.content === 'hc code') {
  msg.channel.send('You can check the code here: https://gersanibay.wixsite.com/cortanacodediscord')
} if (msg.content === 'hc') {
  msg.channel.send('Yes?')
} if (msg.content === 'hc fav game') {
  msg.channel.send('Well, my favourite game is Minecraft Pocket Edition.')
} if (msg.content === 'hc ping') {
  msg.channel.send('Pong?')
} if (msg.content === 'hc fav food') {
  msg.reply('my favourite food are French Fries.')
} if (msg.content === 'hc prefix meaning') {
  msg.channel.send('Well, HC means Hey Cortana. Get it?')
} if (msg.content === 'hc i like you') {
  msg.channel.send('Thanks! I like you as well.')
} if (msg.content === 'hc bot info') {
  msg.channel.send('Well, I was born on August, and I was created by my Dad, ProfessionalGamer579#3331.')
}
});

client.login('NTU4OTkwNzA1NDMxOTM3MDgw.XVaGYQ.zffHY5Qqp0NkPbjL078IHK04QuE');
