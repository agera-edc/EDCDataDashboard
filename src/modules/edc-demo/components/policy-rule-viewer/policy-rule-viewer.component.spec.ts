import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyRuleViewerComponent } from './policy-rule-viewer.component';

describe('PolicyPermissionViewerComponent', () => {
  let component: PolicyRuleViewerComponent;
  let fixture: ComponentFixture<PolicyRuleViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyRuleViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyRuleViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
