import './PokeStats.css'

function formatStatName(stat) {
  switch (stat) {
    case "hp":
      return "HP"

    case "attack":
      return "Attack"

    case "defense":
      return "Defense"

    case "special-attack":
      return "Sp. Atk"

    case "special-defense":
      return "Sp. Def"

    case "speed":
      return "Speed"

    default:
      return stat
  }
}

const PokeStats = ({ stats }) => {
  return (
    <div className='StatsText'>
      {stats && stats.map(el => (
        <p>{formatStatName(el.stat.name)}:</p>
      ))}
    </div>
  )
}

export default PokeStats