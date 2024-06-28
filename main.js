import { setTime } from "./modules/taskbar.js";
import { menuHandler } from "./modules/menu.js";
import { createMenuItemFolder, createMenuItem } from "./modules/menu.js";
import { highlightOnClick, openApps } from "./modules/apps.js";
import { createDesktopApps } from "./modules/dom-utils.js";

// Get the current time
setTime();

// Handle Start Menu
menuHandler();

// Create Start Menu Items
createMenuItemFolder();
createMenuItem();

// Create Desktop Apps
createDesktopApps();

// Highlight Desktop Apps on Single Click
highlightOnClick();

// Create and Open Desktop Apps on Double Click
openApps();
