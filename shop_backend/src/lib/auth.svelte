<script lang="ts">


export let action = ""
</script>

<style>
    form{
        display: flex;
        flex-direction: column;
        color:rgba(0, 0, 0, 0.1);
        border: black solid 1px;
        border-radius: 15px;
        align-items: center;
        padding: 10px;
    }
    form p{
        color:black;
        margin: 1px;
    }
    form button {
        margin: 5px;
    }
</style>

<form method="post" action="">
    <p>user</p>
    <input type=email name="email" required>
    <p>pass</p>
    <input type=password name="password" required>
    <button type="submit">{action}</button>
</form>