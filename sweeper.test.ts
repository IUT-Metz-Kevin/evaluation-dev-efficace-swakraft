import { assertEquals } from "jsr:@std/assert/equals";


function minesweeper(grid: string): string {
    const r = grid.split("").map((character, i, arr) => {
        if (character === "*") return "*";
        let count = 0;
        if (arr[i - 1] === "*") count++;
        if (arr[i + 1] === "*") count++;
        return count.toString();
    }).join("");
    
    return r;
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