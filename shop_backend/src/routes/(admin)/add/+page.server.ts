import type { Action } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';

export const load: PageServerLoad = async (route) => {
	const categories = await prisma.category.findMany({});
	const colors = await prisma.color.findMany({});
	return { categories, colors };
};

const addCategory: Action = async ({ request }) => {
	const data = await request.formData();
	const category = data.get('category');
	if (typeof category === 'string' && category.length > 0) {
		const newCategory = await prisma.category.create({
			data: {
				name: category
			}
		});
		console.log('category added');
	}
};

const addColor: Action = async ({ request }) => {
	const data = await request.formData();
	const color = data.get('hex');
	const name = data.get('name');
	if (typeof color === 'string' && typeof name === 'string') {
		const newColor = await prisma.color.create({
			data: {
				color,
				name
			}
		});
		console.log('category added');
	}
};

export const actions = {
	addCategory,
	addColor
};
