import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-pricing-page',
    templateUrl: './pricing-page.component.html',
    styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent {

    title = 'Our Pricing Plan - Tartu';

    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}