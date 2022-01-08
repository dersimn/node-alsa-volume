#ifndef ALSA_MUTE_H
#define ALSA_MUTE_H

#include <nan.h>
#include <alsa/asoundlib.h>

NAN_METHOD(setMute);
NAN_METHOD(toggleMute);

#endif
