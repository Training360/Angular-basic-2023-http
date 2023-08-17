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

  ngOnInit(): void {
    this.ticketService.dispatch('getAll');
  }

  toggleSearchBar(): void {
    this.isSearchBarVisible = !this.isSearchBarVisible;
  }

  onGroupClick(details: IBtnGroupOutput) {
    this.ticketService.dispatch('delete', (details.data as Ticket));
  }

}
