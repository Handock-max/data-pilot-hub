import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO Supabase (expliquer) :
    // 1) Créez un projet sur Supabase et un schéma/table `contacts` avec colonnes:
    //    id (uuid, pk, default uuid_generate_v4), created_at (timestamp, default now()),
    //    nom (text), email (text), message (text)
    // 2) Ajoutez SUPABASE_URL et SUPABASE_ANON_KEY dans .env
    // 3) Dé-commentez et utilisez l'exemple ci-dessous:
    // IMPORTANT: Ne pas appeler Supabase tant que vos clés ne sont pas configurées,
    // cela empêcherait toute erreur en production sur GitHub Pages.
    // Exemple (à activer plus tard):
    // import { supabase } from '@/lib/supabaseClient'
    // const { error } = await supabase.from('contacts').insert({ nom: formData.nom, email: formData.email, message: formData.message })
    // if (error) { toast({ title: 'Erreur', description: error.message, variant: 'destructive' }); return }

    // Simulation en attendant Supabase
    toast({
      title: "Message envoyé !",
      description: "Votre message a été envoyé. Nous vous répondrons rapidement.",
    });

    // Reset form
    setFormData({ nom: "", email: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "support@datapilothub.com",
      detail: "Réponse sous 24h en moyenne"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp",
      description: "+228 XXX XXX XXX",
      detail: "Disponible 9h-17h, du lundi au vendredi"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Téléphone",
      description: "+228 XXX XXX XXX",
      detail: "Support téléphonique sur rendez-vous"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary/30 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Contact & Support
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre équipe est là pour répondre à toutes vos questions et vous accompagner 
            dans votre projet de transformation data.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Nous contacter</h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="hover:shadow-medium transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                          {method.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy mb-1">{method.title}</h3>
                          <p className="text-primary font-medium mb-1">{method.description}</p>
                          <p className="text-sm text-muted-foreground">{method.detail}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Hours */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center text-success">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Horaires de support</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Lundi - Vendredi : 9h00 - 17h00</p>
                      <p>Email : Réponse sous 24h</p>
                      <p>WhatsApp : Réponse rapide aux heures ouvrables</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-navy">Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom *</Label>
                    <Input
                      id="nom"
                      value={formData.nom}
                      onChange={(e) => handleInputChange("nom", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={6}
                      placeholder="Décrivez votre projet, vos questions ou vos besoins..."
                      required
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit" size="lg" className="px-8">
                      Envoyer le message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;