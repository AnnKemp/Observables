//https://github.com/apilayer/restcountries // om landen-info uit te halen
// angular.io/guide/observables

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'; // used for passing messages between parts of your application, recommended for event handling, asynchronous programming, and handling multiple values.
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
