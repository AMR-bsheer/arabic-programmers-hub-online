
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, School, Languages, Code } from "lucide-react";

const features = [
  {
    icon: Book,
    title: "محتوى تعليمي متميز",
    description: "محتوى تعليمي عالي الجودة مصمم خصيصاً للطلاب العرب",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: School,
    title: "تعلم تفاعلي",
    description: "تعلم من خلال التطبيق العملي والمشاريع الحقيقية",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Languages,
    title: "دعم مستمر",
    description: "فريق دعم متخصص للإجابة على استفساراتك في أي وقت",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Code,
    title: "شهادات معتمدة",
    description: "احصل على شهادات معتمدة تساعدك في سوق العمل",
    color: "from-orange-500 to-orange-600"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-arabic animate-fade-in">
            لماذا أكاديمية البرمجة؟
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-arabic animate-fade-in">
            نقدم تجربة تعليمية فريدة ومتكاملة
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-arabic text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 font-arabic leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
