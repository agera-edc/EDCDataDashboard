import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AssetDto, AssetService, ContractDefinitionDto, Policy, PolicyService} from "../../../edc-dmgmt-client";
import {flatMap, map, mergeMap} from "rxjs/operators";
import {Asset} from "../../models/asset";


@Component({
  selector: 'edc-demo-contract-definition-editor-dialog',
  templateUrl: './contract-definition-editor-dialog.component.html',
  styleUrls: ['./contract-definition-editor-dialog.component.scss']
})
export class ContractDefinitionEditorDialog implements OnInit {

  policies: Policy[] = [];
  availableAssets: Asset[] = [];
  name: string = '';
  editMode = false;
  accessPolicy?: Policy;
  contractPolicy?: Policy;
  assets: Asset[] = [];
  contractDefinition: ContractDefinitionDto = {
    id: '',
    criteria: [],
    accessPolicyId: undefined!,
    contractPolicyId: undefined!
  };

  constructor(private policyService: PolicyService,
              private assetService: AssetService,
              private dialogRef: MatDialogRef<ContractDefinitionEditorDialog>,
              @Inject(MAT_DIALOG_DATA) contractDefinition?: ContractDefinitionDto) {
    if (contractDefinition) {
      this.contractDefinition = contractDefinition;
      this.editMode = true;
    }
  }

  ngOnInit(): void {
    this.policyService.getAllPolicies().subscribe(polices => {
      this.policies = polices;
      this.accessPolicy = this.policies.find(policy => policy.uid === this.contractDefinition.accessPolicyId);
      this.contractPolicy = this.policies.find(policy => policy.uid === this.contractDefinition.contractPolicyId);
    });
    this.assetService.getAllAssets().pipe(map(asset => asset.map(a => new Asset(a.properties)))).subscribe(assets => {
      this.availableAssets = assets;
      // preselection
      if (this.contractDefinition) {
        const assetIds = this.contractDefinition.criteria.map(c => c.right);
        this.assets = this.availableAssets.filter(asset => assetIds.includes(asset.id));
      }
    })
  }

  onSave() {
    this.contractDefinition.accessPolicyId = this.accessPolicy!.uid;
    this.contractDefinition.contractPolicyId = this.contractPolicy!.uid;
    this.contractDefinition.criteria = [];

    this.assets.forEach(asset => {
      this.contractDefinition.criteria = [...this.contractDefinition.criteria, {
        left: 'asset:prop:id',
        op: '=',
        right: asset.id,
      }];
    })

    this.dialogRef.close({
      "contractDefinition": this.contractDefinition
    });
  }
}
