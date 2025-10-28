
import Image from 'next/image';
import {
  Users,
  Shield,
  MapPin,
  HeartHandshake,
  Globe,
  TrendingUp,
  Target,
  Lightbulb,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import imageData from '@/lib/placeholder-images.json';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import Link from 'next/link';

const images: Record<string, ImagePlaceholder> =
  imageData.placeholderImages.reduce((acc, img) => {
    acc[img.id] = img;
    return acc;
  }, {} as Record<string, ImagePlaceholder>);

const bannerImage = images['sustainability-banner'];

const capexData = [
    { component: "LSV Utility Cart (4–8 Seater, Li-ion)", quantity: "4 Units", cost: "4.9 – 6.4", description: "LSV Supplier Data" },
    { component: "Level 2 AC Charger (7-11 kW)", quantity: "2 Units", cost: "0.70 – 0.90", description: "Local CI Price" },
    { component: "Solar Energy/Li-ion Battery Premium", quantity: "4 Units", cost: "4.0 – 5.5", description: "Strategic Cost for LCC/OPEX Reduction" },
    { component: "Telematics/GPS and Fleet Management", quantity: "One-time amount", cost: "1.0 – 1.5", description: "Operational Control and SDG 9 Requirements" },
    { component: "Import, Duty (1-10%), Contingency Fund", quantity: "One-time amount", cost: "6.4 – 5.7", description: "Consistent with user's PKR 17–20M estimate" },
    { component: "Total Estimated LSV CAPEX", quantity: "", cost: "17.0 – 20.0", description: "Consistent with the initial abstract" },
];

const lccData = [
    { category: "Fuel/Energy Cost", lsv: "Very Low (Subsidized tariff PKR 39.70/unit)", traditional: "High, Volatile (Subject to global oil prices)", implications: "Financial Predictability; Alignment with SDG 7." },
    { category: "Maintenance", lsv: "Low (Fewer mechanical parts)", traditional: "High (Engine, complex systems, high labor)", implications: "Reduction in system downtime and OPEX fluctuation." },
    { category: "Acquisition Duty/Tax", lsv: "Low (1% to 10% on components/vehicles)", traditional: "Variable, generally high", implications: "Policy-driven advantage for rapid fleet deployment." },
    { category: "Primary Risk Factor", lsv: "Battery replacement cost (historically up to 75% of OPEX)", traditional: "Fuel price instability, geopolitical risk", implications: "Risk mitigation through Lithium/Solar investment." },
];

const sdgData = [
    { focus: "SDG 7 (Clean Energy)", objective: "Promote affordable, reliable, sustainable energy.", indicator: "Change in energy consumption", metric: "Utilization on subsidized EV tariff of PKR 39.70/unit", benchmark: "Cost per km for Diesel vs. Electric." },
    { focus: "SDG 9 (Infrastructure)", objective: "Build resilient infrastructure and promote innovation.", indicator: "Passenger volumes, by mode of transport (9.1.2)", metric: "Daily student ridership volume and LSV utilization rate (hours/day).", benchmark: "Current public transport mode share (16–20%)." },
    { focus: "SDG 11 (Communities)", objective: "Ensure safe, affordable, accessible transport.", indicator: "Proportion of population with convenient access to public transport (11.2.1)", metric: "Reduction in travel time/cost burden; accessibility rate for disabled students.", benchmark: "Pre-pilot survey on student travel costs and dissatisfaction." },
    { focus: "SDG 13 (Climate Action)", objective: "Take action to combat climate change.", indicator: "CO2 reduction in the transport sector.", metric: "Total tonnage of CO2 equivalent saved annually by the fleet.", benchmark: "AKUH Benchmark: 7.1 tons of CO2 saved per vehicle annually." },
];

const references = [
  "https://www.mdpi.com/2071-1050/15/4/3406",
  "http://eprints.lse.ac.uk/65025/1/__lse.ac.uk_storage_LIBRARY_Secondary_libfile_shared_repository_Content_Adeel,%20M_Transportation%20disadvantage_Adeel_Transportation%20disadvantage_2016.pdf",
  "https://pmc.ncbi.nlm.nih.gov/articles/PMC9561432/",
  "https://www.hec.gov.pk/english/news/AnnualReports/Annual%20Report%202019-20.pdf",
  "https://pmc.ncbi.nlm.nih.gov/articles/PMC11199719/",
  "https://www.researchgate.net/publication/381320404_Unveiling_Pakistan's_transport_problems_a_call_to_safeguard_public_health",
  "https://blogs.worldbank.org/en/opendata/last-mile-paved-pakistan-closes-spatial-disparities-access-services",
  "https://www.neduet.edu.pk/policies/Sustainible_Interest_Policy.pdf",
  "http://mptf.undp.org/fund/pk200",
  "https://www.hec.gov.pk/english/services/faculty/PTRG/Pages/default.aspx",
  "https://w3.unece.org/Stories/2025/01/tr_sdg_v3/",
  "https://www.towardsautomotive.com/insights/electric-golf-cart-market-sizing",
  "https://www.researchgate.net/publication/354394898_An_Investigation_into_Conversion_of_a_Fleet_of_Plug-in-Electric_Golf_Carts_into_Solar_Powered_Vehicles_Using_Fuzzy_Logic_Control",
  "https://growthmarketreports.com/report/university-shuttle-demand-prediction-market",
  "https://www.aku.edu/news/Pages/News_Details.aspx?nid=NEWS-000302",
  "https://ismailimail.blog/2014/05/19/a-one-of-its-kind-in-pakistan-solar-cum-electric-shuttle-of-aga-khan-university-hospital-wins-an-award/",
  "https://ijosper.uk/index.php/i/article/download/35/35",
  "https://www.mdpi.com/2071-1050/15/11/8921",
  "https://del-ev.en.made-in-china.com/product/vTjURaYGurcp/China-Golf-Course-Car-Hdk-4-Seater-ATV-Buggy-Golf-Cart.html",
  "https://dygolfcart.en.made-in-china.com/product/SnmYrHwEhjWC/China-Quality-Guarantee-Family-Used-Street-Legal-Lithium-Golf-Carts-Pakistan-for-Sale.html",
  "https://invest.gov.pk/node/1652",
  "https://acom.pk/blogs/news/how-much-does-it-cost-to-install-ev-charger",
  "https://evchargers.com.pk/public-ev-charging/",
  "https://www.pakbj.org/upload/20250827/6208229cbc8744a280dcc5e04554407f.pdf",
  "https://www.mdpi.com/2071-1050/10/6/1831",
  "https://agakhanhospitals.org/en/post/aga-khan-hospital-kisumu-paves-the-way-to-green-mobility",
  "https://mocc.gov.pk/SiteImage/Policy/EV%20Policy%20Final.pdf",
  "https://journalppw.com/index.php/jpsp/article/download/9493/6176/10954",
  "https://www.mdpi.com/2673-4060/6/1/12",
  "https://stip.oecd.org/stip/interactive-dashboards/policy-initiatives/2023%2Fdata%2FpolicyInitiatives%2F99992313",
  "https://csce.cust.edu.pk/archive/ID-624.pdf",
  "https://pedo.org.pk/university-shuttle-service/",
  "https://docs.google.com/forms/d/e/1FAIpQLScEElRLx_ScF-mgaWwTfVnbDqKSgoUPqiiTPuBJhCKVYQv65g/viewform?usp=dialog"
];


export default function AboutPage() {
  return (
    <>
      <section className="relative h-[50vh] w-full flex items-center justify-center text-center text-white">
        {bannerImage && (
          <Image
            src={bannerImage.imageUrl}
            alt={bannerImage.description}
            data-ai-hint={bannerImage.imageHint}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-green-900/60" />
        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Campus Transportation: Sustainability and Efficiency
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Strategic Analysis of the Clean and Green Shuttle Service
          </p>
        </div>
      </section>

      <div className="container mx-auto py-12 px-4 md:px-6 space-y-12">
        
        <section>
          <h2 className="text-2xl font-bold tracking-tight border-b pb-2">1. Introduction and Strategic Mandate</h2>
          <div className="mt-6 space-y-6 text-muted-foreground">
            <h3 className="text-xl font-semibold text-foreground">1.1. Background and Problem Statement</h3>
            <p>Higher Education Institutions (HEIs) are no longer merely centers of knowledge, but are at the forefront of the transition towards models of environmental responsibility and operational efficiency. Globally, campus sustainability is viewed as a "living laboratory," and sustainable transit solutions are central to this transformation. The objective of this research is to propose a strategic intervention in the form of the "Clean and Green Shuttle Service," which addresses the systemic challenges of campus mobility through the deployment of a dedicated fleet of Electric Low-Speed Vehicles (LSVs).</p>
            <p>In the Pakistani urban context, transportation is not just a logistical issue but a critical factor in social inclusion and quality of life. Inefficient public transport primarily affects low-income groups and women, resulting in reduced participation in activities. The existing transportation system leads to three major systemic deficiencies that not only affect operational efficiency but also compromise student well-being:</p>
            <div className="pl-6 space-y-4">
              <p><strong>A. Socio-Economic Burden:</strong> Travel costs are a decisive factor in students' choice of travel mode, and these expenses force many students to restrict their essential daily activities. Since the government heavily invests in providing higher education to break the cycle of poverty, it is essential to reduce the financial burden of campus access to fulfill educational objectives.</p>
              <p><strong>B. Safety and Public Health Hazards:</strong> Reliance on external public transport causes serious health hazards, particularly the transmission of infectious diseases (such as COVID-19, TB, and Haemophilus influenzae). In densely populated urban areas like Pakistan, congestion, inadequate ventilation, and poor sanitation exacerbate these risks, leading to stress and reduced air quality among commuters. The implementation of a controlled, institutional LSV fleet mitigates these risks, improves campus air quality, and enhances institutional resilience against operational disruptions.</p>
              <p><strong>C. The Last-Mile Connectivity Gap:</strong> Logistically, the last-mile gap is a major obstacle. There is a perceptible distance between nearby public transit stations (such as Bus Rapid Transit—BRT) and central academic facilities, which hinders timely and equitable educational access for students. The advantage of LSVs is that their low operating speed makes them ideal for navigating narrow campus pathways and pedestrian areas, thus closing the accessibility gap and ensuring educational inclusion, which aligns with the Higher Education Commission's (HEC) goal of promoting quality education.</p>
            </div>
            <h3 className="text-xl font-semibold text-foreground">1.2. Strategic Intervention: The Triple Bottom Line Framework</h3>
            <p>The "Clean and Green Shuttle Service" offers a solution to all these challenges through a full electric utility-grade golf cart fleet. The success of this project will be measured under the Triple Bottom Line (TBL) framework, which comprises three key, interrelated dimensions:</p>
            <ol className="list-decimal list-inside pl-6 space-y-2">
              <li><strong>People (Well-being):</strong> Significant enhancement of student well-being and access.</li>
              <li><strong>Planet (Sustainability):</strong> Measurable contribution to the United Nations Sustainable Development Goals (SDGs 7, 9, 11, 13).</li>
              <li><strong>Profit (Financial Stability):</strong> Creation of a reliable, scalable revenue stream and reduction in operating expenses.</li>
            </ol>
            <p>This project is viewed as a strategic asset that reduces long-term costs. Traditional fuel-based transport is a volatile cost center with high operating expenses (OPEX). In contrast, the LSV infrastructure, combined with government incentives (low duty and reduced electricity tariffs) , becomes a long-term, subsidized asset that aligns with the University's Environmental, Social, and Governance (ESG) objectives. This positioning improves the project's ability to attract external funding (such as UN Sustainable Development funds or specific HEC grants).</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight border-b pb-2">2. Analysis of Systemic Challenges and Electric Mobility Validation</h2>
          <div className="mt-6 space-y-6 text-muted-foreground">
            <h3 className="text-xl font-semibold text-foreground">2.1. The Student Well-being Deficit and Social Impact</h3>
            <p>There is a need to understand the social impact of transportation failures in Pakistani universities more closely. The financial burden of travel is a core issue that dictates students' travel mode choices, forcing poor students to reduce personal activities, which affects social inclusion.</p>
            <h4 className="font-semibold text-foreground">Gender-Based Disadvantage and Safety</h4>
            <p>Reliance on public transport reinforces gender inequality. In the Pakistani urban context, women suffer from insecurity and unplanned mobility on public transport, often forcing them to rely on personal vehicles or limited access. Establishing an institutional, secure, and controlled LSV service directly reduces this disadvantage. Such a service supports social equity goals by increasing the mobility of female students.</p>
            <h4 className="font-semibold text-foreground">Access for Students with Disabilities</h4>
            <p>HEC has allocated a 2% quota in scholarships for students with different abilities to encourage them to pursue university education without a financial burden. However, public transport systems generally fail to provide adequate access for persons with disabilities. Due to their small size, low speed, and low ground clearance, LSVs can be easily adapted to accommodate students with disabilities, thus complying not only with HEC guidelines but also with global accessibility standards.</p>
            <h3 className="text-xl font-semibold text-foreground">2.2. Validation of Low-Speed Electric Vehicles (LSV)</h3>
            <p>LSVs, particularly utility-grade golf carts, offer an ideal solution for educational institutions, and global market trends support this. These vehicles ensure pedestrian safety due to their low operating speed, reduce noise pollution (a non-financial benefit that reduces student stress on campus), and are eco-friendly due to zero tailpipe emissions.</p>
            <h4 className="font-semibold text-foreground">Global and Regional Precedents:</h4>
            <ol className="list-decimal list-inside pl-6 space-y-2">
                <li><strong>Global Market Growth:</strong> The electric golf cart industry is expected to grow at a Compound Annual Growth Rate (CAGR) of 8.03% from 2025 to 2034, primarily driven by the increasing demand for eco-friendly transport at airports, resorts, and universities. In the Asia-Pacific region, this growth is expected to be the fastest, at 15.2% CAGR.</li>
                <li><strong>Successful Pakistani Model:</strong> The Aga Khan University Hospital (AKUH), Karachi, successfully implemented its locally manufactured solar-cum-electric shuttle service in 2013, earning it a CSR award. This case study not only proves technical viability but also demonstrates that the system is operable under local climatic and operational conditions, providing measurable environmental impact (saving 7,500 kg or 7.1 tons of CO2 annually).</li>
                <li><strong>International Educational Case Studies:</strong> At Princess Nourah Bint Abdulrahman University (PNU) in Riyadh, Saudi Arabia, there was a plan to convert the electric golf cart fleet to solar power. PNU research demonstrated that the cost of battery replacement could account for up to 75% of the operating cost. The key financial benefit of using LSVs is the long-term saving on expensive battery replacements, which validates the long-term financial logic of the LSV.</li>
            </ol>
            <h4 className="font-semibold text-foreground">Mobility Behavior and Strategic Necessity:</h4>
            <p>Students generally prefer private cars or taxis because the quality, flexibility, and punctuality of public bus services are often inadequate. This preference increases campus congestion and environmental unsustainability. The goal of the "Clean and Green Shuttle Service" is to break this negative cycle by providing a more reliable, secure, and high-frequency internal service, thereby encouraging students to abandon the use of private vehicles for internal campus mobility.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight border-b pb-2">3. Financial Planning and Lifecycle Cost Modeling</h2>
           <div className="mt-6 space-y-6 text-muted-foreground">
            <p>The financial success of the project depends on viewing the Initial Capital Expenditure (CAPEX) not merely as a cost but as a long-term asset, whose value is assessed through Life Cycle Cost (LCC) analysis.</p>
            <h3 className="text-xl font-semibold text-foreground">3.1. Analysis of Initial Capital Expenditure (CAPEX)</h3>
            <p>For the pilot phase, the initial CAPEX is estimated at PKR 17–20 million (for 4 LSVs). This estimate is prepared in the context of local market data and policy incentives.</p>
            <h4 className="font-semibold text-foreground">Vehicle Acquisition:</h4>
            <p>According to international suppliers, 4 to 8-seater utility golf carts are priced between USD 3,500 and USD 4,600. Since these vehicles will be imported for commercial use, the government applies a 1% to 10% customs duty on the import of electric vehicles, which is a significant policy advantage compared to fuel-based vehicles.</p>
            <h4 className="font-semibold text-foreground">Charging Infrastructure (CI):</h4>
            <p>For the pilot phase, the installation of two Level 2 AC chargers (7–11 kW) is sufficient. A 7.2 kW charger costs approximately PKR 350,000, and an 11 kW charger costs PKR 400,000. The National Energy Conservation Authority (NEECA) has reduced the approval process for charging stations to 15 days, paving the way for rapid implementation.</p>
            <h4 className="font-semibold text-foreground">Strategic Cost Addition (LCC Optimization):</h4>
            <p>Although Lithium-ion (Li-ion) batteries have a higher initial CAPEX compared to lead-acid batteries, PNU research proves that this investment is necessary to reduce long-term operating costs. The longer lifespan of Li-ion batteries significantly reduces recurring battery replacement cycles and the associated 75% operating cost, thereby optimizing the LCC. The premium cost of including GPS/Telematics, and solar power systems in addition to the LSV falls within the PKR 17–20 million range, guaranteeing a long-term financial payoff.</p>

            <Card>
              <CardHeader>
                <CardTitle>Table 1: Estimated Capital Expenditure (CAPEX) for the Clean and Green Shuttle Pilot Phase</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Component</TableHead>
                      <TableHead>Unit Quantity</TableHead>
                      <TableHead>Estimated Cost (PKR Million)</TableHead>
                      <TableHead>Description/Source</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {capexData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.component}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.cost}</TableCell>
                        <TableCell>{item.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold text-foreground">3.2. Operational Expenditures (OPEX) and LCC Advantage</h3>
            <p>The projected Monthly Operating Expenses (OPEX) are estimated at PKR 400,000, which is significantly lower than traditional diesel transport due primarily to reduced fuel costs, subsidized electricity tariffs, and low maintenance.</p>
            <h4 className="font-semibold text-foreground">Energy Cost Optimization (SDG 7):</h4>
            <p>The Government of Pakistan has reduced the electricity tariff for EV charging stations by 44-45%, bringing the cost down from PKR 71.10 to PKR 39.70 per unit. This subsidy makes the energy costs within the campus extremely low and stable, eliminating reliance on global fuel prices and creating direct alignment with SDG 7 (Affordable and Clean Energy).</p>
            <h4 className="font-semibold text-foreground">LCC Shift:</h4>
            <p>The specific incentives of Pakistan's EV policy (low duty, reduced tariff) significantly lower the LCC of the LSV project compared to traditional options. These government policies act as external financial multipliers that justify the initial CAPEX in a timely manner and ensure long-term financial stability.</p>
            <h4 className="font-semibold text-foreground">Key Risk: Battery Management:</h4>
            <p>Although electric vehicles require low maintenance, the PNU study indicates that battery replacement is the biggest risk in the LSV operating cycle. The battery-related cost for an LSV was estimated at USD 0.12 per kilometer of operation. The strategy of investing in Li-ion batteries and integrating solar energy (as AKUH did) mitigates this risk, turning the biggest OPEX vulnerability into a long-term asset advantage.</p>
            
            <Card>
              <CardHeader>
                <CardTitle>Table 2: LSV vs. Traditional Diesel Transport: Comparative Life Cycle Cost (LCC) Drivers</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Cost Category</TableHead>
                      <TableHead>LSV (Electric Golf Cart)</TableHead>
                      <TableHead>Traditional Diesel Transport</TableHead>
                      <TableHead>Strategic Implications</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {lccData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.category}</TableCell>
                        <TableCell>{item.lsv}</TableCell>
                        <TableCell>{item.traditional}</TableCell>
                        <TableCell>{item.implications}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold text-foreground">3.3. Revenue Generation and Financial Stability</h3>
            <p>The project should not only be a subsidized operation but also generate a sustainable revenue stream (Profit TBL).</p>
            <h4 className="font-semibold text-foreground">Multi-Level Revenue Model:</h4>
            <ol className="list-decimal list-inside pl-6 space-y-2">
                <li><strong>Fixed Semester Pass (Subscription Model):</strong> A premium, predictable subscription model targeting long-term students. This model reflects the rapidly growing shuttle market in the Asia-Pacific educational sector.</li>
                <li><strong>Tiered Pay-per-Ride System (Transactional Model):</strong> A flexible system for visitors or infrequent users.</li>
                <li><strong>Advertising and Sponsorship:</strong> Utilizing LSVs for on-campus and external corporate advertising, leveraging the service's "Green" image.</li>
                <li><strong>Carbon Credit Revenue:</strong> The Government of Pakistan aims to generate $58.53 million in revenue through a certified carbon credit mechanism by 2030 by reducing emissions from the transport sector. The CO2 reduction achieved by the LSV fleet creates a measurable and verifiable carbon asset, linking sustainability (Planet) to financial benefit (Profit).</li>
            </ol>
            <h4 className="font-semibold text-foreground">Funding Strategy:</h4>
            <p>Strategic funding should include self-investment, Public-Private Partnerships (P3), and targeted external funding. HEC prioritizes Smart Transportation Systems in its research grant program, while the UN Sustainable Development Framework (UNSDF) Fund supports investments to accelerate the SDGs in Pakistan. Aligning the project with the university's Sustainable Investment Policy, which focuses on ESG factors, can attract further funding opportunities.</p>
           </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight border-b pb-2">4. Operational Strategy and Transport Management</h2>
            <div className="mt-6 space-y-6 text-muted-foreground">
                <p>The success of the project depends not only on LSV technology but also on its effective operational management.</p>
                <h3 className="text-xl font-semibold text-foreground">4.1. Route Optimization and Demand Mapping</h3>
                <h4 className="font-semibold text-foreground">Hub and Spoke Model:</h4>
                <p>The service will operate on a clear hub and spoke model, connecting external public transport nodes to central academic, administrative, and residential zones to effectively solve the last-mile problem. The low speed and flexibility of LSVs allow them to operate on routes where large buses are unsuitable or impractical.</p>
                <h4 className="font-semibold text-foreground">Maximizing Utilization:</h4>
                <p>Maximum frequency will be ensured during peak hours (morning arrivals, evening departures) for student transport. During off-peak hours, these utility-grade carts can be utilized for internal campus logistics, security patrols, and departmental deliveries. This dual utility model, beyond transportation, significantly reduces the Total Cost of Ownership (TCO) of the asset, further strengthening the financial justification.</p>
                
                <h3 className="text-xl font-semibold text-foreground">4.2. Technology Integration and Service Quality</h3>
                <h4 className="font-semibold text-foreground">Implementation of Smart Systems:</h4>
                <p>Mandatory integration of GPS tracking and telematics into the LSV fleet is essential. This technology is necessary for monitoring battery health, real-time vehicle location, and usage metrics. Deploying a simple electric vehicle is insufficient; the core innovation lies in its management system (optimization, data-driven). Deploying GPS-equipped, data-driven LSVs transforms the service into a Smart Transportation System, meeting HEC's preferred research areas and contributing directly to the mandate of SDG 9 (Resilient Infrastructure).</p>
                <h4 className="font-semibold text-foreground">User Experience:</h4>
                <p>Factors such as low cost, short travel time, and maintenance of social distance are critical in students' choice of travel mode. Implementing real-time tracking and feedback systems through mobility applications will improve service quality, encouraging students to prefer LSVs over private vehicles.</p>
                
                <h3 className="text-xl font-semibold text-foreground">4.3. Institutional Alignment and Human Resource Development</h3>
                <p>The project aligns with the Government of Pakistan's goals of generating employment through Green Economy initiatives. New job profiles will be created for EV maintenance technicians, drivers, and smart fleet managers for the LSV, requiring specialized training.</p>
                <p>Furthermore, the pilot project will be positioned as a data collection methodology for academic research, providing material for publication in academic journals on sustainable mobility and operational management, thereby effectively utilizing HEC grants and funding for Smart Transportation Systems.</p>
            </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold tracking-tight border-b pb-2">5. Alignment with UN Sustainable Development Goals (SDGs) and Impact Measurement</h2>
            <div className="mt-6 space-y-6 text-muted-foreground">
                <p>The proposed service not only solves operational problems but its TBL results can also be measured through globally recognized SDG metrics.</p>
                <h3 className="text-xl font-semibold text-foreground">5.1. TBL Dimension: Planet (Environmental Responsibility)</h3>
                <p><strong>SDG 13 (Climate Action):</strong> This service directly contributes to SDG 13 by reducing emissions. According to the AKUH case study, one solar vehicle saves approximately 7.1 tons of CO2 annually. With the deployment of 4 LSVs in the pilot phase, an estimated annual GHG emission reduction of at least 28 tons of CO2 equivalent is projected, which aligns with Pakistan's national target for reducing emissions in the transport sector.</p>
                <p><strong>SDG 7 (Affordable and Clean Energy):</strong> LSVs transition away from dependence on imported fuel to domestically generated, subsidized electricity. This aligns with diversifying energy sources and energy conservation.</p>

                <h3 className="text-xl font-semibold text-foreground">5.2. TBL Dimension: People (Social Equity and Well-being)</h3>
                <p><strong>SDG 11 (Sustainable Cities and Communities):</strong> This goal emphasizes providing easy access to public transport for the population (Indicator 11.2.1). The implementation of the LSV service guarantees safe, reliable, and timely access for the entire student community, including students with disabilities and women. Following the pilot project, surveys will be conducted to measure the reduction in travel costs and satisfaction levels regarding safety.</p>
                <p><strong>SDG 3 (Good Health and Well-being):</strong> By providing controlled environment and low-emission transport, the project indirectly benefits health by reducing the risks of infectious disease transmission and the stress associated with congested travel modes.</p>

                <h3 className="text-xl font-semibold text-foreground">5.3. TBL Dimension: Profit (Economic Efficiency and Innovation)</h3>
                <p><strong>SDG 9 (Industry, Innovation, and Infrastructure):</strong> The project contributes to the development of resilient and technologically improved infrastructure. The LSV utilization rate and the implementation of smart fleet management systems will serve as metrics for progress under SDG 9. The data acquired during the pilot phase can be used for future local manufacturing of LSV components, promoting industrial growth objectives under the National Electric Vehicle Policy.</p>
                <p><strong>Carbon Reduction as a Financial Asset:</strong> There is a policy in Pakistan to link environmental benefits (CO2 reduction) to financial gain. The rigorous documentation and SDG alignment of the project ensure that the institution will not only save on costs but will also be prepared to benefit from carbon credits or ESG investment sources in the future.</p>

                <Card>
                <CardHeader>
                    <CardTitle>Table 3: Clean and Green Shuttle Service: SDG Alignment and Impact Measurement</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                    <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>SDG Focus</TableHead>
                        <TableHead>Strategic Objective</TableHead>
                        <TableHead>Target Indicator (UNECE/SDGs)</TableHead>
                        <TableHead>Pilot Phase Metric</TableHead>
                        <TableHead>Baseline/Benchmark</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sdgData.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{item.focus}</TableCell>
                            <TableCell>{item.objective}</TableCell>
                            <TableCell>{item.indicator}</TableCell>
                            <TableCell>{item.metric}</TableCell>
                            <TableCell>{item.benchmark}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                    </div>
                </CardContent>
                </Card>
            </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold tracking-tight border-b pb-2">6. Strategic Recommendations, Risk Analysis, and Implementation Roadmap</h2>
           <div className="mt-6 space-y-6 text-muted-foreground">
                <h3 className="text-xl font-semibold text-foreground">6.1. Risk Assessment and Mitigation Strategy</h3>
                <p>To successfully implement the LSV service, it is essential to identify potential risks and solid mitigation strategies.</p>
                <p><strong>Financial Risk (Battery Cost Volatility):</strong> Although Li-ion batteries offer long-term advantages, their initial purchase is expensive. Mitigation: Maximizing battery life through Li-ion technology and solar energy integration to avoid major battery replacement costs, as per the PNU analysis.</p>
                <p><strong>Operational Risk (Charging Infrastructure Unreliability):</strong> Mitigation: Partnering with government-approved private EV charging solution providers and leveraging subsidized electricity tariffs. Developing a dedicated maintenance system to ensure the long-term performance of the LSV battery and charging system.</p>
                <p><strong>Utilization Risk (Low Ridership):</strong> Mitigation: Ensuring that the quality of service surpasses that of traditional public transport or private vehicles. This includes continuous route optimization, real-time tracking, and incorporating student travel passes into mandatory student services to incentivize students to prefer LSVs over private vehicles.</p>

                <h3 className="text-xl font-semibold text-foreground">6.2. Phased Implementation and Scalability (Roadmap)</h3>
                <p>To ensure the financial success and operational smoothness of the project, implementation should occur in three phases:</p>
                <h4 className="font-semibold text-foreground">Phase I (Pilot Program – 12 Months):</h4>
                <ul className="list-disc list-inside pl-6 space-y-2">
                    <li><strong>Funding:</strong> Approval and allocation of PKR 17–20 million CAPEX.</li>
                    <li><strong>Deployment:</strong> Immediate procurement of 4 LSV utility carts and 2 Level 2 chargers.</li>
                    <li><strong>Operation:</strong> Definition and launch of service on two primary, high-demand last-mile routes.</li>
                    <li><strong>Measurement:</strong> Establishment of baseline metrics (cost, utilization rate, student satisfaction) and continuous data collection.</li>
                </ul>
                <h4 className="font-semibold text-foreground">Phase II (Expansion and Optimization – Years 2-3):</h4>
                 <ul className="list-disc list-inside pl-6 space-y-2">
                    <li><strong>Expansion:</strong> Scaling the fleet to 8–10 units based on Phase I ROI and operational data.</li>
                    <li><strong>Revenue Model:</strong> Full implementation of the multi-level revenue model (semester pass, pay-per-ride).</li>
                    <li><strong>Innovation:</strong> Researching the integration of solar energy (replicating the AKUH model).</li>
                    <li><strong>Funding Search:</strong> Seeking funding from HEC Smart Transportation grants and UN SDGs funds.</li>
                </ul>
                <h4 className="font-semibold text-foreground">Phase III (Sustainable Integration – Year 4+):</h4>
                <ul className="list-disc list-inside pl-6 space-y-2">
                    <li><strong>Financial Self-Sufficiency:</strong> Achieving full financial self-sufficiency and operating the LSV operation as a profitable subsidiary.</li>
                    <li><strong>Industrial Relations:</strong> Exploring opportunities for partnership with local companies for the manufacturing or assembly of LSV components, supporting the industrial growth goals of the NEV policy.</li>
                    <li><strong>Research Integration:</strong> Incorporating LSV operational data into academic research and curriculum.</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-foreground">6.3. Final Strategic Recommendations</h3>
                <p>The "Clean and Green Shuttle Service" proposal provides a robust and strategically grounded solution to address the long-standing systemic deficiencies in campus mobility, sustainability, and social equity. The project maintains excellent alignment with national policies (NEV Policy, HEC Smart Transportation priorities) and global goals (SDGs 7, 9, 11, 13).</p>
                <p>The mandate for immediate action is crucial because a favorable policy window is currently available, with low duties and subsidized electricity tariffs from the government, which can be leveraged to maximize ROI.</p>
                <p><strong>Final Recommendation:</strong> Immediate approval should be granted for the Phase I (Pilot) project of the proposed "Clean and Green Shuttle Service," and resources should be promptly allocated for the initial capital expenditure of PKR 17–20 million. This initiative should be positioned as a clear demonstration of institutional leadership in sustainability, student well-being, and responsible investment (ESG).</p>
           </div>
        </section>

        <section>
            <h2 className="text-2xl font-bold tracking-tight border-b pb-2">References</h2>
            <div className="mt-6 space-y-2 text-sm">
                {references.map((ref, index) => (
                    <p key={index} className="break-words">
                        <Link href={ref} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            {ref}
                        </Link>
                    </p>
                ))}
                <p>Pak Everbright Development Organization (PEDO). (n.d.). University Shuttle Service. <Link href="https://pedo.org.pk/university-shuttle-service/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://pedo.org.pk/university-shuttle-service/</Link></p>
                <p>Coren, M. J. (2016). Ditch the bus: self-driving electric golf carts are ferrying students around university campuses. Quartz</p>
                <p>Miami University. (n.d.). Golf Cart and UTV Use | Requirements and Procedures | FBS.</p>
                <p>SUNY New Paltz. (n.d.). Safety Programs &gt; Electric Utility Cart Use.</p>
                <p>Ancient Star Golf Cart Xi'an Ancient Star Business Company Limited www.golfcartchina.com</p>
                <p>Link for Comprehensive Project Survey: <Link href="https://docs.google.com/forms/d/e/1FAIpQLScEElRLx_ScF-mgaWwTfVnbDqKSgoUPqiiTPuBJhCKVYQv65g/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Survey Form</Link></p>
            </div>
        </section>
      </div>
    </>
  );
}
