import { williamsBold } from "../fonts/fonts";
import { Card } from "../ui/card";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 w-3/4 my-0 mx-[auto]">
      <div
        className={`${williamsBold.className} text-3xl text-primary-blue mt-8`}
      >
        Circuit Summary
      </div>
      <div
        className={`${williamsBold.className} text-primary-blue text-sm px-4 pt-4 grid grid-cols-3`}
      >
        <span>Circuit</span>
        <span>Total no Races</span>
        <span>Fasted lap time</span>
      </div>
      <Card>
        <div className="grid grid-cols-3">
          <span>Albert Park Grand Prix Circuit</span>
          <span>27</span>
          <span>1:30.733</span>
        </div>
      </Card>
      <Card>
        <div className="grid grid-cols-3">
          <span>Sepang International Circuit</span>
          <span>15</span>
          <span>1:46.014</span>
        </div>
      </Card>
      <Card>
        <div className="grid grid-cols-3">
          <span>Bahrain International Circuit</span>
          <span>42</span>
          <span>1:26.274</span>
        </div>
      </Card>
    </div>
  );
}
