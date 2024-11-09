import Image from "next/image";
import { DashboardCard } from "./ui/dashboard-card";

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
        <DashboardCard
          summary=" A summary per circuit including circuit details, fastest lap across
            all races and total races completed"
          buttonTitle="CIRCUIT SUMMARY"
          href="/driver-summary"
        />
        <DashboardCard
          summary="A summary per driver including number of times they have been on the
        podium and the total number of races entered"
          buttonTitle="DRIVER SUMMARY"
          href="/circuit-summary"
        />
      </div>
    </main>
  );
}
