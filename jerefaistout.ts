import { assertEquals } from "jsr:@std/assert/equals";


function minesweeper(grid: string): string {
    if (grid == "*") return "*"
    return "";
}

Deno.test("grille vide", () => {
    assertEquals(minesweeper(""), "")
})

Deno.test("une mine toute seule", () => {
    assertEquals(minesweeper("*"), "*")
})