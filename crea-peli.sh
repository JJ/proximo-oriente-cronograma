#!/bin/sh

ffmpeg \
-framerate 10 -loop 1 -t 5 -i egipto-antiguo-sin-nombres.png \
    -framerate 10 -loop 1 -t 5 -i egipto-antiguo-nombres.png \
       -filter_complex \
       "[0:v]fade=t=out:st=4:d=1[v0]; \
       [1:v]fade=t=in:st=0:d=1,fade=t=out:st=4:d=1[v1]; \
       [v0][v1]concat=n=2:v=1:a=0,split[v0][v1]; \
       [v0]palettegen[p];[v1][p]paletteuse[v]" \
-map "[v]" egipto-animado.gif
