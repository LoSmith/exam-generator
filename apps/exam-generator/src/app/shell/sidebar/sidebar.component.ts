import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES } from './menu-item-entries';
import { MenuCategory, MenuItem } from "./menu-item.model";
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//declare var $: any;

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  showMenu = "";
  showSubMenu = "";
  public menuItems: MenuCategory[] = [];
  // this is for the open close
  addExpandClass(element: string) {
    if (element === this.showMenu) {
      this.showMenu = "0";
    } else {
      this.showMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // End open close
  ngOnInit() {
    this.menuItems = ROUTES.filter((sidebarnavItem) => sidebarnavItem);
  }
}
