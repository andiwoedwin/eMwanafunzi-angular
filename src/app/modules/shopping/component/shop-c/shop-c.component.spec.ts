import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCComponent } from './shop-c.component';

describe('ShopCComponent', () => {
  let component: ShopCComponent;
  let fixture: ComponentFixture<ShopCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
