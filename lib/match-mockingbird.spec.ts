import {MockFactory} from 'mockingbird-ts'
import TeamMock from './team.mock'


test("team mock",()=>{
    const oneTeam = MockFactory(TeamMock).one();
    const lotsOfTeams = MockFactory(TeamMock).many(3);

    console.log(oneTeam);
    console.log(lotsOfTeams)
    expect(3).toBe(4);
})