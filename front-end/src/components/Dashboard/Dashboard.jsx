import './Dashboard.css'
import {PieChart, Pie,Sector,Cell} from "recharts"
const Dashboard = () => {
    const data = [
            {name : "Nomber de Facture vente", value:13948, fill: '#d9b277'},
            {name : "Nomber de Facture service", value:47277,fill:'#a7cae6'},
    ]
    return (
        <>
        <div style={{display:'inline-block'}}>

        
        <div className='card'>
            <p className='container'>Factures</p>
            {/* <button>More Info</button> */}
        </div>

        <div className='statistic bg-dark'>
        <PieChart width={200} height={200}>
        <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="40%"
            cy="30%"
            outerRadius={30}
            label ={{fontSize: 10,}}
        />
        </PieChart>

        </div>
        </div>

        <div style={{display:'inline-block'}}>

        
        <div className='card'>
            <p className='container'>Factures</p>
            {/* <button>More Info</button> */}
        </div>

        <div className='statistic bg-dark'>
        <PieChart width={200} height={200}>
        <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="40%"
            cy="30%"
            outerRadius={30}
            label ={{fontSize: 10,}}
        />
        </PieChart>

        </div>
        </div>
        </>
    )
}

export default Dashboard