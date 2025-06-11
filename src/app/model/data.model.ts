export interface CustomAchievement extends Achievement {
    description?: string;
}

export enum AchievementType {
    TRAIT = 'TRAIT',
    ASPIRATION = 'ASPIRATION',
    SKILL = 'SKILL',
    CARRIER = 'CARRIER',
    MEDAL = 'MEDAL',
    DEATH = 'DEATH',
    CUSTOM = 'CUSTOM',
}
export interface Achievement {
    id: string;
    achievementType?: AchievementType,
    elementId?: string;
    label: string;
    ages?: Age[],
    pack?: ORIGIN,
    [key: string]: any; // Allows for additional properties
}

export interface Trait extends Achievement {
    type: TraitType,
    achievementType: AchievementType.TRAIT,
}

export interface Aspiration extends Achievement {
    achievementType: AchievementType.ASPIRATION,
    category: AspirationCategory,
    completed?: boolean
}

export interface Skill extends Achievement {
    achievementType: AchievementType.SKILL,
    level?: number,
    maxLevel: number
}

export interface Carrier extends Achievement {
    achievementType: AchievementType.CARRIER,
    type: CarrierType,
    maxLevel: number,
    level?: number
}

export interface Death extends Achievement {
    achievementType: AchievementType.DEATH,
    revived?: boolean,
    ageAtDeath?: Age,
    ageInNumbers?: number,
}

export type ORIGIN = 'BASE_GAME' | Expansion_Pack | Game_Pack | Stuff_Pack | Kit | 'CUSTOM' | string;

export enum CarrierType {
    FULL_TIME = 'FULL_TIME',
    ACTIVE = 'ACTIVE',
    PART_TIME = 'PART_TIME',
    FREELANCER = 'FREELANCER',
    CLUB = 'CLUB',
}
export interface Medal extends Achievement {
    achievementType: AchievementType.MEDAL,
    score?: MedalScore
}

export enum MedalScore {
    Bronze = 'BRONZE',
    Silver = 'SILVER',
    Gold = 'GOLD'
}

export enum TraitType {
    BASE = 'BASE',
    ASPIRATION = 'ASPIRATION',
    LIFE_STYLE = 'LIFE_STYLE',
    MILESTONE = 'MILESTONE',
    UPBRINGING = 'UPBRINGING'
}
export enum AspirationCategory {
    CREATIVITY = 'CREATIVITY',
    LOVE = 'LOVE',
    NATURE = 'NATURE',
    ATHLETIC = 'ATHLETIC',
    WEALTH = 'WEALTH',
    KNOWLEDGE = 'KNOWLEDGE',
    POPULARITY = 'POPULARITY',
    FAMILY = 'FAMILY',
    FOOD = 'FOOD',
    LOCATION = 'LOCATION',
    CHILDHOOD = 'CHILDHOOD',
    DEVIANCE = 'DEVIANCE',
    OCCULT = 'OCCULT',
    ECOLOGY = 'ECOLOGY',
    LIFESTYLE = 'LIFESTYLE',
    SOCIAL = 'SOCIAL',
    CUSTOM = 'CUSTOM'
}

export enum Age {
    NEWBORN = 'NEWBORN',
    INFANT = 'INFANT',
    TODDLER = 'TODDLER',
    CHILD = 'CHILD',
    TEENAGER = 'TEENAGER',
    YOUNG_ADULT = 'YOUNG_ADULT',
    ADULT = 'ADULT',
    ELDER = 'ELDER'
}

export enum Expansion_Pack {
    GET_TO_WORK = 'GET_TO_WORK',
    GET_TOGETHER = 'GET_TOGETHER',
    CITY_LIVING = 'CITY_LIVING',
    CATS_AND_DOGS = 'CATS_AND_DOGS',
    SEASONS = 'SEASONS',
    GET_FAMOUS = 'GET_FAMOUS',
    ISLAND_LIVING = 'ISLAND_LIVING',
    DISCOVER_UNIVERSITY = 'DISCOVER_UNIVERSITY',
    ECO_LIFESTYLE = 'ECO_LIFESTYLE',
    SNOWY_ESCAPE = 'SNOWY_ESCAPE',
    COTTAGE_LIVING = 'COTTAGE_LIVING',
    HIGH_SCHOOL_YEARS = 'HIGH_SCHOOL_YEARS',
    GROWING_TOGETHER = 'GROWING_TOGETHER',
    HORSE_RANCH = 'HORSE_RANCH',
    FOR_RENT = 'FOR_RENT',
    LOVESTRUCK = 'LOVESTRUCK',
    LIFE_AND_DEATH = 'LIFE_AND_DEATH',
    BUSINESSES_AND_HOBBIES = 'BUSINESSES_AND_HOBBIES',
}

