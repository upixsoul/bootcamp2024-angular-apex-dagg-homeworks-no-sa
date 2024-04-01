import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleListsConditionalComponent } from './multiple-lists-conditional.component';

describe('MultipleListsConditionalComponent', () => {
  let component: MultipleListsConditionalComponent;
  let fixture: ComponentFixture<MultipleListsConditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultipleListsConditionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleListsConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
