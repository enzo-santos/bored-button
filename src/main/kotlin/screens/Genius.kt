package screens

import csstype.*
import emotion.react.css
import kotlinx.js.timers.Timeout
import kotlinx.js.timers.clearTimeout
import kotlinx.js.timers.setTimeout
import react.*
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.p
import react.dom.svg.ReactSVG.path
import react.dom.svg.ReactSVG.svg
import kotlin.math.roundToInt
import kotlin.time.Duration.Companion.seconds

@JsModule("tinycolor2")
@JsNonModule
external fun tinycolor(value: String): TinyColor

@JsModule("tinycolor2")
@JsNonModule
external class TinyColor {
    fun lighten(amount: Int): TinyColor
    fun toHexString(): String
}

const val cx: Int = 100
const val cy: Int = 100
const val outerRadius: Int = 100
const val innerRadius: Int = 33

external interface GeniusBoardProps : Props {
    var values: Collection<GeniusValue>
    var onSelected: (GeniusValue) -> Unit
    var selected: GeniusValue?
}

val GeniusBoard = FC<GeniusBoardProps> { props ->
    val step = 360 / props.values.size
    svg {
        width = outerRadius * 2.0
        height = outerRadius * 2.0
        xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 ${outerRadius * 2} ${outerRadius * 2}"
        props.values.forEachIndexed { i, value ->
            GeniusBoardButton {
                key = "$i"
                this.value = value
                this.step = step
                groupValue = props.selected
                angle = i * step
                onSelected = { props.onSelected(value) }
            }
        }
    }
}

external interface GeniusBoardButtonProps : Props {
    var value: GeniusValue
    var groupValue: GeniusValue?
    var angle: Int
    var step: Int
    var onSelected: () -> Unit
}

val GeniusBoardButton = FC<GeniusBoardButtonProps> { props ->
    fun at(degrees: Int, radius: Int): Pair<Int, Int> {
        val radians = degrees * kotlin.math.PI / 180
        val x = (cx + radius * kotlin.math.sin(radians)).roundToInt()
        val y = -(-cy + radius * kotlin.math.cos(radians)).roundToInt()
        return x to y
    }

    val fillColor = props.value.hexCode
    val color = if (props.groupValue == props.value)
        tinycolor(fillColor).lighten(20).toHexString()
    else
        fillColor

    val (x0, y0) = if (innerRadius == 0)
        (cx to cy)
    else
        at(props.angle, innerRadius)

    val (x1, y1) = at(props.angle, outerRadius)
    val (x2, y2) = at(props.angle + props.step, outerRadius)
    val (x3, y3) = if (innerRadius == 0)
        (cx to cy)
    else
        at(props.angle + props.step, innerRadius)

    path {
        fill = color
        d = "M $x0 $y0 " +
                "L $x1 $y1 " +
                "A $outerRadius $outerRadius 0 0 1 $x2 $y2 " +
                "L $x3 $y3" +
                (if (innerRadius == 0) "" else " A $innerRadius $innerRadius 0 0 0 $x0 $y0")

        if (props.groupValue == null) {
            cursor = "pointer"
            onClick = { _ -> props.onSelected() }
        }
    }
}

enum class GeniusValue(val hexCode: String) {
    RED("#FF5252"),
    BLUE("#448AFF"),
    YELLOW("#FFD740"),
    GREEN("#69F0AE"),
}

data class GeniusState(
    val started: Boolean,
    val playingIndex: Int?,
    val solvingIndex: Int?,
    val currentTimeout: Timeout?,
    val colors: List<GeniusValue>,
)

val Genius = FC<Props> { _ ->
    var state by useState(
        GeniusState(
            started = false,
            playingIndex = null,
            solvingIndex = null,
            currentTimeout = null,
            colors = emptyList(),
        )
    )
    useEffect(state.playingIndex) {
        val playingIndex = state.playingIndex

        val currentTimeout = if (playingIndex == null) {
            null
        } else {
            setTimeout(2.seconds) {
                val maxPlayingIndex = state.colors.lastIndex
                state = if (playingIndex == maxPlayingIndex) {
                    state.copy(playingIndex = null, solvingIndex = 0)
                } else {
                    state.copy(playingIndex = playingIndex + 1)
                }
            }
        }
        state = state.copy(currentTimeout = currentTimeout)
    }

    div {
        css {
            display = Display.flex
            flexDirection = FlexDirection.column
            alignItems = AlignItems.center
        }
        GeniusBoard {
            val playingIndex = state.playingIndex
            values = GeniusValue.values().asList()
            selected =
                if (playingIndex == null) null else state.colors[playingIndex]
            onSelected = a@{ actualValue ->
                val solvingIndex = state.solvingIndex ?: return@a

                val maxSolvingIndex = state.colors.lastIndex
                val expectedValue = state.colors[solvingIndex]
                state = if (expectedValue == actualValue) {
                    if (solvingIndex == maxSolvingIndex) {
                        state.copy(
                            playingIndex = 0,
                            colors = state.colors.toMutableList().apply {
                                add(GeniusValue.values().random())
                            },
                        )
                    } else {
                        state.copy(solvingIndex = solvingIndex + 1)
                    }

                } else {
                    state.copy(
                        playingIndex = null,
                        solvingIndex = null,
                        started = false,
                        colors = emptyList(),
                    )
                }
            }
        }
        if (state.started) {
            p {
                val playingIndex = state.playingIndex
                val solvingIndex = state.solvingIndex
                +(if (playingIndex == null)
                    "Go" + (if (solvingIndex == null)
                        ""
                    else
                        " (${solvingIndex}/${state.colors.size})")
                else
                    "Look (${playingIndex + 1}/${state.colors.size})")
            }
        }
        button {
            css {
                margin = Margin(vertical = 10.px, horizontal = 0.px)
            }
            if (state.started) {
                +"stop"
                onClick = { _ ->
                    state.currentTimeout?.also(::clearTimeout)
                    state = state.copy(
                        started = false,
                        playingIndex = null,
                        solvingIndex = null,
                        currentTimeout = null,
                        colors = emptyList(),
                    )
                }
            } else {
                +"start"
                onClick = { _ ->
                    state = state.copy(
                        started = true,
                        playingIndex = 0,
                        colors = state.colors.toMutableList().apply {
                            add(GeniusValue.values().random())
                        },
                    )
                }
            }
        }
    }
}
