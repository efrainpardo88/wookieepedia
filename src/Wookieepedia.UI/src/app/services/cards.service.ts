import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  resourceMap: {};

  constructor() {
    this.resourceMap = {
      "films": [
        {
          "id": "1",
          "name": "A New Hope"
        },
        {
          "id": "2",
          "name": "The Empire Strikes Back"
        },
        {
          "id": "3",
          "name": "Return of the Jedi"
        },
        {
          "id": "4",
          "name": "The Phantom Menace"
        },
        {
          "id": "5",
          "name": "Attack of the Clones"
        },
        {
          "id": "6",
          "name": "Revenge of the Sith"
        },
        {
          "id": "7",
          "name": "The Force Awakens"
        }
      ],
      "people": [
        {
          "id": "1",
          "name": "Luke Skywalker"
        },
        {
          "id": "2",
          "name": "C-3PO"
        },
        {
          "id": "3",
          "name": "R2-D2"
        },
        {
          "id": "4",
          "name": "Darth Vader"
        },
        {
          "id": "5",
          "name": "Leia Organa"
        },
        {
          "id": "6",
          "name": "Owen Lars"
        },
        {
          "id": "7",
          "name": "Beru Whitesun lars"
        },
        {
          "id": "8",
          "name": "R5-D4"
        },
        {
          "id": "9",
          "name": "Biggs Darklighter"
        },
        {
          "id": "10",
          "name": "Obi-Wan Kenobi"
        },
        {
          "id": "11",
          "name": "Anakin Skywalker"
        },
        {
          "id": "12",
          "name": "Wilhuff Tarkin"
        },
        {
          "id": "13",
          "name": "Chewbacca"
        },
        {
          "id": "14",
          "name": "Han Solo"
        },
        {
          "id": "15",
          "name": "Greedo"
        },
        {
          "id": "16",
          "name": "Jabba Desilijic Tiure"
        },
        {
          "id": "18",
          "name": "Wedge Antilles"
        },
        {
          "id": "19",
          "name": "Jek Tono Porkins"
        },
        {
          "id": "20",
          "name": "Yoda"
        },
        {
          "id": "21",
          "name": "Palpatine"
        },
        {
          "id": "22",
          "name": "Boba Fett"
        },
        {
          "id": "23",
          "name": "IG-88"
        },
        {
          "id": "24",
          "name": "Bossk"
        },
        {
          "id": "25",
          "name": "Lando Calrissian"
        },
        {
          "id": "26",
          "name": "Lobot"
        },
        {
          "id": "27",
          "name": "Ackbar"
        },
        {
          "id": "28",
          "name": "Mon Mothma"
        },
        {
          "id": "29",
          "name": "Arvel Crynyd"
        },
        {
          "id": "30",
          "name": "Wicket Systri Warrick"
        },
        {
          "id": "31",
          "name": "Nien Nunb"
        },
        {
          "id": "32",
          "name": "Qui-Gon Jinn"
        },
        {
          "id": "33",
          "name": "Nute Gunray"
        },
        {
          "id": "34",
          "name": "Finis Valorum"
        },
        {
          "id": "35",
          "name": "Padmé Amidala"
        },
        {
          "id": "36",
          "name": "Jar Jar Binks"
        },
        {
          "id": "37",
          "name": "Roos Tarpals"
        },
        {
          "id": "38",
          "name": "Rugor Nass"
        },
        {
          "id": "39",
          "name": "Ric Olié"
        },
        {
          "id": "40",
          "name": "Watto"
        },
        {
          "id": "41",
          "name": "Sebulba"
        },
        {
          "id": "42",
          "name": "Quarsh Panaka"
        },
        {
          "id": "43",
          "name": "Shmi Skywalker"
        },
        {
          "id": "44",
          "name": "Darth Maul"
        },
        {
          "id": "45",
          "name": "Bib Fortuna"
        },
        {
          "id": "46",
          "name": "Ayla Secura"
        },
        {
          "id": "47",
          "name": "Ratts Tyerel"
        },
        {
          "id": "48",
          "name": "Dud Bolt"
        },
        {
          "id": "49",
          "name": "Gasgano"
        },
        {
          "id": "50",
          "name": "Ben Quadinaros"
        },
        {
          "id": "51",
          "name": "Mace Windu"
        },
        {
          "id": "52",
          "name": "Ki-Adi-Mundi"
        },
        {
          "id": "53",
          "name": "Kit Fisto"
        },
        {
          "id": "54",
          "name": "Eeth Koth"
        },
        {
          "id": "55",
          "name": "Adi Gallia"
        },
        {
          "id": "56",
          "name": "Saesee Tiin"
        },
        {
          "id": "57",
          "name": "Yarael Poof"
        },
        {
          "id": "58",
          "name": "Plo Koon"
        },
        {
          "id": "59",
          "name": "Mas Amedda"
        },
        {
          "id": "60",
          "name": "Gregar Typho"
        },
        {
          "id": "61",
          "name": "Cordé"
        },
        {
          "id": "62",
          "name": "Cliegg Lars"
        },
        {
          "id": "63",
          "name": "Poggle the Lesser"
        },
        {
          "id": "64",
          "name": "Luminara Unduli"
        },
        {
          "id": "65",
          "name": "Barriss Offee"
        },
        {
          "id": "66",
          "name": "Dormé"
        },
        {
          "id": "67",
          "name": "Dooku"
        },
        {
          "id": "68",
          "name": "Bail Prestor Organa"
        },
        {
          "id": "69",
          "name": "Jango Fett"
        },
        {
          "id": "70",
          "name": "Zam Wesell"
        },
        {
          "id": "71",
          "name": "Dexter Jettster"
        },
        {
          "id": "72",
          "name": "Lama Su"
        },
        {
          "id": "73",
          "name": "Taun We"
        },
        {
          "id": "74",
          "name": "Jocasta Nu"
        },
        {
          "id": "75",
          "name": "R4-P17"
        },
        {
          "id": "76",
          "name": "Wat Tambor"
        },
        {
          "id": "77",
          "name": "San Hill"
        },
        {
          "id": "78",
          "name": "Shaak Ti"
        },
        {
          "id": "79",
          "name": "Grievous"
        },
        {
          "id": "80",
          "name": "Tarfful"
        },
        {
          "id": "81",
          "name": "Raymus Antilles"
        },
        {
          "id": "82",
          "name": "Sly Moore"
        },
        {
          "id": "83",
          "name": "Tion Medon"
        },
        {
          "id": "84",
          "name": "Finn"
        },
        {
          "id": "85",
          "name": "Rey"
        },
        {
          "id": "86",
          "name": "Poe Dameron"
        },
        {
          "id": "87",
          "name": "BB8"
        },
        {
          "id": "88",
          "name": "Captain Phasma"
        }
      ],
      "planets": [
        {
          "id": "1",
          "name": "Tatooine"
        },
        {
          "id": "2",
          "name": "Alderaan"
        },
        {
          "id": "3",
          "name": "Yavin IV"
        },
        {
          "id": "4",
          "name": "Hoth"
        },
        {
          "id": "5",
          "name": "Dagobah"
        },
        {
          "id": "6",
          "name": "Bespin"
        },
        {
          "id": "7",
          "name": "Endor"
        },
        {
          "id": "8",
          "name": "Naboo"
        },
        {
          "id": "9",
          "name": "Coruscant"
        },
        {
          "id": "10",
          "name": "Kamino"
        },
        {
          "id": "11",
          "name": "Geonosis"
        },
        {
          "id": "12",
          "name": "Utapau"
        },
        {
          "id": "13",
          "name": "Mustafar"
        },
        {
          "id": "14",
          "name": "Kashyyyk"
        },
        {
          "id": "15",
          "name": "Polis Massa"
        },
        {
          "id": "16",
          "name": "Mygeeto"
        },
        {
          "id": "17",
          "name": "Felucia"
        },
        {
          "id": "18",
          "name": "Cato Neimoidia"
        },
        {
          "id": "19",
          "name": "Saleucami"
        },
        {
          "id": "20",
          "name": "Stewjon"
        },
        {
          "id": "21",
          "name": "Eriadu"
        },
        {
          "id": "22",
          "name": "Corellia"
        },
        {
          "id": "23",
          "name": "Rodia"
        },
        {
          "id": "24",
          "name": "Nal Hutta"
        },
        {
          "id": "25",
          "name": "Dantooine"
        },
        {
          "id": "26",
          "name": "Bestine IV"
        },
        {
          "id": "27",
          "name": "Ord Mantell"
        },
        {
          "id": "28",
          "name": "unknown"
        },
        {
          "id": "29",
          "name": "Trandosha"
        },
        {
          "id": "30",
          "name": "Socorro"
        },
        {
          "id": "31",
          "name": "Mon Cala"
        },
        {
          "id": "32",
          "name": "Chandrila"
        },
        {
          "id": "33",
          "name": "Sullust"
        },
        {
          "id": "34",
          "name": "Toydaria"
        },
        {
          "id": "35",
          "name": "Malastare"
        },
        {
          "id": "36",
          "name": "Dathomir"
        },
        {
          "id": "37",
          "name": "Ryloth"
        },
        {
          "id": "38",
          "name": "Aleen Minor"
        },
        {
          "id": "39",
          "name": "Vulpter"
        },
        {
          "id": "40",
          "name": "Troiken"
        },
        {
          "id": "41",
          "name": "Tund"
        },
        {
          "id": "42",
          "name": "Haruun Kal"
        },
        {
          "id": "43",
          "name": "Cerea"
        },
        {
          "id": "44",
          "name": "Glee Anselm"
        },
        {
          "id": "45",
          "name": "Iridonia"
        },
        {
          "id": "46",
          "name": "Tholoth"
        },
        {
          "id": "47",
          "name": "Iktotch"
        },
        {
          "id": "48",
          "name": "Quermia"
        },
        {
          "id": "49",
          "name": "Dorin"
        },
        {
          "id": "50",
          "name": "Champala"
        },
        {
          "id": "51",
          "name": "Mirial"
        },
        {
          "id": "52",
          "name": "Serenno"
        },
        {
          "id": "53",
          "name": "Concord Dawn"
        },
        {
          "id": "54",
          "name": "Zolan"
        },
        {
          "id": "55",
          "name": "Ojom"
        },
        {
          "id": "56",
          "name": "Skako"
        },
        {
          "id": "57",
          "name": "Muunilinst"
        },
        {
          "id": "58",
          "name": "Shili"
        },
        {
          "id": "59",
          "name": "Kalee"
        },
        {
          "id": "60",
          "name": "Umbara"
        },
        {
          "id": "61",
          "name": "Jakku"
        }
      ],
      "species": [
        {
          "id": "1",
          "name": "Human"
        },
        {
          "id": "2",
          "name": "Droid"
        },
        {
          "id": "3",
          "name": "Wookiee"
        },
        {
          "id": "4",
          "name": "Rodian"
        },
        {
          "id": "5",
          "name": "Hutt"
        },
        {
          "id": "6",
          "name": "Yoda's species"
        },
        {
          "id": "7",
          "name": "Trandoshan"
        },
        {
          "id": "8",
          "name": "Mon Calamari"
        },
        {
          "id": "9",
          "name": "Ewok"
        },
        {
          "id": "10",
          "name": "Sullustan"
        },
        {
          "id": "11",
          "name": "Neimodian"
        },
        {
          "id": "12",
          "name": "Gungan"
        },
        {
          "id": "13",
          "name": "Toydarian"
        },
        {
          "id": "14",
          "name": "Dug"
        },
        {
          "id": "15",
          "name": "Twi'lek"
        },
        {
          "id": "16",
          "name": "Aleena"
        },
        {
          "id": "17",
          "name": "Vulptereen"
        },
        {
          "id": "18",
          "name": "Xexto"
        },
        {
          "id": "19",
          "name": "Toong"
        },
        {
          "id": "20",
          "name": "Cerean"
        },
        {
          "id": "21",
          "name": "Nautolan"
        },
        {
          "id": "22",
          "name": "Zabrak"
        },
        {
          "id": "23",
          "name": "Tholothian"
        },
        {
          "id": "24",
          "name": "Iktotchi"
        },
        {
          "id": "25",
          "name": "Quermian"
        },
        {
          "id": "26",
          "name": "Kel Dor"
        },
        {
          "id": "27",
          "name": "Chagrian"
        },
        {
          "id": "28",
          "name": "Geonosian"
        },
        {
          "id": "29",
          "name": "Mirialan"
        },
        {
          "id": "30",
          "name": "Clawdite"
        },
        {
          "id": "31",
          "name": "Besalisk"
        },
        {
          "id": "32",
          "name": "Kaminoan"
        },
        {
          "id": "33",
          "name": "Skakoan"
        },
        {
          "id": "34",
          "name": "Muun"
        },
        {
          "id": "35",
          "name": "Togruta"
        },
        {
          "id": "36",
          "name": "Kaleesh"
        },
        {
          "id": "37",
          "name": "Pau'an"
        }
      ],
      "vehicles": [
        {
          "id": "4",
          "name": "Sand Crawler"
        },
        {
          "id": "6",
          "name": "T-16 skyhopper"
        },
        {
          "id": "7",
          "name": "X-34 landspeeder"
        },
        {
          "id": "8",
          "name": "TIELN starfighter"
        },
        {
          "id": "14",
          "name": "Snowspeeder"
        },
        {
          "id": "16",
          "name": "TIE bomber"
        },
        {
          "id": "18",
          "name": "AT-AT"
        },
        {
          "id": "19",
          "name": "AT-ST"
        },
        {
          "id": "20",
          "name": "Storm IV Twin-Pod cloud car"
        },
        {
          "id": "24",
          "name": "Sail barge"
        },
        {
          "id": "25",
          "name": "Bantha-II cargo skiff"
        },
        {
          "id": "26",
          "name": "TIEIN interceptor"
        },
        {
          "id": "30",
          "name": "Imperial Speeder Bike"
        },
        {
          "id": "33",
          "name": "Vulture Droid"
        },
        {
          "id": "34",
          "name": "Multi-Troop Transport"
        },
        {
          "id": "35",
          "name": "Armored Assault Tank"
        },
        {
          "id": "36",
          "name": "Single Trooper Aerial Platform"
        },
        {
          "id": "37",
          "name": "C-9979 landing craft"
        },
        {
          "id": "38",
          "name": "Tribubble bongo"
        },
        {
          "id": "42",
          "name": "Sith speeder"
        },
        {
          "id": "44",
          "name": "Zephyr-G swoop bike"
        },
        {
          "id": "45",
          "name": "Koro-2 Exodrive airspeeder"
        },
        {
          "id": "46",
          "name": "XJ-6 airspeeder"
        },
        {
          "id": "50",
          "name": "LAATi"
        },
        {
          "id": "51",
          "name": "LAATc"
        },
        {
          "id": "53",
          "name": "AT-TE"
        },
        {
          "id": "54",
          "name": "SPHA"
        },
        {
          "id": "55",
          "name": "Flitknot speeder"
        },
        {
          "id": "56",
          "name": "Neimoidian shuttle"
        },
        {
          "id": "57",
          "name": "Geonosian starfighter"
        },
        {
          "id": "60",
          "name": "Tsmeu-6 personal wheel bike"
        },
        {
          "id": "62",
          "name": "Emergency Firespeeder"
        },
        {
          "id": "67",
          "name": "Droid tri-fighter"
        },
        {
          "id": "69",
          "name": "Oevvaor jet catamaran"
        },
        {
          "id": "70",
          "name": "Raddaugh Gnasp fluttercraft"
        },
        {
          "id": "71",
          "name": "Clone turbo tank"
        },
        {
          "id": "72",
          "name": "Corporate Alliance tank droid"
        },
        {
          "id": "73",
          "name": "Droid gunship"
        },
        {
          "id": "76",
          "name": "AT-RT"
        }
      ],
      "starships": [
        {
          "id": "2",
          "name": "CR90 corvette"
        },
        {
          "id": "3",
          "name": "Star Destroyer"
        },
        {
          "id": "5",
          "name": "Sentinel-class landing craft"
        },
        {
          "id": "9",
          "name": "Death Star"
        },
        {
          "id": "10",
          "name": "Millennium Falcon"
        },
        {
          "id": "11",
          "name": "Y-wing"
        },
        {
          "id": "12",
          "name": "X-wing"
        },
        {
          "id": "13",
          "name": "TIE Advanced x1"
        },
        {
          "id": "15",
          "name": "Executor"
        },
        {
          "id": "17",
          "name": "Rebel transport"
        },
        {
          "id": "21",
          "name": "Slave 1"
        },
        {
          "id": "22",
          "name": "Imperial shuttle"
        },
        {
          "id": "23",
          "name": "EF76 Nebulon-B escort frigate"
        },
        {
          "id": "27",
          "name": "Calamari Cruiser"
        },
        {
          "id": "28",
          "name": "A-wing"
        },
        {
          "id": "29",
          "name": "B-wing"
        },
        {
          "id": "31",
          "name": "Republic Cruiser"
        },
        {
          "id": "32",
          "name": "Droid control ship"
        },
        {
          "id": "39",
          "name": "Naboo fighter"
        },
        {
          "id": "40",
          "name": "Naboo Royal Starship"
        },
        {
          "id": "41",
          "name": "Scimitar"
        },
        {
          "id": "43",
          "name": "J-type diplomatic barge"
        },
        {
          "id": "47",
          "name": "AA-9 Coruscant freighter"
        },
        {
          "id": "48",
          "name": "Jedi starfighter"
        },
        {
          "id": "49",
          "name": "H-type Nubian yacht"
        },
        {
          "id": "52",
          "name": "Republic Assault ship"
        },
        {
          "id": "58",
          "name": "Solar Sailer"
        },
        {
          "id": "59",
          "name": "Trade Federation cruiser"
        },
        {
          "id": "61",
          "name": "Theta-class T-2c shuttle"
        },
        {
          "id": "63",
          "name": "Republic attack cruiser"
        },
        {
          "id": "64",
          "name": "Naboo star skiff"
        },
        {
          "id": "65",
          "name": "Jedi Interceptor"
        },
        {
          "id": "66",
          "name": "arc-170"
        },
        {
          "id": "68",
          "name": "Banking clan frigte"
        },
        {
          "id": "74",
          "name": "Belbullab-22 starfighter"
        },
        {
          "id": "75",
          "name": "V-wing"
        }
      ]
    }
  }

  getResourceAsCard(resource) {
    resource = this.getCards(resource.map(x => x.url ));
    return resource;
  }

  getResourceWithCards(resource) {
    if (resource.films) {
      const cards = this.getCards(resource.films);
      resource.films = {
        count: cards.length,
        results: cards,
        resourceType: "MOVIES"
      };
    }
    if (resource.people) {
      const cards = this.getCards(resource.people);
      resource.people = {
        count: cards.length,
        results: cards,
        resourceType: "CHARACTERS"
      };
    }
    if (resource.planets) {
      const cards = this.getCards(resource.planets);
      resource.planets = {
        count: cards.length,
        results: cards,
        resourceType: "PLANETS"
      };
    }
    if (resource.species) {
      const cards = this.getCards(resource.species);
      resource.species = {
        count: cards.length,
        results: cards,
        resourceType: "SPECIES"
      };
    }
    if (resource.starships) {
      const cards = this.getCards(resource.starships);
      resource.starships = {
        count: cards.length,
        results: cards,
        resourceType: "STARSHIPS"
      };
    }
    if (resource.vehicles) {
      const cards = this.getCards(resource.vehicles);
      resource.vehicles = {
        count: cards.length,
        results: cards,
        resourceType: "VEHICLES"
      };
    }
    if (resource.pilots) {
      const cards = this.getCards(resource.pilots);
      resource.pilots = {
        count: cards.length,
        results: cards,
        resourceType: "PILOTS"
      };
    }
    if (resource.residents) {
      const cards = this.getCards(resource.residents);
      resource.residents = {
        count: cards.length,
        results: cards,
        resourceType: "RESIDENTS"
      };
    }
    if (resource.homeworld) {
      const cards = this.getCards([ resource.homeworld ]);
      resource.homeworld = {
        count: cards.length,
        results: cards,
        resourceType: "HOMEWORLD"
      };
    }
    const dataUrl = resource.url.split("/");
    resource.imageUrl = "/assets/images/categories/" + dataUrl[4] + "/" + this.resourceMap[dataUrl[4]].find(x => x.id === dataUrl[5]).name.toLowerCase().replace(/\ /gi, "-") + ".jpg";

    return resource;
  }

  private getCards(data): Card[] {
    const cards: Card[] = [];
    data.forEach(item => {
      const dataUrl = item.split("/");
      cards.push({
        url: "/resources/" + dataUrl[4] + "/" + dataUrl[5],
        imageUrl: "/assets/images/categories/" + dataUrl[4] + "/" + this.resourceMap[dataUrl[4]].find(x => x.id === dataUrl[5]).name.toLowerCase().replace(/\ /gi, "-") + ".jpg",
        name: this.resourceMap[dataUrl[4]].find(x => x.id === dataUrl[5]).name
      });
    });
    return cards;
  }
}
