import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Leadership() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8c] text-white py-20">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-6">Leadership</h1>
            <p className="text-xl text-gray-200">Meet our leadership team</p>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <p className="text-lg text-gray-700 text-center">Leadership team information coming soon.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
