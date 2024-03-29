const express = require("express");
const Router = express.Router();
const stationsService = require("../services/stations.service");

Router.get("/", async (req, resp) => {
  const result = await stationsService.getAllStations();
  resp.send(result);
  // resp.send({ message: "hi" });
});

async function getAllStations() {
  return await query("select stationID,stationName from station");
}

Router.get("/add", async (req, res) => {
  const data = [
    {
      stationCode: "ABN",
      stationID: 3,
      stationName: "ABANPOLA",
    },
    {
      stationCode: "ADAGALA",
      stationID: 410,
      stationName: "ADAGALA",
    },
    {
      stationCode: "ANM",
      stationID: 11,
      stationName: "AHANGAMA",
    },
    {
      stationCode: "AUH",
      stationID: 18,
      stationName: "AHUNGALLE",
    },
    {
      stationCode: "APR",
      stationID: 13,
      stationName: "AKBOPURA",
    },
    {
      stationCode: "AKU",
      stationID: 7,
      stationName: "AKURALA",
    },
    {
      stationCode: "AWP",
      stationID: 22,
      stationName: "ALAWATUPITIYA",
    },
    {
      stationCode: "ALW",
      stationID: 9,
      stationName: "ALAWWA",
    },
    {
      stationCode: "ATB",
      stationID: 329,
      stationName: "ALUTH AMBALAMA",
    },
    {
      stationCode: "ALT",
      stationID: 8,
      stationName: "ALUTHGAMA",
    },
    {
      stationCode: "ABA",
      stationID: 1,
      stationName: "AMBALANGODA",
    },
    {
      stationCode: "ABL",
      stationID: 2,
      stationName: "AMBEWELA",
    },
    {
      stationCode: "APS",
      stationID: 14,
      stationName: "AMBEYPUSSA",
    },
    {
      stationCode: "AVD",
      stationID: 19,
      stationName: "ANAWILUNDAWA",
    },
    {
      stationCode: "AND",
      stationID: 10,
      stationName: "ANDADOLA",
    },
    {
      stationCode: "AGT",
      stationID: 5,
      stationName: "ANGAMPITIYA",
    },
    {
      stationCode: "AGL",
      stationID: 4,
      stationName: "ANGULANA",
    },
    {
      stationCode: "ANP",
      stationID: 12,
      stationName: "ANURADHAPURA",
    },
    {
      stationCode: "APT",
      stationID: 15,
      stationName: "ANURADHAPURA TOWN",
    },
    {
      stationCode: "AKT",
      stationID: 6,
      stationName: "ARACHCHIKATTUWA",
    },
    {
      stationCode: "ARP",
      stationID: 343,
      stationName: "ARAPATHGAMA",
    },
    {
      stationCode: "ARW",
      stationID: 16,
      stationName: "ARUKKUWATTE",
    },
    {
      stationCode: "ASL",
      stationID: 17,
      stationName: "ASELAPURA",
    },
    {
      stationCode: "AGR",
      stationID: 467,
      stationName: "ASGIRIYA",
    },
    {
      stationCode: "AWK",
      stationID: 21,
      stationName: "AUKANA",
    },
    {
      stationCode: "AVS",
      stationID: 20,
      stationName: "AVISSAWELLA",
    },
    {
      stationCode: "BAD",
      stationID: 23,
      stationName: "BADULLA",
    },
    {
      stationCode: "BNA",
      stationID: 31,
      stationName: "BALANA",
    },
    {
      stationCode: "BPA",
      stationID: 34,
      stationName: "BALAPITIYA",
    },
    {
      stationCode: "BPT",
      stationID: 35,
      stationName: "BAMBALAPITIYA",
    },
    {
      stationCode: "BDA",
      stationID: 25,
      stationName: "BANDARAWELA",
    },
    {
      stationCode: "Bandirippuwa",
      stationID: 475,
      stationName: "Bandirippuwa",
    },
    {
      stationCode: "BGY",
      stationID: 28,
      stationName: "BANGADENIYA",
    },
    {
      stationCode: "BSL",
      stationID: 39,
      stationName: "BASELINE ROAD",
    },
    {
      stationCode: "BOA",
      stationID: 33,
      stationName: "BATTALUOYA",
    },
    {
      stationCode: "BCO",
      stationID: 24,
      stationName: "BATTICALOA",
    },
    {
      stationCode: "BTU",
      stationID: 41,
      stationName: "BATUWATTE",
    },
    {
      stationCode: "BEM",
      stationID: 26,
      stationName: "BEMMULLA",
    },
    {
      stationCode: "BNT",
      stationID: 32,
      stationName: "BENTOTA",
    },
    {
      stationCode: "BRL",
      stationID: 36,
      stationName: "BERUWALA",
    },
    {
      stationCode: "BLT",
      stationID: 30,
      stationName: "BOLAWATTE",
    },
    {
      stationCode: "BSH",
      stationID: 38,
      stationName: "BOOSSA",
    },
    {
      stationCode: "BSA",
      stationID: 37,
      stationName: "BORELESSA",
    },
    {
      stationCode: "BTL",
      stationID: 40,
      stationName: "BOTALE",
    },
    {
      stationCode: "BGH",
      stationID: 27,
      stationName: "BULUGAHAGODA",
    },
    {
      stationCode: "BJM",
      stationID: 29,
      stationName: "BUTHGAMUWA",
    },
    {
      stationCode: "CCH",
      stationID: 398,
      stationName: "CHAVAKACHCHERI",
    },
    {
      stationCode: "CDK",
      stationID: 371,
      stationName: "CHEDDIIKULAM",
    },
    {
      stationCode: "CHL",
      stationID: 44,
      stationName: "CHILAW",
    },
    {
      stationCode: "CBY",
      stationID: 43,
      stationName: "CHINA BEY",
    },
    {
      stationCode: "CKM",
      stationID: 423,
      stationName: "CHUNNAKAM",
    },
    {
      stationCode: "FOT",
      stationID: 61,
      stationName: "COLOMBO FORT",
    },
    {
      stationCode: "CRD",
      stationID: 46,
      stationName: "COTTA ROAD",
    },
    {
      stationCode: "DRL",
      stationID: 53,
      stationName: "DARALUWA",
    },
    {
      stationCode: "DEC",
      stationID: 457,
      stationName: "DEC",
    },
    {
      stationCode: "DWL",
      stationID: 54,
      stationName: "DEHIWALA",
    },
    {
      stationCode: "DKD",
      stationID: 337,
      stationName: "Dekinda",
    },
    {
      stationCode: "DAG",
      stationID: 47,
      stationName: "DEMATAGODA",
    },
    {
      stationCode: "DDR",
      stationID: 48,
      stationName: "DEMODARA",
    },
    {
      stationCode: "DPM",
      stationID: 52,
      stationName: "DEWAPURAM",
    },
    {
      stationCode: "DEWEDDA",
      stationID: 417,
      stationName: "DEWEDDA",
    },
    {
      stationCode: "DLA",
      stationID: 50,
      stationName: "DIYATALAWA",
    },
    {
      stationCode: "DNA",
      stationID: 51,
      stationName: "DODANDUWA",
    },
    {
      stationCode: "EYA",
      stationID: 60,
      stationName: "EGODA UYANA",
    },
    {
      stationCode: "EPS",
      stationID: 395,
      stationName: "ELIPHANT PASS",
    },
    {
      stationCode: "ELL",
      stationID: 57,
      stationName: "ELLE",
    },
    {
      stationCode: "EML",
      stationID: 401,
      stationName: "ELUTHUMATTUVAL",
    },
    {
      stationCode: "ELW",
      stationID: 341,
      stationName: "ELWALA",
    },
    {
      stationCode: "EDM",
      stationID: 55,
      stationName: "ENDERAMULLA",
    },
    {
      stationCode: "EKM",
      stationID: 56,
      stationName: "ERATTAPERIYAKULAM",
    },
    {
      stationCode: "EVR",
      stationID: 59,
      stationName: "ERAVUR",
    },
    {
      stationCode: "EPN",
      stationID: 58,
      stationName: "ERUKKALAM PENDU",
    },
    {
      stationCode: "IPZ",
      stationID: 104,
      stationName: "FREE TRADE ZONE",
    },
    {
      stationCode: "GBD",
      stationID: 64,
      stationName: "GALABODA",
    },
    {
      stationCode: "GLM",
      stationID: 69,
      stationName: "GALGAMUWA",
    },
    {
      stationCode: "GLE",
      stationID: 68,
      stationName: "GALLE",
    },
    {
      stationCode: "GAL",
      stationID: 62,
      stationName: "GALLELLA",
    },
    {
      stationCode: "GOA",
      stationID: 74,
      stationName: "GALOYA JUNCTION",
    },
    {
      stationCode: "GMA",
      stationID: 70,
      stationName: "GAMMANA",
    },
    {
      stationCode: "GPH",
      stationID: 75,
      stationName: "GAMPAHA",
    },
    {
      stationCode: "GPL",
      stationID: 76,
      stationName: "GAMPOLA",
    },
    {
      stationCode: "GND",
      stationID: 71,
      stationName: "GANEGODA",
    },
    {
      stationCode: "GAN",
      stationID: 63,
      stationName: "GANEMULLA",
    },
    {
      stationCode: "GNW",
      stationID: 73,
      stationName: "GANEWATTE",
    },
    {
      stationCode: "Gangathilaka",
      stationID: 479,
      stationName: "Gangathilaka",
    },
    {
      stationCode: "GDA",
      stationID: 65,
      stationName: "GANGODA",
    },
    {
      stationCode: "GTL",
      stationID: 440,
      stationName: "GANTALAWA",
    },
    {
      stationCode: "GEY",
      stationID: 66,
      stationName: "GELIOYA",
    },
    {
      stationCode: "GNT",
      stationID: 72,
      stationName: "GINTHOTA",
    },
    {
      stationCode: "GRB",
      stationID: 476,
      stationName: "GIRAMBE",
    },
    {
      stationCode: "GRB",
      stationID: 77,
      stationName: "GIRAMBE",
    },
    {
      stationCode: "GGA",
      stationID: 67,
      stationName: "GODAGAMA",
    },
    {
      stationCode: "GWN",
      stationID: 79,
      stationName: "GREAT WESTERN",
    },
    {
      stationCode: "HBD",
      stationID: 81,
      stationName: "HABARADUWA",
    },
    {
      stationCode: "HBN",
      stationID: 82,
      stationName: "HABARANA",
    },
    {
      stationCode: "HADIRIWALANA",
      stationID: 456,
      stationName: "Hadiriwalana",
    },
    {
      stationCode: "HEA",
      stationID: 84,
      stationName: "HALIELA",
    },
    {
      stationCode: "HPT",
      stationID: 92,
      stationName: "HAPUTALE",
    },
    {
      stationCode: "HAU",
      stationID: 80,
      stationName: "HATAMUNA",
    },
    {
      stationCode: "HKT",
      stationID: 87,
      stationName: "HATARAS KOTUWA",
    },
    {
      stationCode: "HTN",
      stationID: 96,
      stationName: "HATTON",
    },
    {
      stationCode: "HLO",
      stationID: 89,
      stationName: "HEEL OYA",
    },
    {
      stationCode: "HDP",
      stationID: 83,
      stationName: "HEENDENIYA",
    },
    {
      stationCode: "HML",
      stationID: 91,
      stationName: "HETTIMULLA",
    },
    {
      stationCode: "HKD",
      stationID: 86,
      stationName: "HIKKADUWA",
    },
    {
      stationCode: "HRG",
      stationID: 93,
      stationName: "HINGURAKGODA",
    },
    {
      stationCode: "Hingurala",
      stationID: 444,
      stationName: "HINGURALA",
    },
    {
      stationCode: "HRL",
      stationID: 94,
      stationName: "HIRIYALA",
    },
    {
      stationCode: "HMA",
      stationID: 90,
      stationName: "HOMAGAMA",
    },
    {
      stationCode: "HHR",
      stationID: 85,
      stationName: "HOMAGAMA HOSPITAL",
    },
    {
      stationCode: "HRP",
      stationID: 95,
      stationName: "HORAPE",
    },
    {
      stationCode: "HLA",
      stationID: 88,
      stationName: "HORIWIALA",
    },
    {
      stationCode: "HUN",
      stationID: 97,
      stationName: "HUNUPITIYA",
    },
    {
      stationCode: "HYP",
      stationID: 98,
      stationName: "HYINPORT",
    },
    {
      stationCode: "IGH",
      stationID: 100,
      stationName: "IDALGASINNA",
    },
    {
      stationCode: "IHA",
      stationID: 101,
      stationName: "IHALAGAMA",
    },
    {
      stationCode: "IKT",
      stationID: 102,
      stationName: "IHALAKOTTE",
    },
    {
      stationCode: "IWL",
      stationID: 105,
      stationName: "IHALAWATAWALA",
    },
    {
      stationCode: "IDA",
      stationID: 99,
      stationName: "INDURUWA",
    },
    {
      stationCode: "INO",
      stationID: 103,
      stationName: "INGURUOYA",
    },
    {
      stationCode: "INL",
      stationID: 428,
      stationName: "INUVIL",
    },
    {
      stationCode: "JLA",
      stationID: 107,
      stationName: "JA-ELA",
    },
    {
      stationCode: "JFN",
      stationID: 400,
      stationName: "JAFFNA",
    },
    {
      stationCode: "JAP",
      stationID: 106,
      stationName: "JAYANTHIPURA",
    },
    {
      stationCode: "KCH",
      stationID: 338,
      stationName: "KACHCHERI HALL",
    },
    {
      stationCode: "KDN",
      stationID: 114,
      stationName: "KADADASI NAGAR",
    },
    {
      stationCode: "KMA",
      stationID: 128,
      stationName: "KADIGAMUWA",
    },
    {
      stationCode: "KGW",
      stationID: 120,
      stationName: "KADUGANNAWA",
    },
    {
      stationCode: "KDG",
      stationID: 113,
      stationName: "KADUGODA",
    },
    {
      stationCode: "Kahatapitiya",
      stationID: 480,
      stationName: "Kahatapitiya",
    },
    {
      stationCode: "KWE",
      stationID: 152,
      stationName: "KAHAWA",
    },
    {
      stationCode: "KYA",
      stationID: 154,
      stationName: "KAKKAPALLIYA",
    },
    {
      stationCode: "KLW",
      stationID: 127,
      stationName: "KALAWEWA",
    },
    {
      stationCode: "KKH",
      stationID: 123,
      stationName: "KALKUDAH",
    },
    {
      stationCode: "KTN",
      stationID: 147,
      stationName: "KALUTARA NORTH",
    },
    {
      stationCode: "KTS",
      stationID: 148,
      stationName: "KALUTARA SOUTH",
    },
    {
      stationCode: "KMG",
      stationID: 130,
      stationName: "KAMBURUGAMUWA",
    },
    {
      stationCode: "KAN",
      stationID: 108,
      stationName: "KANDANA",
    },
    {
      stationCode: "KGD",
      stationID: 119,
      stationName: "KANDEGODA",
    },
    {
      stationCode: "KDT",
      stationID: 115,
      stationName: "KANDY",
    },
    {
      stationCode: "KKS",
      stationID: 424,
      stationName: "KANKESANTHURAI",
    },
    {
      stationCode: "KNI",
      stationID: 132,
      stationName: "KANTALE",
    },
    {
      stationCode: "KAW",
      stationID: 110,
      stationName: "KAPUWATTE",
    },
    {
      stationCode: "KPL",
      stationID: 139,
      stationName: "KARADIPUWAL",
    },
    {
      stationCode: "KTL",
      stationID: 146,
      stationName: "KATHALUWA",
    },
    {
      stationCode: "KAT",
      stationID: 109,
      stationName: "KATTUWA",
    },
    {
      stationCode: "KTG",
      stationID: 144,
      stationName: "KATUGASTOTA",
    },
    {
      stationCode: "KTG ROAD",
      stationID: 468,
      stationName: "KATUGASTOTA     ROAD",
    },
    {
      stationCode: "KUG",
      stationID: 150,
      stationName: "KATUGODA",
    },
    {
      stationCode: "KKD",
      stationID: 122,
      stationName: "KATUKURUNDA",
    },
    {
      stationCode: "CAK",
      stationID: 42,
      stationName: "KATUNAYAKA AIRPORT",
    },
    {
      stationCode: "KTK",
      stationID: 145,
      stationName: "KATUNAYAKE",
    },
    {
      stationCode: "KEN",
      stationID: 117,
      stationName: "KEENAWALA",
    },
    {
      stationCode: "KRA",
      stationID: 141,
      stationName: "KEKIRAWA",
    },
    {
      stationCode: "KLA",
      stationID: 124,
      stationName: "KELANIYA",
    },
    {
      stationCode: "KOC",
      stationID: 333,
      stationName: "KILINOCHCHI",
    },
    {
      stationCode: "KNM",
      stationID: 133,
      stationName: "KINIGAMA",
    },
    {
      stationCode: "KRW",
      stationID: 447,
      stationName: "KIRINDIWELA",
    },
    {
      stationCode: "KPE",
      stationID: 138,
      stationName: "KIRULAPANA",
    },
    {
      stationCode: "KEL",
      stationID: 116,
      stationName: "KITAL ELLE",
    },
    {
      stationCode: "KCH",
      stationID: 111,
      stationName: "KOCHCHIKADE",
    },
    {
      stationCode: "KKM",
      stationID: 397,
      stationName: "KODIKAMAM",
    },
    {
      stationCode: "KOG",
      stationID: 134,
      stationName: "KOGGALA",
    },
    {
      stationCode: "KOM",
      stationID: 474,
      stationName: "KOHOMBILIWALA",
    },
    {
      stationCode: "KKV",
      stationID: 429,
      stationName: "KOKUVIL",
    },
    {
      stationCode: "KLP",
      stationID: 126,
      stationName: "KOLLUPITIYA",
    },
    {
      stationCode: "KLN",
      stationID: 453,
      stationName: "KOLONNAWA",
    },
    {
      stationCode: "KLN",
      stationID: 125,
      stationName: "KOLONNAWA",
    },
    {
      stationCode: "KPN",
      stationID: 140,
      stationName: "KOMPANNAVEDIYA",
    },
    {
      stationCode: "KDV",
      stationID: 422,
      stationName: "KONDAVIL",
    },
    {
      stationCode: "KON",
      stationID: 135,
      stationName: "KONWEWA",
    },
    {
      stationCode: "KOR",
      stationID: 136,
      stationName: "KORALAWELLA",
    },
    {
      stationCode: "KSG",
      stationID: 143,
      stationName: "KOSGAMA",
    },
    {
      stationCode: "KDA",
      stationID: 112,
      stationName: "KOSGODA",
    },
    {
      stationCode: "KHA",
      stationID: 121,
      stationName: "KOSHINNA",
    },
    {
      stationCode: "KGA",
      stationID: 118,
      stationName: "KOTAGALA",
    },
    {
      stationCode: "KOT",
      stationID: 137,
      stationName: "KOTTAWA",
    },
    {
      stationCode: "KWW",
      stationID: 153,
      stationName: "KUDA WAWA",
    },
    {
      stationCode: "KUD",
      stationID: 149,
      stationName: "KUDAHAKAPOLA",
    },
    {
      stationCode: "KMK",
      stationID: 131,
      stationName: "KUMARAKANDA",
    },
    {
      stationCode: "KMB",
      stationID: 129,
      stationName: "KUMBALGAMA",
    },
    {
      stationCode: "Karahanhenagama",
      stationID: 408,
      stationName: "KURAHANHENAGAMA",
    },
    {
      stationCode: "KUR",
      stationID: 151,
      stationName: "KURANA",
    },
    {
      stationCode: "KRN",
      stationID: 142,
      stationName: "KURUNEGALA",
    },
    {
      stationCode: "LYA",
      stationID: 158,
      stationName: "LAKSAUYANA",
    },
    {
      stationCode: "LGM",
      stationID: 155,
      stationName: "LIYANAGEMULLA",
    },
    {
      stationCode: "LIYANWALA",
      stationID: 334,
      stationName: "LIYANWALA",
    },
    {
      stationCode: "LNA",
      stationID: 156,
      stationName: "LUNAWA",
    },
    {
      stationCode: "LWL",
      stationID: 157,
      stationName: "LUNUWILA",
    },
    {
      stationCode: "MPA",
      stationID: 181,
      stationName: "MADAMPAGAMA",
    },
    {
      stationCode: "MDP",
      stationID: 161,
      stationName: "MADAMPE",
    },
    {
      stationCode: "MRD",
      stationID: 372,
      stationName: "MADHU ROAD",
    },
    {
      stationCode: "MKI",
      stationID: 174,
      stationName: "MADURANKULIYA",
    },
    {
      stationCode: "MAGALEGODA",
      stationID: 472,
      stationName: "Magalegoda",
    },
    {
      stationCode: "MGG",
      stationID: 393,
      stationName: "MAGALEGODA",
    },
    {
      stationCode: "MGN",
      stationID: 167,
      stationName: "MAGGONA",
    },
    {
      stationCode: "MGG",
      stationID: 452,
      stationName: "MAGULEGODA",
    },
    {
      stationCode: "MYA",
      stationID: 190,
      stationName: "MAHAIYAWA",
    },
    {
      stationCode: "MAG",
      stationID: 159,
      stationName: "MAHARAGAMA",
    },
    {
      stationCode: "MHO",
      stationID: 170,
      stationName: "MAHO",
    },
    {
      stationCode: "MPL",
      stationID: 182,
      stationName: "MALAPALLE",
    },
    {
      stationCode: "MAL",
      stationID: 427,
      stationName: "MALLAKAM",
    },
    {
      stationCode: "MPT",
      stationID: 183,
      stationName: "MANAMPITIYA",
    },
    {
      stationCode: "MGE",
      stationID: 165,
      stationName: "MANGALAELIYA",
    },
    {
      stationCode: "MKM",
      stationID: 331,
      stationName: "MANKULAM",
    },
    {
      stationCode: "MAN",
      stationID: 434,
      stationName: "MANNAR",
    },
    {
      stationCode: "MNG",
      stationID: 179,
      stationName: "MANUWANGAMA",
    },
    {
      stationCode: "MDA",
      stationID: 160,
      stationName: "MARADANA",
    },
    {
      stationCode: "MRK",
      stationID: 462,
      stationName: "MARAKONA",
    },
    {
      stationCode: "MRL",
      stationID: 454,
      stationName: "MARALUWEWA",
    },
    {
      stationCode: "MTL",
      stationID: 186,
      stationName: "MATALE",
    },
    {
      stationCode: "MTR",
      stationID: 187,
      stationName: "MATARA",
    },
    {
      stationCode: "MTM",
      stationID: 432,
      stationName: "MATHOTTAM",
    },
    {
      stationCode: "MWD",
      stationID: 466,
      stationName: "MAVILMADA",
    },
    {
      stationCode: "MVT",
      stationID: 425,
      stationName: "MAVITTAPURAM",
    },
    {
      stationCode: "MEM",
      stationID: 163,
      stationName: "MEDAGAMA",
    },
    {
      stationCode: "MWH",
      stationID: 189,
      stationName: "MEDAWACHCHIYA",
    },
    {
      stationCode: "MEDDEGAMA",
      stationID: 421,
      stationName: "MEDDEGAMA",
    },
    {
      stationCode: "MGN",
      stationID: 464,
      stationName: "MEEGAMMANA",
    },
    {
      stationCode: "MGD",
      stationID: 164,
      stationName: "MEEGODA",
    },
    {
      stationCode: "MES",
      stationID: 403,
      stationName: "MEESALAI",
    },
    {
      stationCode: "MWA",
      stationID: 188,
      stationName: "MHA INDURUWA",
    },
    {
      stationCode: "MED",
      stationID: 162,
      stationName: "MIDIGAMA",
    },
    {
      stationCode: "MHN",
      stationID: 169,
      stationName: "MIHINTALE",
    },
    {
      stationCode: "MHJ",
      stationID: 168,
      stationName: "MIHINTALE JUNCTION",
    },
    {
      stationCode: "MIY",
      stationID: 173,
      stationName: "MINNERIYA",
    },
    {
      stationCode: "MIR",
      stationID: 171,
      stationName: "MIRIGAMA",
    },
    {
      stationCode: "MIRIHANPITIGAMA",
      stationID: 409,
      stationName: "MIRIHANPITIGAMA",
    },
    {
      stationCode: "MIS",
      stationID: 172,
      stationName: "MIRISSA",
    },
    {
      stationCode: "Miriswatte",
      stationID: 443,
      stationName: "MIRISWATTA",
    },
    {
      stationCode: "MSL",
      stationID: 402,
      stationName: "MIRUSUVIL",
    },
    {
      stationCode: "MLP",
      stationID: 177,
      stationName: "MOLLIPATANA",
    },
    {
      stationCode: "MLG",
      stationID: 176,
      stationName: "MORAGOLLAGAMA",
    },
    {
      stationCode: "MKP",
      stationID: 175,
      stationName: "MORAKELE",
    },
    {
      stationCode: "MRT",
      stationID: 184,
      stationName: "MORATUWA",
    },
    {
      stationCode: "MLV",
      stationID: 439,
      stationName: "MOUNT LAVINIA",
    },
    {
      stationCode: "MNL",
      stationID: 180,
      stationName: "MUNDAL",
    },
    {
      stationCode: "MRK",
      stationID: 332,
      stationName: "MURIKANDY",
    },
    {
      stationCode: "MUK",
      stationID: 431,
      stationName: "MURUNKAN",
    },
    {
      stationCode: "MTG",
      stationID: 185,
      stationName: "MUTHTHETTUGALA",
    },
    {
      stationCode: "NAG",
      stationID: 191,
      stationName: "NAGOLLAGAMA",
    },
    {
      stationCode: "NLY",
      stationID: 196,
      stationName: "NAILIYA",
    },
    {
      stationCode: "NOA",
      stationID: 197,
      stationName: "NANUOYA",
    },
    {
      stationCode: "NHP",
      stationID: 195,
      stationName: "NARAHENPITA",
    },
    {
      stationCode: "NAT",
      stationID: 192,
      stationName: "NATTANDIYA",
    },
    {
      stationCode: "NVT",
      stationID: 399,
      stationName: "NAVATKULI",
    },
    {
      stationCode: "NVP",
      stationID: 201,
      stationName: "NAWALAPITIYA",
    },
    {
      stationCode: "NWN",
      stationID: 202,
      stationName: "NAWINNA",
    },
    {
      stationCode: "NGM",
      stationID: 194,
      stationName: "NEGAMA",
    },
    {
      stationCode: "NGB",
      stationID: 193,
      stationName: "NEGOMBO",
    },
    {
      stationCode: "NELUMPATHGAMA",
      stationID: 415,
      stationName: "NELUMPATHGAMA",
    },
    {
      stationCode: "NPK",
      stationID: 199,
      stationName: "NELUMPOKUNA",
    },
    {
      stationCode: "NYK",
      stationID: 370,
      stationName: "NERIYAKULAM",
    },
    {
      stationCode: "NOR",
      stationID: 198,
      stationName: "NOORANAGAR",
    },
    {
      stationCode: "NUG",
      stationID: 200,
      stationName: "NUGEGODA",
    },
    {
      stationCode: "OHA",
      stationID: 203,
      stationName: "OHIYA",
    },
    {
      stationCode: "OMT",
      stationID: 204,
      stationName: "OMANTHAI",
    },
    {
      stationCode: "PDK",
      stationID: 208,
      stationName: "PADUKKA",
    },
    {
      stationCode: "PAHALAWARDHANA",
      stationID: 420,
      stationName: "PAHALAWARDHANA",
    },
    {
      stationCode: "PVI",
      stationID: 238,
      stationName: "PALAVI",
    },
    {
      stationCode: "PAL",
      stationID: 396,
      stationName: "PALLAI",
    },
    {
      stationCode: "PALLE TALAWINNA",
      stationID: 465,
      stationName: "PALLE TALAVINNA",
    },
    {
      stationCode: "PLL",
      stationID: 219,
      stationName: "PALLEWALA",
    },
    {
      stationCode: "PUW",
      stationID: 237,
      stationName: "PALUGASWEWA",
    },
    {
      stationCode: "PND",
      stationID: 223,
      stationName: "PANADURA",
    },
    {
      stationCode: "PNG",
      stationID: 224,
      stationName: "PANAGODA",
    },
    {
      stationCode: "PNL",
      stationID: 226,
      stationName: "PANALEEYA",
    },
    {
      stationCode: "PRW",
      stationID: 233,
      stationName: "PANGIRIWATTA",
    },
    {
      stationCode: "PAN",
      stationID: 205,
      stationName: "PANNIPITIYA",
    },
    {
      stationCode: "PKU",
      stationID: 216,
      stationName: "PARAKUMPURA",
    },
    {
      stationCode: "PRN",
      stationID: 394,
      stationName: "PARANTHAN",
    },
    {
      stationCode: "PHW",
      stationID: 213,
      stationName: "PARASANGAHAWEWA",
    },
    {
      stationCode: "PGD",
      stationID: 209,
      stationName: "PATAGAMGODA",
    },
    {
      stationCode: "PTP",
      stationID: 236,
      stationName: "PATHANPHA",
    },
    {
      stationCode: "PPL",
      stationID: 230,
      stationName: "PATTIPOLA",
    },
    {
      stationCode: "PGN",
      stationID: 211,
      stationName: "PAYAGALA NORTH",
    },
    {
      stationCode: "PGS",
      stationID: 212,
      stationName: "PAYAGALA SOUTH",
    },
    {
      stationCode: "PRP",
      stationID: 232,
      stationName: "PEMROSE",
    },
    {
      stationCode: "PDA",
      stationID: 207,
      stationName: "PERADENIYA",
    },
    {
      stationCode: "PKP",
      stationID: 459,
      stationName: "PERAKUMPURA",
    },
    {
      stationCode: "PRL",
      stationID: 231,
      stationName: "PERALANDA",
    },
    {
      stationCode: "PNV",
      stationID: 227,
      stationName: "PERIYANAGAVILLU",
    },
    {
      stationCode: "PES",
      stationID: 436,
      stationName: "PESALAI",
    },
    {
      stationCode: "PLD",
      stationID: 217,
      stationName: "PILIDUWA",
    },
    {
      stationCode: "PLT",
      stationID: 222,
      stationName: "PILIMATALAWA",
    },
    {
      stationCode: "PINNAGOLLA",
      stationID: 416,
      stationName: "PINNAGOLLA",
    },
    {
      stationCode: "PNW",
      stationID: 228,
      stationName: "PINNAWALA",
    },
    {
      stationCode: "PIN",
      stationID: 214,
      stationName: "PINWATTE",
    },
    {
      stationCode: "PGM",
      stationID: 210,
      stationName: "PIYADIGAMA",
    },
    {
      stationCode: "PYA",
      stationID: 240,
      stationName: "PIYAGAMA",
    },
    {
      stationCode: "Polgaha Anga",
      stationID: 477,
      stationName: "Polgaha Anga",
    },
    {
      stationCode: "PLG",
      stationID: 218,
      stationName: "POLGAHAWELA",
    },
    {
      stationCode: "PLN",
      stationID: 220,
      stationName: "POLONNARUWA",
    },
    {
      stationCode: "PLR",
      stationID: 221,
      stationName: "POLWATHUMODARA",
    },
    {
      stationCode: "PON",
      stationID: 229,
      stationName: "POONEWA",
    },
    {
      stationCode: "PORAPOLA",
      stationID: 419,
      stationName: "PORAPOLA",
    },
    {
      stationCode: "PORAPOLA JUNC.",
      stationID: 418,
      stationName: "PORAPOLA JUNC.",
    },
    {
      stationCode: "PTA",
      stationID: 234,
      stationName: "POTUHERA",
    },
    {
      stationCode: "PCK",
      stationID: 206,
      stationName: "PULACHCHIKULAM",
    },
    {
      stationCode: "PKM",
      stationID: 330,
      stationName: "PULIYANKULAM",
    },
    {
      stationCode: "PNI",
      stationID: 225,
      stationName: "PUNANI",
    },
    {
      stationCode: "PNK",
      stationID: 406,
      stationName: "PUNKANKULAM",
    },
    {
      stationCode: "PTM",
      stationID: 235,
      stationName: "PUTTALAM",
    },
    {
      stationCode: "PWP",
      stationID: 445,
      stationName: "PUWAKPITIYA",
    },
    {
      stationCode: "PWP Town",
      stationID: 446,
      stationName: "PUWAKPITIYA TOWN",
    },
    {
      stationCode: "RDL",
      stationID: 243,
      stationName: "RADELLA",
    },
    {
      stationCode: "RGM",
      stationID: 246,
      stationName: "RAGAMA",
    },
    {
      stationCode: "RBK",
      stationID: 241,
      stationName: "RAMBUKKANA",
    },
    {
      stationCode: "RMA",
      stationID: 247,
      stationName: "RANAMUGGAMUWA",
    },
    {
      stationCode: "RGA",
      stationID: 245,
      stationName: "RANDENIGAMA",
    },
    {
      stationCode: "RTG",
      stationID: 249,
      stationName: "RATHGAMA",
    },
    {
      stationCode: "RML",
      stationID: 248,
      stationName: "RATMALANA",
    },
    {
      stationCode: "RDL",
      stationID: 244,
      stationName: "REDEETHENNA",
    },
    {
      stationCode: "RCH",
      stationID: 242,
      stationName: "RICHMOND HILL",
    },
    {
      stationCode: "RZL",
      stationID: 250,
      stationName: "ROSELLA",
    },
    {
      stationCode: "SAL",
      stationID: 251,
      stationName: "SALIYAPURA",
    },
    {
      stationCode: "SAK",
      stationID: 404,
      stationName: "SANKATHANAI",
    },
    {
      stationCode: "SUA",
      stationID: 257,
      stationName: "SARASAVIUYANA",
    },
    {
      stationCode: "SWR",
      stationID: 259,
      stationName: "SAWARANA",
    },
    {
      stationCode: "SCR",
      stationID: 252,
      stationName: "SECRETARTAT HALT",
    },
    {
      stationCode: "SED",
      stationID: 253,
      stationName: "SEEDUWA",
    },
    {
      stationCode: "SMA",
      stationID: 255,
      stationName: "SEENIGAMA",
    },
    {
      stationCode: "SGM",
      stationID: 254,
      stationName: "SENARATHGAMA",
    },
    {
      stationCode: "SVP",
      stationID: 258,
      stationName: "SEVANAPITIYA",
    },
    {
      stationCode: "SLM",
      stationID: 339,
      stationName: "SIYABALANGAMUWA",
    },
    {
      stationCode: "SYA",
      stationID: 260,
      stationName: "SIYALANGAMUWA",
    },
    {
      stationCode: "SRP",
      stationID: 256,
      stationName: "SRAWASTHIPURA",
    },
    {
      stationCode: "TLM",
      stationID: 437,
      stationName: "TALAIMANNAR",
    },
    {
      stationCode: "TMP",
      stationID: 438,
      stationName: "TALAIMANNAR PIER",
    },
    {
      stationCode: "TLA",
      stationID: 270,
      stationName: "TALAWA",
    },
    {
      stationCode: "TKL",
      stationID: 269,
      stationName: "TALAWAKELE",
    },
    {
      stationCode: "TWG",
      stationID: 276,
      stationName: "TALAWATTEGEDARA",
    },
    {
      stationCode: "TWO",
      stationID: 461,
      stationName: "TAWALANOYA",
    },
    {
      stationCode: "TPI",
      stationID: 426,
      stationName: "TELLIPALLAI",
    },
    {
      stationCode: "TWT",
      stationID: 277,
      stationName: "TELWATTE",
    },
    {
      stationCode: "TBL",
      stationID: 262,
      stationName: "TEMBLIGALA",
    },
    {
      stationCode: "TPH",
      stationID: 405,
      stationName: "THACHANTHOPPU",
    },
    {
      stationCode: "TLP",
      stationID: 271,
      stationName: "THALPE",
    },
    {
      stationCode: "THAMBAGALLA",
      stationID: 414,
      stationName: "THAMBAGALLA",
    },
    {
      stationCode: "TBM",
      stationID: 263,
      stationName: "THAMBUTTEGAMA",
    },
    {
      stationCode: "TAN",
      stationID: 450,
      stationName: "THAMPALAKAMAM",
    },
    {
      stationCode: "TDK",
      stationID: 265,
      stationName: "THANDIKULAM",
    },
    {
      stationCode: "TVM",
      stationID: 433,
      stationName: "THIIRUKETHEESWARAM",
    },
    {
      stationCode: "TDY",
      stationID: 267,
      stationName: "THILLADIYA",
    },
    {
      stationCode: "TNA",
      stationID: 272,
      stationName: "THIRANAGAMA",
    },
    {
      stationCode: "TVD",
      stationID: 435,
      stationName: "THODDAVELI",
    },
    {
      stationCode: "THURULIYAGAMA",
      stationID: 455,
      stationName: "Thuruliyagama",
    },
    {
      stationCode: "TIM",
      stationID: 268,
      stationName: "TIMBIRIYAGEDARA",
    },
    {
      stationCode: "TSM",
      stationID: 274,
      stationName: "TISMALPOLA",
    },
    {
      stationCode: "TRH",
      stationID: 273,
      stationName: "TRAIN HALT 01",
    },
    {
      stationCode: "TCO",
      stationID: 264,
      stationName: "TRINCOMALEE",
    },
    {
      stationCode: "TUD",
      stationID: 275,
      stationName: "TUDELLA",
    },
    {
      stationCode: "TDR",
      stationID: 266,
      stationName: "TUMMODARA",
    },
    {
      stationCode: "UDL",
      stationID: 278,
      stationName: "UDATALAWINNA",
    },
    {
      stationCode: "UWL",
      stationID: 285,
      stationName: "UDATHTHAWALA",
    },
    {
      stationCode: "UHM",
      stationID: 281,
      stationName: "UDHAMULLA",
    },
    {
      stationCode: "UDUGODAGAMA",
      stationID: 413,
      stationName: "UDUGODAGAMA",
    },
    {
      stationCode: "UDW",
      stationID: 279,
      stationName: "UDUWARA",
    },
    {
      stationCode: "UGL",
      stationID: 280,
      stationName: "UGGALLA",
    },
    {
      stationCode: "UKL",
      stationID: 282,
      stationName: "UKUWELA",
    },
    {
      stationCode: "ULP",
      stationID: 283,
      stationName: "ULAPANE",
    },
    {
      stationCode: "UNW",
      stationID: 284,
      stationName: "UNAWATUNA",
    },
    {
      stationCode: "URW",
      stationID: 451,
      stationName: "Urugodawattha",
    },
    {
      stationCode: "UYANGALLA",
      stationID: 412,
      stationName: "UYANGALLA",
    },
    {
      stationCode: "VCH",
      stationID: 286,
      stationName: "VALACHCHENEI",
    },
    {
      stationCode: "VML",
      stationID: 288,
      stationName: "VANDARAMULLAI",
    },
    {
      stationCode: "VNA",
      stationID: 289,
      stationName: "VAVUNIYA",
    },
    {
      stationCode: "VGD",
      stationID: 287,
      stationName: "VEYANGODA",
    },
    {
      stationCode: "WLP",
      stationID: 340,
      stationName: "VIRALMURIPPUWA",
    },
    {
      stationCode: "WDA",
      stationID: 292,
      stationName: "WADDUWA",
    },
    {
      stationCode: "WGG",
      stationID: 295,
      stationName: "WAGA",
    },
    {
      stationCode: "WKL",
      stationID: 299,
      stationName: "WAIKKALA",
    },
    {
      stationCode: "WHP",
      stationID: 296,
      stationName: "WALAHAPITIYA",
    },
    {
      stationCode: "WALASWEWA",
      stationID: 407,
      stationName: "WALASWEWA",
    },
    {
      stationCode: "WLG",
      stationID: 301,
      stationName: "WALGAMA",
    },
    {
      stationCode: "WPA",
      stationID: 303,
      stationName: "WALPOLA",
    },
    {
      stationCode: "WSL",
      stationID: 306,
      stationName: "WANAWASALA",
    },
    {
      stationCode: "WRW",
      stationID: 305,
      stationName: "WANDURAWA",
    },
    {
      stationCode: "WTG",
      stationID: 308,
      stationName: "WATAGODA",
    },
    {
      stationCode: "WAP",
      stationID: 336,
      stationName: "WATARAKA",
    },
    {
      stationCode: "WLA",
      stationID: 300,
      stationName: "WATAWALA",
    },
    {
      stationCode: "WGA",
      stationID: 294,
      stationName: "WATTEGAMA",
    },
    {
      stationCode: "Weligalla",
      stationID: 478,
      stationName: "Weligalla",
    },
    {
      stationCode: "WLM",
      stationID: 302,
      stationName: "WELIGAMA",
    },
    {
      stationCode: "WKD",
      stationID: 298,
      stationName: "WELIKANDA",
    },
    {
      stationCode: "WEL",
      stationID: 293,
      stationName: "WELLAWA",
    },
    {
      stationCode: "WTE",
      stationID: 307,
      stationName: "WELLAWATTA",
    },
    {
      stationCode: "WERAGALA",
      stationID: 411,
      stationName: "WERAGALA",
    },
    {
      stationCode: "WRD",
      stationID: 304,
      stationName: "WIJAYARAJADAHANA",
    },
    {
      stationCode: "WWT",
      stationID: 309,
      stationName: "WILWATTE",
    },
    {
      stationCode: "WKA",
      stationID: 297,
      stationName: "WLAKUBURA",
    },
    {
      stationCode: "YGD",
      stationID: 473,
      stationName: "YAGODA",
    },
    {
      stationCode: "YGD",
      stationID: 387,
      stationName: "YAGODA",
    },
    {
      stationCode: "YPW",
      stationID: 315,
      stationName: "YAPAHUWA",
    },
    {
      stationCode: "YGM",
      stationID: 313,
      stationName: "YATAGAMA",
    },
    {
      stationCode: "YWR",
      stationID: 463,
      stationName: "YATAWARA",
    },
    {
      stationCode: "YTR",
      stationID: 311,
      stationName: "YATIRAWANA",
    },
    {
      stationCode: "YTG",
      stationID: 316,
      stationName: "YATTALGODA",
    },
  ];

  data.map(async station => {
    const response = await query(
      "INSERT INTO station(stationName, stationCode, district, distanceFromFort) VALUES(?, ?, '', 0)",
      [station.stationName, station.stationCode]
    );
  });
});

module.exports = Router;
