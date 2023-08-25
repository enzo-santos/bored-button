package games

private val chunkRange = 0 until 3
private val sudokuRange = 0 until 9

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

class Sudoku(grid: Grid) {
    private var lastRow: Int? = null
    private var lastCol: Int? = null

    var grid = grid
        private set

    companion object {
        val randomSample: Grid
            get() {
                val samples = arrayOf(sample1, sample2, sample3)
                return samples.random()
            }
        private val sample1: Grid = Grid(
            arrayOf(
                arrayOf(0, 3, 7, 6, 0, 1, 5, 8, 4),
                arrayOf(8, 0, 0, 3, 0, 4, 9, 2, 0),
                arrayOf(6, 0, 9, 2, 5, 0, 3, 7, 1),
                arrayOf(9, 8, 0, 5, 6, 7, 1, 0, 0),
                arrayOf(0, 6, 0, 4, 1, 2, 0, 9, 0),
                arrayOf(0, 0, 1, 8, 3, 9, 0, 6, 5),
                arrayOf(7, 9, 6, 0, 4, 3, 8, 0, 2),
                arrayOf(0, 5, 8, 7, 0, 6, 0, 0, 9),
                arrayOf(1, 2, 4, 9, 0, 5, 6, 3, 0),
            ),
        )
        private val sample2: Grid = Grid(
            arrayOf(
                arrayOf(1, 6, 8, 0, 0, 0, 9, 0, 2),
                arrayOf(0, 0, 0, 3, 0, 1, 0, 0, 0),
                arrayOf(0, 3, 0, 6, 2, 0, 0, 0, 0),
                arrayOf(0, 0, 9, 0, 0, 0, 1, 0, 6),
                arrayOf(0, 0, 1, 0, 0, 0, 3, 7, 0),
                arrayOf(0, 4, 3, 5, 0, 0, 0, 0, 9),
                arrayOf(0, 0, 0, 8, 0, 2, 6, 0, 0),
                arrayOf(0, 0, 0, 9, 0, 5, 0, 2, 3),
                arrayOf(2, 0, 6, 0, 3, 0, 7, 0, 0),
            )
        )
        private val sample3: Grid = Grid(
            arrayOf(
                arrayOf(9, 0, 0, 0, 0, 0, 0, 0, 0),
                arrayOf(0, 0, 6, 8, 0, 7, 0, 0, 0),
                arrayOf(7, 5, 0, 2, 0, 1, 0, 0, 3),
                arrayOf(0, 1, 4, 7, 0, 0, 9, 0, 2),
                arrayOf(0, 0, 0, 3, 6, 9, 1, 0, 8),
                arrayOf(0, 8, 0, 0, 0, 0, 0, 5, 0),
                arrayOf(1, 9, 2, 4, 0, 0, 0, 0, 0),
                arrayOf(0, 0, 0, 9, 2, 0, 6, 0, 0),
                arrayOf(4, 0, 0, 0, 0, 0, 0, 0, 9),
            )
        )

        fun checkDigits(row: Array<Int>): Boolean {
            val visited = hashSetOf<Int>()
            for (value in row) {
                if (value < 1 || value > 9) return false
                if (!visited.add(value)) return false
            }
            return true
        }
    }

    init {
        loop@ for (i in 8 downTo 0) {
            for (j in 8 downTo 0) {
                if (grid.isEmpty(i, j)) {
                    lastRow = i
                    lastCol = j
                    break@loop
                }
            }
        }
    }

    fun solve(): Boolean {
        var contSolutions: Int
        var sols = Array(9) { _ -> false }

        for (i in sudokuRange) {
            for (j in sudokuRange) {
                if (grid.isEmpty(i, j)) {
                    contSolutions = 0
                    for (s in sudokuRange) {
                        sols[s] = true
                    }

                    sols = checkSolutions(sols, i, j)

                    for (s in sudokuRange) {
                        if (sols[s]) {
                            ++contSolutions
                        }
                    }

                    if (contSolutions == 0) {
                        return false
                    }
                    if (contSolutions == 1) {
                        for (s in sudokuRange) {
                            if (sols[s]) {
                                grid.setValue(i, j, s + 1)
                                if (i == lastRow && j == lastCol) {
                                    return true
                                }
                                break
                            }
                        }
                        continue
                    }
                    for (s in sudokuRange) {
                        if (sols[s]) {
                            val newGrid = grid.copy()
                            newGrid.setValue(i, j, s + 1)

                            val sudoku = Sudoku(newGrid)
                            if (sudoku.solve()) {
                                grid = sudoku.grid.copy()
                                return true
                            }
                        }
                    }
                    return false
                }
            }
        }
        return isSolved
    }

    private fun checkSolutions(sols: Array<Boolean>, r: Int, c: Int): Array<Boolean> {
        val result = Array(9) { i -> sols[i] }
        var pos: Int
        for (i in sudokuRange) {
            if (!grid.isEmpty(r, i)) {
                pos = grid.getValue(r, i) - 1
                result[pos] = false
            }
            if (!grid.isEmpty(i, c)) {
                pos = grid.getValue(i, c) - 1
                result[pos] = false
            }
        }

        val rul = r / 3
        val cul = c / 3
        for (i in 3 * rul until 3 * rul + 3) {
            for (j in 3 * cul until 3 * cul + 3) {
                if (!grid.isEmpty(i, j)) {
                    pos = grid.getValue(i, j) - 1
                    result[pos] = false
                }
            }
        }
        return result
    }

    private val isSolved: Boolean
        get() {
            for (r in sudokuRange) {
                val row = grid.getRow(r)
                println("row: ${row.joinToString(", ")}")
                if (!checkDigits(row)) return false
            }
            for (c in sudokuRange) {
                val col = grid.getColumn(c)
                println("col: ${col.joinToString(", ")}")
                if (!checkDigits(col)) return false
            }
            for (r in chunkRange) {
                for (c in chunkRange) {
                    val chunk = grid.getChunk(r, c)
                    println("chunk: ${chunk.joinToString(", ")}")
                    if (!checkDigits(chunk)) return false
                }
            }
            return true
        }

    override fun toString(): String {
        val buffer = StringBuilder()
        for (i in sudokuRange) {
            for (j in sudokuRange) {
                buffer.append(
                    if (i == 0) {
                        if (j == 0) "╔═══"
                        else if (j % 3 != 0) "╤═══"
                        else "╦═══"
                    } else if (i % 3 != 0) {
                        if (j == 0) "╟───"
                        else if (j % 3 != 0) "┼───"
                        else "╫───"
                    } else {
                        if (j == 0) "╠═══"
                        else if (j % 3 != 0) "╪═══"
                        else "╬═══"
                    }
                )
            }
            buffer.appendLine(
                if (i == 0) "╗"
                else if (i % 3 != 0) "╢"
                else "╣"
            )
            for (j in sudokuRange) {
                val value = grid.getValue(i, j)
                buffer.append(if (j % 3 != 0) "│ " else "║ ")
                buffer.append(if (value == 0) " " else "$value")
                buffer.append(" ")
            }
            buffer.appendLine("║")
        }
        for (j in sudokuRange) {
            buffer.append(
                if (j == 0) "╚═══"
                else if (j % 3 != 0) "╧═══"
                else "╩═══"
            )
        }
        buffer.appendLine("╝")
        return buffer.toString()
    }
}
