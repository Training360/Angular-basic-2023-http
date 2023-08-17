import { Component, OnInit, inject } from '@angular/core';
import { Ticket } from './model/ticket';
import { IBtn, IBtnGroupOutput } from './common/btn-group/btn-group.component';
import { BaseService } from './service/base.service';
import { TicketService } from './service/ticket.service';

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
  ]

  ngOnInit(): void {
    const testTicket: Ticket = {
      flightNumber: 'ts345',
      seat: 'D6',
      service: 'business',
      checked: false,
    };

    this.ticketService.create(testTicket).subscribe(
      ticket => console.log('Ticket created: ', ticket)
    );

    this.ticketService.getAll().subscribe(
      tickets => console.log(tickets)
    );
  }

  toggleSearchBar(): void {
    this.isSearchBarVisible = !this.isSearchBarVisible;
  }

  onGroupClick(details: IBtnGroupOutput) {
    if (details.name === 'remove') {
      const index = this.tickets.findIndex(ticket => ticket === details.data);
      if (index > -1) {
        this.tickets.splice(index, 1);
      }
    }
  }

}
