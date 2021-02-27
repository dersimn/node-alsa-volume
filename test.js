const nativeModule = require('./');

const before = Date.now();
console.log(nativeModule.getVolume('default', 'Line'));
console.log(nativeModule.setVolume('default', 'Line', 42));
console.log(nativeModule.getVolume('default', 'Line'));
const after = Date.now();

console.log('took', after-before, 'ms');
