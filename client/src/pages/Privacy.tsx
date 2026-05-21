import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9fafb]">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] text-white py-20">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-[#111111] mb-6">Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Minopex is committed to protecting your privacy. This privacy policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Full privacy policy content coming soon.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
