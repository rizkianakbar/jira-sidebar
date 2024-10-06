"use client";

import { cn } from "@/lib/utils";

export function TimelineIcon(): JSX.Element {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M6 2h10a3 3 0 0 1 0 6H6a3 3 0 1 1 0-6m0 2a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2zm4 5h8a3 3 0 0 1 0 6h-8a3 3 0 0 1 0-6m0 2a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm-4 5h6a3 3 0 0 1 0 6H6a3 3 0 0 1 0-6m0 2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"
      ></path>
    </svg>
  );
}

export function BacklogIcon(): JSX.Element {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
      <g fill="currentcolor">
        <path d="M5 19.002C5 19 17 19 17 19v-2.002C17 17 5 17 5 17zm-2-2.004C3 15.894 3.895 15 4.994 15h12.012c1.101 0 1.994.898 1.994 1.998v2.004A1.997 1.997 0 0 1 17.006 21H4.994A2 2 0 0 1 3 19.002z"></path>
        <path d="M5 15h12v-2H5zm-2-4h16v6H3z"></path>
        <path d="M7 11.002C7 11 19 11 19 11V8.998C19 9 7 9 7 9zM5 8.998C5 7.894 5.895 7 6.994 7h12.012C20.107 7 21 7.898 21 8.998v2.004A1.997 1.997 0 0 1 19.006 13H6.994A2 2 0 0 1 5 11.002z"></path>
        <path d="M5 5v2h12V5zm-2-.002C3 3.894 3.895 3 4.994 3h12.012C18.107 3 19 3.898 19 4.998V9H3z"></path>
      </g>
    </svg>
  );
}

export function BoardIcon(): JSX.Element {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
      <g fill="currentcolor">
        <path d="M4 18h16.008C20 18 20 6 20 6H3.992C4 6 4 18 4 18M2 5.994C2 4.893 2.898 4 3.99 4h16.02C21.108 4 22 4.895 22 5.994v12.012A1.997 1.997 0 0 1 20.01 20H3.99A1.994 1.994 0 0 1 2 18.006z"></path>
        <path d="M8 6v12h2V6zm6 0v12h2V6z"></path>
      </g>
    </svg>
  );
}

export function CalendarIcon(): JSX.Element {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M4.995 5h14.01C20.107 5 21 5.895 21 6.994v12.012A1.994 1.994 0 0 1 19.005 21H4.995A1.995 1.995 0 0 1 3 19.006V6.994C3 5.893 3.892 5 4.995 5M5 9v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9zm1-5a1 1 0 0 1 2 0v1H6zm10 0a1 1 0 0 1 2 0v1h-2zm-9 9v-2.001h2V13zm8 0v-2.001h2V13zm-4 0v-2.001h2.001V13zm-4 4v-2h2v2zm4 0v-2h2.001v2zm4 0v-2h2v2z"
      ></path>
    </svg>
  );
}

export function ListIcon(): JSX.Element {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
      <g fill="currentcolor" fillRule="evenodd">
        <rect width="8" height="2" x="10" y="15" rx="1"></rect>
        <rect width="2" height="2" x="6" y="15" rx="1"></rect>
        <rect width="8" height="2" x="10" y="11" rx="1"></rect>
        <rect width="2" height="2" x="6" y="11" rx="1"></rect>
        <rect width="8" height="2" x="10" y="7" rx="1"></rect>
        <rect width="2" height="2" x="6" y="7" rx="1"></rect>
      </g>
    </svg>
  );
}

export function GoalsIcon(): JSX.Element {
  return (
    <svg
      role="presentation"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9ZM13 9C13 11.2091 11.2091 13 9 13C6.79086 13 5 11.2091 5 9C5 6.79086 6.79086 5 9 5C11.2091 5 13 6.79086 13 9Z"
          fillRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}

export function IssuesIcon(): JSX.Element {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
      <g fill="currentcolor" fillRule="evenodd">
        <path
          fillRule="nonzero"
          d="M5 12.99C5 13 19.01 13 19.01 13 19 13 19 5.01 19 5.01 19 5 5 5 5 5zM3 5.01C3 3.9 3.89 3 5 3h14.01A2 2 0 0 1 21 5.01v7.98A2 2 0 0 1 19.01 15H5a2 2 0 0 1-2-2.01zM19 19c0 1.11-.9 2-2.01 2H7.01A2.01 2.01 0 0 1 5 19zm1-3a2 2 0 0 1-1.99 2H5.99A2 2 0 0 1 4 16z"
        ></path>
        <path d="M10.674 11.331c.36.36.941.36 1.3 0l2.758-2.763a.92.92 0 0 0-1.301-1.298l-2.108 2.11-.755-.754a.92.92 0 0 0-1.3 1.3z"></path>
      </g>
    </svg>
  );
}

