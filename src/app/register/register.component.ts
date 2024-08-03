import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ FormsModule, NavbarComponent, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  touched!: boolean;
  passwordMismatch!: boolean;

  constructor(){
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required, Validators.pattern(/^\S+$/)]),
      email: new FormControl('', [Validators.required, Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]),
      pass: new FormControl('', [Validators.required, Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#%]).{8,}$/)]),
      confirmPass: new FormControl('', [Validators.required, Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#%]).{8,}$/)])
        ,Validators: passwordMatchValidator()
    })
  }
  
  passwordMatchValidator() {
      const password = this.registerForm.get('pass')?.value;
      const confirmPassword = this.registerForm.get('confirmPass')?.value;
  
      if(password !== confirmPassword) {
        return passwordMismatch = true ;
      }
  }

  registerSender(){
    console.log(this.registerForm);
    
    if(this.registerForm.valid){
      console.log("Your Form is Invalid", this.registerForm.value);
      
    }
  } 
}
