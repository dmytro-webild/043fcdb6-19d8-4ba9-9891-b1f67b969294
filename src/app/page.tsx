"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="largeSmall"
        background="blurBottom"
        cardStyle="solid"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "الرئيسية",
          id: "hero",
        },
        {
          name: "من نحن",
          id: "about",
        },
        {
          name: "خدماتنا",
          id: "services",
        },
        {
          name: "الآراء",
          id: "testimonials",
        },
        {
          name: "تواصل معنا",
          id: "contact",
        },
      ]}
      brandName="مطعم مبشور الطائف"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "radial-gradient",
      }}
      title="مشاوي بطعم أصيل… وتجربة لا تُنسى في قلب الطائف"
      description="من سنوات طويلة ونحن نقدّم ألذ المشاوي الحجازية والمبشور الشهي بجودة ثابتة. نكهات أصيلة، لحوم طازجة، وخدمة تستحق التكرار."
      tag="مطعم مشويات حجازي عريق"
      buttons={[
        {
          text: "احجز طلبك الآن",
          href: "#contact",
        },
        {
          text: "اطلب عبر واتساب",
          href: "https://wa.me/966XXXXXXXX",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/sac-ichi-with-mixed-ingredients-lavash-bread_114579-1156.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="من نحن"
      description="في مطعم مبشور الطائف نؤمن أن الأكل الطيب يبدأ من الجودة الحقيقية. منذ سنوات طويلة ونحن نحافظ على النكهة الأصيلة التي جعلتنا وجهة مفضلة لعشاق المشويات والمبشور."
      bulletPoints={[
        {
          title: "جودة اللحوم",
          description: "نختار أجود أنواع اللحوم الطازجة يومياً",
        },
        {
          title: "النكهة الحجازية",
          description: "تتبيلات خاصة توارثناها لتقديم طعم أصيل",
        },
        {
          title: "تجربة عائلية",
          description: "جلسات مريحة تليق بالعائلات والأفراد",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-crackers-cakes-with-cranberries-top-inside-colored-plate_140725-29770.jpg"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "المشويات الحجازية",
          description: "تشكيلة فاخرة من الكباب والأوصال المشوية على الفحم.",
          imageSrc: "http://img.b2bpic.net/free-photo/chicken-kebab-with-grilled-vegetables-barbecque-sauce_114579-2870.jpg",
          buttonIcon: "Zap",
        },
        {
          title: "المبشور الأصلي",
          description: "أشهر أطباقنا مع أرز البشاوري الشهير.",
          imageSrc: "http://img.b2bpic.net/free-photo/indian-meal-with-pita-rice_23-2148747625.jpg",
          buttonIcon: "Flame",
        },
        {
          title: "جلسات عائلية",
          description: "بيئة راقية ومريحة لتجمعات العوائل والأفراد.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-african-american-couple-love-having-great-time-together-their-dating-attractive-couple-enjoying-each-other-eating-restaurant_613910-18747.jpg",
          buttonIcon: "Users",
        },
        {
          title: "طلبات السفري",
          description: "خدمة سريعة ومحترفة تحافظ على جودة الطعام.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-preparing-takeaway-food-delivery_23-2149025796.jpg",
          buttonIcon: "Car",
        },
        {
          title: "توصيل سريع",
          description: "نصلك أينما كنت في الطائف بجودة عالية.",
          imageSrc: "http://img.b2bpic.net/free-photo/eco-friendly-food-packaging-delivery-concept_53876-143263.jpg",
          buttonIcon: "Truck",
        },
      ]}
      title="خدماتنا المتميزة"
      description="نقدم تجربة غذائية متكاملة ترضي تطلعاتكم بجودة واحترافية عالية."
    />
  </div>

  <div id="why" data-section="why">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "15+",
          description: "سنة من التميز",
        },
        {
          id: "m2",
          value: "4.8",
          description: "تقييم العملاء",
        },
        {
          id: "m3",
          value: "100K",
          description: "عميل سعيد",
        },
        {
          id: "m4",
          value: "99%",
          description: "رضا العملاء",
        },
        {
          id: "m5",
          value: "50+",
          description: "صنف مميز",
        },
      ]}
      title="لماذا يختارنا عملاؤنا؟"
      description="نلتزم بمعايير الجودة والخدمة لنكون وجهتكم الأولى."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "سارة محمد",
          handle: "@saarah",
          testimonial: "أفضل مشاوي جربتها في الطائف، لذة لا تقاوم.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-winking-thumb-up_1187-3210.jpg",
        },
        {
          id: "t2",
          name: "خالد العتيبي",
          handle: "@khalid",
          testimonial: "جودة ثابتة منذ سنوات طويلة، طعم أصيل فعلاً.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-eating-salad-cafe_1303-25274.jpg",
        },
        {
          id: "t3",
          name: "نورة الشريف",
          handle: "@noora",
          testimonial: "نظافة ممتازة وخدمة محترمة، شكراً لكم.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-man-with-food-phone_23-2149155151.jpg",
        },
        {
          id: "t4",
          name: "أحمد العمري",
          handle: "@ahmed",
          testimonial: "المبشور والرز بشاوري شيء خيال فوق الوصف.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/emotional-female-portrait-closeup-outdoors_1321-4437.jpg",
        },
        {
          id: "t5",
          name: "فيصل الغامدي",
          handle: "@faisal",
          testimonial: "خدمة سريعة ولحوم طازجة، أنصح بزيارته.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-noodles_23-2149005440.jpg",
        },
      ]}
      showRating={true}
      title="آراء عملائنا"
      description="نعتز بثقتكم ونعمل جاهدين لتقديم أفضل تجربة."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <BlogCardOne
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={false}
      title="معرض الصور"
      description="تذوقوا التجربة بأعينكم قبل تذوقها بأفواهكم."
      blogs={[
        {
          id: "g1",
          category: "تصوير",
          title: "مشاوي مشوية على الفحم",
          excerpt: "سر النكهة",
          imageSrc: "http://img.b2bpic.net/free-photo/potatoes-grilled-meat-fire-heat-cooking-nature_78826-2890.jpg",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/young-woman-showing-double-thumbs-up-green-shirt-looking-glad-front-view_176474-103360.jpg",
          date: "2024",
        },
        {
          id: "g2",
          category: "أطباق",
          title: "طبق المبشور التقليدي",
          excerpt: "مع أرز البشاوري",
          imageSrc: "http://img.b2bpic.net/free-photo/boiled-lamb-legs-with-vegetables_140725-3320.jpg",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/girl-sitting-table-holding-mobile-phone-indoors_171337-17097.jpg",
          date: "2024",
        },
        {
          id: "g3",
          category: "جلسات",
          title: "جلسات عائلية راقية",
          excerpt: "خصوصية وراحة",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-shot-table-with-elegant-setting-restaurant-hall-evening_181624-24706.jpg",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/healthy-woman-with-tan-sitting-t-shirt-cafe-terrace-eating-breakfast-drinking-coffee_197531-22516.jpg",
          date: "2024",
        },
        {
          id: "g4",
          category: "مطبخ",
          title: "طهاة محترفون",
          excerpt: "إعداد طازج يومي",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-meat-with-cheese-green_140725-4683.jpg",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/happy-beautiful-blonde-woman-wearing-white-shirt-standing-co-working-space-leaning-desk_74855-15151.jpg",
          date: "2024",
        },
        {
          id: "g5",
          category: "مقبلات",
          title: "مقبلات طازجة",
          excerpt: "تفتح الشهية",
          imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-cheese-cubes-wooden-chopping-board_23-2148162011.jpg",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/retro-pinup-girl-kitchen_23-2148867253.jpg",
          date: "2024",
        },
        {
          id: "g6",
          category: "مطعم",
          title: "أجواء المساء",
          excerpt: "مطعم مبشور الطائف ليلاً",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-miami-bayside-marketplace-scene_23-2151599573.jpg",
          authorName: "Admin",
          authorAvatar: "http://img.b2bpic.net/free-photo/ok-sign-showed-by-attractive-woman_329181-13410.jpg",
          date: "2024",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "cell-wave",
      }}
      text="جاهز لتجربة أفضل مشويات في الطائف؟ اطلب الآن واستمتع بطعم أصيل وجودة مضمونة."
      buttons={[
        {
          text: "اطلب عبر واتساب الآن",
          href: "https://wa.me/966XXXXXXXX",
        },
        {
          text: "احجز جلستك الآن",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="مبشور الطائف"
      copyrightText="© 2025 مطعم مبشور الطائف - نكهة أصيلة وتجربة تستحق التكرار."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
