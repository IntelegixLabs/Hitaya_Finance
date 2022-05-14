import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { IndexComponent } from './index/index.component';
import { Itr1Component } from './itr1/itr1.component';
import { Itr2Component } from './itr2/itr2.component';
import { Itr3Component } from './itr3/itr3.component';
import { Itr4Component } from './itr4/itr4.component';
import { Itr5Component } from './itr5/itr5.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaxBenefitFormComponent } from './tax-benefit-form/tax-benefit-form.component';
import { TaxBenefitComponent } from './tax-benefit/tax-benefit.component';
import { IncomeTaxCalculatorComponent } from './income-tax-calculator/income-tax-calculator.component';

import { CryptoDataComponent } from './crypto-data/crypto-data.component';
import { StockDataComponent } from './stock-data/stock-data.component';
import { SavingAnalysisComponent } from './saving-analysis/saving-analysis.component';


const routes: Routes = [
  { path: '', component: LoadingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent/*, canActivate: [AuthGuardService] */ },
  { path: 'index', component: IndexComponent/*, canActivate: [AuthGuardService] */ },
  { path: 'itr1', component: Itr1Component/*, canActivate: [AuthGuardService] */ },
  { path: 'itr2', component: Itr2Component/*, canActivate: [AuthGuardService] */ },
  { path: 'itr3', component: Itr3Component/*, canActivate: [AuthGuardService] */ },
  { path: 'itr4', component: Itr4Component/*, canActivate: [AuthGuardService] */ },
  { path: 'itr5', component: Itr5Component/*, canActivate: [AuthGuardService] */ },
  { path: 'dashboard', component: DashboardComponent/*, canActivate: [AuthGuardService] */ },
  { path: 'tax-benefit-form', component: TaxBenefitFormComponent/*, canActivate: [AuthGuardService] */ },
  { path: 'tax-benefit', component: TaxBenefitComponent/*, canActivate: [AuthGuardService] */ },
  { path: 'income-tax-calculator', component: IncomeTaxCalculatorComponent/*, canActivate: [AuthGuardService] */ },
  { path: 'crypto', component: CryptoDataComponent /*, canActivate: [AuthGuardService] */ },
  { path: 'stock', component: StockDataComponent /*, canActivate: [AuthGuardService] */ },
  { path: 'saving-analysis', component: SavingAnalysisComponent /*, canActivate: [AuthGuardService] */ },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
