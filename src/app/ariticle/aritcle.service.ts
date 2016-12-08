import { Injectable } from '@angular/core';
import { IAritcle } from '../inter/IAritcle';

@Injectable()
export class AritcleService {

    constructor() { }


    getArticles() {
        return [{
            id: 1,
            title: 'angularjs',
            content: '我是文章的内容'
        }, {
            id: 2,
            title: 'reactjs',
            content: '我是文章的内容'
        }];
    }

    getArticlesBySearch(key) {
        return this.getArticles().filter((article: IAritcle) => {
            let title = article.title || '';
            
            return title.indexOf(key) !== -1;
        })
    }
}