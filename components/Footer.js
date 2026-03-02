export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Vezeeta Clone</h3>
            <p className="text-sm">
              This is a test website built for testing Zoho Flow integrations.
              Not a real medical booking platform.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/dashboard" className="hover:text-white">Doctor Dashboard</a></li>
              <li><a href="/settings" className="hover:text-white">Webhook Settings</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3">For Testing Only</h3>
            <p className="text-sm">
              All doctors and data shown here are fictitious. This site is used
              exclusively for testing automation workflows.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          Vezeeta Clone - Test Environment | Not affiliated with Vezeeta.com
        </div>
      </div>
    </footer>
  );
}
