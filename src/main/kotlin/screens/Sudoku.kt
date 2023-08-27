package screens

import csstype.*
import emotion.react.css
import org.w3c.xhr.JSON
import org.w3c.xhr.XMLHttpRequest
import org.w3c.xhr.XMLHttpRequestResponseType
import react.FC
import react.Props
import react.dom.html.InputType
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.p
import react.useState

external interface SudokuProps : Props

data class SudokuState(
    val grid: games.sudoku.Grid,
    val loading: Boolean,
)

val Sudoku = FC<SudokuProps> { _ ->
    var state by useState(
        SudokuState(
            grid = games.sudoku.Grid(),
            loading = false,
        )
    )
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
                    val value = state.grid.getValue(r, c)
                    input {
                        css {
                            width = 30.px
                            height = 30.px
                            flex = Flex(number(1.0), FlexBasis.fitContent)
                            backgroundColor = if (value == 0) null else NamedColor.mediumaquamarine
                            if ((r + 1) % 3 == 0 && r < 9) {
                                marginBottom = 10.px
                            }
                            if ((c + 1) % 3 == 0 && c < 9) {
                                marginRight = 10.px
                            }
                            fontSize = 14.px
                            textAlign = TextAlign.center
                        }
                        min = 0.0
                        max = 9.0
                        type = InputType.number
                        this.value = "$value"
                        onChange = callback@{ event ->
                            val newValue = event.target.value.toIntOrNull() ?: return@callback
                            state = state.copy(
                                grid = state.grid.copy()
                                    .also { it.setValue(r, c, newValue) }
                            )
                        }
                    }
                }
            }
        }
        if (state.loading) {
            p {
                +"Carregando..."
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
                    val game = games.sudoku.Sudoku(state.grid)
                    game.solve()
                    state = state.copy(grid = game.grid)
                }
            }
            button {
                +"reset"
                onClick = { _ ->
                    state = state.copy(grid = games.sudoku.Grid())
                }
            }
            button {
                +"random"
                disabled = state.loading
                onClick = { _ ->
                    state = state.copy(loading = true)
                    val request = XMLHttpRequest()
                    request.open("GET", "https://sudoku-api.vercel.app/api/dosuku", true)
                    request.responseType = XMLHttpRequestResponseType.JSON
                    request.onload = { _ ->
                        val status = request.status
                        if (status.toInt() == 200) {
                            val response = request.response

                            var data: Any? = response
                            data = data.asDynamic()["newboard"]
                            data = data.asDynamic()["grids"]
                            data = data.asDynamic()[0]
                            data = data.asDynamic()["value"]
                            data = data.unsafeCast<Array<*>>()
                            data = data.map { row ->
                                row.unsafeCast<Array<*>>()
                                    .map { value -> value.unsafeCast<Int>() }
                                    .toTypedArray()
                            }
                            data = data.toTypedArray()
                            state = state.copy(
                                grid = games.sudoku.Grid(data),
                                loading = false,
                            )
                        }
                        true
                    }
                    request.send()
                }
            }
        }
    }
}
