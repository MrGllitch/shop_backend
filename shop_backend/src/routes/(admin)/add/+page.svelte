<script lang="ts">

    let categories=[]
    let colors=[]
</script>

<style>
  
    form {
      margin-top: 10px;
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      max-width: 66.6%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
      margin-top: 10px;
    }
  
    button[type="submit"] {
      background-color: #008CBA;
    }

    .groups{
        display: flex;
    }
  </style>
  

  <form>
    <label for="name">Name</label>
    <input type="text" id="name" name="name">
  
    <label for="price">Price</label>
    <input type="number" id="price" name="price">
  
    <label for="images">Images</label>
    <input type="file" id="images" name="images" multiple>
  
    <section class="groups">
    <fieldset>
      <legend>Location</legend>
  
      <label for="locality">Locality</label>
      <input type="text" id="locality" name="locality">
  
      <label for="region">Region</label>
      <input type="text" id="region" name="region">
  
      <label for="state">State</label>
      <input type="text" id="state" name="state">
    </fieldset>
  
    <fieldset>
      <legend>Dimensions (in cm)</legend>
  
      <label for="width">Width</label>
      <input type="number" id="width" name="width">
  
      <label for="height">Height</label>
      <input type="number" id="height" name="height">
  
      <label for="depth">Depth</label>
      <input type="number" id="depth" name="depth">
    </fieldset>
    </section>
    <label for="weight">Weight</label>
    <input type="number" id="weight" name="weight">
  
    <label for="description">Description</label>
    <input type="text" id="description" name="description">
  
    <h3>Select others</h3>
    <button>Create discount</button>
    <button>Select colors</button>
    <button>Select categories</button>
  
    <label for="date">Publish selected:</label>
    <input type="date" id="date" name="date">
  
    <button type="submit">submit</button>
  </form>
  
  

<!-- 
discounts Discount[]
colors Color[]
categories Category[]
publishedAt DateTime? -->