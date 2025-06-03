import { assertEquals } from "jsr:@std/assert/equals";


function minesweeper(grid: string): string {
    if (grid === ".") return "0";
    if (grid === "*") return "*";
    return "";
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