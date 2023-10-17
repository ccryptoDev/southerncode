import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpService {
  constructor(private http: HttpService) {}

  get<T>(url: string, config?: object): Observable<AxiosResponse<T>> {
    return this.http.get<T>(url, config);
  }

  post<T>(url: string, data: any, config?: object): Observable<AxiosResponse<T>> {
    return this.http.post<T>(url, data, config);
  }
}
