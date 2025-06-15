
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "كيف يمكنني البدء في تعلم البرمجة؟",
    answer: "يمكنك البدء بدورة أساسيات البرمجة التي تُدرس باللغة العربية. ستتعلم المفاهيم الأساسية باستخدام لغة Python البسيطة والقوية."
  },
  {
    question: "هل الدورات مناسبة للمبتدئين تماماً؟",
    answer: "نعم، لدينا دورات مصممة خصيصاً للمبتدئين الذين لا يملكون أي خبرة سابقة في البرمجة. نبدأ من الأساسيات ونتدرج تدريجياً."
  },
  {
    question: "ما هي مدة الدورات التدريبية؟",
    answer: "تتراوح مدة الدورات من 8 إلى 20 أسبوع حسب مستوى الدورة وعمقها. كل دورة مقسمة إلى وحدات صغيرة يمكن إكمالها في وقتك الخاص."
  },
  {
    question: "هل سأحصل على شهادة بعد إكمال الدورة؟",
    answer: "نعم، ستحصل على شهادة معتمدة عند إكمال الدورة بنجاح. هذه الشهادات معترف بها في سوق العمل وتساعدك في التقدم المهني."
  },
  {
    question: "هل يمكنني الوصول إلى المحتوى مدى الحياة؟",
    answer: "نعم، بمجرد التسجيل في أي دورة، ستحصل على وصول مدى الحياة للمحتوى مع جميع التحديثات المستقبلية."
  },
  {
    question: "هل يوجد دعم فني ومساعدة؟",
    answer: "نعم، لدينا فريق دعم متخصص متاح 24/7 للإجابة على استفساراتك ومساعدتك في حل أي مشاكل تقنية أو تعليمية."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-arabic">الأسئلة الشائعة</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-arabic">إجابات على أكثر الأسئلة التي نتلقاها</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 border-0"
              >
                <AccordionTrigger className="text-right font-arabic font-semibold text-gray-900 dark:text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right font-arabic text-gray-700 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
