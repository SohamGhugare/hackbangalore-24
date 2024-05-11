FROM golang:alpine AS build_base

RUN apk add --no-cache git

# Set the Current Working Directory inside the container
WORKDIR /tmp/backend

# We want to populate the module cache based on the go.{mod,sum} files.
COPY go.mod .
COPY go.sum .

RUN go mod download

COPY . .

# Build the Go app
RUN go build -o ./out/backend .

# Start fresh from a smaller image
FROM alpine:3.9
RUN apk add ca-certificates

COPY --from=build_base /tmp/backend/out/backend /app/backend
COPY .env /app/backend

# This container exposes port 8080 to the outside world
EXPOSE 8080
RUN chmod +x /app/backend

# Run the binary program produced by `go install`
CMD ["/app/backend"]
