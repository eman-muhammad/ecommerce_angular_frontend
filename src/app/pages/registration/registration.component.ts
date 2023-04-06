import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { ResponseViewModel } from 'src/app/models/response-view-model';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _http: HttpClient, private _router: Router) { }
  ngOnInit(): void {
  }
  signup(name: string, email: string, gender: string, password: string) {
    let user = new User();
    user.name = name;
    user.email = email;
    user.gender = gender;
    user.password = password;


    this._http.post<ResponseViewModel>('http://localhost:8080/auth/register', user)
      .subscribe(resposne => {
        if (resposne.success) {
          this._router.navigateByUrl('/login')
        }
        else
          alert("this email registered before ");
      })

  }

}
