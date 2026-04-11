// ──────────────────────────────────────────────────────────────────────
// Harma Machinery – Location data derived from raw market research
// Base: Al Lisaili, Dubai, UAE (on Dubai-Al Ain Road E66)
// ──────────────────────────────────────────────────────────────────────

export type LocationRegion =
  | "premium"
  | "residential"
  | "commercial"
  | "industrial"
  | "events"
  | "desert"
  | "infrastructure"
  | "sharjah"
  | "ajman"
  | "al-ain"
  | "rak"
  | "fujairah"
  | "uaq";

export type MarketType =
  | "construction"
  | "events"
  | "industrial"
  | "government"
  | "hospitality"
  | "agriculture"
  | "desert-events"
  | "sports"
  | "film-media"
  | "logistics";

export type Tier = 1 | 2 | 3;

export interface Location {
  id: string;
  name: string;
  slug: string;
  nameAr?: string;
  region: LocationRegion;
  emirate: string;
  tier: Tier;
  distance: string;
  markets: MarketType[];
  description: string;
  equipmentDemand: string;
  whyTarget: string;
  metaTitle: string;
  metaDescription: string;
}

// ────────────────────────────────────────────────────────────────
//  DUBAI – CONSTRUCTION & MEGA PROJECTS  (Tier 1 & 2)
// ────────────────────────────────────────────────────────────────

