# Use an official nginx runtime as a parent image
FROM nginx:1.22

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Remove the default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy the compiled app to the nginx static content directory
RUN cp -r dist/predio360-app/* /usr/share/nginx/html/
COPY  nginx.conf /etc/nginx/conf.d/default.conf
ADD  predio360.cer /etc/ssl/certs/
ADD  predio360.key /etc/ssl/private/

# Expose port 80
EXPOSE 80

# Command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]