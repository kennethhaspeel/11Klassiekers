import { DatumVoorbij } from "@/components/DatumFuncties";
import { getAlleWedstrijden } from "@/lib/queries/wedstrijden/wedstrijden_queries";
import EersteSelectie from "./EersteSelectie";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


export const metadata = {
  title: "Mijn Ploeg",
};
const MijnPloeg = async () => {
  const { isAuthenticated, getPermissions, getUser } = getKindeServerSession();
const authenticated = await isAuthenticated()
const user = await getUser()

  const alleWedstrijden = await getAlleWedstrijden();

  const preRace = !DatumVoorbij(alleWedstrijden[0].datum.toString());
console.log(preRace)
  return (
    <>
      {preRace ? (
        <div>
          <EersteSelectie boodschap="eerste selectie" user={user}/>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default MijnPloeg;
