import { Milestone, MilestoneType } from "./achievement.model";
import { Age, AchievementType } from "./achievement.model";
const allAgesAfterTeen = [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER];
export const MILESTONES: Milestone[] = [
  {
      "id": "TEEN_BEGAN_PUBERTY",
      "label": "Began Puberty",
      "ages": [Age.TEENAGER],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE
    },
    {
      "id": "TEEN_DROPPED_OUT_OF_HIGH_SCHOOL",
      "label": "Dropped Out of High School",
      "ages": [Age.TEENAGER],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE
    },
    {
      "id": "TEEN_EXPELLED_FROM_HIGH_SCHOOL",
      "label": "Expelled from High School",
      "ages": [Age.TEENAGER],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE
    },
    {
      "id": "TEEN_GRADUATED_HIGH_SCHOOL",
      "label": "Graduated High School",
      "ages": [Age.TEENAGER],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE
    },
    {
      "id": "TEEN_PROM_ROYALTY",
      "label": "Prom Royalty",
      "ages": [Age.TEENAGER],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE
    },
     {
      "id": "CHILDHOOD_PHASE",
      "label": "Childhood Phase",
      "ages": [Age.CHILD],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE
    },
    {
      "id": "FIRST_DAY_OF_GRADE_SCHOOL",
      "label": "First Day of Grade School",
      "ages": [Age.CHILD],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE
    },
    {
      "id": "FIRST_CHILDHOOD_FRIEND",
      "label": "First Childhood Friend",
      "ages": [Age.CHILD],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE
    },
    {
      "id": "FIRST_LOST_TOOTH",
      "label": "First Lost Tooth",
      "ages": [Age.CHILD],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE
    },
    {
      "id": "LEARNED_TO_RIDE_BIKE",
      "label": "Learned to Ride a Bike",
      "ages": [Age.CHILD],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE
    },
    {
      "id": "CHILD_REACHED_TOP_AFTER_SCHOOL_ACTIVITY",
      "label": "Reached Top of After School Activity",
      "ages": [Age.CHILD],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE
    },
    {
      "id": "FIRST_KISS",
      "label": "First Kiss",
      "ages": [Age.TEENAGER, Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE
    },
    {
      "id": "FIRST_JOB",
      "label": "First Job",
      "ages": [Age.TEENAGER, Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE
    },
    {
      "id": "FIRST_PROMOTION",
      "label": "First Promotion",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE
    },
    {
      "id": "FIRST_MARRIAGE",
      "label": "First Marriage",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE
    },
    {
      "id": "FIRST_CHILD_BORN",
      "label": "First Child Born",
      "ages": [Age.YOUNG_ADULT, Age.ADULT, Age.ELDER],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE
    },

    // Infant Milestones (Growing Together)
    // Life
    {
      "id": "INFANT_BORN_AT_HOME",
      "label": "Born at Home",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.LIFE
    },
    {
      "id": "INFANT_BORN_AT_HOSPITAL",
      "label": "Born at Hospital",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.LIFE
    },

    // Fine Motor
    {
      "id": "INFANT_LEARNED_TO_REACH",
      "label": "Learned to Reach",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.FINE_MOTOR
    },
    {
      "id": "INFANT_LEARNED_TO_GRAB",
      "label": "Learned to Grab",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.FINE_MOTOR
    },
    {
      "id": "INFANT_PUT_TOE_IN_MOUTH",
      "label": "Put Toe In Mouth",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.FINE_MOTOR
    },
    {
      "id": "INFANT_LEARNED_TO_WAVE",
      "label": "Learned to Wave",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.FINE_MOTOR
    },
    {
      "id": "INFANT_LEARNED_TO_CLAP",
      "label": "Learned to Clap",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.FINE_MOTOR
    },
    {
      "id": "INFANT_LEARNED_PINCHER_GRASP",
      "label": "Learned Pincher Grasp",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.FINE_MOTOR
    },

    // Firsts
    {
      "id": "INFANT_FIRST_VISITORS",
      "label": "First Visitors",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.FIRSTS
    },
    {
      "id": "INFANT_FIRST_BATH",
      "label": "First Bath",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.FIRSTS
    },
    {
      "id": "INFANT_FIRST_BUBBLE_BATH",
      "label": "First Bubble Bath",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.FIRSTS
    },
    {
      "id": "INFANT_FIRST_BABY_FOOD",
      "label": "First Baby Food",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.FIRSTS
    },
    {
      "id": "INFANT_SLEPT_THROUGH_NIGHT",
      "label": "Slept Through the Night",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.FIRSTS
    },
    {
      "id": "INFANT_FIRST_FINGER_FOOD",
      "label": "First Finger Food",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.FIRSTS
    },
    {
      "id": "INFANT_FIRST_DIAPER_BLOWOUT",
      "label": "First Diaper Blowout",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.FIRSTS
    },
    {
      "id": "INFANT_PEED_ON_CAREGIVER",
      "label": "Peed on Caregiver",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.FIRSTS
    },

    // Gross Motor
    {
      "id": "INFANT_LIFTED_HEAD",
      "label": "Lifted Head",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.GROSS_MOTOR
    },
    {
      "id": "INFANT_ROLLED_OVER_TO_BACK",
      "label": "Rolled Over to Back",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.GROSS_MOTOR
    },
    {
      "id": "INFANT_ROLLED_OVER_TO_TUMMY",
      "label": "Rolled Over to Tummy",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.GROSS_MOTOR
    },
    {
      "id": "INFANT_LEARNED_TO_CREEP",
      "label": "Learned to Creep",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.GROSS_MOTOR
    },
    {
      "id": "INFANT_LEARNED_TO_SIT_UP",
      "label": "Learned to Sit Up",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.GROSS_MOTOR
    },
    {
      "id": "INFANT_PULLED_TO_STAND",
      "label": "Pulled To Stand",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.GROSS_MOTOR
    },
    {
      "id": "INFANT_LEARNED_TO_DANCE",
      "label": "Learned To Dance",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.GROSS_MOTOR
    },
    {
      "id": "INFANT_LEARNED_TO_CRAWL",
      "label": "Learned To Crawl",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.GROSS_MOTOR
    },

    // Social
    {
      "id": "INFANT_FIRST_SMILED",
      "label": "First Smiled",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.SOCIAL
    },
    {
      "id": "INFANT_LEARNED_TO_COO",
      "label": "Learned to Coo",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.SOCIAL
    },
    {
      "id": "INFANT_LEARNED_TO_LAUGH",
      "label": "Learned to Laugh",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.SOCIAL
    },
    {
      "id": "INFANT_LEARNED_TO_BABBLE",
      "label": "Learned to Babble",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.SOCIAL
    },
    {
      "id": "INFANT_LEARNED_TO_BLOW_KISS",
      "label": "Learned to Blow Kiss",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.SOCIAL
    },
    {
      "id": "INFANT_LEARNED_PEEK_A_BOO",
      "label": "Learned Peek-A-Boo",
      "ages": [Age.INFANT],
      "pack": "GROWING_TOGETHER",
      "achievementType": AchievementType.MILESTONE,
      "type": MilestoneType.SOCIAL
    },

    // Toddler Milestones (Growing Together)
    { id: "TODDLER_ART_APPRECIATION", label: "Art Appreciation", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_ASKED_WHY", label: "Asked Why", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_FIRST_FRIEND", label: "First Friend", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_FIRST_NIGHTMARE", label: "First Nightmare", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_FIRST_TIME_DAYCARE", label: "First Time Daycare", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_LEARNED_TO_CLIMB_STAIRS", label: "Learned To Climb Stairs", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_LEARNED_TO_DANCE", label: "Learned To Dance", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_LEARNED_TO_RUN", label: "Learned To Run", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_LEARNED_TO_TALK", label: "Learned To Talk", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_LEARNED_TO_WALK", label: "Learned To Walk", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_MAX_COMMUNICATION", label: "Max Communication", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_MAX_IMAGINATION", label: "Max Imagination", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_MAX_MOVEMENT", label: "Max Movement", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_MAX_POTTY", label: "Max Potty", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_MAX_THINKING", label: "Max Thinking", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_PLAYED_WITH_OTHERS", label: "Played With Others", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_READ_FIRST_BOOK", label: "Read First Book", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_STUDIED_LETTERS", label: "Studied Letters", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_STUDIED_NUMBERS", label: "Studied Numbers", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_STUDIED_SHAPES", label: "Studied Shapes", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
    { id: "TODDLER_THREW_TANTRUM", label: "Threw Tantrum", ages: [Age.TODDLER], pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
{ id: "ABDUCTED_BY_ALIENS", label: "Abducted By Aliens", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "ADOPTED_PET", label: "Adopted Pet", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "ADOPTED_SIM", label: "Adopted Sim", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "BEAT_GREG", label: "Beat Greg", ages: allAgesAfterTeen, pack: "WEREWOLVES", achievementType: AchievementType.MILESTONE },
  { id: "BECAME_MERMAID", label: "Became Mermaid", ages: allAgesAfterTeen, pack: "ISLAND_LIVING", achievementType: AchievementType.MILESTONE },
  { id: "BECAME_NON_OCCULT", label: "Became Non Occult", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "BECAME_PLANTSIM", label: "Became PlantSim", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "BECAME_SPELLCASTER", label: "Became Spellcaster", ages: allAgesAfterTeen, pack: "REALM_OF_MAGIC", achievementType: AchievementType.MILESTONE },
  { id: "BECAME_VAMPIRE", label: "Became Vampire", ages: allAgesAfterTeen, pack: "VAMPIRES", achievementType: AchievementType.MILESTONE },
  { id: "BECAME_WEREWOLF", label: "Became Werewolf", ages: allAgesAfterTeen, pack: "WEREWOLVES", achievementType: AchievementType.MILESTONE },
  { id: "BEST_FRIEND", label: "Best Friend", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "BIRTHDAY", label: "Birthday", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "CAUGHT_CHEATING_BY_SIM", label: "Caught Cheating By Sim", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "CAUGHT_SIM_CHEATING", label: "Caught Sim Cheating", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "DEFEATED_MOTHER_PLANT", label: "Defeated Mother Plant", ages: allAgesAfterTeen, pack: "STRANGERVILLE", achievementType: AchievementType.MILESTONE },
  { id: "DIED", label: "Died", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "EARNED_DEGREE_ART_HISTORY", label: "Earned Degree – Art History", ages: allAgesAfterTeen, pack: "DISCOVER_UNIVERSITY", achievementType: AchievementType.MILESTONE },
  { id: "EARNED_DEGREE_BIOLOGY", label: "Earned Degree – Biology", ages: allAgesAfterTeen, pack: "DISCOVER_UNIVERSITY", achievementType: AchievementType.MILESTONE },
  { id: "EARNED_DEGREE_COMMUNICATIONS", label: "Earned Degree – Communications", ages: allAgesAfterTeen, pack: "DISCOVER_UNIVERSITY", achievementType: AchievementType.MILESTONE },
  { id: "EARNED_DEGREE_COMPUTER_SCIENCE", label: "Earned Degree – Computer Science", ages: allAgesAfterTeen, pack: "DISCOVER_UNIVERSITY", achievementType: AchievementType.MILESTONE },
  { id: "EARNED_DEGREE_CULINARY_ARTS", label: "Earned Degree – Culinary Arts", ages: allAgesAfterTeen, pack: "DISCOVER_UNIVERSITY", achievementType: AchievementType.MILESTONE },
  { id: "EARNED_DEGREE_DRAMA", label: "Earned Degree – Drama", ages: allAgesAfterTeen, pack: "DISCOVER_UNIVERSITY", achievementType: AchievementType.MILESTONE },
  { id: "EARNED_DEGREE_ECONOMICS", label: "Earned Degree – Economics", ages: allAgesAfterTeen, pack: "DISCOVER_UNIVERSITY", achievementType: AchievementType.MILESTONE },
  { id: "EARNED_DEGREE_FINE_ART", label: "Earned Degree – Fine Art", ages: allAgesAfterTeen, pack: "DISCOVER_UNIVERSITY", achievementType: AchievementType.MILESTONE },
  { id: "EARNED_DEGREE_HISTORY", label: "Earned Degree – History", ages: allAgesAfterTeen, pack: "DISCOVER_UNIVERSITY", achievementType: AchievementType.MILESTONE },
  { id: "EARNED_DEGREE_LANGUAGE_LITERATURE", label: "Earned Degree – Language Literature", ages: allAgesAfterTeen, pack: "DISCOVER_UNIVERSITY", achievementType: AchievementType.MILESTONE },
  { id: "EARNED_DEGREE_PHYSICS", label: "Earned Degree – Physics", ages: allAgesAfterTeen, pack: "DISCOVER_UNIVERSITY", achievementType: AchievementType.MILESTONE },
  { id: "EARNED_DEGREE_PSYCHOLOGY", label: "Earned Degree – Psychology", ages: allAgesAfterTeen, pack: "DISCOVER_UNIVERSITY", achievementType: AchievementType.MILESTONE },
  { id: "EARNED_DEGREE_VILLAINY", label: "Earned Degree – Villainy", ages: allAgesAfterTeen, pack: "DISCOVER_UNIVERSITY", achievementType: AchievementType.MILESTONE },
  { id: "EATEN_BY_COWPLANT", label: "Eaten By Cowplant", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "ENDED_ROMANTIC_RELATIONSHIP", label: "Ended Romantic Relationship", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "ENEMY", label: "Enemy", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "ENGAGED", label: "Engaged", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "ENGAGEMENT_REJECTED", label: "Engagement Rejected", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "FELL_IN_LOVE", label: "Fell In Love", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "FIRST_BLADDER_FAIL", label: "First Bladder Fail", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "FIRST_ENERGY_FAIL", label: "First Energy Fail", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "FIRST_FIGHT", label: "First Fight", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "FIRST_FIRE", label: "First Fire", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "FIRST_PROMOTION", label: "First Promotion", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "FIRST_TIME_BURNING_OUT", label: "First Time Burning Out", ages: allAgesAfterTeen, pack: "DISCOVER_UNIVERSITY", achievementType: AchievementType.MILESTONE },
  { id: "FIRST_TIME_POSSESSED", label: "First Time Possessed", ages: allAgesAfterTeen, pack: "STRANGERVILLE", achievementType: AchievementType.MILESTONE },
  { id: "FIRST_WOOHOO", label: "First Woohoo", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "FORGOTTEN_GROTTO", label: "Forgotten Grotto", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "GOT_FIRED", label: "Got Fired", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "GOT_JOB", label: "Got Job", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "GOT_LAID_OFF", label: "Got Laid Off", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "HAD_AFFAIR", label: "Had Affair", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "HAD_SIM", label: "Had Sim", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "HERMIT", label: "Hermit", ages: allAgesAfterTeen, pack: "OUTDOOR_RETREAT", achievementType: AchievementType.MILESTONE },
  { id: "MID_LIFE_CRISIS_ADVENTURE", label: "Mid Life Crisis – Adventure", ages: allAgesAfterTeen, pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
  { id: "MID_LIFE_CRISIS_CREATE", label: "Mid Life Crisis – Create", ages: allAgesAfterTeen, pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
  { id: "MID_LIFE_CRISIS_RELATIONSHIP", label: "Mid Life Crisis – Relationship", ages: allAgesAfterTeen, pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
  { id: "MID_LIFE_CRISIS_SUCCESS", label: "Mid Life Crisis – Success", ages: allAgesAfterTeen, pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
  { id: "MARRIED", label: "Married", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "MAX_STAR_CELEBRITY", label: "Max Star Celebrity", ages: allAgesAfterTeen, pack: "GET_FAMOUS", achievementType: AchievementType.MILESTONE },
  { id: "MOUNT_KOMOREBI", label: "Mount Komorebi", ages: allAgesAfterTeen, pack: "SNOWY_ESCAPE", achievementType: AchievementType.MILESTONE },
  { id: "OMISCAN_TEMPLE", label: "Omiscan Temple", ages: allAgesAfterTeen, pack: "JUNGLE_ADVENTURE", achievementType: AchievementType.MILESTONE },
  { id: "QUIT_JOB", label: "Quit Job", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "REACHED_TOP_OF_CAREER", label: "Reached Top Of Career", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "REPUTATION_ATROCIOUS", label: "Reputation Atrocious", ages: allAgesAfterTeen, pack: "GET_FAMOUS", achievementType: AchievementType.MILESTONE },
  { id: "REPUTATION_PRISTINE", label: "Reputation Pristine", ages: allAgesAfterTeen, pack: "GET_FAMOUS", achievementType: AchievementType.MILESTONE },
  { id: "RESURRECTED", label: "Resurrected", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "RESURRECTED_BY_SIM", label: "Resurrected By Sim", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "RESURRECTED_SIM", label: "Resurrected Sim", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "SAVED_FROM_DEATH", label: "Saved From Death", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "SELF_DISCOVERY", label: "Self Discovery", ages: allAgesAfterTeen, pack: "GROWING_TOGETHER", achievementType: AchievementType.MILESTONE },
  { id: "SIGNIFICANT_OTHER", label: "Significant Other", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "SIXAM", label: "Sixam", ages: allAgesAfterTeen, pack: "GET_TO_WORK", achievementType: AchievementType.MILESTONE },
  { id: "SMACKED_BY_AGNES", label: "Smacked By Agnes", ages: allAgesAfterTeen, pack: "COTTAGE_LIVING", achievementType: AchievementType.MILESTONE },
  { id: "STRUCK_BY_LIGHTNING", label: "Struck By Lightning", ages: allAgesAfterTeen, pack: "SEASONS", achievementType: AchievementType.MILESTONE },
  { id: "SURVIVED_HAUNTED_HOUSE", label: "Survived Haunted House", ages: allAgesAfterTeen, pack: "PARANORMAL", achievementType: AchievementType.MILESTONE },
  { id: "SYLVAN_GLADE", label: "Sylvan Glade", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "WEREWOLF_PACK_LEADER_A", label: "Werewolf Pack Leader A", ages: allAgesAfterTeen, pack: "WEREWOLVES", achievementType: AchievementType.MILESTONE },
  { id: "WEREWOLF_PACK_LEADER_B", label: "Werewolf Pack Leader B", ages: allAgesAfterTeen, pack: "WEREWOLVES", achievementType: AchievementType.MILESTONE },
  { id: "WIDOWED", label: "Widowed", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "WON_LOTTERY", label: "Won Lottery", ages: allAgesAfterTeen, pack: "BASE_GAME", achievementType: AchievementType.MILESTONE },
  { id: "WON_VILLAGE_FAIR", label: "Won Village Fair", ages: allAgesAfterTeen, pack: "COTTAGE_LIVING", achievementType: AchievementType.MILESTONE },
 { id: "RETIRED", label: "Retired", ages: [Age.ELDER], pack: "BASE_GAME", achievementType: AchievementType.MILESTONE }
  ];