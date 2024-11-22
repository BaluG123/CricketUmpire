export const calculateMatchStats = match => {
  // Calculate run rate
  const totalOvers = match.overs + match.balls / 6;
  const runRate = match.score / totalOvers;

  // Calculate match duration
  const startTime = new Date(match.startTime);
  const endTime = new Date(match.endTime);
  const durationMs = endTime - startTime;
  const durationHours = durationMs / (1000 * 60 * 60);

  // Calculate over rate
  const overRate = totalOvers / durationHours;

  // Format duration string
  const hours = Math.floor(durationHours);
  const minutes = Math.floor((durationHours - hours) * 60);
  const duration = `${hours}h ${minutes}m`;

  return {
    runRate,
    overRate,
    duration,
    totalExtras: Object.values(match.extras).reduce((a, b) => a + b, 0),
  };
};
