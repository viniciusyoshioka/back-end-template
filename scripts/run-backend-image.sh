IMAGE_NAME=back-end-template

# Run in development
# podman run -it --rm -v ./.env:/app/.env $IMAGE_NAME

# Run in production
podman run -d --rm -v ./.env:/app/.env $IMAGE_NAME
