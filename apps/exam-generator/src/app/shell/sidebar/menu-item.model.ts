// Sidebar route metadata
export interface MenuItem {
  path: string;
  title: string;
  icon: string;
  class: string;
  extralink: boolean;
}

export interface MenuCategory {
  title: string;
  icon?: string;
  class?: string;
  routes: MenuItem[]
}
