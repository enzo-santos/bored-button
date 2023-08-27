package screens

import csstype.*
import emotion.react.css
import kotlinx.browser.document
import org.w3c.dom.events.Event
import react.*
import react.dom.events.KeyboardEvent
import react.dom.html.InputType
import react.dom.html.ReactHTML
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.p

external interface WordleProps : Props

data class WordleState(
    val expectedWord: String,
    val attemptIndex: Int,
    val letterIndex: Int,
    val matrix: List<MutableList<Char?>>,
    val success: Boolean?,
)

@JsModule("latinize")
@JsNonModule
external fun latinize(value: String): String

private const val lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
private const val gameSize: Int = 6
private const val wordSize: Int = 5
private val gameWords: List<String> = listOf(
    "ajaua",
    "anavi",
    "apota",
    "aseno",
    "auleu",
    "bisbi",
    "bolão",
    "cauna",
    "cetil",
    "cúnia",
    "fanoa",
    "fátuo",
    "ferga",
    "gruir",
    "iriar",
    "istro",
    "maçom",
    "mutum",
    "népia",
    "novar",
    "omaha",
    "oxono",
    "pluto",
    "rabel",
    "riata",
    "rúbeo",
    "sério",
    "udana",
    "upema",
    "vileu",
)

fun createEmptyGameMatrix(): List<MutableList<Char?>> {
    val matrix = mutableListOf<MutableList<Char?>>()
    for (i in 0 until gameSize) {
        val row = mutableListOf<Char?>()
        for (j in 0 until wordSize) {
            row.add(null)
        }
        matrix.add(row)
    }
    return matrix
}

val Wordle = FC<WordleProps> { _ ->
    var state by useState(
        WordleState(
            expectedWord = gameWords.random(),
            attemptIndex = 0,
            letterIndex = 0,
            matrix = createEmptyGameMatrix(),
            success = null,
        )
    )
    val expectedWord = latinize(state.expectedWord)
    val letters = expectedWord.toSet()

    val checkKeyPress = useCallback<(Event) -> Unit>(listOf(state.attemptIndex, state.letterIndex)) callback@{ event ->
        val attemptIndex = state.attemptIndex
        val letterIndex = state.letterIndex

        val e = event.unsafeCast<KeyboardEvent<*>>()

        state = when (e.key) {
            "Backspace" -> {
                val nextLetterIndex = kotlin.math.max(0, letterIndex - 1)
                state.copy(
                    matrix = state.matrix.onEachIndexed { i, row ->
                        if (i == attemptIndex) {
                            row[nextLetterIndex] = null
                        }
                    },
                    letterIndex = nextLetterIndex,
                )
            }

            "Enter" -> {
                if (letterIndex < wordSize) return@callback

                if (attemptIndex < gameSize - 1) {
                    val actualWord = state.matrix[attemptIndex].joinToString("")
                    if (actualWord == expectedWord) {
                        state.copy(success = true)
                    } else {
                        state.copy(
                            attemptIndex = kotlin.math.min(gameSize - 1, attemptIndex + 1),
                            letterIndex = 0,
                        )
                    }
                } else {
                    state.copy(success = false)
                }
            }

//            "Escape" -> {
//                if (attemptIndex == 0) return@callback
//                state.copy(
//                    attemptIndex = kotlin.math.max(0, attemptIndex - 1),
//                    letterIndex = 0,
//                )
//            }

            else -> {
                if (e.key.length != 1) return@callback
                if (letterIndex == wordSize) return@callback

                val letter = latinize(e.key).lowercase()
                if (!lowercaseLetters.contains(letter)) return@callback

                val nextLetterIndex = kotlin.math.min(wordSize, letterIndex + 1)
                state.copy(
                    matrix = state.matrix.onEachIndexed { i, row ->
                        if (i == attemptIndex) {
                            row[letterIndex] = letter[0]
                        }
                    },
                    letterIndex = nextLetterIndex,
                )
            }
        }
    }
    useEffect(checkKeyPress) {
        document.addEventListener("keydown", checkKeyPress)
        cleanup {
            document.removeEventListener("keydown", checkKeyPress)
        }
    }

    div {
        css {
            display = Display.flex
            flexDirection = FlexDirection.column
            alignItems = AlignItems.center
            rowGap = 10.px
        }
        for (i in 0 until gameSize) {
            div {
                key = "$i"
                css {
                    display = Display.flex
                    flexDirection = FlexDirection.row
                }
                for (j in 0 until wordSize) {
                    input {
                        key = "$i.$j"
                        css {
                            width = 30.px
                            height = 30.px
                            flex = Flex(number(1.0), FlexBasis.fitContent)
                            fontSize = 14.px
                            textAlign = TextAlign.center
                            if (i < state.attemptIndex || state.success != null) {
                                backgroundColor = if (expectedWord[j] == state.matrix[i][j])
                                    NamedColor.lightgreen
                                else if (letters.contains(state.matrix[i][j]))
                                    NamedColor.lightyellow
                                else
                                    NamedColor.lightgray

                            } else if (i == state.attemptIndex && j == state.letterIndex) {
                                backgroundColor = NamedColor.aliceblue
                            }
                        }
                        value = state.matrix[i][j]?.toString() ?: ""
                        type = InputType.text
                        maxLength = 1
                        disabled = true
                    }
                }
            }
        }
        if (state.success != null) {
            p {
                +"A palavra era ${state.expectedWord}."
            }
        }
        if (state.success != null) {
            ReactHTML.button {
                +"retry"
                onClick = { _ ->
                    var newWord: String
                    do {
                        newWord = gameWords.random()
                    } while (newWord == expectedWord)
                    state = state.copy(
                        expectedWord = newWord,
                        attemptIndex = 0,
                        letterIndex = 0,
                        matrix = createEmptyGameMatrix(),
                        success = null,
                    )
                }
            }
        }
    }
}
