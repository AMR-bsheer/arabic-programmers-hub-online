
import { Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-arabic">أكاديمية البرمجة</span>
            </div>
            <p className="text-gray-400 font-arabic leading-relaxed">
              منصة تعليمية متخصصة في تعليم البرمجة باللغة العربية للطلاب في المنطقة العربية
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-arabic">الدورات</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors font-arabic">أساسيات البرمجة</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-arabic">تطوير المواقع</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-arabic">تطبيقات الموبايل</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-arabic">علوم البيانات</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-arabic">روابط مفيدة</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors font-arabic">من نحن</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-arabic">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-arabic">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-arabic">شروط الاستخدام</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-arabic">تابعنا</h3>
            <p className="text-gray-400 mb-4 font-arabic">تابع آخر الأخبار والتحديثات</p>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                <span className="text-sm font-bold">y</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-arabic">
            جميع الحقوق محفوظة © 2024 أكاديمية البرمجة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
