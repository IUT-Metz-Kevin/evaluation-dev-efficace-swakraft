import { assertEquals } from "jsr:@std/assert/equals";


function minesweeper(grid: string): string {
    const arrayGrid: string[][] = grid.split("\n").map((line) => line.split(""))
    let r = "";

    for (let x = 0; x < arrayGrid.length; x++) {
        const currentLine = arrayGrid[x];
        const nextLine = arrayGrid[x + 1];
        console.log(currentLine)
        for (let y = 0; y < currentLine.length; y++) {
            const currentCharacter = arrayGrid[x][y]
            console.log(currentCharacter)

            if (currentCharacter === "*") {
                r += "*";
            } else {
                let count = 0;

                if (currentLine[y - 1] === "*") count++; // à gauche
                if (currentLine[y + 1] === "*") count++; // à droite
                if (nextLine) {
                    if (nextLine[y - 1] === "*") count++ // en bas à gauche
                    if (nextLine[y] === "*") count++ // en dessous
                    if (nextLine[y + 1] === "*") count++ // en bas à droite
                }
                r += count;
            }
        }
        r += "\n";
    }

    return r.trim();
}

Deno.test("point simple sans mine", () => {
    assertEquals(minesweeper("."), "0")
});

Deno.test("simple mine", () => {
    assertEquals(minesweeper("*"), "*")
});

Deno.test("grille 1D", () => {
    assertEquals(minesweeper(".*.**."), "1*2**1")
});

Deno.test("gille 2D 2 lignes", () => {
    assertEquals(minesweeper(".*.**.\n....*.").split("\n")[0], "1*2**2")
})

Deno.test("grille 2D 2 correlation 2 lignes", () => {
    assertEquals(minesweeper(".*.**.\n....*."), "1*2**2\n1123*2")
})