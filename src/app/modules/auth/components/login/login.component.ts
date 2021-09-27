import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({});
  mensajeError= '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm(){
    const validaciones = {
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    }
    this.loginForm = this.fb.group(validaciones);
  }

  EnviarUsuario(event: Event){
    event.preventDefault();
    if(this.loginForm.valid){
      this.mensajeError = '';
      const value = this.loginForm.value;
      this.authService.loginUser(value.email, value.password).then(() => {
        this.router.navigate(['/'])
      }).catch((e) => {
        console.log(e);
        this.mensajeError = 'Email o Contraseña incorrecto.';
      });
    }
  }

}
