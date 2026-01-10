import type { Route } from './+types/buying-new-home'
import { config } from '~/lib/config'
import { Link } from 'react-router'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'
import { RealScoutAdvancedSearch } from '~/components/RealScoutAdvancedSearch'
import { RealScoutListingsWidget } from '~/components/RealScoutListingsWidget'
import {
  Home,
  TrendingUp,
  Shield,
  Users,
  MapPin,
  CheckCircle,
  Award,
  Hammer,
  Zap,
  Leaf,
  Star,
  Phone,
  Calendar,
  FileText,
} from 'lucide-react'

export function links() {
  return [{ rel: 'canonical', href: `${config.seo.siteUrl}/buying/new-home` }]
}

export function meta() {
  return [
    {
      title:
        'New Home Construction in Reverence Summerlin | Monument at Reverence | Dr. Jan Duffy',
    },
    {
      name: 'description',
      content:
        'Explore new home construction options in Reverence Summerlin, including Monument at Reverence. Dr. Jan Duffy helps you navigate new home buying in Reverence Summerlin with builder relationships and construction expertise.',
    },
    {
      name: 'keywords',
      content:
        'new homes Reverence Summerlin, Monument at Reverence, new construction Reverence Summerlin, Pulte Homes Reverence Summerlin, new home communities Reverence Summerlin',
    },
    {
      property: 'og:title',
      content:
        'New Home Construction in Reverence Summerlin | Monument at Reverence',
    },
    {
      property: 'og:description',
      content:
        'Explore new home construction options in Reverence Summerlin, including Monument at Reverence. Dr. Jan Duffy helps you navigate new home buying in Reverence Summerlin.',
    },
    { property: 'og:url', content: `${config.seo.siteUrl}/buying/new-home` },
  ]
}

