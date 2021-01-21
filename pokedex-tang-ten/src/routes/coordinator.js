export const goToPokeList = (history) => {
  history.push("/")
}

export const goToPokeDetail = (history, name) => {
  history.push(`/pokemon/${name}`)
}

export const goToPokedex = (history) => {
  history.push("/pokedex")
}