import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRecordsPanelComponent } from './contact-records-panel.component';

describe('ContactRecordsPanelComponent', () => {
  let component: ContactRecordsPanelComponent;
  let fixture: ComponentFixture<ContactRecordsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactRecordsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRecordsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
