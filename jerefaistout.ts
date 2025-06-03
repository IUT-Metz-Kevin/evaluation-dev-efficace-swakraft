import { assertEquals } from "jsr:@std/assert/equals";


function minesweeper(grid: string): string {
    let result = "";
    for (let i = 0; i < grid.length; i++) {
        if (grid[i] == "*") {
            result += "*"
        } else {
            let count = 0;
            if (grid[i + 1] == "*") count++
            if (grid[i - 1] == "*") count++
            result += count
        }
    }
    return result;
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