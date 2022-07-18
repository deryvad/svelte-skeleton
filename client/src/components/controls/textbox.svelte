<script>
    export let text = "";
    export let placeholder = "";
</script>

<input type="text" placeholder={placeholder} bind:value={text} />

<style>
    input{
        padding: 8px 10px;
        width: 100%;
        box-sizing: border-box;
        outline:none;
    }
</style>