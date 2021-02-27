const alsaVolume = require('./');

const before = Date.now();
console.log(alsaVolume.getVolume('default', 'Line'));
console.log(alsaVolume.setVolume('default', 'Line', 42));
console.log(alsaVolume.getVolume('default', 'Line'));
const after = Date.now();

console.log('took', after-before, 'ms');
