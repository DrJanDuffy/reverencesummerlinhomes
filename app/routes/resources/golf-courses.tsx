import type { Route } from "./+types/resources";
import { config } from "~/lib/config";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  DollarSign,
  Award,
  Users,
  Star,
  CheckCircle,
  Flag,
  Mountain,
  TreePine
} from "lucide-react";

export function links() {
  return [
    { rel: "canonical", href: `${config.seo.siteUrl}/resources/golf-courses` },
  ];
}

export function meta() {
  return [
    { title: "Golf Courses Near Reverence Summerlin | Las Vegas Golf Guide | Dr. Jan Duffy" },
    { name: "description", content: "Discover premier golf courses near Reverence Summerlin, Las Vegas. Comprehensive guide to golf courses accessible from Reverence Summerlin, including public and private courses, memberships, and golf communities." },
    { name: "keywords", content: "golf courses Reverence Summerlin, Reverence Summerlin golf, Las Vegas golf courses, golf near Reverence Summerlin, Summerlin golf, Monument at Reverence golf" },
    { property: "og:title", content: "Golf Courses Near Reverence Summerlin | Las Vegas Golf Guide" },
    { property: "og:description", content: "Discover premier golf courses near Reverence Summerlin, Las Vegas. Comprehensive guide to golf courses accessible from Reverence Summerlin communities." },
    { property: "og:url", content: `${config.seo.siteUrl}/resources/golf-courses` },
  ];
}

