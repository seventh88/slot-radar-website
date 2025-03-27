import Image from 'next/image';

export default function Home() {
    return (
        <main className="text-gray-900">
            {/* Navigation Bar with smoother hover transitions */}
            <nav className="bg-white shadow p-4 flex items-center justify-between sticky top-0 z-12 transition-colors duration-300">
                <div className="flex items-center space-x-2">
                    <Image
                        src="/logo.png"
                        alt="US Visa Radar Logo"
                        width={40}
                        height={40}
                    />
                    <span className="font-bold text-xl">US Visa Radar</span>
                </div>
                <div className="space-x-6 hidden md:block">
                    <a
                        href="#features"
                        className="text-gray-600 hover:text-blue-600"
                    >
                        Features
                    </a>
                    <a
                        href="#regions"
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:underline"
                    >
                        Supported Regions
                    </a>
                    <a
                        href="#faq"
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:underline"
                    >
                        FAQ
                    </a>
                    <a
                        href="#about"
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:underline"
                    >
                        About
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                className="relative flex flex-col md:flex-row items-center justify-between px-16 py-16 bg-gradient-to-r from-blue-50 to-white overflow-hidden"
                style={{
                    background:
                        'linear-gradient(180deg,#c2fbff,hsla(0,0%,100%,0) 93.47%)',
                }}
            >
                {/* Text Content */}
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 z-10">
                    <h1 className="text-5xl font-bold mb-4 text-blue-900">
                        US Visa Radar
                    </h1>
                    <p className="text-lg text-gray-700 mb-6 max-w-2xl">
                        US Visa Radar is a real-time alert system for U.S. B1/B2
                        (tourist/business) visa applicants. We continuously
                        monitor official appointment systems across multiple
                        countries and send instant notifications via Telegram,
                        WhatsApp, or Discord so help you to book a slot.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://t.me/us_visa_radar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-6 py-2 rounded"
                        >
                            📢 Join Telegram
                        </a>
                        <a
                            href="https://chat.whatsapp.com/Fd02R8mqbaK72JvtUHSX5L"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 text-white px-6 py-2 rounded"
                        >
                            🟢 Join WhatsApp
                        </a>
                        <a
                            href="https://discord.gg/VPRQaKRaEs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-purple-600 text-white px-6 py-2 rounded"
                        >
                            💬 Join Discord
                        </a>
                    </div>
                </div>

                {/* Placeholder Illustration */}
                <div className="md:w-1/2 flex justify-center z-10">
                    <Image
                        src="/hero-wave.svg"
                        alt="Hero Illustration"
                        width={500}
                        height={400}
                        className="object-contain"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
                        Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-gray-50 rounded shadow text-center transition-transform duration-300 hover:scale-105">
                            <div className="text-blue-500 mb-4 text-3xl">
                                📡
                            </div>
                            <h3 className="font-bold text-lg">
                                Real-time Monitoring
                            </h3>
                            <p className="text-gray-700 mt-2">
                                We continuously scan official U.S. visa
                                appointment systems, ensuring you get
                                up-to-the-minute availability.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded shadow text-center transition-transform duration-300 hover:scale-105">
                            <div className="text-blue-500 mb-4 text-3xl">
                                ⚡
                            </div>
                            <h3 className="font-bold text-lg">
                                Instant Alerts
                            </h3>
                            <p className="text-gray-700 mt-2">
                                Receive notifications via Telegram, WhatsApp, or
                                Discord whenever new slots become available.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded shadow text-center transition-transform duration-300 hover:scale-105">
                            <div className="text-blue-500 mb-4 text-3xl">
                                🌍
                            </div>
                            <h3 className="font-bold text-lg">
                                Global Coverage
                            </h3>
                            <p className="text-gray-700 mt-2">
                                From Canada to the UK to the UAE, we monitor
                                multiple countries— with more on the way.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Supported Regions */}
            <section id="regions" className="py-16 text-center px-6 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">
                        📍 Supported Regions
                    </h2>
                    <ul
                        className="space-y-2 text-gray-800 text-lg mb-4"
                        style={{ textAlign: 'left' }}
                    >
                        <li>🇬🇧 UK – London, Belfast</li>
                        <li>🇦🇪 UAE – Dubai, Abu Dhabi</li>
                        <li>
                            🇨🇦 Canada – Toronto, Vancouver, Calgary, Montreal,
                            Ottawa, Halifax, Quebec City
                        </li>
                    </ul>
                    <p className="text-sm text-gray-500">
                        Stay tuned as we expand our coverage to more locations
                        based on your needs.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-16  bg-white px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        🧠 FAQ
                    </h2>
                    <div className="space-y-6 text-left text-gray-700">
                        <div>
                            <p className="font-semibold">
                                ❓ What visa types are supported?
                            </p>
                            <p>👉 Currently only B1/B2 (tourist/business).</p>
                        </div>
                        <div>
                            <p className="font-semibold">
                                ❓ How often is it updated?
                            </p>
                            <p>
                                👉 The system runs 24/7, checking constantly for
                                new availability.
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold">❓ Is it free?</p>
                            <p>
                                👉 Yes, completely free to join and receive
                                alerts.
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold">
                                ❓ How does US Visa Radar ensure accurate
                                alerts?
                            </p>
                            <p>
                                👉 We rely on continuous monitoring of official
                                visa appointment systems to deliver timely and
                                reliable notifications.
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold">
                                ❓ Why do I not see the appointment date after
                                logging in even though I received an alert?
                            </p>
                            <p>
                                👉 Due to fierce competition in popular cities,
                                sometimes newly available dates are often
                                snatched within seconds. We recommend refreshing
                                the page immediately and acting quickly.
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold">
                                ❓ How are new appointment slots released?
                            </p>
                            <p>
                                👉 At every exact 5‑minute mark (e.g. 08:00,
                                08:05, 08:10, etc.), the system may release
                                appointment slots that were previously cancelled
                                by others. Additionally, during weekday working
                                hours, staff may manually release extra slots.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-6 text-center bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Join our community to stay informed about the latest
                        U.S. visa appointment availabilities and connect with
                        fellow applicants. In our discussion groups, you can
                        share experiences, ask questions, and exchange tips to
                        navigate the U.S. visa process more smoothly. It's
                        quick, easy, and completely free.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="https://t.me/us_visa_radar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-6 py-2 rounded"
                        >
                            📢 Telegram
                        </a>
                        <a
                            href="https://chat.whatsapp.com/Fd02R8mqbaK72JvtUHSX5L"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 text-white px-6 py-2 rounded"
                        >
                            🟢 WhatsApp
                        </a>
                        <a
                            href="https://discord.gg/VPRQaKRaEs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-purple-600 text-white px-6 py-2 rounded"
                        >
                            💬 Discord
                        </a>
                    </div>
                </div>
            </section>
            {/* About Section */}
            <section id="about" className="py-16 bg-white text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">
                        🔧 About the Project
                    </h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Crafted with passion by a dedicated independent
                        developer, US Visa Radar began as a personal project and
                        has evolved into a robust community resource. Our
                        commitment is to deliver timely, reliable updates that
                        empower you in your visa application journey.
                    </p>
                    <p className="text-sm text-gray-500">
                        Last updated: March 23, 2025 · Contact:{' '}
                        <a
                            href="https://t.me/us_visa_radar"
                            className="text-blue-600"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @us_visa_radar
                        </a>
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white py-4 text-center text-sm text-gray-500">
                <p>
                    © {new Date().getFullYear()} US Visa Radar. All rights
                    reserved.
                </p>
            </footer>
        </main>
    );
}
