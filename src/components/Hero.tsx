
import { Button } from "@/components/ui/button";
import { Code, Play, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 flex items-center transition-colors duration-300">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-arabic leading-tight">
                تعلم البرمجة
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent gradient-text">
                  باللغة العربية
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 font-arabic leading-relaxed">
                انضم إلى أكبر أكاديمية لتعليم البرمجة باللغة العربية. تعلم من الصفر حتى الاحتراف مع أفضل المدربين
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3 font-arabic btn-animate hover-lift">
                <Play className="w-5 h-5 ml-2" />
                ابدأ رحلتك الآن
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2 font-arabic hover-lift dark:border-gray-600 dark:text-gray-300">
                شاهد الدورات
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 md:gap-8 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="group">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400 ml-2" />
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 font-arabic">1000+</div>
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-arabic">طالب</div>
              </div>
              <div className="group">
                <div className="flex items-center justify-center mb-2">
                  <Code className="w-6 h-6 text-purple-600 dark:text-purple-400 ml-2" />
                  <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 font-arabic">50+</div>
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-arabic">دورة</div>
              </div>
              <div className="group">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-green-600 dark:text-green-400 ml-2" />
                  <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 font-arabic">95%</div>
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-arabic">نسبة النجاح</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-start">
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-float opacity-20 dark:opacity-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-2xl hover-lift pulse-glow">
                  <Code className="w-16 h-16 md:w-24 md:h-24 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white font-arabic">برمج بالعربية</div>
                    <div className="text-gray-600 dark:text-gray-400 font-arabic">تعلم واحترف</div>
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
