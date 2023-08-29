package screens

import csstype.*
import emotion.react.css
import games.tzfe.SlotDirection
import kotlinx.browser.document
import org.w3c.dom.events.Event
import react.*
import react.dom.events.KeyboardEvent
import react.dom.html.InputType
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.input
import kotlin.random.Random

external interface TZFEProps : Props

data class TZFEState(
    val board: games.tzfe.Board,
    val attempt: Int
)

private fun <T> weightedRandom(specs: Map<T, Double>): T {
    var sum = 0.0
    val target = Random.nextDouble()
    specs.forEach { (value, weight) ->
        sum += weight
        if (target <= sum) return value
    }
    throw IllegalStateException()
}


val TZFE = FC<TZFEProps> { _ ->
    var state by useState(
        TZFEState(board = games.tzfe.Board(), attempt = 0)
    )

    fun addRandom(update: Boolean = true) {
        val value = weightedRandom(mapOf(2 to .9, 4 to .1))
        if (state.board.isFull) return
        var r: Int
        var c: Int
        do {
            r = Random.nextInt(4)
            c = Random.nextInt(4)
        } while (!state.board.add(r, c, value))
        if (update) {
            state = state.copy()
        }
    }

    val checkKeyPress = useCallback<(Event) -> Unit>(state.attempt) callback@{ event ->
        val e = event.unsafeCast<KeyboardEvent<*>>()
        val direction = when (e.key) {
            "ArrowUp" -> SlotDirection.ABOVE
            "ArrowDown" -> SlotDirection.BELOW
            "ArrowLeft" -> SlotDirection.LEFT
            "ArrowRight" -> SlotDirection.RIGHT
            else -> return@callback
        }
        state.board.move(direction)
        addRandom(update = false)
        state = state.copy()
    }
    useEffect(checkKeyPress) {
        document.addEventListener("keydown", checkKeyPress)
        cleanup {
            document.removeEventListener("keydown", checkKeyPress)
        }
    }
    useEffect(state.attempt) {
        repeat(2) { addRandom() }
    }

    div {
        css {
            display = Display.flex
            flexDirection = FlexDirection.column
            alignItems = AlignItems.center
        }
        for (i in 0 until 4) {
            div {
                key = "$i"
                css {
                    display = Display.flex
                    flexDirection = FlexDirection.row
                }
                for (j in 0 until 4) {
                    val slot = state.board[i, j]
                    input {
                        key = "$i.$j"
                        css {
                            width = 30.px
                            height = 30.px
                            flex = Flex(number(1.0), FlexBasis.fitContent)
                            fontSize = 14.px
                            textAlign = TextAlign.center
                            backgroundColor = when (slot.value) {
                                2 -> Color("#EEE4DA")
                                4 -> Color("#EDE0C8")
                                8 -> Color("#F2B179")
                                16 -> Color("#F59563")
                                32 -> Color("#F67C5F")
                                64 -> Color("#F65E3B")
                                128 -> Color("#EDCF72")
                                256 -> Color("#EDCC61")
                                512 -> Color("#EDC850")
                                1024 -> Color("#EDC53F")
                                2048 -> Color("#EDC2E2")
                                4096 -> Color("#3E3933")
                                else -> Color("#CCC0B3")
                            }
                        }
                        value = slot.value?.toString() ?: ""
                        type = InputType.text
                        maxLength = 1
                        disabled = true

                    }
                }
            }
        }
        button {
            css {
                margin = Margin(vertical = 10.px, horizontal = 0.px)
            }
            +"reset"
            onClick = { _ ->
                state = state.copy(
                    board = games.tzfe.Board(),
                    attempt = state.attempt + 1,
                )
            }
        }
    }
}
