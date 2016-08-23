import {TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";

describe('AppComponent', () => {
    let component:any;

    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [AppComponent]});
    });

    beforeEach(() => {
        let fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        component = fixture.componentInstance;
    });

    it('should instantiate component', () => {
        expect(component instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
});
