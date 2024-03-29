import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import * as moment from 'moment';
import { AppComponent, CalendarDate } from './app.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  describe('Select date', () => {
    it ('should emit date when selected', () => {
      let selectedDate: CalendarDate = {
        selected: false,
        today: false,
        mDate: moment()
      };
      component.onSelectDate.subscribe(x => selectedDate = x);
      component.selectDate(selectedDate);
      const isSame = moment(selectedDate.mDate).isSame(moment(selectedDate.mDate), 'day');
      expect(isSame).toBeTruthy();
    });
  });

  describe('Calendar grid generation', () => {

    it('should generate 6 weeks', () => {
      component.generateCalendar();
      fixture.detectChanges();
      expect(component.weeks.length).toEqual(6);
    });

    it('should generate Feb 2017 correctly', () => {
      component.currentDate = moment('2017-02-05');
      component.generateCalendar();
      fixture.detectChanges();
      expect(component.weeks[0][0].mDate.date()).toEqual(29);
      expect(component.weeks[5][6].mDate.date()).toEqual(11);
    });
  });

  describe('Year navigation', () => {
    it('should go forward 1 year', () => {
      component.currentDate = moment('2017-09-10');
      fixture.detectChanges();
      component.nextYear();
      fixture.detectChanges();
      expect(component.currentDate.year()).toEqual(2018);
    });
    it('should go backward 1 year', () => {
      component.currentDate = moment('2017-09-10');
      fixture.detectChanges();
      component.prevYear();
      fixture.detectChanges();
      expect(component.currentDate.year()).toEqual(2016);
    });
  });

  describe('Month navigation', () => {
    it('should go forward 1', () => {
      component.currentDate = moment('2017-09-10');
      fixture.detectChanges();
      component.nextMonth();
      fixture.detectChanges();
      expect(component.currentDate.month()).toEqual(9);
    });
    it('should go backward 1', () => {
      component.currentDate = moment('2017-09-10');
      fixture.detectChanges();
      component.prevMonth();
      fixture.detectChanges();
      expect(component.currentDate.month()).toEqual(7);
    });
    it('should go to january', () => {
      component.currentDate = moment('2017-09-10');
      fixture.detectChanges();
      component.firstMonth();
      fixture.detectChanges();
      expect(component.currentDate.month()).toEqual(0);
    });
    it('should go to december', () => {
      component.currentDate = moment('2017-09-10');
      fixture.detectChanges();
      component.lastMonth();
      fixture.detectChanges();
      expect(component.currentDate.month()).toEqual(11);
    });
  });


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});



