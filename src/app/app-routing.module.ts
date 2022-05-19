import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },

  {
    path: 'alerta',
    loadChildren: () => import('./pages/includes/alerta/alerta.module').then( m => m.AlertaPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/includes/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
