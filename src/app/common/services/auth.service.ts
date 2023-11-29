import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}

  autenticar(
    user: any,
    password: any
  ): Observable<any> {
    const attr = {
        "nombreUsuario": user,
        "contrasenia": password,
        "aplicacion": "SEGURIDAD",
        "tipoUsuario": "I"
       };

    return this.http.post<any>("http://seguridadde.sdp.gov.co:83/seguridadApi/api/autenticacion/autenticar", attr).pipe(
      catchError((e:any) => {
        return throwError(e);
      })
    );
  }
}
