import Link from "next/link";
import Card from "../card";
import { DriverSummary } from "@/types";

export default function DriverCard({
  driver,
  noOfPodiums,
  noOfRaces,
}: {
  driver: DriverSummary;
  noOfPodiums?: number;
  noOfRaces?: number;
}) {
  const { firstName, lastName, number, nationality, dob } = driver;
  return (
    <Link href="http://en.wikipedia.org/wiki/Lewis_Hamilton" target="_blank">
      <Card>
        <div className="grid grid-cols-driver grid-rows-1 gap-4">
          <div className="flex gap-4">
            <span className="font-bold text-primary-blue">
              {firstName} {lastName}
            </span>
            <span className="text-sm">
              {number === -1 ? "-" : number} | {nationality} | {dob}
            </span>
          </div>
          <span className="text-sm">
            <b>Number of Podiums: </b>
            {noOfPodiums || 0}
          </span>
          <span className="text-sm">
            <b>Races Entered: </b>
            {noOfRaces || 0}
          </span>
        </div>
      </Card>
    </Link>
  );
}
