#!/bin/bash

# Script pour basculer entre robots.txt staging et production
# Usage: ./scripts/switch-robots.sh [staging|production]

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
PUBLIC_DIR="$PROJECT_ROOT/public"

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonction d'affichage
print_header() {
    echo ""
    echo "╔══════════════════════════════════════════════════════════╗"
    echo "║         🤖 GESTION ROBOTS.TXT - SEO CONFIGURATION        ║"
    echo "╚══════════════════════════════════════════════════════════╝"
    echo ""
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Fonction pour afficher l'aide
show_help() {
    print_header
    echo "Usage: ./scripts/switch-robots.sh [staging|production]"
    echo ""
    echo "Options:"
    echo "  staging     : Active le robots.txt de BLOCAGE (noindex)"
    echo "  production  : Active le robots.txt d'AUTORISATION (indexation)"
    echo "  help        : Affiche cette aide"
    echo ""
    echo "Exemples:"
    echo "  ./scripts/switch-robots.sh staging"
    echo "  ./scripts/switch-robots.sh production"
    echo ""
}

# Vérifier les arguments
if [ $# -eq 0 ] || [ "$1" = "help" ] || [ "$1" = "--help" ] || [ "$1" = "-h" ]; then
    show_help
    exit 0
fi

MODE=$1

print_header

# Basculer selon le mode
case $MODE in
    staging)
        print_info "Configuration pour STAGING (test.eclosion-evenements.fr)"
        echo ""
        
        if [ -f "$PUBLIC_DIR/robots.txt" ]; then
            # Vérifier si c'est déjà en mode staging
            if grep -q "Disallow: /" "$PUBLIC_DIR/robots.txt"; then
                print_warning "Le fichier robots.txt est déjà en mode STAGING"
                print_info "Aucune modification nécessaire"
            else
                # Sauvegarder l'ancien fichier
                cp "$PUBLIC_DIR/robots.txt" "$PUBLIC_DIR/robots.txt.backup"
                print_info "Sauvegarde créée : robots.txt.backup"
                
                # Créer le robots.txt de staging
                cat > "$PUBLIC_DIR/robots.txt" << 'EOF'
# Fichier robots.txt - Configuration STAGING
# Ce fichier bloque TOUS les robots sur test.eclosion-evenements.fr

# Bloquer tous les robots - AUCUNE indexation
User-agent: *
Disallow: /

# Bloquer spécifiquement Google
User-agent: Googlebot
Disallow: /

User-agent: Googlebot-Image
Disallow: /

User-agent: Googlebot-News
Disallow: /

# Bloquer Bing
User-agent: Bingbot
Disallow: /

User-agent: BingPreview
Disallow: /

# Bloquer les réseaux sociaux
User-agent: Twitterbot
Disallow: /

User-agent: facebookexternalhit
Disallow: /

User-agent: LinkedInBot
Disallow: /

# Bloquer les autres robots courants
User-agent: Slurp
Disallow: /

User-agent: DuckDuckBot
Disallow: /

User-agent: Baiduspider
Disallow: /

User-agent: YandexBot
Disallow: /

# Pas de sitemap sur staging
Sitemap:
EOF
                
                print_success "Robots.txt configuré en mode STAGING"
                print_warning "🚫 Indexation BLOQUÉE sur tous les moteurs de recherche"
            fi
        else
            print_error "Fichier robots.txt introuvable dans $PUBLIC_DIR"
            exit 1
        fi
        ;;
        
    production)
        print_info "Configuration pour PRODUCTION (eclosion-evenements.fr)"
        echo ""
        
        if [ ! -f "$PUBLIC_DIR/robots-production.txt" ]; then
            print_error "Fichier robots-production.txt introuvable"
            print_info "Création du fichier de production..."
            
            cat > "$PUBLIC_DIR/robots-production.txt" << 'EOF'
# Fichier robots.txt pour PRODUCTION (eclosion-evenements.fr)
# Ce fichier AUTORISE l'indexation du site principal

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

# Sitemap (à configurer avec votre URL de sitemap si vous en avez un)
# Sitemap: https://eclosion-evenements.fr/sitemap.xml
EOF
        fi
        
        # Sauvegarder l'ancien fichier
        if [ -f "$PUBLIC_DIR/robots.txt" ]; then
            cp "$PUBLIC_DIR/robots.txt" "$PUBLIC_DIR/robots.txt.backup"
            print_info "Sauvegarde créée : robots.txt.backup"
        fi
        
        # Copier le fichier de production
        cp "$PUBLIC_DIR/robots-production.txt" "$PUBLIC_DIR/robots.txt"
        
        print_success "Robots.txt configuré en mode PRODUCTION"
        print_success "✅ Indexation AUTORISÉE sur tous les moteurs de recherche"
        ;;
        
    *)
        print_error "Argument invalide: $MODE"
        echo ""
        show_help
        exit 1
        ;;
esac

echo ""
print_info "Contenu actuel de robots.txt :"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
head -n 10 "$PUBLIC_DIR/robots.txt"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
print_success "Configuration terminée avec succès !"
echo ""

