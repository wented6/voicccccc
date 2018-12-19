const D1 = require('discord.js');
const D2 = require('discord.js');
const D3 = require('discord.js');
const D4 = require('discord.js');
const D5 = require('discord.js');
const D6 = require('discord.js');
const D7 = require('discord.js');


const p1 = new D1.Client();
const p2 = new D2.Client();
const p3 = new D3.Client();
const p4 = new D4.Client();
const p5 = new D5.Client();
const p6 = new D6.Client();
const p7 = new D7.Client();



    console.log("oNNN1");
p1.on('guildMemberAdd', member => {
  let g = client.guilds.get("504685916023947264");
  let c = g.channels.get("508293409157677056");
  if(c.type === 'voice') {
  c.join();
  setInterval(() => {
  if(!g.me.voiceChannel) c.join();
  }, 1);
  } else {
  console.log("Failed To Join:\n The Channel Type isn't \"text\"");
  }
  });



    console.log("oNNN2");
p2.on('guildMemberAdd', member => {
  let g = client.guilds.get("504685916023947264");
  let c = g.channels.get("508293440258179074");
  if(c.type === 'voice') {
  c.join();
  setInterval(() => {
  if(!g.me.voiceChannel) c.join();
  }, 1);
  } else {
  console.log("Failed To Join:\n The Channel Type isn't \"text\"");
  }
  });



      console.log("oNNN3");
p3.on('guildMemberAdd', member => {
  let g = client.guilds.get("504685916023947264");
  let c = g.channels.get("508293454279999513");
  if(c.type === 'voice') {
  c.join();
  setInterval(() => {
  if(!g.me.voiceChannel) c.join();
  }, 1);
  } else {
  console.log("Failed To Join:\n The Channel Type isn't \"text\"");
  }
  });


  console.log("oNNN4");
  p4.on('guildMemberAdd', member => {
    let g = client.guilds.get("504685916023947264");
    let c = g.channels.get("508293425460936709");
    if(c.type === 'voice') {
    c.join();
    setInterval(() => {
    if(!g.me.voiceChannel) c.join();
    }, 1);
    } else {
    console.log("Failed To Join:\n The Channel Type isn't \"text\"");
    }
    });





 console.log("oNNN5");
  p5.on('guildMemberAdd', member => {
    let g = client.guilds.get("504685916023947264");
    let c = g.channels.get("508299151394734100");
    if(c.type === 'voice') {
    c.join();
    setInterval(() => {
    if(!g.me.voiceChannel) c.join();
    }, 1);
    } else {
    console.log("Failed To Join:\n The Channel Type isn't \"text\"");
    }
    });














    console.log("oNNN6");
    p6.on('guildMemberAdd', member => {
      let g = client.guilds.get("504685916023947264");
      let c = g.channels.get("522515374802075649");
      if(c.type === 'voice') {
      c.join();
      setInterval(() => {
      if(!g.me.voiceChannel) c.join();
      }, 1);
      } else {
      console.log("Failed To Join:\n The Channel Type isn't \"text\"");
      }
      });















      console.log("oNNN7");
      p7.on('guildMemberAdd', member => {
        let g = client.guilds.get("504685916023947264");
        let c = g.channels.get("522518058187620364");
        if(c.type === 'voice') {
        c.join();
        setInterval(() => {
        if(!g.me.voiceChannel) c.join();
        }, 1);
        } else {
        console.log("Failed To Join:\n The Channel Type isn't \"text\"");
        }
        });


    










p1.login(process.env.W1);
p2.login(process.env.W2);
p3.login(process.env.W3);
p4.login(process.env.W4);
p5.login(process.env.W5);
p6.login(process.env.W6);
p7.login(process.env.W7);
