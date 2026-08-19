const commons = (file: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${file}`;

export const webImages = {
  // ORBIS-owned/local project assets should lead the corporate story wherever available.
  homeHero: "/assets/orbis-building.jpg",
  companyBuilding: "/assets/orbis-building.jpg",
  companyShowroom: "/assets/orbis-showroom.jpg",
  heritageMercedes: "/assets/orbis-legacy.jpg",

  // Curated vehicle imagery. Use stronger, more dynamic photographs until ORBIS
  // supplies an approved current model photography set.
  mercedesSprinter: commons("Mercedes-Benz_Sprinter_(2018).jpg"),
  mercedesTruck: commons("Mercedes-Benz_Actros.jpg"),
  mercedesPassenger: commons("2023_Mercedes_E_Class.jpg"),
  renaultDuster: commons("Renault_Duster_(51658579574).jpg"),
  renaultKangoo: commons("2022_Renault_Kangoo_1.6_SCe_Zen_(Argentina).jpg"),
  mitsubishiFuso: commons("Mitsubishi_Fuso_Super_Great_(B_9925_UEV).jpg"),
  mitsubishiFusoHeavy: commons("Mitsubishi-Fuso-Super-Great.jpg"),

  // Keep ORBIS-owned imagery where it is genuinely stronger, but use a more
  // human technical-service photo instead of repeating the bus workshop image.
  automotiveWorkshop: commons(
    "Mechanic_works_on_car_engine_performing_routine_maintenance_and_inspections_on_vehicle_parts.jpg",
  ),
  serviceWorkshop: commons(
    "Mechanic_works_on_car_engine_performing_routine_maintenance_and_inspections_on_vehicle_parts.jpg",
  ),
  partsWorkshop: "/assets/bosch-parts.jpg",
  partsDetail: commons(
    "Car_parts_and_tools_scattered_across_a_workshop_floor_during_a_maintenance_session.jpg",
  ),

  ethiopianBus: "/assets/orbis-bus.jpg",
  busAssembly: commons("Linia_montażowa_pojazdów_ciężarowych.jpg"),

  // Ethiopia-specific coffee imagery.
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
