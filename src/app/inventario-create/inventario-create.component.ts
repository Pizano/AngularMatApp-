import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventarioService } from '../inventario.service'
import { Inventario } from '../inventario';
import { Location } from '@angular/common';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-inventario-create',
  templateUrl: './inventario-create.component.html',
  styleUrls: ['./inventario-create.component.css']
})
export class InventarioCreateComponent implements OnInit {

  inventario: Inventario = {
    name: "",
    weight: 0,
    symbol: "",
    id: null
  }
  public ownerForm: FormGroup;

  constructor(
    private service : InventarioService,
    private location : Location
  ) { }
  
  ngOnInit() {
    
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(99)]),
      weight: new FormControl('', [Validators.required, Validators.maxLength(59)]),
      symbol: new FormControl('', [Validators.required, Validators.maxLength(59)])
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.ownerForm.controls[controlName].hasError(errorName);
  }

  public crear = () => {
    if (this.ownerForm.valid) {
      let model: Inventario = {
        name: this.inventario.name,
        weight: this.inventario.weight,
        symbol: this.inventario.symbol,
        id: 0
      }
      this.service.PostInventario(model)
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
