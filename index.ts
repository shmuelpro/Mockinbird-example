import express from 'express';
import Team from './lib/team';
import {MockFactory} from 'mockingbird-ts';
import TeamMock from './lib/team.mock';

const app = express();
const port = 3000;

app.use(express.static('public'))

app.get("/teams",(req,res)=>{
    const team = new Team("AAA")
    res.json(team.name)
})

app.listen(port, () => {
    const oneTeam = MockFactory(TeamMock).one();
    console.log(oneTeam)
  console.log(`Example app listening at http://localhost:${port}`)
})