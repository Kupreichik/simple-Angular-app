import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const { BASE_YOUTUBE_API_URL, YOUTUBE_API_KEY } = environment;

@Injectable()
export class AuthYoutubeInterceptor implements HttpInterceptor {
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(
      request.clone({
        url: `${BASE_YOUTUBE_API_URL}${request.url}`,
        setParams: {
          key: YOUTUBE_API_KEY,
        },
      }),
    );
  }
}
