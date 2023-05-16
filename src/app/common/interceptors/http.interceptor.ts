import { finalize, tap } from 'rxjs/operators';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

    count = 0;

    constructor(private spinner: NgxSpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.spinner.show();
        console.log('inicia contador')
        this.count++;

        return next.handle(req)

            .pipe ( tap (

                    // event => console.log('evento loading',event),

                    error => console.log('Error loading', error )

                    
                ), finalize(() => {

                    this.count--;

                    if ( this.count === 0 ) {
                      this.spinner.hide ();
                      console.log('termina contador')
                    }
                })
            );
    }
}
