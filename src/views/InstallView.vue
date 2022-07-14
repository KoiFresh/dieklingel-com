<template>
  <div>
    <span> 1. [bash] "sudo cpan install Net::MQTT::Constants" </span>
    <span> 2. [fhem] "define dieklingel_mosquitto MQTT 127.0.0.1:1883" </span>
    <span> 3. [fhem] "define dieklingel MQTT_DEVICE dieklingel_mosquitto"</span>
    <span>
      4. [fhem] "define dieklingel_notify_firebase_notification_send notify a b"
    </span>
    <span>
      5. [fhem] change the DEF from 4. to:
      <span
        >dieklingel:firebase_notification_send.* { my $value =
        ReadingsVal("dieklingel", "firebase_notification_send", "1"); use JSON
        qw(decode_json); use JSON qw(encode_json); my $raw = $value; my
        $notification = decode_json($raw); $notification->{'title'} = "Jemand
        steht vor deiner Tuer!"; (my $sec, my $min, my $hour, my $mday, my $mon,
        my $year, my $wday, my $yday, my $isdst) = localtime(); $year += 1900;
        $mon += 1; $notification->{'body'} = "${year}-${mon}-${mday}
        ${hour}:${min}:${sec} Uhr"; my $n = encode_json($notification);
        system("curl --location --request POST
        'fcm-worker.dieklingel.workers.dev/fcm/send' --header 'Content-Type:
        application/json' --data-raw '${n}' &"); }
      </span>
    </span>
  </div>
</template>
