
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';

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


