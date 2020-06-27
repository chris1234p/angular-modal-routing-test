import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { NumberFourComponent } from './number-four/number-four.component';
import { NumberOneComponent } from './number-one/number-one.component';
import { NumberThreeComponent } from './number-three/number-three.component';
import { NumberTwoComponent } from './number-two/number-two.component';

const routes: Routes = [
  {
    path: '',
    component: NumberOneComponent,
  },
  {
    path: 'number-two',
    component: NumberTwoComponent,
  },
  {
    path: 'number-three',
    component: NumberThreeComponent,
  },
  {
    path: 'number-four',
    component: NumberFourComponent,
  },
  {
    path: 'modal',
    component: ModalComponent,
    outlet: 'modal-container',
    children: [
      {
        path: '',
        component: NumberOneComponent,
        outlet: 'modal-content',
      },
      {
        path: 'number-two',
        component: NumberTwoComponent,
        outlet: 'modal-content',
      },
    ],
  },
  {
    path: '',
    component: NumberOneComponent,
    outlet: 'modal-content',
  },
  {
    path: 'number-two',
    component: NumberTwoComponent,
    outlet: 'modal-content',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
