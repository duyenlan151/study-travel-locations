set -e

IMAGE_NAME="study-travel-locations"

echo "🛠 Building Docker image: $IMAGE_NAME"

# Remove dangling images before build
docker image prune -f

# Build new image
docker build -t $IMAGE_NAME .
