import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ConditionsUtilisation = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Navigation */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Conditions d'utilisation</h1>
          <p className="text-muted-foreground mt-2">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>

        <div className="space-y-6">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle>1. Objet et acceptation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Les présentes conditions d'utilisation régissent l'utilisation du site web 
                eclosion-events.fr et des services proposés par ECLOSION, agence événementielle 
                premium basée en Bourgogne, France.
              </p>
              <p>
                L'utilisation du site implique l'acceptation pleine et entière des présentes 
                conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez 
                ne pas utiliser ce site.
              </p>
            </CardContent>
          </Card>

          {/* Définitions */}
          <Card>
            <CardHeader>
              <CardTitle>2. Définitions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">"Le Site" :</h4>
                  <p className="text-sm text-muted-foreground">
                    Le site web accessible à l'adresse eclosion-events.fr
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">"ECLOSION" :</h4>
                  <p className="text-sm text-muted-foreground">
                    L'agence événementielle éditrice du site
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">"L'Utilisateur" :</h4>
                  <p className="text-sm text-muted-foreground">
                    Toute personne accédant au site et/ou utilisant nos services
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">"Les Services" :</h4>
                  <p className="text-sm text-muted-foreground">
                    L'ensemble des services événementiels proposés par ECLOSION
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Accès au site */}
          <Card>
            <CardHeader>
              <CardTitle>3. Accès au site</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Le site est accessible gratuitement à tout utilisateur disposant d'un accès 
                à Internet. Tous les frais supportés par l'utilisateur pour accéder au service 
                (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
              </p>
              <p>
                ECLOSION se réserve le droit de modifier, suspendre ou interrompre l'accès 
                au site à tout moment, notamment pour des raisons de maintenance ou de mise 
                à jour.
              </p>
            </CardContent>
          </Card>

          {/* Services proposés */}
          <Card>
            <CardHeader>
              <CardTitle>4. Services proposés</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>ECLOSION propose les services suivants :</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Organisation d'événements :</h4>
                  <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                    <li>Séminaires d'entreprise</li>
                    <li>Team-buildings</li>
                    <li>Conventions</li>
                    <li>Événements de lancement</li>
                    <li>Formations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Services associés :</h4>
                  <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                    <li>Conseil en organisation</li>
                    <li>Gestion logistique</li>
                    <li>Coordination d'équipes</li>
                    <li>Suivi et évaluation</li>
                  </ul>
                </div>
              </div>

              <p>
                Les services sont décrits de manière aussi précise que possible sur le site. 
                ECLOSION se réserve le droit de modifier ou d'interrompre tout ou partie 
                des services sans préavis.
              </p>
            </CardContent>
          </Card>

          {/* Utilisation du site */}
          <Card>
            <CardHeader>
              <CardTitle>5. Utilisation du site</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>L'utilisateur s'engage à utiliser le site de manière conforme à sa destination 
              et s'interdit notamment :</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Utilisations interdites :</h4>
                  <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                    <li>Utiliser le site à des fins illégales ou non autorisées</li>
                    <li>Transmettre des contenus illicites, offensants ou diffamatoires</li>
                    <li>Perturber le fonctionnement du site</li>
                    <li>Tenter d'accéder de manière non autorisée aux systèmes</li>
                    <li>Utiliser des robots ou scripts automatisés</li>
                    <li>Copier ou reproduire le contenu sans autorisation</li>
                  </ul>
                </div>
              </div>

              <p>
                Toute utilisation non conforme peut entraîner la suspension ou l'interdiction 
                d'accès au site.
              </p>
            </CardContent>
          </Card>

          {/* Propriété intellectuelle */}
          <Card>
            <CardHeader>
              <CardTitle>6. Propriété intellectuelle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                L'ensemble du contenu du site (textes, images, vidéos, logos, marques, etc.) 
                est protégé par les droits de propriété intellectuelle et appartient à ECLOSION 
                ou à ses partenaires.
              </p>
              
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de 
                tout ou partie des éléments du site, quel que soit le moyen ou le procédé 
                utilisé, est interdite, sauf autorisation écrite préalable.
              </p>

              <p>
                L'utilisateur peut toutefois imprimer ou télécharger des éléments du site 
                pour son usage personnel et non commercial, sous réserve de respecter les 
                droits de propriété intellectuelle.
              </p>
            </CardContent>
          </Card>

          {/* Responsabilité */}
          <Card>
            <CardHeader>
              <CardTitle>7. Responsabilité</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                ECLOSION s'efforce de fournir des informations exactes et à jour sur le site. 
                Toutefois, ECLOSION ne peut garantir l'exactitude, la précision ou l'exhaustivité 
                des informations mises à disposition.
              </p>
              
              <p>
                ECLOSION ne saurait être tenue responsable :
              </p>
              
              <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-muted-foreground">
                <li>Des dommages directs ou indirects causés au matériel de l'utilisateur</li>
                <li>De la perte de données ou de programmes</li>
                <li>Des conséquences de l'utilisation du site ou de l'impossibilité de l'utiliser</li>
                <li>Des contenus des sites tiers accessibles via des liens</li>
                <li>Des interruptions de service ou dysfonctionnements techniques</li>
              </ul>

              <p>
                L'utilisateur est seul responsable de l'utilisation qu'il fait du site et des 
                informations qu'il y trouve.
              </p>
            </CardContent>
          </Card>

          {/* Données personnelles */}
          <Card>
            <CardHeader>
              <CardTitle>8. Données personnelles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Le traitement des données personnelles collectées sur le site est régi par 
                notre politique de confidentialité, accessible à l'adresse : 
                <Link to="/politique-confidentialite" className="text-primary hover:underline ml-1">
                  /politique-confidentialite
                </Link>
              </p>
              
              <p>
                En utilisant le site, l'utilisateur accepte le traitement de ses données 
                personnelles conformément à cette politique.
              </p>
            </CardContent>
          </Card>

          {/* Liens hypertextes */}
          <Card>
            <CardHeader>
              <CardTitle>9. Liens hypertextes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Le site peut contenir des liens vers d'autres sites web. ECLOSION n'exerce 
                aucun contrôle sur ces sites et décline toute responsabilité quant à leur 
                contenu ou leur politique de confidentialité.
              </p>
              
              <p>
                La création de liens vers le site est autorisée sous réserve de ne pas porter 
                atteinte à l'image d'ECLOSION et de ne pas créer de confusion sur l'origine 
                du contenu.
              </p>
            </CardContent>
          </Card>

          {/* Modification des conditions */}
          <Card>
            <CardHeader>
              <CardTitle>10. Modification des conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                ECLOSION se réserve le droit de modifier les présentes conditions d'utilisation 
                à tout moment. Les modifications entrent en vigueur dès leur publication sur 
                le site.
              </p>
              
              <p>
                Il appartient à l'utilisateur de consulter régulièrement les conditions 
                d'utilisation. L'utilisation continue du site après modification implique 
                l'acceptation des nouvelles conditions.
              </p>
            </CardContent>
          </Card>

          {/* Droit applicable */}
          <Card>
            <CardHeader>
              <CardTitle>11. Droit applicable et juridiction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Les présentes conditions d'utilisation sont régies par le droit français. 
                En cas de litige, et après épuisement des voies amiables, les tribunaux 
                français seront seuls compétents.
              </p>
              
              <p>
                En cas de traduction des présentes conditions dans une ou plusieurs langues, 
                la version française prévaudra en cas de conflit d'interprétation.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>12. Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Pour toute question concernant ces conditions d'utilisation, vous pouvez 
                nous contacter :
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p><strong>Email :</strong> contact@eclosion-events.fr</p>
                <p><strong>Téléphone :</strong> [Numéro de téléphone]</p>
                <p><strong>Adresse :</strong> [Adresse complète]</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>Ces conditions d'utilisation sont conformes à la législation française en vigueur.</p>
        </div>
      </div>
    </div>
  );
};

export default ConditionsUtilisation;

