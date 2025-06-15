
import { Button } from "@/components/ui/button";
import { code } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-arabic leading-tight">
              تعلم البرمجة
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                باللغة العربية
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-arabic leading-relaxed">
              انضم إلى أكبر أكاديمية لتعليم البرمجة باللغة العربية. تعلم من الصفر حتى الاحتراف مع أفضل المدربين
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3 font-arabic">
                ابدأ رحلتك الآن
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2 font-arabic">
                شاهد الدورات
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 font-arabic">1000+</div>
                <div className="text-gray-600 font-arabic">طالب</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 font-arabic">50+</div>
                <div className="text-gray-600 font-arabic">دورة</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 font-arabic">95%</div>
                <div className="text-gray-600 font-arabic">نسبة النجاح</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-float opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-2xl">
                  <code className="w-24 h-24 text-blue-600" />
                  <div className="mt-4 text-center">
                    <div className="text-2xl font-bold text-gray-900 font-arabic">برمج بالعربية</div>
                    <div className="text-gray-600 font-arabic">تعلم واحترف</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
