import { MenuItem } from "./menu-item.model";

export const ROUTES: MenuItem[] = [
  {
    path: "/exams",
    title: "exam.list.shortcut",
    icon: "pi pi-file-o",
    class: "",
    extralink: false,
  },
  {
    path: "/tasks",
    title: "taskList.titel",
    icon: "pi pi-check-square",
    class: "",
    extralink: false,
  },
  {
    path: "/about",
    title: "about.titel",
    icon: "pi pi-users",
    class: "",
    extralink: false,
  },
];
