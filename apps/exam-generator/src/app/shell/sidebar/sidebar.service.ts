import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuCategory, MenuItem } from "./menu-item.model";
import { ROUTES } from './menu-item-entries';


@Injectable({
    providedIn: 'root'
})
export class VerticalSidebarService {

    public screenWidth: any;
    public collapseSidebar: boolean = false;
    public fullScreen: boolean = false;

    MENUITEMS: MenuCategory[] = ROUTES;

    items = new BehaviorSubject<MenuCategory[]>(this.MENUITEMS);

    constructor() {
    }
}
