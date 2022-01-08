#include "alsa-getvolume.h"
#include "alsa-setvolume.h"
#include "alsa-getmute.h"
#include "alsa-setmute.h"

NAN_MODULE_INIT(InitAll) {
  NAN_EXPORT(target, getVolume);
  NAN_EXPORT(target, getVolumeRange);
  NAN_EXPORT(target, setVolume);
  NAN_EXPORT(target, getMute);
  NAN_EXPORT(target, toggleMute);
  NAN_EXPORT(target, setMute);
}

NODE_MODULE(NativeExtension, InitAll)
