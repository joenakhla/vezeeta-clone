export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Vezeeta</h3>
            <p className="text-sm">
              Your health, one click away. Book doctors, order medicines,
              schedule lab tests and scans — all in one place.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Find a Doctor</a></li>
              <li><a href="/pharmacy" className="hover:text-white">Online Pharmacy</a></li>
              <li><a href="/labs" className="hover:text-white">Lab Tests</a></li>
              <li><a href="/scans" className="hover:text-white">Scans & Radiology</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
              <li><span className="text-gray-500">Contact: support@vezeeta-test.com</span></li>
              <li><span className="text-gray-500">Phone: +20 2 XXXX XXXX</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          &copy; 2026 Vezeeta. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
