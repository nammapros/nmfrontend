export interface CategoryFaq {
  question: string;
  answer: string;
}

export const CATEGORY_GENERAL_FAQS: Record<string, CategoryFaq[]> = {
  ac: [
    {
      question: "How often should I get my AC serviced?",
      answer: "We recommend getting your air conditioner serviced at least twice a year—ideally before summer starts for intensive cooling performance and after the peak season to clear out accumulated dust, moisture, and debris.",
    },
    {
      question: "What is included in routine AC servicing?",
      answer: "Routine servicing covers comprehensive indoor air filter cleaning, cooling coil wash, condensate drain tray and pipe unclogging, outdoor unit check (if accessible), electrical component inspection, and operating pressure check.",
    },
    {
      question: "How do I know if my AC needs gas refilling or has a refrigerant leak?",
      answer: "Common warning signs include weak or warm airflow despite the compressor running, ice accumulation on indoor cooling coils or copper tubing, faint hissing noises, or sudden spikes in electricity consumption. Our technicians check operating pressure and conduct leak tests before recommending gas top-up.",
    },
    {
      question: "Do you provide a warranty on AC repair and spare parts?",
      answer: "Yes, NammaPros provides a 30-day service warranty on technician workmanship and up to a 90-day replacement warranty on all genuine spare parts supplied.",
    },
    {
      question: "Are your AC technicians certified and background-verified?",
      answer: "All NammaPros technicians are background-verified, trained across all major brands (Daikin, Voltas, LG, Samsung, Blue Star, Carrier, Lloyd, etc.), and equipped with professional pressure cleaning and diagnostic tools.",
    },
  ],
  "washing-machine": [
    {
      question: "What types and brands of washing machines do you service?",
      answer: "We service top-load fully automatic, front-load fully automatic, semi-automatic, and washer-dryer combos across all major brands including IFB, LG, Samsung, Bosch, Whirlpool, and Haier.",
    },
    {
      question: "Why is my washing machine making loud noises or vibrating excessively during spin cycles?",
      answer: "Loud rattling or heavy vibration usually points to worn-out drum bearings, weakened shock absorbers/suspension springs, an unbalanced drum load, or unlevel flooring. Our technician will diagnose and rebalance or replace the worn components.",
    },
    {
      question: "What should I do if water is not draining from the drum?",
      answer: "Drainage failures are commonly caused by a clogged lint/coin filter, kinked drain pipe, debris trapped in the drain hose, or a faulty drain pump motor. We recommend switching off power and scheduling an inspection.",
    },
    {
      question: "Are replacement spare parts genuine and covered under warranty?",
      answer: "Yes, we exclusively install OEM or high-grade compatible parts (drain pumps, inlet valves, belts, drive motors, pressure sensors) backed by a 90-day parts warranty and a 30-day service guarantee.",
    },
    {
      question: "How often should I get a washing machine drum deep-clean service?",
      answer: "A professional tub deep-clean and descaling is recommended every 6 to 12 months to eliminate detergent sludge, limescale deposits, mildew, and odor-causing bacteria.",
    },
  ],
  refrigerator: [
    {
      question: "Why is my refrigerator running but not cooling effectively?",
      answer: "Weak cooling is typically caused by dirty condenser coils, a malfunctioning evaporator fan, defrost thermostat/heater failure, blocked air vents, or low refrigerant gas levels. A doorstep diagnostic check will determine the exact cause.",
    },
    {
      question: "How long does a refrigerator doorstep repair or gas charging take?",
      answer: "Most standard refrigerator repairs, sensor/thermostat replacements, and gas charging procedures are completed within 60 to 90 minutes right at your home.",
    },
    {
      question: "Do you repair single-door, double-door, and side-by-side refrigerators?",
      answer: "Yes, our certified technicians repair all styles including single door, double door, frost-free, multi-door, and inverter side-by-side refrigerators from Samsung, LG, Whirlpool, Godrej, Haier, Bosch, and more.",
    },
    {
      question: "What causes water to pool inside the fridge or leak onto the floor?",
      answer: "Water pooling inside or underneath is usually due to a clogged defrost drain pipe, damaged drain pan, or worn-out magnetic door gaskets that allow warm, humid room air to enter and condense.",
    },
    {
      question: "Is there a warranty on compressor and cooling repairs?",
      answer: "All cooling repairs and labor come with a 30-day service warranty, and replacement components (relays, thermostats, capacitors, fan motors) carry up to 90 days of parts warranty.",
    },
  ],
  tv: [
    {
      question: "What screen sizes and TV technologies do you install and repair?",
      answer: "We service LED, OLED, QLED, Smart TV, Android TV, 4K UHD, and curved displays ranging from 24 inches to 85+ inches across Sony, Samsung, LG, Mi, OnePlus, TCL, and other top brands.",
    },
    {
      question: "Can a physically cracked or shattered TV display panel be repaired?",
      answer: "A cracked or internally shattered glass panel cannot be repaired and requires replacement. However, for issues like vertical lines, color distortions, black screens, or no backlight with intact glass, internal display boards or LED strips can often be economically repaired.",
    },
    {
      question: "What is included in your professional TV wall mounting service?",
      answer: "Our wall mounting service includes bracket alignment and drilling into brick/concrete/wood, secure TV mounting, concealed wire routing, viewing level calibration, and HDMI/soundbar connection testing.",
    },
    {
      question: "Why does my TV have sound but a completely dark screen?",
      answer: "Sound with no picture usually indicates backlight LED strip failure, a faulty T-Con board, or an issue with the power supply board. Our technician will test each circuit board at your home.",
    },
    {
      question: "How quickly can a TV technician visit my home?",
      answer: "We offer same-day and scheduled appointments. In most service areas, a technician can visit within 2 to 4 hours of booking confirmation.",
    },
  ],
  geyser: [
    {
      question: "Why is my geyser tripping the MCB or not heating water at all?",
      answer: "Tripping the breaker or failure to heat is almost always caused by a burned-out heating element, faulty thermostat, mineral scale bridging, or an internal short circuit. Our technician will test electrical safety and replace the damaged part.",
    },
    {
      question: "Do you service both instant and storage geysers?",
      answer: "Yes, we install, service, and repair all models of instant water heaters (3L–6L), storage geysers (10L–50L), and gas geysers from brands like AO Smith, Racold, Havells, Bajaj, Crompton, and V-Guard.",
    },
    {
      question: "What causes water leakage from the geyser body or pipes?",
      answer: "Leaks typically originate from deteriorated inlet/outlet braided pipe washers, pressure relief valve venting, or internal tank corrosion. Minor leaks can be fixed by replacing fittings, while severe tank corrosion may require tank replacement.",
    },
    {
      question: "Why is geyser descaling important in hard water areas?",
      answer: "Hard water deposits heavy calcium/magnesium scale onto the heating element and tank walls, reducing heating efficiency, doubling electricity bills, and causing element burnout. Annual descaling restores rapid heating.",
    },
    {
      question: "Are your technicians equipped to ensure electrical and plumbing safety?",
      answer: "Yes, our technicians carry safety gear, multi-meters, and genuine replacement elements/thermostats to ensure zero shock hazards and completely watertight plumbing connections.",
    },
  ],
  "water-purifier": [
    {
      question: "How often should water purifier filters and RO membranes be replaced?",
      answer: "Sediment and carbon pre-filters should be replaced every 6 to 9 months, while the RO membrane typically lasts 12 to 24 months depending on raw water TDS levels and daily water consumption.",
    },
    {
      question: "Do you test water TDS levels before and after service?",
      answer: "Yes, our technician measures input water TDS, output purified water TDS, and flow rate using calibrated digital TDS meters to ensure safe and balanced drinking water.",
    },
    {
      question: "Which water purifier technologies and brands do you service?",
      answer: "We service RO, UV, UF, Copper, Alkaline, and Mineralizer purifiers from Kent, Aquaguard (Eureka Forbes), Pureit, Livpure, Blue Star, Havells, and other major brands.",
    },
    {
      question: "Why does purified water taste bitter, sour, or smell strange?",
      answer: "Unpleasant taste or odor indicates exhausted active carbon filters, organic biofilm inside the storage tank, or membrane degradation. A thorough tank sanitization and filter replacement will immediately restore sweet, fresh taste.",
    },
    {
      question: "Are replacement filters food-grade and certified safe?",
      answer: "All filters, carbon cartridges, and RO membranes installed by NammaPros are 100% food-grade certified, leak-tested, and covered by a 90-day warranty.",
    },
  ],
  "microwave-oven": [
    {
      question: "What types of microwave ovens do you repair?",
      answer: "We service Solo, Grill, and Convection microwave ovens as well as built-in oven units from LG, Samsung, IFB, Panasonic, Morphy Richards, and Whirlpool.",
    },
    {
      question: "Why is the microwave running normally but food is not heating?",
      answer: "Lack of heating is commonly caused by a blown high-voltage diode, failed high-voltage capacitor, damaged door interlock switch, or defective magnetron. Our technician will safely test and replace the faulty component.",
    },
    {
      question: "What should I do if sparks, flashes, or a burning smell occur inside?",
      answer: "Turn off and unplug the appliance immediately. Sparks are typically caused by a burnt mica/waveguide cover, food residue splatter, or damaged rack enamel. Our technician will inspect the cavity and install a fresh waveguide cover.",
    },
    {
      question: "Why is the glass turntable plate not rotating?",
      answer: "A stationary turntable usually means a stripped turntable drive coupler, damaged roller support ring, or a burned-out synchronous turntable motor, all of which can be repaired quickly during a doorstep visit.",
    },
    {
      question: "Is it safe to repair high-voltage microwave components at home?",
      answer: "Yes, our technicians follow strict safety procedures including discharging the high-voltage capacitor safely before testing, ensuring no risk to your home or family.",
    },
  ],
  dishwasher: [
    {
      question: "Why does my dishwasher leave a white cloudy film or spots on glassware?",
      answer: "Cloudy residue is usually caused by hard water mineral deposits, insufficient dishwasher regeneration salt, depleted rinse aid, or partially blocked spray arm nozzles.",
    },
    {
      question: "What causes standing water to remain at the bottom of the dishwasher after a wash?",
      answer: "Water pooling at the bottom indicates a clogged fine mesh filter, kinked drain hose, debris trapped in the drain sump, or an obstructed drain pump impeller. Our technician will clear the blockage and run a test drain cycle.",
    },
    {
      question: "What dishwasher brands and configurations do you repair?",
      answer: "We service freestanding, semi-integrated, and fully integrated built-in dishwashers from Bosch, Siemens, LG, IFB, Samsung, Faber, Voltas Beko, and others.",
    },
    {
      question: "How often should a dishwasher be professionally descaled and serviced?",
      answer: "We recommend a professional descaling and sanitization every 4 to 6 months to remove grease accumulation, clear spray arm holes, and eliminate hidden odors.",
    },
    {
      question: "Do you supply genuine spare parts for dishwashers?",
      answer: "Yes, we supply and install genuine inlet solenoid valves, heating coils, wash/drain pumps, door gaskets, and spray arms with a 90-day warranty.",
    },
  ],
  cctv: [
    {
      question: "What types of CCTV camera systems do you install and service?",
      answer: "We install and repair Analog HD, IP Network, Wireless Wi-Fi, Dome, Bullet, PTZ, and color night-vision cameras with DVR/NVR setups from Hikvision, CP Plus, Dahua, and other leading manufacturers.",
    },
    {
      question: "Can I monitor my CCTV cameras remotely on my smartphone?",
      answer: "Yes, our technician will configure secure remote viewing, live multi-channel streaming, and motion detection alert notifications on your Android and iOS phones or computers.",
    },
    {
      question: "Why is a camera feed black, grainy, or displaying 'No Video'?",
      answer: "Video loss or poor picture quality usually stems from a failing power supply adapter, loose BNC/RJ45 connectors, damaged transmission cable, or a faulty DVR/NVR channel. Our technician will test and restore signal integrity.",
    },
    {
      question: "What is included in a CCTV installation service?",
      answer: "Our installation includes camera positioning at high-coverage angles, tidy cable routing with conduits/casings, power supply connectivity, DVR/NVR hard drive setup, recording configuration, and mobile app setup.",
    },
    {
      question: "Do you offer a warranty on CCTV installation and equipment?",
      answer: "Yes, we provide a 30-day service warranty on installation craftsmanship and 1 to 2 years manufacturer warranty on brand-new equipment.",
    },
  ],
  chimney: [
    {
      question: "How often should a kitchen chimney be professionally deep-cleaned?",
      answer: "For Indian cooking involving regular spices and oil, we recommend professional deep cleaning every 3 to 4 months for baffle filter chimneys and every 5 to 6 months for filterless chimneys.",
    },
    {
      question: "What is the difference between basic filter cleaning and deep foam cleaning?",
      answer: "Basic cleaning washes external filters. Deep foam cleaning involves dismantling the baffle filters, oil collector tray, blower fan, and internal housing to degrease all surfaces using food-grade chemicals.",
    },
    {
      question: "Why has my kitchen chimney lost suction power?",
      answer: "Reduced suction is almost always caused by heavy oil and grease choking the blower fan blades, saturated filters, or an obstructed exhaust duct pipe. A deep foam clean restores original suction performance.",
    },
    {
      question: "Which kitchen chimney brands and models do you service?",
      answer: "We service wall-mounted, island, straight-line, and angular chimneys from Faber, Elica, Glen, Hindware, Kaff, Sunflame, Inalsa, and other top brands.",
    },
    {
      question: "Can you install, extend, or replace chimney exhaust duct pipes?",
      answer: "Yes, we supply and install flexible aluminum or rigid PVC duct pipes, drill neat wall core holes, and fit outdoor gravity louvers to prevent bird or pest entry.",
    },
  ],
  "water-tank-cleaning": [
    {
      question: "What is your scientific water tank cleaning process?",
      answer: "Our 6-stage scientific process includes: 1) Dewatering with submersible pumps, 2) Sludge and silt removal, 3) High-pressure rotary jet scrubbing of walls and floor, 4) Industrial vacuum suction, 5) Anti-bacterial spray, and 6) UV germicidal disinfection.",
    },
    {
      question: "Are the chemicals used safe for potable drinking water tanks?",
      answer: "Yes, we only use government-approved, non-toxic, eco-friendly, and odorless anti-bacterial agents that are 100% safe for drinking and household water storage.",
    },
    {
      question: "How long does a water tank cleaning service take?",
      answer: "A standard residential overhead tank (500L–1500L) takes about 45 to 60 minutes. Underground concrete sumps (3,000L–10,000L) take 1.5 to 3 hours depending on sediment accumulation.",
    },
    {
      question: "How frequently should overhead tanks and underground sumps be cleaned?",
      answer: "Health guidelines recommend cleaning overhead water tanks and underground sumps at least once every 6 months to prevent algae growth, sediment buildup, and bacterial contamination.",
    },
    {
      question: "Do you clean both plastic overhead tanks and underground concrete sumps?",
      answer: "Yes, we clean Sintex/plastic overhead tanks, stainless steel tanks, loft tanks, and underground concrete, tiled, or brick sumps for homes, villas, and apartments.",
    },
  ],
  "mosquito-net": [
    {
      question: "What types of mosquito net meshes and frame materials do you install?",
      answer: "We provide high-grade 304 stainless steel wire mesh, heavy-duty fiberglass mesh, and pleated polyester insect screens fitted in powder-coated aluminum frames color-matched to your windows.",
    },
    {
      question: "What opening mechanisms are available for windows and balcony doors?",
      answer: "We offer Velcro detachable nets, magnetic screen strips, openable hinged window frames, horizontal sliding frames, barrier-free pleated sliding doors, and roll-up roller screens.",
    },
    {
      question: "Will mosquito nets block air circulation or natural sunlight?",
      answer: "No, our premium meshes feature micro-weave apertures engineered to block tiny mosquitoes and insects while maintaining maximum natural ventilation and clear visibility.",
    },
    {
      question: "How do you guarantee a perfect fit for irregular window or door sizes?",
      answer: "A technician visits your home with measurement instruments to record precise dimensions for each opening before custom fabrication at our workshop.",
    },
    {
      question: "Do mosquito nets come with a warranty?",
      answer: "Yes, we provide up to 2 years warranty covering mesh durability, frame powder-coating, magnetic strips, and roller track mechanisms.",
    },
  ],
  sofa: [
    {
      question: "What is included in your sofa deep cleaning and shampooing service?",
      answer: "Our service includes deep dry vacuuming to eliminate dust mites and pet hair, targeted spot stain treatment, mechanized foam shampoo scrubbing, and high-power moisture extraction to remove deep-seated dirt.",
    },
    {
      question: "How long does the sofa take to dry after shampooing?",
      answer: "With our high-suction extraction equipment removing over 90% of moisture, fabric sofas typically dry completely within 3 to 5 hours with regular ceiling fan ventilation.",
    },
    {
      question: "Do you clean leather and leatherette sofas as well as fabric?",
      answer: "Yes, for leather and leatherette sofas we use specialized pH-balanced cleaners followed by a deep conditioning cream to nourish the material, prevent cracking, and restore a rich sheen.",
    },
    {
      question: "Can all stubborn stains and odors be removed?",
      answer: "Most food, beverage, dirt, and pet stains are completely removed. While old set-in chemical or dye stains may only lighten, our anti-bacterial sanitization destroys 99% of odor-causing bacteria and allergens.",
    },
    {
      question: "Are your cleaning solutions safe for kids, pets, and delicate upholstery?",
      answer: "Absolutely. We exclusively use certified eco-friendly, biodegradable, and non-toxic cleaning agents that are gentle on fabrics and completely safe for children and pets.",
    },
  ],
};

