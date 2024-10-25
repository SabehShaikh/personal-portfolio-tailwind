import { FaCode, FaCrop, FaLaptop } from 'react-icons/fa';

export default function Services() {
    return (
        <div className="services py-12" id="services">
            <div className="container mx-auto px-4">
                <h1 className="sub-title text-lg md:text-xl font-bold text-center mb-8">My Services</h1>
                <div className="services-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

                    {/* Web Design Service */}
                    <div className="service-card bg-gray-800 text-white p-6 rounded-lg transition-transform transform hover:bg-green-400 hover:text-black hover:-translate-y-2"> 
                        <FaCode className="text-5xl mb-4" />
                        <h2 className="text-base md:text-lg font-semibold mb-3">Web Design</h2> 
                        <p className="text-xs md:text-sm">
                            Creating visually stunning and functional websites is my passion. I specialize in crafting engaging web
                            designs that captivate users and provide an exceptional online experience.
                        </p>
                    </div>

                    {/* UI/UX Design Service */}
                    <div className="service-card bg-gray-800 text-white p-6 rounded-lg transition-transform transform hover:bg-green-400 hover:text-black hover:-translate-y-2">
                        <FaCrop className="text-5xl mb-4" /> 
                        <h2 className="text-base md:text-lg font-semibold mb-3">UI/UX Design</h2> {/* Increased margin */}
                        <p className="text-xs md:text-sm">
                            User-centered design is at the heart of my work. I focus on optimizing user experiences through intuitive
                            interfaces, ensuring users can easily navigate and enjoy your website.
                        </p>
                    </div>

                    {/* Responsive Web Design Service */}
                    <div className="service-card bg-gray-800 text-white p-6 rounded-lg transition-transform transform hover:bg-green-400 hover:text-black hover:-translate-y-2"> 
                        <FaLaptop className="text-5xl mb-4" /> 
                        <h2 className="text-base md:text-lg font-semibold mb-3">Responsive Web Design</h2> 
                        <p className="text-xs md:text-sm">
                            I specialize in creating websites that adapt seamlessly to various devices. Whether on a desktop, tablet, or
                            smartphone, your site will provide a consistent and user-friendly experience.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
