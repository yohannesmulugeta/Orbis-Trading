const commons = (file: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${file}`;

export const webImages = {
  // ORBIS-owned/local project assets should lead the corporate story wherever available.
  homeHero: "/assets/orbis-building.jpg",
  companyBuilding: "/assets/orbis-building.jpg",
  companyShowroom: "/assets/orbis-showroom.jpg",
  heritageMercedes: "/assets/orbis-legacy.jpg",

  // Vehicle imagery remains curated from Wikimedia Commons until ORBIS supplies
  // an approved current model photography set.
  mercedesSprinter: commons("Benz_VS30_Sprinter.png"),
  mercedesTruck: commons("Mercedes-Benz_Actros.jpg"),
  mercedesPassenger: commons("2023_Mercedes_E_Class.jpg"),
  renaultDuster: commons("2024_Renault_Duster_1.3_TCe_Turbo_Iconic.jpg"),
  renaultKangoo: commons("2022_Renault_Kangoo_1.6_SCe_Zen_(Argentina).jpg"),
  mitsubishiFuso: commons("2015_Mitsubishi_Fuso_Canter.jpg"),
  mitsubishiFusoHeavy: commons("Mitsubishi-Fuso-Super-Great.jpg"),

  // Prefer local ORBIS facility imagery for service, parts and assembly stories.
  automotiveWorkshop: "/assets/bus-workshop.jpg",
  serviceWorkshop: "/assets/bus-workshop.jpg",
  partsWorkshop: "/assets/bosch-parts.jpg",
  partsDetail: commons(
    "Car_parts_and_tools_scattered_across_a_workshop_floor_during_a_maintenance_session.jpg",
  ),

  ethiopianBus: "/assets/orbis-bus.jpg",
  busAssembly: "/assets/bus-workshop.jpg",

  // Ethiopia-specific coffee imagery. The Guji and Yirgacheffe files are
  // documentary Wikimedia Commons images rather than generic stock photography.
  ethiopianCoffee: commons("Specialty_coffee_originated_from_ethiopia.jpg"),
  coffeeGuji: commons("Specialty_coffee_originated_from_ethiopia.jpg"),
  coffeeYirgacheffe: commons("Traditional_Ethiopian_Coffee_Roasting.jpg"),
  coffeeCeremony: commons(
    "Secretary_Tillerson_Attends_a_Traditional_Ethiopian_Coffee_Ceremony_(26834928728).jpg",
  ),
  greenCoffee: commons("Green_Coffee_Beans_(4075921494).jpg"),
  oilseeds: commons("Sesame_seeds.JPG"),
  pulses: commons("Chickpeas.JPG"),

  ethiopianRoad: "/assets/ethiopian-road.jpg",

  // Backward-compatible aliases used by existing components.
  orbisShowroom: "/assets/orbis-showroom.jpg",
  orbisBuilding: "/assets/orbis-building.jpg",
};