const DEFAULT_GENERAL_FAQS: CategoryFaq[] = [
  {
    question: "How do I book a verified service technician on NammaPros?",
    answer: "Simply select your required service option, choose a convenient date and time slot, and confirm your booking. Our customer support and assigned technician will follow up promptly.",
  },
  {
    question: "What is your service warranty policy?",
    answer: "We provide a comprehensive 30-day service warranty on technician workmanship and standard manufacturer or OEM warranty on any newly installed replacement spare parts.",
  },
  {
    question: "How are your service charges calculated?",
    answer: "We practice transparent, upfront pricing. The inspection and standard service fee is displayed before booking. If additional parts or repairs are needed, our technician provides a quotation for your approval before proceeding.",
  },
  {
    question: "Are all NammaPros service professionals verified?",
    answer: "Yes, every technician on our platform undergoes mandatory government identity checks, background verification, and skills assessment to ensure safe and dependable service.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major digital payment options including UPI (Google Pay, PhonePe, Paytm), credit/debit cards, net banking, and cash on service completion.",
  },
];

export function getCategoryGeneralFaqs(slug?: string, _categoryName?: string): CategoryFaq[] {
  if (!slug) return DEFAULT_GENERAL_FAQS.slice(0, 5);
  const normalized = slug.trim().toLowerCase();
  const matched = CATEGORY_GENERAL_FAQS[normalized];
  if (matched && matched.length > 0) {
    return matched.slice(0, 5);
  }
  return DEFAULT_GENERAL_FAQS.slice(0, 5);
}
