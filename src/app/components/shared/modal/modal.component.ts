import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonModel } from 'src/app/model/PersonModel';
import { PersonService } from 'src/app/services/person.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})


export class ModalComponent implements OnInit {
  person: PersonModel = {
    icon: '../../../../assets/img/Icon - Location.png',
    personaNo: 0,
    tipoDomi: '',
    calle: '',
    numero: 0,
    sector: '',
    provicia: '',
    estado: ''
  }

  constructor(private servicePerson: PersonService) { }

  ngOnInit(): void {

  }

  guardar(form: NgForm) {

    if (form.invalid) {

      console.log('Formulario no valido');
      return;

    }


    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Cliente Agregado',
      showConfirmButton: false,
      timer: 1500
    })

    this.servicePerson.createPerson(this.person).subscribe(resp => {

      console.log(resp);
      this.person = resp;
      
      this.person = {
        icon: '../../../../assets/img/Icon - Location.png',
        personaNo: 0,
        tipoDomi: '',
        calle: '',
        numero: 0,
        sector: '',
        provicia: '',
        estado: ''
      }
    })


  
    

  }
}
