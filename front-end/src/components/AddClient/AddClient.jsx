import "./AddClient.css"
import { Select, Input , Style} from "../index"
const AddClient = () => {
    return (
        <>
            <form action="{% url 'formulaire_client' %}" method="post">
                <h1 style={{color:"var(--light-color)"}}>Ajouter un client:</h1>
                {/* {% csrf_token %} */}
                <div style={{ display: "block" }}>
                    <Select name="Catégorie de compte :" v1="C" v2="S" choix1="Client" choix2="Supplier" />

                    <Style>
                        <Input name="Raison sociale :" type="text" />
                        <Input name="Sigle :" type="text" />
                    </Style>
                    <Input name="Code TVA :" type="text" />

                    <Style>
                        <Input name="Nature du compte :" type="text" />
                        <Input name="NIF :" type="text" />
                        <Input name="NIS :" type="text" />
                    </Style>

                    <Style>
                        <Input name="Registre de commerce :" type="text" />
                        <Input name="Article d'imposition :" type="text" />
                    </Style>

                    <Style>
                        <Input name="Devise :" type="text" />
                        <Input name="Rue :" type="text" />
                        <Input name="Ville :" type="text" />
                    </Style>

                    <Style>
                        <Input name="Région :" type="text" />
                        <Input name="Type de région :" type="text" />
                        <Input name="Code postal :" type="text" />
                        <Input name="Pays :" type="text" />
                    </Style>

                    <Style>
                        <Input name="Téléphone :" type="text" />
                        <Input name="Email :" type="email" />
                    </Style>

                    <Style>
                        <Input name="Secteur d'activité :" type="text" />
                        <Input name="Condition de paiement :" type="text" />
                        <Input name="Créé le :" type="date" />
                        <Input name="Créé par :" type="text" />
                    </Style>

                    <Style>
                        <Input name="Nom :" type="text" />
                        <Input name="Prénom :" type="text" />
                        <Input name="Fonction :" type="text" />
                        <Input name="Type de client :" type="text" />
                        <Input name="Fax :" type="text" />
                    </Style>

                        <Select name="Dossier validé :" v1="Y" v2="N" choix1="oui" choix2="Non" />
                        <Select name="Catégorie de compte :" v1="A" v2="I" choix1="Client" choix2="Supplier" />
                        <button type="submit" className="Btn">Envoyer</button>
                    </div>
            </form>
        </>
    );
};

export default AddClient