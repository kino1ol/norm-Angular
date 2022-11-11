import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Hero } from '../types/heroes';

@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroesUrl = 'api/heroes'
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient
  ) {}

  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  public getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`
    return this.http.get<Hero>(url)
  }

  public updateHero(hero: Hero): Observable<any> {
    console.log(hero)
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      catchError((er): Observable<undefined> => {
        console.log(er)
        return of(undefined)
      })
    )
  }
}