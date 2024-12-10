import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { LOCALE_MAP } from "@/constants/locale.constant";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: Array.from(LOCALE_MAP.keys()),
  // Used when no locale matches
  defaultLocale: "ko",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
