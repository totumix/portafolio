import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from '../backend.service';
import { category } from '../query-params/category.api';
@Injectable()
export class CategoriesService {

    constructor(
        private _backendService: BackendService
    ) { }

    getCategoryWithName(categoryName): Observable<any> {
        return this._backendService.get(`${category.category}${categoryName}`)
    }
}
