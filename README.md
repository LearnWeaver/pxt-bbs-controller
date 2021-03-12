# pxt-BBS-game-controller

Custom blocks for BBS Controller for micro:bit. 
See website for example code.

![](https://raw.githubusercontent.com/LearnWeaver/pxt-bbs-controller/main/icon.png)

## Buttons
There are two different ways to trigger events when pressing the Controller buttons.

One uses blocks which return 'True' or 'False' values - these can be inserted in 'if else' statements as shown below:

```blocks
if (BBS.buttonIsPressed(BSS_Game_Controller.ControllerButtonPins.Up)) {
    <<Event 1>>
} else if (BBS.buttonIsPressed(BBS_Game_Controller.ControllerButtonPins.Down)) {
    <<Event 2>>
}
```

The other is a stand-alone block which triggers an event when the condition is met:

```blocks
BBS.onButtonPress(BBS.ControllerButtonPins.Left, BBS.ControllerButtonEvents.Down, function () {
    <<Event 3>>
})
```


## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

## License

MIT
