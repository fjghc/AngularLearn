import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  /* 定义一个可观察对象Hero[]数组 */
  heroes$: Observable<Hero[]>;

  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    /* 给search订阅添加pipe */
    this.heroes$ = this.searchTerms.pipe(
      /* 防止抖动300毫秒 */
      debounceTime(300),
      /* 忽略重复值 */
      distinctUntilChanged(),
      /* 调用服务进行查询 */
      switchMap((term: string) =>
        this.heroService.searchHeroex(term))
    );
  }

  /* 将要查询的内容发送到 searchTerms，进行一次调用 */
  search(term: string): void {
    this.searchTerms.next(term);
  }

}
