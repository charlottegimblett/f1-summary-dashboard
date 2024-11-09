import { williamsBold } from "../fonts/fonts";

/**
 * Just for clarification. A ButtonLink is a component that is a link
 * under the hood but is styled to look like a conventional Button component.
 */
export function ButtonLink({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <a
      className={`${williamsBold.className} antialiased bg-primary-blue text-white w-full p-4 hover:bg-bright-blue text-center`}
      href={href}
    >
      {children}
    </a>
  );
}
