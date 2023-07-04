<script lang="ts">

    let categories=[]
    let colors=[]
    let files : any = []; 

function onChange(event : any) {
  const fileList = event.target.files;
  files = [...files, ...Array.from(fileList)];
}
function removeFile(index : number) {
    files = files.filter((_: any, i: any) => i !== index);
  }
</script>

<style>
  
    form {
      margin-top: 10px;
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      max-width: 85%;
      margin: 0 auto; 
      display: grid;
      grid-template-areas:
      "name price owner"
      "categories colors discount"
      "location dimensions description"
      "images images images "
      "date note submit";
      column-gap: 10px;
      row-gap: 5em;

    }
  
    label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
    }
  
    input[type="text"],
    input[type="number"],
    input[type="date"] {
      width: 50%;
      padding: 8px;
      border-radius: 3px;
      border: 1px solid #ccc;
      margin-bottom: 10px;
    }
  
    button {
      padding: 8px 16px;
      background-color: black;
      color: #fff;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
  
    button[type="submit"] {
      background-color: #008CBA;
    }


    .preview{
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
    .image_card img{
      max-width: 16em;
      max-height: 16em;
      object-fit: scale-down;
    }
    .remove{
      background-color: #fff;
      padding: 0.2em 0.2em;
      font-size: 1.3em;
      color: red;
    }
    .head{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .name{
      grid-area: name;
    }
    .price{
      grid-area: price;
    }
    .owner{
      grid-area: owner;
    }
    .note{
      grid-area: note;
    }
    #categories{
      grid-area: categories;
    }
    #colors{
      grid-area: colors;
    }
    #discount{
      grid-area: discount;
    }
    #location{
      grid-area: location;
    }
    #dimensions{
      grid-area: dimensions;
    }
    .description{
      grid-area: description;
    }
    .images{
      grid-area: images;
    }
    .date{
      grid-area: date;
    }
    #submit{
      grid-area: submit;
    }
  </style>
  

  <form>

  <!-- 1. -->
    <label class="name" for="name">Name</label>
    <input class="name" type="text" id="name" name="name">

    <label class="price" for="price">Price</label>
    <input class="price" type="number" id="price" name="price">

    <label class="owner" for="owner">Owner</label>
    <input class="owner" type="text" id="owner" name="owner">

    <label class="note" for="note">Note</label>
    <input class="note" type="text" id="note" name="note">

  <!-- 2. -->

    <button id="categories">Select categories</button>
    <button id="colors">Select colors</button>
    <button id="discount">Create discount</button>
  
  <!-- 3. -->

  <fieldset id="location">
    <legend>Location</legend>

    <label for="locality">Locality</label>
    <input type="text" id="locality" name="locality">

    <label for="region">Region</label>
    <input type="text" id="region" name="region">

    <label for="state">State</label>
    <input type="text" id="state" name="state">
  </fieldset>

  <fieldset id="dimensions">
    <legend>Dimensions (in cm)</legend>

    <label for="width">Width</label>
    <input type="number" id="width" name="width">

    <label for="height">Height</label>
    <input type="number" id="height" name="height">

    <label for="depth">Depth</label>
    <input type="number" id="depth" name="depth">

    <label for="weight">Weight</label>
    <input type="number" id="weight" name="weight">
  </fieldset>
  
  <label class="description" for="description">Description</label>
  <input class="description" type="text" id="description" name="description">

  <!-- 4. -->

    <label class="images" for="images">Images</label>
    <input class="images" type="file" id="images" name="images" multiple on:change={onChange}>
    <div class="preview images">
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
  
    <label class="date" for="date">Publish selected:</label>
    <input class="date" type="date" id="date" name="date">
  
    <button id="submit" type="submit">submit</button>
  </form>
  
  

