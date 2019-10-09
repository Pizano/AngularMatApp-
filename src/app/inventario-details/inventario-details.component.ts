import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventarioService } from '../inventario.service'
import { Inventario } from '../inventario';
import { Location } from '@angular/common';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-inventario-details',
  templateUrl: './inventario-details.component.html',
  styleUrls: ['./inventario-details.component.css']
})
export class InventarioDetailsComponent implements OnInit {

  inventario : Inventario;
  public ownerForm: FormGroup;

  

  constructor(
    private route: ActivatedRoute,
    private service : InventarioService,
    private location : Location
  ) { }
  
  ngOnInit() {
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(99)]),
      weight: new FormControl('', [Validators.required, Validators.maxLength(59)]),
      symbol: new FormControl('', [Validators.required, Validators.maxLength(59)])
    });

    this.getHeroId(this.route.snapshot.paramMap.get('id'));
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.ownerForm.controls[controlName].hasError(errorName);
  }

  getHeroId(id) {
    console.log(id)
    this.service.getInventarioID(id).subscribe(response => this.inventario = response);
  }

  public actualizar = () => {
    if (this.ownerForm.valid) {
      let model: Inventario = {
        name: this.inventario.name,
        weight: this.inventario.weight,
        symbol: this.inventario.symbol,
        id: this.inventario.id
      }
      this.service.UpdateInventario(model)
        .subscribe(res => {
            //this is temporary, until we create our dialogs
            this.location.back();
          },
          (error => {
            //temporary as well
            this.location.back();
          })
        )

    }


  }
  public cancelar = () => {
    this.location.back();
  }

  keyPressName(event: any) {
    const pattern = /^[a-z\sñáéíóúü]+$/i;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {    
        // invalid character, prevent input
        event.preventDefault();
    }
  }

  keyPressWeight(event: any) {
    const pattern = /^\s*(?=.*[1-9])\d*(?:\.\d{1,8})?\s*$/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {    
        // invalid character, prevent input
        event.preventDefault();
    }
  }
  keyPressSymbol(event: any) {
    const pattern = /[a-zA-Z0-9 ]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {    
        // invalid character, prevent input
        event.preventDefault();
    }
  }

  

  
}
  


