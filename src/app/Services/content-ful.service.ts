import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful'
import { from } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentFulService {

  constructor() { }


  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken
  });

  getAllEntries()
  {
    const promise = this.client.getEntries()
    // .then(entries =>console.log(entries))
    return from(promise);
  }

  getEntriesById(id:string)
  {
    const promise = this.client.getEntry(id);
    return from(promise);


  }
}
