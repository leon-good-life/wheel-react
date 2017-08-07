# Wheel React

[![npm version](https://badge.fury.io/js/wheel-react.svg)](http://badge.fury.io/js/wheel-react)

[![NPM](https://nodei.co/npm/wheel-react.png)](https://nodei.co/npm/wheel-react/)

Easy integration!!! Easily detect mouse wheel and trackpad movement direction, even when there is no scrolling overflow.

# Usage
1. Install the npm package:
```bash
    npm install --save wheel-react
```
2. Import it:
```javascript
    import WheelReact from 'wheel-react';
```
3. Config mouse-wheel/trackpad events ('left', 'right', 'up', 'down'), at least one of them, in your component constructor, or in render function:
```javascript
    WheelReact.config({
      left: () => {
        console.log('wheel left detected.');
      },
      right: () => {
        console.log('wheel right detected.');
      },
      up: () => {
        console.log('wheel up detected.');
      },
      down: () => {
        console.log('wheel down detected.');
      }
    });
```

4. Integrate with your React component:
```javascript
  <YourComponent {...WheelReact.events} />
```

5. Put the following line in componentWillUnmount function:
```javascript
   WheelReact.clearTimeout();
```