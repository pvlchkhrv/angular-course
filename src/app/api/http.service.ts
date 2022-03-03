import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

const BASE_URL = 'https://randomuser.me/api/';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public get(uri: string, options: any = null): Observable<any> {
    const path: string = BASE_URL + uri;
    return this.http
      .get(path, options)
      // .pipe(catchError(this.handleError.bind(this)));
  }

  public post(uri: string, data: any = null, options: any = null): Observable<any> {
    const path: string = BASE_URL + uri;
    return this.http
      .post(
        path,
        data,
        options
      )
  }

  private handleError (err: HttpErrorResponse | ErrorEvent | any): any {
    let message: string;
    let status: number;
    if (err.error instanceof ErrorEvent) {
      message = `Error: ${err.error.message}`;
      status = err.error.status;
    } else {
      message = `Code: ${err.status}: ${err.message}`;
      status = err.status
    }

    console.log(message);

    const errorObj = {message, status};
    return throwError(errorObj);
  }
}
