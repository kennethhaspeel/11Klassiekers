import { DatumVoorbij } from "@/components/DatumFuncties";
import { getAlleWedstrijden } from "@/lib/queries/wedstrijden/wedstrijden_queries";
import EersteSelectie from "./EersteSelectie";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getSelectieById } from "@/lib/queries/selecties/selectie_queries";
import { getDeelnemerById } from "@/lib/queries/users/users_queries";


export const metadata = {
  title: "Mijn Ploeg",
};
const MijnPloeg = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    return <h2 className="text-2xl text-red-600">Geen Toegang</h2>;
  }
  const user = await getUser();
  const dbuser = await getDeelnemerById(user.id)

  const alleWedstrijden = await getAlleWedstrijden();
  const preRace = !DatumVoorbij(alleWedstrijden[0].datum.toString());

  const selectie = await getSelectieById(dbuser.id)
  console.log(preRace);
  return (
    <>
      {preRace ? (
        <div>
          <EersteSelectie boodschap="eerste selectie" user={user} deelnemerid={dbuser.id} ploegnaam={dbuser.ploegnaam} selectie={selectie}/>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MijnPloeg;
