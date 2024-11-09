import Image from "next/image";
import { Card } from "./ui/card";
import { ButtonLink } from "./ui/button-link";

export default function Home() {
  return (
    <main className="flex flex-col grow">
      <div className="w-full h-64 flex items-center justify-center bg-white">
        <Image
          src="/williams-racing-logo.svg"
          alt="Williams Racing logo"
          width={685}
          height={50}
          priority
        />
      </div>
      <div className="flex justify-center gap-16 grow items-center">
        <Card>
          <div className="w-96 flex flex-col gap-8">
            <span>
              A summary per circuit including circuit details, fastest lap
              across all races and total races completed
            </span>
            <ButtonLink href="/circuit-summary">CIRCUIT SUMMARY</ButtonLink>
          </div>
        </Card>
        <Card>
          <div className="w-96 flex flex-col gap-8">
            <span>
              A summary per driver including number of times they have been on
              the podium and the total number of races entered
            </span>
            <ButtonLink href="/driver-summary">DRIVER SUMMARY</ButtonLink>
          </div>
        </Card>
      </div>
    </main>
  );
}
