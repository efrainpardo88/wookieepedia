import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  resourceMap: {};

  constructor() {
    this.resourceMap = {
      "films": {
        "1": "a-new-hope.jpg",
        "2": "the-empire-strikes-back.jpg",
        "3": "return-of-the-jedi.jpg",
        "4": "the-phantom-menace.jpg",
        "5": "attack-of-the-clones.jpg",
        "6": "revenge-of-the-sith.jpg",
        "7": "the-force-awakens.jpg"
      },
      "people": {
        "1": "luke-skywalker.jpg",
        "2": "c-3po.jpg",
        "3": "r2-d2.jpg",
        "4": "darth-vader.jpg",
        "5": "leia-organa.jpg",
        "6": "owen-lars.jpg",
        "7": "beru-whitesun-lars.jpg",
        "8": "r5-d4.jpg",
        "9": "biggs-darklighter.jpg",
        "10": "obi-wan-kenobi.jpg",
        "11": "anakin-skywalker.jpg",
        "12": "wilhuff-tarkin.jpg",
        "13": "chewbacca.jpg",
        "14": "han-solo.jpg",
        "15": "greedo.jpg",
        "16": "jabba-desilijic-tiure.jpg",
        "17": "wedge-antilles.jpg",
        "18": "jek-tono-porkins.jpg",
        "19": "yoda.jpg",
        "20": "palpatine.jpg",
        "21": "boba-fett.jpg",
        "22": "ig-88.jpg",
        "23": "bossk.jpg",
        "24": "lando-calrissian.jpg",
        "25": "lobot.jpg",
        "26": "ackbar.jpg",
        "27": "mon-mothma.jpg",
        "28": "arvel-crynyd.jpg",
        "29": "wicket-systri-warrick.jpg",
        "30": "nien-nunb.jpg",
        "31": "qui-gon-jinn.jpg",
        "32": "nute-gunray.jpg",
        "33": "finis-valorum.jpg",
        "34": "padmé-amidala.jpg",
        "35": "jar-jar-binks.jpg",
        "36": "roos-tarpals.jpg",
        "37": "rugor-nass.jpg",
        "38": "ric-olié.jpg",
        "39": "watto.jpg",
        "40": "sebulba.jpg",
        "41": "quarsh-panaka.jpg",
        "42": "shmi-skywalker.jpg",
        "43": "darth-maul.jpg",
        "44": "bib-fortuna.jpg",
        "45": "ayla-secura.jpg",
        "46": "ratts-tyerel.jpg",
        "47": "dud-bolt.jpg",
        "48": "gasgano.jpg",
        "49": "ben-quadinaros.jpg",
        "50": "mace-windu.jpg",
        "51": "ki-adi-mundi.jpg",
        "52": "kit-fisto.jpg",
        "53": "eeth-koth.jpg",
        "54": "adi-gallia.jpg",
        "55": "saesee-tiin.jpg",
        "56": "yarael-poof.jpg",
        "57": "plo-koon.jpg",
        "58": "mas-amedda.jpg",
        "59": "gregar-typho.jpg",
        "60": "cordé.jpg",
        "61": "cliegg-lars.jpg",
        "62": "poggle-the-lesser.jpg",
        "63": "luminara-unduli.jpg",
        "64": "barriss-offee.jpg",
        "65": "dormé.jpg",
        "66": "dooku.jpg",
        "67": "bail-prestor-organa.jpg",
        "68": "jango-fett.jpg",
        "69": "zam-wesell.jpg",
        "70": "dexter-jettster.jpg",
        "71": "lama-su.jpg",
        "72": "taun-we.jpg",
        "73": "jocasta-nu.jpg",
        "74": "r4-p17.jpg",
        "75": "wat-tambor.jpg",
        "76": "san-hill.jpg",
        "77": "shaak-ti.jpg",
        "78": "grievous.jpg",
        "79": "tarfful.jpg",
        "80": "raymus-antilles.jpg",
        "81": "sly-moore.jpg",
        "82": "tion-medon.jpg",
        "83": "finn.jpg",
        "84": "rey.jpg",
        "85": "poe-dameron.jpg",
        "86": "bb8.jpg",
        "87": "captain-phasma.jpg"
      },
      "planets": {
        "1": "tatooine.jpg",
        "2": "alderaan.jpg",
        "3": "yavin-iv.jpg",
        "4": "hoth.jpg",
        "5": "dagobah.jpg",
        "6": "bespin.jpg",
        "7": "endor.jpg",
        "8": "naboo.jpg",
        "9": "coruscant.jpg",
        "10": "kamino.jpg",
        "11": "geonosis.jpg",
        "12": "utapau.jpg",
        "13": "mustafar.jpg",
        "14": "kashyyyk.jpg",
        "15": "polis-massa.jpg",
        "16": "mygeeto.jpg",
        "17": "felucia.jpg",
        "18": "cato-neimoidia.jpg",
        "19": "saleucami.jpg",
        "20": "stewjon.jpg",
        "21": "eriadu.jpg",
        "22": "corellia.jpg",
        "23": "rodia.jpg",
        "24": "nal-hutta.jpg",
        "25": "dantooine.jpg",
        "26": "bestine-iv.jpg",
        "27": "ord-mantell.jpg",
        "28": "unknown.jpg",
        "29": "trandosha.jpg",
        "30": "socorro.jpg",
        "31": "mon-cala.jpg",
        "32": "chandrila.jpg",
        "33": "sullust.jpg",
        "34": "toydaria.jpg",
        "35": "malastare.jpg",
        "36": "dathomir.jpg",
        "37": "ryloth.jpg",
        "38": "aleen-minor.jpg",
        "39": "vulpter.jpg",
        "40": "troiken.jpg",
        "41": "mon-cala.jpg",
        "42": "chandrila.jpg",
        "43": "sullust.jpg",
        "44": "toydaria.jpg",
        "45": "malastare.jpg",
        "46": "dathomir.jpg",
        "47": "ryloth.jpg",
        "48": "aleen-minor.jpg",
        "49": "vulpter.jpg",
        "50": "troiken.jpg",
        "51": "tund.jpg",
        "52": "haruun-kal.jpg",
        "53": "cerea.jpg",
        "54": "glee-anselm.jpg",
        "55": "iridonia.jpg",
        "56": "tholoth.jpg",
        "57": "iktotch.jpg",
        "58": "quermia.jpg",
        "59": "dorin.jpg",
        "60": "champala.jpg",
        "61": "mirial.jpg",
        "62": "serenno.jpg",
        "63": "concord-dawn.jpg",
        "64": "zolan.jpg",
        "65": "ojom.jpg",
        "66": "skako.jpg",
        "67": "muunilinst.jpg",
        "68": "shili.jpg",
        "69": "kalee.jpg",
        "70": "umbara.jpg",
        "71": "jakku.jpg"
      },
      "species": {
        "1": "human.jpg",
        "2": "droid.jpg",
        "3": "wookiee.jpg",
        "4": "rodian.jpg",
        "5": "hutt.jpg",
        "6": "yodas-species.jpg",
        "7": "trandoshan.jpg",
        "8": "mon-calamari.jpg",
        "9": "ewok.jpg",
        "10": "sullustan.jpg",
        "11": "neimodian.jpg",
        "12": "gungan.jpg",
        "13": "toydarian.jpg",
        "14": "dug.jpg",
        "15": "twilek.jpg",
        "16": "aleena.jpg",
        "17": "vulptereen.jpg",
        "18": "xexto.jpg",
        "19": "toong.jpg",
        "20": "cerean.jpg",
        "21": "nautolan.jpg",
        "22": "zabrak.jpg",
        "23": "tholothian.jpg",
        "24": "iktotchi.jpg",
        "25": "quermian.jpg",
        "26": "kel-dor.jpg",
        "27": "chagrian.jpg",
        "28": "geonosian.jpg",
        "29": "mirialan.jpg",
        "30": "clawdite.jpg",
        "31": "besalisk.jpg",
        "32": "kaminoan.jpg",
        "33": "skakoan.jpg",
        "34": "muun.jpg",
        "35": "togruta.jpg",
        "36": "kaleesh.jpg",
        "37": "pauan.jpg"
      },
      "starships": {
        "1": "cr90-corvette.jpg",
        "2": "star-destroyer.jpg",
        "3": "sentinel-class-landing-craft.jpg",
        "4": "death-star.jpg",
        "5": "millennium-falcon.jpg",
        "6": "y-wing.jpg",
        "7": "x-wing.jpg",
        "8": "tie-advanced-x1.jpg",
        "9": "executor.jpg",
        "10": "rebel-transport.jpg",
        "11": "slave-1.jpg",
        "12": "imperial-shuttle.jpg",
        "13": "ef76-nebulon-b-escort-frigate.jpg",
        "14": "calamari-cruiser.jpg",
        "15": "a-wing.jpg",
        "16": "b-wing.jpg",
        "17": "republic-cruiser.jpg",
        "18": "droid-control-ship.jpg",
        "19": "naboo-fighter.jpg",
        "20": "naboo-royal-starship.jpg",
        "21": "scimitar.jpg",
        "22": "j-type-diplomatic-barge.jpg",
        "23": "aa-9-coruscant-freighter.jpg",
        "24": "jedi-starfighter.jpg",
        "25": "h-type-nubian-yacht.jpg",
        "26": "republic-assault-ship.jpg",
        "27": "solar-sailer.jpg",
        "28": "trade-federation-cruiser.jpg",
        "29": "theta-class-t-2c-shuttle.jpg",
        "30": "republic-attack-cruiser.jpg",
        "31": "naboo-star-skiff.jpg",
        "32": "jedi-interceptor.jpg",
        "33": "arc-170.jpg",
        "34": "banking-clan-frigte.jpg",
        "35": "belbullab-22-starfighter.jpg",
        "36": "v-wing.jpg"
      },
      "vehicles": {
        "1": "sand-crawler.jpg",
        "2": "t-16-skyhopper.jpg",
        "3": "x-34-landspeeder.jpg",
        "4": "tie/ln-starfighter.jpg",
        "5": "snowspeeder.jpg",
        "6": "tie-bomber.jpg",
        "7": "at-at.jpg",
        "8": "at-st.jpg",
        "9": "storm-iv-twin-pod-cloud-car.jpg",
        "10": "sail-barge.jpg",
        "11": "bantha-ii-cargo-skiff.jpg",
        "12": "tie/in-interceptor.jpg",
        "13": "imperial-speeder-bike.jpg",
        "14": "vulture-droid.jpg",
        "15": "multi-troop-transport.jpg",
        "16": "armored-assault-tank.jpg",
        "17": "single-trooper-aerial-platform.jpg",
        "18": "c-9979-landing-craft.jpg",
        "19": "tribubble-bongo.jpg",
        "20": "sith-speeder.jpg",
        "21": "zephyr-g-swoop-bike.jpg",
        "22": "koro-2-exodrive-airspeeder.jpg",
        "23": "xj-6-airspeeder.jpg",
        "24": "laat/i.jpg",
        "25": "laat/c.jpg",
        "26": "at-te.jpg",
        "27": "spha.jpg",
        "28": "flitknot-speeder.jpg",
        "29": "neimoidian-shuttle.jpg",
        "30": "geonosian-starfighter.jpg",
        "31": "tsmeu-6-personal-wheel-bike.jpg",
        "32": "emergency-firespeeder.jpg",
        "33": "droid-tri-fighter.jpg",
        "34": "oevvaor-jet-catamaran.jpg",
        "35": "raddaugh-gnasp-fluttercraft.jpg",
        "36": "clone-turbo-tank.jpg",
        "37": "corporate-alliance-tank-droid.jpg",
        "38": "droid-gunship.jpg",
        "39": "at-rt.jpg"
      }
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
    resource.imageUrl = "/assets/images/categories/" + dataUrl[4] + "/" + this.resourceMap[dataUrl[4]][dataUrl[5]];

    return resource;
  }

  private getCards(data): Card[] {
    const cards: Card[] = [];
    data.forEach(item => {
      const dataUrl = item.split("/");
      cards.push({
        url: "/resources/" + dataUrl[4] + "/" + dataUrl[5],
        imageUrl: "/assets/images/categories/" + dataUrl[4] + "/" + this.resourceMap[dataUrl[4]][dataUrl[5]],
        name: dataUrl[5]
      });
    });
    return cards;
  }
}
