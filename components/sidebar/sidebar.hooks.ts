import { MutableRefObject, useState } from "react";

import { SidebarData } from "./sidebar.types";
import { SIDEBAR, STORAGE } from "./sidebar.constants";

const useSidebar = (
  sidebarRef: MutableRefObject<HTMLDivElement | null> | undefined = undefined
) => {
  const [sidebarData, setSidebarData] = useState<SidebarData>(
    STORAGE.VALUE_DEFAULT
  );

  const openSidebar = async () => {
    const newSidebarData = { isSidebarOpen: true, size: SIDEBAR.SIZE_DEFAULT };
    setSidebarData(newSidebarData);
    _putWidth(SIDEBAR.SIZE_DEFAULT);
    await _removeAnimable();
    _animateMain(SIDEBAR.SIZE_DEFAULT);
  };

  const closeSidebar = async () => {
    const newSidebarData = { isSidebarOpen: false, size: SIDEBAR.SIZE_MIN };
    _stopResize();
    _animateMain(20);

    setSidebarData(newSidebarData);
    await _addAnimable();
  };

  const resizeSidebar = () => {
    window.addEventListener("mousemove", _resizing);
    window.addEventListener("mouseup", _stopResize);
  };

  const _stopResize = () => {
    window.removeEventListener("mousemove", _resizing);
    window.removeEventListener("mouseup", _stopResize);
  };

  const _resizing = (e: MouseEvent) => {
    if (!sidebarRef || !sidebarRef.current) return;
    let newWidth = e.clientX - sidebarRef.current.offsetLeft;

    if (!sidebarData.isSidebarOpen) return;
    if (newWidth < SIDEBAR.SIZE_MIN) return closeSidebar();
    if (newWidth > SIDEBAR.SIZE_MAX) newWidth = SIDEBAR.SIZE_MAX;

    _putWidth(newWidth);
    _animateMain(newWidth);
    setSidebarData((prevSidebarData) => {
      const updatedSidebarData = { ...prevSidebarData, size: newWidth };
      return updatedSidebarData;
    });
  };

  const _putWidth = (newWidth: number) => {
    if (!sidebarRef || !sidebarRef.current) return;
    sidebarRef.current.style.width = `${newWidth}px`;
  };

  const _animateMain = (newWidth: number) => {
    const mainElement = document.getElementById("main");
    if (mainElement) {
      mainElement.style.transition = "margin-left 0.2s ease-in-out";
      mainElement.style.marginLeft = `${newWidth}px`;
    }
  };

  const _addAnimable = (): Promise<void> => {
    if (!sidebarRef || !sidebarRef.current) return Promise.resolve();

    return new Promise((resolve) => {
      setTimeout(() => {
        sidebarRef.current!.classList.add("animable");
        resolve();
      }, 100);
    });
  };

  const _removeAnimable = (): Promise<void> => {
    if (!sidebarRef || !sidebarRef.current) return Promise.resolve();
    return new Promise((resolve) => {
      sidebarRef.current!.classList.remove("animable");
      resolve();
    });
  };

  return {
    isSidebarOpen: sidebarData.isSidebarOpen,
    size: sidebarData.size,
    openSidebar,
    closeSidebar,
    resizeSidebar,
  };
};

export default useSidebar;