export const dubaiLocations: Location[] = [
  // ── TIER 1: HIGH PRIORITY (0–25 km) ─────────────────────────
  {
    id: "dubai-south",
    name: "Dubai South",
    slug: "dubai-south",
    nameAr: "دبي الجنوب",
    region: "commercial",
    emirate: "Dubai",
    tier: 1,
    distance: "~20 km",
    markets: ["construction", "logistics", "industrial"],
    description:
      "Massive 145 sq km master-planned city with Al Maktoum International Airport expansion, Expo City Dubai, residential communities, and logistics districts under continuous construction.",
    equipmentDemand:
      "Tower cranes, excavators, generators (20–500 kVA), boom lifts, forklifts, compactors, concrete mixers",
    whyTarget:
      "Continuous large-scale construction for years to come — one of the biggest development zones in Dubai.",
    metaTitle: "Generator & Equipment Rental in Dubai South | Harma Machinery",
    metaDescription:
      "Rent generators, compactors & construction equipment in Dubai South. Harma Machinery delivers reliable machinery for mega projects with same-day delivery.",
  },
  {
    id: "expo-city-dubai",
    name: "Expo City Dubai",
    slug: "expo-city-dubai",
    region: "commercial",
    emirate: "Dubai",
    tier: 1,
    distance: "~22 km",
    markets: ["construction", "events", "hospitality"],
    description:
      "Legacy site of Expo 2020 being repurposed into a new urban district with offices, residences, museums, parks, and large-scale event venues hosting conferences and concerts year-round.",
    equipmentDemand:
      "Generators (100–500 kVA), telehandlers, boom lifts, scaffolding",
    whyTarget:
      "Multi-year transformation project with constant contractor demand plus growing event venue business.",
    metaTitle:
      "Generator & Equipment Rental in Expo City Dubai | Harma Machinery",
    metaDescription:
      "Construction equipment & generator rental for Expo City Dubai projects and events. Harma Machinery — fast delivery from Al Lisaili.",
  },
  {
    id: "damac-hills-2",
    name: "DAMAC Hills 2 (Akoya)",
    slug: "damac-hills-2",
    nameAr: "داماك هيلز 2",
    region: "residential",
    emirate: "Dubai",
    tier: 1,
    distance: "~10 km",
    markets: ["construction"],
    description:
      "Large residential community with ongoing villa and townhouse phases, international golf course, retail, and amenity construction very close to our Al Lisaili base.",
    equipmentDemand:
      "Small-medium generators (25–100 kVA), mini excavators, skid steer loaders, compactors",
    whyTarget:
      "Extremely close to Al Lisaili — low delivery cost, continuous residential construction.",
    metaTitle:
      "Generator & Equipment Rental in DAMAC Hills 2 | Harma Machinery",
    metaDescription:
      "Rent generators, compactors & construction equipment in DAMAC Hills 2 (Akoya). Harma Machinery — closest supplier with fast delivery.",
  },
  {
    id: "the-valley-emaar",
    name: "The Valley by Emaar",
    slug: "the-valley-emaar",
    region: "residential",
    emirate: "Dubai",
    tier: 1,
    distance: "~8 km",
    markets: ["construction"],
    description:
      "Major Emaar residential development along the Dubai-Al Ain Road with multiple phases of townhouses, villas, parks, and retail — one of the closest mega projects to our base.",
    equipmentDemand: "Generators, excavators, compactors, dump trucks",
    whyTarget:
      "Extremely close, large multi-year project with constant equipment demand.",
    metaTitle:
      "Generator & Equipment Rental in The Valley by Emaar | Harma Machinery",
    metaDescription:
      "Construction equipment rental in The Valley by Emaar. Generators, compactors & machinery from Harma Machinery — your closest supplier.",
  },
  {
    id: "villanova-dubailand",
    name: "Villanova (Dubailand)",
    slug: "villanova-dubailand",
    region: "residential",
    emirate: "Dubai",
    tier: 1,
    distance: "~12 km",
    markets: ["construction"],
    description:
      "Dubai Properties residential community with multiple phases of townhouses, villas, schools, mosques, and community facilities under active construction.",
    equipmentDemand: "Small generators, bobcats, compactors, concrete pumps",
    whyTarget:
      "Close proximity with steady residential construction cycle.",
    metaTitle:
      "Generator & Equipment Rental in Villanova Dubailand | Harma Machinery",
    metaDescription:
      "Rent generators & construction equipment in Villanova (Dubailand). Harma Machinery provides reliable equipment for residential projects.",
  },
  {
    id: "al-awir",
    name: "Al Awir",
    slug: "al-awir",
    nameAr: "العوير",
    region: "industrial",
    emirate: "Dubai",
    tier: 1,
    distance: "~10 km",
    markets: ["construction", "industrial", "events", "agriculture"],
    description:
      "Industrial and agricultural zone with ongoing warehouse construction, waste-to-energy plants, sewage treatment plant upgrades, wedding halls, private farms, and the largest agricultural zone near Dubai.",
    equipmentDemand:
      "Heavy generators (250–500 kVA), excavators, wheel loaders, water pumps, forklifts",
    whyTarget:
      "Very close, diverse demand across industrial construction, events, and agriculture.",
    metaTitle: "Generator & Equipment Rental in Al Awir | Harma Machinery",
    metaDescription:
      "Heavy equipment & generator rental in Al Awir. Harma Machinery serves industrial, construction & event needs with same-day delivery.",
  },
  {
    id: "margham",
    name: "Margham",
    slug: "margham",
    nameAr: "مرغم",
    region: "desert",
    emirate: "Dubai",
    tier: 1,
    distance: "~15 km",
    markets: ["desert-events", "construction", "events"],
    description:
      "Popular desert camping and event destination with private camps, corporate events, and safari operations. Also near the MBR Solar Park infrastructure corridor.",
    equipmentDemand:
      "Generators (20–100 kVA per camp/event), trenchers, cable-laying equipment",
    whyTarget:
      "Close proximity with daily safari operations and weekly private camps. Peak season Oct–April.",
    metaTitle: "Generator Rental in Margham Desert Area | Harma Machinery",
    metaDescription:
      "Generator rental for Margham desert camps, events & safari operations. Harma Machinery — fast delivery from Al Lisaili.",
  },
  {
    id: "lehbab",
    name: "Lehbab Red Dunes",
    slug: "lehbab",
    nameAr: "لهباب",
    region: "desert",
    emirate: "Dubai",
    tier: 1,
    distance: "~15 km",
    markets: ["desert-events", "events"],
    description:
      "Famous tourist desert safari location with multiple safari companies operating dinner camps nightly, corporate events, and product launches in desert settings.",
    equipmentDemand: "Generators (20–60 kVA per camp)",
    whyTarget:
      "Very high frequency — daily tourist operations, corporate events, and seasonal celebrations.",
    metaTitle: "Generator Rental in Lehbab | Harma Machinery",
    metaDescription:
      "Rent generators for Lehbab desert camps and safari operations. Harma Machinery — your nearest desert equipment supplier.",
  },
  {
    id: "al-lisaili",
    name: "Al Lisaili",
    slug: "al-lisaili",
    nameAr: "الليسيلي",
    region: "residential",
    emirate: "Dubai",
    tier: 1,
    distance: "0 km (Base)",
    markets: ["construction", "agriculture", "events"],
    description:
      "Our home base. Equipment rental for Al Lisaili area construction, agricultural operations, date palm plantations, poultry farms, greenhouse operations, and event venues.",
    equipmentDemand:
      "Generators (10–100 kVA), water pumps, mini excavators, compactors",
    whyTarget:
      "Zero delivery cost — right at our doorstep with daily repeat business potential.",
    metaTitle: "Generator & Equipment Rental in Al Lisaili | Harma Machinery",
    metaDescription:
      "Construction equipment & generator rental in Al Lisaili. Harma Machinery — located right here for instant delivery.",
  },
  {
    id: "al-ain-road-corridor",
    name: "Al Ain Road Corridor (E66)",
    slug: "al-ain-road-corridor",
    region: "infrastructure",
    emirate: "Dubai",
    tier: 1,
    distance: "Along highway",
    markets: ["construction", "government"],
    description:
      "Continuous road widening, junction improvements, bridge construction, and utility installations along the Dubai–Al Ain highway — literally on our doorstep.",
    equipmentDemand:
      "Generators (50–200 kVA), excavators, compactors, rollers, dump trucks, light towers",
    whyTarget:
      "Right at our doorstep — the longest-running road project with 24/7 night work operations.",
    metaTitle:
      "Equipment Rental for Al Ain Road (E66) Projects | Harma Machinery",
    metaDescription:
      "Generator & construction equipment rental for Dubai-Al Ain Road projects. Harma Machinery — located directly on E66.",
  },
  {
    id: "al-awir-sewage-plant",
    name: "Al Awir Sewage Treatment Plant",
    slug: "al-awir-sewage-plant",
    region: "infrastructure",
    emirate: "Dubai",
    tier: 1,
    distance: "~10 km",
    markets: ["construction", "government"],
    description:
      "One of the largest treatment plants in the Middle East with ongoing capacity upgrades, new treatment units, and pipeline construction.",
    equipmentDemand:
      "Heavy generators (200–500 kVA), excavators, cranes, dewatering pumps, pipe-laying equipment",
    whyTarget:
      "Very close, long-term government project with reliable payment.",
    metaTitle:
      "Equipment Rental near Al Awir Sewage Treatment Plant | Harma Machinery",
    metaDescription:
      "Heavy equipment rental for Al Awir Sewage Treatment Plant upgrades. Harma Machinery — closest supplier from Al Lisaili.",
  },
  {
    id: "global-village",
    name: "Global Village",
    slug: "global-village",
    region: "events",
    emirate: "Dubai",
    tier: 1,
    distance: "~15 km",
    markets: ["events"],
    description:
      "Massive seasonal cultural attraction (Nov–April) with hundreds of vendor stalls, pavilions, stages, and entertainment zones. Pre-season construction (Sep–Oct) rebuilds all pavilions annually.",
    equipmentDemand:
      "Generators (10–200 kVA) — dozens needed simultaneously",
    whyTarget:
      "Short season but enormous demand volume. Annual construction cycle makes demand predictable.",
    metaTitle:
      "Generator Rental for Global Village Dubai | Harma Machinery",
    metaDescription:
      "Rent generators for Global Village vendors, pavilions & events. Harma Machinery supplies high-volume seasonal power solutions.",
  },
  {
    id: "al-lisaili-farms",
    name: "Al Lisaili Farms",
    slug: "al-lisaili-farms",
    nameAr: "مزارع الليسيلي",
    region: "events",
    emirate: "Dubai",
    tier: 1,
    distance: "0–5 km",
    markets: ["events", "agriculture", "desert-events"],
    description:
      "Hundreds of private farms used for weddings, birthday parties, corporate retreats, BBQ nights, and camping events. Most farms have no permanent power supply — generators are essential.",
    equipmentDemand:
      "Generators (25–100 kVA) for lighting, sound, AC, kitchen equipment",
    whyTarget:
      "Right at our doorstep — fastest delivery, lowest transport cost. Very high weekend demand, especially Oct–April.",
    metaTitle:
      "Generator Rental for Al Lisaili Farm Events | Harma Machinery",
    metaDescription:
      "Rent generators for Al Lisaili farm parties, weddings & events. Harma Machinery — located right in Al Lisaili for instant delivery.",
  },
  {
    id: "last-exit-e66",
    name: "Last Exit (Dubai–Al Ain Road)",
    slug: "last-exit-e66",
    region: "events",
    emirate: "Dubai",
    tier: 1,
    distance: "~5 km",
    markets: ["events"],
    description:
      "Popular food truck and entertainment destination with pop-up events, food festivals, and weekend markets requiring temporary power solutions.",
    equipmentDemand: "Generators (20–60 kVA)",
    whyTarget:
      "Very close with regular weekend events and food festivals.",
    metaTitle: "Generator Rental for Last Exit Events | Harma Machinery",
    metaDescription:
      "Generator rental for Last Exit food festivals & pop-up events on Dubai-Al Ain Road. Harma Machinery — instant delivery.",
  },
  {
    id: "food-zones-al-awir",
    name: "Food Processing & Cold Storage Zones",
    slug: "food-zones",
    region: "industrial",
    emirate: "Dubai",
    tier: 1,
    distance: "~10 km",
    markets: ["construction", "industrial"],
    description:
      "Cold storage warehouses, food processing plants, and vertical farms. Generators are critical as cold storage cannot lose power. Al Awir Food Zone is very close.",
    equipmentDemand:
      "Generators (critical backup), forklifts, refrigeration container power",
    whyTarget:
      "Close proximity, generators critical for cold chain — clients pay premium for reliability.",
    metaTitle:
      "Generator Rental for Food Processing & Cold Storage | Harma Machinery",
    metaDescription:
      "Critical backup generator rental for food processing and cold storage facilities. Harma Machinery ensures uninterrupted power.",
  },

  // ── TIER 2: STRONG DEMAND (15–40 km) ────────────────────────
  {
    id: "dubai-silicon-oasis",
    name: "Dubai Silicon Oasis",
    slug: "dubai-silicon-oasis",
    region: "commercial",
    emirate: "Dubai",
    tier: 2,
    distance: "~18 km",
    markets: ["construction", "events"],
    description:
      "Free zone tech park with ongoing residential and commercial construction, new towers, retail centers, tech campus expansions, and university venues.",
    equipmentDemand: "Tower cranes, generators, concrete pumps, hoists",
    whyTarget:
      "Steady commercial and residential development with event venue demand.",
    metaTitle:
      "Generator & Equipment Rental in Dubai Silicon Oasis | Harma Machinery",
    metaDescription:
      "Construction equipment rental in DSO. Harma Machinery delivers generators, cranes & construction equipment.",
  },
  {
    id: "al-warsan",
    name: "Al Warsan",
    slug: "al-warsan",
    region: "residential",
    emirate: "Dubai",
    tier: 2,
    distance: "~17 km",
    markets: ["construction", "industrial"],
    description:
      "Active development zone with ongoing residential and commercial projects, new waste management facilities, and International City Phase 2 developments.",
    equipmentDemand: "Generators, excavators, dump trucks",
    whyTarget:
      "Active development zone close by with diverse project types.",
    metaTitle:
      "Generator & Equipment Rental in Al Warsan | Harma Machinery",
    metaDescription:
      "Equipment rental in Al Warsan. Harma Machinery provides generators & construction equipment with rapid delivery.",
  },
  {
    id: "arabian-ranches-3",
    name: "Arabian Ranches III",
    slug: "arabian-ranches-3",
    region: "residential",
    emirate: "Dubai",
    tier: 2,
    distance: "~20 km",
    markets: ["construction"],
    description:
      "Emaar's latest phase of the Arabian Ranches community with villas, townhouses, schools, retail, and parks under active construction.",
    equipmentDemand:
      "Generators, mini excavators, compactors, concrete trucks",
    whyTarget:
      "Active large-scale villa construction from a premier developer.",
    metaTitle:
      "Generator & Equipment Rental in Arabian Ranches III | Harma Machinery",
    metaDescription:
      "Rent generators & equipment in Arabian Ranches 3. Harma Machinery supports Emaar community construction.",
  },
  {
    id: "nad-al-sheba",
    name: "Nad Al Sheba / Meydan",
    slug: "nad-al-sheba",
    region: "residential",
    emirate: "Dubai",
    tier: 2,
    distance: "~20 km",
    markets: ["construction", "events", "sports"],
    description:
      "Meydan district expansion with new residential communities, Meydan One Mall mega-project, Dubai World Cup racing events, and corporate functions at the racecourse.",
    equipmentDemand:
      "Generators (50–500 kVA), earthmoving equipment, compactors",
    whyTarget:
      "Ongoing suburban development plus premium sporting events at the racecourse.",
    metaTitle:
      "Generator & Equipment Rental in Nad Al Sheba & Meydan | Harma Machinery",
    metaDescription:
      "Equipment rental in Nad Al Sheba & Meydan. Harma Machinery serves construction projects and racing events.",
  },
  {
    id: "tilal-al-ghaf",
    name: "Tilal Al Ghaf",
    slug: "tilal-al-ghaf",
    region: "residential",
    emirate: "Dubai",
    tier: 2,
    distance: "~25 km",
    markets: ["construction"],
    description:
      "Majid Al Futtaim's 30-million-sq-ft mega residential community with crystal lagoon, villas, townhouses, retail, and wellness facilities.",
    equipmentDemand: "All types — generators, earthmoving, cranes, lifts",
    whyTarget:
      "Massive multi-phase development with years of construction ahead.",
    metaTitle:
      "Generator & Equipment Rental in Tilal Al Ghaf | Harma Machinery",
    metaDescription:
      "Construction equipment rental in Tilal Al Ghaf. Harma Machinery supports mega community development.",
  },
  {
    id: "dubai-hills-estate",
    name: "Dubai Hills Estate",
    slug: "dubai-hills-estate",
    region: "premium",
    emirate: "Dubai",
    tier: 2,
    distance: "~27 km",
    markets: ["construction"],
    description:
      "Emaar master community with ongoing phases including mall, hospital, towers, and residential construction in a premium area.",
    equipmentDemand: "Tower cranes, generators, concrete equipment",
    whyTarget:
      "Premium area with high-budget construction projects and reliable developer payments.",
    metaTitle:
      "Generator & Equipment Rental in Dubai Hills Estate | Harma Machinery",
    metaDescription:
      "Premium construction equipment rental in Dubai Hills Estate. Harma Machinery delivers generators & machinery.",
  },
  {
    id: "dubai-industrial-city",
    name: "Dubai Industrial City",
    slug: "dubai-industrial-city",
    region: "industrial",
    emirate: "Dubai",
    tier: 2,
    distance: "~30 km",
    markets: ["construction", "industrial"],
    description:
      "560-million-sq-ft industrial zone with ongoing factory, warehouse, food processing, metals, chemicals, and logistics facility construction.",
    equipmentDemand:
      "Heavy generators (500+ kVA), cranes, excavators, forklifts, welding machines",
    whyTarget:
      "Permanent industrial construction demand with long-term rental contracts.",
    metaTitle:
      "Generator & Equipment Rental in Dubai Industrial City | Harma Machinery",
    metaDescription:
      "Industrial equipment rental in Dubai Industrial City. Harma Machinery provides heavy generators & construction machinery.",
  },
  {
    id: "dubai-investment-park",
    name: "Dubai Investment Park (DIP)",
    slug: "dubai-investment-park",
    region: "industrial",
    emirate: "Dubai",
    tier: 2,
    distance: "~35 km",
    markets: ["construction", "industrial"],
    description:
      "Mixed-use industrial, commercial, and residential development with warehouses, factories, and worker accommodation under construction.",
    equipmentDemand: "Generators, forklifts, boom lifts, compactors",
    whyTarget:
      "Consistent industrial expansion and facility upgrades.",
    metaTitle:
      "Generator & Equipment Rental in Dubai Investment Park | Harma Machinery",
    metaDescription:
      "Equipment rental in DIP. Harma Machinery serves industrial and commercial construction projects.",
  },
  {
    id: "mbr-solar-park",
    name: "MBR Solar Park",
    slug: "mbr-solar-park",
    region: "infrastructure",
    emirate: "Dubai",
    tier: 2,
    distance: "~40 km",
    markets: ["construction", "government"],
    description:
      "World's largest single-site solar park with phases IV and V under construction, targeting 5,000 MW capacity. Includes the world's tallest solar tower.",
    equipmentDemand:
      "Generators (100–500 kVA), cranes, pile drivers, cable-laying trenchers, forklifts",
    whyTarget:
      "Multi-year mega energy project directly south of base — massive equipment demand.",
    metaTitle:
      "Generator & Equipment Rental for MBR Solar Park | Harma Machinery",
    metaDescription:
      "Construction equipment & generator rental for Mohammed bin Rashid Solar Park. Harma Machinery supports mega energy projects.",
  },
  {
    id: "emirates-road-e611",
    name: "Emirates Road (E611)",
    slug: "emirates-road-e611",
    region: "infrastructure",
    emirate: "Dubai",
    tier: 2,
    distance: "~15 km",
    markets: ["construction", "government"],
    description:
      "Multi-lane highway expansion with new interchange construction, utility diversion, and installation work supporting Dubai's growing traffic needs.",
    equipmentDemand: "Heavy machinery, generators, dump trucks",
    whyTarget:
      "Major highway close by with multi-year construction work and night operations.",
    metaTitle:
      "Equipment Rental for Emirates Road (E611) Projects | Harma Machinery",
    metaDescription:
      "Construction equipment rental for Emirates Road expansion projects. Harma Machinery delivers heavy machinery & generators.",
  },
  {
    id: "etihad-rail",
    name: "Etihad Rail (UAE National Railway)",
    slug: "etihad-rail",
    region: "infrastructure",
    emirate: "Dubai",
    tier: 2,
    distance: "Multiple locations",
    markets: ["construction", "government"],
    description:
      "Stage 2 of the UAE national railway connecting Abu Dhabi, Dubai, Sharjah, and Northern Emirates with massive earthwork, bridge, tunnel, station, and track-laying construction.",
    equipmentDemand:
      "Heavy generators (300–1000 kVA), excavators, cranes, compactors, concrete equipment, welding generators",
    whyTarget:
      "Biggest infrastructure project in UAE history — massive equipment demand for years with month-to-year rental durations.",
    metaTitle:
      "Equipment Rental for Etihad Rail Projects | Harma Machinery",
    metaDescription:
      "Heavy generator & construction equipment rental for Etihad Rail. Harma Machinery supports UAE's largest infrastructure project.",
  },
  {
    id: "al-maktoum-airport",
    name: "Al Maktoum International Airport",
    slug: "al-maktoum-airport",
    region: "infrastructure",
    emirate: "Dubai",
    tier: 2,
    distance: "~25 km",
    markets: ["construction", "government"],
    description:
      "Planned to be the world's largest airport with 5 runways and 260M passenger capacity. Multi-phase construction over 10+ years for runways, terminals, taxiways, and cargo facilities.",
    equipmentDemand: "Full range at maximum scale — everything needed",
    whyTarget:
      "Single largest construction project in the region — equipment suppliers needed for a decade+.",
    metaTitle:
      "Equipment Rental for Al Maktoum Airport Expansion | Harma Machinery",
    metaDescription:
      "Construction equipment & generator rental for Al Maktoum International Airport expansion. Harma Machinery serves mega airport projects.",
  },
  {
    id: "al-awir-farms",
    name: "Al Awir Farms & Wedding Halls",
    slug: "al-awir-farms",
    nameAr: "مزارع العوير",
    region: "events",
    emirate: "Dubai",
    tier: 1,
    distance: "~10 km",
    markets: ["events", "agriculture"],
    description:
      "Large concentration of private farms, event venues, and wedding halls catering to Arab/Emirati celebrations. Includes the largest agricultural zone near Dubai with commercial farms and nurseries.",
    equipmentDemand:
      "Generators (25–250 kVA), water pumps, small excavators, forklifts",
    whyTarget:
      "Very high year-round event demand with additional agricultural needs. Peak in winter and wedding season.",
    metaTitle:
      "Generator Rental for Al Awir Events & Farms | Harma Machinery",
    metaDescription:
      "Rent generators for Al Awir weddings, farm events & agricultural operations. Harma Machinery — fast delivery from Al Lisaili.",
  },
  {
    id: "al-khawaneej-farms",
    name: "Al Khawaneej Farms",
    slug: "al-khawaneej-farms",
    nameAr: "مزارع الخوانيج",
    region: "events",
    emirate: "Dubai",
    tier: 2,
    distance: "~25 km",
    markets: ["events"],
    description:
      "Premium farm house area with large Emirati-owned farms hosting elaborate weddings with 300–1000+ guests, corporate events, and luxury gatherings.",
    equipmentDemand:
      "Generators (50–250 kVA) for large AC tents, lighting rigs, sound systems",
    whyTarget:
      "Higher-budget events with premium pricing potential. High frequency during wedding season (Oct–March).",
    metaTitle:
      "Generator Rental for Al Khawaneej Farm Events | Harma Machinery",
    metaDescription:
      "Premium generator rental for Al Khawaneej farm weddings & events. Harma Machinery provides reliable power for large gatherings.",
  },
  {
    id: "al-faqaa-desert",
    name: "Al Faqaa Desert",
    slug: "al-faqaa-desert",
    nameAr: "الفقع",
    region: "desert",
    emirate: "Dubai",
    tier: 2,
    distance: "~30 km",
    markets: ["desert-events", "events"],
    description:
      "Remote desert area popular for large private camps, Emirati hunting camps requiring generators for weeks at a time, and weekend desert gatherings.",
    equipmentDemand: "Generators (30–100 kVA)",
    whyTarget:
      "Long-duration rentals — some camps need generators for weeks or months. Close enough for reliable service.",
    metaTitle:
      "Generator Rental for Al Faqaa Desert Camps | Harma Machinery",
    metaDescription:
      "Rent generators for Al Faqaa desert camps and events. Harma Machinery provides long-term power solutions.",
  },
  {
    id: "dubai-safari-park",
    name: "Dubai Safari Park Area",
    slug: "dubai-safari-park",
    region: "events",
    emirate: "Dubai",
    tier: 2,
    distance: "~12 km",
    markets: ["events", "construction"],
    description:
      "Ongoing habitat expansion, new enclosure construction, visitor facility upgrades, and corporate events within the park.",
    equipmentDemand: "Generators (30–100 kVA)",
    whyTarget:
      "Very close, government-run with reliable payments and regular event needs.",
    metaTitle:
      "Generator & Equipment Rental near Dubai Safari Park | Harma Machinery",
    metaDescription:
      "Equipment rental near Dubai Safari Park. Harma Machinery serves construction and event power needs.",
  },
  {
    id: "dubai-autodrome",
    name: "Dubai Autodrome / Motor City",
    slug: "dubai-autodrome",
    region: "events",
    emirate: "Dubai",
    tier: 2,
    distance: "~22 km",
    markets: ["events", "sports"],
    description:
      "Motorsport events, car shows, corporate track days, and large outdoor events requiring temporary power solutions.",
    equipmentDemand: "Generators (50–250 kVA) for events",
    whyTarget:
      "Monthly major events and weekly smaller events with outdoor power needs.",
    metaTitle:
      "Generator Rental for Dubai Autodrome Events | Harma Machinery",
    metaDescription:
      "Rent generators for Dubai Autodrome motorsport events & corporate track days. Harma Machinery provides reliable event power.",
  },
  {
    id: "mushrif-park",
    name: "Mushrif National Park",
    slug: "mushrif-park",
    region: "events",
    emirate: "Dubai",
    tier: 2,
    distance: "~20 km",
    markets: ["events"],
    description:
      "Large-scale outdoor events, festivals, National Day celebrations, corporate team-building events, and camping activities in one of Dubai's largest parks.",
    equipmentDemand: "Generators (20–100 kVA), light towers",
    whyTarget:
      "Year-round event activity with increasing frequency of outdoor festivals.",
    metaTitle:
      "Generator Rental for Mushrif Park Events | Harma Machinery",
    metaDescription:
      "Generator rental for Mushrif Park events and festivals. Harma Machinery delivers reliable outdoor power.",
  },
  {
    id: "miracle-garden",
    name: "Miracle Garden & Butterfly Garden",
    slug: "miracle-garden",
    region: "events",
    emirate: "Dubai",
    tier: 2,
    distance: "~22 km",
    markets: ["events", "construction"],
    description:
      "Seasonal attraction (Nov–May) requiring annual construction and setup of floral displays, light installations, and new themed gardens. Adjacent Butterfly Garden has ongoing facility needs.",
    equipmentDemand: "Generators (30–100 kVA), small excavators",
    whyTarget:
      "Annual setup/teardown cycle creates predictable seasonal rental demand.",
    metaTitle:
      "Generator Rental for Miracle Garden Setup | Harma Machinery",
    metaDescription:
      "Generator & equipment rental for Dubai Miracle Garden seasonal setup. Harma Machinery supports annual construction needs.",
  },
  {
    id: "dwtc",
    name: "Dubai World Trade Centre",
    slug: "dwtc",
    region: "commercial",
    emirate: "Dubai",
    tier: 2,
    distance: "~30 km",
    markets: ["events", "construction"],
    description:
      "Major exhibition and conference venue hosting 300+ events annually. Large exhibitions (GITEX, Big 5, Gulfood) need massive temporary power beyond venue supply. Adjacent One Za'abeel under construction.",
    equipmentDemand:
      "Generators (100–500 kVA) for large exhibitions, event power distribution",
    whyTarget:
      "Very high event frequency — reliable, repeat business 300+ days a year.",
    metaTitle:
      "Generator Rental for DWTC Events | Harma Machinery",
    metaDescription:
      "Generator rental for Dubai World Trade Centre exhibitions & events. Harma Machinery provides high-capacity temporary power.",
  },

  // ── HOSPITALITY, TOURISM & ENTERTAINMENT ────────────────────
  {
    id: "business-bay",
    name: "Business Bay",
    slug: "business-bay",
    region: "commercial",
    emirate: "Dubai",
    tier: 2,
    distance: "~30 km",
    markets: ["construction", "hospitality"],
    description:
      "Active construction zone with new towers, hotel conversions, office fit-outs, and canal-side restaurant/retail construction.",
    equipmentDemand: "Generators (100–300 kVA)",
    whyTarget:
      "One of Dubai's most active construction zones with constant fit-out demand.",
    metaTitle:
      "Generator & Equipment Rental in Business Bay | Harma Machinery",
    metaDescription:
      "Construction equipment rental in Business Bay. Harma Machinery provides generators for tower construction and fit-out projects.",
  },
  {
    id: "downtown-dubai",
    name: "Downtown Dubai",
    slug: "downtown-dubai",
    region: "premium",
    emirate: "Dubai",
    tier: 2,
    distance: "~32 km",
    markets: ["construction", "hospitality"],
    description:
      "Premium area with Opera District tower construction, hotel and luxury apartment renovations, and Emaar Beachfront development.",
    equipmentDemand: "Generators (100–500 kVA)",
    whyTarget:
      "Premium billing rates for prime location work.",
    metaTitle:
      "Generator & Equipment Rental in Downtown Dubai | Harma Machinery",
    metaDescription:
      "Premium construction equipment rental in Downtown Dubai. Harma Machinery serves high-rise and luxury projects.",
  },
  {
    id: "dubai-parks-resorts",
    name: "Dubai Parks and Resorts",
    slug: "dubai-parks-resorts",
    region: "events",
    emirate: "Dubai",
    tier: 2,
    distance: "~30 km",
    markets: ["events", "hospitality", "construction"],
    description:
      "Motiongate, Legoland, and Bollywood Parks with new ride installations, seasonal events, and annual maintenance shutdown periods requiring temporary power.",
    equipmentDemand: "Generators (50–300 kVA)",
    whyTarget:
      "Regular maintenance cycles creating predictable recurring revenue.",
    metaTitle:
      "Generator & Equipment Rental for Dubai Parks and Resorts | Harma Machinery",
    metaDescription:
      "Equipment rental for Dubai Parks and Resorts maintenance and events. Harma Machinery provides reliable temporary power.",
  },
  {
    id: "img-worlds",
    name: "IMG Worlds of Adventure",
    slug: "img-worlds",
    region: "events",
    emirate: "Dubai",
    tier: 2,
    distance: "~15 km",
    markets: ["events", "construction"],
    description:
      "World's largest indoor theme park with expansion projects, new attraction installations, and maintenance shutdown power needs.",
    equipmentDemand: "Generators (50–200 kVA)",
    whyTarget:
      "Close to Al Lisaili with regular maintenance and expansion needs.",
    metaTitle:
      "Generator & Equipment Rental for IMG Worlds of Adventure | Harma Machinery",
    metaDescription:
      "Equipment rental for IMG Worlds of Adventure maintenance and expansion. Harma Machinery — your closest supplier.",
  },
  {
    id: "dubai-festival-city",
    name: "Dubai Festival City",
    slug: "dubai-festival-city",
    region: "commercial",
    emirate: "Dubai",
    tier: 2,
    distance: "~25 km",
    markets: ["events", "construction", "hospitality"],
    description:
      "Waterfront events, light shows, new retail and entertainment construction, and corporate events at Festival Arena.",
    equipmentDemand: "Generators (30–150 kVA)",
    whyTarget:
      "Active event venue with ongoing construction — dual demand stream.",
    metaTitle:
      "Generator & Equipment Rental in Dubai Festival City | Harma Machinery",
    metaDescription:
      "Equipment rental in Dubai Festival City for events and construction. Harma Machinery provides generators & machinery.",
  },
  {
    id: "national-industries-park",
    name: "National Industries Park",
    slug: "national-industries-park",
    region: "industrial",
    emirate: "Dubai",
    tier: 2,
    distance: "~15 km",
    markets: ["construction", "industrial"],
    description:
      "Manufacturing and logistics park near Dubai South with new factory and warehouse construction.",
    equipmentDemand: "Generators (100–500 kVA), forklifts, excavators",
    whyTarget:
      "Close industrial zone — clients typically rent for long periods.",
    metaTitle:
      "Generator & Equipment Rental in National Industries Park | Harma Machinery",
    metaDescription:
      "Industrial equipment rental in National Industries Park. Harma Machinery provides generators & construction machinery.",
  },
  {
    id: "dubai-logistics-city",
    name: "Dubai Logistics City",
    slug: "dubai-logistics-city",
    region: "industrial",
    emirate: "Dubai",
    tier: 2,
    distance: "~25 km",
    markets: ["construction", "industrial", "logistics"],
    description:
      "Part of Dubai South — massive logistics hub with warehouses, cold storage, and e-commerce fulfillment center construction (Amazon, Noon).",
    equipmentDemand: "Generators, forklifts, excavators, compactors",
    whyTarget:
      "E-commerce boom driving continuous warehouse construction.",
    metaTitle:
      "Generator & Equipment Rental in Dubai Logistics City | Harma Machinery",
    metaDescription:
      "Equipment rental in Dubai Logistics City. Harma Machinery serves warehouse and logistics construction projects.",
  },
  {
    id: "ras-al-khor-industrial",
    name: "Ras Al Khor Industrial",
    slug: "ras-al-khor-industrial",
    region: "industrial",
    emirate: "Dubai",
    tier: 2,
    distance: "~18 km",
    markets: ["construction", "industrial"],
    description:
      "Heavy industrial zone with metal fabrication, wood working, and construction material factories. Also includes logistics corridor with truck depots.",
    equipmentDemand: "Generators (100–300 kVA), forklifts, cranes",
    whyTarget:
      "Close to Al Lisaili along the highway with ongoing facility upgrades.",
    metaTitle:
      "Generator & Equipment Rental in Ras Al Khor Industrial | Harma Machinery",
    metaDescription:
      "Industrial equipment rental in Ras Al Khor. Harma Machinery provides generators & heavy machinery.",
  },
  {
    id: "al-quoz-industrial",
    name: "Al Quoz Industrial Areas",
    slug: "al-quoz-industrial",
    region: "industrial",
    emirate: "Dubai",
    tier: 2,
    distance: "~30 km",
    markets: ["construction", "industrial"],
    description:
      "Dubai's oldest industrial area — constantly being redeveloped with factory upgrades, new workshop construction, and the Alserkal Avenue art district fit-outs.",
    equipmentDemand: "Generators, forklifts, boom lifts",
    whyTarget:
      "Ongoing renovation cycle in existing buildings plus new construction.",
    metaTitle:
      "Generator & Equipment Rental in Al Quoz Industrial | Harma Machinery",
    metaDescription:
      "Equipment rental in Al Quoz. Harma Machinery provides generators and construction equipment for industrial projects.",
  },
  {
    id: "international-city",
    name: "International City / Dragon Mart",
    slug: "international-city",
    region: "residential",
    emirate: "Dubai",
    tier: 2,
    distance: "~17 km",
    markets: ["construction", "industrial"],
    description:
      "Dragon Mart expansion, International City Phase 2 construction, and warehouse/retail fit-out activity.",
    equipmentDemand: "Generators (30–150 kVA), forklifts, compactors",
    whyTarget:
      "Close proximity with heavy trade/warehouse activity and new phase construction.",
    metaTitle:
      "Generator & Equipment Rental in International City | Harma Machinery",
    metaDescription:
      "Equipment rental in International City and Dragon Mart. Harma Machinery provides generators & construction equipment.",
  },
  {
    id: "dubai-south-worker-villages",
    name: "Dubai South Worker Villages",
    slug: "dubai-south-worker-villages",
    region: "industrial",
    emirate: "Dubai",
    tier: 2,
    distance: "~20 km",
    markets: ["construction"],
    description:
      "Purpose-built multi-story worker villages for airport and Dubai South projects. Need generators during construction and permanent backup after completion.",
    equipmentDemand: "Generators, cranes, concrete equipment",
    whyTarget: "Close, large-scale, long-duration projects.",
    metaTitle:
      "Equipment Rental for Dubai South Worker Villages | Harma Machinery",
    metaDescription:
      "Generator & construction equipment rental for Dubai South worker accommodation projects. Harma Machinery serves large-scale builds.",
  },
  {
    id: "sonapur-labor-camps",
    name: "Sonapur / Muhaisnah Labor Camps",
    slug: "sonapur-labor-camps",
    region: "industrial",
    emirate: "Dubai",
    tier: 2,
    distance: "~18 km",
    markets: ["construction"],
    description:
      "Largest labor camp area in Dubai with continuous camp construction, upgrades to meet new standards, generator backup requirements, and HVAC installations.",
    equipmentDemand: "Generators (100–500 kVA backup), cranes, lifts",
    whyTarget:
      "Continuous demand — camps always need upgrades and new construction.",
    metaTitle:
      "Generator & Equipment Rental for Sonapur Area | Harma Machinery",
    metaDescription:
      "Equipment rental for Sonapur labor camp construction and upgrades. Harma Machinery provides generators & machinery.",
  },

  // ── GOVERNMENT & SPECIALTY ──────────────────────────────────
  {
    id: "dewa-substations",
    name: "DEWA Substations & Transmission Lines",
    slug: "dewa-substations",
    region: "infrastructure",
    emirate: "Dubai",
    tier: 2,
    distance: "Various",
    markets: ["construction", "government"],
    description:
      "New substations for every community development plus 132kV and 400kV transmission line construction, cable laying, and underground duct installation.",
    equipmentDemand:
      "Generators, cable drum trailers, cranes, excavators",
    whyTarget:
      "Every new community means new substations — continuous demand cycle.",
    metaTitle:
      "Equipment Rental for DEWA Infrastructure Projects | Harma Machinery",
    metaDescription:
      "Generator & equipment rental for DEWA substation and transmission projects. Harma Machinery supports energy infrastructure.",
  },
  {
    id: "hassyan-power-complex",
    name: "Hassyan Clean Energy Complex",
    slug: "hassyan-power-complex",
    region: "infrastructure",
    emirate: "Dubai",
    tier: 2,
    distance: "~35 km",
    markets: ["construction", "government"],
    description:
      "Major energy project converted from coal to natural gas with ongoing plant construction, green hydrogen pilot project, and associated infrastructure.",
    equipmentDemand:
      "Heavy generators (500+ kVA), cranes, excavators, welding equipment",
    whyTarget:
      "Multi-year government energy project with high equipment demand.",
    metaTitle:
      "Equipment Rental for Hassyan Power Complex | Harma Machinery",
    metaDescription:
      "Heavy equipment rental for Hassyan Clean Energy Complex. Harma Machinery supports major energy infrastructure projects.",
  },
  {
    id: "telecom-5g-rollout",
    name: "5G Telecom Tower Installations",
    slug: "telecom-5g-rollout",
    region: "infrastructure",
    emirate: "Dubai",
    tier: 2,
    distance: "Across Dubai",
    markets: ["construction", "government"],
    description:
      "du and Etisalat aggressively expanding 5G coverage with hundreds of new tower sites. Each site needs 1–4 weeks of temporary power during installation.",
    equipmentDemand: "Generators (20–50 kVA per site)",
    whyTarget:
      "High-volume opportunity — hundreds of individual short-term rental contracts with reliable telecom payments.",
    metaTitle:
      "Generator Rental for 5G Telecom Installations | Harma Machinery",
    metaDescription:
      "Generator rental for 5G tower installations across Dubai. Harma Machinery serves telecom contractors with rapid delivery.",
  },
  {
    id: "sports-city",
    name: "Dubai Sports City",
    slug: "sports-city",
    region: "events",
    emirate: "Dubai",
    tier: 2,
    distance: "~25 km",
    markets: ["events", "sports", "construction"],
    description:
      "International cricket stadium, rugby grounds, and sports academies with event power needs plus ongoing residential and retail construction.",
    equipmentDemand: "Generators (50–200 kVA), event lighting",
    whyTarget:
      "Regular sports events plus ongoing construction — dual revenue stream.",
    metaTitle:
      "Generator Rental for Dubai Sports City | Harma Machinery",
    metaDescription:
      "Generator & equipment rental for Dubai Sports City events and construction. Harma Machinery provides event and construction power.",
  },

  // ── TIER 3: EMERGING (30–50 km) ─────────────────────────────
  {
    id: "jebel-ali-jafza",
    name: "Jebel Ali / JAFZA",
    slug: "jebel-ali-jafza",
    region: "industrial",
    emirate: "Dubai",
    tier: 3,
    distance: "~45 km",
    markets: ["construction", "industrial", "logistics"],
    description:
      "One of the world's largest free zones and port with continuous warehouse, factory, and logistics construction. Over 8,000 companies with constant facility expansion.",
    equipmentDemand:
      "Heavy generators, cranes, forklifts, welders, container handlers",
    whyTarget:
      "Massive volume — even a small market share equals significant revenue.",
    metaTitle:
      "Generator & Equipment Rental in Jebel Ali & JAFZA | Harma Machinery",
    metaDescription:
      "Industrial equipment rental in Jebel Ali Free Zone. Harma Machinery provides generators & heavy machinery for port and logistics projects.",
  },
  {
    id: "dubai-creek-harbour",
    name: "Dubai Creek Harbour",
    slug: "dubai-creek-harbour",
    region: "premium",
    emirate: "Dubai",
    tier: 3,
    distance: "~30 km",
    markets: ["construction"],
    description:
      "Emaar mega development with Dubai Creek Tower (iconic landmark), residential towers, retail, and marina development.",
    equipmentDemand: "Tower cranes, generators, concrete pumps",
    whyTarget:
      "Major waterfront mega-project with multi-year construction timeline.",
    metaTitle:
      "Generator & Equipment Rental in Dubai Creek Harbour | Harma Machinery",
    metaDescription:
      "Construction equipment rental in Dubai Creek Harbour. Harma Machinery supports waterfront mega projects.",
  },
  {
    id: "palm-jumeirah",
    name: "Palm Jumeirah",
    slug: "palm-jumeirah",
    region: "premium",
    emirate: "Dubai",
    tier: 3,
    distance: "~50 km",
    markets: ["construction", "hospitality", "events"],
    description:
      "Ongoing resort and villa renovation/construction, new restaurant and retail construction, Nakheel Mall expansions, and beach events.",
    equipmentDemand:
      "Generators (100–500 kVA) for construction, 20–80 kVA for events",
    whyTarget: "Ultra-premium location — highest rental rates possible.",
    metaTitle:
      "Generator & Equipment Rental in Palm Jumeirah | Harma Machinery",
    metaDescription:
      "Premium generator & equipment rental in Palm Jumeirah. Harma Machinery provides reliable power for resort and construction projects.",
  },
  {
    id: "dubai-islands",
    name: "Dubai Islands",
    slug: "dubai-islands",
    region: "premium",
    emirate: "Dubai",
    tier: 3,
    distance: "~40 km",
    markets: ["construction"],
    description:
      "Nakheel's 5-island mega development with resorts, residential, retail, entertainment, and lifestyle destinations actively under construction.",
    equipmentDemand:
      "All types — generators, cranes, excavators, marine construction support",
    whyTarget:
      "Massive multi-year construction program with constant equipment demand.",
    metaTitle:
      "Generator & Equipment Rental for Dubai Islands | Harma Machinery",
    metaDescription:
      "Construction equipment rental for Dubai Islands mega development. Harma Machinery supports large-scale island construction.",
  },
  {
    id: "dubai-harbour",
    name: "Dubai Harbour",
    slug: "dubai-harbour",
    region: "premium",
    emirate: "Dubai",
    tier: 3,
    distance: "~48 km",
    markets: ["construction", "hospitality"],
    description:
      "Mega cruise terminal and marina with residential towers, Dubai Lighthouse iconic tower, and hospitality developments.",
    equipmentDemand: "Heavy machinery, generators for marine works",
    whyTarget:
      "Waterfront mega-project with active construction and premium rates.",
    metaTitle:
      "Generator & Equipment Rental for Dubai Harbour | Harma Machinery",
    metaDescription:
      "Heavy equipment & generator rental for Dubai Harbour construction. Harma Machinery serves waterfront mega projects.",
  },
  {
    id: "dubai-marina",
    name: "Dubai Marina",
    slug: "dubai-marina",
    region: "premium",
    emirate: "Dubai",
    tier: 3,
    distance: "~45 km",
    markets: ["construction", "hospitality", "events"],
    description:
      "Waterfront district with ongoing tower fit-outs, yacht club events, marina-side restaurant construction, and JBR beach events.",
    equipmentDemand: "Generators (50–200 kVA)",
    whyTarget:
      "Premium waterfront location with diverse event and construction demand.",
    metaTitle:
      "Generator & Equipment Rental in Dubai Marina | Harma Machinery",
    metaDescription:
      "Equipment rental in Dubai Marina. Harma Machinery provides generators for construction and waterfront events.",
  },
  {
    id: "city-walk-la-mer",
    name: "City Walk & La Mer",
    slug: "city-walk-la-mer",
    region: "premium",
    emirate: "Dubai",
    tier: 3,
    distance: "~35 km",
    markets: ["hospitality", "events", "construction"],
    description:
      "Meraas retail and entertainment districts with ongoing expansion, seasonal events, beach activations, and pop-up retail construction.",
    equipmentDemand: "Generators (20–100 kVA), small construction equipment",
    whyTarget:
      "Regular event activations at premium locations with high visibility.",
    metaTitle:
      "Generator & Equipment Rental for City Walk & La Mer | Harma Machinery",
    metaDescription:
      "Generator rental for City Walk and La Mer events and construction. Harma Machinery delivers to premium Dubai destinations.",
  },

  // ────────────────────────────────────────────────────────────────
  //  SHARJAH
  // ────────────────────────────────────────────────────────────────
  {
    id: "sharjah-saif-zone",
    name: "Sharjah Industrial Area (SAIF Zone)",
    slug: "sharjah-saif-zone",
    region: "sharjah",
    emirate: "Sharjah",
    tier: 2,
    distance: "~45 km",
    markets: ["construction", "industrial"],
    description:
      "One of the largest industrial zones in the UAE with continuous warehouse, factory, and workshop construction. Many small-medium businesses building new facilities.",
    equipmentDemand:
      "Generators (50–300 kVA), forklifts, excavators, boom lifts, compactors",
    whyTarget:
      "High volume of projects with less competition from Dubai-based suppliers.",
    metaTitle:
      "Generator & Equipment Rental in Sharjah SAIF Zone | Harma Machinery",
    metaDescription:
      "Industrial equipment rental in Sharjah SAIF Zone. Harma Machinery delivers generators & machinery from Dubai.",
  },
  {
    id: "aljada-sharjah",
    name: "Aljada by Arada",
    slug: "aljada-sharjah",
    region: "sharjah",
    emirate: "Sharjah",
    tier: 2,
    distance: "~45 km",
    markets: ["construction"],
    description:
      "Sharjah's largest mega-development (24 million sq ft) — mixed-use with residential, retail, entertainment, hospitality, and the Madar entertainment district.",
    equipmentDemand:
      "All types — generators, cranes, excavators, compactors, lifts, forklifts, concrete equipment",
    whyTarget:
      "Mega project with continuous multi-year rental demand.",
    metaTitle:
      "Generator & Equipment Rental for Aljada Sharjah | Harma Machinery",
    metaDescription:
      "Construction equipment rental for Aljada mega-development in Sharjah. Harma Machinery delivers from Dubai.",
  },
  {
    id: "sharjah-waterfront",
    name: "Sharjah Waterfront City",
    slug: "sharjah-waterfront",
    region: "sharjah",
    emirate: "Sharjah",
    tier: 2,
    distance: "~50 km",
    markets: ["construction"],
    description:
      "Major waterfront master community with residential towers, retail, marinas, and parks. Multi-phase construction ongoing for years.",
    equipmentDemand: "Tower cranes, generators, concrete pumps, lifts",
    whyTarget:
      "Large-scale residential construction with long-term demand.",
    metaTitle:
      "Generator & Equipment Rental for Sharjah Waterfront City | Harma Machinery",
    metaDescription:
      "Equipment rental for Sharjah Waterfront City construction. Harma Machinery provides generators & heavy machinery.",
  },
  {
    id: "tilal-city-sharjah",
    name: "Tilal City Sharjah",
    slug: "tilal-city-sharjah",
    region: "sharjah",
    emirate: "Sharjah",
    tier: 2,
    distance: "~42 km",
    markets: ["construction"],
    description:
      "New residential city with villas, townhouses, mosques, schools, and parks — early phases under construction.",
    equipmentDemand: "Generators, mini excavators, compactors, loaders",
    whyTarget:
      "Early-stage project — opportunity to become primary supplier from day one.",
    metaTitle:
      "Generator & Equipment Rental in Tilal City Sharjah | Harma Machinery",
    metaDescription:
      "Construction equipment rental in Tilal City Sharjah. Harma Machinery supports early-phase residential construction.",
  },
  {
    id: "al-zahia-sharjah",
    name: "Al Zahia by Majid Al Futtaim",
    slug: "al-zahia-sharjah",
    region: "sharjah",
    emirate: "Sharjah",
    tier: 2,
    distance: "~48 km",
    markets: ["construction"],
    description:
      "Premium master-planned community with villas, townhouses, parks, retail, and schools in a garden setting.",
    equipmentDemand: "Generators, compactors, mini excavators",
    whyTarget:
      "Premium Sharjah community with quality developer and reliable payments.",
    metaTitle:
      "Generator & Equipment Rental in Al Zahia Sharjah | Harma Machinery",
    metaDescription:
      "Equipment rental in Al Zahia Sharjah. Harma Machinery supports premium community construction.",
  },
  {
    id: "sharjah-sustainable-city",
    name: "Sharjah Sustainable City",
    slug: "sharjah-sustainable-city",
    region: "sharjah",
    emirate: "Sharjah",
    tier: 3,
    distance: "~40 km",
    markets: ["construction"],
    description:
      "Eco-friendly residential development with solar-powered villas and sustainable infrastructure using unique construction methods.",
    equipmentDemand: "Generators (temporary during build), small excavators",
    whyTarget:
      "Growing green construction trend in UAE — niche opportunity.",
    metaTitle:
      "Generator & Equipment Rental for Sharjah Sustainable City | Harma Machinery",
    metaDescription:
      "Equipment rental for Sharjah Sustainable City. Harma Machinery provides eco-conscious construction support.",
  },
  {
    id: "muwaileh-sharjah",
    name: "Muwaileh / University City",
    slug: "muwaileh-sharjah",
    region: "sharjah",
    emirate: "Sharjah",
    tier: 3,
    distance: "~48 km",
    markets: ["construction"],
    description:
      "Rapidly developing area with new residential towers, retail, university campus expansions, and student housing construction.",
    equipmentDemand: "Generators, boom lifts, forklifts, concrete pumps",
    whyTarget:
      "Fast-growing urban area with continuous housing and campus construction demand.",
    metaTitle:
      "Generator & Equipment Rental in Muwaileh Sharjah | Harma Machinery",
    metaDescription:
      "Construction equipment rental in Muwaileh, Sharjah. Harma Machinery provides generators & machinery for university district projects.",
  },
  {
    id: "sharjah-events",
    name: "Sharjah Event Venues",
    slug: "sharjah-events",
    region: "sharjah",
    emirate: "Sharjah",
    tier: 3,
    distance: "~45 km",
    markets: ["events"],
    description:
      "Sharjah Light Festival, Book Fair (3rd largest in world), Sharjah Expo Centre events, and heritage area festivals requiring temporary power.",
    equipmentDemand: "Generators (50–200 kVA), light towers",
    whyTarget:
      "Major annual events with predictable, recurring demand.",
    metaTitle:
      "Generator Rental for Sharjah Events | Harma Machinery",
    metaDescription:
      "Generator rental for Sharjah festivals, exhibitions & events. Harma Machinery delivers reliable event power.",
  },

  // ────────────────────────────────────────────────────────────────
  //  AJMAN
  // ────────────────────────────────────────────────────────────────
  {
    id: "ajman-uptown",
    name: "Ajman Uptown / Al Ameera Village",
    slug: "ajman-uptown",
    region: "ajman",
    emirate: "Ajman",
    tier: 3,
    distance: "~58 km",
    markets: ["construction"],
    description:
      "Major residential developments in Ajman's new districts with affordable housing projects attracting regional investors.",
    equipmentDemand:
      "Generators, excavators, compactors, concrete mixers",
    whyTarget:
      "Budget construction market that values competitive rental rates.",
    metaTitle:
      "Generator & Equipment Rental in Ajman Uptown | Harma Machinery",
    metaDescription:
      "Construction equipment rental in Ajman. Harma Machinery provides competitive rates on generators & machinery.",
  },
  {
    id: "al-zorah-ajman",
    name: "Al Zorah Ajman",
    slug: "al-zorah-ajman",
    region: "ajman",
    emirate: "Ajman",
    tier: 3,
    distance: "~60 km",
    markets: ["construction", "hospitality"],
    description:
      "Luxury tourism and residential development with hotels, villas, golf course, and mangrove-front properties.",
    equipmentDemand: "Generators, boom lifts, small cranes",
    whyTarget:
      "Premium development with reliable developer payment cycles.",
    metaTitle:
      "Generator & Equipment Rental for Al Zorah Ajman | Harma Machinery",
    metaDescription:
      "Equipment rental for Al Zorah luxury development in Ajman. Harma Machinery serves resort and villa construction.",
  },
  {
    id: "ajman-industrial",
    name: "Ajman Industrial Area",
    slug: "ajman-industrial",
    region: "ajman",
    emirate: "Ajman",
    tier: 3,
    distance: "~55 km",
    markets: ["construction", "industrial"],
    description:
      "Growing industrial zone with factories, workshops, furniture manufacturing, and food processing facilities.",
    equipmentDemand: "Generators (100–300 kVA), forklifts",
    whyTarget:
      "Industrial clients need long-term generator rentals — steady recurring revenue.",
    metaTitle:
      "Generator & Equipment Rental in Ajman Industrial Area | Harma Machinery",
    metaDescription:
      "Industrial generator & equipment rental in Ajman. Harma Machinery provides long-term rental solutions.",
  },
  {
    id: "emirates-city-ajman",
    name: "Emirates City Ajman",
    slug: "emirates-city-ajman",
    region: "ajman",
    emirate: "Ajman",
    tier: 3,
    distance: "~57 km",
    markets: ["construction"],
    description:
      "Mixed-use residential and commercial towers with ongoing construction and new phase launches attracting budget-conscious buyers.",
    equipmentDemand: "Tower cranes, generators, concrete pumps",
    whyTarget:
      "Budget construction market with less competition from premium equipment suppliers.",
    metaTitle:
      "Generator & Equipment Rental for Emirates City Ajman | Harma Machinery",
    metaDescription:
      "Equipment rental for Emirates City Ajman construction. Harma Machinery provides competitive generator & machinery rental.",
  },

  // ────────────────────────────────────────────────────────────────
  //  AL AIN
  // ────────────────────────────────────────────────────────────────
  {
    id: "al-ain-city",
    name: "Al Ain City Center",
    slug: "al-ain-city",
    region: "al-ain",
    emirate: "Abu Dhabi",
    tier: 3,
    distance: "~110 km",
    markets: ["construction", "events"],
    description:
      "New malls, hotels, and commercial projects in Al Ain proper. Al Ain Convention Centre developments, Hili and Al Jimi district expansions.",
    equipmentDemand: "Generators, cranes, excavators, lifts",
    whyTarget:
      "Less competition from Dubai suppliers with direct highway access via E66.",
    metaTitle:
      "Generator & Equipment Rental in Al Ain | Harma Machinery",
    metaDescription:
      "Construction equipment & generator rental in Al Ain. Harma Machinery delivers directly via Dubai-Al Ain Road.",
  },
  {
    id: "al-ain-industrial",
    name: "Al Ain Industrial City",
    slug: "al-ain-industrial",
    region: "al-ain",
    emirate: "Abu Dhabi",
    tier: 3,
    distance: "~105 km",
    markets: ["construction", "industrial"],
    description:
      "Abu Dhabi government-backed industrial zone expansion with new factories, food processing plants, and logistics facilities.",
    equipmentDemand:
      "Heavy generators (200–500 kVA), forklifts, excavators",
    whyTarget:
      "Government-backed projects with reliable payments and long contracts.",
    metaTitle:
      "Generator & Equipment Rental in Al Ain Industrial City | Harma Machinery",
    metaDescription:
      "Industrial equipment rental in Al Ain. Harma Machinery delivers heavy generators & machinery via E66.",
  },
  {
    id: "al-ain-residential",
    name: "Al Ain New Residential Areas",
    slug: "al-ain-residential",
    region: "al-ain",
    emirate: "Abu Dhabi",
    tier: 3,
    distance: "~100 km",
    markets: ["construction", "government"],
    description:
      "Government housing projects for Emirati nationals in Al Ain suburbs — affordable housing compounds, schools, mosques, and community infrastructure.",
    equipmentDemand: "Generators, compactors, excavators, dump trucks",
    whyTarget:
      "Government-funded with reliable payment — less price-sensitive.",
    metaTitle:
      "Generator & Equipment Rental for Al Ain Residential Projects | Harma Machinery",
    metaDescription:
      "Equipment rental for Al Ain government housing projects. Harma Machinery supports residential community construction.",
  },
  {
    id: "al-ain-farms-events",
    name: "Al Ain Farms & Events",
    slug: "al-ain-farms-events",
    region: "al-ain",
    emirate: "Abu Dhabi",
    tier: 3,
    distance: "~100–120 km",
    markets: ["events", "agriculture"],
    description:
      "Famous for date plantations, farms, agricultural festivals, heritage gatherings, and desert camp areas including Al Wagan and Remah.",
    equipmentDemand: "Generators (20–100 kVA)",
    whyTarget:
      "Similar farm/event culture to Al Lisaili with limited local generator suppliers.",
    metaTitle:
      "Generator Rental for Al Ain Farm Events & Agriculture | Harma Machinery",
    metaDescription:
      "Generator rental for Al Ain farm events and agricultural operations. Harma Machinery delivers via Dubai-Al Ain Road.",
  },
  {
    id: "hazza-stadium-al-ain",
    name: "Hazza Bin Zayed Stadium Area",
    slug: "hazza-stadium-al-ain",
    region: "al-ain",
    emirate: "Abu Dhabi",
    tier: 3,
    distance: "~110 km",
    markets: ["events", "sports"],
    description:
      "Major sports venue with football matches, concerts, and corporate events. Adjacent areas undergoing development with retail and hospitality construction.",
    equipmentDemand: "Generators (100–500 kVA) for events",
    whyTarget:
      "High-profile events with premium equipment rental rates.",
    metaTitle:
      "Generator Rental for Hazza Bin Zayed Stadium Events | Harma Machinery",
    metaDescription:
      "Generator rental for Hazza Bin Zayed Stadium events in Al Ain. Harma Machinery provides high-capacity event power.",
  },

  // ────────────────────────────────────────────────────────────────
  //  RAS AL KHAIMAH
  // ────────────────────────────────────────────────────────────────
  {
    id: "wynn-resort-rak",
    name: "Wynn Resort & Al Marjan Island",
    slug: "wynn-resort-rak",
    region: "rak",
    emirate: "Ras Al Khaimah",
    tier: 3,
    distance: "~140 km",
    markets: ["construction", "hospitality"],
    description:
      "Wynn Resort under construction — first casino resort in the UAE region — plus multiple 5-star hotel projects on Al Marjan Island man-made islands.",
    equipmentDemand:
      "Tower cranes, heavy generators (500+ kVA), concrete equipment, marine construction support",
    whyTarget:
      "Massive spend — contractors need reliable equipment supply for years.",
    metaTitle:
      "Generator & Equipment Rental for Wynn Resort RAK | Harma Machinery",
    metaDescription:
      "Heavy equipment & generator rental for Wynn Resort and Al Marjan Island construction. Harma Machinery serves RAK mega projects.",
  },
  {
    id: "rak-industrial",
    name: "RAK Industrial & Free Zone",
    slug: "rak-industrial",
    region: "rak",
    emirate: "Ras Al Khaimah",
    tier: 3,
    distance: "~130 km",
    markets: ["construction", "industrial"],
    description:
      "Ceramics, pharma, and building materials factories with new industrial facility construction.",
    equipmentDemand: "Generators (100–500 kVA), forklifts, excavators",
    whyTarget:
      "Industrial clients rent for long periods — steady recurring revenue.",
    metaTitle:
      "Generator & Equipment Rental in RAK Industrial Zone | Harma Machinery",
    metaDescription:
      "Industrial equipment rental in Ras Al Khaimah. Harma Machinery provides generators & machinery for factory construction.",
  },
  {
    id: "jebel-jais-rak",
    name: "Jebel Jais Tourism Projects",
    slug: "jebel-jais-rak",
    region: "rak",
    emirate: "Ras Al Khaimah",
    tier: 3,
    distance: "~150 km",
    markets: ["construction", "hospitality"],
    description:
      "Mountain tourism infrastructure with hotels, adventure tourism facilities, and viewing platforms. Remote location with no grid power during construction.",
    equipmentDemand:
      "Generators essential (50–200 kVA), small machinery",
    whyTarget:
      "Remote sites where generator delivery is challenging — Harma fills a gap.",
    metaTitle:
      "Generator Rental for Jebel Jais Construction Projects | Harma Machinery",
    metaDescription:
      "Generator rental for Jebel Jais mountain tourism construction. Harma Machinery delivers to remote RAK locations.",
  },
  {
    id: "rak-residential",
    name: "RAK New Residential Areas",
    slug: "rak-residential",
    region: "rak",
    emirate: "Ras Al Khaimah",
    tier: 3,
    distance: "~135 km",
    markets: ["construction"],
    description:
      "New residential communities in RAK attracting Dubai/Sharjah overflow buyers with affordable waterfront and mountain-view properties.",
    equipmentDemand: "Generators, excavators, compactors",
    whyTarget:
      "Growing residential market with limited local equipment suppliers.",
    metaTitle:
      "Generator & Equipment Rental for RAK Residential Projects | Harma Machinery",
    metaDescription:
      "Construction equipment rental in Ras Al Khaimah. Harma Machinery supports residential development projects.",
  },

  // ────────────────────────────────────────────────────────────────
  //  FUJAIRAH
  // ────────────────────────────────────────────────────────────────
  {
    id: "fujairah-port",
    name: "Fujairah Port & Industrial",
    slug: "fujairah-port",
    region: "fujairah",
    emirate: "Fujairah",
    tier: 3,
    distance: "~150 km",
    markets: ["construction", "industrial"],
    description:
      "Major oil storage and bunkering port operations with port expansion, new terminal construction, and industrial zone developments.",
    equipmentDemand:
      "Heavy generators (300–1000 kVA), cranes, excavators",
    whyTarget:
      "Large projects, long rental durations, and premium rates.",
    metaTitle:
      "Generator & Equipment Rental in Fujairah Port | Harma Machinery",
    metaDescription:
      "Heavy generator & equipment rental for Fujairah Port industrial projects. Harma Machinery serves cross-emirate needs.",
  },
  {
    id: "fujairah-tourism",
    name: "Fujairah Tourism & Hotels",
    slug: "fujairah-tourism",
    region: "fujairah",
    emirate: "Fujairah",
    tier: 3,
    distance: "~140–160 km",
    markets: ["construction", "hospitality", "events"],
    description:
      "Beach resort developments along the east coast in Al Aqah, Dibba, Khor Fakkan, and the growing trend of beach weddings and corporate retreats.",
    equipmentDemand:
      "Generators (20–100 kVA silent units), small-medium machinery",
    whyTarget:
      "Limited local suppliers and mandatory generator needs for beach events.",
    metaTitle:
      "Generator Rental for Fujairah Tourism & Beach Events | Harma Machinery",
    metaDescription:
      "Generator rental for Fujairah beach events and hotel construction. Harma Machinery delivers silent generators.",
  },
  {
    id: "fujairah-beach-events",
    name: "Fujairah Beach Events & Weddings",
    slug: "fujairah-beach-events",
    region: "fujairah",
    emirate: "Fujairah",
    tier: 3,
    distance: "~140 km",
    markets: ["events"],
    description:
      "Growing trend of beach weddings, corporate retreats on the east coast, and seasonal beach festivals in Al Aqah and Dibba areas.",
    equipmentDemand: "Silent generators (20–60 kVA), event lighting",
    whyTarget:
      "Premium beach event market with limited local equipment supply.",
    metaTitle:
      "Generator Rental for Fujairah Beach Events | Harma Machinery",
    metaDescription:
      "Rent silent generators for Fujairah beach weddings & events. Harma Machinery delivers to the east coast.",
  },

  // ────────────────────────────────────────────────────────────────
  //  UMM AL QUWAIN
  // ────────────────────────────────────────────────────────────────
  {
    id: "uaq-marina",
    name: "UAQ Marina & Residential",
    slug: "uaq-marina",
    region: "uaq",
    emirate: "Umm Al Quwain",
    tier: 3,
    distance: "~80 km",
    markets: ["construction"],
    description:
      "Waterfront residential and marina construction with new developments attracting Dubai/Sharjah overflow buyers.",
    equipmentDemand: "Generators, excavators, compactors",
    whyTarget:
      "Growing emirate with limited local machine rental competition.",
    metaTitle:
      "Generator & Equipment Rental in Umm Al Quwain | Harma Machinery",
    metaDescription:
      "Construction equipment rental in UAQ. Harma Machinery serves marina and residential construction projects.",
  },
  {
    id: "uaq-free-zone",
    name: "UAQ Industrial Free Zone",
    slug: "uaq-free-zone",
    region: "uaq",
    emirate: "Umm Al Quwain",
    tier: 3,
    distance: "~75 km",
    markets: ["construction", "industrial"],
    description:
      "Expanding free zone with new factory and warehouse construction plus recycling and waste management facilities.",
    equipmentDemand: "Generators, forklifts, small excavators",
    whyTarget:
      "Free zone incentives attracting new businesses — new builds mean new rental demand.",
    metaTitle:
      "Generator & Equipment Rental in UAQ Free Zone | Harma Machinery",
    metaDescription:
      "Industrial equipment rental in UAQ Free Zone. Harma Machinery supports factory and warehouse construction.",
  },
  {
    id: "uaq-coastal-events",
    name: "UAQ Coastal Events & Camping",
    slug: "uaq-coastal-events",
    region: "uaq",
    emirate: "Umm Al Quwain",
    tier: 3,
    distance: "~80 km",
    markets: ["events"],
    description:
      "Growing coastal camping, kite surfing events, and beach festivals along UAQ's undeveloped coastline.",
    equipmentDemand: "Generators (20–60 kVA)",
    whyTarget:
      "Emerging event destination with zero local generator suppliers.",
    metaTitle:
      "Generator Rental for UAQ Coastal Events | Harma Machinery",
    metaDescription:
      "Generator rental for UAQ beach and coastal events. Harma Machinery delivers to Umm Al Quwain.",
  },
];

