import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { PersonService } from 'src/app/services/person.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faPlus = faPlus;
  faSearch = faSearch; 
  ELEMENT_DATA:PeriodicElement[] = [];  
  displayedColumns: string[] = ['icon', 'personaNo', 'tipoDomi', 'calle', 'numero', 'sector', 'provicia','estado'];
  termino:string = '';

  //datos pagination
  dataSource = new MatTableDataSource<PeriodicElement>();
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private listPerson: PersonService) { }
   
  ngOnInit(): void {
    this.getPerson()
  }

  getPerson() {
    this.listPerson.getAllPerson().subscribe((data:any) => {   
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }
  getPersonFilter(event:string) {
    this.listPerson.getFilterPerson(this.termino).subscribe((data:any) => {
      this.dataSource.filter = event.trim().toLowerCase();
      console.log(this.dataSource)
    })
  }
}

export interface PeriodicElement {
  id?: number;
  icon: string,
  personaNo:number,
  tipoDomi: string,
  calle:string ,
  numero: number,
  sector: string,
  provicia: string,
  estado: string
}

