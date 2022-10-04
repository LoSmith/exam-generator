import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from './menu-item.model';
import { ROUTES } from './menu-item-entries';


@Injectable({
    providedIn: 'root'
})
export class VerticalSidebarService {

    public screenWidth: any;
    public collapseSidebar: boolean = false;
    public fullScreen: boolean = false;

    MENUITEMS: MenuItem[] = ROUTES;

    items = new BehaviorSubject<MenuItem[]>(this.MENUITEMS);

    constructor() {
    }
}
