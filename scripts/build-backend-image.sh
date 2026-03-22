IMAGE_NAME=back-end-template

podman build \
    --arch amd64 \
    -f back-end.Containerfile \
    --ignorefile .dockerignore \
    -t $IMAGE_NAME \
    .
