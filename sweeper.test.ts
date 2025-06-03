import { assertEquals } from "jsr:@std/assert/equals";


function minesweeper(grid: string): string {
    const arrayGrid: string[][] = grid.split("\n").map((line) => line.split(""))
    let r = "";

    for (let x = 0; x < arrayGrid.length; x++) {
        const prevLine = arrayGrid[x - 1];
        const currentLine = arrayGrid[x];
        const nextLine = arrayGrid[x + 1];
        for (let y = 0; y < currentLine.length; y++) {
            const currentCharacter = arrayGrid[x][y]
            if (currentCharacter === "*") {
                r += "*";
            } else {
                let count = 0;

                if (prevLine) { // HAUT
                    if (prevLine[y - 1] === "*") count++ // en haut à gauche
                    if (prevLine[y] === "*") count++ // en haut
                    if (prevLine[y + 1] === "*") count++ // en haut à droite
                }

                // LIGNE COURANTE
                if (currentLine[y - 1] === "*") count++; // à gauche
                if (currentLine[y + 1] === "*") count++; // à droite

                if (nextLine) { // BAS
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