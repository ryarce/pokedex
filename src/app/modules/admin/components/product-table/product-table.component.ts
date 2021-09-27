import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/modules/core/services/products/products.service';
import { ProductTableDataSource, ProductTableItem } from './product-table-datasource';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ProductTableItem>;
  dataSource: ProductTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];


  products: Product[] | any;
  constructor(private productsService: ProductsService) {
    this.dataSource = new ProductTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngOnInit(){
    debugger;
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string){
    this.productsService.deleteProduct(id).subscribe(
      respuesta => {
        if (respuesta) {
          let index = this.products.findIndex( (p: Product) => p.id === id);
          this.products.splice(index, 1);
          this.products = [...this.products];
        }
      },
      e => console.log(e),
      () => console.log('acá qué?')
    );
  }
}
