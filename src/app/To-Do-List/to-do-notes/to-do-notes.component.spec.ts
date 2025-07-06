import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoNotesComponent } from './to-do-notes.component';

describe('ToDoNotesComponent', () => {
  let component: ToDoNotesComponent;
  let fixture: ComponentFixture<ToDoNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
