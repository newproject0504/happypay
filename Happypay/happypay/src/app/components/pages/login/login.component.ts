import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/types/login.type';
import { addUser, getUser, updateUser } from 'src/app/utils/dgraph';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class Login implements OnInit {

  login: boolean = true;
  otpCode: number;
  forgototpCode: number;
  isPasswordForgotten = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  register() {
    const register = document.getElementById('register');
    register.style.display = 'block';
    const login = document.getElementById('login');
    login.style.display = 'none';
  }

  loginScreen() {
    const login = document.getElementById('login');
    login.style.display = 'block';
    const register = document.getElementById('register');
    register.style.display = 'none';
  }

  forgot() {
    this.isPasswordForgotten = !this.isPasswordForgotten;
    if (this, this.isPasswordForgotten) {
      const forgot = document.getElementById('forgot');
      forgot.style.display = 'block';
      const pass = document.getElementById('pass');
      pass.style.display = 'none';
    }
    else {
      const forgot = document.getElementById('forgot');
      forgot.style.display = 'none';
      const pass = document.getElementById('pass');
      pass.style.display = 'block';
    }
  }

  forgototp() {
    const phoneDoc:any = document.getElementById('loginPhone');
    if (phoneDoc.value && phoneDoc.value.length == 10) {
      this.forgototpCode = Math.floor(Math.random() * (999999 - 100000) + 100000);
      const message = 'Your OTP is ' + this.forgototpCode +' from sarvekshaw.com';;
      const link = `http://getwaysms.com/vendorsms/pushsms.aspx?user=Buddica&password=SPQA1B4Y&msisdn=${phoneDoc.value}&sid=SVKOTP&msg=${message}&fl=0&gwid=2`;
      fetch(link).then(res => this.notify('we sent a otp to your mobile')).catch(err => this.notify("we can't sent a otp to your mobile, please try again later"));
    }
    else this.notify('Please enter phone number');
  }

  otp() {
    const phoneDoc:any = document.getElementById('phone');
    if (phoneDoc.value && phoneDoc.value.length == 10) {
      this.otpCode = Math.floor(Math.random() * (999999 - 100000) + 100000);
      const message = 'Your OTP is ' + this.otpCode +' from sarvekshaw.com';
      const link = `http://getwaysms.com/vendorsms/pushsms.aspx?user=Buddica&password=SPQA1B4Y&msisdn=${phoneDoc.value}&sid=SVKOTP&msg=${message}&fl=0&gwid=2`;
      fetch(link).then(res => this.notify('we sent a otp to your mobile')).catch(err => this.notify("we can't sent a otp to your mobile, please try again later"));
    }
    else this.notify('Please enter phone number');
  }

  registerButton() {
    const user: any = document.getElementById('user');
    const phone: any = document.getElementById('phone');
    const otp: any = document.getElementById('otp');
    const email: any = document.getElementById('email');
    const pass: any = document.getElementById('passw');
    const terms: any = document.getElementById('terms');
    if (user.value && phone.value && otp.value && email.value && pass.value && terms.checked) {
      if (email.value.includes('@') && email.value.includes('.') && pass.value.length === 6 && otp.value == this.otpCode) {
        const userData: User = {
          id: this.otpCode.toString(),
          username: user.value,
          email: email.value,
          password: pass.value,
          phone: phone.value,
        }
        addUser(userData).then(res => {
          this.notify('Registered Successfully');
          this.loginScreen();
        }).catch(err => this.notify('Something went wrong \n username or email already exists'));
      }
      else this.notify('Check OTP \n password must be atleast 6 characters \n email must be valid');
    }
    else this.notify('Please check all the fields');
  }

  loginButton() {
    const phone: any = document.getElementById('loginPhone');
    const password: any = document.getElementById('password');
    if (this.isPasswordForgotten) {
      const fotp:any = document.getElementById('fotp');
      const fpass:any = document.getElementById('fpass');
      const frpass:any = document.getElementById('frpass');
      if (fotp.value && fpass.value && frpass.value) {
        if (frpass.value === fpass.value && fotp.value == this.forgototpCode) {
          getUser(phone.value).then(res => {
            const users: User[] = res.data.queryUser;
            if (users.length > 0) {
              const user: User = users[0];
              user.password = fpass.value;
              updateUser(user).then(res => {
                this.notify('Password changed successfully');
                this.loginScreen();
              });
            }
            else this.notify('User not found');
          });
        }
        else this.notify('check OTP \n password did not match');
      }
      else this.notify('Please check all the fields');
    }
    else {
      if (phone.value && password.value) {
        getUser(phone.value).then(result => {
          const users: User[] = result.data.queryUser;
          if (users.length > 0) {
            if (users[0].password === password.value) {
              const form: any = document.getElementById('loginForm');
              sessionStorage.setItem('user', JSON.stringify(users[0]));
              form.submit();
            }
            else {
              this.notify('Invalid Password');
              
            }
          }
          else this.notify('User not found');
        });
      }
      else this.notify('Please check all the fields');
    }
    return false;
  }

  notify(message: string) {
    const notify = document.getElementById('notify');
    notify.style.opacity = '1';
    const h3 = notify.getElementsByTagName('h3')[0];
    h3.innerText = message;
    setTimeout(() => {
      notify.style.opacity = '0';
    },2000)
  }
}