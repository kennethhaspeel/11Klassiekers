import { DatumVoorbij } from "@/components/DatumFuncties";
import { getAlleWedstrijden } from "@/lib/queries/wedstrijden/wedstrijden_queries";
import EersteSelectie from "./EersteSelectie";

export const metadata = {
  title: "Mijn Ploeg",
};
const MijnPloeg = async () => {
  const alleWedstrijden = await getAlleWedstrijden();

  const preRace = DatumVoorbij(alleWedstrijden[0].datum.toString());

  return (
    <>
      {preRace ? (
        <div>
          <EersteSelectie />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MijnPloeg;
