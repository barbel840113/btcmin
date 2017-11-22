// https://blog.sstorie.com/adapting-ben-nadels-apigateway-to-pure-typescript/
// My updates are mostly adapting it for Typescript:
//  1. Importing required modules
//  2. Adding type notations
//  3. Using the 'fat-arrow' syntax to properly scope in-line functions

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AuthTokenService } from '../auth-token/auth-token.service';
import { UtilityService } from '../utility/utility.service';
import { DataServiceOptions } from './data.service.options';

@Injectable()
export class DataService {

    public isUserExternalLoggin : boolean = false;

    // Define the internal Subject we'll use to push the command count
    public pendingCommandsSubject = new Subject<number>();
    public pendingCommandCount = 0;

    // Provide the *public* Observable that clients can subscribe to
    public pendingCommands$: Observable<number>;

    constructor(public http: Http, 
        public us: UtilityService) {
        this.pendingCommands$ = this.pendingCommandsSubject.asObservable();
    }

    // I perform a GET request to the API, appending the given params
    // as URL search parameters. Returns a stream.
    public get(url: string, params?: any): Observable<Response> {
        const options = new DataServiceOptions();
        options.method = RequestMethod.Get;
        options.url = url;
        options.params = params;
        return this.request(options);
    }

    // I perform a POST request to the API. If both the params and data
    // are present, the params will be appended as URL search parameters
    // and the data will be serialized as a JSON payload. If only the
    // data is present, it will be serialized as a JSON payload. Returns
    // a stream.
    public post(url: string, data?: any, params?: any): Observable<Response> {
        if (!data) {
            data = params;
            params = {};
        }
        const options = new DataServiceOptions();
        options.method = RequestMethod.Post;
        options.url = url;
        options.params = params;
        options.data = data;
        return this.request(options);
    }

    public put(url: string, data?: any, params?: any): Observable<Response> {
        if (!data) {
            data = params;
            params = {};
        }
        const options = new DataServiceOptions();
        options.method = RequestMethod.Put;
        options.url = url;
        options.params = params;
        options.data = data;
        return this.request(options);
    }

    public delete(url: string): Observable<Response> {
        const options = new DataServiceOptions();
        options.method = RequestMethod.Delete;
        options.url = url;
        return this.request(options);
    }

    private request(options: DataServiceOptions): Observable<any> {
        options.method = (options.method || RequestMethod.Get);
        options.url = (options.url || '');
        options.headers = (options.headers || {});
        options.params = (options.params || {});
        options.data = (options.data || {});

        this.addXsrfToken(options);
        this.addBearerHeaderToken(options);
        this.addContentType(options);
        this.addAuthToken(options);

        const requestOptions = new RequestOptions();
        requestOptions.method = options.method;
        requestOptions.url = options.url;
        requestOptions.headers = options.headers;
        requestOptions.search = this.buildUrlSearchParams(options.params);
        requestOptions.body = JSON.stringify(options.data);

        this.pendingCommandsSubject.next(++this.pendingCommandCount);

        const stream = this.http.request(options.url, requestOptions)
            .catch((error: any) => {
                return Observable.throw(error);
            })
                    
            .catch((error: any) => {
                return Observable.throw(error);
            })
            .finally(() => {
                this.pendingCommandsSubject.next(--this.pendingCommandCount);
            });

        return stream;
    }

    private addContentType(options: DataServiceOptions): DataServiceOptions {
        // if (options.method !== RequestMethod.Get) {
        options.headers['Content-Type'] = 'application/json; charset=UTF-8';
        // }
        return options;
    }

    private addAuthToken(options: DataServiceOptions): DataServiceOptions {
        const authTokens = localStorage.getItem('auth-tokens');
        if (authTokens) {
            if(this.isUserExternalLoggin == true)
            {
                options.headers.Authorization = 'Bearer ' + authTokens;
            }
            else
            {
                // tslint:disable-next-line:whitespace
               options.headers.Authorization = 'Bearer ' + authTokens.substr(1,authTokens.length-2);
            
            }
        }
        return options;
    }

    private addBearerHeaderToken(options : DataServiceOptions):DataServiceOptions{
        
        options.headers['Bearer'] = 'Bearer';
        return options;
    }

    private extractValue(collection: any, key: string): any {
        const value = collection[key];
        delete (collection[key]);
        return value;
    }

    private addXsrfToken(options: DataServiceOptions): DataServiceOptions {
        const xsrfToken = this.getXsrfCookie();
        if (xsrfToken) {
            options.headers['X-XSRF-TOKEN'] = xsrfToken;
        }
        return options;
    }

    private getXsrfCookie(): string {
        const matches = document.cookie.match(/\bXSRF-TOKEN=([^\s;]+)/);
        try {
            return matches ? decodeURIComponent(matches[1]) : '';
        } catch (decodeError) {
            return '';
        }
    }

    // private addCors(options: DataServiceOptions): DataServiceOptions {
    //     options.headers['Access-Control-Allow-Origin'] = '*';
    //     return options;
    // }

    private buildUrlSearchParams(params: any): URLSearchParams {
        const searchParams = new URLSearchParams();
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                searchParams.append(key, params[key]);
            }
        }
        return searchParams;
    }



}
