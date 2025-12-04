import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCatalog } from './service-catalog';

describe('ServiceCatalog', () => {
  let component: ServiceCatalog;
  let fixture: ComponentFixture<ServiceCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceCatalog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCatalog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
