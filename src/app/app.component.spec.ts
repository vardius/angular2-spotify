import {TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";

describe('AppComponent', () => {
    let component:any;

    beforeEach(() => {
        TestBed
            .initTestEnvironment(
                BrowserDynamicTestingModule,
                platformBrowserDynamicTesting()
            )
            .configureTestingModule({declarations: [AppComponent]});
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
