const { AttachmentBuilder, SlashCommandBuilder } = require( "discord.js" );
const { readFile } = require('fs/promises');
const { createCanvas, Image, GlobalFonts} = require('@napi-rs/canvas');
const { request } = require( "undici" );
const { join, resolve } = require( "path" );

GlobalFonts.registerFromPath(resolve('./fonts/roboto_5.0.8/ttf/roboto-latin-300-normal.ttf'), 'Roboto');
//Debug line for finding fonts
//console.log(GlobalFonts.families.find((font) => font.family === 'Roboto'));

const applyText = (canvas, text) => {
    const context = canvas.getContext('2d');
    let fontSize = 70;

    do {
        context.font = `${fontSize -= 10}px Roboto`;
    } while (context.measureText(text).width > canvas.width - 300);

    return context.font;
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName('profile')
        .setDescription('Give user profile.'),
    async execute(interaction) {
        const canvas = createCanvas(700, 250);
        const context = canvas.getContext('2d');

        const background = await readFile('./canvas.jpg');
        const backgroundImage = new Image();
        backgroundImage.src = background;
        context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        
        context.strokeStyle = '#0099ff';
        context.strokeRect(0, 0, canvas.width, canvas.height);
        
        context.font = '28px Roboto';
        context.fillStyle = '#ffffff';
        context.fillText('Profile', canvas.width / 2.5, canvas.height / 3.5);
        
        context.font = applyText(canvas, `${interaction.member.displayName}!`);
        context.fillStyle = '#ffffff';
        context.fillText(interaction.member.displayName, canvas.width / 2.5, canvas.height / 1.8);

        context.beginPath();
        context.arc(125, 125, 100, 0, Math.PI * 2, true);
        context.closePath();
        context.clip();

        const { body } = await request(interaction.user.displayAvatarURL({ format: 'jpg' }));
        const avatar = new Image;
        avatar.src = Buffer.from(await body.arrayBuffer());
        context.drawImage(avatar, 25, 25, 200, 200);

        const attachment = new AttachmentBuilder(canvas.toBuffer('image/png'), { name: 'profile-image.png' });

        interaction.reply({ files: [attachment] });
    },
};