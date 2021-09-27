import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Guid } from 'src/app/interfaces/guid';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/modules/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  productForm: FormGroup= this.fb.group({});
  idEdit: string = '';
  producto: Product | any;

  constructor(
    private fb: FormBuilder, 
    private productService: ProductsService, 
    private router: Router,
    private route: ActivatedRoute,){
    this.buildForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idEdit = params.id;
      this.fetchProduct(this.idEdit);
    });
  }

  fetchProduct(id: string){
    this.productService.getProduct(id).subscribe(product => {
      this.productForm.patchValue(product);
    });
  }

  buildForm(){
    this.productForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      description: ['', Validators.required],
      image: ['']
    });
  }

  saveProduct(event: Event){
    event.preventDefault();
    if(this.productForm.valid && this.idEdit === ''){
      this.producto = this.productForm.value;
      this.producto.id = Guid.newGuid();
      this.producto.image = 'assets/images/hoodie.png';
      this.productService.createProduct(this.producto).subscribe((newProduct) => {
          console.log(newProduct);
          this.router.navigate(['./admin/product-table']);
      });
    }else if (this.productForm.valid && this.idEdit !== '') {
      this.producto = this.productForm.value;
      this.productService.updateProduct(this.idEdit,this.producto).subscribe((editProduct) => {
        console.log(editProduct);
        this.router.navigate(['./admin/product-table']);
      });
    } else {
      console.log("Error");
    } 
  }

  
}
