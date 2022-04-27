/**
 * EDC REST API
 * All files merged by open api merger
 *
 * The version of the OpenAPI document: 1.0.0-SNAPSHOT
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import {Inject, Injectable, Optional} from '@angular/core';
import {
  HttpClient,
  HttpContext,
  HttpEvent,
  HttpHeaders,
  HttpParameterCodec,
  HttpParams,
  HttpResponse
} from '@angular/common/http';
import {CustomHttpParameterCodec} from '../encoder';
import {Observable} from 'rxjs';

// @ts-ignore
import {ContractAgreementDto} from '../model/contractAgreementDto';

// @ts-ignore
import {API_KEY, BASE_PATH, COLLECTION_FORMATS, CONNECTOR_DATAMANAGEMENT_API} from '../variables';
import {Configuration} from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class ContractAgreementService {

  public defaultHeaders = new HttpHeaders({'X-Api-Key': this.apiKey});
  public configuration = new Configuration();
  public encoder: HttpParameterCodec;
  protected basePath = 'http://localhost';

  constructor(protected httpClient: HttpClient,
              @Inject(CONNECTOR_DATAMANAGEMENT_API) basePath: string,
              @Inject(API_KEY) private apiKey: string,
              @Optional() configuration: Configuration) {
    if (configuration) {
      this.configuration = configuration;
    }
    if (typeof this.configuration.basePath !== 'string') {
      this.configuration.basePath = basePath;
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
  }

  /**
   * @param offset
   * @param limit
   * @param filter
   * @param sort
   * @param sortField
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getAllAgreements(offset?: number, limit?: number, filter?: string, sort?: 'ASC' | 'DESC', sortField?: string, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<Array<ContractAgreementDto>>;

  public getAllAgreements(offset?: number, limit?: number, filter?: string, sort?: 'ASC' | 'DESC', sortField?: string, observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpResponse<Array<ContractAgreementDto>>>;

  public getAllAgreements(offset?: number, limit?: number, filter?: string, sort?: 'ASC' | 'DESC', sortField?: string, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpEvent<Array<ContractAgreementDto>>>;

  public getAllAgreements(offset?: number, limit?: number, filter?: string, sort?: 'ASC' | 'DESC', sortField?: string, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<any> {

    let localVarQueryParameters = new HttpParams({encoder: this.encoder});
    if (offset !== undefined && offset !== null) {
      localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
        <any>offset, 'offset');
    }
    if (limit !== undefined && limit !== null) {
      localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
        <any>limit, 'limit');
    }
    if (filter !== undefined && filter !== null) {
      localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
        <any>filter, 'filter');
    }
    if (sort !== undefined && sort !== null) {
      localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
        <any>sort, 'sort');
    }
    if (sortField !== undefined && sortField !== null) {
      localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>sortField, 'sortField');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        return this.httpClient.get<Array<ContractAgreementDto>>(`${this.configuration.basePath}/contractagreements`,
            {
                context: localVarHttpContext,
              params: localVarQueryParameters,
              responseType: <any>responseType_,
              withCredentials: this.configuration.withCredentials,
              headers: localVarHeaders,
              observe: observe,
              reportProgress: reportProgress
            }
        );
  }

  /**
   * @param id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getContractAgreement(id: string, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<ContractAgreementDto>;

  public getContractAgreement(id: string, observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpResponse<ContractAgreementDto>>;

  public getContractAgreement(id: string, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<HttpEvent<ContractAgreementDto>>;

  public getContractAgreement(id: string, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json', context?: HttpContext }): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getContractAgreement.');
    }

    let localVarHeaders = this.defaultHeaders;

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [
        'application/json'
      ];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context;
    if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        return this.httpClient.get<ContractAgreementDto>(`${this.configuration.basePath}/contractagreements/${encodeURIComponent(String(id))}`,
          {
            context: localVarHttpContext,
            responseType: <any>responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: localVarHeaders,
            observe: observe,
            reportProgress: reportProgress
          }
        );
  }

  private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
    if (typeof value === "object" && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value);
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
    }
    return httpParams;
  }

  private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
    if (value == null) {
      return httpParams;
    }

    if (typeof value === "object") {
      if (Array.isArray(value)) {
        (value as any[]).forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
        } else {
          throw Error("key may not be null if value is Date");
        }
      } else {
        Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(
          httpParams, value[k], key != null ? `${key}.${k}` : k));
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value);
    } else {
      throw Error("key may not be null if value is not object or array");
    }
    return httpParams;
  }

}
