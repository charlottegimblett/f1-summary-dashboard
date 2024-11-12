import { williamsBold } from "../fonts/fonts";
import DriverCard from "../ui/driver-summary/driver-card";
import Search from "../ui/search";
import { getDriverSummaryData } from "../utils/driver-summary";

export default async function Page() {
  const { drivers, driversPodiums, racesPerDriver } =
    await getDriverSummaryData();

  return (
    <div className="flex flex-col gap-4 w-3/4 max-xl:w-[90%] my-0 mx-[auto] pb-4">
      <div
        className={`${williamsBold.className} text-3xl text-primary-blue mt-8`}
      >
        Driver Summary
      </div>
      <Search placeholder="Enter a driver's name" />
      {drivers.map((driver) => (
        <DriverCard
          key={driver.driverId}
          driver={driver}
          noOfPodiums={driversPodiums.get(driver.driverId)}
          noOfRaces={racesPerDriver.get(driver.driverId)}
        />
      ))}
    </div>
  );
}
