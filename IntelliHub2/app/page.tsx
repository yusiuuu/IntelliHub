import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Droplets, Flame, Shield, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold">IntelliHUB</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Features
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Benefits
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-orange-500 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Smart Gas & Oil Distribution for Remote Communities
              </h1>
              <p className="text-lg text-gray-600">
                IntelliHUB uses AI and IoT technology to provide safe, efficient, and reliable gas and oil distribution
                to underserved areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/dashboard/demo">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg blur opacity-25"></div>
                <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="IntelliHUB Dashboard Preview"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive solution addresses the challenges of fuel distribution in remote areas through
              innovative technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Flame className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Gas Distribution</h3>
              <p className="text-gray-600">
                Centralized gas distribution via pipelines with IoT sensors for monitoring usage, flow, leaks, and
                tampering at both lane and household levels.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Droplets className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Oil Monitoring & Management</h3>
              <p className="text-gray-600">
                Smart storage tanks with IoT sensors to detect oil level, temperature, pressure, and leaks, with
                optional GPS tracking for oil transport.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Analytics</h3>
              <p className="text-gray-600">
                Advanced AI models for predictive maintenance, anomaly detection, demand forecasting, and alert
                prioritization to ensure system efficiency.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security & Privacy</h3>
              <p className="text-gray-600">
                Robust data encryption, role-based access control, and user anonymity for household usage data to ensure
                privacy and security.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-600">
                Solar and battery backup for sensors and HUB, offline-mode sync for mobile app, and LoRaWAN/NB-IoT for
                long-range data transmission.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-teal-500"
                >
                  <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
                  <path d="M21.18 8.04C20.44 5.16 18.56 2.78 16.04 1.42" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Impact</h3>
              <p className="text-gray-600">
                Reduced reliance on cylinders, safer kitchens, job creation for locals, and education on clean energy
                practices through the mobile app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform fuel distribution in your community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join IntelliHUB today and bring safe, efficient, and reliable gas and oil distribution to your area.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white hover:bg-white hover:text-orange-600 w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flame className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold text-white">IntelliHUB</span>
              </div>
              <p className="text-sm">
                AI-Enabled IoT HUB for Smart Gas Distribution & Oil Monitoring in Remote Communities
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-sm hover:text-orange-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#benefits" className="text-sm hover:text-orange-400 transition-colors">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm hover:text-orange-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm hover:text-orange-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-sm hover:text-orange-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm hover:text-orange-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-sm hover:text-orange-400 transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-sm hover:text-orange-400 transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic text-sm space-y-2">
                <p>123 Tech Park</p>
                <p>North-East Region, India</p>
                <p>Email: info@intellihub.com</p>
                <p>Phone: +91 1234567890</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} IntelliHUB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
