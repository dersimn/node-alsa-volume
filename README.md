
## Usage

    apt install build-essential git libasound2-dev

    yarn add https://github.com/elamperti/node-alsa-volume.git

Example:

```js
const alsaVolume = require('alsa-volume');

console.log('before', alsaVolume.getVolume('default', 'Master'));
                      alsaVolume.setVolume('default', 'Master', 42);
console.log('after',  alsaVolume.getVolume('default', 'Master'));

```

Use `alsamixer` to identify mixer names. Usually `Master`, `PCM`, etc.

## To-Do list

- Implement `snd_mixer_selem_get_playback_volume_range` instead of trial, error and hardcoding. See [1](https://stackoverflow.com/questions/56675099/how-to-change-volume-of-speaker-using-alsa-library), [2](https://www.alsa-project.org/alsa-doc/alsa-lib/group___simple_mixer.html#ga09557e90c11fbd37aeed30938338698b)

## Credits

- [alsa-monitor-node](https://github.com/mlaurijsse/alsa-monitor-node)
- [alsa-volume](https://github.com/OpenDingux/alsa-volume)
- [node-native-boilerplate](https://github.com/fcanas/node-native-boilerplate)
- [NodeJS Advanced — How to create a native add-on using C++](https://medium.com/the-guild/nodejs-advanced-how-to-create-a-native-add-on-using-c-588b4f2248cc), [GitHub Project](https://github.com/DAB0mB/node-distance-addon)