export default function NewHome() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Monument at Reverence Specialist</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            New Home Construction in Reverence Summerlin
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest new home construction opportunities in Reverence
            Summerlin, including Monument at Reverence by Pulte Homes. I'll help
            you navigate the new home buying process in Reverence Summerlin and
            connect you with trusted builders creating exceptional homes
            throughout the Reverence Summerlin area.
          </p>
        </div>

        {/* Advanced Search Widget - Perfect for New Home Buyers */}
        <div className="mb-16">
          <Card className="shadow-xl border-4 border-accent-500">
            <CardContent className="p-8">
              <RealScoutAdvancedSearch
                buttonTextColor="#ffffff"
                backgroundColor="#ffffff"
                searchButtonColor="#e85d04"
                width={600}
                title="Search New Construction & Existing Homes"
                subtitle="Explore new construction opportunities and existing homes in Reverence Summerlin. Filter by neighborhood, city, beds, baths, and price."
              />
            </CardContent>
          </Card>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose New Construction in Reverence Summerlin?
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-gray-700 mb-4">
              Reverence Summerlin has emerged as one of Las Vegas's premier
              destinations for new home construction, with communities like
              Monument at Reverence leading the way in quality, innovation, and
              lifestyle amenities. New construction in Reverence Summerlin
              offers homebuyers the opportunity to own a brand-new home in one
              of the most desirable master-planned communities in Las Vegas,
              featuring modern design, energy-efficient features, and
              comprehensive builder warranties.
            </p>
            <p className="text-gray-700 mb-4">
              The Reverence Summerlin area's new construction market includes
              exceptional communities such as Monument at Reverence, built by
              Pulte Homes, one of America's most trusted homebuilders. These
              Reverence Summerlin new construction projects combine quality
              craftsmanship, thoughtful design, and prime locations to create
              homes that represent exceptional value for Reverence Summerlin
              buyers.
            </p>
            <p className="text-gray-700">
              Choosing new construction in Reverence Summerlin means selecting a
              home built to current building codes, featuring modern amenities
              and energy-efficient systems, and backed by comprehensive
              warranties. From Monument at Reverence to other Reverence
              Summerlin new construction communities, you'll find homes designed
              for today's lifestyle while preserving the natural beauty and
              community values that define Reverence Summerlin living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-primary-600">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Hammer className="w-6 h-6 text-primary-600" />
                </div>
                <CardTitle>
                  Customization Options in Reverence Summerlin
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Choose from floor plans, finishes, and upgrades to create your
                  perfect Reverence Summerlin home from the ground up. Whether
                  purchasing Monument at Reverence or other Reverence Summerlin
                  new construction, you'll have opportunities to personalize
                  your home to match your lifestyle.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-primary-600">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <CardTitle>
                  Builder Relationships in Reverence Summerlin
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Access to preferred builders like Pulte Homes at Monument at
                  Reverence with proven track records and quality construction
                  standards throughout Reverence Summerlin. I maintain
                  relationships with Reverence Summerlin's top builders to
                  provide you with the best options.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-primary-600">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <CardTitle>
                  Warranty Protection for Reverence Summerlin New Homes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  New homes in Reverence Summerlin come with comprehensive
                  warranties covering structural elements, major systems, and
                  workmanship. Monument at Reverence homes feature Pulte's
                  10-year warranty, providing peace of mind for Reverence
                  Summerlin homeowners.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Monument at Reverence: Premier New Construction in Reverence
            Summerlin
          </h2>

          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Monument at Reverence: The Crown Jewel of Reverence Summerlin
            </h3>
            <p className="text-gray-700 mb-4">
              Monument at Reverence represents the pinnacle of new home
              construction in Reverence Summerlin, offering exceptional Pulte
              Homes built properties in one of Las Vegas's most prestigious
              master-planned communities. Located within the heart of Reverence
              Summerlin, Monument at Reverence provides homeowners with access
              to world-class amenities, scenic mountain views, and a sense of
              community that defines luxury living in Reverence Summerlin.
            </p>
            <p className="text-gray-700 mb-4">
              As the featured on-site agent for Monument at Reverence, I have
              unique insight into this premier Reverence Summerlin community.
              Monument at Reverence homes feature Pulte Homes' signature quality
              construction, innovative floor plans, and energy-efficient
              features that appeal to discerning Reverence Summerlin buyers
              seeking new construction homes with exceptional value.
            </p>
            <p className="text-gray-700 mb-4">
              Monument at Reverence within Reverence Summerlin offers several
              advantages for new home buyers:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>
                Premier location within Reverence Summerlin's master-planned
                community
              </li>
              <li>
                Quality construction from Pulte Homes, one of America's most
                trusted builders
              </li>
              <li>
                Modern floor plans designed for today's Reverence Summerlin
                lifestyle
              </li>
              <li>
                Energy-efficient features and smart home technology in Monument
                at Reverence homes
              </li>
              <li>
                Comprehensive warranties including Pulte's 10-year structural
                warranty
              </li>
              <li>
                Access to Reverence Summerlin's extensive amenities and
                community features
              </li>
              <li>
                Scenic mountain and desert views from Monument at Reverence
                homesites
              </li>
              <li>
                Guard-gated security providing peace of mind for Reverence
                Summerlin residents
              </li>
            </ul>
            <p className="text-gray-700">
              Monument at Reverence represents an exceptional opportunity to own
              a new construction home in Reverence Summerlin, combining quality,
              location, and lifestyle in a way that defines premium living in
              Las Vegas. As your Reverence Summerlin real estate specialist,
              I'll guide you through the Monument at Reverence buying process,
              helping you select the perfect homesite and floor plan for your
              Reverence Summerlin lifestyle.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Pulte Homes: Building Quality in Reverence Summerlin
            </h3>
            <p className="text-gray-700 mb-4">
              Pulte Homes has established itself as one of America's most
              respected homebuilders, with a reputation for quality
              construction, innovative design, and exceptional customer service.
              At Monument at Reverence in Reverence Summerlin, Pulte brings
              decades of experience building homes that meet the highest
              standards of craftsmanship and design excellence.
            </p>
            <p className="text-gray-700 mb-4">
              Pulte Homes' commitment to quality is evident throughout Monument
              at Reverence in Reverence Summerlin. From foundation to finish,
              Pulte Homes builds Monument at Reverence properties with attention
              to detail and quality materials that ensure long-term value for
              Reverence Summerlin homeowners. The builder's reputation for
              excellence makes Monument at Reverence one of the most
              sought-after new construction communities in Reverence Summerlin.
            </p>
            <p className="text-gray-700 mb-4">
              When purchasing a Monument at Reverence home in Reverence
              Summerlin, you benefit from Pulte's comprehensive warranty
              program, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>
                10-year structural warranty on Monument at Reverence homes in
                Reverence Summerlin
              </li>
              <li>
                2-year mechanical systems warranty covering HVAC, plumbing, and
                electrical in Reverence Summerlin
              </li>
              <li>
                1-year workmanship and materials warranty for Monument at
                Reverence properties
              </li>
              <li>
                Responsive customer service addressing any concerns with your
                Reverence Summerlin home
              </li>
            </ul>
            <p className="text-gray-700">
              This warranty protection, combined with Pulte's quality
              construction at Monument at Reverence, provides Reverence
              Summerlin homeowners with confidence in their investment. As your
              Monument at Reverence specialist, I'll help you understand all
              warranty benefits and builder responsibilities for your Reverence
              Summerlin new construction home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Home className="w-8 h-8 text-primary-600" />
                  <CardTitle className="text-xl">
                    Monument at Reverence Floor Plans
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Monument at Reverence in Reverence Summerlin offers diverse
                  floor plans designed for various lifestyles and family sizes.
                  From efficient single-story designs to spacious two-story
                  homes, Monument at Reverence provides options for every
                  Reverence Summerlin buyer's needs and preferences.
                </p>
                <p className="text-gray-700 mb-4">
                  Each Monument at Reverence floor plan in Reverence Summerlin
                  is thoughtfully designed to maximize space utilization,
                  natural light, and indoor-outdoor living opportunities. These
                  floor plans reflect Pulte Homes' understanding of what
                  Reverence Summerlin buyers value in their homes, creating
                  spaces that are both functional and beautiful.
                </p>
                <p className="text-gray-700">
                  As your Monument at Reverence specialist, I'll help you
                  understand which floor plan best matches your Reverence
                  Summerlin lifestyle needs, whether you're seeking single-level
                  living, multiple bedrooms for families, or flexible spaces for
                  home offices or entertainment areas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-8 h-8 text-primary-600" />
                  <CardTitle className="text-xl">
                    Energy Efficiency in Monument at Reverence
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Monument at Reverence homes in Reverence Summerlin feature
                  energy-efficient construction and systems that reduce utility
                  costs while providing comfortable living environments. These
                  energy-efficient features are particularly valuable in
                  Reverence Summerlin's desert climate, where heating and
                  cooling costs can be significant.
                </p>
                <p className="text-gray-700 mb-4">
                  Pulte Homes incorporates advanced energy-efficient
                  technologies in Monument at Reverence homes, including
                  high-efficiency HVAC systems, LED lighting, energy-efficient
                  windows, and insulation that exceeds standard building codes.
                  These features reduce monthly utility costs for Reverence
                  Summerlin homeowners while contributing to environmental
                  sustainability.
                </p>
                <p className="text-gray-700">
                  The energy-efficient construction at Monument at Reverence in
                  Reverence Summerlin not only saves money but also increases
                  home comfort and value. As your Reverence Summerlin real
                  estate specialist, I'll explain all energy-efficient features
                  included in Monument at Reverence homes and how they benefit
                  Reverence Summerlin homeowners long-term.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            New Construction Communities in Reverence Summerlin
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Monument at Reverence: Premier Reverence Summerlin Community
            </h3>
            <p className="text-gray-700 mb-4">
              Monument at Reverence stands as the premier new construction
              community within Reverence Summerlin, offering exceptional Pulte
              Homes built properties in a guard-gated setting with access to
              Reverence Summerlin's extensive amenities. This Reverence
              Summerlin community combines quality construction, thoughtful
              design, and prime location to create an unmatched new home buying
              opportunity.
            </p>
            <p className="text-gray-700 mb-4">
              Monument at Reverence within Reverence Summerlin features:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>
                Guard-gated security providing privacy and peace of mind for
                Reverence Summerlin residents
              </li>
              <li>
                Quality Pulte Homes construction with comprehensive warranties
              </li>
              <li>
                Modern floor plans designed for Reverence Summerlin lifestyles
              </li>
              <li>
                Energy-efficient features reducing utility costs for Reverence
                Summerlin homeowners
              </li>
              <li>
                Scenic mountain and desert views from Monument at Reverence
                homesites
              </li>
              <li>
                Access to Reverence Summerlin's parks, trails, and community
                amenities
              </li>
              <li>
                Proximity to top-rated schools serving the Reverence Summerlin
                area
              </li>
              <li>
                Close to shopping, dining, and entertainment in Downtown
                Summerlin
              </li>
            </ul>
            <p className="text-gray-700">
              Monument at Reverence represents the best of Reverence Summerlin
              new construction, combining quality, location, and lifestyle in a
              community designed for discerning buyers. As your Monument at
              Reverence specialist, I'll help you explore this exceptional
              Reverence Summerlin community and find the perfect new
              construction home for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>
                  Skye Canyon: Innovative Reverence Summerlin Area Community
                </CardTitle>
                <Badge variant="secondary" className="mt-2">
                  New Construction
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Skye Canyon, located near Reverence Summerlin, offers
                  innovative new construction homes featuring smart home
                  technology and energy-efficient design. While technically a
                  separate master-planned community, Skye Canyon shares many
                  characteristics with Reverence Summerlin communities,
                  including quality construction, thoughtful planning, and
                  lifestyle amenities.
                </p>
                <p className="text-gray-700">
                  Skye Canyon's proximity to Reverence Summerlin makes it an
                  attractive option for buyers seeking new construction homes
                  with similar quality and amenities. The community's innovative
                  approach to home design and technology appeals to buyers
                  interested in modern living features that complement Reverence
                  Summerlin's established reputation for quality.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  Other New Construction Options Near Reverence Summerlin
                </CardTitle>
                <Badge variant="secondary" className="mt-2">
                  Various Builders
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Beyond Monument at Reverence, Reverence Summerlin buyers will
                  find additional new construction opportunities in surrounding
                  Summerlin communities. These Reverence Summerlin area new
                  construction projects offer alternatives for buyers seeking
                  new homes with different builders, floor plans, or price
                  points while maintaining proximity to Reverence Summerlin's
                  amenities.
                </p>
                <p className="text-gray-700">
                  As your Reverence Summerlin real estate specialist, I can help
                  you explore all new construction options in the Reverence
                  Summerlin area, comparing communities like Monument at
                  Reverence with other builders and locations to find the best
                  match for your needs, preferences, and budget.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            The New Home Buying Process in Reverence Summerlin
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-600">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <FileText className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Step 1: Explore Reverence Summerlin New Construction Options
                </h3>
              </div>
              <p className="text-gray-700">
                Begin by exploring new construction opportunities in Reverence
                Summerlin, including Monument at Reverence. I'll help you
                understand available communities, builders, floor plans, and
                pricing in the Reverence Summerlin market. This initial
                exploration helps you identify which Reverence Summerlin new
                construction communities best match your needs, preferences, and
                budget.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-600">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <Home className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Step 2: Select Your Monument at Reverence Homesite or Floor
                  Plan
                </h3>
              </div>
              <p className="text-gray-700">
                Once you've identified Monument at Reverence or other Reverence
                Summerlin communities of interest, select your preferred
                homesite and floor plan. This selection process involves
                considering lot orientation, views, floor plan features, and
                customization options available for your Reverence Summerlin new
                construction home.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-600">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Step 3: Customize Your Reverence Summerlin New Home
                </h3>
              </div>
              <p className="text-gray-700">
                Customize your Reverence Summerlin new construction home by
                selecting finishes, upgrades, and design options. Whether
                purchasing Monument at Reverence or other Reverence Summerlin
                communities, you'll have opportunities to personalize your home
                through structural options, finish selections, and optional
                upgrades that enhance your Reverence Summerlin living
                experience.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-600">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Step 4: Secure Financing for Your Reverence Summerlin New Home
                </h3>
              </div>
              <p className="text-gray-700">
                Secure financing for your Reverence Summerlin new construction
                purchase, whether through conventional loans, VA loans, FHA
                loans, or builder financing programs. I'll help you understand
                financing options for Monument at Reverence and other Reverence
                Summerlin communities, including builder incentives that may
                reduce your overall cost.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-600">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <Hammer className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Step 5: Monitor Construction of Your Reverence Summerlin Home
                </h3>
              </div>
              <p className="text-gray-700">
                During construction of your Reverence Summerlin new home, I'll
                coordinate walkthroughs and inspections to ensure quality
                construction. Whether you're purchasing Monument at Reverence or
                other Reverence Summerlin communities, regular construction
                monitoring ensures your home meets expectations and builder
                standards before closing.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-600">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Step 6: Closing on Your Reverence Summerlin New Home
                </h3>
              </div>
              <p className="text-gray-700">
                Complete the closing process for your Reverence Summerlin new
                construction home, including final walkthrough, paperwork, and
                key transfer. I'll coordinate all closing details for your
                Monument at Reverence or other Reverence Summerlin purchase,
                ensuring a smooth transition to your new Reverence Summerlin
                home.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Advantages of New Construction in Reverence Summerlin
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Modern Design and Features in Reverence Summerlin New Homes
            </h3>
            <p className="text-gray-700 mb-4">
              New construction homes in Reverence Summerlin, particularly
              Monument at Reverence, feature modern design elements and
              contemporary features that appeal to today's homebuyers. These
              Reverence Summerlin new homes incorporate open floor plans,
              flexible living spaces, and design trends that reflect current
              lifestyle preferences, making them more appealing than many older
              Reverence Summerlin properties.
            </p>
            <p className="text-gray-700 mb-4">
              Monument at Reverence and other Reverence Summerlin new
              construction communities offer features including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>
                Open-concept living areas perfect for entertaining in Reverence
                Summerlin
              </li>
              <li>
                Modern kitchens with updated appliances and finishes in
                Reverence Summerlin homes
              </li>
              <li>
                Flexible spaces adaptable to home offices, gyms, or guest rooms
                in Reverence Summerlin
              </li>
              <li>
                Smart home technology integration in Monument at Reverence and
                other Reverence Summerlin communities
              </li>
              <li>
                Energy-efficient systems reducing utility costs for Reverence
                Summerlin homeowners
              </li>
              <li>
                Low-maintenance materials reducing upkeep for Reverence
                Summerlin residents
              </li>
            </ul>
            <p className="text-gray-700">
              These modern features make Reverence Summerlin new construction
              homes particularly attractive to buyers seeking contemporary
              living spaces without the renovation work required in older
              Reverence Summerlin properties. As your Reverence Summerlin real
              estate specialist, I'll help you understand which modern features
              matter most for your lifestyle.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Energy Efficiency and Sustainability in Reverence Summerlin
            </h3>
            <p className="text-gray-700 mb-4">
              New construction homes in Reverence Summerlin, including Monument
              at Reverence, incorporate energy-efficient features and
              sustainable building practices that reduce environmental impact
              while lowering utility costs. These Reverence Summerlin new homes
              are built to current energy codes and often exceed minimum
              requirements, providing superior energy performance compared to
              older Reverence Summerlin properties.
            </p>
            <p className="text-gray-700 mb-4">
              Energy-efficient features in Reverence Summerlin new construction
              include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>
                High-efficiency HVAC systems reducing heating and cooling costs
                in Reverence Summerlin
              </li>
              <li>
                Advanced insulation exceeding standard building codes in
                Reverence Summerlin homes
              </li>
              <li>
                Energy-efficient windows and doors minimizing heat transfer in
                Reverence Summerlin
              </li>
              <li>
                LED lighting reducing electricity consumption in Reverence
                Summerlin properties
              </li>
              <li>
                Water-efficient fixtures conserving resources in Reverence
                Summerlin homes
              </li>
              <li>
                Solar-ready construction enabling future renewable energy in
                Reverence Summerlin
              </li>
            </ul>
            <p className="text-gray-700">
              These energy-efficient features provide long-term value for
              Reverence Summerlin homeowners through reduced utility costs while
              contributing to environmental sustainability. The energy savings
              from Reverence Summerlin new construction homes can be
              significant, particularly over the lifetime of homeownership in
              the area.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Warranty Protection and Peace of Mind in Reverence Summerlin
            </h3>
            <p className="text-gray-700 mb-4">
              New construction homes in Reverence Summerlin, especially Monument
              at Reverence, come with comprehensive builder warranties that
              protect your investment and provide peace of mind. These Reverence
              Summerlin warranties cover structural elements, major systems, and
              workmanship, ensuring your Reverence Summerlin new home performs
              as expected.
            </p>
            <p className="text-gray-700 mb-4">
              Monument at Reverence homes feature Pulte's comprehensive warranty
              program, including structural warranties, mechanical system
              coverage, and workmanship guarantees. These Reverence Summerlin
              warranties provide protection against defects and ensure builder
              accountability for your Monument at Reverence investment.
            </p>
            <p className="text-gray-700">
              Understanding warranty coverage is essential when purchasing
              Reverence Summerlin new construction. As your Monument at
              Reverence specialist, I'll explain all warranty terms, coverage
              periods, and builder responsibilities, ensuring you understand
              your protections as a Reverence Summerlin new home owner.
            </p>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Start Your Reverence Summerlin New Home Search Today
          </h2>
          <p className="text-gray-700 mb-6">
            Ready to explore new construction opportunities in Reverence
            Summerlin? Dr. Jan Duffy brings specialized Monument at Reverence
            expertise, comprehensive Reverence Summerlin market knowledge, and
            builder relationships to every new home buyer's journey. Whether
            you're interested in Monument at Reverence, other Reverence
            Summerlin communities, or new construction throughout the Summerlin
            area, I'll create a customized home search strategy designed to meet
            your needs.
          </p>
          <p className="text-gray-700 mb-6">
            My proven track record helping Reverence Summerlin new home buyers,
            combined with cutting-edge market knowledge and personalized
            service, ensures your new construction purchase experience is
            efficient, successful, and stress-free. I understand the unique
            aspects of buying new construction in Reverence Summerlin and will
            leverage this knowledge throughout your transaction.
          </p>
          <p className="text-gray-700 mb-8">
            Contact me today for a complimentary consultation about buying new
            construction in Reverence Summerlin. I'll provide an honest
            Reverence Summerlin market overview, discuss your new home goals,
            and outline how my specialized services can help you achieve the
            best possible outcome for your Reverence Summerlin new construction
            purchase, whether at Monument at Reverence or other premier
            communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Monument at Reverence Tour
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/communities/monument-at-reverence">
                <Home className="w-5 h-5 mr-2" />
                Explore Monument at Reverence
              </Link>
            </Button>
          </div>
        </section>

        {/* Featured New Construction & Similar Properties */}
        <div className="mt-16">
          <RealScoutListingsWidget
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR,,TOWNHOUSE"
            priceMin={400000}
            priceMax={900000}
            title="Available Properties in Reverence Summerlin"
            subtitle="Explore new construction opportunities and similar existing homes in the Reverence Summerlin area. Find your perfect home today."
          />
        </div>
      </div>
    </div>
  )
}

export function ErrorBoundary() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-6">
          We're sorry, but there was an error loading this page.
        </p>
        <a
          href="/buying"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Return to Buying Guide
        </a>
      </div>
    </div>
  )
}
