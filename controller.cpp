#include "pxt.h"
using namespace pxt;


//% color=#00A654 weight=100
namespace BBS_Game_Controller {

    bool initialized = false;

    //%
    void init() {
        if (initialized) return;
        //This function sets all the buttons on the Controller to actually appear as buttons on the micro:bit
        #define ALLOC_PIN_BUTTON(id) new MicroBitButton(getPin(id)->name, id, MICROBIT_BUTTON_ALL_EVENTS, PullUp);
            ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P11) // BTN _ B
            ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P12) // BTN_RIGHT
            ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P13) // BTN_DOWN
            ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P16) // BTN_UP
            ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P8)  // BTN_LEFT
            ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P5)  // BTN_A
        #undef ALLOC_PIN_BUTTON

        initialized = true;
    }
}