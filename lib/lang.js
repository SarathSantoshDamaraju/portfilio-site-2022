import BLOG from "@/blog.config";

const lang = {
  en: {
    NAV: {
      INDEX: "Blog",
      RSS: "RSS",
      SEARCH: "Search",
      ABOUT: "About",
      BITS: "Bits",
      WORK: "Work",
      PROJECTS: "Projects",
    },
    PAGINATION: {
      PREV: "Prev",
      NEXT: "Next",
    },
    POST: {
      BACK: "Back",
      TOP: "Top",
    },
  },
};

export const fetchLocaleLang = () => {
  switch (BLOG.lang.toLowerCase()) {
    case "en":
    case "en-us":
    default:
      return lang.en;
  }
};
