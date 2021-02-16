import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../shered/interfaces';
import {AuthService} from '../shered/auth.services';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  submited = false;
  message: string;


  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // console.log(this.route.queryParams)
    this.route.queryParams.subscribe((params: Params) => {
      // console.log(params);
      if (params.loginAgain) {
        this.message = 'Будь ласка, введіть дані';
      } else  if (params.authFaild) {
        this.message = 'Сесія завершилась, введіть дані знову';
      }
    });

    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])

    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submited = true;
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    };
    // console.log(this.user)
  // console.log(this.auth)

    this.auth.login(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/admin', 'dashboard']);
      this.submited = false;
    }, () => {
      this.submited = false;
    });
  }


}
