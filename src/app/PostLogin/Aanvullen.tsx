"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Input from "@/components/forms/input";

interface Props {
  ploegnamen: {
    ploegnaam: string;
  }[];
  user: KindeUser<Record<string, unknown>>;
}
import { useActionState } from "react";
import {
  InsertDeelnemerAction,
  insertDeelnemerSchemaErrorType,
} from "../actions/deelnemersActions";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Aanvullen = ({ user, ploegnamen }: Props) => {
  const [state, action, isPending] = useActionState(InsertDeelnemerAction, {
    errors: {} as insertDeelnemerSchemaErrorType,
  });
  const ploegen = ploegnamen.map((item) => {
    return item.ploegnaam;
  });

  return (
    <>
      <div className="p-2">
        <h2 className="text-2xl">Gegevens aanvullen</h2>
        <p>
          Voor we verder kunnen gaan, dient u eerst nog enkele gegevens aan te
          vullen
        </p>
      </div>
      <>{state.allSaved && <p>Alles werd bewaard...</p>}</>
      <div>
        <form action={action}>
          <div className="grid w-full max-w-sm items-center gap-2">
            <span>Ploegnaam</span>
            <Input
            errors={state.errors?.fieldErrors.ploegnaam}
              type="text"
              id="ploegnaam"
              name="ploegnaam"
              placeholder="uw magnifiek bedachte naam..."
              className="border rounded p-2 bg-gray-800"
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-2 pt-3">
            <span>Uw Telefoonnummer</span>
            <Input
            errors={state.errors?.fieldErrors.telefoon}
              type="text"
              id="telefoon"
              name="telefoon"
              placeholder="+32499999999"
              className="border rounded p-2 bg-gray-800"
            />
          </div>
          <div hidden>
            <Input type="text" id="kinde" name="kinde" defaultValue={user.id} />
            <Input
              type="text"
              id="voornaam"
              name="voornaam"
              defaultValue={user.given_name!}
            />
            <Input
              type="text"
              id="naam"
              name="naam"
              defaultValue={user.family_name!}
            />
            <Input
              type="text"
              id="email"
              name="email"
              defaultValue={user.email!}
            />
          </div>
          {state.allSaved ? (
            <div className="py-2">
              <Alert className="bg-green-600 rounded">
                <AlertTitle>Alles Bewaard</AlertTitle>
                <AlertDescription>
                  U kunt nu uw ploeg beginnen samenstellen
                </AlertDescription>
              </Alert>
            </div>
          ) : (
            <div className="py-2">
              {isPending ? (
                <Button variant="outline" disabled>
                  <Loader2 className="animate-spin/>" /> Bewaren...
                </Button>
              ) : (
                <Button variant="outline" type="submit">
                  Bewaar
                </Button>
              )}
            </div>
          )}
        </form>
      </div>

      <hr className="pt-2" />
      <div className="py-2">
        <h2 className="text-xl">Reeds gebruikte namen</h2>
        <p>
          Een ploegnaam moet uniek zijn om zaken overzichtelijk te kunnen
          houden.
        </p>
        <div className="py-2">
          {ploegen?.map((p) => {
            return (
              <div key={p} className="m-2">
                <Button variant="outline" disabled={isPending}>
                  {p}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Aanvullen;
