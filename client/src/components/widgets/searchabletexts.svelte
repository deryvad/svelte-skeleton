<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let texts = "";
    export let searchtxt = "";
    let highlightedtexts = "";
     
    $: if(searchtxt.trim() != ""){        
        let matchcount = 0;
        const regex = new RegExp(searchtxt, "gi");
        highlightedtexts = texts.replace(regex, (txt) => {
            matchcount += 1; 
            return `<span style="background:yellow">${txt}</span>`
        });    
        dispatch('setmatchcount', matchcount);    
    } else {
        highlightedtexts = texts;
        dispatch('setmatchcount', 0);
    }

</script>

<div>{@html highlightedtexts}</div>

<style>
    div{
        margin-bottom:50px;
    }
</style>