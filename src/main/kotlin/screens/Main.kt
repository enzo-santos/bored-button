package screens


import csstype.AlignItems
import csstype.Display
import csstype.FlexDirection
import emotion.react.css
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.p
import react.dom.svg.ReactSVG.path
import react.dom.svg.ReactSVG.svg
import react.useState

enum class GameType { SUDOKU, WORDLE, TZFE }

data class MainState(
    val availableGameTypes: Set<GameType>,
    val currentGameType: GameType,
    val buttonPressed: Boolean?
)

external interface PixelatedButtonProps : Props {
    var enabled: Boolean?
}

val PixelatedButton = FC<PixelatedButtonProps> { props ->
    val enabled = props.enabled
    val o = if (enabled == null) 0 else if (enabled) 4 else 2
    val k = 5.0

    svg {
        width = 25 * k
        height = 18 * k
        xmlns = "http://www.w3.org/2000/svg"
        viewBox = listOf("0", "-0.5", "25", "18").joinToString(" ")
        shapeRendering = "crispEdges"
        path {
            val b = 0
            stroke = "#e63c45"
            d = listOf(
                "M9",
                "${b + 0 + o}h7M6",
                "${b + 1 + o}h13M4",
                "${b + 2 + o}h17M3",
                "${b + 3 + o}h19M2",
                "${b + 4 + o}h21M2",
                "${b + 5 + o}h21M3",
                "${b + 6 + o}h19M4",
                "${b + 7 + o}h17M6",
                "${b + 8 + o}h13M9",
                "${b + 9 + o}h7",
            ).joinToString(" ")
        }
        path {
            stroke = "#5a617c"
            d = listOf(
                "M1",
                "8h1M0",
                "9h2M0",
                "10h2M0",
                "11h3M1",
                "12h3M2",
                "13h4M3",
                "14h6M5",
                "15h7M8",
                "16h2",
            ).joinToString(" ")
        }
        path {
            val b = 6
            stroke = "#f67732"
            d = listOf(
                "M2",
                "${b + 0 + o}h1M3",
                "${b + 1 + o}h1M4",
                "${b + 2 + o}h2M6",
                "${b + 3 + o}h3M9",
                "${b + 4 + o}h4",
            ).joinToString(" ")
        }
        path {
            val b = 6
            stroke = "#fea44a"
            d = listOf(
                "M22",
                "${b + 0 + o}h1M21",
                "${b + 1 + o}h1M19",
                "${b + 2 + o}h2M16",
                "${b + 3 + o}h3M13",
                "${b + 4 + o}h3",
            ).joinToString(" ")
        }
        if (enabled == null) {
            path {
                stroke = "#ab1719"
                d = listOf(
                    "M2",
                    "7h1M22",
                    "7h1M2",
                    "8h2M21",
                    "8h2M3",
                    "9h3M19",
                    "9h3M4",
                    "10h5M16",
                    "10h5M6",
                    "11h13M9",
                    "12h7",
                ).joinToString(" ")
            }
        }
        path {
            stroke = "#90a1b9"
            d = listOf(
                "M23",
                "8h1M23",
                "9h2M23",
                "10h2M22",
                "11h3M21",
                "12h3M19",
                "13h4M16",
                "14h6M15",
                "15h5M13",
                "16h4",
            ).joinToString(" ")
        }
        path {
            stroke = "#9a0e19"
            d = listOf(
                "M2",
                "9h1M22",
                "9h1M3",
                "10h1M21",
                "10h1M4",
                "11h2M19",
                "11h2M6",
                "12h3M16",
                "12h3M9",
                "13h7",
            ).joinToString(" ")
        }
        path {
            stroke = "#860117"
            d = listOf(
                "M2",
                "10h1M22",
                "10h1M3",
                "11h1M21",
                "11h1M4",
                "12h2M19",
                "12h2M6",
                "13h3M16",
                "13h3M9",
                "14h7",
            ).joinToString(" ")
        }
        path {
            stroke = "#3d4e68"
            d = listOf(
                "M0",
                "12h1M24",
                "12h1M1",
                "13h1M23",
                "13h1M2",
                "14h1M22",
                "14h1M3",
                "15h2M20",
                "15h2M5",
                "16h3M17",
                "16h3M8",
                "17h9",
            ).joinToString(" ")
        }
        path {
            stroke = "#6c819a"
            d = "M12 15h3M10 16h3"
        }
    }
}

val Main = FC<Props> { _ ->
    var state by useState {
        val gameTypes = GameType.values().toMutableSet()
        val gameType = gameTypes.random()
        gameTypes.remove(gameType)

        MainState(
            availableGameTypes = gameTypes,
            currentGameType = gameType,
            buttonPressed = null,
        )
    }
    div {
        css {
            display = Display.flex
            flexDirection = FlexDirection.column
            alignItems = AlignItems.center
        }

        div {
            onMouseOver = { _ ->
                state = state.copy(buttonPressed = false)
            }
            onMouseOut = { _ ->
                state = state.copy(buttonPressed = null)
            }
            onMouseDown = { _ ->
                state = state.copy(buttonPressed = true)
            }
            onMouseUp = { _ ->
                state = state.copy(buttonPressed = false)
            }
            onClick = { _ ->
                val nextAvailableGameTypes = state.availableGameTypes
                    .ifEmpty { GameType.values().asIterable() }
                    .toMutableSet()

                val nextGameType = nextAvailableGameTypes.random()
                nextAvailableGameTypes.remove(nextGameType)

                state = state.copy(
                    availableGameTypes = nextAvailableGameTypes,
                    currentGameType = nextGameType,
                )
            }
            PixelatedButton {
                enabled = state.buttonPressed
            }
        }
        p {
            +when (state.currentGameType) {
                GameType.SUDOKU -> "Sudoku Solver"
                GameType.WORDLE -> "Wordle"
                GameType.TZFE -> "2048"
            }
        }
        when (state.currentGameType) {
            GameType.SUDOKU -> Sudoku {}
            GameType.WORDLE -> Wordle {}
            GameType.TZFE -> TZFE {}
        }
    }
}
