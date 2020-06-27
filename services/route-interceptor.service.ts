import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, RouterEvent } from '@angular/router';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class RouteInterceptorService {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly state: StateService,
  ) {
    this.router.events.subscribe((evt: RouterEvent) => {
      console.log('event', evt);

      if (evt instanceof NavigationStart) {
        if (this.state.modalOpen) {
          const parts = evt.url.match(/\/([^(]+)\(([^:]+):([^)]+)\)/);
          console.log('parts', parts);
          if (parts && parts.length === 4) {
            const path = parts[1];
            const outletName = parts[2];
            const outletPath = parts[3];

            const route = this.router.config.filter((r) => r.path === path)[0];

            const outletRoute = this.router.config.filter((r) => r.path === path && r.outlet === 'modal-content')[0];
            console.log(route, outletRoute);

            if (!outletRoute) {
              this.router.config.unshift({
                path: route.path,
                outlet: 'modal-content',
                component: route.component,
              });
            }
          }
        }
        // if (evt.)
        const namedOutletParts = evt.url.match(/\/\(([^:]+):([^)]+)\)/);
        console.log(this.router);
        console.log('named parts', namedOutletParts);
      }
    });
  }
}
