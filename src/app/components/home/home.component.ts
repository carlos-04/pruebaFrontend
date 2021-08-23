import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { PersonService } from 'src/app/services/person.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faPlus = faPlus;

  constructor(private servicePerson: PersonService) { }
   

  ngOnInit(): void {
    this.getPersonFilter()
    
  }

  getPersonFilter(termino:string = "Oficina Principal" ) {
    this.servicePerson.getFilterPerson(termino).subscribe((data:any) => {
     console.log(data);


    })
  }



}
