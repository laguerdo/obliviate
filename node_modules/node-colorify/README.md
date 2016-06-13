# node-colorify


[![NPM Version](http://img.shields.io/npm/v/node-colorify.svg?style=flat)](https://www.npmjs.org/package/node-colorify)
[![NPM Downloads](https://img.shields.io/npm/dm/node-colorify.svg?style=flat)](https://www.npmjs.org/package/node-colorify)

## (color & style texts in console)
### A node library for printing colored and styled texts in terminal. Uses ANSI color and style codes to format the color and style printed on console. node-colorify is easy to use and supports additional text formatting.
#
#
## Install
```sh
$ npm install node-colorify
```
Require as follows: 

```js
var color = require('node-colorify');
```

## Usage Example

```js
var color = require('node-colorify');

//colorIt - Synchronously
console.log(color.colorItSync('Hello World', {'fColor': 'green'}));
console.log(color.colorItSync('Hello World', {'bColor': 'green', 'fColor': 'red'}));

//colorIt - Asynchronously
color.colorIt('Hello World', {'fColor': 'green'}, function(coloredText) {
                console.log(coloredText);
            });
color.colorIt('Hello World', {'bColor': 'green', 'fColor': 'red'}, function(coloredText) {
    console.log(coloredText);
            });
            
//styleIt - Synchronously
console.log(color.styleItSync('hello', ['bold']));
console.log(color.styleItSync('hello', ['bold', 'blink', 'inverse']));

//styleIt - Asynchronously
color.styleIt('Hello World', ['bold'], function(coloredText) {
                console.log(coloredText);
            });
color.styleIt('Hello World', ['bold', 'blink', 'inverse'], function(coloredText) {
    console.log(coloredText);
            });
```
### Output

![alt text](https://raw.githubusercontent.com/raghu12133/images/master/colorify/sample-test.png "Colorify Sample")

## API Documentation

#### `colorIt(text, color, callback)` - Asynchronous
This function will return the ANSI formatted string of given color asynchronously.
##### color 
Color format can be specified as follows

`bColor` - Background Color

`fColor` - Foreground Color

###### Foreground alone:
```js
{ 'fColor': 'black'}
```
###### Background alone:
```js
{ 'bColor': 'red'}
```

###### Mixed format:
```js
{ 'fColor': 'black', 'bColor': 'red'}
```


Supported list of colors:

    1. BLACK (DEFAULT)
    2. RED
    3. GREEN
    4. YELLOW
    5. BLUE
    6. MAGENTA
    7. CYAN
    8. WHITE

#
#### `colorItSync(text, color)` - Synchronous
Same as that of colorit functionality, returns the ANSI formatted string of given color synchronously.
#
#### `styleIt(text, styles, callback)` - Asynchronous
This function will return the ANSI formatted string of given style asynchronously.
##### styles
Style can be specified as follows
###### Single style
```js
["bold"]
```
###### Multiple styles
```js
["bold", "blink", "inverse"]
```
Supported list of styles:

    1. BOLD
    2. LIGHT
    3. ULINE (UNDERLINE)
    4. BLINK
    5. INVERSE
    6. HIDE
#
### `styleItSync(text, styles)` - Synchronous
Same as that of styleIt functionality, returns the ANSI style formatted string of given style synchronously.
#
## Releases 
###### v1.0.0 - Initial Release. Function to print color text.
###### v1.0.1 - Bug Fixes
###### v2.0.0 - Added styling functionality and background color.
#
#
#
#### Thanks for checking out this library. Feel free to create issues regarding bugs or features and contribute to the project by forking `dev` branch and submitting a pull request.
### Contributors:
##### [raghu](http://twitter.com/raghu12133)
