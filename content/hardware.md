# 🕹️ Hardware

There is no dedicated hardware to use with dieKlingel softeare. However we already build one or another doorbell, so there are some hardware components which we used for the builds. The reason why we decided to publish the list of hardware is not to restrict the harware, where the software is runnig on. We wanted to have a place to take a look when you have no idea which hardware to buy and use. But thats not the only reason (no 🧢), over the last few years we stumbled over the same hardware issues over and over again, which, as you can imagne, is not as funny as it sounds. Most of the time it is more a software/configuration issue than a actual hardware issue, so you'll find a list of components and some hints, how we configured the parts, and told them to behave like we wan't.

## 📟 The main controller

- [Rasberry Pi 4 - 2 GB](https://www.reichelt.de/DE/DE/raspberry-pi-4-b-4x-1-5-ghz-2-gb-ram-wlan-bt-rasp-pi-4-b-2gb-p259919.html?r=1&src=raspberrypi)

## The audio interface (speaker and microphone)

### 🔈 Speaker

- [WM8960 Audio HAT](https://www.reichelt.de/raspberry-pi-shield-hi-fi-stereo-sound-hat-wm8960-rpi-shd-stereo-p266063.html)
  - <https://www.waveshare.com/wiki/WM8960_Audio_HAT>

  In the meantime the driver is builtin into the Raspberry Pi firmware (see: [#4093](https://github.com/raspberrypi/linux/pull/4039)) but you have to enable it. To enable the driver you have to add the overlay to `/boot/config.txt`

  ```ini
  # Enable the wm8960-soundcard
  dtoverlay=wm8960-soundcard
  ```

  You should see the soundcard when running `aplay -l`:

  ```sh
  card 4: wm8960soundcard [wm8960-soundcard], device 0: bcm2835-i2s-wm8960-hifi wm8960-hifi-0 [bcm2835-i2s-wm8960-hifi wm8960-hifi-0]
    Subdevices: 1/1
    Subdevice #0: subdevice #0
  ```

  If the soundcard is not detected, after a reboot, try unplugging the Raspberry Pi from the powersupply and plug in again. When the soundcard is detected but you can't hear anything, you should check that the output isn't muted or the volume is at 0%. Run `alsamixe` and check the properties for:

  - `Speaker`: The master volume
  - `Playback`: The Volume of the Soundcard
  - `Left Output Mixer PCM`: To enable the left channel
  - `Right Output Mixer PCM`: To enable the right channel

- [External USB Mini Speaker](https://www.berrybase.de/externer-usb-mini-lautsprecher-schwarz)
  
  The USB speaker should work out of the box, however it has a continous quiet hissing, which is nearly impossible to hear, if your ear isn't directly in front of the speaker.

### 🎙️ Microphone

- [Mini USB Microphone (adafruit)](https://www.berrybase.de/adafruit-mini-usb-mikrofon)
- [Mini USB Microphone](https://www.berrybase.de/usb-mini-mikrofon)

## 🖥️ The display

- [7inch HDMI Touchscreen 1024x600](https://www.amazon.de/Touchscreen-kapazitiver-1024x600-Display-Raspberry/dp/B07YJDSCKR)
  - <http://www.lcdwiki.com/7inch_HDMI_Display-C>

  You do not have to install the driver as described on lcdwiki.com. The display should work out of the box. We just have to rotate it by 90 degrees to put it into portrait mode. To rotate the display you could use the graphical tool `ARandR` which is preinstalled on Raspberry Pi Desktop or you can modify the `$HOME/.config/wayfire.ini`

  ```ini
  [output:HDMI-A-1]
  mode = 1024x600@59821
  position = 0,0
  transform = 90

  [input-device:wch.cn USB2IIC_CTP_CONTROL]
  output = HDMI-A-1
  ```

You can get the name of the input device (touchscreen) by running `libinput list-devices`. However the output rotation is applied as soon as the file is saved, but you have to reboot, to also apply the touchscreen rotation. For more information about the `wayfire.ini` configuration refer to <https://github.com/WayfireWM/wayfire/wiki/Configuration>.

## 📡 The movement detection

- [Microwave Radarsensor](https://www.amazon.de/gp/product/B06XHDGXKL)

## 📷 The camera

- [Raspberry Pi Camera (OV5647, 160° Fisheye)](https://www.amazon.de/gp/product/B074W6TPHF)

  The camera is enabled by default, but since Raspberry Pi switched to libcamera instead of V4L2 it is no longer working with the [mediastreamer2](https://gitlab.linphone.org/BC/public/mediastreamer2) used by [liblinphone](https://gitlab.linphone.org/BC/public/liblinphone). To bring back the functionality as it was with V4L2 you should use the libcamera-v4l2 module when running the core, as it is used when running the core as service compiled with `RASPBERRYPI_LIBCAMERA_SUPPORT=ON`.

  ```sh
  sudo apt-get instal libcamera-v4l2
  LD_PRELOAD=/usr/lib/aarch64-linux-gnu/libcamera/v4l2-compat.so dieklingel-core
  ```

_PS: None of the links above are affilate links or in any relationship with us. We don't get a single cent, if you buy something from the parts above. We recommend to check out other sellers for cheaper prices or better delivery conditions._
