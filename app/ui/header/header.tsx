import Image from "next/image";
import HeaderLink from "./header-link";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center w-full min-h-16 bg-primary-blue pl-4 gap-6 text-xs">
      <Link href="/">
        <Image
          height={27}
          width={38}
          src="/williams-racing-logo-small.svg"
          alt="Williams Racing logo icon version"
        />
      </Link>
      <HeaderLink text="Circuit Summary" href="circuit-summary" />
      <HeaderLink text="Driver Summary" href="driver-summary" />
    </div>
  );
}
