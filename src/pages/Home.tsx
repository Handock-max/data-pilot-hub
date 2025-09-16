import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BarChart3, TrendingUp, Target, Users } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analyses de Performance",
      description: "Dashboards clairs et KPI essentiels pour piloter votre activité"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Rapports Automatisés",
      description: "Exports PDF, Excel et PowerPoint générés automatiquement"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Solutions Sur-Mesure",
      description: "Packs adaptés à la taille et aux besoins de votre entreprise"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Support Dédié",
      description: "Accompagnement et formation pour maximiser vos résultats"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* Remplacez l'arrière-plan de la section par une image si souhaité */}
      {/* Exemple: ajoutez une classe CSS avec background-image: url('/public/hero.jpg') */}
      <section className="relative bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Pilotez vos données,
              <br />
              <span className="text-primary-light">accélérez votre croissance</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Découvrez nos packs Essentiel et Professionnel pour transformer vos données 
              en insights stratégiques et booster la performance de votre entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <Link to="/packs">Découvrir nos packs</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white bg-transparent hover:bg-white hover:text-navy">
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Pourquoi choisir Ash Technologies ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous transformons vos données brutes en outils de pilotage stratégique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            Prêt à optimiser votre performance ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choisissez le pack qui correspond à vos besoins et commencez dès aujourd'hui
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-4">
            <Link to="/packs">Voir nos offres</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;