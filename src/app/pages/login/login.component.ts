import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { ResponseViewModel } from 'src/app/models/response-view-model';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _http: HttpClient, private _router: Router) { }
  ngOnInit(): void {
   

  }

userlog:any
userTest:any
  signin(email: string, password: string) {
    let user = new User();

    user.email = email;

    user.password = password;
    this._http.post<ResponseViewModel>('http://localhost:8080/auth/login', user)
      .subscribe(resposne => {
        if (resposne.success) {
          localStorage.setItem("role",resposne.user.role)
      
        localStorage.setItem("user",JSON.stringify( resposne.user));


        this.userTest= JSON.parse(localStorage.getItem("user")!);
        // console.log()
        console.log(this.userTest.id)
        console.log(this.userTest.email)
        console.log(this.userTest.name)


        this._router.navigateByUrl('/home')
        }
        else
          alert("this email registered before ");
       })

  }
}
