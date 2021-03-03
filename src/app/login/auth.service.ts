import {Injectable} from '@angular/core';

import {Router} from '@angular/router';
import {Usuario} from "../_class/usuario";
import {UsuariosService} from '../_service/usuarios.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private usuarioAuth: boolean = false;

    constructor(private router: Router, public usuariosService: UsuariosService) {
    }

    login(usuario: Usuario) {
        this.usuariosService.logarUsuario(usuario).subscribe(this.usuarioRedirect ,
            error => console.log(error),
            () => console.log('WebService Conectado'));

    }

    usuarioRedirect = (data = new Object) => {
        this.usuarioAuth = true;

        if(data['success']) {
            this.router.navigate(['/home']);
        } else {
            this.router.navigate(['**']);
        }

        this.router.navigate(['/home']);
    }

    usuarioIsAuth() {
        return this.usuarioAuth;
    }

}
