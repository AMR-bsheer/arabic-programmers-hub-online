
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "سارة أحمد",
    role: "مطورة مواقع",
    company: "شركة التقنية المتقدمة",
    content: "أفضل أكاديمية لتعلم البرمجة باللغة العربية. المحتوى ممتاز والمدربون محترفون جداً.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b9a1a6a1?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "محمد علي",
    role: "مطور تطبيقات",
    company: "ستارت أب تك",
    content: "تعلمت Python من الصفر وأصبحت قادراً على بناء مشاريع حقيقية. شكراً لفريق الأكاديمية.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "فاطمة محمد",
    role: "مطورة Full Stack",
    company: "شركة الابتكار الرقمي",
    content: "الشرح واضح والأمثلة عملية. تمكنت من الحصول على وظيفة أحلامي بعد إكمال الدورات.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-arabic">ماذا يقول طلابنا؟</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-arabic">آراء طلابنا الذين حققوا النجاح معنا</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 font-arabic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 dark:text-white font-arabic">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-arabic">{testimonial.role}</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-arabic">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
