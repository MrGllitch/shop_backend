import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';

export const load = (async () => {
	try {
		const display_customers = await prisma.user.findMany({
			select: {
				id: true,
				email: true,
				passwordHash: false,
				userAuthToken: false,
				firstName: true,
				lastName: true,
				phone: true,
				createdAt: true,
				updatedAt: true,
				isAdmin: true,
				address: {
					select: {
						street: true,
						city: true,
						state: true,
						zip: true
					}
				}
			}
		});

		const formatted_customers = display_customers.map((customer) => {
			const formattedCreatedAt = customer.createdAt.toLocaleDateString('cs-CZ', {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
			});

			const formattedUpdatedAt = customer.updatedAt.toLocaleDateString('cs-CZ', {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
			});

			return {
				id: customer.id,
				email: customer.email,
				firstName: customer.firstName ?? '',
				lastName: customer.lastName ?? '',
				phone: customer.phone ?? '',
				street: customer.address?.street ?? '',
				city: customer.address?.city ?? '',
				state: customer.address?.state ?? '',
				zip: customer.address?.zip ?? '',
				createdAt: formattedCreatedAt,
				updatedAt: formattedUpdatedAt,
				isAdmin: customer.isAdmin
			};
		});

		return { display_customers: formatted_customers };
	} catch (error) {
		console.error('Error retrieving data:', error);
		return { display_customers: [] };
	}
}) as PageServerLoad;
