import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jwt_front';

  registerForm = new FormGroup({
    username: new FormControl('Angular2'),
    password: new FormControl('1234'),
    email: new FormControl('angular@gmail.com'),
  });

  onRegister() {
    const {username, password, email} = this.registerForm.value;
    const data = {username, password, email};
    fetch("http://localhost:8080/register", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(response => {
      const {token} = response;
      localStorage.setItem("token", token);
      console.log(token, "Inscrit avec Success !")
    })
    .catch(err => console.log(err))
  }

  testWithoutToken = () => {
    fetch("http://localhost:8080/try")
      .then(res => console.log(res.status, "401 veut dire non autorisé à accéder à la ressource parce que pas de token"))
      .catch(err => console.log(err))
  }

  testWithToken = () => {
    const token = localStorage.getItem("token");
    const header = new Headers({ 'Authorization': `Bearer ${token}` , "Content-Type": "application/json"});
    const options = {
      headers: header,
    };
    fetch("http://localhost:8080/try", options)
      .then(res => res.json())
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  login() {
    const {username, password} = this.registerForm.value;
    const data = {username, password};
    fetch("http://localhost:8080/login", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(response => {
      const {token} = response;
      localStorage.setItem("token", token);
      console.log(token, "Connecté avec Success !")
    })
    .catch(err => console.log(err))
  }

  logout() {
    const token = localStorage.getItem("token");
    const header = new Headers({ 'Authorization': `Bearer ${token}` });
    const options = {
      headers: header,
      method: 'POST',
    };
    fetch("http://localhost:8080/customlogout", options)
    .then(res => res.json())
    .then(response => {
      console.log(response);
      localStorage.removeItem("token");
      console.log(localStorage.getItem("token"), "pas de token parce qu'on a vidé le localStorage");
    })
    .catch(err => console.log(err))
    
  }
}
