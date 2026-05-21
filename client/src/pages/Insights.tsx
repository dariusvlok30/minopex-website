import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Insights() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9fafb]">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] text-white py-20">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-6">Insights & Blog</h1>
            <p className="text-xl text-gray-200">Latest news and insights from Minopex</p>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <p className="text-lg text-gray-700 text-center">Blog and insights coming soon.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
