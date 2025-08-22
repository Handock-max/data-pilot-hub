import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricingData = [
    {
      pack: "Essentiel",
      cible: "PME, commerces",
      kpi: "3 KPI principaux",
      dashboards: "Dashboard simple",
      rapports: "Export PDF / Excel, 1 mise à jour mensuelle",
      support: "Email, réponse 48h",
      prix: "100 000 FCFA / mois",
      disponibilite: "Disponible",
      available: true
    },
    {
      pack: "Professionnel",
      cible: "Entreprises en croissance, multi-sites",
      kpi: "10 KPI",
      dashboards: "Dashboard interactif léger",
      rapports: "Rapports hebdomadaires automatisés, Export PDF/Excel/PPT",
      support: "Email + WhatsApp, réponse 24h",
      prix: "300 000 FCFA / mois",
      disponibilite: "Disponible",
      available: true
    },
    {
      pack: "Premium",
      cible: "Grandes entreprises, centres d'appel",
      kpi: "20+ KPI",
      dashboards: "Multi-niveaux, prévisions et modélisation",
      rapports: "Rapports automatisés hebdomadaires et mensuels",
      support: "Assistance dédiée, hotline / WhatsApp / email",
      prix: "600 000 FCFA / mois (prévisionnel)",
      disponibilite: "Bientôt disponible",
      available: false
    },
    {
      pack: "Élites",
      cible: "Multinationales, institutions",
      kpi: "Personnalisé selon le client",
      dashboards: "Dashboards multi-équipes, intégration IA et API",
      rapports: "Reporting complet et veille stratégique",
      support: "Support premium 24/7",
      prix: "À partir de 1 000 000 FCFA / mois (sur devis)",
      disponibilite: "Bientôt disponible",
      available: false
    }
  ];

  return (
    <div className="min-h-screen bg-secondary/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Nos Prix
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comparatif détaillé de nos packs actuels et à venir
          </p>
        </div>

        {/* Mobile Cards View */}
        <div className="lg:hidden space-y-6">
          {pricingData.map((item, index) => (
            <Card key={index} className={`${!item.available ? 'opacity-75' : ''}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-navy">{item.pack}</CardTitle>
                  <Badge variant={item.available ? "default" : "secondary"}>
                    {item.disponibilite}
                  </Badge>
                </div>
                <div className="text-lg font-semibold text-primary">{item.prix}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-navy mb-1">Cible</h4>
                  <p className="text-sm text-muted-foreground">{item.cible}</p>
                </div>
                <div>
                  <h4 className="font-medium text-navy mb-1">KPI</h4>
                  <p className="text-sm text-muted-foreground">{item.kpi}</p>
                </div>
                <div>
                  <h4 className="font-medium text-navy mb-1">Dashboards</h4>
                  <p className="text-sm text-muted-foreground">{item.dashboards}</p>
                </div>
                <div>
                  <h4 className="font-medium text-navy mb-1">Rapports</h4>
                  <p className="text-sm text-muted-foreground">{item.rapports}</p>
                </div>
                <div>
                  <h4 className="font-medium text-navy mb-1">Support</h4>
                  <p className="text-sm text-muted-foreground">{item.support}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold text-navy">Pack</th>
                    <th className="text-left p-4 font-semibold text-navy">Cible</th>
                    <th className="text-left p-4 font-semibold text-navy">KPI</th>
                    <th className="text-left p-4 font-semibold text-navy">Dashboards</th>
                    <th className="text-left p-4 font-semibold text-navy">Rapports</th>
                    <th className="text-left p-4 font-semibold text-navy">Support</th>
                    <th className="text-left p-4 font-semibold text-navy">Prix</th>
                    <th className="text-left p-4 font-semibold text-navy">Disponibilité</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((item, index) => (
                    <tr key={index} className={`border-b border-border/50 ${!item.available ? 'opacity-75' : ''}`}>
                      <td className="p-4">
                        <div className="font-medium text-navy">{item.pack}</div>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">{item.cible}</td>
                      <td className="p-4 text-sm text-muted-foreground">{item.kpi}</td>
                      <td className="p-4 text-sm text-muted-foreground">{item.dashboards}</td>
                      <td className="p-4 text-sm text-muted-foreground max-w-xs">{item.rapports}</td>
                      <td className="p-4 text-sm text-muted-foreground">{item.support}</td>
                      <td className="p-4">
                        <div className="font-semibold text-primary">{item.prix}</div>
                      </td>
                      <td className="p-4">
                        <Badge variant={item.available ? "default" : "secondary"}>
                          {item.disponibilite}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Prêt à transformer vos données en avantage concurrentiel ?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/packs">Choisir un pack</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Demander un devis</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;