import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Check, Clock, ExternalLink } from "lucide-react";

const Packs = () => {
  const packs = [
    {
      id: "essentiel",
      title: "Essentiel - Clarté Immédiate",
      price: "50 000 FCFA / mois",
      features: [
        "Collecte et structuration des données",
        "Dashboard simple 3 KPI",
        "Export PDF / Excel",
        "1 mise à jour mensuelle"
      ],
      available: true,
      recommended: false
    },
    {
      id: "professionnel",
      title: "Professionnel - Performance",
      price: "150 000 FCFA / mois (personnalisation sur devis)",
      features: [
        "Analyse approfondie des données",
        "Dashboard interactif léger 10 KPI",
        "Rapports hebdomadaires automatisés",
        "Export PDF / Excel / PowerPoint",
        "Formation courte"
      ],
      available: true,
      recommended: true
    },
    {
      id: "premium",
      title: "Premium - Pilotage Stratégique",
      price: "A partir de 300 000 FCFA / mois (prévisionnel uniquement sur devis)",
      features: [
        "Audit complet des processus internes",
        "Dashboards multi-niveaux",
        "20+ KPI stratégiques",
        "Prévisions et modélisations",
        "Reporting automatisé hebdomadaire et mensuel",
        "Assistance dédiée"
      ],
      available: false,
      recommended: false
    },
    {
      id: "elites",
      title: "Élites - Sur-Mesure",
      price: "À partir de 1 000 000 FCFA / mois (uniquement sur devis)",
      features: [
        "Solutions personnalisées IA et API",
        "Dashboards multi-équipes",
        "Formation complète des managers et cadres",
        "Intégration cloud et systèmes existants",
        "Veille stratégique & suivi hebdomadaire et mensuel"
      ],
      available: false,
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-secondary/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Packs & Tarifs
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez la solution qui correspond parfaitement aux besoins de votre entreprise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packs.map((pack) => (
            <Card 
              key={pack.id} 
              className={`relative transition-all duration-300 hover:shadow-strong hover:-translate-y-2 ${
                pack.recommended ? 'border-primary shadow-primary' : ''
              } ${!pack.available ? 'opacity-75' : ''}`}
            >
              {pack.recommended && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-primary">
                  Recommandé
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-navy mb-2">
                  {pack.title}
                </CardTitle>
                <div className="text-2xl font-bold text-primary mb-4">
                  {pack.price}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pack.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  {pack.available ? (
                    <Button asChild className="w-full" variant={pack.recommended ? "default" : "outline"}>
                      <Link to="/formulaire" state={{ selectedPack: pack.id }}>
                        Choisir ce pack
                      </Link>
                    </Button>
                  ) : (
                    
                    
                    /*<Button 
                      variant="outline" 
                      className="w-full" 
                      disabled
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      <Link to="/Contact">/** */

                    <Button asChild className="w-full" variant={pack.recommended ? "default" : "outline"}>
                      <Link to="/contact">
                      Veuillez nous contacter
                      </Link>
                    </Button>
                  )}
                </div>

                {!pack.available && (
                  <div className="text-center pt-2">
                    <a 
                      href="https://futur-saas.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-hover text-sm inline-flex items-center"
                    >
                      En savoir plus <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Besoin d'aide pour choisir ? Notre équipe est là pour vous conseiller.
          </p>
          <Button asChild variant="outline">
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};



export default Packs;