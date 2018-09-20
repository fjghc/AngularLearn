import { Injectable } from '@angular/core';

// 本地存储
const ls = localStorage;
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  /**
   * 从本地存储获取值
   * @param key 键值
   */
  public get<T>(key: string): any {
    return JSON.parse(ls.getItem(key)) as T;
  }

  /**
   * 获取列表内容
   * @param key 键值
   */
  public getList<T>(key: string): any {
    const before = ls.getItem(key);
    // 如果有值，这转化为数组
    return before ? (JSON.parse(before) as T[]) : [];
  }

  /**
   * 存储内容到本地仓库
   * @param key 键值
   * @param value 内容
   */
  public set(key: string, value: any): void {
    if (!value && value === undefined) { return; }
    const arr = JSON.stringify(value);
    ls.setItem(key, arr);
  }
}
