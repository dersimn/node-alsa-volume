const alsaVolume = require('./');

const before = Date.now();

console.log(alsaVolume.getVolume('default', 'Line'));
const range = alsaVolume.getVolumeRange('default', 'Line');
console.log(range);

console.log(alsaVolume.setVolume('default', 'Line', range.min - 100));  // No Error currently
console.log(alsaVolume.setVolume('default', 'Line', range.max + 100));  // No Error currently

console.log(alsaVolume.setVolume('default', 'Line', range.min));
console.log(alsaVolume.setVolume('default', 'Line', range.max));
console.log(alsaVolume.setVolume('default', 'Line', range.min + (range.max - range.min)/2));

console.log(alsaVolume.getVolume('default', 'Line'));

const after = Date.now();

console.log('took', after-before, 'ms');
