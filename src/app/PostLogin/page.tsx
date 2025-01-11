import React from 'react'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getDeelnemerById } from '@/lib/queries/users/users_queries';
import Aanvullen from './Aanvullen';

const PostLogin = async () => {
    const { isAuthenticated, getPermission,getUser } = getKindeServerSession();
    const user = await getUser();

    const dbuser = await getDeelnemerById(user.id)

    console.log(dbuser)
  return (
    <>
    {
        dbuser == null ?(
            <Aanvullen user={user}/>
        ) : (
            <p>gebruiker gevonden</p>
        )
    }

    </>
  )
}

export default PostLogin