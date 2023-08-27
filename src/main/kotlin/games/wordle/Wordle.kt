package games.wordle

enum class LetterStatus { EXACT, APPROXIMATE, NONE }
class Wordle(private val baseWord: String) {
    private val baseLetters = baseWord.toSet()
    private val visited: MutableMap<Char, LetterStatus?> = mutableMapOf()
    fun analyze(word: String): List<Pair<Char, LetterStatus?>> {
        if (word == baseWord) {
            return baseWord.map { letter -> letter to LetterStatus.EXACT }
        }
        return word.mapIndexed { i, letter ->
            val status: LetterStatus = visited[letter]
                ?: if (letter == baseWord[i]) {
                    LetterStatus.EXACT
                } else if (baseLetters.contains(letter)) {
                    LetterStatus.APPROXIMATE
                } else {
                    LetterStatus.NONE
                }
            visited[letter] = status
            letter to status
        }
    }
}