import Match from './match'
import Team from './team';


test("team is created and contains a name", () => {

    const matches = [{ team1: "Home", team2: "Away", score1: 2, score2: 4, winner: 1 },{ team1: "Home", team2: "Away", score1: 2, score2: 1, winner: 0  }]

    matches.map((match) => {

        const team1 = new Team(match.team1);
        const team2 = new Team(match.team2);
        const matchObj = new Match(team1, team2);
        matchObj.setTeam1Score(match.score1);
        matchObj.setTeam2Score(match.score2);

        matchObj.getWinner()
        expect(matchObj.getWinner()).toBe(match.winner)
    })

})