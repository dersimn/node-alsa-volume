#include "functions.h"

NAN_METHOD(aNumber) {
    double input = Nan::To<double>(info[0]).FromJust();
    info.GetReturnValue().Set(input * 2);
}

NAN_METHOD(stringInput) {
    v8::String::Utf8Value str(info[0]->ToString());
    info.GetReturnValue().Set(Nan::New("got a string").ToLocalChecked());
}
