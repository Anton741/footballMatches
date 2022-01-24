export function searchFilter(matches, searchValue){
  const re = new RegExp(searchValue.toLowerCase(), 'gi');
  return matches.filter((team) => team.teamAway.name.toLowerCase().match(re) ||
                                            team.teamHome.name.toLowerCase().match(re)
  )
}

