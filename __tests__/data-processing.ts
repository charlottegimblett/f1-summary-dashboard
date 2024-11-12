import { expectedCircuitsData } from "@/__mocks__/circuits";
import { loadData } from "@/app/utils/data-processing";

describe("test loadData function", () => {
  it("returns expected object", () => {
    const circuitsResponse = loadData("__mocks__/mock-circuits.json");
    expect(circuitsResponse).toStrictEqual(expectedCircuitsData);
  });

  it("incorrect path works", () => {
    const circuitsResponse = loadData("");
    expect(circuitsResponse).toBe(undefined);
  });
});
