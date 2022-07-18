<script>
    import {Router, Route} from "svelte-navigator";
	import Home from "./components/pages/home.svelte";
	import Error from "./components/pages/error.svelte";

    export let appname = "";
	document.title = appname;
</script>

<div class="app">
    <Router>
        <Route path="/">
            <Home/>
        </Route>
        <Route path="/error">
            <Error errorCode="404"/>
        </Route>
    </Router>
</div>

<style global lang="scss">
    html,body{
        margin: 0;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 16px;

        & *{
            outline:none;
            line-height: 1.5;
        }

        button{
            padding: 10px 25px;
            cursor:pointer;
            background: rgb(33, 120, 207);
            color:white;
            border:0;
            border-radius: 3px;

            &:hover{
                background: rgb(5, 88, 171);
            }
        }
        input {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 16px;
            border-radius: 3px;
            border: 1px solid #a0a0a0;
        }
        .app {
            padding: 0 30px;
        }
    }
</style>