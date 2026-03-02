import Link from 'next/link';

export default function DoctorCard({ doctor }) {
  const fullStars = Math.floor(doctor.rating);
  const stars = '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);

  return (
    <Link href={`/doctor/${doctor.id}`}>
      <div className="bg-white rounded-xl p-5 card-hover border border-gray-100 hover:border-primary-300 flex gap-4">
        {/* Avatar */}
        <div
          className={`avatar-initials flex-shrink-0 w-16 h-16 text-xl ${
            doctor.gender === 'male' ? 'avatar-male' : 'avatar-female'
          }`}
        >
          {doctor.initials}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-gray-900 truncate">{doctor.name}</h3>
          <p className="text-primary-600 text-sm font-medium">{doctor.title}</p>
          <p className="text-gray-500 text-sm mt-1">{doctor.specialty}</p>

          <div className="flex items-center gap-4 mt-2 text-sm">
            <span className="stars">{stars}</span>
            <span className="text-gray-500">
              {doctor.rating} ({doctor.reviewCount} reviews)
            </span>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {doctor.location}
            </div>
            <div className="text-primary-700 font-bold">
              {doctor.price} {doctor.currency}
            </div>
          </div>

          <div className="mt-2 text-xs text-gray-400">
            Wait time: ~{doctor.waitTime}
          </div>
        </div>
      </div>
    </Link>
  );
}
