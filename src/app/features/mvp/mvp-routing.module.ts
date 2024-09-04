import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mvp1Component } from './pages/mvp-1/mvp-1.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Mvp1Component,
  },
  { path: 'terms-of-service', pathMatch: 'full', component: TermsComponent },
  { path: 'privacy-policy', pathMatch: 'full', component: PrivacyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MvpRoutingModule {}
