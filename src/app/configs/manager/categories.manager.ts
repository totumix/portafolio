import { Injectable } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { CategoriesService } from '../services/categories.service';

@Injectable({
    providedIn: 'root',
})
export class CategoriesManager {
    constructor(
        private categoriesService: CategoriesService
    ) { }

    getCategoryWithName(categoryName) {
        return this.categoriesService.getCategoryWithName(categoryName);
    }

}
