<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import ColorPicker from 'svelte-awesome-color-picker';
	export let data: PageData;
	let categories = [];
	let colors = [];
	let files: any = [];
	let hex: string;
	let currentDate;

	function onChange(event: any) {
		const fileList = event.target.files;
		files = [...files, ...Array.from(fileList)];
	}
	function removeFile(index: number) {
		files = files.filter((_: any, i: any) => i !== index);
	}

	onMount(() => {
		const now = new Date();
		currentDate = now.toISOString();
	});
</script>

<section class="product">
	<form class="product_form" method="post" action="?/addProduct">
		<!-- 1. -->

		<div class="name">
			<label for="name">Name</label>
			<input type="text" id="name" name="name" value={data.display_products?.name} />
		</div>

		<div class="price">
			<label for="price">Price</label>
			<input type="number" id="price" name="price" value={data.display_products?.price} />
		</div>

		<div class="owner">
			<label for="owner">Owner</label>
			<!-- <input type="text" id="owner" name="owner" value={data.display_products?.owner.name} /> -->
		</div>

		<!-- 2. -->
		<!-- <div class="categories">
			{#each data.categories as category}
				<div class="category_item">
					<label for={category.name}>{category.name}</label>
					<input id={category.name} type="checkbox" />
				</div>
			{/each}
		</div>
		<div class="colors">
			{#each data.colors as color}
				<input type="checkbox" style="background-color: {color.color}" />
			{/each}
		</div> -->

		<!-- 3. -->

		<fieldset id="location">
			<legend>Location</legend>

			<label for="locality">Locality</label>
			<input type="text" id="locality" name="locality" value={data.display_products?.locality} />

			<label for="region">Region</label>
			<input type="text" id="region" name="region" value={data.display_products?.region} />

			<label for="state">State</label>
			<input type="text" id="state" name="state" value={data.display_products?.state} />
		</fieldset>

		<fieldset id="dimensions">
			<legend>Dimensions (in cm)</legend>

			<label for="width">Width</label>
			<input type="number" id="width" name="width" value={data.display_products?.width} />

			<label for="height">Height</label>
			<input type="number" id="height" name="height" value={data.display_products?.height} />

			<label for="depth">Depth</label>
			<input type="number" id="depth" name="depth" value={data.display_products?.depth} />

			<label for="weight">Weight</label>
			<input type="number" id="weight" name="weight" value={data.display_products?.weight} />
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
			<input type="text" id="note" name="note" value={data.display_products?.note} />
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
