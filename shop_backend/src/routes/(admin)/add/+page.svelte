<script lang="ts">
	import { SvelteComponentTyped, onMount } from 'svelte';
	import type { PageData } from './$types';
	import ColorPicker from 'svelte-awesome-color-picker';
	export let data: PageData;
	let selectedColors: number[] = [];
	let files: any = [];
	let hex: string;
	let currentDate;
	let selectedCategories: number[] = [];
	let formData: { categories: string[] } = { categories: [] };

	function onChange(event: any) {
		const fileList = event.target.files;
		files = [...files, ...Array.from(fileList)];
	}
	function removeFile(index: number) {
		files = files.filter((_: any, i: any) => i !== index);
	}
	async function handleSubmit(event: { currentTarget: EventTarget & HTMLFormElement }) {
		// Collect all form data
		const formData = new FormData(event.currentTarget);
		// formData.append('name', event.target['name'].value);
		// formData.append('price', event.target['price'].value);
		// formData.append('owner', event.target['owner'].value);
		// formData.append('bprice', event.target['bprice'].value);

		// Append selected categories to the formData
		formData.append('categories', JSON.stringify(selectedCategories));

		// Append selected colors to the formData
		formData.append('colors', JSON.stringify(selectedColors));

		// formData.append('locality', event.target['locality'].value);
		// formData.append('region', event.target['region'].value);
		// formData.append('state', event.target['state'].value);

		// formData.append('width', event.target['width'].value);
		// formData.append('height', event.target['height'].value);
		// formData.append('depth', event.target['depth'].value);
		// formData.append('weight', event.target['weight'].value);

		// formData.append('description', event.target['description'].value);

		// Append selected files to the formData
		for (const file of files) {
			formData.append('images', file);
		}

		// Append date and note
		// formData.append('date', event.target['date'].value);
		// formData.append('note', event.target['note'].value);

		// You can now send formData to your server using fetch or another method
		console.log('toto posílám' + formData);
		try {
			const response = await fetch(event.currentTarget.action, {
				method: 'POST',
				body: formData
			});

			if (response.ok) {
				// Handle successful response
				console.log('Product added successfully');
			} else {
				// Handle error response
				console.error('Failed to add product');
			}
		} catch (error) {
			console.error('Error:', error);
		}
	}
</script>

