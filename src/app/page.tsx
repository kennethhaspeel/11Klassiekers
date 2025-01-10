
//import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  // const { isAuthenticated, getUser, getPermissions } = getKindeServerSession();
  // const authenticated = await isAuthenticated();
  //const user = await getUser()
  //const permissions = await getPermissions()
  // console.log(permissions)
  // console.log(user)
  return (
    <main className="flex-grow justify-center text-center mx-auto p-3">
      <div className="flex flex-col flex-grow gap-6 p-12 rounded-xl mx-auto text-white sm:text-2xl">
        <h1>Welkom bij de 11 klassiekers</h1>
      </div>
    </main>
  );
}
