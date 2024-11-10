import { williamsBold } from "../fonts/fonts";
import CircuitCard from "../ui/circuit-summary/circuit-card";
import Search from "../ui/search";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 w-3/4 max-xl:w-[90%] my-0 mx-[auto]">
      <div
        className={`${williamsBold.className} text-3xl text-primary-blue mt-8`}
      >
        Circuit Summary
      </div>
      <Search placeholder="Enter a circuit name" />
      <CircuitCard />
      <CircuitCard />
      <CircuitCard />
    </div>
  );
}
