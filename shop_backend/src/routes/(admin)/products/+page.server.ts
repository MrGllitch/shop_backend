import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';


export const load = (async () => {
    return {display_products: await prisma.product.findMany({
        select:{
            id: true,
            name: true,
            locality: true,
            state: true,
            region: true,
            price: true,
            width: true,
            height: true,
            depth: true,
            weight: true,
            visible: true,
        }
    })}
}) satisfies PageServerLoad;