import { Search, MapPin, Calendar, ChevronRight, ChevronLeft, User, Phone, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Promotional Banner */}
      <div className="bg-[#C9B596] py-2 text-center text-sm">
        <p className="text-[#1C1D21]">
          Prime Days | Sitewide deals
          <br />
          <strong>Earn up to $500. Ends October 14.</strong>{" "}
          <a href="#" className="underline hover:text-white">See more</a>
        </p>
      </div>

      {/* Header */}
      <header className="bg-[#1C1D21] text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <nav className="flex items-center gap-8">
              <a href="#" className="text-sm hover:text-gray-300 transition-colors">Destinations</a>
              <a href="#" className="text-sm hover:text-gray-300 transition-colors">Trip Style</a>
              <a href="#" className="text-sm hover:text-gray-300 transition-colors">Deals</a>
            </nav>

            <div className="text-2xl font-bold tracking-wider lowercase">exoticca</div>

            <div className="flex items-center gap-6">
              <a href="tel:1-888-488-0592" className="text-sm hover:text-gray-300 transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Book now: 1-888-488-0592
              </a>
              <button className="hover:text-gray-300 transition-colors">
                <HelpCircle className="w-5 h-5" />
              </button>
              <button className="hover:text-gray-300 transition-colors">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white mb-8">
            <p className="text-sm mb-2">Final call for up to $500</p>
            <h1 className="text-5xl font-bold mb-2">Prime Days</h1>
            <p className="text-xl">Go beyond | Sitewide deals</p>
            <Button className="mt-4 bg-[#1C1D21] hover:bg-[#2C2D31]">Travel on us</Button>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-full shadow-lg p-2 flex items-center gap-2 max-w-2xl">
            <div className="flex items-center gap-2 px-4 flex-1">
              <MapPin className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Departure city"
                className="outline-none text-sm w-full text-black"
              />
            </div>
            <div className="border-l h-8" />
            <div className="flex items-center gap-2 px-4 flex-1">
              <MapPin className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="To"
                className="outline-none text-sm w-full text-black"
              />
            </div>
            <div className="border-l h-8" />
            <div className="flex items-center gap-2 px-4 flex-1">
              <Calendar className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Departure date"
                className="outline-none text-sm w-full text-black"
              />
            </div>
            <Button className="rounded-full bg-[#1C1D21] hover:bg-[#2C2D31] w-12 h-12">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Flash Sale Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Prime Days Flash Sale. <span className="font-normal text-gray-600">Top deals at 50% off</span></h2>
          <p className="text-blue-600 font-semibold mb-8">5 days left</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Southeast Asian Odyssey",
                location: "Vietnam, Cambodia & Thailand in 19 Days",
                image: "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg",
                price: "$2,299",
                oldPrice: "$4,599",
                badge: "Flash Sale",
                discount: "-50%"
              },
              {
                title: "Coastal Cities & Cultural Treasures",
                location: "Portugal in 9 Days",
                image: "https://thumbs.dreamstime.com/b/view-city-saint-tropez-provence-cote-d-azur-popular-destination-travel-europe-high-quality-photo-214580274.jpg",
                price: "$1,299",
                oldPrice: "$2,599",
                badge: "Flash Sale",
                discount: "-50%"
              },
              {
                title: "China's Icons & the Avatar Mountains",
                location: "China in 12 Days",
                image: "https://c8.alamy.com/comp/2JJPATK/meteora-near-town-kalambaka-in-greece-famous-rock-formation-in-central-greece-sightseeing-and-travel-destinations-concept-high-quality-photo-2JJPATK.jpg",
                price: "$1,999",
                oldPrice: "$3,999",
                badge: "Flash Sale",
                discount: "-50%"
              }
            ].map((tour, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                <div className="relative h-64 overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-4 left-4 bg-[#1C1D21] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {tour.badge}
                  </span>
                  {tour.discount && (
                    <span className="absolute bottom-4 right-4 bg-white text-[#1C1D21] px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {tour.discount}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gray-700 transition-colors">{tour.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tour.location}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">From {tour.price}</span>
                    <span className="text-gray-400 line-through text-sm">{tour.oldPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold hover:bg-[#1C1D21] hover:text-white border-2 transition-all">See all trips</Button>
          </div>
        </div>
      </section>

      {/* Why Book Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why thousands book with Exoticca</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">Unbeatable fares as standard. We're so confident you won't find a better deal elsewhere we'll match it within 24 hours if you do.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Extraordinary experiences</h3>
              <p className="text-gray-600">Our travel crafters work closely with local partners to design perfectly-balanced itineraries full of authentic experiences for small groups.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Everything taken care of</h3>
              <p className="text-gray-600">Every detail of your trip planned and booked by experts, plus 24/7 support and updates via our unique Traveler's App.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Best sellers. <span className="font-normal text-gray-600">Our travelers' favorites</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "Sacred Land of the Incas",
                location: "Peru in 9 Days",
                image: "https://c8.alamy.com/comp/2JJPATK/meteora-near-town-kalambaka-in-greece-famous-rock-formation-in-central-greece-sightseeing-and-travel-destinations-concept-high-quality-photo-2JJPATK.jpg",
                price: "$1,099",
                oldPrice: "$2,449",
                badge: "Best Seller",
                discount: "-55%"
              },
              {
                title: "Coastal Cities & Cultural Treasures",
                location: "Portugal in 9 Days",
                image: "https://thumbs.dreamstime.com/b/view-city-saint-tropez-provence-cote-d-azur-popular-destination-travel-europe-high-quality-photo-214580274.jpg",
                price: "$1,299",
                oldPrice: "$2,599",
                badge: "Flash Sale",
                discount: "-50%"
              },
              {
                title: "Escorted Eternal Cities",
                location: "Italy in 9 Days",
                image: "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg",
                price: "$1,699",
                oldPrice: "$3,399",
                badge: "Flash Sale",
                discount: "-50%"
              }
            ].map((tour, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 bg-[#1C1D21] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {tour.badge}
                  </span>
                  <span className="absolute bottom-4 right-4 bg-white text-[#1C1D21] px-3 py-1 rounded-full text-xs font-bold">
                    {tour.discount}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tour.location}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">From {tour.price}</span>
                    <span className="text-gray-400 line-through text-sm">{tour.oldPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to next Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Where to next?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Italy", trips: "13 Trips", image: "https://thumbs.dreamstime.com/b/view-city-saint-tropez-provence-cote-d-azur-popular-destination-travel-europe-high-quality-photo-214580274.jpg" },
              { name: "Greece", trips: "9 Trips", image: "https://c8.alamy.com/comp/2JJPATK/meteora-near-town-kalambaka-in-greece-famous-rock-formation-in-central-greece-sightseeing-and-travel-destinations-concept-high-quality-photo-2JJPATK.jpg" },
              { name: "Portugal", trips: "11 Trips", image: "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg" },
              { name: "Japan", trips: "8 Trips", image: "https://thumbs.dreamstime.com/b/view-city-saint-tropez-provence-cote-d-azur-popular-destination-travel-europe-high-quality-photo-214580274.jpg" },
              { name: "Peru", trips: "13 Trips", image: "https://c8.alamy.com/comp/2JJPATK/meteora-near-town-kalambaka-in-greece-famous-rock-formation-in-central-greece-sightseeing-and-travel-destinations-concept-high-quality-photo-2JJPATK.jpg" }
            ].map((dest, i) => (
              <div key={i} className="relative h-40 rounded-xl overflow-hidden group cursor-pointer">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{dest.name}</h3>
                  <p className="text-sm">{dest.trips}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
            {[
              { name: "South Africa", trips: "11 Trips", image: "https://c8.alamy.com/comp/2JJPATK/meteora-near-town-kalambaka-in-greece-famous-rock-formation-in-central-greece-sightseeing-and-travel-destinations-concept-high-quality-photo-2JJPATK.jpg" },
              { name: "Africa", trips: "49 Trips", image: "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg" },
              { name: "Europe", trips: "90 Trips", image: "https://thumbs.dreamstime.com/b/view-city-saint-tropez-provence-cote-d-azur-popular-destination-travel-europe-high-quality-photo-214580274.jpg" },
              { name: "South America", trips: "42 Trips", image: "https://c8.alamy.com/comp/2JJPATK/meteora-near-town-kalambaka-in-greece-famous-rock-formation-in-central-greece-sightseeing-and-travel-destinations-concept-high-quality-photo-2JJPATK.jpg" },
              { name: "Southeast Asia", trips: "15 Trips", image: "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg" }
            ].map((dest, i) => (
              <div key={i} className="relative h-40 rounded-xl overflow-hidden group cursor-pointer">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{dest.name}</h3>
                  <p className="text-sm">{dest.trips}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Video Section */}
      <section className="py-20 bg-[#1C1D21] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-2xl font-bold mb-6">exoticca</div>
              <h2 className="text-4xl font-bold mb-4">Extraordinary vacation packages to exotic destinations</h2>
              <p className="text-gray-300 mb-8">Your affordable online tour operator. Our expert Travel Crafters design extraordinary vacation packages at never-before-seen prices to give you a truly unforgettable experience.</p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold mb-2">At the forefront</h3>
                  <p className="text-sm text-gray-400">Our innovative technology and recognized travel expertise allow us to offer incredible itineraries at the most competitive prices- all at the click of a button.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">At your side</h3>
                  <p className="text-sm text-gray-400">Stay on top of your itinerary with real-time updates and travel with total peace of mind, thanks to our Traveler's App. It's your direct line to our in-trip care team who are ready to support you 24/7.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">At your fingertips</h3>
                  <p className="text-sm text-gray-400">The farthest corners of the earth within reach. We've fostered long-standing partnerships with trusted local providers to open doors to places you never knew existed.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">At ease</h3>
                  <p className="text-sm text-gray-400">Enjoy life-changing experiences with total peace of mind. We adhere to ATOL's code of ethics and offer cancellation rates that customers consistently rate us with an Excellent score.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-[#1C1D21] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Section */}
      <section className="py-16" style={{backgroundImage: "url('https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="bg-gradient-to-r from-orange-200/90 to-transparent py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4 text-[#1C1D21]">Give $100 to a friend</h2>
              <p className="text-[#1C1D21] mb-6">and get $100 off your next trip</p>
              <Button className="bg-[#1C1D21] hover:bg-[#2C2D31] rounded-full px-6">Refer a friend now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Country Tours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Multi-country tours</h2>
          <p className="text-gray-600 mb-8">Explore our multi-country tours. Let yourself be surprised by our extended version top sellers.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cape, Kruger & Victoria Falls",
                location: "South Africa & Zimbabwe in 14 Days",
                image: "https://c8.alamy.com/comp/2JJPATK/meteora-near-town-kalambaka-in-greece-famous-rock-formation-in-central-greece-sightseeing-and-travel-destinations-concept-high-quality-photo-2JJPATK.jpg",
                price: "$3,399",
                oldPrice: "$7,559",
                badge: "Best Seller",
                discount: "-55%"
              },
              {
                title: "Latin Capitals & Iguazu Falls",
                location: "Argentina & Brazil in 11 Days",
                image: "https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg",
                price: "$1,949",
                oldPrice: "$4,339",
                badge: "Best Seller",
                discount: "-55%"
              },
              {
                title: "Essence of Patagonia & Capitals",
                location: "Argentina & Chile",
                image: "https://thumbs.dreamstime.com/b/view-city-saint-tropez-provence-cote-d-azur-popular-destination-travel-europe-high-quality-photo-214580274.jpg",
                price: "$2,849",
                oldPrice: "$6,189",
                badge: "",
                discount: ""
              }
            ].map((tour, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                  {tour.badge && (
                    <span className="absolute top-4 left-4 bg-[#1C1D21] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {tour.badge}
                    </span>
                  )}
                  {tour.discount && (
                    <span className="absolute bottom-4 right-4 bg-white text-[#1C1D21] px-3 py-1 rounded-full text-xs font-bold">
                      {tour.discount}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tour.location}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">From {tour.price}</span>
                    {tour.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">{tour.oldPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter and join Exoticca GO</h2>
          <div className="flex gap-2 mb-4">
            <p className="text-sm text-gray-600">✓ The best travel deals</p>
            <p className="text-sm text-gray-600">✓ Exclusive promotions</p>
            <p className="text-sm text-gray-600">✓ Expert travel tips</p>
          </div>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button className="bg-[#1C1D21] hover:bg-[#2C2D31]">Subscribe</Button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            I have read and accept the Privacy policy, and agree to join Exoticca GO for free
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1D21] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Exoticca reviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Join our team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel Advisor Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refer a friend program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Save with your group</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Affiliate program</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Customer support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Chat with us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center & FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook Messenger</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Policies</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">General conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Select your country</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  🇨🇦 Canada
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  🇫🇷 France
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  🇲🇽 Mexico
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  🇺🇸 United States
                </a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  🇬🇧 United Kingdom
                </a></li>
              </ul>
            </div>
          </div>

          {/* Social and Payment Icons */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <svg className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <svg className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </div>

              <div className="flex gap-4 items-center">
                <div className="text-xs text-gray-400">We accept</div>
                <div className="flex gap-2">
                  <div className="bg-white rounded px-2 py-1 text-xs font-bold">VISA</div>
                  <div className="bg-white rounded px-2 py-1 text-xs font-bold">MC</div>
                  <div className="bg-white rounded px-2 py-1 text-xs font-bold">AMEX</div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-xs text-gray-500">
              <p className="mb-2">All Rights Reserved</p>
              <p>80 Southwest 8th Street Brickell Bayview, Miami FL 33130, United States</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
