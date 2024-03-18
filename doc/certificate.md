# 証明書の作成

```bash
cd /nginx/ssl

openssl genrsa 2048 > server.key

openssl req -out server.csr -key server.key -new
# 入力欄はすべてEnterでOK

vi SAN.txt # 環境に合わせて内容を記述
subjectAltName = DNS:dev.local, DNS:*.dev.local

# crtファイルの作成
openssl x509 -req -days 3650 -signkey server.key -in server.csr -out server.crt -extfile SAN.txt
```

## 証明書のインポート

```bash
