import { Component, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, EventApi, DateSelectArg, EventInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import { INITIAL_EVENTS, createEventId } from './evenlist';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

export class EventsListComponent {

  calendarOptions: CalendarOptions  = {
    plugins:[
      interactionPlugin,
      dayGridPlugin,
    ],
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    initialEvents: INITIAL_EVENTS,
    select: this.handleDateSelect.bind(this)
  }

  currentEvents: EventApi[] = [];

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

}

  // EVENTS = [
  //   {
  //     title: 'answer to god -> Pray',
  //     date: '2023-03-21'
  //   },
  //   {
  //     title: 'meet god',
  //     date: new Date()
  //   },
  //   {
  //     title: 'Event 1',
  //     start: '2023-03-22T14:00:00',
  //     end: '2023-03-22T16:00:00'
  //   },
  //   {
  //     title: 'Event 2',
  //     start: '2023-03-23T14:00:00',
  //     end: '2023-03-24T16:00:00'
  //   }
  // ];

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
