import { assertEquals } from "jsr:@std/assert/equals";


function minesweeper(grid: string): string {
    if (grid == ".") return "0"
    if (grid == "*") return "*"
    return "";
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