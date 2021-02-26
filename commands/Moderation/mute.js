const  path = require('path');
const CommandFile = path.basename(__filename);
const Clenght = CommandFile.length

module.exports = {
	name: 'mute',
    description: 'Mentione someone to mute/unmute them',
    aliases: ['stab', 'shot', 'kill', 'bonk'],
    execute(message)
    {
      let Cyan = message.member.guild.me //returns bot client
      let Executor = message.guild.member(message.author); //returns author
      let Offender = message.guild.member(message.mentions.users.first()); //returns mentioned user
      let MutedRole = message.guild.roles.cache.find(MutedRole => MutedRole.name === "Muted");
      
      //permission checks
      if (!message.mentions.users.size) return message.channel.send(`You need to mention someone!`); //check if message ha mentions

      if (!Offender) return message.channel.send(`I cannot find anyone by that name.`); //check mentions

      if (Offender.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`You can't mute that user!`); //check if offender has permisions bypasing mute (because it would be pointless muting them)

      if (!Cyan.hasPermission('ADMINISTRATOR')) return CyanNoPermsHandler(); //message.channel.send(`Looks like i'm missing permissions! I need *Administrator*`);

      if (!Executor.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`You don't have required permissions!`);

      if (Cyan.hasPermission('ADMINISTRATOR')) {
        if (!MutedRole) {
          try {
            
            CyanNoMutedRoleHandler();

          } catch (error) {

            message.channel.send(`Something went really wrong while trying to create role`);
            console.log(error);
          }
        } else {

          CyanMuteHandler();

        }
      }


      function CyanNoPermsHandler(){
        message.channel.send('yy i dont have perms lol get gut scrub'); //goal; send message to guild owner, and channel asking for permisisons
      }


      function CyanMuteHandler() {
        if (Offender.roles.cache.some(role => role.name === 'Muted')) return Offender.roles.remove(MutedRole.id).then(() => message.channel.send(`${Offender} is no longer muted in this server.`));
        if (!Offender.roles.cache.some(role => role.name === 'Muted')) {

          (Offender.roles.add(MutedRole.id)).then (() => message.channel.send(`${Offender} is now muted!`));
        }
      }

      function CyanNoMutedRoleHandler() {
        try{

          MutedRole = message.guild.roles.create({ data: { name: 'Muted', color: '#505050' } });
          message.reply(`I have made @Muted.\n-this is placeholder text-`)

      } catch (error) {

          message.channel.send(`Something went wrong while creating role!`)
          console.log(error);

      }

      }

    }
};



/*
message.channel.send("this command is broken for now, pending rewrite");
      let MutedRole = message.guild.roles.cache.find(MutedRole => MutedRole.name === "Muted");
      let OffenderFinal = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
      ------


        if (!OffenderFinal.hasPermission('ADMINISTRATOR') || !OffenderFinal.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`You don't have permissions to perform this action.`);

        if (message.member.guild.me.hasPermission('ADMINISTRATOR') || message.member.guild.me.hasPermmission('MANAGE_MESSAGES')) {

          try {
            if (!OffenderFinal) return message.channel.send(`I cannot find anyone by that name.`);

            if (OffenderFinal.roles.cache.some(role => role.name === 'Muted')) return OffenderFinal.roles.remove(MutedRole.id).then(() => message.channel.send(`${OffenderFinal} is no longer muted in this server.`));

            if (OffenderFinal.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`I cannot mute that user because they have **manage messages** permission node!`);

            (OffenderFinal.roles.add(MutedRole.id));
            message.channel.send(`${OffenderFinal} is now muted in this server.`);
            if (!MutedRole) {
              MissingMutedRoleHandler();
            }
          } catch (error) {
            console.log(error);
            message.channel.send(`Something went really wrong here`);
          }
      }
        function MissingMutedRoleHandler() {
            try{
                MutedRole = message.guild.roles.create({ data: { name: 'Muted', color: '#505050' } });
                message.reply(`I have made @Muted, for it to work properly you need to set it's *SEND_MESSAGES* and *ADD_REACTIONS* to false.\n then you should add that role to channels where you dont want muted user to speak`)

            } catch (error) {
                message.channel.send(`Something went wrong while creating role!`)
                console.log(error);
            }
        }

//!tempmute @user 1s/m/h/d
  let tomute = message.guild.member(message.mentions.users.first() ||
message.guild.members.get(args[0]));   if(!tomute) return
message.reply("Couldn't find user.");  
if(tomute.hasPermission("MANAGE_MESSAGES")) return
message.reply("Can't mute them!");
let muterole = message.guild.roles.find(muterole => muterole.name === "muted"); 
//start of create role   if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }   }   //end of create role
let mutetime = args[1];   if(!mutetime) return message.reply("You didn't specify a time!");
  await(tomute.addRole(muterole.id));   message.reply(`<@${tomute.id}>
has been muted for ${message(message(mutetime))}`);
  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);   }, message (mutetime));
//end of module }
module.exports.help = {   name: "tempmute" }
*/