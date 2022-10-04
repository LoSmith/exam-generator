import { MenuCategory, MenuItem } from "./menu-item.model";

export const ROUTES: MenuCategory[] = [
  {
    title: "Pages",
    routes: [
      {
        path: '/task-list',
        title: 'Task list',
        icon: 'pi pi-book',
        class: '',
        extralink: false,
      },
      {
        path: '/about',
        title: 'About',
        icon: 'pi pi-users',
        class: '',
        extralink: false,
      }
    ]
  }
];
