

export interface Player {
    id: string,
    name: string,
    stats: PlayerStats,
    position: string,
    number: number,
    nacionality: string,
    international: boolean
}

interface PlayerStats {
    pace: number,
    speed: number,
    pass: number,
    defense: number,
    physic: number,
    shoot: number
}