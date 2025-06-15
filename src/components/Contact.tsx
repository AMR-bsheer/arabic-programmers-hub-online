
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-arabic">تواصل معنا</h2>
          <p className="text-xl opacity-90 font-arabic">نحن هنا لمساعدتك في رحلة التعلم</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-arabic">معلومات التواصل</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 font-arabic">البريد الإلكتروني</h4>
                <p className="opacity-90">info@programming-academy.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 font-arabic">رقم الهاتف</h4>
                <p className="opacity-90" dir="ltr">+966 50 123 4567</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 font-arabic">ساعات العمل</h4>
                <p className="opacity-90 font-arabic">السبت - الخميس: 9:00 ص - 6:00 م</p>
              </div>
            </div>
          </div>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white font-arabic text-right">ابدأ رحلتك اليوم</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white/90 font-arabic text-right">
                انضم إلى آلاف الطلاب الذين بدأوا رحلتهم في عالم البرمجة معنا
              </p>
              <div className="space-y-3">
                <div className="text-white/80 font-arabic text-right">✓ دورات شاملة ومتدرجة</div>
                <div className="text-white/80 font-arabic text-right">✓ مدربون متخصصون</div>
                <div className="text-white/80 font-arabic text-right">✓ شهادات معتمدة</div>
                <div className="text-white/80 font-arabic text-right">✓ دعم مستمر</div>
              </div>
              <Button className="w-full bg-white text-blue-900 hover:bg-gray-100 font-arabic">
                سجل الآن مجاناً
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