export enum Game_Pack {
    OUTDOOR_RETREAT = 'OUTDOOR_RETREAT',
    SPA_DAY = 'SPA_DAY',
    DINE_OUT = 'DINE_OUT',
    VAMPIRES = 'VAMPIRES',
    PARENTHOOD = 'PARENTHOOD',
    JUNGLE_ADVENTURE = 'JUNGLE_ADVENTURE',
    STRANGERVILLE = 'STRANGERVILLE',
    REALM_OF_MAGIC = 'REALM_OF_MAGIC',
    STAR_WARS_JOURNEY_TO_BATUU = 'STAR_WARS_JOURNEY_TO_BATUU',
    DREAM_HOME_DECORATOR = 'DREAM_HOME_DECORATOR',
    MY_WEDDING_STORIES = 'MY_WEDDING_STORIES',
    WEREWOLVES = 'WEREWOLVES',
}

export enum Stuff_Pack {
    LUXURY_PARTY = 'LUXURY_PARTY',
    PERFECT_PATIO = 'PERFECT_PATIO',
    COOL_KITCHEN = 'COOL_KITCHEN',
    SPOOKY = 'SPOOKY',
    MOVIE_HANGOUT = 'MOVIE_HANGOUT',
    ROMANTIC_GARDEN = 'ROMANTIC_GARDEN',
    KIDS_ROOM = 'KIDS_ROOM',
    BACKYARD = 'BACKYARD',
    VINTAGE_GLAMOUR = 'VINTAGE_GLAMOUR',
    BOWLING_NIGHT = 'BOWLING_NIGHT',
    FITNESS = 'FITNESS',
    TODDLER = 'TODDLER',
    LAUNDRY_DAY = 'LAUNDRY_DAY',
    MY_FIRST_PET = 'MY_FIRST_PET',
    MOSCHINO = 'MOSCHINO',
    TINY_LIVING = 'TINY_LIVING',
    NIFTY_KNITTING = 'NIFTY_KNITTING',
    PARANORMAL = 'PARANORMAL',
    HOME_CHEF_HUSTLE = 'HOME_CHEF_HUSTLE',
    CRYSTAL_CREATIONS = 'CRYSTAL_CREATIONS',
}


export enum Kit {
    THROWBACK_FIT = 'THROWBACK_FIT',
    COUNTRY_KITCHEN = 'COUNTRY_KITCHEN',
    BUST_THE_DUST = 'BUST_THE_DUST',
    COURTYARD_OASIS = 'COURTYARD_OASIS',
    INDUSTRIAL_LOFT = 'INDUSTRIAL_LOFT',
    INCHEON_ARRIVALS = 'INCHEON_ARRIVALS',
    FASHION_STREET = 'FASHION_STREET',
    BLOOMING_ROOMS = 'BLOOMING_ROOMS',
    MODERN_MENSWEAR = 'MODERN_MENSWEAR',
    CARNAVAL_STREETWEAR = 'CARNAVAL_STREETWEAR',
    DECOR_TO_THE_MAX = 'DECOR_TO_THE_MAX',
    MOONLIGHT_CHIC = 'MOONLIGHT_CHIC',
    LITTLE_CAMPERS = 'LITTLE_CAMPERS',
    FIRST_FITS = 'FIRST_FITS',
    DESERT_LUXE = 'DESERT_LUXE',
    PASTEL_POP = 'PASTEL_POP',
    EVERYDAY_CLUTTER = 'EVERYDAY_CLUTTER',
    SIMTIMATES_COLLECTION = 'SIMTIMATES_COLLECTION',
    BATHROOM_CLUTTER = 'BATHROOM_CLUTTER',
    GREENHOUSE_HAVEN = 'GREENHOUSE_HAVEN',
    BASEMENT_TREASURES = 'BASEMENT_TREASURES',
    GRUNGE_REVIVAL = 'GRUNGE_REVIVAL',
    BOOK_NOOK = 'BOOK_NOOK',
    POOLSIDE_SPLASH = 'POOLSIDE_SPLASH',
    MODERN_LUXE = 'MODERN_LUXE',
    CASTLE_ESTATE = 'CASTLE_ESTATE',
    GOTH_GALORE = 'GOTH_GALORE',
    URBAN_HOMAGE = 'URBAN_HOMAGE',
    PARTY_ESSENTIALS = 'PARTY_ESSENTIALS',
    COZY_BISTRO = 'COZY_BISTRO',
    RIVIERA_RETREAT = 'RIVIERA_RETREAT',
    STORYBOOK_NURSERY = 'STORYBOOK_NURSERY',
    ARTIST_STUDIO = 'ARTIST_STUDIO',
    SWEET_SLUMBER = 'SWEET_SLUMBER',
    RETRO_REBOOT = 'RETRO_REBOOT',
    SECRET_SANCTUARY = 'SECRET_SANCTUARY',
    COZY_GAMING_ROOM = 'COZY_GAMING_ROOM',
    CASANOVA_HIDEAWAY = 'CASANOVA_HIDEAWAY',
    ELEGANT_LIVING_ROOM = 'ELEGANT_LIVING_ROOM',
    BUSINESS_CHIC = 'BUSINESS_CHIC',
    SOPHISTICATED_BATHROOM = 'SOPHISTICATED_BATHROOM',
    ADORABLE_DETAILS = 'ADORABLE_DETAILS',
    KITCHEN_ACCESSORIES = 'KITCHEN_ACCESSORIES',
    GOLDEN_AGE = 'GOLDEN_AGE',
    DIY_WORKSHOP = 'DIY_WORKSHOP'
}
