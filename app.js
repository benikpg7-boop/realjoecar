localStorage.clear(); // À mettre temporairement si mes modifications de code ne s'affichent pas

// Données initiales par défaut si le localStorage est vide
const voituresInitiales = [
    { id: 1, marque: "Toyota", modele: "Prado", prix: 65000, categorie: "SUV", carburant: "diesel", transmission: "automatique", places: 7, image: "prado.jpg" },
    { id: 2, marque: "Mercedes", modele: "Classe S", prix: 150000, categorie: "luxe", carburant: "sans plomb", transmission: "automatique", places: 5, image: "merco.webp" },
    { id: 3, marque: "Kia", modele: "Picanto", prix: 25000, categorie: "economique", carburant: "sans plomb", transmission: "manuelle", places: 5, image: "kia.webp" },
    { id: 4, marque: "Geely", modele: "GX3 Pro", prix: 55000, categorie: "Luxe", carburant: "sans plomb", transmission: "automatique", places: 5, image: "geelygx3pro.webp" }
];

// Récupérer les voitures du localStorage ou charger les initiales
function getVoitures() {
    if (!localStorage.getItem('joecar_voitures')) {
        localStorage.setItem('joecar_voitures', JSON.stringify(voituresInitiales));
    }
    return JSON.parse(localStorage.getItem('joecar_voitures'));
}

function saveVoitures(voitures) {
    localStorage.setItem('joecar_voitures', JSON.stringify(voitures));
}

// Formatage en Franc CFA
function formatCFA(montant) {
    return new Intl.NumberFormat('fr-FR').format(montant) + " FCFA";
}
