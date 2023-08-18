---
Language: German
Date: 2023-08-18
Tags: 
  - fhem
  - raspberrypi
---

# FHEM als Türöffner

Der Core der Klingel bietet im wesentlichen eine Schnittstelle via MQTT an, über diese verschiedene Events abgerufen oder ausgelöst werden können. Eine integration für weitere Schnittstellen gibt es nicht (bis auf einen mqtt-http-proxy). Das stellt uns jedoch kaum vor ein Problem, da es genügend Systeme mit MQTT integration gibt, die problemlos weitere Aufgaben für uns übernehmen können. So werden wir im folgenden FHEM so konfigurieren, dass ein Pin des Raspberry Pi's beim eingeben von `123456789` als Passcode auf der Kiosk Anwendung des dieKlingel Software Packetes für drei Sekunden auf HIGH und danach wieder auf LOW geschaltet wird.

Zu allererst werden wir in FHEM ein neues Gerät anlegen, welches den GPIO Pin 17 ([Pin 11](https://pinout.xyz/pinout/pin11_gpio17/)) am Rasperry Pi für drei Sekunden auf HIGH und danach wieder auf LOW schaltet.

```bash
sudo addgroup fhem gpio
```

In der Fhem Befehlszeile:

```fhem
define frontdoor RPI_GPIO 17
attr frontdoor direction output
```

So da wir nun den Pin als Gerät angelegt habe, können wir den Pin für drei Sekunden auf HIGH schalten

```fhem
set frontdoor on-for-timer 3
```

Jetzt legen wir uns in der Konfiguration des Cores noch eine Lane an, welche per [HTTP den FHEM befehl](https://wiki.fhem.de/wiki/CsrfToken-HowTo) ausführt und den Passcode überprüft. Um den FHEM Befehl auszuführen nehmen wir uns ein kurzes Python Script zu Hilfe

```python
import os, json, requests, sys

url = sys.argv[1]

response = requests.request("GET", url)
token = response.headers["X-FHEM-csrfToken"]
requests.request("GET", url + "&XHR=1&fwcsrf=" + token)
```

Dieses legen wir im Ordner `scripts` im `$DIEKLINGEL_HOME` Verzeichnis ab. Wenn die Anwendung als Snap läuft befindet sich das Home Verzeichnis unter `/var/snap/dieklingel-core/current`. Jetzt könne wir eine Lane erstellen, welches den Passcode überprüft und bei korrektem Passcode das eben erstellte Script aufruft.

```yaml
actions:
  - trigger: ^unlock$
    lane: | 
      if [ "$PASSCODE" = "123456789" ]; then
        python3 ./scripts/fhem.py "http://192.168.177.52:8083/fhem?cmd=set frontdoor on-for-timer 3"
      fi
```

Das wars auch schon. Sobal nun der Passcode `123456789` eingegeben wird, wird via FHEM der GPIO Pin 17 für 3 Sekunden auf HIGH geschaltet, befindet sich am Pin ein Relais, so kann mit diesem die Haustür geöffnet werden. Jede andere Passcode Eingabe wird ignoriert.
