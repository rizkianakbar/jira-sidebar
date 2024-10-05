"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";
import useSidebar from "./sidebar.hooks";
import { CaretIcon } from "./sidebar.icons";

export const Sidebar = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const { isSidebarOpen, resizeSidebar, openSidebar, closeSidebar } =
    useSidebar(sidebarRef);

  return (
    <aside
      ref={sidebarRef}
      className={cn(
        "group fixed left-0 select-none bg-background w-[240px] min-w-[20px] max-w-[535px]",
        !isSidebarOpen ? "fixed top-0 left-0 !w-[20px] h-full z-[9985]" : ""
      )}
    >
      <div className="relative">
        <div
          onMouseDown={resizeSidebar}
          className={cn(
            "absolute top-0 bottom-0 right-[-21px] w-[24px] z-[9990] transition-colors duration-200 ease-in-out",
            isSidebarOpen ? "cursor-ew-resize" : "cursor-default"
          )}
        >
          <div
            className={cn(
              "absolute top-0 bottom-0 left-0 w-[3px] z-[9995] bg-[#282e33] transition-colors duration-200 ease-in-out",
              !isSidebarOpen ? "hover:bg-[#282e33]" : "hover:bg-[#579DFF]"
            )}
          />
        </div>

        <button
          type="button"
          className={cn(
            "absolute top-10 right-[-10px] z-[9999] flex items-center justify-center w-[24px] h-[24px] bg-[#282e33] text-white/40 active:bg-[#85b8ff] hover:bg-primary group-hover:opacity-100 appearance-none user-select-none rounded-full border-none !cursor-pointer transition-all duration-200 ease-in-out",
            isSidebarOpen ? "cursor-ew-resize" : "cursor-ew-resize"
          )}
          onClick={isSidebarOpen ? closeSidebar : openSidebar}
        >
          <CaretIcon direction={isSidebarOpen ? "left" : "right"} />
        </button>

        <div className="relative overflow-hidden h-screen">
          <div
            className={cn(
              "absolute top-0 bottom-0 left-0 w-full min-w-[240px] overflow-y-auto transition-transform duration-200 ease-in-out",
              !isSidebarOpen
                ? "pointer-events-none group-hover:pointer-events-auto"
                : ""
            )}
          >
            <div className="py-8 flex flex-col h-full gap-6">{children}</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export const SidebarHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="flex items-center gap-2 px-6">
    <div className="w-8 h-8 rounded-lg bg-[#253958] p-4" />

    <div className={cn("flex flex-col", className)}>{props.children}</div>
  </div>
);

export const SidebarTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("text-white text-sm font-semibold", className)}
    {...props}
  />
);

export const SidebarDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("text-white/40 text-xs", className)} {...props} />
);

export const SidebarContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col gap-3", className)} {...props} />
);

export const SidebarGroup = ({
  className,
  title,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { title: string }) => (
  <>
    <div
      className={cn(
        "text-xs font-semibold text-[#9CA9B9] uppercase px-6",
        className
      )}
      {...props}
    >
      {title}
    </div>

    <div className="pl-2 pr-3 -mt-1">{props.children}</div>
  </>
);

export const SidebarItem = ({
  className,
  active,
  icon: Icon,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  active?: boolean;
  icon?: () => JSX.Element;
}) => (
  <div
    className={cn(
      "py-2 rounded-lg text-[#9CA9B9] px-3.5 cursor-pointer hover:bg-[#1C2B41] text-sm flex items-center gap-3",
      active ? "bg-[#1C2B41] text-primary" : "",
      className
    )}
    {...props}
  >
    {Icon && <Icon />}
    {props.children}
  </div>
);

export const SidebarFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "mt-auto shrink-0 flex items-center justify-center text-center flex-col gap-2",
      className
    )}
    {...props}
  />
);
