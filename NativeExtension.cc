#include "functions.h"
#include "alsa-getvolume.h"

using v8::FunctionTemplate;

// NativeExtension.cc represents the top level of the module.
// C++ constructs that are exposed to javascript are exported here

NAN_MODULE_INIT(InitAll) {
  Nan::Set(
    target,
    Nan::New("aNumber").ToLocalChecked(),
    Nan::GetFunction(Nan::New<FunctionTemplate>(aNumber)).ToLocalChecked()
  );

  NAN_EXPORT(target, getVolume);
}

NODE_MODULE(NativeExtension, InitAll)
