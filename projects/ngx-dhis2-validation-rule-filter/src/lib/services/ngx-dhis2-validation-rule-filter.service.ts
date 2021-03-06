import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@hisptz/ngx-dhis2-http-client';
import { Observable } from 'rxjs';
import * as fromHelper from '../helpers';

@Injectable({
  providedIn: 'root'
})
export class NgxDhis2ValidationRuleFilterService {

  constructor(private httpClient: NgxDhis2HttpClientService) { }

  getValidationRuleGroups = (payload: Array<string>): Observable<any> => {
      return this.httpClient.get(fromHelper.generateValidationRuleAPI(payload));
  }
}
