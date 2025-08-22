import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Mail, Phone } from "lucide-react";

const Confirmation = () => {
  return (
    <div className="min-h-screen bg-secondary/30 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-success" />
          </div>
          <h1 className="text-4xl font-bold text-navy mb-4">
            Demande Envoyée avec Succès !
          </h1>
          <p className="text-lg text-muted-foreground">
            Merci pour votre confiance. Votre demande a été transmise à notre équipe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Prochaines étapes</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Analyse de vos besoins (24h)</li>
                    <li>• Contact téléphonique pour validation (48h)</li>
                    <li>• Proposition personnalisée (72h)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Nous vous contacterons sous 48h</h3>
                  <p className="text-sm text-muted-foreground">
                    Un membre de notre équipe vous contactera pour affiner votre projet 
                    et vous proposer une solution adaptée.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="font-semibold text-navy mb-4 flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Besoin d'une réponse plus rapide ?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Email :</p>
                <p className="font-medium">support@datapilothub.com</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">WhatsApp :</p>
                <p className="font-medium">+228 XXX XXX XXX</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;