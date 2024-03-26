# Predio360App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Pasos para el despliegue

1. crear el archivo nginx.conf
/u01/app/docker/predio360/sdp_predio360_front-main/nginx.conf

server {
    listen 80 ssl;
    server_name localhost;
ssl_certificate /etc/ssl/certs/predio360.cer;
ssl_certificate_key /etc/ssl/private/predio360.key;

    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

}

2. copiar el certificado en la ruta de la app 
/u01/app/docker/predio360/sdp_predio360_front-main/predio360.cer
/u01/app/docker/predio360/sdp_predio360_front-main/predio360.key

3.crear la imagen
docker ps -a  | grep predio360
docker stop 8252c344e8cc
docker rm  8252c344e8cc


cd /u01/app/docker/predio360/sdp_predio360_front-main
docker build -t predio360front .
docker run  -p 2443:80 -d predio360front
docker run  -p 2443:80  predio360front

ingresar al docker de la imagen
docker exec -it distracted_moore /bin/bash

distracted_moore