
//% weight=100 color=#00A654 icon="\uf11b" block="BBS Controller"
//% groups='["Inputs"]'
namespace BBS_Game_Controller {
	/**
	*Controller Standard Buttons
	*/
	export enum ControllerButtons {
	    Up,
	    Down,
	    Left,
	    Right,
	    Fire1,
	    Fire2
	}
	
      /*
      Direction enum - useful for sending messages
      */

    export enum Directions{
	//% block="Stop"
	Stop = 0,
	//% block="Forward"
	Forward = 1,
	//% block="Right"
        Right = 4,
	//% block="Backwards"
	Backwards = 3,
	//% block="Left"
	Left = 2,
	//% block="SpinLeft"
	SpinLeft = 5,
	//% block="SpinRight"
	SpinRight = 6
    }
	
  
    //% block
    //% group=Inputs
    export function stop(): number {
        return 0;
    }
	
    //% block
    //% group=Inputs
    export function forward(): number {
        return 1;
    }
	
    //% block
    //% group=Inputs
    export function back(): number {
        return 3;
    }
	
    //% block
    //% group=Inputs
    export function right(): number {
        return 4;
    }
	
    //% block
    //% group=Inputs
    export function left(): number {
        return 2;
    }
	
    //% block
    //% group=Inputs
    export function spinLeft(): number {
        return 5;
    }
	
    //% block
    //% group=Inputs
    export function spinRight(): number {
        return 6;
    }
	
    /**
    *Controller Button Pins
    */
    export enum ControllerButtonPins {
        //% block="Joypad Up"
        Up = DAL.MICROBIT_ID_IO_P16,
        //% block="Joypad Down"
        Down = DAL.MICROBIT_ID_IO_P13,
        //% block="Joypad Left"
        Left = DAL.MICROBIT_ID_IO_P8,
        //% block="Joypad Right"
        Right = DAL.MICROBIT_ID_IO_P12,
        //% block="BTN A"
        Fire1 = DAL.MICROBIT_ID_IO_P5,
        //% block="BTN B"
        Fire2 = DAL.MICROBIT_ID_IO_P11
    }

    /**
    *Controller Button Events
    */
    export enum ControllerButtonEvents {
        //% block="down"
        Down = DAL.MICROBIT_BUTTON_EVT_DOWN,
        //% block="up"
        Up = DAL.MICROBIT_BUTTON_EVT_UP,
        //% block="click"
        Click = DAL.MICROBIT_BUTTON_EVT_CLICK
    }

    /**
     *
     */
    //% shim=BBS_Game_Controller::init
    function init(): void {
        return;
    }


    /**
     * Determines if a Controller button is pressed
     * @param button press to be checked
     */
    //% group=Inputs
    //% blockId="bbs_controller_ispressed" block="button %button|is pressed"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% weight=95 blockGap=8
    export function buttonIsPressed(button: ControllerButtonPins): boolean {
        const pin = <DigitalPin><number>button;
        pins.setPull(pin, PinPullMode.PullUp);
        return pins.digitalReadPin(pin) == 0;
    }

    /**
     * Do something when one of the Controller Buttons is pressed
     * @param button press to be checked
     * @param event happening on the button, eg: click
     */
    //% group=Inputs
    //% blockId="bbs_controller_button_press_on_event" block="on button %button|press %event"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% weight=93 blockGap=8
    export function onButtonPress(button: ControllerButtonPins, event: ControllerButtonEvents, handler: Action) {
        init();
        control.onEvent(<number>button, <number>event, handler);
    }
	
    //% group=Inputs
    //% blockId="bbs_controller_button_press_off_event" block="on any button release"
    //% weight=93 blockGap=8
    export function onButtonRelease(handler: Action) {
        init();
        control.onEvent(ControllerButtonPins.Up, ControllerButtonEvents.Up, handler);
	control.onEvent(ControllerButtonPins.Down, ControllerButtonEvents.Up, handler);
	control.onEvent(ControllerButtonPins.Left, ControllerButtonEvents.Up, handler);
	control.onEvent(ControllerButtonPins.Right, ControllerButtonEvents.Up, handler);
	control.onEvent(ControllerButtonPins.Fire1, ControllerButtonEvents.Up, handler);
	control.onEvent(ControllerButtonPins.Fire2, ControllerButtonEvents.Up, handler);
    }
} 
