# Need contributor!!!
## my schedule is kinda busy with studying for exam so i cannot make any updates for this past 3 month.

<div align="center"><img src="https://raw.githubusercontent.com/Eilaluth/Ayano/main/img/ayanoxkyoko.png" /></div>

# Sugiura Ayano

<img src="https://static.wikia.nocookie.net/yuruyuri/images/1/1d/AyanoSugiura-NYS3.png/revision/latest/scale-to-width-down/350?cb=20201118084523" width="160" align="right" />

Ayano is the current Student Council Vice President who is known to be secretly in love with [Kyōko Toshinō](https://yuruyuri.fandom.com/wiki/Ky%C5%8Dko_Toshin%C5%8D), whom she always refers to by her full name, usually in the form of an interjection.

Ayano has a tsundere type personality and this shows when she gets embarrassed around Kyōko. Although as of YuruYuri San☆Hai!, Ayano has started getting confident and more honest with her feelings.

# Server Status

Website Monitoring to check if BOT server is down or not<br/>
http://status.rei.my.id/

# 1.0.3 to do
- [ ] Change valorant agent module or maybe i will make api for this.
- [ ] Detail Help Menu
- [ ] Something error with saucenao
- [ ] Change covid19 api and add other countries
- [ ] Well ytdl error cannot be fixed cus it was from discord-player we need update soon

# Config
```javascript
module.exports = {
    app: {
        px: 'a!',
        token: '',
        color: '#c67d9a',
        playing: 'Ayano ❤️ Kyoko'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        MOD: {
            enabled: true,
            commands: ['mute', 'unmute', 'say']
        },
        ADMN: {
            enabled: true,
            commands: ['kick', 'ban', 'purge']
        },
        maxVol: 100,
        discordPlayer: {            
            ytdlOptions: {
            quality: 'highestaudio',
            highWaterMark: 1 << 25,
            filter: 'audioonly',
            requestOptions: {
            headers: {
            cookie: 'YOUTUBE_LOGIN_COOKIE'
             }
            }
          }
        }
    },

    key: {
        rapidAPI: '',
        saucenaoAPI: '',
        deepaiAPIKey: '',
        imgbbAPIKey: '',
        chiyomeAPIKey: '' // https://github.com/Eilaluth/ayano/issues/3
    }
};

```

# Commands

List of commands that Sugiura ayano have

## Information            

<table class="tg">
                <thead>
                    <tr>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Commands</b>
                        </th>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Description</b>
                        </th>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Usage</b>
                        </th>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Aliases</b>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="tg-0lax">covid</td>
                        <td class="tg-0lax">Display all covid-19 case in Indonesia</td>
                        <td class="tg-0lax">a!covid</td>
                        <td class="tg-0lax">c19, covid19</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">ping</td>
                        <td class="tg-0lax">Pong</td>
                        <td class="tg-0lax">a!ping</td>
                        <td class="tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">serveravtar</td>
                        <td class="tg-0lax">Shows the Avatar of a Server</td>
                        <td class="tg-0lax">a!serveravtar</td>
                        <td class="tg-0lax">savatar, serverlogo, serveravatar</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">serverinfo</td>
                        <td class="tg-0lax">Shows server information</td>
                        <td class="tg-0lax">a!serverinfo</td>
                        <td class="tg-0lax">sinfo</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">useravatar</td>
                        <td class="tg-0lax">Show user avatar</td>
                        <td class="tg-0lax">a!useravatar</td>
                        <td class="tg-0lax">avatar, logo</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">userinfo</td>
                        <td class="tg-0lax">Show user userinfo</td>
                        <td class="tg-0lax">a!userinfo</td>
                        <td class="tg-0lax">whois</td>
                    </tr>
                </tbody>
            </table>
            
## Moderation


<table class="tg">
                <thead>
                    <tr>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Commands</b>
                        </th>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Description</b>
                        </th>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Usage</b>
                        </th>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Aliases</b>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="tg-0lax">ban</td>
                        <td class="tg-0lax">ban someone who against rules</td>
                        <td class="tg-0lax">a!ban [tag]</td>
                        <td class="tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">kick</td>
                        <td class="tg-0lax">kick someone who against rules</td>
                        <td class="tg-0lax">a!kick [tag]</td>
                        <td class="tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">mute</td>
                        <td class="tg-0lax">mute someone who against rules</td>
                        <td class="tg-0lax">a!mute [tag][time]</td>
                        <td class="tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">purge</td>
                        <td class="tg-0lax">Purge up to 99 messages.</td>
                        <td class="tg-0lax">a!purge [1-99]</td>
                        <td class="tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">say</td>
                        <td class="tg-0lax">Let bot copy what you want to say</td>
                        <td class="tg-0lax">a!say [args]</td>
                        <td class="tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">unmute</td>
                        <td class="tg-0lax">unmute someone who was muted</td>
                        <td class="tg-0lax">a!unmute [tag]</td>
                        <td class="tg-0lax"></td>
                    </tr>
                </tbody>
 </table>

## Valorant


<table class="tg">
                <thead>
                    <tr>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Commands</b>
                        </th>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Description</b>
                        </th>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Usage</b>
                        </th>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Aliases</b>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="tg-0lax">valagent</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax">a!valagent [name]</td>
                        <td class="tg-0lax">agent</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">valdev</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax">a!valdev</td>
                        <td class="tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">valesport</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax">a!valesport</td>
                        <td class="tg-0lax">valoesport</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">valmap</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax">a!valmap [name]</td>
                        <td class="tg-0lax">map, mapvalo</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">valmmr</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax">a!valmmr [user][tag][reg]</td>
                        <td class="tg-0lax">mmr</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">valupdate</td>
                        <td class="tg-0lax"></td>
                        <td class="tg-0lax">a!valupdate</td>
                        <td class="tg-0lax">valopatches, valoupdate</td>
                    </tr>
                </tbody>
</table>


## Utility


<table class="tg">
                <thead>
                    <tr>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Commands</b>
                        </th>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Description</b>
                        </th>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Usage</b>
                        </th>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Aliases</b>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="tg-0lax">bypassads</td>
                        <td class="tg-0lax">Bypass shortlink/adlinks</td>
                        <td class="tg-0lax">a!bypassads [URL]</td>
                        <td class="tg-0lax">bypassvip, bypass</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">calculator</td>
                        <td class="tg-0lax">calculator in discord</td>
                        <td class="tg-0lax">a!calculator</td>
                        <td class="tg-0lax">kalkulator</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">colorize</td>
                        <td class="tg-0lax">Colorized black and white image.</td>
                        <td class="tg-0lax">a!colorize [attachment][url]</td>
                        <td class="tg-0lax">warnain, colorized</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">twitter</td>
                        <td class="tg-0lax">twitter video downloader</td>
                        <td class="tg-0lax">a!twitter [url]</td>
                        <td class="tg-0lax">twdl</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">mal</td>
                        <td class="tg-0lax">Display anime info from myanimelist</td>
                        <td class="tg-0lax">a!mal [name]</td>
                        <td class="tg-0lax">animesearch, myanimelist</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">nhentai</td>
                        <td class="tg-0lax">nhentai doujin zip download</td>
                        <td class="tg-0lax">a!nhentai [code][url]</td>
                        <td class="tg-0lax">nh</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">photo2x</td>
                        <td class="tg-0lax">Double size your photo without losing its content and defining characteristics!</td>
                        <td class="tg-0lax">a!photo2x [attachment][url]</td>
                        <td class="tg-0lax">p2x, photox</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">qrcode</td>
                        <td class="tg-0lax">qrcode code generator</td>
                        <td class="tg-0lax">a!qrcode [url]</td>
                        <td class="tg-0lax">qr</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">saucenao</td>
                        <td class="tg-0lax">Find spicy sauce from internet</td>
                        <td class="tg-0lax">a!saucenao [attachment][url]</td>
                        <td class="tg-0lax">sauce, wait</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">tiktok</td>
                        <td class="tg-0lax">download tiktok video</td>
                        <td class="tg-0lax">a!tiktok [url]</td>
                        <td class="tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">toonify</td>
                        <td class="tg-0lax">Convert your photo to cartoon like style!</td>
                        <td class="tg-0lax">a!toonify</td>
                        <td class="tg-0lax">cartoon, kartun</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">translate</td>
                        <td class="tg-0lax">translate language</td>
                        <td class="tg-0lax">a!translate [from][to][args]</td>
                        <td class="tg-0lax">gtl</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">waifu2x</td>
                        <td class="tg-0lax">Double size your waifu image without losing its content and defining characteristics!</td>
                        <td class="tg-0lax">a!waifu2x [attachment][url]</td>
                        <td class="tg-0lax">w2x</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">wheater</td>
                        <td class="tg-0lax">Show statistic weather for country or city search</td>
                        <td class="tg-0lax">a!wheater [C/F][Location]</td>
                        <td class="tg-0lax">cuaca</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">wikipedia</td>
                        <td class="tg-0lax">Search wikipedia page</td>
                        <td class="tg-0lax">a!wikipedia [args]</td>
                        <td class="tg-0lax">wiki</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">ytmp3</td>
                        <td class="tg-0lax">download mp3 from youtube</td>
                        <td class="tg-0lax">a!ytmp3 [url]</td>
                        <td class="tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">ytmp4</td>
                        <td class="tg-0lax">download mp4 from youtube</td>
                        <td class="tg-0lax">a!ytmp4 [url]</td>
                        <td class="tg-0lax"></td>
                    </tr>
                </tbody>
</table>


## Funny


<table class="tg">
                <thead>
                    <tr>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Commands</b>
                        </th>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Description</b>
                        </th>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Usage</b>
                        </th>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Aliases</b>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="tg-0lax">connect4</td>
                        <td class="tg-0lax">Play connect4 game on discord</td>
                        <td class="tg-0lax">a!connect4 [tag]</td>
                        <td class="tg-0lax">connect</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">fightgame</td>
                        <td class="tg-0lax">Play fight ame on discord</td>
                        <td class="tg-0lax">a!fightgame [tag]</td>
                        <td class="tg-0lax">fight, gelud</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">fishing</td>
                        <td class="tg-0lax">Play fishing game on discord</td>
                        <td class="tg-0lax">a!fishing</td>
                        <td class="tg-0lax">mancing</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">flipcoin</td>
                        <td class="tg-0lax">Flipcoin game on discord</td>
                        <td class="tg-0lax">a!flipcoin</td>
                        <td class="tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">geekjokes</td>
                        <td class="tg-0lax">Random geek jokes</td>
                        <td class="tg-0lax">a!geekjokes</td>
                        <td class="tg-0lax">geek</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">hug</td>
                        <td class="tg-0lax">hug someone in server</td>
                        <td class="tg-0lax">a!hug [tag]</td>
                        <td class="tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">kiss</td>
                        <td class="tg-0lax">kiss someone in server</td>
                        <td class="tg-0lax">a!kiss [tag]</td>
                        <td class="tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">meme</td>
                        <td class="tg-0lax">Repost random meme from reddit</td>
                        <td class="tg-0lax">a!meme</td>
                        <td class="tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">pokemon</td>
                        <td class="tg-0lax">Play guess the pokemon game on discord</td>
                        <td class="tg-0lax">a!pokemon</td>
                        <td class="tg-0lax">pika</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">roasting</td>
                        <td class="tg-0lax">Let bot roasting in server</td>
                        <td class="tg-0lax">a!roasting [tag]</td>
                        <td class="tg-0lax">insult, roast</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">rps</td>
                        <td class="tg-0lax">Play rock paper scrissor game on discord</td>
                        <td class="tg-0lax">a!rps [tag]</td>
                        <td class="tg-0lax">bantuguntingkertas, rockpaperscrissor, janken</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">ship</td>
                        <td class="tg-0lax">Let bot judge how sweet your ship</td>
                        <td class="tg-0lax">a!ship [tag1][tag2]</td>
                        <td class="tg-0lax">jodoh</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">guessname</td>
                        <td class="tg-0lax">Play ShuffleGuess game on discord</td>
                        <td class="tg-0lax">a!guessname</td>
                        <td class="tg-0lax">shuffleguess, shufflegame</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">slap</td>
                        <td class="tg-0lax">slap someone in server</td>
                        <td class="tg-0lax">a!slap [tag]</td>
                        <td class="tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">slot</td>
                        <td class="tg-0lax">Play slot game on discord</td>
                        <td class="tg-0lax">a!slot</td>
                        <td class="tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">snake</td>
                        <td class="tg-0lax">Play snake game on discord</td>
                        <td class="tg-0lax">a!snake</td>
                        <td class="tg-0lax">snakegame</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">tictactoe</td>
                        <td class="tg-0lax">Play tic tac toe game on discord</td>
                        <td class="tg-0lax">a!tictactoe [tag]</td>
                        <td class="tg-0lax">ttt</td>
                    </tr>
                </tbody>
</table>


## Music


<table class="tg">
                <thead>
                    <tr>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Commands</b>
                        </th>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Description</b>
                        </th>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Usage</b>
                        </th>
                        <th style="text-align: center !important" class="tg-0lax">
                            <b>Aliases</b>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="tg-0lax">back</td>
                        <td class="tg-0lax">back to previous song</td>
                        <td class="tg-0lax">a!back</td>
                        <td class="tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">clear</td>
                        <td class="tg-0lax">clear queue</td>
                        <td class="tg-0lax">a!clear</td>
                        <td class="tg-0lax">cq</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">filter</td>
                        <td class="tg-0lax">add filter to music</td>
                        <td class="tg-0lax">a!filter [<a href="https://discord-player.js.org/docs/main/master/typedef/AudioFilters" target="_blank">name</a>]</td>
                        <td class="tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">loop</td>
                        <td class="tg-0lax">loop queue</td>
                        <td class="tg-0lax">a!loop [queue]</td>
                        <td class="tg-0lax">l</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">nowplaying</td>
                        <td class="tg-0lax">display playing music name</td>
                        <td class="tg-0lax">a!nowplaying</td>
                        <td class="tg-0lax">np</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">pause</td>
                        <td class="tg-0lax">pause music</td>
                        <td class="tg-0lax">a!pause</td>
                        <td class="tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">play</td>
                        <td class="tg-0lax">play music</td>
                        <td class="tg-0lax">a!play [name/URL]</td>
                        <td class="tg-0lax">p</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">progress</td>
                        <td class="tg-0lax">display progress bar</td>
                        <td class="tg-0lax">a!progress</td>
                        <td class="tg-0lax">pbar</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">queue</td>
                        <td class="tg-0lax">display queue</td>
                        <td class="tg-0lax">a!queue</td>
                        <td class="tg-0lax">q</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">resume</td>
                        <td class="tg-0lax">resume paused music</td>
                        <td class="tg-0lax">a!resume</td>
                        <td class="tg-0lax">rs</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">save</td>
                        <td class="tg-0lax">save music name to dm</td>
                        <td class="tg-0lax">a!save</td>
                        <td class="tg-0lax">sv</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">search</td>
                        <td class="tg-0lax">search music name</td>
                        <td class="tg-0lax">a!search [args]</td>
                        <td class="tg-0lax">sc</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">seek</td>
                        <td class="tg-0lax">seek time</td>
                        <td class="tg-0lax">a!seek [time]</td>
                        <td class="tg-0lax"></td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">shuffle</td>
                        <td class="tg-0lax">shuffle music</td>
                        <td class="tg-0lax">a!shuffle</td>
                        <td class="tg-0lax">sh</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">skip</td>
                        <td class="tg-0lax">skip music</td>
                        <td class="tg-0lax">a!skip</td>
                        <td class="tg-0lax">sk</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">stop</td>
                        <td class="tg-0lax">stop music</td>
                        <td class="tg-0lax">a!stop</td>
                        <td class="tg-0lax">dc</td>
                    </tr>
                    <tr>
                        <td class="tg-0lax">volume</td>
                        <td class="tg-0lax">increase or decrease volume</td>
                        <td class="tg-0lax">a!volume 1-100</td>
                        <td class="tg-0lax">vol</td>
                    </tr>
                </tbody>
</table>


# Credit
- [ZerioDev](https://github.com/ZerioDev/Music-bot)
- [Reynadi531](https://github.com/Reynadi531/api-covid19-indonesia-v2)
- [bypass.vip](https://github.com/bypass-vip/bypass.vip)
- [goqr.me](https://goqr.me/api/)
- [Henrik-3](https://github.com/Henrik-3/unofficial-valorant-api)
- [llsc12](https://github.com/llsc12/download-api)
- [OblivionGhoul](https://github.com/OblivionGhoul/KannaKamuiBot/tree/discord.js-v13/commands/commands/valorant)
- [moedevel](https://github.com/moedevel/mangadl)

# Modules
- [discord.js](https://www.npmjs.com/package/discord.js)
- [discord-player](https://www.npmjs.com/package/discord-player)
- [ffmpeg-static](https://www.npmjs.com/package/ffmpeg-static)
- [ms](https://www.npmjs.com/package/ms)
- [opusscript](https://www.npmjs.com/package/opusscript)
- [weky](https://www.npmjs.com/package/weky)
- [axios](https://www.npmjs.com/package/axios)
- [is-valid-http-url](https://www.npmjs.com/package/is-valid-http-url)
- [discord-gamecord](https://www.npmjs.com/package/discord-gamecord)
- [get-youtube-id](https://www.npmjs.com/package/get-youtube-id)
- [twitter-url-direct](https://www.npmjs.com/package/twitter-url-direct)
- [simple-nhentai](https://www.npmjs.com/package/simple-nhentai)
- [valorant-fetch](https://www.npmjs.com/package/valorant-fetch)
- [moment](https://www.npmjs.com/package/moment)
- [mal-scraper](https://www.npmjs.com/package/mal-scraper)
- [weather-js](https://www.npmjs.com/package/weather-js)
- [is-image-url](https://www.npmjs.com/package/is-image-url)
- [deepai](https://www.npmjs.com/package/deepai)
- [tiktok-scraper](https://www.npmjs.com/package/tiktok-scraper)
- [sagiri](https://www.npmjs.com/package/sagiri)
