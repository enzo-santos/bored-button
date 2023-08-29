package games.tzfe

enum class SlotDirection(
    val sign: Int,
    val vertical: Boolean,
    val rowRange: IntProgression,
    val colRange: IntProgression
) {
    ABOVE(sign = -1, vertical = true, rowRange = 1 until 4, colRange = 0 until 4),
    BELOW(sign = 1, vertical = true, rowRange = 3 downTo 0, colRange = 0 until 4),
    LEFT(sign = -1, vertical = false, rowRange = 0 until 4, colRange = 1 until 4),
    RIGHT(sign = 1, vertical = false, rowRange = 0 until 4, colRange = 3 downTo 0);
}