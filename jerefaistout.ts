import { assertEquals } from "jsr:@std/assert/equals";


function minesweeper(grid: string): string {
    let result = "";
    const arrayGrid: string[][] = grid.split("\n").map((line) => line.split(""))

    for (let j = 0; j < arrayGrid.length; j++) {
        for (let i = 0; i < arrayGrid[j].length; i++) {
            if (arrayGrid[j][i] == "*") {
                result += "*"
            } else {
                let count = 0;
                if (arrayGrid[j][i + 1] == "*") count++
                if (arrayGrid[j][i - 1] == "*") count++
                if (arrayGrid[j + 1]) if (arrayGrid[j + 1][i] == "*") count++
                if (arrayGrid[j + 1]) if (arrayGrid[j + 1][i + 1] == "*") count++
                if (arrayGrid[j - 1]) if (arrayGrid[j - 1][i] == "*") count++
                result += count

            }
        }

        result += "\n"
    }

    return result.trim();
}

Deno.test("grille vide", () => {
    assertEquals(minesweeper(""), "")
})

Deno.test("une mine toute seule", () => {
    assertEquals(minesweeper("*"), "*")
})

Deno.test("pas de mine", () => {
    assertEquals(minesweeper("."), "0")
})

Deno.test("une mine à gauche et rien à droite", () => {
    assertEquals(minesweeper("*."), "*1")
})

Deno.test("une mine à droite et rien à gauche", () => {
    assertEquals(minesweeper(".*"), "1*")
})

Deno.test("une mine en dessous", () => {
    assertEquals(minesweeper(".\n*"), "1\n*")
})

Deno.test("une mine au dessus", () => {
    assertEquals(minesweeper("*\n."), "*\n1")
})

Deno.test("une mine en bas à droite", () => {
    assertEquals(minesweeper("..\n.*"), "11\n1*")
})

Deno.test("une mine en bas à gauche", () => {
    assertEquals(minesweeper("..\n*."), "11\n*1")
})