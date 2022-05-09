import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AssetDto, AssetService, ContractDefinitionDto, Policy, PolicyService} from "../../../edc-dmgmt-client";


@Component({
  selector: 'edc-demo-contract-definition-editor-dialog',
  templateUrl: './contract-definition-editor-dialog.component.html',
  styleUrls: ['./contract-definition-editor-dialog.component.scss']
})
export class ContractDefinitionEditorDialog implements OnInit {

  policies: Policy[] = [];
  availableAssets: AssetDto[] = [];
  name: string = '';
  editMode = false;
  accessPolicy?: Policy;
  contractPolicy?: Policy;
  assets: AssetDto[] = [];
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
    this.assetService.getAllAssets().subscribe(assets => {
      this.availableAssets = assets;
    })
  }

  onSave() {
    this.contractDefinition.accessPolicyId = this.accessPolicy!.uid;
    this.contractDefinition.contractPolicyId = this.contractPolicy!.uid;

    this.assets.forEach(asset => {
      this.contractDefinition.criteria = [...this.contractDefinition.criteria, {
        left: 'asset:prop:id',
        op: '=',
        right: asset.properties["asset:prop:id"],
      }];
    })

    this.dialogRef.close({
      "contractDefinition": this.contractDefinition
    });
  }
}
