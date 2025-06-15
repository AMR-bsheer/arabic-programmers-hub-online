
import { Button } from "@/components/ui/button";
import { code } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 font-arabic">أكاديمية البرمجة</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-arabic">الرئيسية</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors font-arabic">الدورات</a>
            <a href="#instructors" className="text-gray-700 hover:text-blue-600 transition-colors font-arabic">المدربين</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-arabic">تواصل معنا</a>
          </div>
          
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-arabic">
            ابدأ التعلم
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
