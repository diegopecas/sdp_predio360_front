# Use an official nginx runtime as a parent image
FROM nginx:1.21.1

# Set the working directory to /app
WORKDIR /app

# Install curl to download Node.js and npm
# RUN apt-get update && apt-get install -y curl

# Install Node.js
# RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
# RUN apt-get install -y nodejs

# Install Angular CLI globally
# RUN npm install -g @angular/cli

# Copy the current directory contents into the container at /app
COPY . /app

# Install app dependencies and build for production
#RUN npm install --force
# RUN ng build --prod
#RUN npm run build --prod

# Remove the default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy the compiled app to the nginx static content directory
RUN cp -r dist/predio360-app/* /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
