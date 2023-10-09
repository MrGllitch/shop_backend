import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';

export const load = (async (page) => {
	const productId = parseInt(page.params.product);
	return {
		display_products: await prisma.product.findUnique({
			where: {
				id: productId
			},
			include: {
				owner: true,
				categories: true
			}
		})
	};
}) satisfies PageServerLoad;
