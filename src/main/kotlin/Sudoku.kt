import csstype.*
import emotion.react.css
import react.FC
import react.Props
import react.dom.html.InputType
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.input
import react.useState

external interface SudokuProps : Props {
    var grid: games.Grid
}

val Sudoku = FC<SudokuProps> { props ->
    var grid by useState(props.grid)
    div {
        css {
            display = Display.flex
            flexDirection = FlexDirection.column
            alignItems = AlignItems.center
        }
        for (r in 0 until 9) {
            div {
                css {
                    maxWidth = 300.px
                    display = Display.flex
                    justifyContent = JustifyContent.spaceBetween
                    flexDirection = FlexDirection.row
                }
                for (c in 0 until 9) {
                    input {
                        min = 0.0
                        max = 9.0
                        css {
                            width = 30.px
                            height = 30.px
                            flex = Flex(number(1.0), FlexBasis.fitContent)
                            if ((r + 1) % 3 == 0 && r < 9) {
                                marginBottom = 10.px;
                            }
                            if ((c + 1) % 3 == 0 && c < 9) {
                                marginRight = 10.px;
                            }
                            fontSize = 14.px
                            textAlign = TextAlign.center
                        }
                        type = InputType.number
                        value = "${grid.getValue(r, c)}"
                        onChange = { event ->
                            val value = event.target.value.toIntOrNull()
                            if (value != null) {
                                grid = grid.copy().also { it.setValue(r, c, value) }
                            }
                        }
                    }
                }
            }
        }
        div {
            css {
                display = Display.flex
                flexDirection = FlexDirection.row
                gap = 10.px
            }
            button {
                +"solve"
                onClick = { _ ->
                    val game = games.Sudoku(grid)
                    game.solve()
                    grid = game.grid
                }
            }
            button {
                +"reset"
                onClick = { _ ->
                    grid = games.Grid()
                }
            }
            button {
                +"random"
                onClick = { _ ->
                    grid = games.Sudoku.randomSample
                }
            }
        }
    }
}