
BBS_Game_Controller.onButtonPress(BBS_Game_Controller.ControllerButtonPins.Right, BBS_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showArrow(ArrowNames.East)
})
BBS_Game_Controller.onButtonPress(BBS_Game_Controller.ControllerButtonPins.Up, BBS_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showArrow(ArrowNames.North)
})
BBS_Game_Controller.onButtonPress(BBS_Game_Controller.ControllerButtonPins.Down, BBS_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showArrow(ArrowNames.South)
})
BBS_Game_Controller.onButtonPress(BBS_Game_Controller.ControllerButtonPins.Left, BBS_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showArrow(ArrowNames.West)
})
