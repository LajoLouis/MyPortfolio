import React from 'react'

function Contact() {
  return (
    <div className='min-h-screen bg-white'>
        <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="bg-black text-white p-8 rounded-md md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-yellow-600">Contact information</h2>
            <p className="mb-6">If you have any questions, feel free to get in touch with us.</p>
            <ul className="space-y-4">
              <li>📞 07014673350</li>
              <li>📧 ezeokefranklin@gmail.com</li>
              <li>📍 38 Ilado Road Lagos state, Nigeria.</li>
              <li>📅 Monday - Friday</li>
              <li>⏰ 9:00 AM - 6:00 PM</li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-yellow-400">📘</a>
              <a href="#" className="hover:text-yellow-400">🔗</a>
              <a href="#" className="hover:text-yellow-400">📸</a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="md:w-1/2 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First name"
                className="border p-3 w-full rounded"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border p-3 w-full rounded"
              />
            </div>
            <input
              type="email"
              placeholder="email@example.com"
              className="border p-3 w-full rounded"
            />
            <input
              type="tel"
              placeholder="+1 (555) 000 - 0000"
              className="border p-3 w-full rounded"
            />
            <textarea
              placeholder="Your message"
              className="border p-3 w-full rounded h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-600 text-white px-6 py-3 rounded hover:bg-red-700"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact