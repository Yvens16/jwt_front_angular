// import { AuthService } from '../auth.service';

import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   constructor(private auth: AuthService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     // Get the auth token from the service.
//     const authToken = this.auth.getAuthorizationToken();

//     // Clone the request and replace the original headers with
//     // cloned headers, updated with the authorization.
//     const authReq = req.clone({
//       headers: req.headers.set('Authorization', authToken)
//     });

//     // send cloned request with header to the next handler.
//     return next.handle(authReq);
//   }
// }

// INTERCEPTOR EXAMPLE
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("@@@@@@@@@@@@@@@@@@@")
    const authToken = localStorage.getItem('token');
    console.log('authToken in tokenInterceptor:', authToken)
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    });
    return next.handle(authReq);
  }
}


