# Sync App

> WIP: Sync UserState across every live browser session

## Setup

_HTTPS_

> A really simple solution is [mkcert](https://github.com/FiloSottile/mkcert)

1. `brew install mkcert`
2. `mkcert -install`
3. `mkcert localhost` -> The certificate is at "./localhost.pem" and the key at "./localhost-key.pem" ✅

- QuickStart: `(yarn | npm run) start:https`

- Custom SSL Cert: `HTTPS=true SSL_CRT_FILE=./localhost.pem SSL_KEY_FILE=./localhost-key.pem npm start`
