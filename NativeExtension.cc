#include "alsa-getvolume.h"
#include "alsa-setvolume.h"

NAN_MODULE_INIT(InitAll) {
  NAN_EXPORT(target, getVolume);
  NAN_EXPORT(target, setVolume);
}

NODE_MODULE(NativeExtension, InitAll)
