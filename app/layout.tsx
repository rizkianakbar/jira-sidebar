import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarDescription,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarItem,
  SidebarTitle,
} from "@/components/sidebar";
import {
  BacklogIcon,
  BoardIcon,
  CalendarIcon,
  CodeIcon,
  DeploymentsIcon,
  GoalsIcon,
  IssuesIcon,
  ListIcon,
  ReleaseIcon,
  SecurityIcon,
  TimelineIcon,
} from "@/components/sidebar/sidebar.icons";

export const metadata: Metadata = {
  title: "Sidebar Jira Clone",
  description: "A simple Jira clone with sidebar",
};

const readexPro = Readex_Pro({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("w-screen overflow-x-hidden", readexPro.className)}>
        <div className="flex min-h-screen">
          <Sidebar>
            <SidebarHeader>
              <SidebarTitle>Questing System</SidebarTitle>
              <SidebarDescription>Software project</SidebarDescription>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup title="Planning">
                <SidebarItem icon={TimelineIcon} active>
                  Timeline
                </SidebarItem>
                <SidebarItem icon={BacklogIcon}>Backlog</SidebarItem>
                <SidebarItem icon={BoardIcon}>Board</SidebarItem>
                <SidebarItem icon={CalendarIcon}>Calendar</SidebarItem>
                <SidebarItem icon={ListIcon}>List</SidebarItem>
                <SidebarItem icon={GoalsIcon} className="px-4 gap-4">
                  Goals
                </SidebarItem>
                <SidebarItem icon={IssuesIcon}>Issues</SidebarItem>
              </SidebarGroup>
              <SidebarGroup title="Development">
                <SidebarItem icon={CodeIcon}>Code</SidebarItem>
                <SidebarItem icon={SecurityIcon}>Security</SidebarItem>
                <SidebarItem icon={ReleaseIcon}>Release</SidebarItem>
              </SidebarGroup>
              <SidebarGroup title="Operations">
                <SidebarItem icon={DeploymentsIcon}>Deployments</SidebarItem>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <p className="text-white/40 text-xs">
                You&apos;re in a team-managed project
              </p>
            </SidebarFooter>
          </Sidebar>

          <main
            className="flex-1 p-6 overflow-y-auto ml-[240px] space-y-4"
            id="main"
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
