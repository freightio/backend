FROM ubuntu
MAINTAINER jmzwcn@gmail.com

#RUN mkdir /lib64 && ln -s /lib/libc.musl-x86_64.so.1 /lib64/ld-linux-x86-64.so.2
ADD ./bundles/backend /usr/local/bin
ENTRYPOINT ["/usr/local/bin/backend"]

EXPOSE 50051
