import { NgModule } from '@angular/core';
import { MvpRoutingModule } from './mvp-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { Mvp1Component } from './pages/mvp-1/mvp-1.component';
import { NgxsModule } from '@ngxs/store';
import { MvpState } from './store';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PartnerCarouselComponent } from './partner-carousel/partner-carousel.component';
import { TextboxComponent } from './textbox/textbox.component';
import { BreakerComponent } from './breaker/breaker.component';
import { BreakerGreenComponent } from './breaker-green/breaker-green.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';

@NgModule({
  declarations: [
    Mvp1Component,
    NavigationMenuComponent,
    AccordionComponent,
    CarouselComponent,
    PartnerCarouselComponent,
    TextboxComponent,
    BreakerComponent,
    BreakerGreenComponent,
    FooterComponent,
    PrivacyComponent,
    TermsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    MvpRoutingModule,
    NgxsModule.forFeature([MvpState]),
  ],
  exports: [MvpRoutingModule],
})
export class MvpModule {}
