interface Name {
  name: string
  url: string
}

interface PokeApiResponse {
  count: number
  next: string | null
  previous: string | null
  results: Name[]
}

interface Pokemon {
  id: number
  name: string
  types: {
    type: {
      name: string
      url: string
    }
  }[]
  abilities: {
    ability: {
      name: string
      url: string
    }
  }[]
  stats: {
    base_stat: number
    stat: {
      name: string
      url: string
    }
  }[]
  species: {
    name: string
    url: string
  }
  sprites: {
    front_default: string
    front_shiny: string
    back_default: string
    back_shiny: string
  }
  cries: {
    latest: string
    legacy: string
  }
}

export type { Name, Pokemon, PokeApiResponse }
