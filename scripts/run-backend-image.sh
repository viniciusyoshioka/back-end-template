IMAGE_NAME=back-end-template

# Run in development
# podman run -it --rm -p 3000:3000 -v ./.env:/app/.env $IMAGE_NAME

# Run in production
podman run -d --rm -p 3000:3000 -v ./.env:/app/.env $IMAGE_NAME
