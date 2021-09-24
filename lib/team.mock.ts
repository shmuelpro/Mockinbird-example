
import{ Mock, MockFactory } from 'mockingbird-ts'
import Team from './team'

class TeamMock extends Team{
   
    @Mock((faker) => faker.name.firstName())
     name;
    

}

export default TeamMock;