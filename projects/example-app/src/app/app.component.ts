import { Component } from '@angular/core';
import { routeAnimation } from './core/animations/fade.anitmation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimation]
})
export class AppComponent {
  getRouterOutletState(outlet: any): any {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
