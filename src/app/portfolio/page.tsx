import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Portfolio() {
    return (
        <div className="portfolio py-12" id="portfolio">
            <div className="container mx-auto px-4">
                <h1 className="sub-title text-2xl md:text-3xl font-bold text-center mb-8">
                    My Work
                </h1>
                <div className="work-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                    {/* Weather App */}
                    <div className="work relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                        <img
                            src="Images/weatherapp (1).jpg"
                            alt="Weather App"
                            className="w-full rounded-lg"
                        />
                        <div className="layer absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 rounded-lg transition-all duration-300 opacity-0 hover:opacity-100">
                            <h3 className="text-white font-semibold mb-2">Weather App</h3>
                            <p className="text-white text-sm text-center mb-4 max-h-[60px] overflow-hidden">
                                Stay updated with the latest weather information, so you can
                                plan your day with confidence.
                            </p>
                            <a
                                href="https://weatherappsabeh.netlify.app/"
                                className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-green-500"
                            >
                                <FaExternalLinkAlt className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Quiz App */}
                    <div className="work relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                        <img
                            src="Images/quiz-app.jpeg"
                            alt="Quiz App"
                            className="w-full rounded-lg"
                        />
                        <div className="layer absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 rounded-lg transition-all duration-300 opacity-0 hover:opacity-100">
                            <h3 className="text-white font-semibold mb-2">Quiz App</h3>
                            <p className="text-white text-sm text-center mb-4 max-h-[60px] overflow-hidden">
                                Test your knowledge with fun quizzes and challenges, and
                                challenge your friends to see who's the smartest.
                            </p>
                            <a
                                href="https://quizappsabeh.netlify.app/"
                                className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-green-500"
                            >
                                <FaExternalLinkAlt className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Currency Converter App */}
                    <div className="work relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                        <img
                            src="Images/currencyconvo.jpg"
                            alt="Currency Converter App"
                            className="w-full rounded-lg"
                        />
                        <div className="layer absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 rounded-lg transition-all duration-300 opacity-0 hover:opacity-100">
                            <h3 className="text-white font-semibold mb-2">Currency Converter App</h3>
                            <p className="text-white text-sm text-center mb-4 max-h-[60px] overflow-hidden">
                                Easily convert currencies with this user-friendly app, ensuring
                                you get the best rates for your international transactions.
                            </p>
                            <a
                                href="https://exchangeratebysabeh.netlify.app/"
                                className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-green-500"
                            >
                                <FaExternalLinkAlt className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
