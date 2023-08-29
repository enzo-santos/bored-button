package games.tzfe

class Slot(var value: Int?) {
    var isMerged = false

    fun merge(other: Slot): Boolean {
        val src = value
        val dst = other.value
        if (src == null || dst == null || other.isMerged || src != dst) {
            return false
        }
        value = null
        other.value = dst * 2
        other.isMerged = true
        return true
    }

    override fun equals(other: Any?): Boolean {
        if (other == null) return false
        if (other !is Slot) return false
        return value == other.value
    }

    override fun hashCode(): Int {
        return value ?: 0
    }
}