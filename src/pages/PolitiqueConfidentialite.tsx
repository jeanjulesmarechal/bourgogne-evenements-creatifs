import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PolitiqueConfidentialite = () => {
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
          <h1 className="text-3xl font-bold text-gray-900">Politique de confidentialité</h1>
          <p className="text-muted-foreground mt-2">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>

        <div className="space-y-6">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle>1. Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                ECLOSION s'engage à protéger votre vie privée et vos données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons, 
                stockons et protégeons vos informations personnelles conformément au Règlement 
                Général sur la Protection des Données (RGPD) et à la loi française.
              </p>
              <p>
                En utilisant notre site web et nos services, vous acceptez les pratiques 
                décrites dans cette politique de confidentialité.
              </p>
            </CardContent>
          </Card>

          {/* Responsable du traitement */}
          <Card>
            <CardHeader>
              <CardTitle>2. Responsable du traitement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>ECLOSION</strong></p>
                <p>Agence événementielle premium</p>
                <p>Bourgogne, France</p>
                <p>Email : contact@eclosion-events.fr</p>
                <p>Téléphone : [Numéro de téléphone]</p>
              </div>
            </CardContent>
          </Card>

          {/* Données collectées */}
          <Card>
            <CardHeader>
              <CardTitle>3. Données personnelles collectées</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Nous collectons les données personnelles suivantes :</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Données d'identification :</h4>
                  <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Nom de l'entreprise</li>
                    <li>Fonction</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Données de navigation :</h4>
                  <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Pages visitées</li>
                    <li>Durée de visite</li>
                    <li>Cookies et technologies similaires</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Données de contact :</h4>
                  <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                    <li>Messages envoyés via le formulaire de contact</li>
                    <li>Préférences de communication</li>
                    <li>Historique des échanges</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Finalités du traitement */}
          <Card>
            <CardHeader>
              <CardTitle>4. Finalités du traitement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Nous utilisons vos données personnelles pour :</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Gestion des demandes :</h4>
                  <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                    <li>Répondre à vos demandes de devis</li>
                    <li>Organiser des événements</li>
                    <li>Assurer le suivi client</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Communication :</h4>
                  <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                    <li>Envoi d'informations sur nos services</li>
                    <li>Newsletter (avec votre consentement)</li>
                    <li>Invitations à des événements</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Amélioration du service :</h4>
                  <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                    <li>Analyse du trafic du site web</li>
                    <li>Amélioration de l'expérience utilisateur</li>
                    <li>Statistiques de fréquentation</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Obligations légales :</h4>
                  <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                    <li>Respect des obligations comptables</li>
                    <li>Archivage des données</li>
                    <li>Réponse aux demandes des autorités</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Base légale */}
          <Card>
            <CardHeader>
              <CardTitle>5. Base légale du traitement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Le traitement de vos données personnelles est basé sur :</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Votre consentement :</h4>
                  <p className="text-sm text-muted-foreground">
                    Pour l'envoi de newsletters et communications marketing
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">L'exécution d'un contrat :</h4>
                  <p className="text-sm text-muted-foreground">
                    Pour la fourniture de nos services événementiels
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">L'intérêt légitime :</h4>
                  <p className="text-sm text-muted-foreground">
                    Pour l'amélioration de nos services et l'analyse du trafic
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">L'obligation légale :</h4>
                  <p className="text-sm text-muted-foreground">
                    Pour respecter nos obligations comptables et fiscales
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conservation des données */}
          <Card>
            <CardHeader>
              <CardTitle>6. Durée de conservation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Nous conservons vos données personnelles pendant :</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Données clients :</h4>
                  <p className="text-sm text-muted-foreground">
                    3 ans après la fin de la relation contractuelle
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Données de prospection :</h4>
                  <p className="text-sm text-muted-foreground">
                    3 ans après le dernier contact
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Données de navigation :</h4>
                  <p className="text-sm text-muted-foreground">
                    13 mois maximum
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Données comptables :</h4>
                  <p className="text-sm text-muted-foreground">
                    10 ans conformément à la législation française
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Partage des données */}
          <Card>
            <CardHeader>
              <CardTitle>7. Partage et transfert des données</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Nous ne vendons jamais vos données personnelles. Nous pouvons partager 
                vos informations avec :
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Prestataires de services :</h4>
                  <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                    <li>Hébergeur du site web</li>
                    <li>Services d'email marketing</li>
                    <li>Outils d'analyse (Google Analytics)</li>
                    <li>Prestataires d'événementiel</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Autorités compétentes :</h4>
                  <p className="text-sm text-muted-foreground">
                    En cas d'obligation légale ou de demande des autorités
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Tous nos prestataires s'engagent à respecter la confidentialité de vos 
                données et à les utiliser uniquement dans le cadre de la prestation 
                fournie.
              </p>
            </CardContent>
          </Card>

          {/* Vos droits */}
          <Card>
            <CardHeader>
              <CardTitle>8. Vos droits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Droit d'accès :</h4>
                  <p className="text-sm text-muted-foreground">
                    Obtenir une copie de vos données personnelles
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Droit de rectification :</h4>
                  <p className="text-sm text-muted-foreground">
                    Corriger des données inexactes ou incomplètes
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Droit à l'effacement :</h4>
                  <p className="text-sm text-muted-foreground">
                    Demander la suppression de vos données
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Droit à la limitation :</h4>
                  <p className="text-sm text-muted-foreground">
                    Limiter le traitement de vos données
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Droit à la portabilité :</h4>
                  <p className="text-sm text-muted-foreground">
                    Récupérer vos données dans un format structuré
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Droit d'opposition :</h4>
                  <p className="text-sm text-muted-foreground">
                    Vous opposer au traitement de vos données
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Pour exercer vos droits :</strong> Contactez-nous à 
                  contact@eclosion-events.fr en précisant votre demande et en 
                  joignant une copie de votre pièce d'identité.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>9. Cookies et technologies similaires</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Notre site utilise des cookies pour améliorer votre expérience. 
                Vous pouvez gérer vos préférences de cookies via le banner qui 
                s'affiche lors de votre première visite.
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Cookies nécessaires :</h4>
                  <p className="text-sm text-muted-foreground">
                    Essentiels au fonctionnement du site (toujours activés)
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Cookies analytiques :</h4>
                  <p className="text-sm text-muted-foreground">
                    Nous aident à comprendre l'utilisation du site
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Cookies marketing :</h4>
                  <p className="text-sm text-muted-foreground">
                    Pour la publicité personnalisée (avec votre consentement)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sécurité */}
          <Card>
            <CardHeader>
              <CardTitle>10. Sécurité des données</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles 
                appropriées pour protéger vos données personnelles contre :
              </p>
              
              <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-muted-foreground">
                <li>L'accès non autorisé</li>
                <li>La divulgation accidentelle</li>
                <li>La modification non autorisée</li>
                <li>La destruction malveillante</li>
              </ul>

              <p>
                Ces mesures incluent le chiffrement des données, l'accès restreint, 
                la formation du personnel et des audits de sécurité réguliers.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>11. Contact et réclamations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Pour toute question concernant cette politique de confidentialité 
                ou pour exercer vos droits, contactez-nous :
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email :</strong> contact@eclosion-events.fr</p>
                <p><strong>Téléphone :</strong> [Numéro de téléphone]</p>
                <p><strong>Adresse :</strong> [Adresse complète]</p>
              </div>

              <p className="text-sm text-muted-foreground">
                Vous avez également le droit d'introduire une réclamation auprès 
                de la Commission Nationale de l'Informatique et des Libertés (CNIL) 
                si vous estimez que vos droits ne sont pas respectés.
              </p>
            </CardContent>
          </Card>

          {/* Modifications */}
          <Card>
            <CardHeader>
              <CardTitle>12. Modifications de cette politique</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Nous pouvons modifier cette politique de confidentialité à tout moment. 
                Les modifications importantes vous seront notifiées par email ou via 
                un avis sur notre site web. Nous vous encourageons à consulter 
                régulièrement cette page.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>Cette politique de confidentialité est conforme au RGPD et à la loi française.</p>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;

