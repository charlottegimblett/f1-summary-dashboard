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
  const { firstName, lastName, number, nationality, dob, url } = driver;
  return (
    <Card>
      <div className="grid grid-cols-driver grid-rows-1 gap-4">
        <span>
          <Link href={url} target="_blank">
            <span className="font-bold text-primary-blue">
              {firstName} {lastName}
            </span>
          </Link>
        </span>
        <div className="text-sm grid grid-cols-driver-info grid-rows-1 text-center">
          <span>{number === -1 ? "-" : number}</span>
          <span>|</span>
          <span>{nationality}</span>
          <span>|</span>
          <span>{dob}</span>
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
  );
}
