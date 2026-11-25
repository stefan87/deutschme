import {
  LuLandmark,
  LuStethoscope,
  LuBriefcaseBusiness,
  LuUsers,
  LuShoppingCart,
  LuHouse,
  LuSchool,
  LuBuilding2,
  LuPhone,
  LuWallet,
  LuHandshake,
  LuCoffee,
  LuMapPin,
  LuBus,
  LuGraduationCap,
} from "react-icons/lu";

const sceneIcons = [
  LuLandmark,          // s0 - institucija
  LuStethoscope,       // s1 - lekar
  LuBriefcaseBusiness, // s2 - posao
  LuUsers,             // s3 - kolege
  LuShoppingCart,      // s4 - supermarket
  LuHouse,             // s5 - stan
  LuSchool,            // s6 - skola
  LuBuilding2,         // s7 - ustanova
  LuPhone,             // s8 - telefon
  LuWallet,            // s9 - banka
  LuHandshake,         // s10 - upoznavanje
  LuCoffee,            // s11 - kafic
  LuMapPin,            // s12 - snalazenje
  LuBus,               // s13 - prevoz
];

export default function GermanySceneIcon({ id }: { id: string }) {
  const match = /^s(\d+)$/.exec(id);
  const Icon = match ? sceneIcons[Number(match[1])] : undefined;
  return Icon
    ? <Icon size={19} aria-hidden="true" />
    : <LuGraduationCap size={18} aria-hidden="true" />;
}
