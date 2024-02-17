FROM nginx:stable-bullseye

RUN apt update -y && apt install ffmpeg -y
RUN mkdir -p /tmp/hls_streaming

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

#-c:v h264 -c:a aac
#-profile:v baseline -preset:v superfast 
CMD ["/bin/bash", "-c", "nginx -g 'daemon off;' & ffmpeg -stream_loop -1 -re -i /source/input.mp4 -c copy -strict -2 -f hls -hls_time 1 -hls_list_size 15 -hls_flags delete_segments+append_list+split_by_time /tmp/hls_streaming/output.m3u8"]
