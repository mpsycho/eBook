import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCatalog } from './services-catalog';

describe('ServicesCatalog', () => {
  let component: ServicesCatalog;
  let fixture: ComponentFixture<ServicesCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesCatalog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesCatalog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
