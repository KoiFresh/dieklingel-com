# App QML Type

A singleton object to interact with the application.

|                   |                                                |
|-------------------|------------------------------------------------|
| Import Statement: | import com.dieklingel 1.0                      |
| Inherits          | [QObject](https://doc.qt.io/qt-5/qobject.html) |

## Signals

`onInactivity()`

`onMessageReceived(topic, message)`

## Methods

`ring(number)`

`publish(topic, message)`

`string env(name)`

## Example Usage

```javascript
import com.dieklingel 1.0

Connections {
    target: App

    function onInactivity() {
    }
}
```

## Signal Documentation

### `onInactivity()`

The `inactivity` signal is emitted, when there was no interaction with the kiosk for at least 30seconds.

### `onMessageReceived(topic, message)`

The `onMessageReceived` signal is emitted, when there is an mqtt message received on a topic the core has subscibed to throgh the `core.mqtt/subscriptions` properties in the `core.ini`.

## Method Documentation

### `ring(number)`

Starts an outgoing sip call to the given number. The number should be in the format of `sip:<user>@<provider>`, e.g. `sip:601@fritz.box`.

### `publish(topic, message)`

Publishes a message on an mqtt topic, if the connection to the broker was succesfull.

### `string env(name)`

Reads an environment variable and return it's value as string.
