import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Inventario } from './inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private heroesUrl = 'http://localhost:22958/';

  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, PUT, DELETE, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization'
    })
  };

  constructor(
    private http: HttpClient
  ) {}

  /** GET heroes from the server */
  getInventario(): Observable < Inventario[] > {
    return this.http.get < Inventario[] > (this.heroesUrl + 'api/Inventarios')
      .pipe(
        tap(_ => console.log('entro al tap de getInventario')),
        catchError(this.handleError < Inventario[] > ('getInventario', []))
      );
  }

  /** GET heroes from the server */
  getInventarioID(id :number): Observable < Inventario > {
    return this.http.get < Inventario > (this.heroesUrl + 'api/Inventarios/' + id)
      .pipe(
        tap(_ => console.log('entro al tap de getInventarioID')),
        catchError(this.handleError < Inventario > ('getInventario'))
      );
  }

  /** POST: add a new hero to the server */
  UpdateInventario (hero: Inventario): Observable<Inventario> {
    return this.http.put<Inventario>(this.heroesUrl + 'api/Inventarios', hero, this.httpOptions).pipe(
      tap((newHero: Inventario) => console.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Inventario>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  DeleteInventario (id : number): Observable<Inventario> {

    return this.http.delete<Inventario>(this.heroesUrl + 'api/Inventarios/'+ id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Inventario>('deleteHero'))
    );
  }

  /** POST: add a new hero to the server */
  PostInventario (inventario: Inventario): Observable<Inventario> {
    console.log(inventario)
    return this.http.post<Inventario>(this.heroesUrl + 'api/Inventarios', inventario, this.httpOptions).pipe(
      tap((newHero: Inventario) => console.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Inventario>('addHero'))
    );
  }


  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError < T > (operation = 'operation', result ? : T) {
    return (error: any): Observable < T > => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
