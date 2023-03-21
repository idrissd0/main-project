import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {

  ladate: Date = new Date();

  EVENTS = [
    {
      title: 'answer to god -> Pray',
      date: '2023-03-21'
    },
    {
      title: 'meet god',
      date: new Date()
    },
    {
      title: 'Event 1',
      start: '2023-03-22T14:00:00',
      end: '2023-03-22T16:00:00'
    },
    {
      title: 'Event 2',
      start: '2023-03-23T14:00:00',
      end: '2023-03-24T16:00:00'
    }
  ];

  constructor( ) {

  }

  calendarOptions: CalendarOptions  = {
    plugins:[dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: this.EVENTS
  }

}



//consume json data events
// import { HttpClient } from '@angular/common/http';
// @Component({
//   selector: 'app-events-list',
//   templateUrl: './events-list.component.html',
//   styleUrls: ['./events-list.component.css']
// })
// export class EventsListComponent {

//   constructor(private http: HttpClient) { }

//   events!: any[];

//   ngOnInit() {
//     this.http.get("eventsList.json").subscribe(data => {
//       this.events = data.events;
//     });
//   }

//   calendarOptions: CalendarOptions = {
//     initialView: 'dayGridMonth',
//     headerToolbar: {
//       left: 'prev,next today',
//       center: 'title',
//       right: 'dayGridMonth,timeGridWeek,timeGridDay'
//     },
//     eventColor: '#378006',
//     eventTextColor: '#fff',
//     eventClick: (info) => {
//       console.log(info.event.title);
//     }
//   };
// }
