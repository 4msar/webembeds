import GithubGist from "./gist.provider";
import ExpoSnack from "./expo.provider";
import Giphy from "./giphy.provider";
import Instagram from "./instagram.provider";
import Twitch from "./twitch.provider";
import Glitch from "./glitch.provider";
import Loom from "./loom.provider";
import Codepen from "./codepen.provider";

const oEmbedProviders = [
  {
    provider_name: "23HQ",
    provider_url: "http://www.23hq.com",
    endpoints: [
      {
        schemes: [
          "http://www.23hq.com/*/photo/*",
        ],
        url: "http://www.23hq.com/23/oembed",
      },
    ],
  },
  {
    provider_name: "Abraia",
    provider_url: "https://abraia.me",
    endpoints: [
      {
        schemes: [
          "https://store.abraia.me/*",
        ],
        url: "https://api.abraia.me/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "ActBlue",
    provider_url: "https://secure.actblue.com",
    endpoints: [
      {
        schemes: [
          "https://secure.actblue.com/donate/*",
        ],
        url: "https://secure.actblue.com/cf/oembed",
      },
    ],
  },
  {
    provider_name: "Adways",
    provider_url: "http://www.adways.com",
    endpoints: [
      {
        schemes: [
          "http://play.adpaths.com/experience/*",
        ],
        url: "http://play.adpaths.com/oembed/*",
      },
    ],
  },
  {
    provider_name: "Alpha App Net",
    provider_url: "https://alpha.app.net/browse/posts/",
    endpoints: [
      {
        schemes: [
          "https://alpha.app.net/*/post/*",
          "https://photos.app.net/*/*",
        ],
        url: "https://alpha-api.app.net/oembed",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Altru",
    provider_url: "https://www.altrulabs.com",
    endpoints: [
      {
        schemes: [
          "https://app.altrulabs.com/*/*?answer_id=*",
          "https://app.altrulabs.com/player/*",
        ],
        url: "https://api.altrulabs.com/api/v1/social/oembed",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "amCharts Live Editor",
    provider_url: "https://live.amcharts.com/",
    endpoints: [
      {
        schemes: [
          "http://live.amcharts.com/*",
          "https://live.amcharts.com/*",
        ],
        url: "https://live.amcharts.com/oembed",
      },
    ],
  },
  {
    provider_name: "Animatron",
    provider_url: "https://www.animatron.com/",
    endpoints: [
      {
        schemes: [
          "https://www.animatron.com/project/*",
          "https://animatron.com/project/*",
        ],
        url: "https://animatron.com/oembed/json",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Animoto",
    provider_url: "http://animoto.com/",
    endpoints: [
      {
        schemes: [
          "http://animoto.com/play/*",
        ],
        url: "http://animoto.com/oembeds/create",
      },
    ],
  },
  {
    provider_name: "Apester",
    provider_url: "https://www.apester.com",
    endpoints: [
      {
        schemes: [
          "https://renderer.apester.com/v2/*?preview=true&iframe_preview=true",
        ],
        url: "https://display.apester.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "ArcGIS StoryMaps",
    provider_url: "https://storymaps.arcgis.com",
    endpoints: [
      {
        schemes: [
          "https://storymaps.arcgis.com/stories/*",
        ],
        url: "https://storymaps.arcgis.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Archivos",
    provider_url: "https://app.archivos.digital",
    endpoints: [
      {
        schemes: [
          "https://app.archivos.digital/app/view/*",
        ],
        url: "https://app.archivos.digital/oembed/",
      },
    ],
  },
  {
    provider_name: "Audioboom",
    provider_url: "https://audioboom.com",
    endpoints: [
      {
        schemes: [
          "https://audioboom.com/channels/*",
          "https://audioboom.com/channel/*",
          "https://audioboom.com/posts/*",
        ],
        url: "https://audioboom.com/publishing/oembed/v4.json", // TODO
        formats: [
          "json",
          "xml",
        ],
      },
    ],
  },
  {
    provider_name: "AudioClip",
    provider_url: "https://audioclip.naver.com",
    endpoints: [
      {
        schemes: [
          "https://audioclip.naver.com/channels/*/clips/*",
          "https://audioclip.naver.com/audiobooks/*",
        ],
        url: "https://audioclip.naver.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Audiomack",
    provider_url: "https://audiomack.com",
    endpoints: [
      {
        schemes: [
          "https://audiomack.com/*/song/*",
          "https://audiomack.com/*/album/*",
          "https://audiomack.com/*/playlist/*",
        ],
        url: "https://audiomack.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Avocode",
    provider_url: "https://www.avocode.com/",
    endpoints: [
      {
        schemes: [
          "https://app.avocode.com/view/*",
        ],
        url: "https://stage-embed.avocode.com/api/oembed",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "AxiomNinja",
    provider_url: "http://axiom.ninja",
    endpoints: [
      {
        schemes: [
          "http://axiom.ninja/*",
        ],
        url: "http://axiom.ninja/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Backtracks",
    provider_url: "https://backtracks.fm",
    endpoints: [
      {
        schemes: [
          "https://backtracks.fm/*/*/e/*",
          "https://backtracks.fm/*/s/*/*",
          "https://backtracks.fm/*/*/*/*/e/*/*",
          "https://backtracks.fm/*",
          "http://backtracks.fm/*",
        ],
        url: "https://backtracks.fm/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Beautiful.AI",
    provider_url: "https://www.beautiful.ai/",
    endpoints: [
      {
        url: "https://www.beautiful.ai/api/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Blackfire.io",
    provider_url: "https://blackfire.io",
    endpoints: [
      {
        schemes: [
          "https://blackfire.io/profiles/*/graph",
          "https://blackfire.io/profiles/compare/*/graph",
        ],
        url: "https://blackfire.io/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Blogcast",
    provider_url: "https://blogcast.host/",
    endpoints: [
      {
        schemes: [
          "https://blogcast.host/embed/*",
          "https://blogcast.host/embedly/*",
        ],
        url: "https://blogcast.host/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Box Office Buz",
    provider_url: "http://boxofficebuz.com",
    endpoints: [
      {
        url: "http://boxofficebuz.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "BrioVR",
    provider_url: "https://view.briovr.com/",
    endpoints: [
      {
        schemes: [
          "https://view.briovr.com/api/v1/worlds/oembed/*",
        ],
        url: "https://view.briovr.com/api/v1/worlds/oembed/",
      },
    ],
  },
  {
    provider_name: "Buttondown",
    provider_url: "https://buttondown.email/",
    endpoints: [
      {
        schemes: [
          "https://buttondown.email/*",
        ],
        url: "https://buttondown.email/embed",
        formats: [
          "json",
        ],
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Byzart Project",
    provider_url: "https://cmc.byzart.eu",
    endpoints: [
      {
        schemes: [
          "https://cmc.byzart.eu/files/*",
        ],
        url: "https://cmc.byzart.eu/oembed/",
        discovery: false,
      },
    ],
  },
  {
    provider_name: "Cacoo",
    provider_url: "https://cacoo.com",
    endpoints: [
      {
        schemes: [
          "https://cacoo.com/diagrams/*",
        ],
        url: "http://cacoo.com/oembed.{format}",
      },
    ],
  },
  {
    provider_name: "Carbon Health",
    provider_url: "https://carbonhealth.com",
    endpoints: [
      {
        schemes: [
          "https://carbonhealth.com/practice/*",
        ],
        url: "http://carbonhealth.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "CatBoat",
    provider_url: "http://img.catbo.at/",
    endpoints: [
      {
        schemes: [
          "http://img.catbo.at/*",
        ],
        url: "http://img.catbo.at/oembed.json",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Ceros",
    provider_url: "http://www.ceros.com/",
    endpoints: [
      {
        schemes: [
          "http://view.ceros.com/*",
        ],
        url: "http://view.ceros.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Chainflix",
    provider_url: "https://chainflix.net",
    endpoints: [
      {
        schemes: [
          "https://chainflix.net/video/*",
          "https://chainflix.net/video/embed/*",
          "https://*.chainflix.net/video/*",
          "https://*.chainflix.net/video/embed/*",
        ],
        url: "https://www.chainflix.net/video/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "ChartBlocks",
    provider_url: "http://www.chartblocks.com/",
    endpoints: [
      {
        schemes: [
          "http://public.chartblocks.com/c/*",
        ],
        url: "http://embed.chartblocks.com/1.0/oembed",
      },
    ],
  },
  {
    provider_name: "chirbit.com",
    provider_url: "http://www.chirbit.com/",
    endpoints: [
      {
        schemes: [
          "http://chirb.it/*",
        ],
        url: "http://chirb.it/oembed.{format}",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "CircuitLab",
    provider_url: "https://www.circuitlab.com/",
    endpoints: [
      {
        schemes: [
          "https://www.circuitlab.com/circuit/*",
        ],
        url: "https://www.circuitlab.com/circuit/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Clipland",
    provider_url: "http://www.clipland.com/",
    endpoints: [
      {
        schemes: [
          "http://www.clipland.com/v/*",
          "https://www.clipland.com/v/*",
        ],
        url: "https://www.clipland.com/api/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Clyp",
    provider_url: "http://clyp.it/",
    endpoints: [
      {
        schemes: [
          "http://clyp.it/*",
          "http://clyp.it/playlist/*",
        ],
        url: "http://api.clyp.it/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "CoCo Corp",
    provider_url: "https://ilovecoco.video",
    endpoints: [
      {
        schemes: [
          "https://app.ilovecoco.video/*/embed",
        ],
        url: "https://app.ilovecoco.video/api/oembed.{format}",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "CodeHS",
    provider_url: "http://www.codehs.com",
    endpoints: [
      {
        schemes: [
          "https://codehs.com/editor/share_abacus/*",
        ],
        url: "https://codehs.com/api/sharedprogram/*/oembed/",
        discovery: true,
      },
    ],
  },
  // {
  //   provider_name: "Codepen",
  //   provider_url: "https://codepen.io",
  //   endpoints: [
  //     {
  //       schemes: [
  //         "http://codepen.io/*",
  //         "https://codepen.io/*",
  //       ],
  //       url: "https://codepen.io/api/oembed",
  //     },
  //   ],
  // }, // TODO
  {
    provider_name: "Codepoints",
    provider_url: "https://codepoints.net",
    endpoints: [
      {
        schemes: [
          "http://codepoints.net/*",
          "https://codepoints.net/*",
          "http://www.codepoints.net/*",
          "https://www.codepoints.net/*",
        ],
        url: "https://codepoints.net/api/v1/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "CodeSandbox",
    provider_url: "https://codesandbox.io",
    endpoints: [
      {
        schemes: [
          "https://codesandbox.io/s/*",
          "https://codesandbox.io/embed/*",
        ],
        url: "https://codesandbox.io/oembed",
      },
    ],
  },
  {
    provider_name: "CollegeHumor",
    provider_url: "http://www.collegehumor.com/",
    endpoints: [
      {
        schemes: [
          "http://www.collegehumor.com/video/*",
        ],
        url: "http://www.collegehumor.com/oembed.{format}",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Commaful",
    provider_url: "https://commaful.com",
    endpoints: [
      {
        schemes: [
          "https://commaful.com/play/*",
        ],
        url: "https://commaful.com/api/oembed/",
      },
    ],
  },
  {
    provider_name: "Coub",
    provider_url: "http://coub.com/",
    endpoints: [
      {
        schemes: [
          "http://coub.com/view/*",
          "http://coub.com/embed/*",
        ],
        url: "http://coub.com/api/oembed.{format}",
      },
    ],
  },
  {
    provider_name: "Crowd Ranking",
    provider_url: "http://crowdranking.com",
    endpoints: [
      {
        schemes: [
          "http://crowdranking.com/*/*",
        ],
        url: "http://crowdranking.com/api/oembed.{format}",
      },
    ],
  },
  {
    provider_name: "CustomerDB",
    provider_url: "http://customerdb.com/",
    endpoints: [
      {
        schemes: [
          "https://app.customerdb.com/share/*",
        ],
        url: "https://app.customerdb.com/embed",
      },
    ],
  },
  {
    provider_name: "Cyrano Systems",
    provider_url: "http://www.cyranosystems.com/",
    endpoints: [
      {
        schemes: [
          "https://staging.cyranosystems.com/msg/*",
          "https://app.cyranosystems.com/msg/*",
        ],
        url: "https://staging.cyranosystems.com/oembed",
        formats: [
          "json",
        ],
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Dailymotion",
    provider_url: "https://www.dailymotion.com",
    endpoints: [
      {
        schemes: [
          "https://www.dailymotion.com/video/*",
        ],
        url: "https://www.dailymotion.com/services/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Datawrapper",
    provider_url: "http://www.datawrapper.de",
    endpoints: [
      {
        schemes: [
          "https://datawrapper.dwcdn.net/*",
        ],
        url: "https://api.datawrapper.de/v3/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Deseret News",
    provider_url: "https://www.deseret.com",
    endpoints: [
      {
        schemes: [
          "https://*.deseret.com/*",
        ],
        url: "https://embed.deseret.com/",
      },
    ],
  },
  {
    provider_name: "Deviantart.com",
    provider_url: "http://www.deviantart.com",
    endpoints: [
      {
        schemes: [
          "http://*.deviantart.com/art/*",
          "http://*.deviantart.com/*#/d*",
          "http://fav.me/*",
          "http://sta.sh/*",
          "https://*.deviantart.com/art/*",
          "https://*.deviantart.com/*/art/*",
          "https://sta.sh/*\",",
          "https://*.deviantart.com/*#/d*\"",
        ],
        url: "http://backend.deviantart.com/oembed",
      },
    ],
  },
  {
    provider_name: "Didacte",
    provider_url: "https://www.didacte.com/",
    endpoints: [
      {
        schemes: [
          "https://*.didacte.com/a/course/*",
        ],
        url: "https://*.didacte.com/cards/oembed'",
        discovery: true,
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Digiteka",
    provider_url: "https://www.ultimedia.com/",
    endpoints: [
      {
        schemes: [
          "https://www.ultimedia.com/central/video/edit/id/*/topic_id/*/",
          "https://www.ultimedia.com/default/index/videogeneric/id/*/showtitle/1/viewnc/1",
          "https://www.ultimedia.com/default/index/videogeneric/id/*",
        ],
        url: "https://www.ultimedia.com/api/search/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Dipity",
    provider_url: "http://www.dipity.com",
    endpoints: [
      {
        schemes: [
          "http://www.dipity.com/*/*/",
        ],
        url: "http://www.dipity.com/oembed/timeline/",
      },
    ],
  },
  {
    provider_name: "DocDroid",
    provider_url: "https://www.docdroid.net/",
    endpoints: [
      {
        schemes: [
          "https://*.docdroid.net/*",
          "http://*.docdroid.net/*",
          "https://docdro.id/*",
          "http://docdro.id/*",
          "https://*.docdroid.com/*",
          "http://*.docdroid.com/*",
        ],
        url: "https://www.docdroid.net/api/oembed",
        formats: [
          "json",
        ],
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Dotsub",
    provider_url: "http://dotsub.com/",
    endpoints: [
      {
        schemes: [
          "http://dotsub.com/view/*",
        ],
        url: "http://dotsub.com/services/oembed",
      },
    ],
  },
  {
    provider_name: "DTube",
    provider_url: "https://d.tube/",
    endpoints: [
      {
        schemes: [
          "https://d.tube/v/*",
        ],
        url: "https://api.d.tube/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "edocr",
    provider_url: "http://www.edocr.com",
    endpoints: [
      {
        schemes: [
          "http://edocr.com/docs/*",
        ],
        url: "http://edocr.com/api/oembed",
      },
    ],
  },
  {
    provider_name: "eduMedia",
    provider_url: "https://www.edumedia-sciences.com/",
    endpoints: [
      {
        url: "https://www.edumedia-sciences.com/oembed.json",
        discovery: true,
      },
      {
        url: "https://www.edumedia-sciences.com/oembed.xml",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "EgliseInfo",
    provider_url: "http://egliseinfo.catholique.fr/",
    endpoints: [
      {
        schemes: [
          "http://egliseinfo.catholique.fr/*",
        ],
        url: "http://egliseinfo.catholique.fr/api/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Embed Articles",
    provider_url: "http://embedarticles.com/",
    endpoints: [
      {
        schemes: [
          "http://embedarticles.com/*",
        ],
        url: "http://embedarticles.com/oembed/",
      },
    ],
  },
  {
    provider_name: "Embedery",
    provider_url: "https://embedery.com/",
    endpoints: [
      {
        schemes: [
          "https://embedery.com/widget/*",
        ],
        url: "https://embedery.com/api/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Embedly",
    provider_url: "http://api.embed.ly/",
    endpoints: [
      {
        url: "http://api.embed.ly/1/oembed",
      },
    ],
  },
  {
    provider_name: "Ethfiddle",
    provider_url: "https://www.ethfiddle.com/",
    endpoints: [
      {
        schemes: [
          "https://ethfiddle.com/*",
        ],
        url: "https://ethfiddle.com/services/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Eyrie",
    provider_url: "https://eyrie.io/",
    endpoints: [
      {
        schemes: [
          "https://eyrie.io/board/*",
          "https://eyrie.io/sparkfun/*",
        ],
        url: "https://eyrie.io/v1/oembed",
        discovery: true,
      },
    ],
  },
  // {
  //   provider_name: "Facebook",
  //   provider_url: "https://www.facebook.com/",
  //   endpoints: [
  //     {
  //       schemes: [
  //         "https://www.facebook.com/*/posts/*",
  //         "https://www.facebook.com/*/activity/*",
  //         "https://www.facebook.com/photo.php?fbid=*",
  //         "https://www.facebook.com/photos/*",
  //         "https://www.facebook.com/permalink.php?story_fbid=*",
  //         "https://www.facebook.com/media/set?set=*",
  //         "https://www.facebook.com/questions/*",
  //         "https://www.facebook.com/notes/*/*/*",
  //       ],
  //       url: "https://graph.facebook.com/v8.0/oembed_post",
  //       discovery: false,
  //     },
  //     {
  //       schemes: [
  //         "https://www.facebook.com/*/videos/*",
  //         "https://www.facebook.com/video.php?id=*",
  //         "https://www.facebook.com/video.php?v=*",
  //       ],
  //       url: "https://graph.facebook.com/v8.0/oembed_video",
  //       discovery: false,
  //     },
  //     {
  //       schemes: [
  //         "https://www.facebook.com/*",
  //       ],
  //       url: "https://graph.facebook.com/v8.0/oembed_page",
  //       discovery: false,
  //     },
  //   ],
  // },
  {
    provider_name: "Fader",
    provider_url: "https://app.getfader.com",
    endpoints: [
      {
        schemes: [
          "https://app.getfader.com/projects/*/publish",
        ],
        url: "https://app.getfader.com/api/oembed",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Faithlife TV",
    provider_url: "https://faithlifetv.com",
    endpoints: [
      {
        schemes: [
          "https://faithlifetv.com/items/*",
          "https://faithlifetv.com/items/resource/*/*",
          "https://faithlifetv.com/media/*",
          "https://faithlifetv.com/media/assets/*",
          "https://faithlifetv.com/media/resource/*/*",
        ],
        url: "https://faithlifetv.com/api/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Firework",
    provider_url: "https://fireworktv.com/",
    endpoints: [
      {
        schemes: [
          "https://*.fireworktv.com/*",
          "https://*.fireworktv.com/embed/*/v/*",
        ],
        url: "https://www.fireworktv.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "FITE",
    provider_url: "https://www.fite.tv/",
    endpoints: [
      {
        schemes: [
          "https://www.fite.tv/watch/*",
        ],
        url: "https://www.fite.tv/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Flat",
    provider_url: "https://flat.io",
    endpoints: [
      {
        schemes: [
          "https://flat.io/score/*",
          "https://*.flat.io/score/*",
        ],
        url: "https://flat.io/services/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Flickr",
    provider_url: "https://www.flickr.com/",
    endpoints: [
      {
        schemes: [
          "http://*.flickr.com/photos/*",
          "http://flic.kr/p/*",
          "https://*.flickr.com/photos/*",
          "https://flic.kr/p/*",
        ],
        url: "https://www.flickr.com/services/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Flourish",
    provider_url: "https://flourish.studio/",
    endpoints: [
      {
        schemes: [
          "https://public.flourish.studio/visualisation/*",
          "https://public.flourish.studio/story/*",
        ],
        url: "https://app.flourish.studio/api/v1/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "FOX SPORTS Australia",
    provider_url: "http://www.foxsports.com.au",
    endpoints: [
      {
        schemes: [
          "http://fiso.foxsports.com.au/isomorphic-widget/*",
          "https://fiso.foxsports.com.au/isomorphic-widget/*",
        ],
        url: "https://fiso.foxsports.com.au/oembed",
      },
    ],
  },
  {
    provider_name: "FrameBuzz",
    provider_url: "https://framebuzz.com/",
    endpoints: [
      {
        schemes: [
          "http://framebuzz.com/v/*",
          "https://framebuzz.com/v/*",
        ],
        url: "https://framebuzz.com/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "FunnyOrDie",
    provider_url: "http://www.funnyordie.com/",
    endpoints: [
      {
        schemes: [
          "http://www.funnyordie.com/videos/*",
        ],
        url: "http://www.funnyordie.com/oembed.{format}",
      },
    ],
  },
  {
    provider_name: "Geograph Britain and Ireland",
    provider_url: "https://www.geograph.org.uk/",
    endpoints: [
      {
        schemes: [
          "http://*.geograph.org.uk/*",
          "http://*.geograph.co.uk/*",
          "http://*.geograph.ie/*",
          "http://*.wikimedia.org/*_geograph.org.uk_*",
        ],
        url: "http://api.geograph.org.uk/api/oembed",
      },
    ],
  },
  {
    provider_name: "Geograph Channel Islands",
    provider_url: "http://channel-islands.geograph.org/",
    endpoints: [
      {
        schemes: [
          "http://*.geograph.org.gg/*",
          "http://*.geograph.org.je/*",
          "http://channel-islands.geograph.org/*",
          "http://channel-islands.geographs.org/*",
          "http://*.channel.geographs.org/*",
        ],
        url: "http://www.geograph.org.gg/api/oembed",
      },
    ],
  },
  {
    provider_name: "Geograph Germany",
    provider_url: "http://geo-en.hlipp.de/",
    endpoints: [
      {
        schemes: [
          "http://geo-en.hlipp.de/*",
          "http://geo.hlipp.de/*",
          "http://germany.geograph.org/*",
        ],
        url: "http://geo.hlipp.de/restapi.php/api/oembed",
      },
    ],
  },
  {
    provider_name: "Getty Images",
    provider_url: "http://www.gettyimages.com/",
    endpoints: [
      {
        schemes: [
          "http://gty.im/*",
        ],
        url: "http://embed.gettyimages.com/oembed",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Gfycat",
    provider_url: "https://gfycat.com/",
    endpoints: [
      {
        schemes: [
          "http://gfycat.com/*",
          "http://www.gfycat.com/*",
          "https://gfycat.com/*",
          "https://www.gfycat.com/*",
        ],
        url: "https://api.gfycat.com/v1/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Gifnote",
    provider_url: "https://www.gifnote.com/",
    endpoints: [
      {
        url: "https://www.gifnote.com/services/oembed",
        schemes: [
          "https://www.gifnote.com/play/*",
        ],
        discovery: true,
      },
    ],
  },
  {
    provider_name: "GloriaTV",
    provider_url: "https://gloria.tv/",
    endpoints: [
      {
        url: "https://gloria.tv/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "GT Channel",
    provider_url: "https://gtchannel.com",
    endpoints: [
      {
        schemes: [
          "https://gtchannel.com/watch/*",
        ],
        url: "https://api.luminery.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Gyazo",
    provider_url: "https://gyazo.com",
    endpoints: [
      {
        schemes: [
          "https://gyazo.com/*",
        ],
        url: "https://api.gyazo.com/api/oembed",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "hearthis.at",
    provider_url: "https://hearthis.at/",
    endpoints: [
      {
        schemes: [
          "https://hearthis.at/*/*/",
          "https://hearthis.at/*/set/*/",
        ],
        url: "https://hearthis.at/oembed/?format=json",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "hihaho",
    provider_url: "https://www.hihaho.com",
    endpoints: [
      {
        schemes: [
          "https://player.hihaho.com/*",
        ],
        url: "https://player.hihaho.com/services/oembed/*",
        formats: [
          "json",
          "xml",
        ],
      },
    ],
  },
  {
    provider_name: "Homey",
    provider_url: "https://homey.app",
    endpoints: [
      {
        schemes: [
          "https://homey.app/f/*",
          "https://homey.app/*/flow/*",
        ],
        url: "https://homey.app/api/oembed/flow",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Hosted by You",
    provider_url: "https://hostedbyyou.com",
    endpoints: [
      {
        schemes: [
          "https://hostedbyyou.com/event/*",
        ],
        url: "https://hostedbyyou.com/api/oembed",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "HuffDuffer",
    provider_url: "http://huffduffer.com",
    endpoints: [
      {
        schemes: [
          "http://huffduffer.com/*/*",
        ],
        url: "http://huffduffer.com/oembed",
      },
    ],
  },
  {
    provider_name: "Hulu",
    provider_url: "http://www.hulu.com/",
    endpoints: [
      {
        schemes: [
          "http://www.hulu.com/watch/*",
        ],
        url: "http://www.hulu.com/api/oembed.{format}",
      },
    ],
  },
  {
    provider_name: "iFixit",
    provider_url: "http://www.iFixit.com",
    endpoints: [
      {
        schemes: [
          "http://www.ifixit.com/Guide/View/*",
        ],
        url: "http://www.ifixit.com/Embed",
      },
    ],
  },
  {
    provider_name: "IFTTT",
    provider_url: "http://www.ifttt.com/",
    endpoints: [
      {
        schemes: [
          "http://ifttt.com/recipes/*",
        ],
        url: "http://www.ifttt.com/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "iHeartRadio",
    provider_url: "https://www.iheart.com",
    endpoints: [
      {
        schemes: [
          "https://www.iheart.com/podcast/*/*",
        ],
        url: "https://www.iheart.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Indaco",
    provider_url: "https://player.indacolive.com/",
    endpoints: [
      {
        schemes: [
          "https://player.indacolive.com/player/jwp/clients/*",
        ],
        url: "https://player.indacolive.com/services/oembed",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Infogram",
    provider_url: "https://infogram.com/",
    endpoints: [
      {
        schemes: [
          "https://infogram.com/*",
        ],
        url: "https://infogram.com/oembed",
      },
    ],
  },
  {
    provider_name: "Infoveave",
    provider_url: "https://infoveave.net/",
    endpoints: [
      {
        schemes: [
          "https://*.infoveave.net/E/*",
          "https://*.infoveave.net/P/*",
        ],
        url: "https://infoveave.net/services/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Injurymap",
    provider_url: "https://www.injurymap.com/",
    endpoints: [
      {
        schemes: [
          "https://www.injurymap.com/exercises/*",
        ],
        url: "https://www.injurymap.com/services/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Inoreader",
    provider_url: "https://www.inoreader.com",
    endpoints: [
      {
        schemes: [
          "https://www.inoreader.com/oembed/",
        ],
        url: "https://www.inoreader.com/oembed/api/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "inphood",
    provider_url: "http://inphood.com/",
    endpoints: [
      {
        schemes: [
          "http://*.inphood.com/*",
        ],
        url: "http://api.inphood.com/oembed",
        formats: [
          "json",
        ],
      },
    ],
  },
  // {
  //   provider_name: "Instagram",
  //   provider_url: "https://instagram.com",
  //   custom: true,
  //   customClass: Instagram,
  //   endpoints: [
  //     {
  //       schemes: [
  //         "http://instagram.com/*/p/*,",
  //         "http://www.instagram.com/*/p/*,",
  //         "https://instagram.com/*/p/*,",
  //         "https://www.instagram.com/*/p/*,",
  //         "http://instagram.com/p/*",
  //         "http://instagr.am/p/*",
  //         "http://www.instagram.com/p/*",
  //         "http://www.instagr.am/p/*",
  //         "https://instagram.com/p/*",
  //         "https://instagr.am/p/*",
  //         "https://www.instagram.com/p/*",
  //         "https://www.instagr.am/p/*",
  //         "http://instagram.com/tv/*",
  //         "http://instagr.am/tv/*",
  //         "http://www.instagram.com/tv/*",
  //         "http://www.instagr.am/tv/*",
  //         "https://instagram.com/tv/*",
  //         "https://instagr.am/tv/*",
  //         "https://www.instagram.com/tv/*",
  //         "https://www.instagr.am/tv/*",
  //       ],
  //       url: "https://api.instagram.com/oembed",
  //       formats: [
  //         "json",
  //       ],
  //     },
  //     // {
  //     //   schemes: [
  //     //     "http://instagram.com/*/p/*,",
  //     //     "http://www.instagram.com/*/p/*,",
  //     //     "https://instagram.com/*/p/*,",
  //     //     "https://www.instagram.com/*/p/*,",
  //     //     "http://instagram.com/p/*",
  //     //     "http://instagr.am/p/*",
  //     //     "http://www.instagram.com/p/*",
  //     //     "http://www.instagr.am/p/*",
  //     //     "https://instagram.com/p/*",
  //     //     "https://instagr.am/p/*",
  //     //     "https://www.instagram.com/p/*",
  //     //     "https://www.instagr.am/p/*",
  //     //     "http://instagram.com/tv/*",
  //     //     "http://instagr.am/tv/*",
  //     //     "http://www.instagram.com/tv/*",
  //     //     "http://www.instagr.am/tv/*",
  //     //     "https://instagram.com/tv/*",
  //     //     "https://instagr.am/tv/*",
  //     //     "https://www.instagram.com/tv/*",
  //     //     "https://www.instagr.am/tv/*",
  //     //   ],
  //     //   url: "https://graph.facebook.com/v8.0/instagram_oembed",
  //     //   formats: [
  //     //     "json",
  //     //   ],
  //     // },
  //   ],
  // },
  {
    provider_name: "Issuu",
    provider_url: "https://issuu.com/",
    endpoints: [
      {
        schemes: [
          "https://issuu.com/*/docs/*",
        ],
        url: "https://issuu.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "ivlismusic",
    provider_url: "https://music.ivlis.kr/",
    endpoints: [
      {
        url: "https://music.ivlis.kr/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Jovian",
    provider_url: "https://jovian.ai/",
    endpoints: [
      {
        schemes: [
          "https://jovian.ml/*",
          "https://jovian.ml/viewer*",
          "https://*.jovian.ml/*",
          "https://jovian.ai/*",
          "https://jovian.ai/viewer*",
          "https://*.jovian.ai/*",
        ],
        url: "https://api.jovian.ai/oembed.json",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "KakaoTv",
    provider_url: "https://tv.kakao.com/",
    endpoints: [
      {
        schemes: [
          "https://tv.kakao.com/channel/*/cliplink/*",
          "https://tv.kakao.com/channel/v/*",
          "https://tv.kakao.com/channel/*/livelink/*",
          "https://tv.kakao.com/channel/l/*",
        ],
        url: "https://tv.kakao.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Kickstarter",
    provider_url: "http://www.kickstarter.com",
    endpoints: [
      {
        schemes: [
          "http://www.kickstarter.com/projects/*",
        ],
        url: "http://www.kickstarter.com/services/oembed",
      },
    ],
  },
  {
    provider_name: "Kidoju",
    provider_url: "https://www.kidoju.com/",
    endpoints: [
      {
        schemes: [
          "https://www.kidoju.com/en/x/*/*",
          "https://www.kidoju.com/fr/x/*/*",
        ],
        url: "https://www.kidoju.com/api/oembed",
      },
    ],
  },
  {
    provider_name: "Kirim.Email",
    provider_url: "https://kirim.email/",
    endpoints: [
      {
        schemes: [
          "https://halaman.email/form/*",
          "https://aplikasi.kirim.email/form/*",
        ],
        url: "https://halaman.email/service/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Kit",
    provider_url: "https://kit.co/",
    endpoints: [
      {
        schemes: [
          "http://kit.co/*/*",
          "https://kit.co/*/*",
        ],
        url: "https://embed.kit.co/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Kitchenbowl",
    provider_url: "http://www.kitchenbowl.com",
    endpoints: [
      {
        schemes: [
          "http://www.kitchenbowl.com/recipe/*",
        ],
        url: "http://www.kitchenbowl.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "kmdr",
    provider_url: "https://kmdr.sh",
    endpoints: [
      {
        schemes: [
          "https://app.kmdr.sh/h/*",
          "https://app.kmdr.sh/history/*",
        ],
        url: "https://api.kmdr.sh/services/oembed",
      },
    ],
  },
  {
    provider_name: "Knacki",
    provider_url: "http://jdr.knacki.info",
    endpoints: [
      {
        schemes: [
          "http://jdr.knacki.info/meuh/*",
          "https://jdr.knacki.info/meuh/*",
        ],
        url: "https://jdr.knacki.info/oembed",
      },
    ],
  },
  {
    provider_name: "Knowledge Pad",
    provider_url: "https://knowledgepad.co/",
    endpoints: [
      {
        schemes: [
          "https://knowledgepad.co/#/knowledge/*",
        ],
        url: "https://api.spoonacular.com/knowledge/oembed",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "LearningApps.org",
    provider_url: "http://learningapps.org/",
    endpoints: [
      {
        schemes: [
          "http://learningapps.org/*",
        ],
        url: "http://learningapps.org/oembed.php",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "LeMans.Pod",
    provider_url: "https://umotion-test.univ-lemans.fr/",
    endpoints: [
      {
        schemes: [
          "https://umotion-test.univ-lemans.fr/video/*",
        ],
        url: "https://umotion-test.univ-lemans.fr/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Lille.Pod",
    provider_url: "https://pod.univ-lille.fr/",
    endpoints: [
      {
        schemes: [
          "https://pod.univ-lille.fr/video/*",
        ],
        url: "https://pod.univ-lille.fr/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Livestream",
    provider_url: "https://livestream.com/",
    endpoints: [
      {
        schemes: [
          "https://livestream.com/accounts/*/events/*",
          "https://livestream.com/accounts/*/events/*/videos/*",
          "https://livestream.com/*/events/*",
          "https://livestream.com/*/events/*/videos/*",
          "https://livestream.com/*/*",
          "https://livestream.com/*/*/videos/*",
        ],
        url: "https://livestream.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Ludus",
    provider_url: "https://ludus.one",
    endpoints: [
      {
        schemes: [
          "https://app.ludus.one/*",
        ],
        url: "https://app.ludus.one/oembed",
        discovery: true,
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Lumiere",
    provider_url: "https://latd.com",
    endpoints: [
      {
        schemes: [
          "https://*.lumiere.is/v/*",
        ],
        url: "https://admin.lumiere.is/api/services/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "MathEmbed",
    provider_url: "http://mathembed.com",
    endpoints: [
      {
        schemes: [
          "http://mathembed.com/latex?inputText=*",
          "http://mathembed.com/latex?inputText=*",
        ],
        url: "http://mathembed.com/oembed",
      },
    ],
  },
  {
    provider_name: "Matterport",
    provider_url: "https://matterport.com/",
    endpoints: [
      {
        url: "https://my.matterport.com/api/v1/models/oembed/",
        discovery: true,
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "me.me",
    provider_url: "https://me.me/",
    endpoints: [
      {
        schemes: [
          "https://me.me/i/*",
        ],
        url: "https://me.me/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "MediaLab",
    provider_url: "https://www.medialab.co/",
    endpoints: [
      {
        schemes: [
          "https://*.medialab.app/share/watch/*",
          "https://*.medialab.co/share/watch/*",
          "https://*.medialab.app/share/social/*",
          "https://*.medialab.co/share/social/*",
          "https://*.medialab.app/share/embed/*",
          "https://*.medialab.co/share/embed/*",
        ],
        url: "https://*.medialab.(co|app)/api/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Medienarchiv der Künste - Zürcher Hochschule der Künste",
    provider_url: "https://medienarchiv.zhdk.ch/",
    endpoints: [
      {
        schemes: [
          "https://medienarchiv.zhdk.ch/entries/*",
        ],
        url: "https://medienarchiv.zhdk.ch/oembed.{format}",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Meetup",
    provider_url: "http://www.meetup.com",
    endpoints: [
      {
        schemes: [
          "http://meetup.com/*",
          "https://www.meetup.com/*",
          "https://meetup.com/*",
          "http://meetu.ps/*",
        ],
        url: "https://api.meetup.com/oembed",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Mermaid Ink",
    provider_url: "https://mermaid.ink",
    endpoints: [
      {
        schemes: [
          "https://mermaid.ink/img/*",
          "https://mermaid.ink/svg/*",
        ],
        url: "https://mermaid.ink/services/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Microlink",
    provider_url: "http://api.microlink.io",
    endpoints: [
      {
        url: "https://api.microlink.io",
      },
    ],
  },
  {
    provider_name: "Microsoft Stream",
    provider_url: "https://stream.microsoft.com",
    endpoints: [
      {
        schemes: [
          "https://*.microsoftstream.com/video/*",
          "https://*.microsoftstream.com/channel/*",
        ],
        url: "https://web.microsoftstream.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "MixCloud",
    provider_url: "https://mixcloud.com/",
    endpoints: [
      {
        schemes: [
          "http://www.mixcloud.com/*/*/",
          "https://www.mixcloud.com/*/*/",
        ],
        url: "https://www.mixcloud.com/oembed/",
      },
    ],
  },
  {
    provider_name: "Moby Picture",
    provider_url: "http://www.mobypicture.com",
    endpoints: [
      {
        schemes: [
          "http://www.mobypicture.com/user/*/view/*",
          "http://moby.to/*",
        ],
        url: "http://api.mobypicture.com/oEmbed",
      },
    ],
  },
  {
    provider_name: "Modelo",
    provider_url: "http://modelo.io/",
    endpoints: [
      {
        schemes: [
          "https://beta.modelo.io/embedded/*",
        ],
        url: "https://portal.modelo.io/oembed",
        discovery: false,
      },
    ],
  },
  {
    provider_name: "MorphCast",
    provider_url: "https://www.morphcast.com",
    endpoints: [
      {
        schemes: [
          "https://m-roll.morphcast.com/mroll/*",
        ],
        url: "https://m-roll.morphcast.com/service/oembed",
        discovery: true,
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Music Box Maniacs",
    provider_url: "https://musicboxmaniacs.com/",
    endpoints: [
      {
        schemes: [
          "https://musicboxmaniacs.com/explore/melody/*",
        ],
        url: "https://musicboxmaniacs.com/embed/",
        formats: [
          "json",
        ],
        discovery: true,
      },
    ],
  },
  {
    provider_name: "myBeweeg",
    provider_url: "https://mybeweeg.com",
    endpoints: [
      {
        schemes: [
          "https://mybeweeg.com/w/*",
        ],
        url: "https://mybeweeg.com/services/oembed",
      },
    ],
  },
  {
    provider_name: "Namchey",
    provider_url: "https://namchey.com",
    endpoints: [
      {
        schemes: [
          "https://namchey.com/embeds/*",
        ],
        url: "https://namchey.com/api/oembed",
        formats: [
          "json",
          "xml",
        ],
        discovery: true,
      },
    ],
  },
  {
    provider_name: "nanoo.tv",
    provider_url: "https://www.nanoo.tv/",
    endpoints: [
      {
        schemes: [
          "http://*.nanoo.tv/link/*",
          "http://nanoo.tv/link/*",
          "http://*.nanoo.pro/link/*",
          "http://nanoo.pro/link/*",
          "https://*.nanoo.tv/link/*",
          "https://nanoo.tv/link/*",
          "https://*.nanoo.pro/link/*",
          "https://nanoo.pro/link/*",
          "http://media.zhdk.ch/signatur/*",
          "http://new.media.zhdk.ch/signatur/*",
          "https://media.zhdk.ch/signatur/*",
          "https://new.media.zhdk.ch/signatur/*",
        ],
        url: "https://www.nanoo.tv/services/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Nasjonalbiblioteket",
    provider_url: "https://www.nb.no/",
    endpoints: [
      {
        schemes: [
          "https://www.nb.no/items/*",
        ],
        url: "https://api.nb.no/catalog/v1/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Natural Atlas",
    provider_url: "https://naturalatlas.com/",
    endpoints: [
      {
        schemes: [
          "https://naturalatlas.com/*",
          "https://naturalatlas.com/*/*",
          "https://naturalatlas.com/*/*/*",
          "https://naturalatlas.com/*/*/*/*",
        ],
        url: "https://naturalatlas.com/oembed.{format}",
        discovery: true,
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "nfb.ca",
    provider_url: "http://www.nfb.ca/",
    endpoints: [
      {
        schemes: [
          "http://*.nfb.ca/film/*",
        ],
        url: "http://www.nfb.ca/remote/services/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "NoPaste",
    provider_url: "https://nopaste.ml",
    endpoints: [
      {
        schemes: [
          "https://nopaste.ml/*",
        ],
        url: "https://oembed.nopaste.ml",
        discovery: false,
      },
    ],
  },
  {
    provider_name: "Observable",
    provider_url: "https://observablehq.com",
    endpoints: [
      {
        schemes: [
          "https://observablehq.com/@*/*",
          "https://observablehq.com/d/*",
          "https://observablehq.com/embed/*",
        ],
        url: "https://api.observablehq.com/oembed",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Odds.com.au",
    provider_url: "https://www.odds.com.au",
    endpoints: [
      {
        schemes: [
          "https://www.odds.com.au/*",
          "https://odds.com.au/*",
        ],
        url: "https://www.odds.com.au/api/oembed/",
      },
    ],
  },
  {
    provider_name: "Odesli (formerly Songlink)",
    provider_url: "https://odesli.co",
    endpoints: [
      {
        schemes: [
          "https://song.link/*",
          "https://album.link/*",
          "https://artist.link/*",
          "https://playlist.link/*",
          "https://pods.link/*",
          "https://mylink.page/*",
          "https://odesli.co/*",
        ],
        url: "https://song.link/oembed",
        formats: [
          "json",
        ],
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Official FM",
    provider_url: "http://official.fm",
    endpoints: [
      {
        schemes: [
          "http://official.fm/tracks/*",
          "http://official.fm/playlists/*",
        ],
        url: "http://official.fm/services/oembed.{format}",
      },
    ],
  },
  {
    provider_name: "Omniscope",
    provider_url: "https://omniscope.me/",
    endpoints: [
      {
        schemes: [
          "https://omniscope.me/*",
        ],
        url: "https://omniscope.me/_global_/oembed/json",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "On Aol",
    provider_url: "http://on.aol.com/",
    endpoints: [
      {
        schemes: [
          "http://on.aol.com/video/*",
        ],
        url: "http://on.aol.com/api",
      },
    ],
  },
  {
    provider_name: "Ora TV",
    provider_url: "http://www.ora.tv/",
    endpoints: [
      {
        discovery: true,
        url: "https://www.ora.tv/oembed/*?format={format}",
      },
    ],
  },
  {
    provider_name: "Orbitvu",
    provider_url: "https://orbitvu.co",
    endpoints: [
      {
        schemes: [
          "https://orbitvu.co/001/*/ov3601/view",
          "https://orbitvu.co/001/*/ov3601/*/view",
          "https://orbitvu.co/001/*/ov3602/*/view",
          "https://orbitvu.co/001/*/2/orbittour/*/view",
          "https://orbitvu.co/001/*/1/2/orbittour/*/view",
          "http://orbitvu.co/001/*/ov3601/view",
          "http://orbitvu.co/001/*/ov3601/*/view",
          "http://orbitvu.co/001/*/ov3602/*/view",
          "http://orbitvu.co/001/*/2/orbittour/*/view",
          "http://orbitvu.co/001/*/1/2/orbittour/*/view",
        ],
        url: "http://orbitvu.co/service/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Oumy",
    provider_url: "https://www.oumy.com/",
    endpoints: [
      {
        schemes: [
          "https://www.oumy.com/v/*",
        ],
        url: "https://www.oumy.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Outplayed.tv",
    provider_url: "https://outplayed.tv/",
    endpoints: [
      {
        schemes: [
          "https://outplayed.tv/media/*",
        ],
        url: "https://outplayed.tv/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Overflow",
    provider_url: "https://overflow.io",
    endpoints: [
      {
        schemes: [
          "https://overflow.io/s/*",
          "https://overflow.io/embed/*",
        ],
        url: "https://overflow.io/services/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "OZ",
    provider_url: "https://www.oz.com/",
    endpoints: [
      {
        schemes: [
          "https://www.oz.com/*/video/*",
        ],
        url: "https://core.oz.com/oembed",
        formats: [
          "json",
          "xml",
        ],
      },
    ],
  },
  {
    provider_name: "Padlet",
    provider_url: "https://padlet.com/",
    endpoints: [
      {
        schemes: [
          "https://padlet.com/*",
        ],
        url: "https://padlet.com/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Pastery",
    provider_url: "https://www.pastery.net",
    endpoints: [
      {
        schemes: [
          "http://pastery.net/*",
          "https://pastery.net/*",
          "http://www.pastery.net/*",
          "https://www.pastery.net/*",
        ],
        url: "https://www.pastery.net/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "PingVP",
    provider_url: "https://www.pingvp.com/",
    endpoints: [
      {
        url: "https://beta.pingvp.com.kpnis.nl/p/oembed.php",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Pinpoll",
    provider_url: "https://www.pinpoll.com/products/tools",
    endpoints: [
      {
        schemes: [
          "https://tools.pinpoll.com/embed/*",
        ],
        url: "https://tools.pinpoll.com/oembed",
        discovery: true,
        formats: [
          "json",
          "xml",
        ],
      },
    ],
  },
  {
    provider_name: "Pixdor",
    provider_url: "http://www.pixdor.com/",
    endpoints: [
      {
        schemes: [
          "https://store.pixdor.com/place-marker-widget/*/show",
          "https://store.pixdor.com/map/*/show",
        ],
        url: "https://store.pixdor.com/oembed",
        formats: [
          "json",
          "xml",
        ],
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Podbean",
    provider_url: "http://podbean.com",
    endpoints: [
      {
        schemes: [
          "https://*.podbean.com/e/*",
          "http://*.podbean.com/e/*",
        ],
        url: "https://api.podbean.com/v1/oembed",
      },
    ],
  },
  {
    provider_name: "Polaris Share",
    provider_url: "https://www.polarishare.com/",
    endpoints: [
      {
        schemes: [
          "https://www.polarishare.com/*/*",
        ],
        url: "https://api.polarishare.com/rest/api/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Poll Daddy",
    provider_url: "http://polldaddy.com",
    endpoints: [
      {
        schemes: [
          "http://*.polldaddy.com/s/*",
          "http://*.polldaddy.com/poll/*",
          "http://*.polldaddy.com/ratings/*",
        ],
        url: "http://polldaddy.com/oembed/",
      },
    ],
  },
  {
    provider_name: "Port",
    provider_url: "http://www.sellwithport.com/",
    endpoints: [
      {
        schemes: [
          "https://app.sellwithport.com/#/buyer/*",
        ],
        url: "https://api.sellwithport.com/v1.0/buyer/oembed",
      },
    ],
  },
  {
    provider_name: "Portfolium",
    provider_url: "https://portfolium.com",
    endpoints: [
      {
        schemes: [
          "https://portfolium.com/entry/*",
        ],
        url: "https://api.portfolium.com/oembed",
      },
    ],
  },
  {
    provider_name: "posiXion",
    provider_url: "https://posixion.com/",
    endpoints: [
      {
        schemes: [
          "https://posixion.com/question/*",
          "https://posixion.com/*/question/*",
        ],
        url: "http://posixion.com/services/oembed/",
      },
    ],
  },
  {
    provider_name: "Qualifio",
    provider_url: "https://qualifio.com/",
    endpoints: [
      {
        url: "https://oembed.qualifio.com/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Quiz.biz",
    provider_url: "http://www.quiz.biz/",
    endpoints: [
      {
        schemes: [
          "http://www.quiz.biz/quizz-*.html",
        ],
        url: "http://www.quiz.biz/api/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Quizz.biz",
    provider_url: "http://www.quizz.biz/",
    endpoints: [
      {
        schemes: [
          "http://www.quizz.biz/quizz-*.html",
        ],
        url: "http://www.quizz.biz/api/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "RadioPublic",
    provider_url: "https://radiopublic.com",
    endpoints: [
      {
        schemes: [
          "https://play.radiopublic.com/*",
          "https://radiopublic.com/*",
          "https://www.radiopublic.com/*",
          "http://play.radiopublic.com/*",
          "http://radiopublic.com/*",
          "http://www.radiopublic.com/*",
          "https://*.radiopublic.com/*'",
        ],
        url: "https://oembed.radiopublic.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "rcvis",
    provider_url: "https://www.rcvis.com/",
    endpoints: [
      {
        schemes: [
          "https://www.rcvis.com/v/*",
          "https://www.rcvis.com/visualize=*",
          "https://www.rcvis.com/ve/*",
          "https://www.rcvis.com/visualizeEmbedded=*",
        ],
        url: "https://animatron.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Reddit",
    provider_url: "https://reddit.com/",
    endpoints: [
      {
        schemes: [
          "https://reddit.com/r/*/comments/*/*",
          "https://www.reddit.com/r/*/comments/*/*",
        ],
        url: "https://www.reddit.com/oembed",
      },
    ],
  },
  {
    provider_name: "ReleaseWire",
    provider_url: "http://www.releasewire.com/",
    endpoints: [
      {
        schemes: [
          "http://rwire.com/*",
        ],
        url: "http://publisher.releasewire.com/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Replit",
    provider_url: "https://repl.it/",
    endpoints: [
      {
        schemes: [
          "https://repl.it/@*/*",
        ],
        url: "https://repl.it/data/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "RepubHub",
    provider_url: "http://repubhub.icopyright.net/",
    endpoints: [
      {
        schemes: [
          "http://repubhub.icopyright.net/freePost.act?*",
        ],
        url: "http://repubhub.icopyright.net/oembed.act",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "ReverbNation",
    provider_url: "https://www.reverbnation.com/",
    endpoints: [
      {
        schemes: [
          "https://www.reverbnation.com/*",
          "https://www.reverbnation.com/*/songs/*",
        ],
        url: "https://www.reverbnation.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "RiffReporter",
    provider_url: "https://www.riffreporter.de/",
    endpoints: [
      {
        url: "https://www.riffreporter.de/service/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Roomshare",
    provider_url: "http://roomshare.jp",
    endpoints: [
      {
        schemes: [
          "http://roomshare.jp/post/*",
          "http://roomshare.jp/en/post/*",
        ],
        url: "http://roomshare.jp/en/oembed.{format}",
      },
    ],
  },
  {
    provider_name: "RoosterTeeth",
    provider_url: "https://roosterteeth.com",
    endpoints: [
      {
        schemes: [
          "https://roosterteeth.com/*",
        ],
        url: "https://roosterteeth.com/oembed",
        formats: [
          "json",
        ],
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Rumble",
    provider_url: "https://rumble.com/",
    endpoints: [
      {
        url: "https://rumble.com/api/Media/oembed.{format}",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Runkit",
    provider_url: "https://runkit.com",
    endpoints: [
      {
        schemes: [
          // "http://embed.runkit.com/*,",
          // "https://embed.runkit.com/*,",
          "https://runkit.com",
          "http://runkit.com",
        ],
        url: "https://embed.runkit.com/oembed",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Saooti",
    provider_url: "https://octopus.saooti.com",
    endpoints: [
      {
        schemes: [
          "https://octopus.saooti.com/main/pub/podcast/*",
        ],
        url: "https://octopus.saooti.com/oembed",
      },
    ],
  },
  {
    provider_name: "Sapo Videos",
    provider_url: "http://videos.sapo.pt",
    endpoints: [
      {
        schemes: [
          "http://videos.sapo.pt/*",
        ],
        url: "http://videos.sapo.pt/oembed",
      },
    ],
  },
  {
    provider_name: "Screen9",
    provider_url: "http://www.screen9.com/",
    endpoints: [
      {
        schemes: [
          "https://console.screen9.com/*",
          "https://*.screen9.tv/*",
        ],
        url: "https://api.screen9.com/oembed",
      },
    ],
  },
  {
    provider_name: "Screencast.com",
    provider_url: "http://www.screencast.com/",
    endpoints: [
      {
        url: "https://api.screencast.com/external/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Screenr",
    provider_url: "http://www.screenr.com/",
    endpoints: [
      {
        schemes: [
          "http://www.screenr.com/*/",
        ],
        url: "http://www.screenr.com/api/oembed.{format}",
      },
    ],
  },
  {
    provider_name: "ScribbleMaps",
    provider_url: "https://scribblemaps.com",
    endpoints: [
      {
        schemes: [
          "http://www.scribblemaps.com/maps/view/*",
          "https://www.scribblemaps.com/maps/view/*",
          "http://scribblemaps.com/maps/view/*",
          "https://scribblemaps.com/maps/view/*",
        ],
        url: "https://scribblemaps.com/api/services/oembed.{format}",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Scribd",
    provider_url: "http://www.scribd.com/",
    endpoints: [
      {
        schemes: [
          "http://www.scribd.com/doc/*",
        ],
        url: "http://www.scribd.com/services/oembed/",
      },
    ],
  },
  {
    provider_name: "SendtoNews",
    provider_url: "http://www.sendtonews.com/",
    endpoints: [
      {
        schemes: [
          "https://embed.sendtonews.com/oembed/*",
        ],
        url: "https://embed.sendtonews.com/services/oembed",
        discovery: true,
        formats: [
          "json",
          "xml",
        ],
      },
    ],
  },
  {
    provider_name: "ShortNote",
    provider_url: "https://www.shortnote.jp/",
    endpoints: [
      {
        schemes: [
          "https://www.shortnote.jp/view/notes/*",
        ],
        url: "https://www.shortnote.jp/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Shoudio",
    provider_url: "http://shoudio.com",
    endpoints: [
      {
        schemes: [
          "http://shoudio.com/*",
          "http://shoud.io/*",
        ],
        url: "http://shoudio.com/api/oembed",
      },
    ],
  },
  {
    provider_name: "Show by Animaker",
    provider_url: "https://getshow.io/",
    endpoints: [
      {
        schemes: [
          "https://app.getshow.io/iframe/*",
          "https://*.getshow.io/share/*",
        ],
        url: "https://api.getshow.io/oembed.{format}",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Show the Way, actionable location info",
    provider_url: "https://showtheway.io",
    endpoints: [
      {
        schemes: [
          "https://showtheway.io/to/*",
        ],
        url: "https://showtheway.io/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Simplecast",
    provider_url: "https://simplecast.com",
    endpoints: [
      {
        schemes: [
          "https://simplecast.com/s/*",
        ],
        url: "https://simplecast.com/oembed",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Sizzle",
    provider_url: "https://onsizzle.com/",
    endpoints: [
      {
        schemes: [
          "https://onsizzle.com/i/*",
        ],
        url: "https://onsizzle.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Sketchfab",
    provider_url: "http://sketchfab.com",
    endpoints: [
      {
        schemes: [
          "http://sketchfab.com/models/*",
          "https://sketchfab.com/models/*",
          "https://sketchfab.com/*/folders/*",
        ],
        url: "http://sketchfab.com/oembed",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "SlideShare",
    provider_url: "http://www.slideshare.net/",
    endpoints: [
      {
        schemes: [
          "https://www.slideshare.net/*/*",
          "http://www.slideshare.net/*/*",
          "https://fr.slideshare.net/*/*",
          "http://fr.slideshare.net/*/*",
          "https://de.slideshare.net/*/*",
          "http://de.slideshare.net/*/*",
          "https://es.slideshare.net/*/*",
          "http://es.slideshare.net/*/*",
          "https://pt.slideshare.net/*/*",
          "http://pt.slideshare.net/*/*",
        ],
        url: "https://www.slideshare.net/api/oembed/2",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "SmashNotes",
    provider_url: "https://smashnotes.com",
    endpoints: [
      {
        schemes: [
          "https://smashnotes.com/p/*",
          "https://smashnotes.com/p/*/e/* - https://smashnotes.com/p/*/e/*/s/*",
        ],
        url: "https://smashnotes.com/services/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "SmugMug",
    provider_url: "https://www.smugmug.com/",
    endpoints: [
      {
        schemes: [
          "http://*.smugmug.com/*",
          "https://*.smugmug.com/*",
        ],
        url: "https://api.smugmug.com/services/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "SocialExplorer",
    provider_url: "https://www.socialexplorer.com/",
    endpoints: [
      {
        schemes: [
          "https://www.socialexplorer.com/*/explore",
          "https://www.socialexplorer.com/*/view",
          "https://www.socialexplorer.com/*/edit",
          "https://www.socialexplorer.com/*/embed",
        ],
        url: "https://www.socialexplorer.com/services/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "SoundCloud",
    provider_url: "http://soundcloud.com/",
    endpoints: [
      {
        schemes: [
          "http://soundcloud.com/*",
          "https://soundcloud.com/*",
          "https://soundcloud.app.goog.gl/*",
        ],
        url: "https://soundcloud.com/oembed",
      },
    ],
  },
  {
    provider_name: "SpeakerDeck",
    provider_url: "https://speakerdeck.com",
    endpoints: [
      {
        schemes: [
          "http://speakerdeck.com/*/*",
          "https://speakerdeck.com/*/*",
        ],
        url: "https://speakerdeck.com/oembed.json",
        discovery: true,
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Spotful",
    provider_url: "https://bespotful.com",
    endpoints: [
      {
        schemes: [
          "http://play.bespotful.com/*",
        ],
        url: "https://api.bespotful.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Spotify",
    provider_url: "https://spotify.com/",
    endpoints: [
      {
        schemes: [
          "https://*.spotify.com/*",
          "spotify:*",
        ],
        url: "https://embed.spotify.com/oembed/",
      },
    ],
  },
  {
    provider_name: "Spreaker",
    provider_url: "https://www.spreaker.com/",
    endpoints: [
      {
        schemes: [
          "http://*.spreaker.com/*",
          "https://*.spreaker.com/*",
        ],
        url: "https://api.spreaker.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Stanford Digital Repository",
    provider_url: "https://purl.stanford.edu/",
    endpoints: [
      {
        schemes: [
          "https://purl.stanford.edu/*",
        ],
        url: "https://purl.stanford.edu/embed.{format}",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Streamable",
    provider_url: "https://streamable.com/",
    endpoints: [
      {
        schemes: [
          "http://streamable.com/*",
          "https://streamable.com/*",
        ],
        url: "https://api.streamable.com/oembed.json",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "StreamOneCloud",
    provider_url: "https://www.streamone.nl",
    endpoints: [
      {
        schemes: [
          "https://content.streamonecloud.net/embed/*",
        ],
        url: "https://content.streamonecloud.net/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Subscribi",
    provider_url: "https://subscribi.io/",
    endpoints: [
      {
        schemes: [
          "https://subscribi.io/api/oembed*",
        ],
        url: "https://subscribi.io/api/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Sudomemo",
    provider_url: "https://www.sudomemo.net/",
    endpoints: [
      {
        schemes: [
          "https://www.sudomemo.net/watch/*",
          "http://www.sudomemo.net/watch/*",
          "https://flipnot.es/*",
          "http://flipnot.es/*",
        ],
        url: "https://www.sudomemo.net/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Sutori",
    provider_url: "https://www.sutori.com/",
    endpoints: [
      {
        schemes: [
          "https://www.sutori.com/story/*",
        ],
        url: "https://www.sutori.com/api/oembed",
        discovery: true,
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Sway",
    provider_url: "https://www.sway.com",
    endpoints: [
      {
        schemes: [
          "https://sway.com/*",
          "https://www.sway.com/*",
        ],
        url: "https://sway.com/api/v1.0/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "TED",
    provider_url: "https://www.ted.com",
    endpoints: [
      {
        schemes: [
          "http://ted.com/talks/*",
          "https://ted.com/talks/*",
          "https://www.ted.com/talks/*",
        ],
        url: "https://www.ted.com/services/v1/oembed.{format}",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "The New York Times",
    provider_url: "https://www.nytimes.com",
    endpoints: [
      {
        schemes: [
          "https://www.nytimes.com/svc/oembed",
          "https://nytimes.com/*",
          "https://*.nytimes.com/*",
        ],
        url: "https://www.nytimes.com/svc/oembed/json/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "They Said So",
    provider_url: "https://theysaidso.com/",
    endpoints: [
      {
        schemes: [
          "https://theysaidso.com/image/*",
        ],
        url: "https://theysaidso.com/extensions/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "TickCounter",
    provider_url: "https://www.tickcounter.com",
    endpoints: [
      {
        schemes: [
          "http://www.tickcounter.com/countdown/*",
          "http://www.tickcounter.com/countup/*",
          "http://www.tickcounter.com/ticker/*",
          "http://www.tickcounter.com/worldclock/*",
          "https://www.tickcounter.com/countdown/*",
          "https://www.tickcounter.com/countup/*",
          "https://www.tickcounter.com/ticker/*",
          "https://www.tickcounter.com/worldclock/*",
        ],
        url: "https://www.tickcounter.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "TikTok",
    provider_url: "http://www.tiktok.com/",
    endpoints: [
      {
        schemes: [
          "https://www.tiktok.com/*/video/*",
        ],
        url: "https://www.tiktok.com/oembed",
      },
    ],
  },
  {
    provider_name: "Toornament",
    provider_url: "https://www.toornament.com/",
    endpoints: [
      {
        schemes: [
          "https://www.toornament.com/tournaments/*/information",
          "https://www.toornament.com/tournaments/*/registration/",
          "https://www.toornament.com/tournaments/*/matches/schedule",
          "https://www.toornament.com/tournaments/*/stages/*/",
        ],
        url: "https://widget.toornament.com/oembed",
        discovery: true,
        formats: [
          "json",
          "xml",
        ],
      },
    ],
  },
  {
    provider_name: "Topy",
    provider_url: "http://www.topy.se/",
    endpoints: [
      {
        schemes: [
          "http://www.topy.se/image/*",
        ],
        url: "http://www.topy.se/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "TourHero",
    provider_url: "http://www.tourhero.com",
    endpoints: [
      {
        schemes: [
          "https://www.tourhero.com/*",
        ],
        url: "https://oembed.tourhero.com/",
        discovery: true,
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Tumblr",
    provider_url: "https://www.tumblr.com",
    endpoints: [
      {
        schemes: [
          "https://*.tumblr.com/post/*",
        ],
        url: "https://www.tumblr.com/oembed/1.0",
      },
    ],
  },
  {
    provider_name: "Tuxx",
    provider_url: "https://www.tuxx.be/",
    endpoints: [
      {
        schemes: [
          "https://www.tuxx.be/*",
        ],
        url: "https://www.tuxx.be/services/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "tvcf",
    provider_url: "http://tvcf.co.kr",
    endpoints: [
      {
        schemes: [
          "https://play.tvcf.co.kr/*",
          "https://*.tvcf.co.kr/*",
        ],
        url: "https://play.tvcf.co.kr/rest/oembed",
      },
    ],
  },
  {
    provider_name: "Twitter",
    provider_url: "http://www.twitter.com/",
    endpoints: [
      {
        schemes: [
          "https://twitter.com/*/status/*",
          "https://*.twitter.com/*/status/*",
          "https://twitter.com/*/moments/*",
          "https://*.twitter.com/*/moments/*",
        ],
        url: "https://publish.twitter.com/oembed",
      },
    ],
  },
  {
    provider_name: "TypeCast",
    provider_url: "https://typecast.ai",
    endpoints: [
      {
        schemes: [
          "https://play.typecast.ai/s/*",
          "https://play.typecast.ai/e/*",
          "https://play.typecast.ai/*",
        ],
        url: "https://play.typecast.ai/oembed",
      },
    ],
  },
  {
    provider_name: "Typlog",
    provider_url: "https://typlog.com",
    endpoints: [
      {
        url: "https://typlog.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Ubideo",
    provider_url: "https://player.ubideo.com/",
    endpoints: [
      {
        schemes: [
          "https://player.ubideo.com/*",
        ],
        url: "https://player.ubideo.com/api/oembed.json",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "University of Cambridge Map",
    provider_url: "https://map.cam.ac.uk",
    endpoints: [
      {
        schemes: [
          "https://map.cam.ac.uk/*",
        ],
        url: "https://map.cam.ac.uk/oembed/",
      },
    ],
  },
  {
    provider_name: "UnivParis1.Pod",
    provider_url: "https://mediatheque.univ-paris1.fr/",
    endpoints: [
      {
        schemes: [
          "https://mediatheque.univ-paris1.fr/video/*",
        ],
        url: "https://mediatheque.univ-paris1.fr/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "UOL",
    provider_url: "https://mais.uol.com.br/",
    endpoints: [
      {
        schemes: [
          "https://*.uol.com.br/view/*",
          "https://*.uol.com.br/video/*",
        ],
        url: "https://mais.uol.com.br/apiuol/v3/oembed/view",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "uppy",
    provider_url: "https://uppy.jp",
    endpoints: [
      {
        schemes: [
          "https://app.uppy.jp/_shares/video/*",
        ],
        url: "https://api.uppy.jp/v1/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Ustream",
    provider_url: "http://www.ustream.tv",
    endpoints: [
      {
        schemes: [
          "http://*.ustream.tv/*",
          "http://*.ustream.com/*",
        ],
        url: "http://www.ustream.tv/oembed",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "uStudio, Inc.",
    provider_url: "https://www.ustudio.com",
    endpoints: [
      {
        schemes: [
          "https://*.ustudio.com/embed/*",
          "https://*.ustudio.com/embed/*/*",
        ],
        url: "https://app.ustudio.com/api/v2/oembed",
        discovery: true,
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Utposts",
    provider_url: "https://www.utposts.com/",
    endpoints: [
      {
        schemes: [
          "https://www.utposts.com/products/*",
          "http://www.utposts.com/products/*",
          "https://utposts.com/products/*",
          "http://utposts.com/products/*",
        ],
        url: "https://www.utposts.com/api/oembed",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Uttles",
    provider_url: "http://uttles.com",
    endpoints: [
      {
        schemes: [
          "http://uttles.com/uttle/*",
        ],
        url: "http://uttles.com/api/reply/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "VeeR VR",
    provider_url: "http://veer.tv/",
    endpoints: [
      {
        schemes: [
          "http://veer.tv/videos/*",
        ],
        url: "https://api.veer.tv/oembed",
        discovery: true,
      },
      {
        schemes: [
          "http://veervr.tv/videos/*",
        ],
        url: "https://api.veervr.tv/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Verse",
    provider_url: "http://verse.com/",
    endpoints: [
      {
        url: "http://verse.com/services/oembed/",
      },
    ],
  },
  {
    provider_name: "VEVO",
    provider_url: "http://www.vevo.com/",
    endpoints: [
      {
        schemes: [
          "http://www.vevo.com/*",
          "https://www.vevo.com/*",
        ],
        url: "https://www.vevo.com/oembed",
        discovery: false,
      },
    ],
  },
  {
    provider_name: "VideoJug",
    provider_url: "http://www.videojug.com",
    endpoints: [
      {
        schemes: [
          "http://www.videojug.com/film/*",
          "http://www.videojug.com/interview/*",
        ],
        url: "http://www.videojug.com/oembed.{format}",
      },
    ],
  },
  {
    provider_name: "Vidlit",
    provider_url: "https://vidl.it/",
    endpoints: [
      {
        schemes: [
          "https://vidl.it/*",
        ],
        url: "https://api.vidl.it/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Vidmizer",
    provider_url: "https://www.vidmizer.com/",
    endpoints: [
      {
        schemes: [
          "https://players-cdn-v2.vidmizer.com/*",
        ],
        url: "https://app-v2.vidmizer.com/api/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Vidyard",
    provider_url: "https://vidyard.com",
    endpoints: [
      {
        schemes: [
          "http://*.vidyard.com/*",
          "https://*.vidyard.com/*",
          "http://*.hubs.vidyard.com/*",
          "https://*.hubs.vidyard.com/*",
        ],
        url: "https://api.vidyard.com/dashboard/v1.1/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Vimeo",
    provider_url: "https://vimeo.com/",
    endpoints: [
      {
        schemes: [
          "https://vimeo.com/*",
          "https://vimeo.com/album/*/video/*",
          "https://vimeo.com/channels/*/*",
          "https://vimeo.com/groups/*/videos/*",
          "https://vimeo.com/ondemand/*/*",
          "https://player.vimeo.com/video/*",
        ],
        url: "https://vimeo.com/api/oembed.json", // TODO: This will force it to provide JSON only
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Viously",
    provider_url: "https://www.viously.com",
    endpoints: [
      {
        schemes: [
          "https://www.viously.com/*/*",
        ],
        url: "https://www.viously.com/oembed",
        discovery: true,
        formats: [
          "json",
          "xml",
        ],
      },
    ],
  },
  {
    provider_name: "Viziosphere",
    provider_url: "http://www.viziosphere.com",
    endpoints: [
      {
        schemes: [
          "http://viziosphere.com/3dphoto*",
        ],
        url: "http://viziosphere.com/services/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Vizydrop",
    provider_url: "https://vizydrop.com",
    endpoints: [
      {
        schemes: [
          "https://vizydrop.com/shared/*",
        ],
        url: "https://vizydrop.com/oembed",
      },
    ],
  },
  {
    provider_name: "Vlipsy",
    provider_url: "https://vlipsy.com/",
    endpoints: [
      {
        schemes: [
          "https://vlipsy.com/*",
        ],
        url: "https://vlipsy.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "VLIVE",
    provider_url: "https://www.vlive.tv",
    endpoints: [
      {
        url: "https://www.vlive.tv/oembed",
        schemes: [
          "https://www.vlive.tv/video/*",
        ],
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Vlurb",
    provider_url: "https://www.vlurb.co/",
    endpoints: [
      {
        schemes: [
          "http://vlurb.co/video/*",
          "https://vlurb.co/video/*",
        ],
        url: "https://vlurb.co/oembed.json",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "VoxSnap",
    provider_url: "https://voxsnap.com/",
    endpoints: [
      {
        schemes: [
          "https://article.voxsnap.com/*/*",
        ],
        url: "https://data.voxsnap.com/oembed",
        discovery: true,
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Wave.video",
    provider_url: "https://wave.video",
    endpoints: [
      {
        schemes: [
          "https://watch.wave.video/*",
          "https://embed.wave.video/*",
        ],
        url: "https://embed.wave.video/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "wecandeo",
    provider_url: "http://www.wecandeo.com/",
    endpoints: [
      {
        url: "http://play.wecandeo.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Wiredrive",
    provider_url: "https://www.wiredrive.com/",
    endpoints: [
      {
        schemes: [
          "https://*.wiredrive.com/*",
        ],
        url: "http://*.wiredrive.com/present-oembed/",
        formats: [
          "json",
        ],
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Wistia, Inc.",
    provider_url: "https://wistia.com/",
    endpoints: [
      {
        schemes: [
          "https://fast.wistia.com/embed/iframe/*",
          "https://fast.wistia.com/embed/playlists/*",
          "https://*.wistia.com/medias/*",
        ],
        url: "https://fast.wistia.com/oembed.{format}",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "wizer.me",
    provider_url: "http://www.wizer.me/",
    endpoints: [
      {
        schemes: [
          "http://*.wizer.me/learn/*",
          "https://*.wizer.me/learn/*",
          "http://*.wizer.me/preview/*",
          "https://*.wizer.me/preview/*",
        ],
        url: "http://app.wizer.me/api/oembed.{format}",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Wokwi",
    provider_url: "https://wokwi.com",
    endpoints: [
      {
        schemes: [
          "https://wokwi.com/share/*",
        ],
        url: "https://wokwi.com/api/oembed",
        discovery: true,
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "Wolfram Cloud",
    provider_url: "https://www.wolframcloud.com",
    endpoints: [
      {
        schemes: [
          "https://*.wolframcloud.com/*",
        ],
        url: "https://www.wolframcloud.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Wootled",
    provider_url: "http://www.wootled.com/",
    endpoints: [
      {
        url: "http://www.wootled.com/oembed",
      },
    ],
  },
  {
    provider_name: "WordPress.com",
    provider_url: "http://wordpress.com/",
    endpoints: [
      {
        url: "http://public-api.wordpress.com/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Xpression",
    provider_url: "https://web.xpression.jp",
    endpoints: [
      {
        schemes: [
          "https://web.xpression.jp/video/*",
        ],
        url: "https://web.xpression.jp/api/oembed",
        formats: [
          "json",
          "xml",
        ],
      },
    ],
  },
  {
    provider_name: "Yes, I Know IT!",
    provider_url: "http://yesik.it",
    endpoints: [
      {
        schemes: [
          "http://yesik.it/*",
          "http://www.yesik.it/*",
        ],
        url: "http://yesik.it/s/oembed",
        formats: [
          "json",
        ],
        discovery: true,
      },
    ],
  },
  {
    provider_name: "YFrog",
    provider_url: "http://yfrog.com/",
    endpoints: [
      {
        schemes: [
          "http://*.yfrog.com/*",
          "http://yfrog.us/*",
        ],
        url: "http://www.yfrog.com/api/oembed",
        formats: [
          "json",
        ],
      },
    ],
  },
  {
    provider_name: "YouTube",
    provider_url: "https://www.youtube.com/",
    endpoints: [
      {
        schemes: [
          "https://*.youtube.com/watch*",
          "https://*.youtube.com/v/*",
          "https://youtu.be/*",
        ],
        url: "https://www.youtube.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Zeplin",
    provider_url: "https://zeplin.io",
    endpoints: [
      {
        schemes: [
          "https://app.zeplin.io/project/*/screen/*",
          "https://app.zeplin.io/project/*/screen/*/version/*",
          "https://app.zeplin.io/project/*/styleguide/components?coid=*",
          "https://app.zeplin.io/styleguide/*/components?coid=*",
        ],
        url: "https://app.zeplin.io/embed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "ZingSoft",
    provider_url: "https://app.zingsoft.com",
    endpoints: [
      {
        schemes: [
          "https://app.zingsoft.com/embed/*",
          "https://app.zingsoft.com/view/*",
        ],
        url: "https://app.zingsoft.com/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "ZnipeTV",
    provider_url: "https://www.znipe.tv/",
    endpoints: [
      {
        schemes: [
          "https://*.znipe.tv/*",
        ],
        url: "https://api.znipe.tv/v3/oembed/",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Zoomable",
    provider_url: "https://zoomable.ca/",
    endpoints: [
      {
        schemes: [
          "https://srv2.zoomable.ca/viewer.php*",
        ],
        url: "https://srv2.zoomable.ca/oembed",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Canva",
    provider_url: "https://canva.com",
    endpoints: [
      {
        schemes: [
          "https://www.canva.com/design/*",
        ],
        url: "https://www.canva.com/_oembed",
        discovery: true,
      },
    ],
  },
];

const additionalOEmbedProviders = [
  {
    provider_name: "Anchor",
    provider_url: "https://anchor.fm",
    endpoints: [
      {
        schemes: [
          "https://anchor.fm/*",
        ],
        url: "https://anchor.fm",
        discovery: true,
      },
    ],
  },
];

const customProviders = [
  {
    provider_name: "Github gist",
    provider_url: "https://github.com",
    custom: true,
    customClass: GithubGist,
    endpoints: [
      {
        schemes: [
          "https://gist.github.com/*",
        ],
        url: "https://gist.github.com",
        discovery: false,
      },
    ],
  },
  {
    provider_name: "Expo",
    provider_url: "https://expo.io",
    custom: true,
    customClass: ExpoSnack,
    endpoints: [
      {
        schemes: [
          "https://snack.expo.io/*",
        ],
        url: "https://snack.expo.io",
      },
    ],
  },
  {
    provider_name: "Twitch",
    provider_url: "https://twitch.tv",
    custom: true,
    customClass: Twitch,
    endpoints: [
      {
        schemes: [
          "https://www.twitch.tv/*",
        ],
        url: "https://www.twitch.tv",
      },
    ],
  },
  {
    provider_name: "Glitch",
    provider_url: "https://glitch.com",
    custom: true,
    customClass: Glitch,
    endpoints: [
      {
        schemes: [
          "https://glitch.com/*",
        ],
        url: "https://glitch.com",
      },
    ],
  },
  {
    provider_name: "GIPHY",
    provider_url: "https://giphy.com",
    custom: true,
    customClass: Giphy,
    endpoints: [
      {
        schemes: [
          "https://giphy.com/gifs/*",
          "http://gph.is/*",
          "https://media.giphy.com/media/*/giphy.gif",
        ],
        url: "https://giphy.com/services/oembed",
        discovery: false,
      },
    ],
  },
  {
    provider_name: "Loom",
    provider_url: "https://loom.com",
    custom: true,
    customClass: Loom,
    endpoints: [
      {
        schemes: [
          "https://www.loom.com/share/*",
        ],
        url: "https://loom.com",
        discovery: false,
      },
    ],
  },
  {
    provider_name: "Codepen",
    provider_url: "https://codepen.io",
    custom: true,
    customClass: Codepen,
    endpoints: [
      {
        schemes: [
          "http://codepen.io/*",
          "https://codepen.io/*",
        ],
        url: "https://codepen.io/api/oembed",
        discovery: false,
      },
    ],
  },
];

export default [...oEmbedProviders, ...additionalOEmbedProviders, ...customProviders];
