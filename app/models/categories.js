module.exports =
[
{"id": "gen0", "slug": "_general", "cls":"", "text": "General", "menucol": 1, "noselect": true},
{"id": "gen1", "slug": "general", "cls":"misc", "text": "General Utility", "parent": "gen0"},
{"id": "gen7", "slug": "achievements", "cls":"questing", "text": "Achievements", "parent": "gen0"},
{"id": "gen2", "slug": "questing", "cls":"questing", "text": "Questing", "parent": "gen0"},
{"id": "gen6", "slug": "non-combat", "cls":"noncombat", "text": "Non-Combat", "parent": "gen0"},

{"id": "role0", "slug": "roles", "cls":"", "text": "Group Roles", "menucol": 1, "noselect": true},
{"id": "role4", "slug": "roles/raid-lead", "cls":"role-leader", "text": "Raid Leading", "parent": "role0"},
{"id": "role1", "slug": "roles/damage", "cls":"role-dps", "text": "Damage Dealing", "parent": "role0"},
{"id": "role2", "slug": "roles/healing", "cls":"role-heal", "text": "Healing", "parent": "role0"},
{"id": "role3", "slug": "roles/tanking", "cls":"role-tank", "text": "Tanking", "parent": "role0"},

{"id": "prof0", "slug": "professions", "cls":"prof", "text": "Professions", "menucol": 1, "noselect": true},
{"id": "prof1", "slug": "professions/gathering", "cls":"prof", "text": "Gathering", "parent": "prof0"},
{"id": "prof2", "slug": "professions/gathering/herbalism", "cls":"prof prof-herb", "text": "Herbalism", "parent": "prof1"},
{"id": "prof3", "slug": "professions/gathering/mining", "cls":"prof prof-herb", "text": "Mining", "parent": "prof1"},
{"id": "prof4", "slug": "professions/gathering/skinning", "cls":"prof prof-herb", "text": "Skinning", "parent": "prof1"},
{"id": "prof5", "slug": "professions/crafting", "cls":"prof", "text": "Crafting", "parent": "prof0"},
{"id": "prof6", "slug": "professions/crafting/alchemy", "cls":"prof prof-alch", "text": "Alchemy", "parent": "prof5"},
{"id": "prof7", "slug": "professions/crafting/blacksmithing", "cls":"prof prof-blacksmith", "text": "Blacksmithing", "parent": "prof5"},
{"id": "prof8", "slug": "professions/crafting/enchanting", "cls":"prof prof-enchanting", "text": "Enchanting", "parent": "prof5"},
{"id": "prof9", "slug": "professions/crafting/engineering", "cls":"prof prof-engineering", "text": "Engineering", "parent": "prof5"},
{"id": "prof10", "slug": "professions/crafting/inscription", "cls":"prof prof-inscription", "text": "Inscription", "parent": "prof5"},
{"id": "prof11", "slug": "professions/crafting/jewelcrafting", "cls":"prof prof-jewelcrafting", "text": "Jewelcrafting", "parent": "prof5"},
{"id": "prof12", "slug": "professions/crafting/leatherworking", "cls":"prof prof-leatherworking", "text": "Leatherworking", "parent": "prof5"},
{"id": "prof13", "slug": "professions/crafting/tailoring", "cls":"prof prof-tailoring", "text": "Tailoring", "parent": "prof5"},
{"id": "prof14", "slug": "professions/secondary", "cls":"prof", "text": "Secondary", "parent": "prof0"},
{"id": "prof15", "slug": "professions/secondary/archeology", "cls":"prof prof-archeology", "text": "Archeology", "parent": "prof14"},
{"id": "prof16", "slug": "professions/secondary/cooking", "cls":"prof prof-cooking", "text": "Cooking", "parent": "prof14"},
{"id": "prof17", "slug": "professions/secondary/first-aid", "cls":"prof prof-firstaid", "text": "First Aid", "parent": "prof14"},
{"id": "prof18", "slug": "professions/secondary/fishing", "cls":"prof prof-fishing", "text": "Fishing", "parent": "prof14"},

{"id": "cl0", "slug": "classes", "cls":"", "text": "Classes", "menucol": 2, "noselect": true},
{"id": "cl6", "slug": "classes/death-knight", "cls":"cl-deathknight", "text": "Death Knight", "parent": "cl0"},
{"id": "cl6-1", "slug": "classes/death-knight/blood", "cls":"cl-deathknight cl-deathknight-blood", "text": "Blood Death Knight", "parent": "cl6"},
{"id": "cl6-2", "slug": "classes/death-knight/frost", "cls":"cl-deathknight cl-deathknight-frost", "text": "Frost Death Knight", "parent": "cl6"},
{"id": "cl6-3", "slug": "classes/death-knight/unholy", "cls":"cl-deathknight cl-deathknight-unholy", "text": "Unholy Death Knight", "parent": "cl6"},
{"id": "cl12", "slug": "classes/demon-hunter", "cls":"cl-demonhunter", "text": "Demon Hunter", "parent": "cl0"},
{"id": "cl12-1", "slug": "classes/demon-hunter/havoc", "cls":"cl-demonhunter cl-demonhunter-havoc", "text": "Havoc Demon Hunter", "parent": "cl12"},
{"id": "cl12-2", "slug": "classes/demon-hunter/vengeance", "cls":"cl-demonhunter cl-demonhunter-vengeance", "text": "Vengeance Demon Hunter", "parent": "cl12"},
{"id": "cl11", "slug": "classes/druid", "cls":"cl-druid", "text": "Druid", "parent": "cl0"},
{"id": "cl11-1", "slug": "classes/druid/balance", "cls":"cl-druid cl-druid-balance", "text": "Balance Druid", "parent": "cl11"},
{"id": "cl11-2", "slug": "classes/druid/feral", "cls":"cl-druid cl-druid-feral", "text": "Feral Druid", "parent": "cl11"},
{"id": "cl11-3", "slug": "classes/druid/guardian", "cls":"cl-druid cl-druid-guardian", "text": "Guardian Druid", "parent": "cl11"},
{"id": "cl11-4", "slug": "classes/druid/restoration", "cls":"cl-druid cl-druid-restoration", "text": "Restoration Druid", "parent": "cl11"},
{"id": "cl3", "slug": "classes/hunter", "cls":"cl-hunter", "text": "Hunter", "parent": "cl0"},
{"id": "cl3-1", "slug": "classes/hunter/beast-mastery", "cls":"cl-hunter cl-hunter-beastmastery", "text": "Beast Mastery Hunter", "parent": "cl3"},
{"id": "cl3-2", "slug": "classes/hunter/marksmanship", "cls":"cl-hunter cl-hunter-marksmanship", "text": "Marksmanship Hunter", "parent": "cl3"},
{"id": "cl3-3", "slug": "classes/hunter/survival", "cls":"cl-hunter cl-hunter-survival", "text": "Survival Hunter", "parent": "cl3"},
{"id": "cl8", "slug": "classes/mage", "cls":"cl-mage", "text": "Mage", "parent": "cl0"},
{"id": "cl8-1", "slug": "classes/mage/arcane", "cls":"cl-mage cl-mage-arcane", "text": "Arcane Mage", "parent": "cl8"},
{"id": "cl8-2", "slug": "classes/mage/fire", "cls":"cl-mage cl-mage-fire", "text": "Fire Mage", "parent": "cl8"},
{"id": "cl8-3", "slug": "classes/mage/frost", "cls":"cl-mage cl-mage-frost", "text": "Frost Mage", "parent": "cl8"},
{"id": "cl10", "slug": "classes/monk", "cls":"cl-monk", "text": "Monk", "parent": "cl0"},
{"id": "cl10-1", "slug": "classes/monk/brewmaster", "cls":"cl-monk cl-monk-brewmaster", "text": "Brewmaster Monk", "parent": "cl10"},
{"id": "cl10-2", "slug": "classes/monk/mistweaver", "cls":"cl-monk cl-monk-mistweaver", "text": "Mistweaver Monk", "parent": "cl10"},
{"id": "cl10-3", "slug": "classes/monk/windwalker", "cls":"cl-monk cl-monk-windwalker", "text": "Windwalker Monk", "parent": "cl10"},
{"id": "cl2", "slug": "classes/paladin", "cls":"cl-paladin", "text": "Paladin", "parent": "cl0"},
{"id": "cl2-1", "slug": "classes/paladin/holy", "cls":"cl-paladin cl-paladin-holy", "text": "Holy Paladin", "parent": "cl2"},
{"id": "cl2-2", "slug": "classes/paladin/protection", "cls":"cl-paladin cl-paladin-protection", "text": "Protection Paladin", "parent": "cl2"},
{"id": "cl2-3", "slug": "classes/paladin/retribution", "cls":"cl-paladin cl-paladin-retribution", "text": "Retribution Paladin", "parent": "cl2"},
{"id": "cl5", "slug": "classes/priest", "cls":"cl-priest", "text": "Priest", "parent": "cl0"},
{"id": "cl5-1", "slug": "classes/priest/discipline", "cls":"cl-priest cl-priest-discipline", "text": "Discipline Priest", "parent": "cl5"},
{"id": "cl5-2", "slug": "classes/priest/holy", "cls":"cl-priest cl-priest-holy", "text": "Holy Priest", "parent": "cl5"},
{"id": "cl5-3", "slug": "classes/priest/shadow", "cls":"cl-priest cl-priest-shadow", "text": "Shadow Priest", "parent": "cl5"},
{"id": "cl4", "slug": "classes/rogue", "cls":"cl-rogue", "text": "Rogue", "parent": "cl0"},
{"id": "cl4-1", "slug": "classes/rogue/assassination", "cls":"cl-rogue cl-rogue-assassination", "text": "Assassination Rogue", "parent": "cl4"},
{"id": "cl4-2", "slug": "classes/rogue/outlaw", "cls":"cl-rogue cl-rogue-outlaw", "text": "Outlaw Rogue", "parent": "cl4"},
{"id": "cl4-3", "slug": "classes/rogue/subtlety", "cls":"cl-rogue cl-rogue-subtlety", "text": "Subtlety Rogue", "parent": "cl4"},
{"id": "cl7", "slug": "classes/shaman", "cls":"cl-shaman", "text": "Shaman", "parent": "cl0"},
{"id": "cl7-1", "slug": "classes/shaman/elemental", "cls":"cl-shaman cl-shaman-elemental", "text": "Elemental Shaman", "parent": "cl7"},
{"id": "cl7-2", "slug": "classes/shaman/enhancement", "cls":"cl-shaman cl-shaman-enhancement", "text": "Enhancement Shaman", "parent": "cl7"},
{"id": "cl7-3", "slug": "classes/shaman/restoration", "cls":"cl-shaman cl-shaman-restoration", "text": "Restoration Shaman", "parent": "cl7"},
{"id": "cl9", "slug": "classes/warlock", "cls":"cl-warlock", "text": "Warlock", "parent": "cl0"},
{"id": "cl9-1", "slug": "classes/warlock/affliction", "cls":"cl-warlock cl-warlock-affliction", "text": "Affliction Warlock", "parent": "cl9"},
{"id": "cl9-2", "slug": "classes/warlock/demonology", "cls":"cl-warlock cl-warlock-demonology", "text": "Demonology Warlock", "parent": "cl9"},
{"id": "cl9-3", "slug": "classes/warlock/destruction", "cls":"cl-warlock cl-warlock-destruction", "text": "Destruction Warlock", "parent": "cl9"},
{"id": "cl1", "slug": "classes/warrior", "cls":"cl-warrior", "text": "Warrior", "parent": "cl0"},
{"id": "cl1-1", "slug": "classes/warrior/arms", "cls":"cl-warrior cl-warrior-arms", "text": "Arms Warrior", "parent": "cl1"},
{"id": "cl1-2", "slug": "classes/warrior/fury", "cls":"cl-warrior cl-warrior-fury", "text": "Fury Warrior", "parent": "cl1"},
{"id": "cl1-3", "slug": "classes/warrior/protection", "cls":"cl-warrior cl-warrior-protection", "text": "Protection Warrior", "parent": "cl1"},

{"id": "pve", "slug": "pve", "cls":"", "text": "PvE", "menucol": 3, "noselect": true},
{"id": "raid0", "slug": "pve/utility", "cls":"raid", "text": "PvE Utility", "parent": "pve"},

{"id": "raiden", "slug": "pve/emerald-nightmare", "cls":"emeraldnightmare", "text": "The Emerald Nightmare", "parent": "pve"},
{"id": "raiden1", "slug": "pve/emerald-nightmare/nythendra", "cls":"emeraldnightmare", "text": "Nythendra", "parent": "raiden"},
{"id": "raiden2", "slug": "pve/emerald-nightmare/ilgynoth", "cls":"emeraldnightmare", "text": "Il'gynoth", "parent": "raiden"},                          
{"id": "raiden4", "slug": "pve/emerald-nightmare/elerethe-renferal", "cls":"emeraldnightmare", "text": "Elerethe Renferal", "parent": "raiden"},
{"id": "raiden5", "slug": "pve/emerald-nightmare/ursoc", "cls":"emeraldnightmare", "text": "Ursoc", "parent": "raiden"},
{"id": "raiden6", "slug": "pve/emerald-nightmare/dragons-of-nightmare", "cls":"emeraldnightmare", "text": "Dragons of Nightmare", "parent": "raiden"},
{"id": "raiden7", "slug": "pve/emerald-nightmare/cenarius", "cls":"emeraldnightmare", "text": "Cenarius", "parent": "raiden"},
{"id": "raiden8", "slug": "pve/emerald-nightmare/xavius", "cls":"emeraldnightmare", "text": "Xavius", "parent": "raiden"},

{"id": "raidnh", "slug": "pve/nighthold", "cls":"nighthold", "text": "The Nighthold", "parent": "pve"},
{"id": "raidnh1", "slug": "pve/nighthold/skorpyron", "cls":"nighthold", "text": "Skorpyron", "parent": "raidnh"},
{"id": "raidnh2", "slug": "pve/nighthold/chronomatic-anomaly", "cls":"nighthold", "text": "Chronomatic Anomaly", "parent": "raidnh"},
{"id": "raidnh3", "slug": "pve/nighthold/trilliax", "cls":"nighthold", "text": "Trilliax", "parent": "raidnh"},
{"id": "raidnh4", "slug": "pve/nighthold/spellblade-aluriel", "cls":"nighthold", "text": "Spellblade Aluriel", "parent": "raidnh"},
{"id": "raidnh5", "slug": "pve/nighthold/tichondrius", "cls":"nighthold", "text": "Tichondrius", "parent": "raidnh"},
{"id": "raidnh6", "slug": "pve/nighthold/krosus", "cls":"nighthold", "text": "Krosus", "parent": "raidnh"},
{"id": "raidnh7", "slug": "pve/nighthold/high-botanist-telarn", "cls":"nighthold", "text": "High Botanist Tel'arn", "parent": "raidnh"},
{"id": "raidnh8", "slug": "pve/nighthold/star-augur-etraeus", "cls":"nighthold", "text": "Star Augur Etraeus", "parent": "raidnh"},
{"id": "raidnh9", "slug": "pve/nighthold/grand-magistrix-elisande", "cls":"nighthold", "text": "Grand Magistrix Elisande", "parent": "raidnh"},
{"id": "raidnh10", "slug": "pve/nighthold/guldan", "cls":"nighthold", "text": "Gul'dan", "parent": "raidnh"},

{"id": "dungeon", "slug": "pve/dungeons", "cls":"dungeon", "text": "Dungeons", "parent": "pve"},
{"id": "dungeon3", "slug": "pve/dungeons/arcway", "cls":"dungeon", "text": "Arcway", "parent": "dungeon"},
{"id": "dungeon1", "slug": "pve/dungeons/assault-on-violet-hold", "cls":"dungeon", "text": "Assault on Violet Hold", "parent": "dungeon"},
{"id": "dungeon4", "slug": "pve/dungeons/blackrook-hold", "cls":"dungeon", "text": "Blackrook Hold", "parent": "dungeon"},
{"id": "dungeon2", "slug": "pve/dungeons/court-of-stars", "cls":"dungeon", "text": "Court of Stars", "parent": "dungeon"},
{"id": "dungeon5", "slug": "pve/dungeons/darkheart-thicket", "cls":"dungeon", "text": "Darkheart Thicket", "parent": "dungeon"},
{"id": "dungeon6", "slug": "pve/dungeons/eye-of-azshara", "cls":"dungeon", "text": "Eye of Azshara", "parent": "dungeon"},
{"id": "dungeon7", "slug": "pve/dungeons/halls-of-valor", "cls":"dungeon", "text": "Halls of Valor", "parent": "dungeon"},
{"id": "dungeon8", "slug": "pve/dungeons/maw-of-souls", "cls":"dungeon", "text": "Maw of Souls", "parent": "dungeon"},
{"id": "dungeon9", "slug": "pve/dungeons/neltharions-lair", "cls":"dungeon", "text": "Neltharion's Lair", "parent": "dungeon"},
{"id": "dungeon10", "slug": "pve/dungeons/vault-of-the-wardens", "cls":"dungeon", "text": "Vault of the Wardens", "parent": "dungeon"},

{"id": "oldraids", "slug": "pve/legacy", "cls":"", "text": "Legacy Content", "menucol": 5, "noselect": true, "parent": "pve"},
{"id": "raidhfc0", "slug": "pve/hellfire-citadel", "cls":"hellfirecitadel", "text": "Hellfire Citadel", "parent": "oldraids"},
{"id": "raidhfc1", "slug": "pve/hellfire-citadel/assault", "cls":"hellfirecitadel", "text": "Hellfire Assault", "parent": "raidhfc0"},
{"id": "raidhfc2", "slug": "pve/hellfire-citadel/iron-reaver", "cls":"hellfirecitadel", "text": "Iron Reaver", "parent": "raidhfc0"},
{"id": "raidhfc3", "slug": "pve/hellfire-citadel/kormrok", "cls":"hellfirecitadel", "text": "Kormrok", "parent": "raidhfc0"},
{"id": "raidhfc4", "slug": "pve/hellfire-citadel/kilrogg-deadeye", "cls":"hellfirecitadel", "text": "Kilrogg Deadeye", "parent": "raidhfc0"},
{"id": "raidhfc5", "slug": "pve/hellfire-citadel/high-council", "cls":"hellfirecitadel", "text": "Hellfire High Council", "parent": "raidhfc0"},
{"id": "raidhfc6", "slug": "pve/hellfire-citadel/gorefiend", "cls":"hellfirecitadel", "text": "Gorefiend", "parent": "raidhfc0"},
{"id": "raidhfc7", "slug": "pve/hellfire-citadel/shadow-lord-iskar", "cls":"hellfirecitadel", "text": "Shadow-Lord Iskar", "parent": "raidhfc0"},
{"id": "raidhfc8", "slug": "pve/hellfire-citadel/socrethar-the-eternal", "cls":"hellfirecitadel", "text": "Socrethar the Eternal", "parent": "raidhfc0"},
{"id": "raidhfc9", "slug": "pve/hellfire-citadel/tyrant-velhari", "cls":"hellfirecitadel", "text": "Tyrant Velhari", "parent": "raidhfc0"},
{"id": "raidhfc10", "slug": "pve/hellfire-citadel/fel-lord-zakuun", "cls":"hellfirecitadel", "text": "Fel Lord Zakuun", "parent": "raidhfc0"},
{"id": "raidhfc11", "slug": "pve/hellfire-citadel/xhulhorac", "cls":"hellfirecitadel", "text": "Xhul'horac", "parent": "raidhfc0"},
{"id": "raidhfc12", "slug": "pve/hellfire-citadel/mannoroth", "cls":"hellfirecitadel", "text": "Mannoroth", "parent": "raidhfc0"},
{"id": "raidhfc13", "slug": "pve/hellfire-citadel/archimonde", "cls":"hellfirecitadel", "text": "Archimonde", "parent": "raidhfc0"},

{"id": "pvp", "slug": "pvp", "cls":"pvp", "text": "PvP", "menucol": 4, "noselect": true},
{"id": "pvp0", "slug": "pvp/utility", "cls":"pvp", "text": "PvP Utility", "parent": "pvp"},

{"id": "arena", "slug": "pvp/arena", "cls":"pvp", "text": "Arena", "parent": "pvp"},
{"id": "arena1", "slug": "pvp/arena/blades-edge", "cls":"pvp", "text": "Blade's Edge Arena", "parent": "arena"},
{"id": "arena2", "slug": "pvp/arena/blackrook-hold", "cls":"pvp", "text": "Blackrook Hold", "parent": "arena"},
{"id": "arena3", "slug": "pvp/arena/dalaran", "cls":"pvp", "text": "Dalaran Arena", "parent": "arena"},
{"id": "arena4", "slug": "pvp/arena/nagrand", "cls":"pvp", "text": "Nagrand Arena", "parent": "arena"},
{"id": "arena5", "slug": "pvp/arena/ruins-of-lordaeron", "cls":"pvp", "text": "Ruins of Lordaeron", "parent": "arena"},
{"id": "arena6", "slug": "pvp/arena/tigers-peak", "cls":"pvp", "text": "The Tiger's Peak", "parent": "arena"},
{"id": "arena7", "slug": "pvp/arena/ring-of-valor", "cls":"pvp", "text": "The Ring of Valor", "parent": "arena"},
{"id": "arena8", "slug": "pvp/arena/tolviron", "cls":"pvp", "text": "Tol'viron Arena", "parent": "arena"},
{"id": "arena9", "slug": "pvp/arena/valsharah", "cls":"pvp", "text": "Val'sharah Arena", "parent": "arena"},

{"id": "bg", "slug": "pvp/battlegrounds", "cls":"pvp", "text": "Battlegrounds", "parent": "pvp"},
{"id": "bg1", "slug": "pvp/battlegrounds/alterac-valley", "cls":"pvp", "text": "Alterac Valley", "parent": "bg"},
{"id": "bg2", "slug": "pvp/battlegrounds/areathi-basin", "cls":"pvp", "text": "Arathi Basin", "parent": "bg"},
{"id": "bg3", "slug": "pvp/battlegrounds/deepwind-gorge", "cls":"pvp", "text": "Deepwind Gorge", "parent": "bg"},
{"id": "bg4", "slug": "pvp/battlegrounds/eye-of-the-storm", "cls":"pvp", "text": "Eye of the Storm", "parent": "bg"},
{"id": "bg5", "slug": "pvp/battlegrounds/isle-of-conquest", "cls":"pvp", "text": "Isle of Conquest", "parent": "bg"},
{"id": "bg6", "slug": "pvp/battlegrounds/silvershard-mines", "cls":"pvp", "text": "Silvershard Mines", "parent": "bg"},
{"id": "bg7", "slug": "pvp/battlegrounds/strand-of-the-ancients", "cls":"pvp", "text": "Strand of the Ancients", "parent": "bg"},
{"id": "bg8", "slug": "pvp/battlegrounds/temple-of-kotmogu", "cls":"pvp", "text": "Temple of Kotmogu", "parent": "bg"},
{"id": "bg9", "slug": "pvp/battlegrounds/battle-for-gilneas", "cls":"pvp", "text": "The Battle for Gilneas", "parent": "bg"},
{"id": "bg10", "slug": "pvp/battlegrounds/twin-peaks", "cls":"pvp", "text": "Twin Peaks", "parent": "bg"},
{"id": "bg11", "slug": "pvp/battlegrounds/warsong-gulch", "cls":"pvp", "text": "Warsong Gulch", "parent": "bg"},

{"id": "gen5", "slug": "development", "cls":"development", "text": "Development", "menucol": 5, "noselect": true},
{"id": "gen3", "slug": "development/testing", "cls":"development", "text": "Testing", "parent": "gen5"},
{"id": "gen4", "slug": "development/training", "cls":"development", "text": "WA Training", "parent": "gen5"},
//{"id": "beta0", "slug": "development/legion-beta", "cls":"development", "text": "Legion Beta", "parent": "gen5", "systemtag": true},

{"id": "snip0", "slug": "snippets", "cls":"development", "text": "Code Snippets", "parent": "gen5", "type": "snippet", "systemtag": true},
{"id": "snip1", "slug": "snippets/libraries", "cls":"development", "text": "Libraries", "parent": "snip0", "type": "snippet"},
{"id": "snip2", "slug": "snippets/tutorials", "cls":"development", "text": "Tutorials", "parent": "snip0", "type": "snippet"},


]