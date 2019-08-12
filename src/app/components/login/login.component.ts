import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading: boolean;
  buttonactive:boolean;
  constructor(private router:Router) { }

  ngOnInit() {
    this.buttonactive = true;
  }

  onSubmit(form: NgForm) {
    if(this.buttonactive){
      this.buttonactive = false;
      const email = form.value.email;
      const interest = form.value.interest;
      console.log("Email Address : "+email);
      console.log("Interest : "+interest);
      this.loading = true;
      setTimeout(()=>{
        this.loading = false;
        this.buttonactive = true;
        this.router.navigate(['result']);
      },2000);
    }
   
    
  }
}
