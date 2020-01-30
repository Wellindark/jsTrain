const fetch =require('node-fetch');

export async function recherche(query : string) {
    let reponseApiSncf = await fetch(`https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=${query}`).catch((error :any) => console.log(error));
    let jsonReponseSncf = await reponseApiSncf.json().catch((error : any) => {console.log(error)});
    return jsonReponseSncf.records.map(function(gare : any) {
        return gare.fields.gare_ut_libelle;
    });
}