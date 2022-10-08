import { Component, OnInit } from "@angular/core";
import { ROUTES } from "./menu-item-entries";
import { MenuItem } from "./menu-item.model";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  // End open close
  ngOnInit() {
    this.menuItems = ROUTES.filter((sidebarnavItem) => sidebarnavItem);
  }
}
