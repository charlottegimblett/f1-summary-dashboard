import Link from "next/link";
import Card from "../card";

export default function CircuitCard() {
  return (
    <Link
      href="http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit"
      target="_blank"
    >
      <Card>
        <div className="grid grid-cols-circuit grid-rows-1 gap-4">
          <span className="font-bold text-primary-blue">
            Albert Park Grand Prix Circuit
          </span>
          <span className="text-sm">
            <b>No of races: </b>27
          </span>
          <span className="text-sm">
            <b>Fastest lap: </b>1:30.733
          </span>
          <span className="text-sm">
            <b>Latitude: </b>-37.84
          </span>
          <span className="text-sm">
            <b>Longatude: </b>144.96
          </span>
          <span className="text-sm">
            <b>Altitude: </b>10
          </span>
        </div>
        <span className="text-sm">Melbourne, Australia</span>
      </Card>
    </Link>
  );
}
