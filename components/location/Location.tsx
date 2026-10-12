import { site } from "@/data/site";
import Image from "next/image"; // 1. استيراد مكون الصورة من Next.js
import Reveal from "@/components/ui/Reveal";

export default function Location() {
  const { location } = site;

  return (
    <section 
      id="visit" 
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden scroll-mt-16 py-24 md:py-32"
    >
      {/* 1. طبقة الخلفية (الصورة) */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/images/last/3moo.jpeg" // 2. تم تصحيح المسار هنا
          alt="Solstice Coffee Bar Interior"
          fill // تجعل الصورة تملأ المساحة بالكامل
          sizes="100vw"
          className="object-cover" // لضمان تغطية الصورة دون تشويه
          priority // لتحميل الصورة بسرعة لأنها خلفية رئيسية
        />
      </div>

      {/* 2. الطبقة الداكنة الهادئة (Black Layer) */}
      <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-[2px]"></div>

      {/* 3. المحتوى (النصوص) */}
      <div className="relative z-20 mx-auto w-full max-w-content px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          
          {/* العمود الأيسر: العنوان ومعلومات الاتصال */}
          <Reveal className="flex flex-col justify-center text-left">
            <h2 className="font-serif text-4xl tracking-tight text-white md:text-5xl">
              {location.heading}
            </h2>

            <div className="mt-8 space-y-1 font-sans">
              <p className="text-lg font-medium text-white">{location.name}</p>
              {location.addressLines.map((line) => (
                <p key={line} className="text-base text-white/70">
                  {line}
                </p>
              ))}
              <p className="pt-2 text-base text-white/70">{location.phone}</p>

              <a
                href={location.directionsHref}
                className="mt-6 inline-flex items-center gap-1.5 border-b border-accent pb-0.5 text-sm font-medium text-accent transition-opacity duration-200 hover:opacity-70"
              >
                {location.directionsLabel}
              </a>
            </div>
          </Reveal>

          {/* العمود الأيمن: ساعات العمل */}
          <Reveal className="flex flex-col justify-center font-sans">
            <h3 className="text-xs uppercase tracking-widest text-white/50">
              Opening Hours
            </h3>
            <dl className="mt-6 space-y-4">
              {location.hours.map((h) => (
                <div
                  key={h.days}
                  className="flex items-baseline justify-between gap-4 border-b border-white/20 pb-3 text-[0.95rem]"
                >
                  <dt className="whitespace-nowrap text-white/90">{h.days}</dt>
                  <dd className="text-right text-white/70">{h.time}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

        </div>
      </div>
    </section>
  );
}