import './Menu.css'

const Menu =() => {
    return(
        <div className='Menu bg-dark'>
            <p>Menu</p>

            {/* <a href="#" className='choices'>Dashboard</a> */}
            <ul className="list-group list-group-flush">
                <li className="item list-group-item bg-dark"><a href="/">Dashboard</a></li>
                <li className="item list-group-item bg-dark"><a href="/Client">Client</a></li>
                <li className="item list-group-item bg-dark">Client VIP</li>
                <li className="item list-group-item bg-dark">Factures vente</li>
                <li className="item list-group-item bg-dark">Factures service</li>
                <li className="item list-group-item bg-dark">Avoires vente</li>
                <li className="item list-group-item bg-dark">Avoires service</li>
                <li className="item list-group-item bg-dark">Facture impayees</li>
                <li className="item list-group-item bg-dark">Paiement</li>
                <li className="item list-group-item bg-dark">Paiement proformats</li>
                <li className="item list-group-item bg-dark">Dates mise en demande</li>
                <li className="item list-group-item bg-dark">Facture A ne pas envoyer</li>
                <li className="item list-group-item bg-dark">Log Email</li>
                <li className="item list-group-item bg-dark">Transaction CIB</li>
                <li className="item list-group-item bg-dark">Facture non envoyer</li>
            </ul>
        </div>
    )
}

export default Menu