<script>
    import ajax from "../../ajax.js";
	import SearchableTexts from "../widgets/searchabletexts.svelte";
	import Textbox from "../controls/textbox.svelte";
    let count = 100;
    let searchtxt = "";
    let randomtxt = "";
    let matchcount = 0;
    
    const randomizetexts = async () => {
        randomtxt = await ajax.get(`/.netlify/functions/randomtext`);
    }
    const setmatchcount = (event) => {
        matchcount = event.detail;
    }

    randomizetexts();
</script>

<h1>Welcome to the Svelte Skeleton App by Spidey</h1>
<div>
    This is a simple application where you can generate random paragraphs and search words from it. 
</div>
<br>
<div>
    <span class="search">
        <Textbox placeholder="Search for a text..." bind:text={searchtxt}></Textbox>
    </span>
    <span>match: {matchcount}</span>
</div>
<br>
<div>
    <span class="generate">
        <button on:click={randomizetexts}>Generate Random Texts</button>
    </span>
</div>
<br>
<SearchableTexts on:setmatchcount={setmatchcount} texts={randomtxt} searchtxt={searchtxt}></SearchableTexts>

<style lang="scss">
    .search{
        display:inline-block;
        width: 40%;
    }
</style>