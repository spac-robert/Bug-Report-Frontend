import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { BugRequest } from 'src/app/dto/bug-request';
import { BugResponse } from 'src/app/dto/bug-response';
import { Bug } from 'src/app/models/Bug';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private httpsClient: HttpClient) {
  }

  public getBugs(): Observable<Bug[]> {
    const resp = this.httpsClient.get<Bug[]>('http://localhost:8080/api/v1/homepage/tester');
    return resp;
  }

  public async addBug(bugRequest: BugRequest) {
    debugger;
    //TODO nu merge pe back trebuie sa vazut
    const resp = await firstValueFrom(this.httpsClient.post<BugResponse>('http://localhost:8080/api/v1/homepage/tester/post',bugRequest));
    console.log(resp);
  }
  
}
