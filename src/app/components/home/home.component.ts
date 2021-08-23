import { Component, OnInit } from '@angular/core';
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
  persona:any[] = [];
  termino:string = '';
  constructor(private servicePerson: PersonService) { }
   
  ngOnInit(): void {
   
  }

  getPersonFilter() {
    this.servicePerson.getFilterPerson(this.termino).subscribe((data:any) => {
      this.persona = data;
     console.log(data);
    })
  }



}
