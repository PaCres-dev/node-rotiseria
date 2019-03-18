import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MessageService } from '../../services/messages/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	forma:FormGroup;

	usuario:Object = {
	   	nombre: "",
	    apellido: "",
	    email: "",
	    asunto: "",
	    mensaje: ""
	}

	success:any = "";

  	constructor(public _MessageService: MessageService) {
  		this.forma = new FormGroup(
  		{
      		'nombre': new FormControl('' ,  [ Validators.required,  Validators.minLength(5) ]),
      		'apellido': new FormControl('',   Validators.required ),
      		'email': new FormControl('', [ Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      		'asunto' : new FormControl('' , Validators.required ),
      		'mensaje' : new FormControl('' , [ Validators.required,  Validators.maxLength(300) ] )
    	});

    	this.forma.setValue(this.usuario);
   	}

	ngOnInit() {
	}

	contact(form)
	{
     	console.log( this.forma.value );
     	console.log( this.forma );
     	this._MessageService.sendMessage(form)
     	.subscribe(res => {console.log('subscribe')});
     	this.forma.reset({
	       	'nombre'   : "",
	       	'apellido' : "",
	       	'email'    : "",
	       	'asunto'   : "",
	    	'mensaje'  : ""
	    });
		this.success = "MENSAJE ENVIADO";
	}
}