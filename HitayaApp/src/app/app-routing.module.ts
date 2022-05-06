import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoadingComponent } from './loading/loading.component';
import { RegistrationComponent } from './registration/registration.component';
import { WalletComponent } from './wallet/wallet.component';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', component: LoadingComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'wallet', component: WalletComponent/*, canActivate: [AuthGuardService] */ },
  { path: 'edit-user', component: EditUserDetailsComponent/*, canActivate: [AuthGuardService]*/ },
  { path: 'user-dashboard', component: UserDashboardComponent/*, canActivate: [AuthGuardService] */ },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
