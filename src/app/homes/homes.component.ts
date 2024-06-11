import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var gtag;

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html'
})
export class HomesComponent implements OnInit {

  homeTypeDropdownOpen = false;

  currentHomeTypeFilters = [];

  homes$ = this.dataService.homes$;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const homeTypeFilters = params['home-type'] || [];
      this.dataService.loadHomes(homeTypeFilters);
      this.currentHomeTypeFilters = homeTypeFilters;
      
    });

    
  }

  homeTypeFilterApplied($event) {
    this.homeTypeDropdownOpen = false;
    this.router.navigate(['homes'], { queryParams: { 'home-type': $event } });
  }

  trackMe() {
    gtag('event', 'click', {
      'event_category': 'DATE_BUTTON_CLICK',
      'event_label': 'Dates button cliked',
      'value': 'Dates button has been clicked'   })
      console.log('event called');
  }
}


