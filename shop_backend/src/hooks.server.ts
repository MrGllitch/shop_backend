import type { Handle} from '@sveltejs/kit';
import prisma from '$lib/prisma';


export const handle: Handle = async ({event, resolve}) => {
    const session = event.cookies.get('session');

    if(!session){
        return await resolve(event)
    }

    const user = await prisma.user.findUnique({
        where: { userAuthToken: session},
        select: {email: true, isAdmin: true}
    })
    if (user){
        event.locals.user = {
            email: user.email,
            isAdmin: user.isAdmin,
        }
    }

    return await resolve(event)
}