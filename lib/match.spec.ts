import Team from './team'

test("team is created and contains a name", () => {
    const team = new Team("Wawa");
    expect(team.name).toBe("Wawa")
});