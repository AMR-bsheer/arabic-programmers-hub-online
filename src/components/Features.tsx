
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { book, school, language, code } from "lucide-react";

const features = [
  {
    icon: book,
    title: "محتوى تعليمي متميز",
    description: "محتوى تعليمي عالي الجودة مصمم خصيصاً للطلاب العرب"
  },
  {
    icon: school,
    title: "تعلم تفاعلي",
    description: "تعلم من خلال التطبيق العملي والمشاريع الحقيقية"
  },
  {
    icon: language,
    title: "دعم مستمر",
    description: "فريق دعم متخصص للإجابة على استفساراتك في أي وقت"
  },
  {
    icon: code,
    title: "شهادات معتمدة",
    description: "احصل على شهادات معتمدة تساعدك في سوق العمل"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-arabic">لماذا أكاديمية البرمجة؟</h2>
          <p className="text-xl text-gray-600 font-arabic">نقدم تجربة تعليمية فريدة ومتكاملة</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-arabic">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-arabic leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
