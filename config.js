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
            highWaterMark: 1 << 25
            }
        }
    },

    key: {
        rapidAPI: '',
        saucenaoAPI: '',
        deepaiAPIKey: '',
        imgbbAPIKey: '',
        chiyomeAPIKey: ''
    }
};
