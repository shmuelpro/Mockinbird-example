class Match {
    team1;
    team2;

    team1Score;
    team2Score;

    constructor(team1, team2) {
        this.team1 = team1;
        this.team2 = team2;
    }

    setTeam1Score(score) {
        this.team1Score = score;
    }

    setTeam2Score(score) {
        this.team2Score = score;
    }

    getWinner() {
        if (isNaN(this.team1Score) || isNaN(this.team2Score)) {
            return -1;
        } else if (this.team1Score > this.team2Score) {
            return 0;
        } else {
            return 1;
        }
    }
}

export default Match;