import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthclientService } from '../services/authclient.service';

@Injectable()
export class RouteInterceptor implements HttpInterceptor {

    constructor(private auth: AuthclientService) { }

    token: string;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var userStatus: any = JSON.parse(localStorage.getItem("currentUser"));       //  {this.auth.getToken()} auth is provided via constructor.
        if (userStatus) {
            this.token=userStatus.jwt;
            // Logged in. Add Bearer token.
            return next.handle(
                req.clone({
                
                    headers: req.headers.set('Authorization', 'Bearer ' + this.token)
                })
            );
        }
        // Not logged in. Continue without modification.
        return next.handle(req);
    }
}

