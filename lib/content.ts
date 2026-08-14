export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about/",
    children: [
      { label: "Who We Are", href: "/about/#who-we-are" },
      { label: "Our History", href: "/about/#history" },
      { label: "Mission & Vision", href: "/about/#mission" },
      { label: "Facilities", href: "/about/#facilities" },
    ],
  },
  {
    label: "Automotive",
    href: "/automotive/",
    children: [
      { label: "Mercedes-Benz", href: "/automotive/mercedes-benz/" },
      { label: "Renault", href: "/automotive/renault/" },
      { label: "Mitsubishi Fuso", href: "/automotive/mitsubishi-fuso/" },
    ],
  },
  { label: "Services & Parts", href: "/services-parts/" },
  { label: "Bus Assembly", href: "/bus-assembly/" },
  {
    label: "Export",
    href: "/export/",
    children: [
      { label: "Ethiopian Coffee", href: "/export/coffee/" },
      { label: "Oilseeds", href: "/export/oilseeds/" },
      { label: "Pulses", href: "/export/pulses/" },
    ],
  },
  { label: "News", href: "/news/" },
];

export const timeline = [
  {
    year: "1950",
    title: "The journey begins",
    text: "ORBIS begins operations from a modest office at Menelik Square in Addis Ababa.",
  },
  {
    year: "1962",
    title: "A larger home",
    text: "The company moves to Mexico Square and expands its activities to include vehicle service.",
  },
  {
    year: "Growth",
    title: "A complete automotive operation",
    text: "Sales, service, spare parts and technical operations grow around the brands ORBIS represents.",
  },
  {
    year: "Expansion",
    title: "Engineering and international trade",
    text: "ORBIS adds local bus-body assembly and expands into Ethiopian agricultural exports.",
  },
  {
    year: "Today",
    title: "Over 75 years in Ethiopia",
    text: "A multi-division company connecting automotive expertise, local capability and international markets.",
  },
];

export const statistics = [
  { value: "1950", label: "Established in Ethiopia" },
  { value: "17,616 m²", label: "Facility area" },
  { value: "~16,000", label: "Spare-parts line items" },
  { value: "3", label: "Continents reached by export" },
];

export const companyHighlights = [
  {
    label: "3S dealership model",
    text: "Sales, service and spare parts are presented together for the brands ORBIS represents.",
  },
  {
    label: "Facility footprint",
    text: "The company profile documents a 17,616 m² facility area in Addis Ababa.",
  },
  {
    label: "Parts operation",
    text: "The warehouse operation includes around 16,000 spare-parts line items.",
  },
  {
    label: "Vehicle handling",
    text: "The premises include workshop operations, annual inspection and a customs-bonded warehouse for new vehicles.",
  },
];

export const facilityCapabilities = [
  "Comprehensive vehicle maintenance workshop",
  "Automated vehicle annual inspection workshop",
  "Warehouse for spare-parts storage and handling",
  "Parts counter designed for customer convenience",
  "Customs-bonded warehouse for new vehicles",
];

export const services = [
  {
    number: "01",
    title: "Vehicle Sales",
    text: "Automotive solutions supported by experienced sales and technical teams.",
    href: "/automotive/",
  },
  {
    number: "02",
    title: "Aftersales Service",
    text: "Maintenance, diagnostics, technical support, body and paint services.",
    href: "/services-parts/#service",
  },
  {
    number: "03",
    title: "Spare Parts",
    text: "An organized parts operation supporting represented automotive brands.",
    href: "/services-parts/#parts",
  },
  {
    number: "04",
    title: "Bosch Components",
    text: "Bosch automotive components supplied for the Ethiopian market.",
    href: "/services-parts/#bosch",
  },
];

export const coreValues = [
  "Respect for every employee's contribution",
  "Professionalism and integrity",
  "Teamwork and collaboration",
  "Creativity, innovation and adaptability",
  "Strong corporate governance",
  "Promptness and accountability",
  "Active social responsibility",
  "Zero tolerance for unethical practices",
];

export const aftersalesFocus = [
  {
    title: "Training",
    text: "The aftersales team is described as engineers and technicians receiving online and in-person brand-standard training.",
  },
  {
    title: "Maintenance planning",
    text: "Parts planning considers preventive maintenance, routine maintenance and service-part consumption.",
  },
  {
    title: "Body and mechanical parts",
    text: "The spare-parts operation supports body and mechanical part needs for represented brands.",
  },
  {
    title: "Partner recommendations",
    text: "Supplier and partner recommendations help ORBIS improve stock management and customer support.",
  },
];

export const coffeeGroups = [
  {
    name: "Specialty Coffee",
    origins: ["Sidama", "Yirgacheffe", "Guji", "Limu"],
  },
  {
    name: "Washed Coffee",
    origins: ["Sidama", "Yirgacheffe", "Guji", "Limu", "Lekempti"],
  },
  {
    name: "Natural Coffee",
    origins: ["Sidama", "Yirgacheffe", "Guji", "Lekempti", "Djimmah", "Kaffa"],
  },
];

export const oilseeds = [
  "Humera white sesame seed",
  "Wollega sesame seed",
  "Niger seed",
  "Linseed / flaxseed",
  "Peanuts",
];

export const pulses = [
  "Horse beans / fava beans",
  "Pea beans / navy beans",
  "Soybean",
  "White pea beans",
  "Red kidney beans",
  "Light speckled kidney beans",
  "Pinto beans",
  "Green mung beans",
  "Lentils",
  "Chickpeas - Desi and Kabuli",
  "Mustard seed",
];

export const contact = {
  address: "Kirkos Sub-city, Woreda 06, House No. 016, Addis Ababa, Ethiopia",
  phone: "+251 11 551 6211",
  fax: "+251 11 551 2421",
  poBox: "P.O. Box 321",
  email: "orbis.trading@ethionet.et",
};
