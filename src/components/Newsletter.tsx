
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Gift } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Newsletter signup:", email);
    setEmail("");
    // You could add a toast notification here
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-arabic">
                  اشترك في نشرتنا الإخبارية
                </h2>
                <p className="text-xl text-white/90 font-arabic">
                  احصل على آخر الأخبار والدورات الجديدة والعروض الخاصة
                </p>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <Gift className="w-6 h-6 text-yellow-300" />
                <span className="text-white font-arabic">احصل على خصم 20% على دورتك الأولى!</span>
              </div>
              
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/70 font-arabic"
                  dir="rtl"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-arabic px-8"
                >
                  اشترك الآن
                </Button>
              </form>
              
              <p className="text-center text-white/70 text-sm mt-4 font-arabic">
                نحترم خصوصيتك ولن نرسل لك رسائل غير مرغوب فيها
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
