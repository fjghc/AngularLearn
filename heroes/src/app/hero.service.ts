import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
/* 引入Rxjs */
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';


/* 添加英雄服务类，并将该服务注入到根,任何只组件都可以通过依赖注入拿到该服务 */
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  /* 请求数据的Url */
  private heroesUrl = 'api/heroes';
  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  /*  模拟http，返回 可观察对象流 */
  getHeros(): Observable<Hero[]> {
    /* 使用http请求服务器返回数据，也是一个可观察的对象 */
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        /* 窥探Observable中的数据流 */
        tap(heroes => this.log('fetched heroes')),
        /* 异常处理 */
        catchError(this.handleError('getHeroes', []))
      );

  }

  /* 根据Id 获取指定的hero对象 */
  getHero(id: number): Observable<Hero> {

    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /* 日志记录二次封装 */

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
