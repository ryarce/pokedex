import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';
import { MyValidators } from 'src/app/utils/validators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup= this.fb.group({});

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router){
    this.buildForm();
  }

  ngOnInit(): void {

  }

  buildForm(){
    const validaciones = {
      id: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([
        Validators.required,
        MyValidators.validarContrasena])
      ],
      confirmPassword: ['', Validators.compose([
        Validators.required, MyValidators.validarContrasena])
      ]
    }

    const opciones: AbstractControlOptions = {
      validators: MyValidators.passwordMatchValidator
    }

    this.registerForm = this.fb.group(validaciones, opciones);
  }

  EnviarUsuario(event: Event){
    event.preventDefault();
    if(this.registerForm.valid){
      const value = this.registerForm.value;
      this.authService.createUser(value.email, value.password).then(() => {
        this.router.navigate(['/auth'])
      }).catch((e) => console.log('error'));
    }
  }

}
