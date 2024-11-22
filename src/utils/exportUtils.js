export const exportMatches = matches => {
  const exportData = matches.map(match => ({
    matchId: match.matchId,
    date: match.startTime,
    teams: `${match.team1} vs ${match.team2}`,
    score: `${match.score}/${match.wickets}`,
    overs: `${match.overs}.${match.balls}`,
    extras: match.extras,
    duration: new Date(match.endTime) - new Date(match.startTime),
  }));

  return JSON.stringify(exportData, null, 2);
};
