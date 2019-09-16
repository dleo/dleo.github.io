---
layout:         post
author:         David
subtitle:       "Instalation Weemx on Raspberry Pi 4"
date:           2019-09-15 12:00
header-img:     "assets/raspberry-pi-4.png"
categories:     [development]
tags:           [raspberry]
---
On our experiment we're trying to setup [Weemx](http://weewx.com/) on Raspberry Pi 4.

![Raspberry](/assets/raspberry-pi-4.png){:class="responsive-img"}


This model is very small and powerful.

However, you need be careful about overheating.

The instalation was easy, just follow the steps on tutorial:

Tell apt where to find the WeeWX releases. This only has to be done once - the first time you install WeeWX.

~~~~
    wget -qO - http://weewx.com/keys.html | sudo apt-key add -
    wget -qO - http://weewx.com/apt/weewx.list | sudo tee /etc/apt/sources.list.d/weewx.list
~~~~

Use apt-get to install WeeWX. The installer will prompt for a location, latitude/longitude, altitude, station type, and parameters specific to your station hardware.

~~~~
    sudo apt update
    sudo apt install weewx
~~~~

After that, you are ready to setup DB and start to manipulate data from weather station.