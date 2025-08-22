import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Formulaire = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const selectedPack = location.state?.selectedPack || "";

  const [formData, setFormData] = useState({
    nom_complet: "",
    entreprise: "",
    email: "",
    telephone: "",
    pack_choisi: selectedPack,
    definition_kpi: "",
    frequence_rapport: "",
    commentaires: "",
    consentement: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consentement) {
      toast({
        title: "Erreur",
        description: "Veuillez accepter la politique de confidentialité",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Demande envoyée !",
      description: "Votre demande a été transmise avec succès. Nous vous contacterons sous 48h.",
    });

    setTimeout(() => {
      navigate("/confirmation");
    }, 1500);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-secondary/30 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-navy mb-4">
            Demande de Service
          </h1>
          <p className="text-lg text-muted-foreground">
            Remplissez ce formulaire pour commencer votre transformation data
          </p>
        </div>

        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="text-2xl text-navy">Informations de contact</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nom_complet">Nom complet *</Label>
                  <Input
                    id="nom_complet"
                    value={formData.nom_complet}
                    onChange={(e) => handleInputChange("nom_complet", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="entreprise">Nom de l'entreprise *</Label>
                  <Input
                    id="entreprise"
                    value={formData.entreprise}
                    onChange={(e) => handleInputChange("entreprise", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                  <Label htmlFor="telephone">Téléphone *</Label>
                  <Input
                    id="telephone"
                    value={formData.telephone}
                    onChange={(e) => handleInputChange("telephone", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Pack choisi *</Label>
                  <Select value={formData.pack_choisi} onValueChange={(value) => handleInputChange("pack_choisi", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un pack" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="essentiel">Essentiel</SelectItem>
                      <SelectItem value="professionnel">Professionnel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Fréquence des rapports *</Label>
                  <Select value={formData.frequence_rapport} onValueChange={(value) => handleInputChange("frequence_rapport", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez la fréquence" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mensuelle">Mensuelle</SelectItem>
                      <SelectItem value="hebdomadaire">Hebdomadaire</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Fichiers de données *</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Téléversez vos fichiers (Excel, CSV)
                  </p>
                  <Button type="button" variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Choisir les fichiers
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="definition_kpi">Définir vos KPI et besoins principaux *</Label>
                <Textarea
                  id="definition_kpi"
                  value={formData.definition_kpi}
                  onChange={(e) => handleInputChange("definition_kpi", e.target.value)}
                  rows={4}
                  placeholder="Décrivez vos objectifs principaux, les indicateurs que vous souhaitez suivre, et vos besoins spécifiques..."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="commentaires">Commentaires supplémentaires</Label>
                <Textarea
                  id="commentaires"
                  value={formData.commentaires}
                  onChange={(e) => handleInputChange("commentaires", e.target.value)}
                  rows={3}
                  placeholder="Informations supplémentaires, contraintes particulières, délais souhaités..."
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consentement"
                  checked={formData.consentement}
                  onCheckedChange={(checked) => handleInputChange("consentement", !!checked)}
                />
                <Label htmlFor="consentement" className="text-sm">
                  J'accepte la politique de confidentialité et le traitement de mes données *
                </Label>
              </div>

              <div className="flex justify-end pt-6">
                <Button type="submit" size="lg" className="px-8">
                  Envoyer la demande
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Formulaire;