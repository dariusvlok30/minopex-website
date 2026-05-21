import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const offices = [
    {
      city: t('contact.johannesburg'),
      country: 'South Africa',
      address: 'Johannesburg Office',
    },
    {
      city: t('contact.lesotho'),
      country: 'Lesotho',
      address: 'Lesotho Office',
    },
    {
      city: t('contact.mozambique'),
      country: 'Mozambique',
      address: 'Mozambique Office',
    },
    {
      city: t('contact.saudiArabia'),
      country: 'Saudi Arabia',
      address: 'Saudi Arabia Office',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed');
      toast.success(t('contact.form.success'));
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9fafb]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#111111] to-[#1a1a1a] text-white py-20">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-6">{t('contact.heading')}</h1>
            <p className="text-xl text-gray-200 max-w-2xl">{t('contact.subheading')}</p>
          </div>
        </section>

        {/* Offices Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-[#111111] mb-12 text-center">{t('contact.offices')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {offices.map((office, idx) => (
                <div key={idx} className="card-elevated p-8 hover:shadow-lg transition-all duration-200 ease-out">
                  <div className="w-12 h-12 bg-[#F7C200] rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="text-[#111111]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] mb-2">{office.city}</h3>
                  <p className="text-sm text-gray-600 mb-2">{office.country}</p>
                  <p className="text-xs text-gray-500">{office.address}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gradient-to-r from-[#111111]/5 to-[#F7C200]/5">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-[#111111] mb-12 text-center">{t('contact.sendMessage')}</h2>
              <form onSubmit={handleSubmit} className="card-elevated p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.subject')}
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="btn-primary w-full" disabled={submitting}>
                  {submitting ? 'Sending…' : t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F7C200] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-[#111111]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-2">{t('contact.phone')}</h3>
                <p className="text-gray-700">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F7C200] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-[#111111]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-2">{t('contact.email')}</h3>
                <p className="text-gray-700">info@minopex.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F7C200] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-[#111111]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-2">{t('contact.headquarters')}</h3>
                <p className="text-gray-700">Johannesburg, South Africa</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
