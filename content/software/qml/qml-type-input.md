# Input QML Type

Read the state of an Raspberry Pi gpio pin.

|                   |                                                |
|-------------------|------------------------------------------------|
| Import Statement: | import com.dieklingel.gpio 1.0                 |
| Inherits          | [QObject](https://doc.qt.io/qt-5/qobject.html) |

## Properties

`pin: int`

`value: bool`

## Signals

`pinChanged()`

`valueChanged()`

## Example Usage

```javascript
import com.dieklingel.gpio 1.0

Input {
    pin: 17

    onValueChanged: {
    }
}
```

## Property Documentation

### `pin: int`

The BCM pin of the Raspberry Pi to use as input.

### `value: bool` [READ-ONLY]

The value which the has at the moment, true is equals to HIGH or 5V and false is equals to LOW or 0V.
