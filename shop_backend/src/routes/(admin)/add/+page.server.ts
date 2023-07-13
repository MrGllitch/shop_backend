import type { Action } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import DateTime from 'luxon';
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

const addProduct: Action = async ({ request }) => {
	const data = await request.formData();
	console.log(data);
	const name = data.get('name');
	const locality = data.get('locality');
	const state = data.get('state');
	const region = data.get('region');
	const price = Number(data.get('price'));
	const width = Number(data.get('width'));
	const height = Number(data.get('height'));
	const depth = Number(data.get('depth'));
	const weight = Number(data.get('weight'));
	const description = data.get('description');
	const note = data.get('note');
	const colors = data.get('colors');
	const categories = data.get('categories');
	//const publishedAt = data.get('date') ?? '';
	//const date = new Date(publishedAt).toISOString();

	console.log(
		name,
		locality,
		state,
		region,
		price,
		width,
		height,
		depth,
		weight,
		description,
		note,
		colors,
		categories
		//	publishedAt
	);

	if (
		typeof name === 'string' &&
		typeof locality === 'string' &&
		typeof state === 'string' &&
		typeof region === 'string' &&
		typeof price === 'number' &&
		typeof width === 'number' &&
		typeof height === 'number' &&
		typeof depth === 'number' &&
		typeof weight === 'number' &&
		typeof description === 'string' &&
		typeof note === 'string' //&&
		//Array.isArray(colors) &&
		//Array.isArray(categories) &&
		//	typeof publishedAt === 'string'
	) {
		const newProduct = await prisma.product.create({
			data: {
				name,
				locality,
				state,
				region,
				price,
				width,
				height,
				depth,
				weight,
				description
				//colors: {
				//	create: colors.map((color) => ({ color: color.hex, name: color.name }))
				//},
				//categories: {
				//	create: categories.map((category) => ({ name: category.name }))
				//},
				//publishedAt
			}
		});

		console.log('Product added');
	}
};

export const actions = {
	addCategory,
	addColor,
	addProduct
};
