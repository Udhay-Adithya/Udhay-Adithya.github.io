'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "44410a777cdb0ab78d9bf1adb3771736",
"version.json": "9b818ca9511483c901bed1545384376c",
"favicon.ico": "8820c66da69edbe0b3532566006f6e1f",
"index.html": "262edd172e1b24581993bd73fb40174a",
"/": "262edd172e1b24581993bd73fb40174a",
"main.dart.js": "fd553aeae6b7f5ef9fc3b146ecd48784",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.mjs": "69b029dbbe7dd353c90f3d434d4da538",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"main.dart.wasm": "36b93df39a00cc3aeca017b61cf7123e",
".git/ORIG_HEAD": "01afebf0ccc5741627d6e51d584c8879",
".git/config": "5aa63e468b241d7130b57c68e5e10b7b",
".git/objects/0d/497dc146752c12d7204f5cbde0885a6d2be430": "87bc98cba845388e86afa8bfaadfaa12",
".git/objects/0d/c689e20498d64e4a6ebdd21f7469f1fed18497": "ae3b1c91ec7737a6dc7b56f667d631e8",
".git/objects/0d/07fda7b9db1985564f7a984d9512542bd222b7": "5ff0fe16d679a937ad56d77187a29c7f",
".git/objects/59/aabf7e652e8d2fdfb5a69636217265ba803223": "7969019a67389d6edcb21ffc2349f219",
".git/objects/0c/7371bfd9ee65c0d85e4a9a8be57f4f7813b80b": "d49a1b927b4552b0f1f22717f40acbff",
".git/objects/0c/ca223d26ea292671e05f4bc108ac9aeca4d3c9": "10371837cd28da1a7bf8e4b475272181",
".git/objects/57/7db64336cdc5259677b7df79dc727ee3377203": "3407a2d591840f3a23414ba8efa6989f",
".git/objects/57/402e38c75a768327230c58a691189626dc83de": "e8d6ab206d9932eea7d5e731494cb758",
".git/objects/57/a196a3f2b0d64e64ce420beecf76632b86213f": "7c09fb3aca3e370d1103511aced844f1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/d5d4bc66e956eda772ef4ff9951d6b27b580d6": "a31829530b51d0b68ed9786d8d41b10f",
".git/objects/9e/a403605adc80dec967f4a61828d65c73d51440": "f316458c21088a7b27860358db00564c",
".git/objects/04/5d9d638d32f7e60ba0b090ff84fd2d76ec535f": "6e2cf4de0c9cb1ca7dc27c5385aafb85",
".git/objects/6a/c480ff9921be5ac5ef102fa54d2bd2b55614ab": "d1d4056bc029fee8d472794bc3ae2893",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/deec44af26e43743979835da9eefd2ed245e60": "50a2d2231f65b32b0e46071b77e40c71",
".git/objects/32/2f5297e23710affb03466072c0efd550450fd5": "f6dafd016e73b86ae9e356d8fee5d6fc",
".git/objects/32/d4e0f182a4c45b4d67c502cceb337bbb733aff": "623f7f385df07109449df476e1fc1842",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3c/2c6f28a57ef3d4cf30d9fb1e6c973da9f18b73": "5b72f8eb5d09d1262c0b376791c792cf",
".git/objects/56/eab2a4d49cf26e8373524741520b1c84615f62": "8c61ff966a1918316e106769e8342432",
".git/objects/56/1fa4641b5d0b595c45bda8d1c7326c4e957927": "9ca289ad99d3e81430c0abc6fcfd0751",
".git/objects/56/de4ad0d4ab124200f0dc9581493555bfe3f924": "01a5b51343a99fb0d4e2edeeede7fe60",
".git/objects/51/f4fe1c19e25678487ea5970db3a717af941150": "40ec16025b71f2a8fa203c7593746f67",
".git/objects/3d/3cb0e23bf9414d787d18566ad55513f7de36fe": "00c4afab45b5c9187f1b5b6b0326b403",
".git/objects/58/1e2725a6a44e9c607d3a64c7f1893af1b3fbaf": "a38e1002dbfdefb4cb4a8a4b8227e199",
".git/objects/67/b3f45b96b94c90901f531c14262f28045a9daf": "421179c746ce1ecfd60b50eba817d361",
".git/objects/0b/3e0360732e60d3fefe33b1282f803b3c632e6c": "8f2450f28962d1450167e10bc52798af",
".git/objects/0b/15d580f560409832c24a95b6ae4383165c1043": "3b492a62fa97baa7766afabea6e8b26d",
".git/objects/0b/2822dbd37c3fd2c8015d754f670b26a34cc81d": "3d72b558eaddef25516295c229b94580",
".git/objects/0e/799077272e2e88dc7cd067fa128431009b2725": "80f51539aebe951581f899aac694a9f4",
".git/objects/34/e55a124b4597287421b537c8234ed6a761b71f": "4c7da53cdff9daeeb8b163b39e603137",
".git/objects/34/fdf0707332cb13da64f9969e380f6e9c2e1894": "0af928db60aec68f64fdc9cdc7917502",
".git/objects/5a/65f63d16bc52e66b42282664207ca90b30cc86": "c99f096ef0a0b2f38c2828bb2f7f1c3b",
".git/objects/5a/9bd68f43db56cb3920e06ffa92af3a024c61cb": "9a15d90a20184e544c0ca6081f5e07b5",
".git/objects/9c/feaf843d40bf608451ce6fa7befb93d98804f3": "5254aeb868f611aa65d9d22e703def22",
".git/objects/02/d3f067f9abb30f2bd8a629314184ce8a282e99": "885a376e690fe6456e748a5a2d098cc1",
".git/objects/a4/286f6242430fd7f8900b4a90597c8ce846601a": "0b93139b41b6386ac7a772a291dd4211",
".git/objects/a3/d8224f82b0e9f033ac9c98e5c4a5a67aeb4e40": "e867b2ca5bd5b87d658cf784709e49c9",
".git/objects/b5/3bc3df6e62c4a0605cefaf9aec623ec499306b": "bea26c08258960893a37a3debddaf0b0",
".git/objects/b5/644a73e9af29f565f3acb2a592612cee331df7": "f426377635b5de5d2492c03cd1a6f3f8",
".git/objects/ac/795bb5d96410380ab759c2ab1c05e51d6b2b31": "1da3dc28fbc40ad27758e56be4f19faf",
".git/objects/ad/287f3f58081d3c28346c4e7515681de03c7617": "95663c7e29f6753d8e0e2da78d24e62f",
".git/objects/ad/632caa4f9c3701c81b480e85cd9fdcade66b88": "774c67ed8408a85608d4bfe09e3c4897",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/0612838c8a6b3b431fddac24d4557e940d4748": "548ddbbad87a12de4a968b6aa47700b2",
".git/objects/da/c61d88f5feaa7bcb4af2612a5078ad661fc796": "3e5b528b8b577cec69ebe99f1c78f11c",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a5/81fd8a1dcc7caf6f385d2b9a07a52ba1debcc6": "d1adb29c08f504db6ef4fa049b053139",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/c26dfa02b9dc90b5f34b6749bea1922fc6c1fa": "5261aeff613de8c5e41048cf5716cea8",
".git/objects/bc/396d4512c8f7ac81c5a28014da218c3ea40c2a": "a23f07a845249b3891278219bb3901a8",
".git/objects/e2/542c8136af2692279237eb612375e2cdabee2a": "cdd4ad7b7cd2fa736d4f466c17a1cc7d",
".git/objects/f4/cb36ac8372db0d9a6d7d0f5fd16e152b4e5532": "0b60dfd69998adccd44a398ce6d38a09",
".git/objects/f3/31ded15acbbb8e81f572c8500ee5f5444d0b43": "3c1bc83c7f181511d062ac02b1edf238",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/3b872e5f38dc15b0daa6a7bb057fde7c8f9499": "924aba457a5230b865e258876e09344f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/70d38a68021b3ac8ee57b67d6a418e54b5cf92": "7cb5a611c02709e88b12a35f10e6a5a2",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/e3/3b1b8aa1f433faf161aaaff8611629c4a06f57": "88249e364986b542521ab69a3d6ed98c",
".git/objects/cf/af3b48e190e574dc8e316a164624ec836efbb5": "7c40b48b8978a1b048850a19facf1173",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/9a574bf3bf7000c7a1b965a0bd4f3af3803f18": "1ea9401fe8352ff1b123dbc7479f3366",
".git/objects/c1/31b35aa3c29abc86531a7d072bb531814215f2": "d45b26f276077a90f48d49f3bbbcff41",
".git/objects/c6/94aed70ce56e3a7d10735584d730f92c69f5ae": "7121d78f189b91376d83151ec3bb8f44",
".git/objects/ec/1f43704cd3a0f9478216afb506778f00aa0792": "d9001addc8d25bf7780e094ecaab74c1",
".git/objects/4e/0d7e1801341a7d53d465d487ab738d74894e69": "9eda4444f2b950f5960ae2ba36fcc12f",
".git/objects/20/d1d6f152bd7f6a435a6433530714582c3f7907": "043f06dd1a09f82b8b88ce929cb43c44",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/a4726cfccd9ac35dd52aa74f3d91dc76e9b302": "1e0be6fb96b08042c709e207b21ed83b",
".git/objects/11/aaefa6a5f0522fabb4ed35801cef05fa05bfec": "8d9f8dd69ca7cf17db3332cb5616c081",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/16/5825aec73ba8739bd47d2ab8c667f575d34666": "441a7ebf8a2170931a0392a3111a6c69",
".git/objects/89/92618cfdd411de87a0d20ab4cf633fec81eae8": "208ed041f5a994d56a7482bfb9d7a01b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/6ea3d9217ed534ca241f5ef258083000eeec23": "fc6c24e6ba968da2d51d11e92a53e088",
".git/objects/87/8f3f0c5ebc17eb3d67a66c751ea2dd6921e056": "39160d8125ec52d98b85a6216e1c2878",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/7b/f966ebbdf20c6a2a3dc75811b3b8a81d6ae098": "e0332429b100c038825eaf5fc76a7554",
".git/objects/8f/998aff167b52bf24cbdb0367a746beeffeeaf0": "31f04a21c086eb38091aaa51c7876a87",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/9b44b2a636ab532558d7e2984e82548e20d169": "7e59d6cd9b9d8572439814dd4d1638bf",
".git/objects/8a/e436cbfcf739c43dc14641781dcd3331df57f7": "3dba943bead5a0838d8eb0a94b464678",
".git/objects/8a/85831a01a4a3e45eeb92f0b652aa9f373a50d9": "3d0a64e7b09c10962d952196af2edda7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/a37baa9a74665daa553e528e07adb8a59127aa": "df984cd70d2bb07d33f1d0f652e30d16",
".git/objects/7e/0cc892095f3a47ca309c1c5934585519b2698b": "a67363bc673d678564a875d5d622338c",
".git/objects/7e/4a1399f1b2ff35370ca590eca345c6e44cc4c9": "df0e762de537a59d5cf92174a160cee5",
".git/objects/26/39ec00a15d481bad3cd9ee42abd898ddad3ba6": "8ee623a8581f7b4a66cc81c3dc9448ba",
".git/objects/21/bf2f304d9c7b446c05adfa50c024529983d251": "9a8e945c912d0963bb8c18aa57bbbaeb",
".git/objects/4d/d75c4de92265103ccf1faa5e5db60ca7d03ef0": "73f4bf57774b60ae4f34679f04d1b6df",
".git/objects/75/fc3e16d9c722b42d771ba9a1cc889fc6e2793b": "99eda2f2f49eab7a44d827fef2c6ab7e",
".git/objects/86/8f42761a8adcc56c2c856427965fad43e428d6": "f87d321fbfe9bba75dbc1dd993eccaa4",
".git/objects/86/b2c8629180a96e9d0cd8afca565da67dfaf66f": "0676452dade403193c84ad0aa53903a3",
".git/objects/72/cab4a6d1177a695e78195b3837513ecf055471": "058ad713546c9656c4c9ad5aa5271237",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/efe186a93e7c2a46449a09e76d4ed1d0ea2db5": "1fb42e4c1c5d163638ee2f3b9c8d5ff8",
".git/objects/2a/6a4af7503318cbb7df5c50f6b45c162a4de289": "d9e467d003b347af83b2598e22eb8a8d",
".git/objects/2a/c614c6bc5750e741c22d6808f5ef2524c6bd83": "ce31eb5c65150ccdacb37b976fc40242",
".git/objects/43/9f4fc541ab83aa1cd6f7ca73f33d6891d29eb3": "842986bceda8ce4ec48838315af64e60",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/9445cd8222fe45de8e9ae70a421c30f8a5d1b9": "0ae86bc9210785d6442336a677af22d1",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/1e1fcd9dfd10e1f7d1d1297accf72ee5f6a677": "0ecc3bf8715395ab9b1abc5f59fbeebe",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/36/ffceebe421e4255b8d6ff3fac870e82fb31ec8": "d258d0425b1529c20061734ee32ea450",
".git/objects/5c/64cfa980b1b81a0ea53900f0e91aedbd121d75": "1aa1d94f985903f4acaa460782fa8ad3",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/31/dc1480f535d0e23e1194c73ea76f6109eb68e0": "3aa80505ab5fed5e8ab6770f4adc1188",
".git/objects/65/1c3c964ba7be1c129c2ec884dc200281f363f9": "5663bff8d20af0b5a324797657c73519",
".git/objects/96/25e045fc3b75e59ca4caebe0abdd721f2051d6": "5e064c9f7b5fdcef881d0696514e8144",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/117de0cba70de61605dce04655dca812a135ff": "0b58e1d6b2227914cd3673dcc051b2e9",
".git/objects/98/241860e08da2d721f71937b7e86e40b5484df1": "286ca4253214ac3f38cf891e9707249b",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/3f/32308123e1e07296da18ca0e42b1c32cc0bb90": "029f8ee6f6c9120f9afc3ad8b3c3a3cb",
".git/objects/3f/277997ca4c60abe07b1613fd6f1f24a21b3be8": "85a4cc61b705afc18ad647ffb9f7a69c",
".git/objects/37/54694697ebbc0b4527ca8b9a5ad3da23f884c5": "1b51f61b7731cf309a3aa8684abfedaa",
".git/objects/08/c55b71682a55fe31682c2927d5f0aca7048dfd": "8f7fa4e97555433b60bae55ec9a57a4e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/01/cb913eabd35a16aeb641812f0187ea0af01ca0": "639a3e68589d3e7c7899d15ae5c91cb9",
".git/objects/06/a234ffccf297bb9520a7ae2b0aab7cb41e560a": "db5db5e982df219d559ea4487ed1c51f",
".git/objects/99/0361f9eda660473c61a6e4251a7d788f3dc133": "c8ce228199e61c3cf200d1e0fe7e83e5",
".git/objects/99/94067b6d03a4191ce06bc1d18f8396ee7fbb1e": "4039aa4548b34c897af84b8ffd15887a",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/52/c79ec798af259756114cb9305741dfb9d13926": "3cf8517749ef90e73b162688207cd376",
".git/objects/55/70937e7af03ba160f03904f308cc2d76055465": "e1dce00e91655c08490508eedab42618",
".git/objects/97/4ba99b50f5065c83bf7333724578c68c4a92ee": "b628ab559aa7b36e0b69f874cab958ea",
".git/objects/0a/8f0f6496af5559ebbba968c1c25c69ac88b179": "edc569a9d23535a5d3d9460fd64b44b6",
".git/objects/64/ef9acd6b9e4214985f3b305653b735fe8c2fb8": "5d3e50fd95a83dbd05a3cd99a32e631b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/81fbaa8c269acf23ff04f06c8a3cb90acc5a93": "09e7d501a1775bcd72b656bc19004c16",
".git/objects/bf/20dd9080e70db581d1ab8d482c9ff5a11e27f0": "a98dc8740931affd82f258a892978450",
".git/objects/bf/d6d79c0716b8c65bc0004de9c0158a3df9adc8": "94471ccd47485992544b527f235fd833",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/5031fefc13f3eb08bfc9fee8265acf5ed903cb": "34f3155a9317e689745e86de447d624f",
".git/objects/d4/30b8ec4c34a994b736319fc4ee5a5440d2a0d5": "5850d9e03c2996b9c297ca473530b4c3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/5e713afc06688933be3d8cad7c0e5813f4137d": "09c96dbd300d8faf65fee0a338ad2a5d",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/25ea11e053bbe38e58f62b038ff15bdbaac287": "e8d4b5f8d3c55b6f5f205e47ab06f0f4",
".git/objects/a9/8c7e1bc0e54a57e2df5bcc797481c70b31066a": "0afee097270210f9242bd11ea4d4126f",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/86f9c140932b32ebe26ab2aa0c3e44390847cb": "78347d3b1bbfb5f0918e5a0b16c19149",
".git/objects/aa/1b8bdb5c273d0632877a1931f542360fe6bf1a": "ecadb1de8a49f963fc82dfecf97bff5d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ea1550d80c13370a0bf0b0249a5762b793cea6": "ba236f5d2673e4c5c8e9e3780e21ce13",
".git/objects/db/94d7cb9b8ea6fdcf9e09286b2bf3ae1abfdda5": "e2a026e39751b576c427ed7c1c8e8b8a",
".git/objects/a8/47943578db51352030df64d5b4a16affee1291": "fb37abda00a293cdbed9bacf8401c4b6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/579e6cac47864666d0a99f35b02b4e183f350f": "4c7ca6f0f5f142236ebc3a43f86084ac",
".git/objects/a1/7fad536c1a2e1a1f87cf0c5eef80fe2c6dc5ae": "0ed07e1144be94c7ba7f413e97804db8",
".git/objects/a1/a5cd27a667e92b738b7329be526e6b8e011189": "1d83988a7bab52d7d282f4c13991e55d",
".git/objects/ef/4eecad0ed1f03c8873c221feecfd05fd2de759": "7500b8bc7a1431ced822bd0fd2e1edff",
".git/objects/ef/842b847a41e8b4ca6509c7fb9abc8c02d57cc3": "be26d2c941e5558e3fb3d4f22fabae56",
".git/objects/c3/290fe02ee0d8487d07735b8e09a0187c95f3fa": "c49e83b8413434c36cbb443eafdb307d",
".git/objects/ea/66bc3246de07d94c75f691bf5bef140e54cfdb": "36602405d8d26866888f0b0819b26b41",
".git/objects/ea/8da2dcf34da30813fc4b437f788179d6ed2cfa": "636063b6c5ff0a86e27d5b8056c5fa44",
".git/objects/ea/ce28a2bdea4fba56d918afe1cd95dccca54332": "93fe4102fc8914e194a9d43d75732cf7",
".git/objects/e1/4ed9be3e69dca787765332adff025c77f1b1d1": "715c454a4040dfe630d5ed8879ec79b6",
".git/objects/cc/f73819727730949d5fa65fe43061e113e82de0": "96f24f05d27553c2128b16e2ee282773",
".git/objects/f9/11dfaf608131cb9001145b4f3880940e34e751": "7e32a5990557cdc8e098e8747d6d1a7b",
".git/objects/f9/0d622a6039f9825190b80453a792ac92821706": "77fff670229926696b8ded6f26a088da",
".git/objects/f7/67a7293f3b40dbac9cd3cc4ba98f8a5ba7f6d6": "56706aeadb4b87539972d8919b2ec8c1",
".git/objects/c2/a07f7d9572128b425d2ade10a6c24e91f9c264": "674037a065fa5e5382bef8c2df95c867",
".git/objects/c2/05761201c6ea1484e1a433aedf6996cebcb208": "2ba2ae60a263721a32791e6505f623e5",
".git/objects/c2/98158075fe5e92ed3534e4c2eba0a80f30c67f": "56be9695965868b46838a79504985175",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/f8/f891a86801aa567dc8bbecda55549e863e08c5": "c4208c86061b8ddb4976a5b8876a7d42",
".git/objects/e0/637f02e0b6b8eba8cba4da52fb2464a0847023": "a4e603640c47d56dee449c2e566f06de",
".git/objects/46/faf2abd276ce56ea30c140060e6b5ae43eeaa3": "eead59ab99e6112f3c5c207ad05ded7b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/3196551832b0a1236a980b51417dad9e20ce33": "fb27b90bb7013158cffa84c09faa99b5",
".git/objects/2c/814273cd7d3bf6f484ed641c2cb6880077e4b6": "8a14c1b2b43f1a573a0df78cd6a935bc",
".git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
".git/objects/77/52c11bc16564fd3680f8f2764f59c81f45f8ea": "c61bea939814c9b3be78cc9cef4d9ec6",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/e7e57daf5ea1b5e169d66080c6cf1b730f6689": "8ab253ffe485af9684dac5b6a9a1862f",
".git/objects/23/99dedd2d8c0fc80d71b5d06ce85f69601ac4a3": "20a7c47eb598490ae6298a414416e667",
".git/objects/8d/8fa482566bf96dc5befec2016e6652af3222e0": "b05272bead7aa80006a4825639cb38d0",
".git/objects/12/a86a176579451be48cb071f4843a40b698869c": "f95d5dbd37d286e7bd965db0126e87ff",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/2b/e10d6a473137c3dd4a5d4e8facafaa0f524ed0": "0cd85ca95356410098da1760cd6f9a7e",
".git/objects/47/bdd524b048b8e778472aaf798fdd66f0f78dd1": "549950bde591cba1b83b86ca2ee57ae8",
".git/objects/7f/e6d537e007ba767890603365029de046192ea1": "833e4d3d7dcf6776b30a2cf7b6ee4e17",
".git/objects/7f/5a9dcaea8b798513749cc781e7a84c9d812842": "f58c49f9727b2d53bbbce566a362729e",
".git/objects/14/4203d76256b097dc5d2e8515d462d3d88104a7": "2788586cfe7d491ee5fbd535246785b5",
".git/objects/8e/0aa804269360159cc694d3da95bff36f96986b": "940502fce04548cf2ade5c4c9c4c274f",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "09e07d661b7ae9b605434317959dc207",
".git/logs/refs/heads/main": "c64d85342a081792d83e7a902e649f33",
".git/logs/refs/remotes/origin/main": "eeaaa6645a92a9f5ad019e6eac769df5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "01afebf0ccc5741627d6e51d584c8879",
".git/refs/remotes/origin/main": "01afebf0ccc5741627d6e51d584c8879",
".git/index": "326627add001150825e06596edafd0a7",
".git/COMMIT_EDITMSG": "bae650b96993a09a3881210c180f5bb0",
".git/FETCH_HEAD": "3dc88ea64026a47f56603f92b6128fde",
"assets/AssetManifest.json": "8364b6f751ade23f86e58766706a53ad",
"assets/NOTICES": "69a26d81cd96f7edc89886cd7d0cfe28",
"assets/FontManifest.json": "e9732600de3ddd6fb2657ac5caf3cbaa",
"assets/AssetManifest.bin.json": "032ab65cc4ec690716632dea5669130e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4de9f91a1b4fa7fff7a6f4ec17a343ff",
"assets/fonts/MaterialIcons-Regular.otf": "1b99b90300cfc49fb7d7a2d489dcfc12",
"assets/assets/images/dev.png": "7da9c917427d9273a5f24b7d47cc5c6a",
"assets/assets/icons/light/skill-icons--kotlin-light.png": "f77ec8a2d11363bdcc05f0bb075f7ae8",
"assets/assets/icons/light/skill-icons--java-light.png": "956deb14804a039288dd3cb09232f324",
"assets/assets/icons/light/skill-icons--github-light.png": "321ec1c0761340276d1d31fd3ad75632",
"assets/assets/icons/light/skill-icons--dart-light.png": "04d016ec0b8a95e5a93454bb89eedcc6",
"assets/assets/icons/light/skill-icons--c-light.png": "91fe3a26826998a49e912534975e51d0",
"assets/assets/icons/light/skill-icons--premiere-light.png": "36ddca75416ca072b14b12615819c409",
"assets/assets/icons/light/skill-icons--vscode-light.png": "9e94b98b84394c20995dc1f6fb8900d8",
"assets/assets/icons/light/skill-icons--flask-light.png": "1f488b417cd0cda98e67472afcb652d9",
"assets/assets/icons/light/skill-icons--aftereffects-light.png": "83ab83cfb4f519bee110ed6b82443b31",
"assets/assets/icons/light/skill-icons--tensorflow-light.png": "a28915f3edc509f8fd244e1b95ee5ed1",
"assets/assets/icons/light/skill-icons--figma-light.png": "1a9afcb2300f4f7ec15967a04e578145",
"assets/assets/icons/light/skill-icons--python-light.png": "796fe2c9c6315a6fcc750ad170da5c6e",
"assets/assets/icons/light/skill-icons--instagram-light.png": "c1bd9071b9645d245b50f364be2174c9",
"assets/assets/icons/light/skill-icons--flutter-light.png": "23414926655bd6469c99fda3447d53f0",
"assets/assets/icons/light/skill-icons--androidstudio-light.png": "ebe7578575bf964d68cc742ce73769f8",
"assets/assets/icons/light/skill-icons--mongodb-light.png": "9eed4eabaae86ad10f4af360dfa03d1e",
"assets/assets/icons/light/skill-icons--discord-light.png": "b2afa634543da8f7228cc9b0848dcb89",
"assets/assets/icons/light/skill-icons--linkedin-light.png": "2d15f7e96a366d44ce7d8ad44a4bdd4b",
"assets/assets/icons/dark/skill-icons--java-dark.png": "840b417346a26f9435d210d5f14b71bf",
"assets/assets/icons/dark/skill-icons--flutter-dark.png": "1989d78aecc66757e6c6061a6b80b5dd",
"assets/assets/icons/dark/skill-icons--androidstudio-dark.png": "45aa446e345c7f16fbc85bdcf87756ef",
"assets/assets/icons/dark/skill-icons--mongodb-dark.png": "9eed4eabaae86ad10f4af360dfa03d1e",
"assets/assets/icons/dark/skill-icons--python-dark.png": "8c23e14ee6c9df43601a8e406a6ef93c",
"assets/assets/icons/dark/skill-icons--discord-dark.png": "b2afa634543da8f7228cc9b0848dcb89",
"assets/assets/icons/dark/skill-icons--premiere-dark.png": "36ddca75416ca072b14b12615819c409",
"assets/assets/icons/dark/skill-icons--flask-dark.png": "c25a5db70c2b107906b5528821c68cb8",
"assets/assets/icons/dark/skill-icons--tensorflow-dark.png": "ff93a8ffd10f7570841cfde62264b89e",
"assets/assets/icons/dark/skill-icons--kotlin-dark.png": "71a63f3dfe269a3810fd49beeb586b72",
"assets/assets/icons/dark/skill-icons--dart-dark.png": "917a0fdfde2f87f18df42e3edec0fe48",
"assets/assets/icons/dark/skill-icons--linkedin-dark.png": "2d15f7e96a366d44ce7d8ad44a4bdd4b",
"assets/assets/icons/dark/skill-icons--instagram-dark.png": "c1bd9071b9645d245b50f364be2174c9",
"assets/assets/icons/dark/skill-icons--vscode-dark.png": "b31d846aacdcee69d29f95d4e5103140",
"assets/assets/icons/dark/skill-icons--github-dark.png": "17b25751291ea1602a4eb728949f0643",
"assets/assets/icons/dark/spark-ar.png": "e7bb6d7d5bcebcb81eba39369e1f9083",
"assets/assets/icons/dark/skill-icons--c-dark.png": "91fe3a26826998a49e912534975e51d0",
"assets/assets/icons/dark/skill-icons--aftereffects-dark.png": "83ab83cfb4f519bee110ed6b82443b31",
"assets/assets/icons/dark/skill-icons--figma-dark.png": "c4dcb9385c6cbd4cdc7b18449049f397",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
