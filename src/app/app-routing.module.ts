import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path:'',
        redirectTo:'/poke-home',
        pathMatch: 'full',
      },
      {
        path:'poke-home',
        loadChildren: () => import('./modules/poke-home/poke-home.module').then(m => m.PokeHomeModule)
      }
    ]
  },
  {
    path:'**',
    component: ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
