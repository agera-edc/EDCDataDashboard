import { Component, OnInit } from '@angular/core';
import {Policy, PolicyService} from "../../../edc-dmgmt-client";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-policy-view',
  templateUrl: './policy-view.component.html',
  styleUrls: ['./policy-view.component.scss']
})
export class PolicyViewComponent implements OnInit {

  policies$: Observable<Policy[]> = of([]);

  constructor(private policyService: PolicyService) { }



  ngOnInit(): void {
    this.policies$ = this.policyService.getAllPolicies();
  }

  onCreateNewClicked() {

  }

  stringify(object: any): string{
    return JSON.stringify(object, null, 2);
  }
}
