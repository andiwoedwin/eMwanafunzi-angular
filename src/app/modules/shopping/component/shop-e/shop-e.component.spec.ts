import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopEComponent } from './shop-e.component';

describe('ShopEComponent', () => {
  let component: ShopEComponent;
  let fixture: ComponentFixture<ShopEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
