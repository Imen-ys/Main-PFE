import "./AddClient.css"

const AddClient = () => {
    return (
        <>
        <div style={{display:"inline-block"}}>
            <h3 className="text-capitalize text-center mx-7 text-white"> Register a new customer </h3>
                <form method="post" action="{% url 'inscription' %}">
                {/* {% csrf_token %} */}
        <div className="form-group col-md-6">
        <label className="text-white mx-4" htmlFor="categorie_compte ">categorie_compte</label>
        <select name="categorie_compte" className="form-control" required id="categorie_compte">
            <option> categorie </option>
            <option value="C">Client</option>
            <option value="S">Supplier</option>
        </select>
    </div>
    <div className="form-group col-md-6">
        <label className="text-white mx-4" htmlFor="raison_sociale"> raison_sociale </label>
        <input name="raison_sociale" required type="text" className="form-control" id="raison_sociale" placeholder="raison_sociale"/>
    </div>

    <div className="form-group col-md-2">
        <label className="text-white mx-4" htmlFor="sigle"> sigle</label>
        <input name="sigle" required type="text" className="form-control" id="sigle" placeholder="sigle"/>
    </div>

    <div className="form-group col-md-2">
        <label className="text-white mx-4" htmlFor="code_tva">code_tva </label>
        <input name="code_tva" required type="number" className="form-control" id="code_tva" placeholder="code_tva"/>
    </div>

    <div className="form-group col-md-2">
        <label className="text-white mx-4" htmlFor="nature_compte"> nature_compte </label>
        <input name="nature_compte" required type="text" className="form-control" id="nature_compte" placeholder="nature_compte"/>
    </div>
    
    <div className="form-group col-md-2">
        <label className="text-white mx-4" htmlFor="nif"> nif </label>
        <input name="nif" required type="number" className="form-control" id="nif" placeholder="nif"/>
    </div>
    
    <div className="form-group col-md-2">
        <label className="text-white mx-4" htmlFor=" nis"> nis </label>
        <input name="" required type="number" className="form-control" id=" nis" placeholder=" nis"/>
    </div>

    <div className="form-group col-md-2">
        <label className="text-white mx-4" htmlFor=" registre_commerce"> registre_commerce </label>
        <input name=" registre_commerce" required type="number" className="form-control" id=" registre_commerce" placeholder=" registre_commerce" />
    </div>
    
    <div className="form-group col-md-2">
        <label className="text-white mx-4" htmlFor="article_imposition"> article_imposition </label>
        <input name="article_imposition" required type="text" className="form-control" id="article_imposition"
            placeholder="article_imposition" />
    </div>
    
    <div className="form-group col-md-2">
        <label className="text-white mx-4" htmlFor=" devise"> devise </label>
        <input name=" devise" required type="text" className="form-control" id=" devise"
            placeholder=" devise" />
    </div>
    
    <div className="form-group col-md-2">
        <label className="text-white mx-4" htmlFor=" rue"> rue</label>
        <input name=" rue" required type="text" className="form-control" id=" rue"
            placeholder=" rue" />
    </div>
    
    <div className="form-group col-md-2">
        <label className="text-white mx-4" htmlFor="ville"> ville </label>
        <input name="ville" required type="text" className="form-control" id="ville"
            placeholder="ville" />
    </div>
    
    <div className="form-group col-md-2">
        <label className="text-white mx-4" htmlFor=" region"> region </label>
        <input name=" region" required type="text" className="form-control" id=" region"
            placeholder=" region" />
    </div>
    
    <div className="form-group col-md-2">
        <label className="text-white mx-4" htmlFor=" type_de_region "> type_de_region </label>
        <input name=" type_de_region " required type="text" className="form-control" id=" type_de_region "
            placeholder=" type_de_region " />
    </div>
    
    <div className="form-group col-md-2">
        <label className="text-white mx-4" htmlFor=" code_postale "> code_postale </label>
        <input name=" code_postale " required type="number" className="form-control" id=" code_postale "
            placeholder=" code_postale " />
    </div>
    
    <div className="form-group col-md-2">
        <label className="text-white mx-4" htmlFor=" pays"> pays </label>
        <input name=" pays" required type="text" className="form-control" id=" pays"
            placeholder=" pays" />
    </div>

    <div className="form-group col-md-2">
        <label className="text-white mx-4" htmlFor="telephone">telephone </label>
        <input name="telephone" required type="number" className="form-control" id="telephone" placeholder="telephone"/>
    </div>
    
    <div className="form-group col-md-2">
        <label className="text-white mx-4" htmlFor=" email"> email</label>
        <input name=" email" required type="email" className="form-control" id=" email"
            placeholder=" email" />
    </div>
    
    <div className="form-group col-md-2">
        <label className="text-white mx-4" htmlFor="secteur_activite"> secteur_activite</label>
        <input name="secteur_activite" required type="text" className="form-control" id="secteur_activite" placeholder="secteur_activite" />
    </div>

    <div class="form-group col-md-2">
        <label for="condition_paiement"> condition_paiement </label>
        <input name="condition_paiement" required type="text" class="form-control" id="condition_paiement"
            placeholder="condition_paiement"/>
    </div>
    
    <div class="form-group col-md-2">
        <label for=" cree_le"> cree_le  </label>
        <input name=" cree_le"  type="date" class="form-control" id=" cree_le"
            placeholder=" cree_le"/>
    </div>
    
    <div class="form-group col-md-2">
        <label for=" cree_par">   cree_par</label>
        <input name=" cree_par" required type="text" class="form-control" id=" cree_par"
            placeholder=" cree_par"/>
    </div>
    
    <div class="form-group col-md-2">
        <label for="nom"> nom </label>
        <input name="nom" required type="text" class="form-control" id="nom"
            placeholder="nom"/>
    </div>
    
    <div class="form-group col-md-2">
        <label for="prenom"> prenom </label>
        <input name="prenom" required type="text" class="form-control" id="prenom"
            placeholder="prenom"/>
    </div>
    
    <div class="form-group col-md-2">
        <label for="fonction">  fonction</label>
        <input name="fonction" required type="text" class="form-control" id="fonction"
            placeholder="fonction"/>
    </div>
    
    <div class="form-group col-md-2">
        <label for="type_client"> type_client </label>
        <input name="type_client" required type="text" class="form-control" id="type_client"
            placeholder="type_client"/>
    </div>
    
    <div class="form-group col-md-2">
        <label for="fax">fax  </label>
        <input name="fax" required type="number" class="form-control" id="fax"
            placeholder="fax"/>
    </div>
    
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for=" dossier_valide"> dossier_valide</label>
            <select name=" dossier_valide" class="form-control" required id=" dossier_valide">
                <option>  dossier_valide </option>
                <option value="Y">YES</option>
                <option value="N">NO</option>
            </select>
        </div>
    </div>

    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="statut">statut</label>
            <select name="statut" class="form-control" required id="statut">
                <option> statut </option>
                <option value="A">Active</option>
                <option value="I">Inactive</option>
            </select>
        </div>
    </div>
    <button type="submit">S'inscrire</button>
</form>
</div>
    </>
    );
};

export default AddClient