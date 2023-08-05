# EasyRoundSlider.js
EasyRoundSlider.js is a javascript library for creating customizable round sliders. 

![demo1](https://github.com/daifukufuku/EasyRoundSlider/assets/17878471/536cfd4b-afcd-47b0-9621-16f1164b64cf)

![demo2](https://github.com/daifukufuku/EasyRoundSlider/assets/17878471/a00c48fb-e2c2-4fa3-8636-4d2e68e09fa6)

![demo3](https://github.com/daifukufuku/EasyRoundSlider/assets/17878471/188fa4d7-1992-4154-b24a-bfd621ad01f7)

## Features

- Easy to use. You just set the dom id and parameters.
- You can manage multiple sliders separately.
- You can also stack multiple sliders as parent and child components.
- You can update the display of the slider from script.

## Getting Started

Include EasyRoundSlider.js and its dependencies in your project:

```html
<script src="jquery-3.6.0.min.js"></script>
<script src='round-slider.min.js'></script>


<div id="your-div-id"></div>
```

```js
InitializeRoundSlider({
    "id": "your-div-id",
    "radius": 100,
    "borderWidth": 1,
    "borderColor": "#000000",
    "handleSize": 30,
    "handleColor": "#337ab7"
});
```

## InitializeRoundSlider Options

You can customize your slider using the following options:

| Option       | Description                                         | Type   | Default  |
| ------------ | --------------------------------------------------- | ------ | -------- |
| id           | The id of the HTML element that the slider will be applied to. | string | ""       |
| radius       | The radius of the slider.                           | number | 0        |
| borderWidth  | The width of the slider's border.                   | number | 0        |
| borderColor  | The color of the slider's border.                   | string | "#000000" |
| handleSize   | The size of the slider's handle.                    | number | 0        |
| handleColor  | The color of the slider's handle.                   | string | "#000000" |


## Updating RoundSlider Value

Along with the initialization of RoundSlider, you can dynamically update the value of a slider using the `updateRoundSliderValue` function. This function takes two parameters: the `id` of the RoundSlider you wish to update, and the `value` that you wish to set.

```javascript
updateRoundSliderValue("#your-div-id", 0.25);
```
