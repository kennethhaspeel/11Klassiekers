import { getAlleWedstrijden } from "@/lib/queries/wedstrijden/wedstrijden_queries";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DateToDDMMYYYY, DatumVoorbij } from "@/components/DatumFuncties";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const metadata = {
  title: "Wedstrijden",
};

export default async function WedstrijdenOverzicht() {
  const { isAuthenticated, getPermission } = getKindeServerSession();
  const auth = await isAuthenticated();
  const rechten = await getPermission("admin");
  
  if (!auth || !rechten?.isGranted) {
    return <div className="bg-red-600 p-4 rounded">Geen Toegang</div>;
  }

  const wedstrijden = await getAlleWedstrijden();
  return (
    <>
      <h2 className="text-2xl bg-slate-600 rounded p-2">
        Overzicht wedstrijden
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left  md:w-[400px]">Wedstrijd</TableHead>
            <TableHead className="text-center  md:w-[200px]">Datum</TableHead>
            <TableHead className="text-center  md:w-[200px]">
              Resultaat
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {wedstrijden.map((wedstrijd) => (
            <TableRow key={wedstrijd.id}>
              <TableCell className="text-left">{wedstrijd.naam}</TableCell>
              <TableCell className="text-center">
                {DateToDDMMYYYY(wedstrijd.datum)}
              </TableCell>
              <TableCell className="text-center">
                {!wedstrijd.afgesloten &&
                DatumVoorbij(wedstrijd.datum.toString()) ? (
                  <Button
                    variant="outline"
                    size="default"
                    aria-label="Uitslag"
                    asChild
                  >
                    <Link
                      href={`/UitslagVerwerken/${wedstrijd.id}`}
                      className="flex justify-center items-center gap-2 ml-0"
                    >
                      Verwerken
                    </Link>
                  </Button>
                ) : (
                  <Button
                    disabled
                    variant="outline"
                    size="default"
                    aria-label="Uitslag"
                  >
                    Verwerken
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
