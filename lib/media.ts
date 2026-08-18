const commons = (file: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${file}`;

export const webImages = {
  homeHero: commons("Great_Architectural_Building_from_Ethiopia_Addis_Ababa.jpg"),
  companyBuilding: commons("Great_Architectural_Building_from_Ethiopia_Addis_Ababa.jpg"),
  companyShowroom: commons("Showroom_of_the_dealership.jpg"),
  heritageMercedes: commons("1950_Mercedes_Benz_170_S_Saloon_(24683666745).jpg"),

  mercedesSprinter: commons("Benz_VS30_Sprinter.png"),
  mercedesTruck: commons("Mercedes-Benz_Actros.jpg"),
  mercedesPassenger: commons("2023_Mercedes_E_Class.jpg"),
  renaultDuster: commons("2024_Renault_Duster_1.3_TCe_Turbo_Iconic.jpg"),
  renaultKangoo: commons("2022_Renault_Kangoo_1.6_SCe_Zen_(Argentina).jpg"),
  mitsubishiFuso: commons("2015_Mitsubishi_Fuso_Canter.jpg"),
  mitsubishiFusoHeavy: commons("Mitsubishi-Fuso-Super-Great.jpg"),

  automotiveWorkshop: commons(
    "Mechanic_works_on_car_engine_performing_routine_maintenance_and_inspections_on_vehicle_parts.jpg",
  ),
  serviceWorkshop: commons(
    "Car_repair_in_an_auto_shop_with_tools_and_equipment_present_on_the_floor_and_a_partially_disassembled_vehicle_on_a_lift.jpg",
  ),
  partsWorkshop: commons(
    "Tools_and_parts_are_collected_in_a_metal_bowl_at_an_automotive_workshop.jpg",
  ),
  partsDetail: commons(
    "Car_parts_and_tools_scattered_across_a_workshop_floor_during_a_maintenance_session.jpg",
  ),

  ethiopianBus: commons("Coach_bus_in_Lefkada,_Mercedes_Tourismo_V8.JPG"),
  busAssembly: commons("Linia_montażowa_pojazdów_ciężarowych.jpg"),

  ethiopianCoffee: commons("Women_checking_coffee.jpg"),
  greenCoffee: commons("Green_Coffee_Beans_(4075921494).jpg"),
  oilseeds: commons("Sesame_seeds.JPG"),
  pulses: commons("Chickpeas.JPG"),

  ethiopianRoad: commons("Addis_Ababa_Street_(54732897029).jpg"),

  // Backward-compatible aliases used by existing components while the demo is refined.
  orbisShowroom: commons("Showroom_of_the_dealership.jpg"),
  orbisBuilding: commons("Great_Architectural_Building_from_Ethiopia_Addis_Ababa.jpg"),
};
