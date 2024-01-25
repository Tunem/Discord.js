const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const file = new AttachmentBuilder('./canvas.jpg');

const constructorEmbed = new EmbedBuilder()
    .setColor(0x0099ff)
    .setTitle('Constructor embed')
    .setURL('https://discord.js.org/')
    .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org'})
    .setDescription('Some description here')
    .setThumbnail('https://i.imgur.com/AfFp7pu.png')
    .addFields(
        { name: 'Regurlar field title', value: 'Some value here'},
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true},
        { name: 'Inline field title', value: 'Some value here', inline: true},
    )
    .addFields({ name: 'Inline field title', value: 'Some value here', inline: true})
    .setImage('https://i.imgur.com/AfFp7pu.png')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
//channel.send({ embeds: [constructorEmbed] });

const botEmbed = new EmbedBuilder().setTitle('Bot embed');
if ( message.author.bot) {
    botEmbed.setColor(0x7289DA);
}
//channel.send({ embeds: [botEmbed] });

//const file = new AttachmentBuilder('./canvas.jpg');
const builderEmbed = new EmbedBuilder()
    .setTitle('Some title')
    .setImage('attachment://canvas.jpg');
//channel.send({ embeds: [builderEmbed], files: [file] });

const objectEmbed = {
    color: 0x0099ff,
    title: 'Object type embed',
    url: 'https://discord.js.org',
    author: {
        name: 'Some name',
        icon_url: 'https://i.imgur.com/AfFp7pu.png',
        url: 'https://discord.js.org',
    },
    description: 'This is made with objects',
    thumbnail: {
        url: 'https://i.imgur.com/AfFp7pu.png'
    },
    fields: [
        {
            name: 'Regular field title',
            value: 'Some value here',
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Inline field title',
			value: 'Some value here',
			inline: true,
        },
        {
            name: 'Inline field title',
			value: 'Some value here',
			inline: true,
        },
        {
            name: 'Inline field title',
			value: 'Some value here',
			inline: true,
        },
    ],
    image: {
        url: 'https://i.imgur.com/AfFp7pu.png',
    },
    timestamp: new Date().toISOString(),
    footer: {
        text: 'Some footer text here',
        icon_url: 'https://i.imgur.com/AfFp7pu.png',
    },
};
//channel.send({ embeds: [objectEmbed] });

const botEmbedObj = { title: 'Bot object embed' };
if (message.author.bot) {
    botEmbedObj.color = 0x7289da;
}
//channel.send({ embeds: [botEmbedObj] });

//const file = new AttachmentBuilder('./canvas.jpg');
const attachEmbedObj = {
    title: 'Some title',
    image: {
        url: 'attachment://canvas.jpg',
    },
};
//channel.send({ embeds: [attachEmbedObj], files: [files] });