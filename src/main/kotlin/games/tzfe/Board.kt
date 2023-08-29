package games.tzfe

class Board {
    private companion object {
        const val rowSize = 4
        const val colSize = 4
    }

    private val slots: Array<Array<Slot>> = Array(rowSize) {
        Array(colSize) { Slot(null) }
    }
    private var count = 0

    val isFull: Boolean
        get() = this.count == rowSize * colSize

    operator fun set(r: Int, c: Int, slot: Slot) {
        slots[r][c] = slot
    }

    operator fun get(r: Int, c: Int): Slot {
        return slots[r][c]
    }

    operator fun get(r: Int, c: Int, direction: SlotDirection): Slot? {
        val rowOffset = when (direction) {
            SlotDirection.ABOVE -> -1
            SlotDirection.BELOW -> 1
            else -> 0
        }
        val colOffset = when (direction) {
            SlotDirection.LEFT -> -1
            SlotDirection.RIGHT -> 1
            else -> 0
        }
        val newR = r + rowOffset
        val newC = c + colOffset
        if (newR < 0 || newR > rowSize - 1) return null
        if (newC < 0 || newC > colSize - 1) return null
        return slots[newR][newC]
    }

    private fun move(r: Int, c: Int, slot: Slot): Boolean {
        val dst = this[r, c]
        if (dst.value != null) return false

        dst.value = slot.value
        slot.value = null
        return true
    }

    fun add(r: Int, c: Int, value: Int): Boolean {
        val dst = this[r, c]
        if (dst.value != null) return false

        dst.value = value
        ++count
        return true
    }

    private fun clearMergedStates() {
        slots.forEach { row ->
            row.forEach { slot ->
                slot.isMerged = false
            }
        }
    }

    fun move(direction: SlotDirection) {
        val primaryProgression: IntProgression
        val secondaryProgression: IntProgression
        if (direction.vertical) {
            primaryProgression = direction.rowRange
            secondaryProgression = direction.colRange
        } else {
            primaryProgression = direction.colRange
            secondaryProgression = direction.rowRange
        }
        for (pk in primaryProgression) {
            for (sk in secondaryProgression) {
                val i: Int
                val j: Int
                if (direction.vertical) {
                    i = pk
                    j = sk
                } else {
                    i = sk
                    j = pk
                }

                var k = pk
                var src = this[i, j]
                var dst = this[i, j, direction]
                if (src.value == null) continue

                while (true) {
                    if (dst == null) break
                    if (src.merge(dst)) {
                        --count
                        break
                    }
                    if (dst.value != null) break

                    k += direction.sign
                    val newI: Int
                    val newJ: Int
                    if (direction.vertical) {
                        newI = k
                        newJ = j
                    } else {
                        newI = i
                        newJ = k
                    }
                    move(newI, newJ, src)
                    src = this[newI, newJ]
                    dst = this[newI, newJ, direction]
                }
            }
        }
        clearMergedStates()
    }
}