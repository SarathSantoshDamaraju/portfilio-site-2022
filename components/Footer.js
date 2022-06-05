import BLOG from "@/blog.config";
import { useLocale } from "@/lib/locale";

const Footer = ({ fullWidth }) => {
  const d = new Date();
  const y = d.getFullYear();
  const from = +BLOG.since;
  const locale = useLocale();

  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? "max-w-2xl px-4" : "px-4 md:px-24"
      }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6">
        <div className="flex align-baseline justify-between flex-wrap">
          <p>
            <a href={BLOG.oldVersion} target={"_blank"}>
              {locale.FOOTER.OLDSITE}
            </a>
          </p>

          <p>
            {locale.FOOTER.BETA} {locale.FOOTER.BUGSREPORT}{" "}
            <a
              href={BLOG.github.issueLink}
              className="text-blue-600"
              target={"_blank"}
            >
              {locale.COMMON.HERE}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
