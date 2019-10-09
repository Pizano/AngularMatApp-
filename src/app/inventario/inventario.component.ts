import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { InventarioService } from '../inventario.service';
import { Inventario } from '../inventario';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material';
 

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})

export class InventarioComponent implements OnInit {

  mode = '';
  dataSource = new MatTableDataSource<Inventario>();
  displayedColumns: string[] = ['name', 'weight', 'symbol', 'Editar', 'Eliminar'];

  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  @ViewChild('callAPIDialog',{static: true}) callAPIDialog: TemplateRef<any>;

  constructor(
    private InventarioService: InventarioService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.mode = 'indeterminate';
    this.getInventario();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getInventario(): void {
    console.log("swdasdadasdasd")
    this.InventarioService.getInventario()
      .subscribe(response => {
        this.dataSource.data = response as Inventario[];
        this.mode = 'determinate'
      })
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id :number) {
    console.log(id);
    let dialogRef = this.dialog.open(this.callAPIDialog);
    dialogRef.afterClosed().subscribe(result => {
        // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
        if (result !== undefined) {
            if (result === 'yes') {
                // TODO: Replace the following line with your code.
                console.log('User clicked yes.');
                this.InventarioService.DeleteInventario(id)
                .subscribe(response => {
                 this.getInventario();
                })
            } else if (result === 'no') {
                // TODO: Replace the following line with your code.
                console.log('User clicked no.');
            }
        }
    })
}


}
