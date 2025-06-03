import { assertEquals } from "jsr:@std/assert/equals";


function minesweeper(grid: string): string {
    return "";
}

Deno.test("grille vide", () => {
    assertEquals(minesweeper(""), "")
})

Deno.test("une mine toute seule", () => {
    assertEquals(minesweeper("*"), "*")
})