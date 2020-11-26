import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAComponent } from './shop-a.component';

describe('ShopAComponent', () => {
  let component: ShopAComponent;
  let fixture: ComponentFixture<ShopAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
