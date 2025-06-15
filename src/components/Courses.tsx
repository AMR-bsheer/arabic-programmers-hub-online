
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { code } from "lucide-react";

const courses = [
  {
    title: "أساسيات البرمجة",
    description: "تعلم أساسيات البرمجة من الصفر باستخدام Python",
    duration: "8 أسابيع",
    level: "مبتدئ",
    students: 250,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "تطوير المواقع",
    description: "تعلم تطوير المواقع باستخدام HTML, CSS, JavaScript",
    duration: "12 أسبوع",
    level: "متوسط",
    students: 180,
    color: "from-green-500 to-green-600"
  },
  {
    title: "تطوير تطبيقات الموبايل",
    description: "تعلم تطوير تطبيقات Android و iOS باستخدام React Native",
    duration: "16 أسبوع",
    level: "متقدم",
    students: 120,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "علوم البيانات",
    description: "تعلم تحليل البيانات والذكاء الاصطناعي باستخدام Python",
    duration: "20 أسبوع",
    level: "متقدم",
    students: 95,
    color: "from-orange-500 to-orange-600"
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-arabic">دوراتنا التدريبية</h2>
          <p className="text-xl text-gray-600 font-arabic">اختر الدورة المناسبة لمستواك وابدأ رحلة التعلم</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className={`w-12 h-12 bg-gradient-to-r ${course.color} rounded-lg flex items-center justify-center mb-4`}>
                  <code className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-arabic text-right">{course.title}</CardTitle>
                <CardDescription className="text-right font-arabic">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 font-arabic">المدة:</span>
                    <span className="font-semibold font-arabic">{course.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 font-arabic">المستوى:</span>
                    <span className="font-semibold font-arabic">{course.level}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 font-arabic">الطلاب:</span>
                    <span className="font-semibold font-arabic">{course.students}</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-arabic">
                  سجل الآن
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
