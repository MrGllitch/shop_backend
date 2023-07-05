import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';

export const load = (async () => {
	try {
		const display_customers = await prisma.user.findMany({
			select: {
				id: false,
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
			const { address, email, firstName, lastName, phone, isAdmin } = customer;
			const { street, city, state, zip } = address ?? {};

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
				email,
				firstName: customer.firstName ?? '',
				lastName: customer.lastName ?? '',
				phone: customer.phone ?? '',
				street: street ?? '',
				city: city ?? '',
				state: state ?? '',
				zip: zip ?? '',
				createdAt: formattedCreatedAt,
				updatedAt: formattedUpdatedAt,
				isAdmin
			};
		});

		return { display_customers: formatted_customers };
	} catch (error) {
		console.error('Error retrieving data:', error);
		return { display_customers: [] };
	}
}) as PageServerLoad;
