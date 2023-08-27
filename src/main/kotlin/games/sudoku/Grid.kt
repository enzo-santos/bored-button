package games.sudoku

class Grid(private val grid: Array<Array<Int>>) {
    constructor() : this(Array(9) { _ -> Array(9) { _ -> 0 } })

    fun copy(): Grid {
        return Grid(Array(9) { i ->
            Array(9) { j -> grid[i][j] }
        })
    }

    fun isEmpty(r: Int, c: Int): Boolean {
        return grid[r][c] == 0
    }

    fun setValue(r: Int, c: Int, v: Int) {
        grid[r][c] = v
    }

    fun getValue(r: Int, c: Int): Int {
        return grid[r][c]
    }

    fun getRow(r: Int): Array<Int> {
        return Array(9) { c -> grid[r][c] }
    }

    fun getColumn(c: Int): Array<Int> {
        return Array(9) { r -> grid[r][c] }
    }

    fun getChunk(i: Int, j: Int): Array<Int> {
        val ic = i * 3
        val jc = j * 3
        return Array(9) {
            val r = it % 3
            val c = it / 3
            grid[r + ic][c + jc]
        }
    }
}