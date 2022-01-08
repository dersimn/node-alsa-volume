const alsaVolume = require('./');

const card = 'default';
const mixer = 'Master';

const before = Date.now();

// -----------------------------------------------------------------------------
console.log('Testing getVolume/-Range');

console.log(alsaVolume.getVolume(card, mixer));

const range = alsaVolume.getVolumeRange(card, mixer);
console.log(range);

// -----------------------------------------------------------------------------
console.log('Testing setVolume');

alsaVolume.setVolume(card, mixer, range.min - 100);  // No Error currently
alsaVolume.setVolume(card, mixer, range.max + 100);  // No Error currently

alsaVolume.setVolume(card, mixer, range.min);
alsaVolume.setVolume(card, mixer, range.max);
alsaVolume.setVolume(card, mixer, range.min + (range.max - range.min)/2);

console.log(alsaVolume.getVolume(card, mixer));

// -----------------------------------------------------------------------------
console.log('Testing Mute');

console.log(alsaVolume.getMute(card, mixer));

alsaVolume.toggleMute(card, mixer);
console.log(alsaVolume.getMute(card, mixer));

alsaVolume.setMute(card, mixer, false);
console.log(alsaVolume.getMute(card, mixer), false);
alsaVolume.setMute(card, mixer, true);
console.log(alsaVolume.getMute(card, mixer), true);


// -----------------------------------------------------------------------------
const after = Date.now();

console.log('took', after-before, 'ms');
