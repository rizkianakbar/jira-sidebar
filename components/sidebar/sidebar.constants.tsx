import { SidebarData } from "./sidebar.types";

export const SIDEBAR = Object.freeze({
  SIZE_MIN: 150,
  SIZE_DEFAULT: 240,
  SIZE_MAX: 435,
  COLOR_ICON: "#9fadbc",
});

export const STORAGE = Object.freeze({
  NAME: "mySidebarData",
  VALUE_DEFAULT: {
    isSidebarOpen: true,
    size: SIDEBAR.SIZE_DEFAULT,
  } as SidebarData,
});
