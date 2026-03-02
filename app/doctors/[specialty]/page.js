import Link from 'next/link';
import { specialties, getDoctorsBySpecialty, getSpecialtyBySlug } from '@/lib/data';
import DoctorCard from '@/components/DoctorCard';

export function generateStaticParams() {
  return specialties.map((s) => ({ specialty: s.id }));
}

export function generateMetadata({ params }) {
  const spec = getSpecialtyBySlug(params.specialty);
  return {
    title: spec ? `${spec.name} Doctors - Vezeeta Clone` : 'Doctors',
  };
}

export default function DoctorsBySpecialty({ params }) {
  const spec = getSpecialtyBySlug(params.specialty);
  const doctorsList = getDoctorsBySpecialty(params.specialty);

  if (!spec) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Specialty Not Found</h1>
        <Link href="/" className="text-primary-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{spec.name}</span>
      </nav>

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-5xl">{spec.icon}</span>
        <div>
          <h1 className="text-3xl font-bold">{spec.name}</h1>
          <p className="text-gray-500">{spec.nameAr} | {spec.description}</p>
        </div>
      </div>

      {/* Results count */}
      <p className="text-gray-600 mb-6">
        {doctorsList.length} doctor{doctorsList.length !== 1 ? 's' : ''} found
      </p>

      {/* Doctor List */}
      {doctorsList.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {doctorsList.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">No doctors available in this specialty yet.</p>
          <Link href="/" className="text-primary-600 hover:underline mt-4 inline-block">
            Browse other specialties
          </Link>
        </div>
      )}

      {/* Other Specialties */}
      <div className="mt-16">
        <h2 className="text-xl font-bold mb-6">Other Specialties</h2>
        <div className="flex flex-wrap gap-3">
          {specialties
            .filter((s) => s.id !== params.specialty)
            .map((s) => (
              <Link
                key={s.id}
                href={`/doctors/${s.id}`}
                className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm hover:border-primary-400 hover:text-primary-600 transition-colors"
              >
                {s.icon} {s.name}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
