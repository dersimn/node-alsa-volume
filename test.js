const nativeModule = require('./');

console.log(nativeModule.aNumber(42));
console.log(nativeModule.getVolume("default", "Line"));
console.log(nativeModule.getVolume("default", "PCM"));
