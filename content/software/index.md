# Software

## 📟 The core

The core of the project is written in C++ using the Linphone-SDK and the Paho-MQTT library. In order to run the core, checkout the GitHub repository <https://github.com/koifresh/dieklingel-core> for build instructions.

## 📺 The Kiosk

You can design the Kiosk of the doorbell, like you want it. The kiosk uses [QML](https://doc.qt.io/qt-5/qtqml-index.html), which is loaded after startup from the core. To change the design or behaviour of the kiosk, you can just adjust the qml code. To make it easier for you to interact with the running app or hardware like the Raspberry Pi gpio pins, we integrated some qml objects.

- [App QML Type](software/qml/qml-type-app)
- [Input QML Type](software/qml/qml-type-input)
- [Output QML Type](software/qml/qml-type-output)
