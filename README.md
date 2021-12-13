
## Usage

    apt install build-essential git libasound2-dev
    
    npm i alsa-volume

Example:

```js
const alsaVolume = require('alsa-volume');

console.log('before', alsaVolume.getVolume('default', 'Line'));
                      alsaVolume.setVolume('default', 'Line', 42);
console.log('after',  alsaVolume.getVolume('default', 'Line'));

```

Use `alsamixer` to identify mixer names. Usually `Master`, `PCM`, etc.


## Credits

- [alsa-monitor-node](https://github.com/mlaurijsse/alsa-monitor-node)
- [alsa-volume](https://github.com/OpenDingux/alsa-volume)
- [node-native-boilerplate](https://github.com/fcanas/node-native-boilerplate)
- [NodeJS Advanced — How to create a native add-on using C++](https://medium.com/the-guild/nodejs-advanced-how-to-create-a-native-add-on-using-c-588b4f2248cc), [GitHub Project](https://github.com/DAB0mB/node-distance-addon)