// ────────────────────────────────────────────────────────────────
//  HELPER FUNCTIONS
// ────────────────────────────────────────────────────────────────

/** Featured locations for the homepage */
export const featuredLocations = dubaiLocations.filter((loc) =>
  [
    "al-lisaili-farms",
    "dubai-south",
    "the-valley-emaar",
    "damac-hills-2",
    "al-awir",
    "expo-city-dubai",
    "global-village",
    "margham",
  ].includes(loc.id)
);

/** Group locations by region */
export const locationsByRegion = {
  premium: dubaiLocations.filter((loc) => loc.region === "premium"),
  residential: dubaiLocations.filter((loc) => loc.region === "residential"),
  commercial: dubaiLocations.filter((loc) => loc.region === "commercial"),
  industrial: dubaiLocations.filter((loc) => loc.region === "industrial"),
  events: dubaiLocations.filter((loc) => loc.region === "events"),
  desert: dubaiLocations.filter((loc) => loc.region === "desert"),
  infrastructure: dubaiLocations.filter(
    (loc) => loc.region === "infrastructure"
  ),
  sharjah: dubaiLocations.filter((loc) => loc.region === "sharjah"),
  ajman: dubaiLocations.filter((loc) => loc.region === "ajman"),
  "al-ain": dubaiLocations.filter((loc) => loc.region === "al-ain"),
  rak: dubaiLocations.filter((loc) => loc.region === "rak"),
  fujairah: dubaiLocations.filter((loc) => loc.region === "fujairah"),
  uaq: dubaiLocations.filter((loc) => loc.region === "uaq"),
};