<section class="product">
	<form class="product_form" on:submit|preventDefault={handleSubmit} action="?/addProduct">
		<!-- 1. -->

		<div class="name">
			<label for="name">Name</label>
			<input type="text" id="name" name="name" />
		</div>

		<div class="price">
			<label for="price">Price</label>
			<input type="number" id="price" name="price" />
		</div>

		<div class="owner">
			<label for="owner">Owner</label>
			<input type="text" id="owner" name="owner" />
			<label for="bprice">Buy Price</label>
			<input type="text" id="bprice" name="bprice" />
		</div>

		<!-- 2. -->
		<div class="categories">
			{#each data.categories as category}
				<div class="category_item">
					<label for={category.name}>{category.name}</label>
					<input
						id={category.name}
						bind:group={selectedCategories}
						type="checkbox"
						value={category.id}
					/>
				</div>
			{/each}
		</div>
		<div class="colors">
			{#each data.colors as color}
				<input
					id="{color.name};"
					type="checkbox"
					style="background-color: {color.color}"
					value={color.id}
					bind:group={selectedColors}
				/>
			{/each}
		</div>

		<!-- 3. -->

		<fieldset id="location">
			<legend>Location</legend>

			<label for="locality">Locality</label>
			<input type="text" id="locality" name="locality" />

			<label for="region">Region</label>
			<input type="text" id="region" name="region" />

			<label for="state">State</label>
			<input type="text" id="state" name="state" />
		</fieldset>

		<fieldset id="dimensions">
			<legend>Dimensions (in cm)</legend>

			<label for="width">Width</label>
			<input type="number" id="width" name="width" />

			<label for="height">Height</label>
			<input type="number" id="height" name="height" />

			<label for="depth">Depth</label>
			<input type="number" id="depth" name="depth" />

			<label for="weight">Weight</label>
			<input type="number" id="weight" name="weight" />
		</fieldset>

		<div class="description">
			<label for="description">Description</label>
			<textarea id="description" name="description" />
		</div>
		<!-- 4. -->

		<label class="images" for="images">Images</label>
		<input class="images" type="file" id="images" name="images" multiple on:change={onChange} />
		<div class="preview">
			{#each files as file, index}
				<div class="image_card images">
					<div class="head">
						<span>{file.name}</span>
						<button class="remove" on:click={() => removeFile(index)}>X</button>
					</div>

					<img src={URL.createObjectURL(file)} alt="Preview" />
				</div>
			{/each}
		</div>

		<!-- 5. -->

		<div class="date">
			<label class="date" for="date">Publish selected:</label>
			<input class="date" type="datetime-local" id="date" name="date" bind:this={currentDate} />
		</div>

		<div class="note">
			<label for="note">Note</label>
			<input type="text" id="note" name="note" />
		</div>

		<button id="submit" type="submit">submit</button>
	</form>

	<section class="add">
		<form method="post" action="?/addCategory">
			<input type="text" name="category" id="category" />
			<button type="submit">Add category</button>
		</form>

		<form method="post" action="?/addColor">
			<ColorPicker bind:hex />
			<input type="text" name="name" id="name" />
			<input type="hidden" name="hex" value={hex} />
			<button type="submit">Add color</button>
		</form>
	</section>
</section>

<style>
	.product {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.add {
		display: flex;
		justify-content: space-between;
	}
	.add form {
		background-color: #2b2b2b;
	}

	.product_form {
		font-size: larger;
		background-color: #2b2b2b;
		padding: 20px;
		border-radius: 5px;
		box-shadow: 0 2px 5px rgba(255, 255, 255, 0.11);
		max-width: 85%;
		margin: 0 auto;
		display: grid;
		grid-template-areas:
			'name price owner'
			'categories colors discount'
			'location dimensions description'
			'images images images '
			' image image image'
			'date note submit';
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 10px;
		row-gap: 2em;
		margin-top: 50px;
		color: #ffffff;
	}

	label {
		display: block;
		font-weight: bold;
		margin-bottom: 5px;
	}

	input[type='text'],
	input[type='number'],
	input[type='datetime-local'] {
		width: 50%;
		padding: 8px;
		border-radius: 3px;
		border: 1px solid #ccc;
		margin-bottom: 10px;
	}
	.colors input[type='checkbox'] {
		appearance: none;
		width: 1.8em;
		height: 1.8em;
		border: 1px solid gray;
	}
	.colors input[type='checkbox']:checked {
		border: 3px solid black;
		transition: 120ms transform ease-in-out;
	}

	button {
		padding: 8px 16px;
		background-color: black;
		color: #fff;
		border: none;
		border-radius: 3px;
		cursor: pointer;
	}

	button[type='submit'] {
		background-color: #008cba;
	}

	.preview {
		grid-area: image;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.image_card {
		display: flex;
		flex-direction: column;
		border: 1px solid black;
	}
	.image_card img {
		max-width: 16em;
		max-height: 16em;
		object-fit: scale-down;
	}
	.remove {
		background-color: #fff;
		padding: 0.2em 0.2em;
		font-size: 1.3em;
		color: red;
	}
	.head {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.name {
		grid-area: name;
	}
	.price {
		grid-area: price;
	}
	.owner {
		grid-area: owner;
	}
	.note {
		grid-area: note;
	}
	.category_item {
		display: flex;
		flex-direction: row;
	}
	.categories {
		grid-area: categories;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
	#colors {
		grid-area: colors;
	}
	#discount {
		grid-area: discount;
	}
	#location {
		grid-area: location;
	}
	#dimensions {
		grid-area: dimensions;
	}
	.description {
		grid-area: description;
	}
	#description {
		font-size: x-large;
		width: 100%;
		height: 100%;
		max-width: 660px;
		max-height: 285px;
		resize: both;
	}
	.images {
		grid-area: images;
	}
	.date {
		grid-area: date;
	}
	#submit {
		grid-area: submit;
	}
</style>
