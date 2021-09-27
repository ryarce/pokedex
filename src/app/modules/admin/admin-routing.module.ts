import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductTableComponent } from './components/product-table/product-table.component';

const routes: Routes = [

  {
    path:'',
    component: NavComponent,
    children: [
      {
        path: 'product-table',
        component: ProductTableComponent
      },
      {
        path: 'product-dashboard',
        component: ProductDashboardComponent
      },
      {
        path: 'product-form',
        component: ProductFormComponent
      },
      {
        path: 'product-form/:id',
        component: ProductFormComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
