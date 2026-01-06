import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const MentionsLegales = () => {
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
          <h1 className="text-3xl font-bold text-gray-900">Mentions légales</h1>
        </div>

        <div className="space-y-6">
          {/* Éditeur du site */}
          <Card>
            <CardHeader>
              <CardTitle>1. Éditeur du site</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">ECLOSION</h4>
                <p>Agence événementielle premium</p>
                <p>Bourgogne, France</p>
              </div>
              <div>
                <h4 className="font-semibold">Directeur de la publication :</h4>
                <p>[Nom du directeur]</p>
              </div>
              <div>
                <h4 className="font-semibold">Contact :</h4>
                <p>Email : contact@eclosion-events.fr</p>
                <p>Téléphone : [Numéro de téléphone]</p>
              </div>
            </CardContent>
          </Card>

          {/* Hébergement */}
          <Card>
            <CardHeader>
              <CardTitle>2. Hébergement</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ce site est hébergé par :</p>
              <p>[Nom de l'hébergeur]</p>
              <p>[Adresse de l'hébergeur]</p>
              <p>Téléphone : [Numéro de téléphone]</p>
            </CardContent>
          </Card>

          {/* Propriété intellectuelle */}
          <Card>
            <CardHeader>
              <CardTitle>3. Propriété intellectuelle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                L'ensemble de ce site relève de la législation française et internationale 
                sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
                reproduction sont réservés, y compris pour les documents téléchargeables 
                et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique 
                quel qu'il soit est formellement interdite sauf autorisation expresse du 
                directeur de la publication.
              </p>
              <p>
                La marque et le logo ECLOSION sont des marques déposées. Toute reproduction 
                non autorisée de ces marques, dessins et modèles constitue une contrefaçon 
                passible de sanctions pénales.
              </p>
            </CardContent>
          </Card>

          {/* Responsabilité */}
          <Card>
            <CardHeader>
              <CardTitle>4. Responsabilité</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Les informations contenues sur ce site sont aussi précises que possible 
                et le site remis à jour à différentes périodes de l'année, mais peut 
                toutefois contenir des inexactitudes ou des omissions.
              </p>
              <p>
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, 
                merci de bien vouloir le signaler par email, à l'adresse contact@eclosion-events.fr, 
                en décrivant le problème de la manière la plus précise possible.
              </p>
              <p>
                Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et 
                sous sa seule responsabilité. En conséquence, ne saurait être tenu responsable 
                d'un quelconque dommage subi par l'ordinateur de l'utilisateur ou d'une 
                quelconque perte de données consécutives au téléchargement.
              </p>
            </CardContent>
          </Card>

          {/* Liens hypertextes */}
          <Card>
            <CardHeader>
              <CardTitle>5. Liens hypertextes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Des liens hypertextes peuvent être présents sur le site. L'utilisateur est 
                informé qu'en cliquant sur ces liens, il sortira du site eclosion-events.fr. 
                Ce dernier n'a pas de contrôle sur les pages web sur lesquelles aboutissent 
                ces liens et ne saurait en aucun cas être responsable de leur contenu.
              </p>
            </CardContent>
          </Card>

          {/* Collecte de données */}
          <Card>
            <CardHeader>
              <CardTitle>6. Collecte et traitement de données personnelles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée 
                et au Règlement Général sur la Protection des Données (RGPD), vous disposez 
                d'un droit d'accès, de rectification, de suppression et d'opposition aux 
                données personnelles vous concernant.
              </p>
              <p>
                Pour exercer ce droit, adressez-vous à : contact@eclosion-events.fr
              </p>
              <p>
                Pour plus d'informations sur le traitement de vos données personnelles, 
                consultez notre{" "}
                <Link to="/politique-confidentialite" className="text-primary hover:underline">
                  politique de confidentialité
                </Link>.
              </p>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>7. Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Le site eclosion-events.fr peut être amené à vous demander l'acceptation 
                des cookies pour des besoins de statistiques et d'affichage. Un cookie 
                est une information déposée sur votre disque dur par le serveur du site 
                que vous visitez.
              </p>
              <p>
                Il contient plusieurs données qui sont stockées sur votre ordinateur dans 
                un simple fichier texte auquel un serveur accède pour lire et enregistrer 
                des informations. Certaines parties de ce site ne peuvent être fonctionnelles 
                sans l'acceptation de cookies.
              </p>
            </CardContent>
          </Card>

          {/* Droit applicable */}
          <Card>
            <CardHeader>
              <CardTitle>8. Droit applicable</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Tout litige en relation avec l'utilisation du site eclosion-events.fr est 
                soumis au droit français. Il est fait attribution exclusive de juridiction 
                aux tribunaux compétents de [Ville], France.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>9. Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Pour toute question concernant ces mentions légales, vous pouvez nous 
                contacter à l'adresse : contact@eclosion-events.fr
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;

