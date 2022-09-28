import './PokeStatsData.css'

const PokeStatsData = ({ stats }) => {
    return (
        <div>
            <span>
                {stats && stats.map((el) => {
                    return (
                    <p className='number' key={el.stat.name}>{`${el.base_stat}`} </p>
                    )
                })}
            </span>
        </div>
    )
}


export default PokeStatsData