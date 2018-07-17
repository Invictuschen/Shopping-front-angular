import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CabinetListComponent} from './projects/cabinet/cabinet-list/cabinet-list.component';

const routes: Routes = [
  {
    path: 'cabinets',
    component: CabinetListComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{};
