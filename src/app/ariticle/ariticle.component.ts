import { Component, OnInit } from '@angular/core';
import { IAritcle } from '../inter/IAritcle';
import { AritcleService } from './aritcle.service';

@Component({
  selector: 'app-article',
  templateUrl: './ariticle.component.html',
  styleUrls: ['./ariticle.component.css'],
  providers: [AritcleService]
})
export class AriticleComponent implements OnInit {

  articles: IAritcle[];
  searchTitle: string = '';
  hoverTitles: Object = {};

  constructor(private articleService: AritcleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
    this.articles.forEach(item => {
      this.hoverTitles[item.id] = false;
    });
  }

  handleClick(id: number) {
    for(let item in this.hoverTitles) {
      this.hoverTitles[item] = id === +item;
    }
  }
  
  handleSearch() {
    this.articles = this.articleService.getArticlesBySearch(this.searchTitle);
  }
}