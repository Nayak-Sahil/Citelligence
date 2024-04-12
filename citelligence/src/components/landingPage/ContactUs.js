import { faAt, faEarth, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactUs = () => {
    return (
        <section id="contact" className="bg-white">
            <div className="container grid gap-8 px-6 py-12 mx-auto">
                <div>
                    <p className="text-xl font-medium text-blue-500">Contact us</p>

                    <h1 className="mt-2 text-xl font-semibold text-gray-800 md:text-3xl">We’d love to hear from you</h1>

                    <p className="mt-3 text-gray-500">Our friendly team is always here to chat.</p>
                </div>

                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 ">
                    <div className="p-4 rounded-lg bg-blue-50 md:p-6">
                        <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80">
                            <FontAwesomeIcon icon={faAt} />
                        </span>

                        <h2 className="mt-4 text-base font-medium text-gray-800">Chat with us</h2>
                        <p className="mt-2 text-sm text-gray-500">Speak to our friendly team.</p>
                        <p className="mt-2 text-sm text-blue-500">unifoders@gmail.com</p>
                    </div>

                    <div className="p-4 rounded-lg bg-blue-50 md:p-6">
                        <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80">
                            <FontAwesomeIcon icon={faPhone} />
                        </span>

                        <h2 className="mt-4 text-base font-medium text-gray-800">Call to Support</h2>
                        <p className="mt-2 text-sm text-gray-500">We’re here to help. Mon-Fri from 8am to 5pm</p>
                        <p className="mt-2 text-sm text-blue-500">+91 6356185625</p>
                    </div>

                    <div className="p-4 rounded-lg bg-blue-50 md:p-6">
                        <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </span>

                        <h2 className="mt-4 text-base font-medium text-gray-800">Visit us</h2>
                        <p className="mt-2 text-sm text-gray-500">Visit our office HQ..</p>
                        <p className="mt-2 text-sm text-blue-500">100 Smith Street Collingwood VIC 3066 AU</p>
                    </div>

                    <div className="p-4 rounded-lg bg-blue-50 md:p-6">
                        <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80">
                            <FontAwesomeIcon icon={faEarth} />
                        </span>

                        <h2 className="mt-4 text-base font-medium text-gray-800">Get in Touch</h2>
                        <p className="mt-2 text-sm text-gray-500">Message Us whatever you missing in this website.</p>
                        <p className="mt-2 text-sm text-blue-500">Send Message (redirect to get in touch contact form website)</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;
