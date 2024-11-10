import { williamsBold } from "../fonts/fonts";
import DriverCard from "../ui/driver-summary/driver-card";
import Search from "../ui/search";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 w-3/4 max-xl:w-[90%] my-0 mx-[auto]">
      <div
        className={`${williamsBold.className} text-3xl text-primary-blue mt-8`}
      >
        Driver Summary
      </div>
      <Search placeholder="Enter a driver's name" />
      <DriverCard />
      <DriverCard />
      <DriverCard />
    </div>
  );
}
