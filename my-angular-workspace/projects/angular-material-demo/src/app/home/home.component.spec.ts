import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent,BrowserAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('cart title test',()=>{
    it('Expecting Amazon Cart',()=>{
      expect(component.Title()).toBe('Amazon Cart')
    })
  })

  describe('Total test',()=>{
    it('Total must be 50',()=>{
      expect(component.Total(10,5)).toBe(50)
    })
  })
});
