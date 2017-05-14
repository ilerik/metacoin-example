FROM ubuntu:xenial
MAINTAINER Ilya Eriklintsev <erik.lite@gmail.com>
RUN (apt-get -qq update && apt-get -qqy install curl tar gzip gcc shared-mime-info)
RUN (apt-get -qqy install g++ libssl-dev openssl pkg-config)
RUN (apt-get -qqy install git ssh openssh-client sudo)
RUN mkdir -p /run
RUN adduser --disabled-password --gecos '' parity && adduser parity  sudo && echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
RUN sudo apt-get update && sudo apt-get upgrade

# switch to non root user
USER parity

# install nigtly rustup
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y --default-toolchain nightly
ENV PATH "/home/core/.cargo/bin:$PATH"

# expose ports and setup default behavior
WORKDIR /run
EXPOSE 3000