export default function GolfCourses() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Reverence Summerlin Living Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Golf Courses Near Reverence Summerlin
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover premier golf courses accessible from Reverence Summerlin, Las Vegas. This comprehensive guide covers world-class golf facilities near Monument at Reverence and throughout the Summerlin area, perfect for Reverence Summerlin residents who love the game.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Reverence Summerlin Is Perfect for Golf Enthusiasts</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-gray-700 mb-4">
              Reverence Summerlin's location places residents within easy access to some of Las Vegas's finest golf courses. Whether you're living in Monument at Reverence or other Reverence Summerlin communities, you'll find exceptional golf experiences just minutes away. The Reverence Summerlin area is renowned for its proximity to championship courses, public facilities, and exclusive private clubs that offer world-class golf experiences year-round.
            </p>
            <p className="text-gray-700 mb-4">
              For Reverence Summerlin homeowners, golf isn't just a hobby—it's a lifestyle. The area's desert climate provides ideal conditions for golf almost year-round, with over 300 days of sunshine annually. This makes Reverence Summerlin particularly appealing to golf enthusiasts who want to enjoy their passion without seasonal interruptions that affect many other parts of the country.
            </p>
            <p className="text-gray-700">
              The combination of premier golf courses near Reverence Summerlin, excellent weather, and the luxury lifestyle that defines the Reverence Summerlin community creates an unbeatable environment for golf enthusiasts. Many Reverence Summerlin residents choose the area specifically for its golf amenities, and properties near golf courses often command premium values in the Reverence Summerlin real estate market.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Golf as a Lifestyle in Reverence Summerlin</h3>
            <p className="text-gray-700 mb-4">
              Living in Reverence Summerlin means joining a community where golf culture is deeply integrated into daily life. From Monument at Reverence to established Summerlin neighborhoods, residents enjoy:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Access to multiple championship courses within minutes of Reverence Summerlin homes</li>
              <li>Golf communities with private club memberships included or available</li>
              <li>Social networks centered around golf activities and tournaments</li>
              <li>Professional instruction and practice facilities convenient to Reverence Summerlin</li>
              <li>Year-round playing conditions perfect for serious golfers and casual players alike</li>
              <li>Scenic mountain and desert views enhancing the golf experience near Reverence Summerlin</li>
            </ul>
            <p className="text-gray-700">
              This golf-focused lifestyle makes Reverence Summerlin particularly attractive to retirees, executives, and anyone seeking an active outdoor lifestyle combined with luxury living. The golf amenities near Reverence Summerlin contribute significantly to property values and quality of life for residents.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Premier Golf Courses Accessible from Reverence Summerlin</h2>
          
          <div className="space-y-8 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Flag className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">TPC Las Vegas</CardTitle>
                      <Badge variant="secondary" className="mt-2">Championship Course</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Course Overview</h3>
                    <p className="text-gray-700 mb-4">
                      TPC Las Vegas, located just minutes from Reverence Summerlin, is a championship golf course designed by Bobby Weed and Raymond Floyd. This prestigious facility offers Reverence Summerlin residents access to a PGA Tour-quality course featuring dramatic elevation changes, stunning desert landscapes, and meticulously maintained fairways and greens.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The course is particularly popular among Reverence Summerlin golfers who appreciate challenging layouts and professional-level course conditions. Its proximity to Monument at Reverence and other Reverence Summerlin communities makes it a convenient choice for regular play.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Amenities & Features</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                      <li>18-hole championship layout with multiple tee options</li>
                      <li>Full-service pro shop with equipment and apparel</li>
                      <li>Professional instruction and club fitting services</li>
                      <li>Practice facilities including driving range and putting greens</li>
                      <li>Dining options with scenic course views</li>
                      <li>Event facilities for tournaments and corporate outings</li>
                    </ul>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>Approx. 10 minutes from Reverence Summerlin</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Mountain className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Red Rock Country Club</CardTitle>
                      <Badge variant="secondary" className="mt-2">Private Club</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Club Overview</h3>
                    <p className="text-gray-700 mb-4">
                      Red Rock Country Club, one of the most prestigious private clubs near Reverence Summerlin, offers two championship courses designed by Arnold Palmer. This exclusive facility is highly sought after by Reverence Summerlin residents who desire private club amenities and member-only access to exceptional golf experiences.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The club's location in the heart of Summerlin makes it extremely convenient for Reverence Summerlin homeowners, particularly those in Monument at Reverence and surrounding communities. Membership at Red Rock Country Club represents the pinnacle of golf lifestyle near Reverence Summerlin.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Membership & Access</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                      <li>Two 18-hole championship courses with distinct challenges</li>
                      <li>Exclusive clubhouse with fine dining and social spaces</li>
                      <li>Tennis courts, fitness center, and swimming pool</li>
                      <li>Member events, tournaments, and social activities</li>
                      <li>Golf instruction and junior programs</li>
                      <li>Member guest privileges and reciprocal agreements</li>
                    </ul>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>Located in The Ridges, adjacent to Reverence Summerlin</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <TreePine className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Angel Park Golf Club</CardTitle>
                      <Badge variant="secondary" className="mt-2">Public Access</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <Star className="w-5 h-5 text-gray-300" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Facility Overview</h3>
                    <p className="text-gray-700 mb-4">
                      Angel Park Golf Club offers Reverence Summerlin residents access to multiple course options, including two 18-hole championship courses and a unique 12-hole Cloud 9 short course. This public-access facility provides excellent value and variety for Reverence Summerlin golfers seeking quality play without private club membership requirements.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The club's location in Summerlin makes it extremely convenient for Reverence Summerlin residents, offering flexible tee time options and reasonable rates. Many Reverence Summerlin homeowners frequent Angel Park for casual rounds, practice sessions, and social golf outings.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Course Options & Features</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                      <li>Mountain Course: Challenging 18-hole layout with elevation changes</li>
                      <li>Palm Course: Player-friendly 18-hole design perfect for all skill levels</li>
                      <li>Cloud 9 Short Course: Unique 12-hole par-3 course with replicas of famous holes</li>
                      <li>Lighted driving range for evening practice sessions</li>
                      <li>Full-service restaurant and bar with golf course views</li>
                      <li>Golf instruction programs for adults and juniors</li>
                    </ul>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>5-10 minutes from Reverence Summerlin communities</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Golf Courses Near Reverence Summerlin</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Bear's Best Las Vegas</CardTitle>
                <Badge variant="outline" className="mt-2">Public/Semi-Private</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Bear's Best Las Vegas features replica holes from Jack Nicklaus's greatest courses worldwide. This unique concept course is accessible from Reverence Summerlin and offers an exceptional golf experience showcasing championship-caliber holes in one memorable round.
                </p>
                <p className="text-gray-600 text-sm">
                  Distance from Reverence Summerlin: Approximately 15 minutes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Paiute Golf Resort</CardTitle>
                <Badge variant="outline" className="mt-2">Public Resort</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Paiute Golf Resort offers three Pete Dye-designed championship courses in a stunning desert setting. While slightly further from Reverence Summerlin, these courses provide world-class golf experiences and are popular destinations for Reverence Summerlin residents seeking championship golf.
                </p>
                <p className="text-gray-600 text-sm">
                  Distance from Reverence Summerlin: Approximately 20-25 minutes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Las Vegas National Golf Club</CardTitle>
                <Badge variant="outline" className="mt-2">Public Course</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Las Vegas National offers a classic, tree-lined course layout contrasting with desert courses. This public facility provides Reverence Summerlin golfers with traditional golf architecture and excellent value, making it popular for regular play.
                </p>
                <p className="text-gray-600 text-sm">
                  Distance from Reverence Summerlin: Approximately 15 minutes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Royal Links Golf Club</CardTitle>
                <Badge variant="outline" className="mt-2">Public Course</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Royal Links features replica holes from famous British Open venues, providing a links-style experience accessible from Reverence Summerlin. This unique course appeals to Reverence Summerlin golfers seeking variety and challenge.
                </p>
                <p className="text-gray-600 text-sm">
                  Distance from Reverence Summerlin: Approximately 20 minutes
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Golf Course Living in Reverence Summerlin</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Properties Near Golf Courses</h3>
            <p className="text-gray-700 mb-4">
              Many Reverence Summerlin properties offer golf course views or proximity to premier courses, adding significant value and lifestyle benefits. Homes in Monument at Reverence and other Reverence Summerlin communities often feature golf course access as a key selling point. When considering Reverence Summerlin real estate, proximity to golf courses can be a significant factor for golf enthusiasts.
            </p>
            <p className="text-gray-700 mb-4">
              Reverence Summerlin properties with golf course views or access typically command premium prices in the market. These homes offer not just beautiful scenery but also convenient access to world-class golf facilities. For Reverence Summerlin homeowners who are serious golfers, living near a golf course represents the ultimate luxury lifestyle combination.
            </p>
            <p className="text-gray-700">
              When searching for Reverence Summerlin homes, consider your golf preferences. Some Reverence Summerlin communities offer private club memberships, while others provide convenient access to public and semi-private courses. As your Reverence Summerlin real estate expert, I can help you find properties that match your golf lifestyle preferences.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Golf Course Membership Benefits for Reverence Summerlin Residents</h3>
            <p className="text-gray-700 mb-4">
              Reverence Summerlin residents have access to various membership options at nearby golf courses, each offering unique benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Private club memberships providing exclusive access to championship courses near Reverence Summerlin</li>
              <li>Social memberships offering clubhouse access and events for Reverence Summerlin residents</li>
              <li>Associate memberships with preferred tee times and reduced fees for Reverence Summerlin golfers</li>
              <li>Corporate memberships available to Reverence Summerlin business owners and executives</li>
              <li>Junior programs encouraging golf participation among Reverence Summerlin families</li>
              <li>Reciprocal agreements extending golf access beyond local Reverence Summerlin area courses</li>
            </ul>
            <p className="text-gray-700">
              Understanding membership options is important when considering Reverence Summerlin real estate, as golf amenities significantly impact property values and lifestyle. I can help Reverence Summerlin homebuyers understand membership requirements and benefits when evaluating properties in golf-oriented communities.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Golf Events and Tournaments Near Reverence Summerlin</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Annual Golf Events Accessible from Reverence Summerlin</h3>
            <p className="text-gray-700 mb-4">
              Living in Reverence Summerlin provides access to numerous golf events and tournaments throughout the year. These events showcase the vibrant golf culture surrounding Reverence Summerlin communities and provide opportunities for residents to participate in or spectate professional and amateur golf competitions.
            </p>
            <p className="text-gray-700 mb-4">
              Major golf events near Reverence Summerlin include professional tournaments, charity events, member tournaments, and amateur competitions. These events contribute to the golf community atmosphere that makes Reverence Summerlin particularly attractive to golf enthusiasts. Many Reverence Summerlin residents participate in local tournaments and enjoy watching professional events at nearby courses.
            </p>
            <p className="text-gray-700">
              The golf event calendar near Reverence Summerlin offers year-round activities for golfers of all skill levels. From high-profile professional tournaments to casual member events, Reverence Summerlin's golf scene provides ample opportunities for engagement and enjoyment. This active golf community enhances the lifestyle appeal of Reverence Summerlin for serious golfers and casual players alike.
            </p>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Finding Your Perfect Golf Home in Reverence Summerlin</h2>
          <p className="text-gray-700 mb-6">
            If golf is central to your lifestyle, Reverence Summerlin offers exceptional opportunities to live near world-class courses. Whether you're interested in Monument at Reverence, other Summerlin communities, or properties with direct golf course access, I can help you find Reverence Summerlin real estate that matches your golf lifestyle preferences.
          </p>
          <p className="text-gray-700 mb-6">
            As your Reverence Summerlin real estate expert, I understand how golf amenities impact property values and lifestyle. I'll help you evaluate Reverence Summerlin homes based on golf course proximity, views, membership options, and overall golf community atmosphere. Finding the right Reverence Summerlin property for your golf lifestyle is about matching your preferences with available opportunities.
          </p>
          <p className="text-gray-700 mb-8">
            Contact me today to discuss your Reverence Summerlin home search and learn more about golf-oriented properties in the area. Whether you're seeking a home with golf course views, private club membership, or convenient access to public courses, I'll help you navigate the Reverence Summerlin real estate market to find your perfect golf home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Contact About Reverence Summerlin Homes
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/buying">
                <Flag className="w-5 h-5 mr-2" />
                Explore Reverence Summerlin Properties
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
