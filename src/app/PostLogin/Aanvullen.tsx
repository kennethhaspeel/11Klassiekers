"use client";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props {
  user: KindeUser<Record<string, any>>;
}

const formSchema = z.object({
  ploegnaam: z.string().min(1, "Geef uw ploeg een naam"),
  telefoon: z.string().min(1, "Gelieve een telefoonnummer in te geven"),
  kinde: z.string(),
  naam: z.string(),
  voornaam: z.string(),
  email: z.string(),
});

const Aanvullen = ({ user }: Props) => {
  const bewaarGegevens = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      naam: user.given_name!,
      voornaam: user.family_name!,
      email: user.email!,
      kinde: user.id,
    },
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
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(bewaarGegevens)}
            className="w-full p-5 border"
          >
            <FormField
            
              control={form.control}
              name="ploegnaam"
              render={({ field }) => (
                <FormItem className="py-2">
                  <FormLabel>Ploegnaam</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="uw magnifiek bedachte naam..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
                        <FormField
              control={form.control}
              name="telefoon"
              render={({ field }) => (
                <FormItem className="py-2">
                  <FormLabel>Telefoon</FormLabel>
                  <FormControl>
                    <Input placeholder="+32499999999" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <hr className="pt-2"/>
            <FormField
              control={form.control}
              name="voornaam"
              render={({ field }) => (
                <FormItem className="py-2">
                  <FormLabel>Voornaam</FormLabel>
                  <FormControl>
                    <Input defaultValue={user.given_name!} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="naam"
              render={({ field }) => (
                <FormItem className="py-2">
                  <FormLabel>Naam</FormLabel>
                  <FormControl>
                    <Input defaultValue={user.family_name!} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="py-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input defaultValue={user.email!} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="py-2">
                <Button variant="outline" type="submit">Bewaar</Button>
            </div>

          </form>
        </Form>
      </div>
    </>
  );
};

export default Aanvullen;
