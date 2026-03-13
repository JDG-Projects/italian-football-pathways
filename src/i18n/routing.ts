import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["uk", "it", "en"],
  defaultLocale: "uk",
});
