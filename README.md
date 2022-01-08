
## Usage

    apt install build-essential git libasound2-dev
    
    npm i alsa-volume

Example:

```js
const alsaVolume = require('alsa-volume');

console.log('before', alsaVolume.getVolume('default', 'Line'));  // Some value
                      alsaVolume.setVolume('default', 'Line', 42);

console.log('after',  alsaVolume.getVolume('default', 'Line'));  // 42

// Get min/max values for setVolume
const range = alsaVolume.getVolumeRange('default', 'Line');
console.log(range.min);
console.log(range.max);

// Mute
alsaVolume.setMute('default', 'Line', false);
alsaVolume.toggleMute('default', 'Line');
console.log(alsaVolume.getMute('default', 'Line'));  // true
```

Use `alsamixer` to identify mixer names. Usually `Master`, `PCM`, etc.

## Usage Dev

    apt install build-essential git libasound2-dev
    git clone <this repo>
    cd <this repo>
    npm i
    npm run-script build

In a seperate window, run `alsamixer`, then:

    node test

## To-Do list

- Implement `snd_mixer_selem_get_playback_volume_range` instead of trial, error and hardcoding. See [1](https://stackoverflow.com/questions/56675099/how-to-change-volume-of-speaker-using-alsa-library), [2](https://www.alsa-project.org/alsa-doc/alsa-lib/group___simple_mixer.html#ga09557e90c11fbd37aeed30938338698b), [3](https://github.com/fcanas/node-native-boilerplate/blob/master/functions.cc).

## Credits

- [alsa-monitor-node](https://github.com/mlaurijsse/alsa-monitor-node)
- [alsa-volume](https://github.com/OpenDingux/alsa-volume)
- [node-native-boilerplate](https://github.com/fcanas/node-native-boilerplate)
- [NodeJS Advanced — How to create a native add-on using C++](https://medium.com/the-guild/nodejs-advanced-how-to-create-a-native-add-on-using-c-588b4f2248cc), [GitHub Project](https://github.com/DAB0mB/node-distance-addon)
- [elamperti](https://github.com/elamperti/node-alsa-volume) for implementing mute & volumeRange functions
