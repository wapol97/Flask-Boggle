class BoggleGame {
    constructor(boardId, secs = 60) {
        this.secs = secs;
        this.showTimer();

        this.score = 0;
        this.word = new Set();
        this.board = $('#' + boardId);

        this.timer = setInterval(this.tick.bind(this), 1000)

        $(".add-word", this.board).on$("submit", this.handleSubmit.bind(this))
    }

    showWord(word) {
        $(".words", this.board).append($("<li>", {text: word}));
    }

    showScore() {
        $(".score", this.board).text(this.score);
    }

    
}