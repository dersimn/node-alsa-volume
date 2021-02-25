#include "functions.h"

NAN_METHOD(aNumber) {
    double input = Nan::To<double>(info[0]).FromJust();
    info.GetReturnValue().Set(input * 2);
}
