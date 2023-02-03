function CreateBoard() {
    let board = [];
    for (let i = 0; i < 3; i++) {
        let Row = [];
        for (let j = 0; j < 3; j++) {
            Row.push(0)
        }
        board.push(Row);

    }
    return board;
}((board) => {
    function renderBoard(board) {


        const $main = document.createElement("div");
        $main.classList.add("main");
        document.body.appendChild($main);
        const $Status = document.createElement("h1");
        $Status.appendChild(document.createTextNode("PLAY NOW"))
        document.body.appendChild($Status)
        const $btn = document.createElement("button");
        $btn.appendChild(document.createTextNode("RESTART"));
        document.body.appendChild($btn);

        for (let i = 0; i < board.length; i++) {
            let Row = board[i];

            const $Row = document.createElement("div");
            $Row.classList.add("Row");
            $main.appendChild($Row);

            for (let j = 0; j < Row.length; j++) {
                const $Column = document.createElement("div")
                $Column.classList.add("Column");
                $Row.appendChild($Column);
                const $Cell = document.createElement("div");
                $Cell.classList.add('Cell');
                $Cell.setAttribute('id', `cell-${i}-${j}`)
                $Column.appendChild($Cell);
                $Column.addEventListener("click", function (i) {

                    $Column.classList.add("Box");


                })


            }


        }


    }
    renderBoard(board);
    // window.addEventListener('DOMContentLoaded', () => renderBoard(board));

})(CreateBoard());
