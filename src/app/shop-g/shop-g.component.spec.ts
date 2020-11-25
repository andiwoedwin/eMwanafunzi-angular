import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGComponent } from './shop-g.component';

describe('ShopGComponent', () => {
  let component: ShopGComponent;
  let fixture: ComponentFixture<ShopGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
