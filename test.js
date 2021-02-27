const nativeModule = require('./');

console.log(nativeModule.aNumber(42));

const before = Date.now();
console.log(nativeModule.getVolume('default', 'Line'));
console.log(nativeModule.getVolume('default', 'PCM'));
const after = Date.now();

console.log('took', after-before, 'ms');
