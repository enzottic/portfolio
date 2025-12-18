<script>
    import Crossword from "svelte-crossword";

    const data = [
        {
            "clue": "Popular YouTube video meme. Sparta ____",
            "answer": "REMIX",
            "direction": "down",
            "x": 1,
            "y": 1,
        },
        {
            "clue": "What you may find in a haystack",
            "answer": "NEEDLE",
            "direction": "across",
            "x": 0,
            "y": 2
        },
        {
            "clue": "A component of RGB",
            "answer": "GREEN",
            "direction": "down",
            "x": 5,
            "y": 0 
        },
        {
            "clue": "Of an ancient South American civilization",
            "answer": "INCAN",
            "direction": "across",
            "x": 1,
            "y": 4
        },
        {
            "clue": "A perkless drink",
            "answer": "DECAF",
            "direction": "down",
            "x": 3,
            "y": 2,
        },
        {
            "clue": "Alternative term for a hot dog",
            "answer": "FRANK",
            "direction": "across",
            "x": 3,
            "y": 6
        }

    ]
</script>

<div class="screnzo-mini">
    <h1>The Miniature</h1>
    <h2>December 18th, 2025</h2>
    <Crossword data={data} theme="dark" showConfetti={false} />
</div>

<style>
    .screnzo-mini {
        text-align: center;
    }
</style>
