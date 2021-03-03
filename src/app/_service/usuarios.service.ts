import { Injectable } from '@angular/core';

import { Formulario } from '../_class/formulario';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from '../_class/usuario';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
    userUrl = "https://recrutamento-praxio.azurewebsites.net/Api/Usuario";
    authenticaUrl = "https://recrutamento-praxio.azurewebsites.net/Api/Authorization";
    constructor(
        private http: HttpClient) {
    }

    addUsuario(usuario: Formulario) {
        return this.http.post<Formulario>(this.userUrl, usuario, httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    logarUsuario(usuario: Usuario) {
        const auth = usuario;
        return this.http.post<Usuario>(this.authenticaUrl, auth, httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError(
            'Something bad happened; please try again later.');
    }
}
