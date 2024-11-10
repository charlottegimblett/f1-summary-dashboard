import Link from "next/link";
import Card from "../card";

export default function DriverCard() {
  return (
    <Link href="http://en.wikipedia.org/wiki/Lewis_Hamilton" target="_blank">
      <Card>
        <div className="grid grid-cols-driver grid-rows-1 gap-4">
          <div className="flex gap-4">
            <span className="font-bold text-primary-blue">Lewis Hamilton</span>
            <span className="text-sm">44 | British | 1985-01-07</span>
          </div>
          <span className="text-sm">
            <b>Number of Podiums: </b>100
          </span>
          <span className="text-sm">
            <b>Races Entered: </b>400
          </span>
        </div>
      </Card>
    </Link>
  );
}
