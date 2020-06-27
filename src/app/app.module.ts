import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouteInterceptorService } from 'services/route-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberFourComponent } from './number-four/number-four.component';
import { NumberOneComponent } from './number-one/number-one.component';
import { NumberThreeComponent } from './number-three/number-three.component';
import { NumberTwoComponent } from './number-two/number-two.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [AppComponent, NumberOneComponent, NumberTwoComponent, NumberThreeComponent, NumberFourComponent, ModalComponent],
  imports: [BrowserModule, AppRoutingModule, ModalModule.forRoot()],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      // initialize route interceptor at app init
      deps: [RouteInterceptorService],
      useFactory: (routeInterceptorService: RouteInterceptorService) => () => undefined,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
