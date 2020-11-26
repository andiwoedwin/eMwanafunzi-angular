import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDComponent } from './shop-d.component';

describe('ShopDComponent', () => {
  let component: ShopDComponent;
  let fixture: ComponentFixture<ShopDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
