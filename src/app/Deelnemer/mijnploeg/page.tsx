import { DatumVoorbij } from "@/components/DatumFuncties";
import { getAlleWedstrijden } from "@/lib/queries/wedstrijden/wedstrijden_queries";


export const metadata = {
    title: "Mijn Ploeg",
}
const MijnPloeg = async () => {
  const alleWedstrijden = await getAlleWedstrijden()

  const eersteSelectie = DatumVoorbij(alleWedstrijden[0].datum.toString())
  console.log(DatumVoorbij(alleWedstrijden[0].datum.toString()))
  return (
    <div>Mijn Ploeg</div>
  )
}

export default MijnPloeg