/** Locations grouped by emirate */
export const locationsByEmirate = {
  Dubai: dubaiLocations.filter((loc) => loc.emirate === "Dubai"),
  Sharjah: dubaiLocations.filter((loc) => loc.emirate === "Sharjah"),
  Ajman: dubaiLocations.filter((loc) => loc.emirate === "Ajman"),
  "Abu Dhabi": dubaiLocations.filter((loc) => loc.emirate === "Abu Dhabi"),
  "Ras Al Khaimah": dubaiLocations.filter(
    (loc) => loc.emirate === "Ras Al Khaimah"
  ),
  Fujairah: dubaiLocations.filter((loc) => loc.emirate === "Fujairah"),
  "Umm Al Quwain": dubaiLocations.filter(
    (loc) => loc.emirate === "Umm Al Quwain"
  ),
};

/** Locations grouped by tier */
export const locationsByTier = {
  1: dubaiLocations.filter((loc) => loc.tier === 1),
  2: dubaiLocations.filter((loc) => loc.tier === 2),
  3: dubaiLocations.filter((loc) => loc.tier === 3),
};

/** Get a single location by slug */
export function getLocationBySlug(slug: string): Location | undefined {
  return dubaiLocations.find((loc) => loc.slug === slug);
}

/** Get related locations (same region or emirate, excluding self) */
export function getRelatedLocations(
  currentSlug: string,
  limit = 6
): Location[] {
  const current = getLocationBySlug(currentSlug);
  if (!current) return dubaiLocations.slice(0, limit);

  const sameRegion = dubaiLocations.filter(
    (loc) => loc.region === current.region && loc.slug !== currentSlug
  );
  const sameEmirate = dubaiLocations.filter(
    (loc) =>
      loc.emirate === current.emirate &&
      loc.region !== current.region &&
      loc.slug !== currentSlug
  );

  return [...sameRegion, ...sameEmirate].slice(0, limit);
}

