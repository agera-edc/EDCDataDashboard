import {Component, OnInit} from '@angular/core';
import {Policy, PolicyService} from "../../../edc-dmgmt-client";
import {BehaviorSubject, Observable, of} from "rxjs";
import {map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-policy-view',
  templateUrl: './policy-view.component.html',
  styleUrls: ['./policy-view.component.scss']
})
export class PolicyViewComponent implements OnInit {

  filteredPolicies$: Observable<Policy[]> = of([]);
  searchText: string = '';
  private fetch$ = new BehaviorSubject(null);

  constructor(private policyService: PolicyService) {
  }

  ngOnInit(): void {
    this.filteredPolicies$=  this.fetch$.pipe(
      switchMap(() => {
        const contractDefinitions$ = this.policyService.getAllPolicies();
        return !!this.searchText ?
          contractDefinitions$.pipe(map(policies => policies.filter(policy => this.isTouched(policy, this.searchText))))
          :
          contractDefinitions$;
      }));
  }

  onCreateNewClicked() {

  }

  onSearch() {
    this.fetch$.next(null);
  }

  onCreate() {

  }

  private isTouched(policy: Policy, searchText: string) {
    return policy.uid.toLowerCase().includes(searchText)
  }
}
