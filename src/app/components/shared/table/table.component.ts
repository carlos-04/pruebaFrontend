import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  faAngleDown = faAngleDown;
  @Input() ELEMENT_DATA:any;  
  displayedColumns: string[] = ['icon', 'personaNo', 'tipoDomi', 'calle', 'numero', 'sector', 'provicia','estado'];

  constructor() {}

  ngOnInit(): void {

  }
}