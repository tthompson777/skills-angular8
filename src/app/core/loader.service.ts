import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
export class LoaderService {
    public isLoading = new BehaviorSubject(false);

    constructor() {}
}


