import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {EditUserPageComponent} from '../../core/pages/edit-user-page/edit-user-page.component';

@Injectable({
  providedIn: 'root'
})
export class ExitEditPageGuard implements CanDeactivate<EditUserPageComponent> {

  canDeactivate(
    component: EditUserPageComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
