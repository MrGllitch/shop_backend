<script lang="ts">
    // your script goes here
    export let row = {
      id: '',
      name: '',
      locality: '',
      state: '',
      region: '',
      price: '',
      width: '',
      height: '',
      depth: '',
      weight: '',
      visible: true
    };
  </script>
  
  <style>
    li {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
    tr:nth-child(even) {
        background-color: #dddddd;
    }
  </style>
  

    <tr>
      {#each Object.values(row) as value}
        <td>{value}</td>
      {/each}
    </tr>
