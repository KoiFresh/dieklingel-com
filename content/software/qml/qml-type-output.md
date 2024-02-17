# Output QML Type

Set the level of an Raspberry Pi gpio pin.

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

Output {
    pin: 17
    value: true
}
```

## Property Documentation

### `pin: int`

The BCM pin of the Raspberry Pi to use as output.

### `value: bool`

The value which the Raspberry Pi pin should have.