/** Get locations by market type */
export function getLocationsByMarket(market: MarketType): Location[] {
  return dubaiLocations.filter((loc) => loc.markets.includes(market));
}

/** Delivery zone classification */
export const deliveryZones = {
  zoneA: {
    label: "Zone A — Free Delivery",
    range: "0–15 km",
    fee: "Free",
    minRental: "1 day",
    locations: dubaiLocations.filter((loc) => {
      const d = parseInt(loc.distance.replace(/[^0-9]/g, ""));
      return !isNaN(d) && d <= 15;
    }),
  },
  zoneB: {
    label: "Zone B — Standard Delivery",
    range: "15–30 km",
    fee: "AED 150–300",
    minRental: "1 day",
    locations: dubaiLocations.filter((loc) => {
      const d = parseInt(loc.distance.replace(/[^0-9]/g, ""));
      return !isNaN(d) && d > 15 && d <= 30;
    }),
  },
  zoneC: {
    label: "Zone C — Premium Delivery",
    range: "30–50 km",
    fee: "AED 300–500",
    minRental: "3 days",
    locations: dubaiLocations.filter((loc) => {
      const d = parseInt(loc.distance.replace(/[^0-9]/g, ""));
      return !isNaN(d) && d > 30 && d <= 50;
    }),
  },
  zoneCrossEmirate: {
    label: "Cross-Emirate Delivery",
    range: "50+ km",
    fee: "AED 500–1200",
    minRental: "1 week",
    locations: dubaiLocations.filter((loc) => loc.emirate !== "Dubai"),
  },
};

/** Location stats for the locations page */
export const locationStats = [
  { value: "80+", label: "Service Areas" },
  { value: "7", label: "Emirates Covered" },
  { value: "24/7", label: "Emergency Support" },
  { value: "Same Day", label: "Delivery Available" },
];
