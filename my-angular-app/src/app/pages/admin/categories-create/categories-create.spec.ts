import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCreate } from './categories-create';

describe('CategoriesCreate', () => {
  let component: CategoriesCreate;
  let fixture: ComponentFixture<CategoriesCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
