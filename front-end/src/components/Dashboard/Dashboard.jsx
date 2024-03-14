import './Dashboard.css'
import {Card } from '../index';


const Dashboard = () => {
    return (
        <>
        <div className='flex flex-wrap h-200'>

            <Card title="Factures"
                name1="Nomber de Facture vente" value1={13948}
                name2="Nomber de Facture service" value2={47277}
                name3="Nomber des Avoirs services" value3={688}
                name4="Nomber des Avoirs services" value4={2781}
            />

            <Card title="Client VIP"
                name1="Nomber de Client VIP" value1={65}
                name2="Nomber de Client VIP Actif" value2={65}
                name3="Nomber de Client VIP Inactif" value3={65}
                name4="Nomber des Client VIP Bloque" value4={0}
            />

            <Card title="Suspensions"
                name1="Nomber de toutes les Suspensions" value1={3}
                name2="Nomber de  Suspensions" value2={0}
                name3="Nomber de date a Suspension" value3={688}
            />

            <Card title="Paiment"
                name1="Nomber de paiment " value1={69237}
                name2="Nomber de paiment complet" value2={69104}
                name3="Nomber de paiment partie" value3={87}
                name4="Nomber de paiment annule" value4={46}
            />

            <Card title="Paiment"
                name1="Nomber de paiment par cheque" value1={13948}
                name2="Nomber de paiment par espece" value2={47277}
                name3="Nomber de paiment par virement" value3={807}
                name4="Nomber de paiment par CIB" value4={0}
                name5="Nomber de paiment par autre" value5={688}
            />

            <Card title="Paiment"
                name1="Nomber de paiment proformat" value1={0}
                name2="Nomber de paiment proformat CRM" value2={0}
                name3="Nomber de paiment proformat Site" value3={0}
            />
        </div>
        </>
    )
}

export default Dashboard