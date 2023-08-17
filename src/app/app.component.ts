import { Component, OnInit, inject } from '@angular/core';
import { Ticket } from './model/ticket';
import { IBtn, IBtnGroupOutput } from './common/btn-group/btn-group.component';
import { BaseService } from './service/base.service';
import { TicketService } from './service/ticket.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ticketService: TicketService = inject(TicketService);

  title = 'angular-directives';

  isSearchBarVisible: boolean = false;

  filterPhrase: string = '';

  tickets: Ticket[] = [
    {
      id: 1,
      checked: false,
      flightNumber: 'WA12345',
      seat: 'D3',
      service: 'tourist',
    },
    {
      id: 2,
      checked: true,
      flightNumber: 'WA12345',
      seat: 'D4',
      service: 'tourist',
    },
    {
      id: 3,
      checked: false,
      flightNumber: 'WA12345',
      seat: 'F5',
      service: 'tourist',
    },
  ];

  btnGroup: IBtn[] = [
    { name: 'show', type: 'info', icon: 'fa-eye' },
    { name: 'remove', type: 'danger', icon: 'fa-trash' },
  ];

  tickets$ = this.ticketService.list$;

  selectedTicket$ = this.ticketService.one$;

  ngOnInit(): void {
    this.ticketService.dispatch('getAll');

    this.selectedTicket$.subscribe( console.log );
  }

  toggleSearchBar(): void {
    this.isSearchBarVisible = !this.isSearchBarVisible;
  }

  onGroupClick(details: IBtnGroupOutput) {
    switch(details.name) {
      case 'remove':
        this.ticketService.dispatch('delete', (details.data as Ticket));
        break;
      case 'show':
        this.ticketService.dispatch('get', details.data.id);
        break;
    }
  }

}
