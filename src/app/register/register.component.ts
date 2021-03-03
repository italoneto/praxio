import { Component, OnInit } from '@angular/core';

import { Formulario } from '../_class/formulario';
import { NgForm, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../_service/usuarios.service';
import { NgxMaskModule } from 'ngx-mask';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

    public model;

    registerForm: FormGroup;

    constructor(
      private formBuilder: FormBuilder,
      private usuariosService: UsuariosService
    ) { }

    ngOnInit() {
        this.model = new Formulario('', 0, 0, '', '', 0, '', 0, '');

        this.registerForm = this.formBuilder.group({
          nomeRazaoSocial: [null, Validators.required],
          cpfCnpj: [null, Validators.required],
          telefone: [null, Validators.required],
          email: [null, Validators.required],
          senha: [null, [Validators.required, Validators.email]],
          cep: [null, Validators.required],
          logradouro: [null, Validators.required],
          numero: [null, Validators.required],
          bairro: [null, Validators.required]
        });
    }

    onSubmit() {
        const novoUsuario: Formulario = {...this.registerForm.value} as Formulario;

        this.usuariosService.addUsuario(novoUsuario).subscribe(data => [
          console.log(data),
          () => Swal({
            title: 'Sucesso!',
            text: 'Cadastro feito com sucesso!',
            type: 'success',
            confirmButtonText: 'OK'
          })],
          (error: any) => Swal({
            title: 'Erro!',
            text: 'Tente novamente mais tarde.',
            type: 'error',
            confirmButtonText: 'OK'
          })
        );
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }
}
