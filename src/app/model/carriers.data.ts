import { Carrier, Age, CarrierType } from "./data.model";

export const CARRIERS: Carrier[] = [
    {
      "id": "ASTRONAUT",
      "label": "Astronaut",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "BASE_GAME",
      "type": CarrierType.FULL_TIME
    },
    {
      "id": "ATHLETE",
      "label": "Athlet",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "BASE_GAME",
      "type": CarrierType.FULL_TIME
    },
    {
      "id": "BUSINESS",
      "label": "Geschäft",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "BASE_GAME",
      "type": CarrierType.FULL_TIME
    },
    {
      "id": "CRIMINAL",
      "label": "Krimineller",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "BASE_GAME",
      "type": CarrierType.FULL_TIME
    },
    {
      "id": "CULINARY",
      "label": "Kulinarik",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "BASE_GAME",
      "type": CarrierType.FULL_TIME
    },
    {
      "id": "ENTERTAINER",
      "label": "Entertainer",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "BASE_GAME",
      "type": CarrierType.FULL_TIME
    },
    {
      "id": "PAINTER",
      "label": "Maler",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "BASE_GAME",
      "type": CarrierType.FULL_TIME
    },
    {
      "id": "SECRET_AGENT",
      "label": "Geheimagent",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "BASE_GAME",
      "type": CarrierType.FULL_TIME
    },
    {
      "id": "TECH_GURU",
      "label": "Technikguru",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "BASE_GAME",
      "type": CarrierType.FULL_TIME
    },
    {
      "id": "WRITER",
      "label": "Schriftsteller",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "BASE_GAME",
      "type": CarrierType.FULL_TIME
    },
    {
      "id": "DETECTIVE",
      "label": "Detektiv",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "GET_TO_WORK",
      "type": CarrierType.ACTIVE
    },
    {
      "id": "DOCTOR",
      "label": "Arzt",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "GET_TO_WORK",
      "type": CarrierType.ACTIVE
    },
    {
      "id": "SCIENTIST",
      "label": "Wissenschaftler",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "GET_TO_WORK",
      "type": CarrierType.ACTIVE
    },
    {
      "id": "ACTOR",
      "label": "Schauspieler",
      "ages": [Age.TEENAGER, Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "GET_FAMOUS",
      "type": CarrierType.ACTIVE
    },
    {
      "id": "INTERIOR_DECORATOR",
      "label": "Innenarchitekt",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "DREAM_HOME_DECORATOR",
      "type": CarrierType.ACTIVE
    },
    {
      "id": "FREELANCER_WRITER",
      "label": "Freiberuflicher Schriftsteller",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "BASE_GAME",
      "type": CarrierType.FREELANCER
    },
    {
      "id": "FREELANCER_ARTIST",
      "label": "Freiberuflicher Künstler",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "BASE_GAME",
      "type": CarrierType.FREELANCER
    },
    {
      "id": "FREELANCER_PROGRAMMER",
      "label": "Freiberuflicher Programmierer",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "BASE_GAME",
      "type": CarrierType.FREELANCER
    },
    {
      "id": "FREELANCER_PHOTOGRAPHER",
      "label": "Freiberuflicher Fotograf",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "MOSCHINO",
      "type": CarrierType.FREELANCER
    },
    {
      "id": "FREELANCER_MAKER",
      "label": "Freiberuflicher Hersteller",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "ECO_LIFESTYLE",
      "type": CarrierType.FREELANCER
    },
    {
      "id": "FREELANCER_PARA_INVESTIGATOR",
      "label": "Paranormaler Ermittler",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "PARANORMAL",
      "type": CarrierType.FREELANCER
    },
    {
      "id": "BARISTA",
      "label": "Barista",
      "ages": [Age.TEENAGER, Age.YOUNG_ADULT],
      "pack": "BASE_GAME",
      "type": CarrierType.PART_TIME
    },
    {
      "id": "FAST_FOOD_EMPLOYEE",
      "label": "Fast-Food-Mitarbeiter",
      "ages": [Age.TEENAGER, Age.YOUNG_ADULT],
      "pack": "BASE_GAME",
      "type": CarrierType.PART_TIME
    },
    {
      "id": "RETAIL_EMPLOYEE",
      "label": "Einzelhandelsmitarbeiter",
      "ages": [Age.TEENAGER, Age.YOUNG_ADULT],
      "pack": "BASE_GAME",
      "type": CarrierType.PART_TIME
    },
    {
      "id": "MANUAL_LABOR",
      "label": "Manueller Arbeiter",
      "ages": [Age.TEENAGER, Age.YOUNG_ADULT],
      "pack": "BASE_GAME",
      "type": CarrierType.PART_TIME
    },
    {
      "id": "BABYSITTER",
      "label": "Babysitter",
      "ages": [Age.TEENAGER, Age.YOUNG_ADULT],
      "pack": "BASE_GAME",
      "type": CarrierType.PART_TIME
    },
    {
      "id": "LIFEGUARD",
      "label": "Rettungsschwimmer",
      "ages": [Age.TEENAGER, Age.YOUNG_ADULT],
      "pack": "ISLAND_LIVING",
      "type": CarrierType.PART_TIME
    },
    {
      "id": "DIVER",
      "label": "Taucher",
      "ages": [Age.TEENAGER, Age.YOUNG_ADULT],
      "pack": "ISLAND_LIVING",
      "type": CarrierType.PART_TIME
    },
    {
      "id": "FISHERMAN",
      "label": "Fischer",
      "ages": [Age.TEENAGER, Age.YOUNG_ADULT],
      "pack": "ISLAND_LIVING",
      "type": CarrierType.PART_TIME
    },
    {
      "id": "SCOUT",
      "label": "Pfadfinder",
      "ages": [Age.CHILD, Age.TEENAGER],
      "pack": "SEASONS",
      "type": CarrierType.CLUB
    },
    {
      "id": "DRAMA_CLUB",
      "label": "Drama-Club",
      "ages": [Age.CHILD, Age.TEENAGER],
      "pack": "GET_FAMOUS",
      "type": CarrierType.CLUB
    }
  ]
