
## Usage

    npm i alsa-volume

Example:

```js
const alsaVolume = require('alsa-volume');

console.log('before', alsaVolume.getVolume('default', 'Line'));
                      alsaVolume.setVolume('default', 'Line', 42);
console.log('after',  alsaVolume.getVolume('default', 'Line'));

```

Use `alsamixer` to identify mixer names. Usually `Master`, `PCM`, etc.

## TODO

- Implement `snd_mixer_selem_get_playback_volume_range` instead of trying and hardcoding. See [1](https://stackoverflow.com/questions/56675099/how-to-change-volume-of-speaker-using-alsa-library), [2](https://www.alsa-project.org/alsa-doc/alsa-lib/group___simple_mixer.html#ga09557e90c11fbd37aeed30938338698b) 

## Credits

- https://github.com/mlaurijsse/alsa-monitor-node
- https://github.com/OpenDingux/alsa-volume
- https://github.com/fcanas/node-native-boilerplate
- [NodeJS Advanced — How to create a native add-on using C++](https://medium.com/the-guild/nodejs-advanced-how-to-create-a-native-add-on-using-c-588b4f2248cc), [GitHub Project](https://github.com/DAB0mB/node-distance-addon)