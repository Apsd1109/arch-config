#!/bin/bash

#turn on BT and connect to mouse
bluetoothctl power on
bluetoothctl connect E8:80:60:40:BA:D8

#set mouse sens
Mouse=`xinput list | grep -i 'MX Master 2S Mouse' | awk -F= '{print $2}' | awk '{print$1}'`
xinput set-prop $Mouse "libinput Accel Speed" -0.6
