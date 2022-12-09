# [START dockerfile]
FROM nginx:stable

# Copy all files to the container image in nginx and set the working directory.
COPY . /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Install dependencies.
RUN apt-get update && apt-get install -y \
    curl \
    gnupg \
    apt-transport-https \
    lsb-release \
    ca-certificates \
    && curl -sL https://deb.nodesource.com/setup_12.x | bash - \
    && apt-get install -y nodejs \
    && npm install \
    && npm install firebase

CMD ["nginx", "-g", "daemon off;"]

# [END dockerfile]