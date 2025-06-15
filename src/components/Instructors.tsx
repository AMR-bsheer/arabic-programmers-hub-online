
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const instructors = [
  {
    name: "أحمد محمد",
    title: "مطور Full Stack",
    experience: "10 سنوات خبرة",
    specialty: "تطوير المواقع",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "فاطمة أحمد",
    title: "خبيرة الذكاء الاصطناعي",
    experience: "8 سنوات خبرة",
    specialty: "علوم البيانات",
    image: "https://images.unsplash.com/photo-1494790108755-2616b9a1a6a1?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "محمد علي",
    title: "مطور تطبيقات الموبايل",
    experience: "7 سنوات خبرة",
    specialty: "تطبيقات iOS و Android",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
  }
];

const Instructors = () => {
  return (
    <section id="instructors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-arabic">مدربونا المتميزون</h2>
          <p className="text-xl text-gray-600 font-arabic">تعلم من خبراء البرمجة والتكنولوجيا</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {instructors.map((instructor, index) => (
            <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-gradient-to-r from-blue-600 to-purple-600">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-2xl font-arabic">{instructor.name}</CardTitle>
                <p className="text-blue-600 font-semibold font-arabic">{instructor.title}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-gray-600 font-arabic">{instructor.experience}</p>
                  <p className="text-gray-700 font-semibold font-arabic">{instructor.specialty}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
