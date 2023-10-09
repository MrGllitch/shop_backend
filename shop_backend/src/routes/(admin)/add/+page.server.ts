import type { Action } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import DateTime from 'luxon';
import prisma from '$lib/prisma';
import type { Prisma } from '@prisma/client';

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
	const owner_name = data.get('owner');
	const locality = data.get('locality');
	const state = data.get('state');
	const region = data.get('region');
	const price = Number(data.get('price'));
	const bPrice = Number(data.get('bprice'));
	const width = Number(data.get('width'));
	const height = Number(data.get('height'));
	const depth = Number(data.get('depth'));
	const weight = Number(data.get('weight'));
	const description = data.get('description');
	const note = data.get('note');
	// const colors: number[] = (data.get('colors') || []) as number[];
	// const categories: number[] = (data.get('categories') || []) as number[];

	const colorsString = data.get('colors');
	const colors: number[] | null =
		typeof colorsString === 'string' ? (JSON.parse(colorsString) as number[]) : null;

	const categoriesString = data.get('colors');
	const categories: number[] | null =
		typeof categoriesString === 'string' ? (JSON.parse(categoriesString) as number[]) : null;

	console.log(typeof colors, colors, categories);
	const date = data.get('date') ? new Date(data.get('date') as string).toISOString() : '';
	// console.log(
	// 	name,
	// 	locality,
	// 	state,
	// 	region,
	// 	price,
	// 	width,
	// 	height,
	// 	depth,
	// 	weight,
	// 	description,
	// 	note,
	// 	colors,
	// 	categories
	// 	//	publishedAt
	// );

	if (
		typeof name === 'string' &&
		typeof locality === 'string' &&
		typeof state === 'string' &&
		typeof region === 'string' &&
		typeof price === 'number' &&
		typeof bPrice === 'number' &&
		typeof width === 'number' &&
		typeof height === 'number' &&
		typeof depth === 'number' &&
		typeof weight === 'number' &&
		typeof description === 'string' &&
		typeof note === 'string' &&
		typeof owner_name === 'string' &&
		colors !== null &&
		colors !== undefined &&
		categories !== null &&
		categories !== undefined &&
		//typeof colors === 'string' &&
		//typeof categories === 'string' &&
		//Array.isArray(colors) &&
		//Array.isArray(categories) &&
		typeof date === 'string'
	) {
		console.log('první if prošel');

		if (typeof owner_name === 'string') {
			//finding the owner
			const owner_id = await prisma.owner.findFirst({
				where: { name: owner_name },
				select: {
					id: true
				}
			});
			//if the owner is not found, create him
			if (owner_id) {
				const newProduct = await prisma.product.create({
					data: {
						name,
						locality,
						state,
						region,
						bPrice,
						price,
						width,
						height,
						depth,
						weight,
						description,
						owner: {
							connect: {
								id: owner_id.id
							}
						},
						colors: {
							connect: colors.map((color) => ({ id: color }))
						},
						categories: {
							connect: categories.map((category) => ({ id: category }))
						},
						publishedAt: date
					}
				});

				console.log('Product added');
			}

			//if owner exists then use that we found
			else {
				const newProduct = await prisma.product.create({
					data: {
						name,
						locality,
						state,
						region,
						bPrice,
						price,
						width,
						height,
						depth,
						weight,
						description,
						owner: {
							create: {
								name: owner_name
							}
						},
						colors: {
							connect: colors.map((color) => ({ id: color }))
						},
						categories: {
							connect: categories.map((category) => ({ id: category }))
						},
						publishedAt: date
					}
				});

				console.log('Product added');
			}
		}
	} else {
		console.log('prvni if neprošel');
		console.log(categories);
	}
};

export const actions = {
	addCategory,
	addColor,
	addProduct
};
