import {TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {NavbarComponent} from "./navbar.component";

describe('NavbarComponent', () => {
    let component:any;

    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [NavbarComponent]});
    });

    beforeEach(() => {
        let fixture = TestBed.createComponent(NavbarComponent);
        fixture.detectChanges();

        component = fixture.componentInstance;
    });

    it('should instantiate component', () => {
        expect(component instanceof NavbarComponent).toBe(true, 'should create NavbarComponent');
    });

    it('should have expected <a> text', () => {
        let a = component.debugElement.query(By.css('a.navbar-brand')).nativeElement;
        expect(a.innerText).toMatch(/ngSpotify/i, '<a> should say something about "ngSpotify"');
    });
});
