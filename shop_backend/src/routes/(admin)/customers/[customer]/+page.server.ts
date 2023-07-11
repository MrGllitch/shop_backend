import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';

export const load: PageServerLoad = async (route) => {
	console.log(route.url.pathname);
	const pathname = route.url.pathname; // Use route.url.pathname instead of route.params.pathname
	const customerId = pathname.split('/')[pathname.split('/').length - 1]; // Update the index to access the last section correctly
	const customer = await prisma.user.findUnique({
		where: {
			id: customerId
		}
	});
	//TODO const orders = await prisma.order

	if (!customer) {
		return { status: 404, error: 'Customer not found' };
	}
	return { customer };
};
