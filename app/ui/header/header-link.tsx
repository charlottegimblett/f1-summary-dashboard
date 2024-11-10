import { williamsBold } from "@/app/fonts/fonts";
import Link from "next/link";

export default function HeaderLink({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link
      className={`${williamsBold.className} text-white hover:underline`}
      href={href}
    >
      {text}
    </Link>
  );
}