export function CodeIcon(): JSX.Element {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M14.16 4.06a1 1 0 0 0-1.27.62L8.06 18.73a1 1 0 0 0 1.89.65l4.83-14.04a1 1 0 0 0-.62-1.27m-6.14 8.2-2.58-2.5 2.8-2.72a1 1 0 1 0-1.39-1.44L3.31 9.04a1 1 0 0 0 0 1.44l3.32 3.22a1 1 0 1 0 1.39-1.44m12.22 1.57-3.32-3.22a1 1 0 1 0-1.39 1.44l2.58 2.5-2.8 2.72a1 1 0 1 0 1.39 1.44l3.54-3.43a1 1 0 0 0 0-1.44"
      ></path>
    </svg>
  );
}

export function SecurityIcon(): JSX.Element {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
      <g fill="currentcolor">
        <path d="M16 11V9h-2V7.002A2 2 0 0 0 12 5c-1.102 0-2 .898-2 2.002V9H8v2H7v8h10v-8zm-2 0h-4V9h4zM8 9V7.002A4.004 4.004 0 0 1 12 3a4 4 0 0 1 4 4.002V9h.994A2.01 2.01 0 0 1 19 11.009v7.982c0 1.11-.897 2.009-2.006 2.009H7.006A2.01 2.01 0 0 1 5 18.991V11.01C5 9.899 5.897 9 7.006 9zm0 0h2v2H8zm6 0h2v2h-2z"></path>
        <circle cx="12" cy="15" r="2"></circle>
      </g>
    </svg>
  );
}

export function ReleaseIcon(): JSX.Element {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
      <g fill="currentcolor" fillRule="evenodd">
        <path
          fillRule="nonzero"
          d="M6 12h8v-2H6zM4 8.99C4 8.445 4.456 8 5.002 8h9.996C15.55 8 16 8.451 16 8.99V14H4z"
        ></path>
        <path d="M6 7.005C6 5.898 6.898 5 7.998 5h2.004C11.106 5 12 5.894 12 7.005V10H6zm4 0V7H7.999c.005 0 .002.003.002.005V8h2z"></path>
        <path
          fillRule="nonzero"
          d="M4.5 17h13.994l1.002-3H4.14zm-2.495-4.012A.862.862 0 0 1 2.883 12h18.393c.55 0 .857.417.681.944l-1.707 5.112c-.174.521-.758.944-1.315.944H3.725a1.15 1.15 0 0 1-1.118-.988z"
        ></path>
      </g>
    </svg>
  );
}

export function DeploymentsIcon(): JSX.Element {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
      <g fill="currentcolor" fillRule="evenodd">
        <path d="M11.208 9.32 9.29 11.253a1 1 0 0 0 0 1.409.98.98 0 0 0 1.397 0l1.29-1.301 1.336 1.347a.98.98 0 0 0 1.397.001 1 1 0 0 0 .001-1.408l-1.965-1.98a1.08 1.08 0 0 0-1.538-.001"></path>
        <path d="m11 10.007.001 9.986c0 .557.448 1.008 1 1.007.553 0 1-.45 1-1.007L13 10.006C13 9.451 12.552 9 12 9s-1.001.451-1 1.007"></path>
        <path d="M7.938 5.481a5 5 0 0 0-.777-.063C4.356 5.419 2 7.62 2 10.499 2 13.408 4.385 16 7.1 16h2.881v-1.993H7.1c-1.657 0-3.115-1.663-3.115-3.508 0-1.778 1.469-3.087 3.104-3.087h.012c.389 0 .686.051.97.15l.17.063c.605.248.875-.246.875-.246l.15-.267c.73-1.347 2.201-2.096 3.716-2.119a4.14 4.14 0 0 1 4.069 3.644l.046.34s.071.525.665.525c.013 0 .012.005.023.005h.254c1.136 0 1.976.959 1.976 2.158 0 1.207-.987 2.342-2.07 2.342h-3.964V16h3.964C20.105 16 22 13.955 22 11.665c0-1.999-1.312-3.663-3.138-4.074-.707-2.707-3.053-4.552-5.886-4.591-1.975.021-3.901.901-5.038 2.481"></path>
      </g>
    </svg>
  );
}

export function CaretIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      // Rotates the icon to indicate sidebar state (open/closed)
      className={cn(direction === "left" ? "rotate-180" : "rotate-0")}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
