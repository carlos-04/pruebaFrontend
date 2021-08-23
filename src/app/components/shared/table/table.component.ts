import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {  MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  faAngleDown = faAngleDown;
  ELEMENT_DATA:PeriodicElement[] = [];  
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  displayedColumns: string[] = ['icon', 'personaNo', 'tipoDomi', 'calle', 'numero', 'sector', 'provicia','estado'];

  page:number = 1;
  mostrar:number = 10
  
     //variables de la paginacion
    
    pageSize: number = 5;
    pageIndex: number = 0;
    length: number = 0;
    pageEvent?: PageEvent;


  constructor(private listPerson: PersonService) {}

  ngOnInit(): void {
   
    this.getPerson()
 
  }


  getPerson(event?:PageEvent) {
    this.pageIndex = event ? event.pageIndex : 1;
    this.pageSize = event ? event.pageSize : 5;

    this.listPerson.getAllPerson(this.pageIndex, this.mostrar).subscribe((data:any) => {      
      this.ELEMENT_DATA = data;
      console.log(this.ELEMENT_DATA);
      
    })
  }
}


export interface PeriodicElement {

  icon: string,
  personaNo:number,
  tipoDomi: string,
  calle:string ,
  numero: number,
  sector: string,
  provicia: string,
  estado: string
}

