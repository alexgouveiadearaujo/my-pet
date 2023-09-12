import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPhotoGridComponent } from './animal-photo-grid.component';

describe('AnimalPhotoGridComponent', () => {
  let component: AnimalPhotoGridComponent;
  let fixture: ComponentFixture<AnimalPhotoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalPhotoGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalPhotoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
