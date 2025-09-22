FROM golang:1.23-alpine as builder

WORKDIR /app/

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN go build -trimpath -ldflags "-w -s" -o app
# ---------------------------------------------------
FROM debian:bullseye-slim as deploy

RUN apt-get update

COPY --from=builder /app/app .

CMD ["./app"]

FROM golang:1.23 as dev
WORKDIR /app
RUN go install github.com/air-verse/air@v1.60.0
CMD ["air"]
