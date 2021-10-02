# v0.14.x - Starfinder

Hello World to Starfinder v0.14, where we introduce the latest improvements to the system. This update is primarily great for spellcasters and people making macros and custom things, but there are little things for everyone else as well.

## Actor Resources
The latest extension to our modifier system is the ability to give characters 'Actor Resources'. These Actor Resources are all-purpose numeric fields that you can use for macros and other automation purposes. An example is provided as 'Stellar Mode (Su)' in the 'Class Features' compendium, that lets you affect your character based on how attuned they are. Actor Resources are available for every actor, PCs, NPCs, Drones, Starships, and Vehicles.

You can use actor resources in modifiers and rolls like any actor value. Mouse over the Actor Resource for a tooltip showcasing the fields you can use in your formula.

### Special note for Solarian players
In addition to creating Actor Resources, we have removed the old system for tracking stellar mode attunement and replaced it with the new system. If you want to have a combat tracker element tracking your Stellar Mode, remove your old Stellar Mode feat, and drag the new Stellar Mode feat from the compendium.

## Spellcaster updates
One of the long time coming updates is to the spellcasting implementation. The old spell casting implementation was a very minorly adapted 5e system implementation, but Starfinder has different rules. These new rules have been reflected in the system now. Spellcasting classes now provide separate spells known, spells per day, and bonus spells per day calculations, and the spellbook will inform you which classes' spellslots are available or used. The spellbook will now also show which spells require concentration.

Additionally, it is now possible to downcast spells correctly, though keep in mind that automatic damage calculation adjustments do not work at this time, the spell's level is otherwise correctly adjusted. Casting a spell with a higher level spell slot no longer adjusts the spell's level up either.

Finally, spell level descriptions now support item description filtering based on spell level. You can use the [level_#] .. [/level_#] tags in descriptions to show text up to the level the spell is cast. You can use [level_#_only] .. [/level_#_only] to show text only when cast at that level.

Future work is planned, such as a more elegant way of having spells identify which class they belong to (or multiple, if you really insist on picking the same spell for your multiclassed caster), as well as proper damage scaling support.

## Full rest changes
Full rest has also received a little update. Partially because the new spells per day setup required it, and partly because it simply hadn't been set up for proper localization yet. The full rest chat card will now provide a more complete summary of recovered character stats and items.

## Bugfixes
* Renamed Apply Damage roll context menu items to be consistent with each other, and added a warning when no token is selected.
* Added a safety check around rolls to prevent character sheets from becoming inaccessible when a roll formula contains invalid terms.
* Added a safety check to prevent incorrect shield data from rendering character sheets inaccessible.
* Added a weapon property for the Nanocyte's Gear Array created weaponry.
* Removed modifier tab from the ammunition sheet, it wasn't implemented correctly and misleading in its existence.
* Removed max height constraint from item sheets, it is now possible to resize them vertically as much as you like.
* Fixed a small mistake with wielding bonus' calculation causing character sheets to break.
* Fixed bulk calculation for items contained by other items.
* Fixed hobgoblin speed, it was listed as able to run 3025 ft per round which is a little speedier than intended.
* Fixed missing capacity on starship weapons.
* Fixed NPC spellcasting always taking intelligence into account. (Thanks J-Dawe!)

## System Hooks
* Added a hook to alter rolls before rolling them.

# v0.13.1 - Starfinder

This is a small hotfix release that updates some missing localization keys that got missed in the last update.

# v0.13.0 - Starfinder

Hello everyone, here is the latest Starfinder system release. Coming to you with an overhauled damage type tracking system, updated chat cards to go along with it, and some small bugfixes, this update shouldn't cause too much problems with your game. Though, as always, make a backup before hitting that update button!

## New Features
### Damage Type Overhaul
The original damage type system relied on a hardcoded set of damage type combinations, now you can combine however you want. Perfect for that homebrewed Fire and Cold damage weapon!

**NOTE:** The damage type overhaul does introduce some breaking changes. The system should migrate all of your actors, items, and items on your actors. Be aware that this migration can take some time, depending on the number of things that need to be migrated in your world. Please be patient, but if you do have problems, please don't hesitate to jump into discord and ask for help.

### NPC Sheet Changes
The NPC sheet received some minor changes. Subtype is now listed in the header instead of aura, and aura has moved to the traits list. The default values for reach and space have now been set to 5 feet, as the majority of NPCs use these values. You can still change them, of course.

### New aliens
All aliens whose names start with G have been added to the alien archive compendium.

## Bugfixes
* NPCs no longer list weapons inside a container in their features tab.
* Fixed entering formulas into a skill's misc modifier breaking the actor sheet.
* Fixed the Apply Damage context menu not showing.

## System Hooks
* Added hook for actor resting.

# v0.12.0 - Starfinder

Here we are with the latest update to the Starfinder system. We have it packed with features and bugfixes. This is the first in a small series of updates that will close out our development cycle for FoundryVTT v0.8.x compatibility. After the next couple of releases, our attention will go towards ensuring we are FoundryVTT v0.9.x compatible.

## New Features
## Speed Tracking
Characters, Drones, and NPCs now have more granular speed support implemented into the game. You can now specify speeds for land, flying, swimming, burrowing, climbing, and other. There is support for modifiers for each of these, and the conditions have been updated to reflect it.

## Archetypes
LebombJames has filled up a compendium of Archetypes, so you no longer need to create these from scratch. Thanks LebombJames!

## Bugfixes
* Added references to various text elements inside compendium items, such as references to poison and disease rules.
* Added support for item automation, with the first implementation computing saving throw DCs.
* Added support for leveling up a character by dragging a class onto your sheet.
* Fixed an erroneous access to entity id in the crew update logic.
* Fixed capacity and usage not visible on newly created items.
* Fixed capacity test for ammunition.
* Fixed macro call to setCondition not checking the condition boxes on the character sheets.
* Fixed trick attack description.

## System Hooks
* Added hook for item reload.
* Added hook for item activation.

## Expanded Support for Module Developers
In an effort to make it easier for module developers to extend the system, I have added several things to the `game.sfrpg` namespace. Here is the list:
```js
game.sfrpg = {
        applications: {
            // Actor Sheets
            ActorSheetSFRPG,
            ActorSheetSFRPGCharacter,
            ActorSheetSFRPGDrone,
            ActorSheetSFRPGHazard,
            ActorSheetSFRPGNPC,
            ActorSheetSFRPGStarship,
            ActorSheetSFRPGVehicle,
            // Item Sheets
            ItemSheetSFRPG,
            // Misc
            ActorSheetFlags,
            ChoiceDialog,
            DroneRepairDialog,
            AddEditSkillDialog,
            InputDialog,
            ItemCollectionSheet,
            ItemDeletionDialog,
            SFRPGModifierApplication,
            ActorMovementConfig,
            NpcSkillToggleDialog,
            ShortRestDialog,
            SpellCastDialog,
            TraitSelectorSFRPG
        },
        config: SFRPG,
        dice: DiceSFRPG,
        documents: { ActorSFRPG, ItemSFRPG, CombatSFRPG },
        engine,
        entities: { ActorSFRPG, ItemSFRPG },
        generateUUID,
        migrateWorld,
        rollItemMacro,
        RPC,
        SFRPGEffectType,
        SFRPGModifier,
        SFRPGModifierType,        
        SFRPGModifierTypes
};
```

If any module developers have any questions on what these are and what they are used for, please reach out to us in the `#starfinder` channel on the officail FoundryVTT discord server.

# v0.11.4 - Starfinder

This is a bug fix release that corrects a couple of major issues that were discovered by the community. The recent changes to the Foundry VTT Roll API caused some unforeseen issues that weren't obvious when we initially updated the system for Foundry v0.8.x compatibility. 

## New Features
### Ammunition Tracking
Weapons now have a setting "Ammunition Type", which if set to anything other than None makes the weapon try to reload using the type of ammunition you selected. Various compendium items such as batteries, rounds, shells, etc. have been updated to have their ammunition type set so that the weapons can correctly reload this ammo.

### Additional Items
Steel_Wind has gone through all the missing equipment and created items for the compendium. Everything that was missing should now be there. Thanks Steel_Wind!

### Scrollbars on Filters
The compendium browsers had a list of filters on the side, these were sometimes outside the screen. Now you can scroll them, hurray!

## Bugfixes
* Fixes an issue that was preventing starship actions from working correctly when critical status was to display only on crits.
* Item container tokens should now be accessible to players again.
* Fixed duplicate items vanishing when removed from a container.
* Solarian attunment tracker broke during the update. It's been fixed.
* PC and NPC conditions should now toggle properly again.
* Optimized the tooltip system to hopefully not load 1,000,000 duplicates.
* Fixed the dreaded "Negative Dexterity Modifier" bug. Somewhat. Kind of. Maybe.

There is still an outstanding issue with the save DC calculations with feats and spell that hasn't been corrected yet. We had hoped to include a fix for that in this release, but the solution to the problem is not yet ready.

## System Hooks
The Starfinder system provides a couple of hooks that allow module and macro developers to react to events that happen in the game. There is documentation for the new `Hooks` that have been added to the system. See `system-hooks.md` for details.

# v0.11.3 - Starfinder

This is another in a round of updates to correct issues encountered with the latest version of foundry. 

* Modifiers couldn't be deleted, this has been corrected. Fixes #400 .
* Fixed some warnings that were occurring when creating starships.
* Fixed an issue that was causing starship AC to be incorrect.
* Fixed power and BP calculations
* Fixed some issues with conditions not applying or toggling the token effects properly.
* System migrations were triggering every time a world was loaded, which caused some weird effects. This has been corrected.
* Added a "1.5x Damage" option to the chat card context menu when trying to apply damage to a selected token.
* Localized the labels for the chat card context menu.
* Fixed issues with combat's hanging on the first round.

# v0.11.2 - Starfinder

This is a hotfix release to correct some issues that were not found during beta testing. 

* Fixes modifiers not working for feats, weapons, and a few other item types.
* Measured templates weren't working correctly.

## Note to Starfinder Contributors

I have updated some of the development dependencies, as well are removed a few unused ones. You'll need to run `npm install` when you pull in the current changes to the `development` branch.

# v0.11.1 - Starfinder

This release updates Starfinder to be compatible with the new stable branch for the Foundry VTT. Most of the updates are back-end changes to get the codebase working on Foundry v0.8.6, though there were a few typo corrections and one or two bug fixes.

* Updated some of the French translations.
* Updated the Burning fusion to be a level 4 item instead of level 2.
* The shaken condition was misspelled.
* Added a starship compendium to the system (Thanks to `@Steel_Wind#5114` for the work on this)

Even though this is a stable release, there is always the potential for data corruption when updating from one stable version to another, so _please_ make backups before updating! And, if you downloaded the beta version for starfinder, you'll need to manually install this version, because the manifest link will be different.

# v0.11.0 [Beta] - Starfinder

This is a beta version that updates Starfinder to be compatible with Foundry v0.8.x.

**Important**
You will have to install this update through the package browser using a manifest URL. 

* **Make a backup of your data!**
* Uninstall the current version of the system. Skip this if this is a fresh install of Foundry VTT v0.8.5
* Navigate to "Game Systems" in the Foundry setup screen, then click on the "Install System" button at the bottom of the menu.
* Paste `https://raw.githubusercontent.com/wildj79/foundryvtt-starfinder/v0.11.0/src/system.json` into the "Manifest URL" field at the bottom of the dialog.
* Click "Install"

There is not any new functionality beyond just updating the system to work with the newest major release of Foundry. Most things should be working, but we need fresh eyes on the system to make sure that is the case. There are a few known issues, but they shouldn't be game breaking:

1) The loot sheet's have some known issues. 
2) The Equipment browser isn't working quite the way I'd expect it to in Firefox. When selecting options on the left side of the dialog, it's not creating a vertical scroll bar. I'm not 100% sure if it's a browser issue or not.
3) The system will run a migration every time a world is loaded currently. We're still investigating this issue.

We are specifically looking for bug reports on this one. Feature requests are fine, but we are really trying to make sure the system is going to work with the latest version of Foundry. Please create an issue with any bugs you find.

# v0.10.0 - Starfinder

This is mostly a content update, with a few back end feature updates that won't have any impact on users, but will be useful for developers contributing to the system.

- Updates various compendium items to fix typos, or to correct stats
- Updated the source field on most items to be more in line with our preferred method of attributing items to what book they came from
- Added weapon accessories to the compendium
- Added some aliens from the Fly Free or Die AP
- Added planets to the compendiums
- Added feats from Fly Free or Die
- Added the Starfinder Society pre-filled iconic characters to the compendiums
- Added races from the alien character cards
- Added better validation to some of our back end scripts used in validating compendium `json` files
- Added some methods to our `gulpfile.js` to enable better support for docker.
- Added Brazilian Portuguese localization
- Fixed a bug where deleting crew members broke the starship sheets
- Added some verbiage to `CONTRIBUTING.md` to make it clear that you should remove any already installed version of the system before setting up a development environment.

I'd like to thank first time contributors for there contributions! There were a few things that I would have like to include in this release, but didn't include, one of those things being a conversion of all of the included images to `webp`. This will be the final release that supports the current stable version of Foundry (v0.7.9 at the time of this release), and I didn't want to introduce any potential bugs at this time. But, with v0.8.x of Foundry hitting in the fairly near future, we'll see if we can get those things included.

# v0.9.0 - Starfinder

This is a big release for the Starfinder system, predominantly focused on adding improvements to vehicles.

## Vehicle Sheet overhaul
After the completion of the Starship Sheets, the vehicle sheet now got its turn. 

First, vehicles now have systems, weapons, passengers (broken into pilot, complement & passengers) and hangar bays. Passengers function similarly to the way they work for Starships. Vehicles now also have Vehicle Systems which can be used to roll piloting checks (like Autopilot), or provide additional senses for passengers. It is also possible for vehicles to contain starship expansion bays, if they have expansion bay systems.

For combat, vehicles now list their primary skill for control (none, piloting, athletics or survival) and they now list their attack modifiers used when firing mounted weapons, or character weapons while a character is on top.

To top it all off, all vehicles from the CRB, the books, and the adventure paths, have been added to the compendium. So go forth, and have some epic vehicle chases!

## Compendium
* Added AA3 and AP playable races.
* Added AA4 gear, feats, and mechanic tricks.
* Added aliens from AA2, AA3, and AA4.
* Added all vehicles.
* Added items, feats, themes, spells, and aliens from Fly Free or Die #1 and #2.
* Added items from the Food and Drinks, Medicinals, Personal Items, and Trade Goods categories.
* Added Pact Worlds systems and deities to settings compendium.
* Added Pact Worlds equipment to equipment compendium.
* Added settlement rules to rules compendium.
* Fixed a lot of class features.
* Fixed CRB Weapons.
* Fixed CRB Armors.

## Sheets
* Added a new, optional, system setting to enable Galactic Trade, this will enable BPs as a currency on Starship Sheets, as well as raise the max spent BP limit by 5%.
* Added character full body image and vitals to actor sheets biography.
* Added environment and organization fields to NPC biography.
* Added level tooltip entries for class level reference, i.e. @classes.soldier.levels.
* Added short description to items that gets rolled into chat and displayed in the inventory tab fold-out.
* Added support for GM Notes to actor and item sheets.
* Added tooltip to an item's limited uses field.
* Added tooltips to the weapon properties.
* Changed the Spell item sheet header style to be a little more consistent with the rest of the items.
* Clicking the names of crew in starships will now open the appropriate actor sheet.
* Fixed items overwriting their save DC field.
* Fixed incorrect capacity check leaving Capacity and Usage fields blank on new weapons.

## Automations
* Activating a feat with a limited number of uses now decrements the uses remaining.
* Added the Weapon Property Attack Rolls modifier.
* Attempting to activate a feat with 0 uses remaining now displays a warning dialog.
* Enabled support for Ability Check modifiers to NPCs.
* Feats will no longer hide their limited uses counter when the value reaches 0.
* Fixed a bug where clicking 'Cast anyway' cleared the item's spell level.
* Fixed Armor penalty check breaking calculations when unequipping armor.
* Fixed Feats with limited uses not counting usage.
* Fixed Power Core critical Damage applying the wrong penalties to all actions.
* Fixed short and long rest not recharging feats with limited uses properly.

## Inventory
* Added equippable checkbox for items, so that you can now equip items of a different subtype than equipment.
* Fixed dragging items from the Item Directory onto other items not working.

## Other changes
* Added new damage type combinations.
* Added new weapon properties like One Handed, Two Handed, and Shatter.
* Fixed additional bonus from roll dialog not allowing operators at the start, including negative modifiers.
* Fixed additional bonus not showing up properly in the roll explanation popout.

## Localization
* Added Italian localization.
* Updated French localization.

# v0.8.2 - Starfinder

This is a small bugfix patch to address issues in the release of Starfinder v0.8.1.

## Changelist
### General Improvements
- Added a warning displayed when players attempt to pick up an item from a loot collection token but there is no GM logged in.
- Fixed dragging items from the compendium onto containers not properly going into the container.

### Starship Improvements:
- Fixed sensor bonus not applying to the scan action.
- Fixed starships not gaining AC from NPC crew's piloting bonus.
- Fixed starships not gaining TL from NPC crew's piloting bonus.
- Fixed TL incorrectly adding the frame's piloting modifier to the calculation.

### Compendium Improvements
- Fixed the Hidden Soldier Armor incorrectly having 10 upgrade slots where it should have only had 1.
- Fixed the Basic Shields 10 starship component's values for BP Cost, PCU usage, Shield, and Regeneration Rate.
- Fixed the typo in the names of the Launch Tubes and Pheromone System starship components.

# v0.8.1 - Starfinder

Welcome to the FoundryVTT Starfinder system v0.8.1! Another big update has come to the system, where we continue the Starship work that we started in the previous release, introduce the new Roll Explanation system, and many other changes.

## Main Features
### Starship Overhaul phase 2
In this release we bring you the next phase of the Starship overhaul. Now fully equipped with a fleshed out compendium and support for deflector shields, ablative armor, as well as other starship features brought by the Starship Operations Manual. It is now also easier to set up NPC crew for the GM, you no longer need to create NPC actors to fill up the crew roster, you can simply check NPC crew and fill in the skills directly. Future work on the starship sheets will include implementing support for modifiers.

### Roll Explanation
Additionally, we have implemented Roll Explanations. When you previously made a roll, you would see something like 1d20 + 5 + 6 + 2, but you would have to really search to figure out where these numbers were coming from. Now, when you expand the roll card, you will see a list of all the contributors to the roll, and if you hover your mouse over skills and abilities you will see the details of what builds up the number.

## Changelist
There are also numerous other improvements made to the system, so be sure to read the rest of the changelist for the details.

### General Improvements
- Implemented Roll Explanations to the various rolls made by the system. To view the roll explanation, simply click on the roll card and fold it open.
- Major performance improvements to the inventory management.
- Quick Roll is now prevented from triggering in situations where the user must make a selection, such as a gunnery check for a ship with multiple gunners.
- Weapon attack flavor text is now treated as a message sent by the attacking actor, including a chat bubble if this setting is enabled.
- Added a Contained Wealth label to container items if expanded in the inventory screen.
- Added a setting to toggle always displaying item quantity, even if it is 0 or 1.
- Added damage metadata to damage roll cards, so you can see whether it was a critical hit, what weapon properties apply, etc.
- Fixed a bug in the drag-and-drop handling that prevented item sorting to work properly.
- Fixed a bug that prevented damage rolls that include a d20 in the roll from working.
- Fixed a bug where a freshly dropped item was sometimes inaccessible to players until they refreshed their window.
- Fixed various scenarios where the Starfinder Custom Chat Cards did not function correctly.

### Character Improvements
- Improved support for shields, with correct AC and ACP calculations, including support for multiple shields.
- The @classes variable can now be accessed in all modifiers, not only chat rolls.
- Applying Massive Damage will now show a local notification informing you if your character dies.
- Fixed an issue where certain item types were not properly included in the wealth calculation.
- Fixed a bug where BAB could calculate incorrectly.

### NPC Improvements
- Drone features now go into the Features tab instead of the Inventory tab.

### Starship Improvements:
- Converted all of the Starship's systems into component items. They are is no longer hardcoded as a collection of drop-down boxes, instead, you configure your ship by dragging items onto the sheet, similar to creating characters and drones.
- Implemented damage rolls' "Apply Damage" context menu functionality for starships, it includes support for deflector shields, but does not yet handle vortex weapons 1d4 damage to deflector shield value, nor attacks that ignore some fraction of shields.
- Weapon headers now show when you mount a weapon that is of an unsupported size.
- Added speed and/or ammunition capacity to the following starship weapons: Tracking weapons, weapons with the Limited Fire, Mine, Transposition, Orbital, Rail, or Forcefield properties.
- Added build point calculation.
- Added critical damage integration.
- Added ECM Module and Melee Weapon to starship weapon types.
- Added Spinal mount to starship weapons and frames.
- Added support for SOM modules like deflector shields and ablative armor.
- Added support for easier NPC crew settings for GMs.
- Fixed Starship initiative rolls using piloting ranks instead of piloting modifier.

### Compendium Improvements
- Added all known starship components to the starship components compendium.
- Added starship component browser.
- Added Alien Archive 1, 2, and 3 entries K through M.
- Added Alien Archive 4 spells.
- Renamed "Infared Sensors" to "Infrared Sensors".
- Updated all spell entries in the spells compendium for correctness.

### Localization Improvements
- French localization has been updated.

# v0.7.1.4 - Starfinder

Just fixing the fix that fixed the other fix. Last time today, I swear 😄! 

# v0.7.1.3 - Starfinder

Hotfix to pull in missing `import` statement which was causing an issue for starship actions.

# v0.7.1.2 - Starfinder

This is another hotfix release for the v0.7.x branch of Starfinder.

## Changelist:
- Fixed an error preventing spell damage from rolling that was caused by having an operative weapon property damage modifier.
- Fixed several mistakes in the combat tracker's skipping of dead actors.
- Fixed roll mode in roll dialogs always displaying public roll, instead of the selected value in the chat box.
- No longer hiding the limited uses counter from spells when their count goes to 0. It now hides if there is no max value set.
- Weapon attack chat flavor now included in the attack roll chat card.
- (API) Introduced a `useStarshipAction()` to the actor object. It takes the item ID from the starship actions compendium.

# v0.7.1.1 - Starfinder

This is a hotfix release, to address some of the most jarring issues people encountered in the Starfinder v0.7.1 release.

## Fixes
- Added 4 more common attack roll modifiers.
- Disabled custom chat cards by default. You can re-enable them in the system settings dialogue if you really want them.
- Fixed rolls not working when using custom chat cards.
- Fixed vehicle notes not working.
- Piloting checks now use the full piloting modifier of the pilot, no longer just the ranks.
- Skills now ellipsis so they should no longer span multiple rows for particularly long professions.
- The explorer frame now has the correct amount of forward arc weapons.

# v0.7.1 - Starfinder

Welcome to Starfinder v0.7.1! This is a big release, with content gathered over a long period of time. There's features and fixes for everyone here, so sit down and enjoy reading through all the stuff that's new in this release!

## Main Features
### Contextual Roll system
In order to integrate all the various bonuses and effects that can affect your roll under specific conditions, we have implemented a new way of doing rolls. Now, when you attempt to make a roll that is affected by modifiers of the type Roll Formula, it will list all these modifiers so you can choose which ones apply to your roll. For example, Full Attack's -4 penalty on attack rolls, or Toughness' +4 to saving throws against heat, are now easily selected. Additionally, when you have situations in which multiple actors may be involved, such as starship rolls with their crew, the ship itself, etc. it is now possible to create rolls that reflect this information.

### Hazard Actors
GMs have been asking for a Hazard (trap) actor for a while now, and now it's here! It follows the suggested statblock settings from the CRB, play around with it and if you have any QOL requests for the Hazard actor, do let us know!

### Starship Upgrades have started
The starship sheet has been ignored for a long time, and with the introduction of the Starship Operations Manual requests for updating the starship sheet have started flowing in. This update does the first base steps at upgrading the starship sheet and start preparing it for the new systems introduced in the SOM, though it is not yet complete. Work on the starships will continue with future releases as always.

### Compendium updates
Spells and feats have been thoroughly looked at and updated where applicable. Modifiers have been set up and properties updated. Remember that you will have to manually update your spells and feats by dragging them anew from the Compendium onto your character sheets, as these are not automatically updated.

## Changelist
### General:
- Added Contextual Roll system, allowing you to include modifiers into your rolls.
- Added client-side setting for automatically opening the damage roll dialogue after making an attack roll.
- Added an item type for Weapon Accessories.
- Added toggling of containers.
- Critical damage rolls now correctly double the damage.
- Critical damage rolls now include additional damage effects in their output on the chat card.
- Deleting items inside containers no longer breaks the container's internal item count.
- Resolved those pesky 'attributes.dex.mod cannot be found' warnings.
- Solved several 'Could not find dex.mod' warnings.
- Some fonts have had their weights adjusted in places.

### Characters:
- Added a variable for Caster Level, accessible as @details.cl.value.
- Added automatic skill point counting on the player character sheet.
- Added label at the bottom of the skills sheet explaining how to configure skills.
- Added modifiers for skill points and skill ranks.
- Armor upgrade modifiers only work once the armor upgrade is attached to an equipped armor.
- Deprecated @attributes.bab in favor of the more complete @attributes.baseAttackBonus.value field.
- Feats can now be activated/deactivated, and will drop a line in chat to this state.
- Fusions and Weapon Upgrade modifiers only work once the fusion or weapon upgrade is attached to an equipped weapon. (Note, this will apply it regardless of which weapon you are attacking with, so multi-wielding players beware!)
- Players can now remove custom professions from their own character sheets.
- Reloading weapons will now drop a line in chat.
- The 'off-kilter', 'flat-footed', and 'off-target' condition checkboxes now correctly apply the appropriate condition.
- The skill rank variable was added to the skill tooltips, i.e. @skills.per.ranks.
- Theme is now automatically filled in when a theme is dropped onto the character sheet, and no theme is manually entered yet.

### Hazards:
- Added a new actor type called Hazard. This can be used for Traps.

### Items:
- Added new item types for Hybrid items and Magic items.
- Added support for modifiers to consumables, fusions, goods, hybrid items, magic items, technological items, and weapon upgrades.
- Added support for equipping/attuning/etc. to hybrid, magic, and technological items.
- Consumables can now also be the consumable type 'Food & Drink'.
- Renamed 'equipment' to 'armor', as is more correctly represents the data.
- Shields will now display their equipped status on their own sheet as well, similar to armors and weapons.

### NPCs:
- Added label at the bottom of the skills sheet explaining how to configure skills.

### Drones:
- Added label at the bottom of the skills sheet explaining how to configure skills.
- Now supports base attack bonus modifiers.

### Starships:
- AC and TL now take pilot's piloting ranks into account.
- Added item types for starship computers and starship frames.
- Added starship actions.
- Starships now have an inventory sheet, so it can function as a party inventory.
- Updated Crew to include all the starship roles.

### Compendium:
- Added default modifiers for Bypass, Visual Data Processor, Weapon Specialization (Mechanic), Weapon Focus, and Weapon Specialization.
- Alien Archive now has aliens for the letters N-R.
- Updated all the spells, including the new ones from Alien Archive 4. Re-drag them to your character sheet to update.
- Updated all the feats, they should now apply proper modifiers. Re-drag them to your character sheet to update.
- Updated priest, mercenary, and giantblood themes.

# v0.6.2.0 - Starfinder

This is a bugfix release for the Starfinder system. There were a few big bugs that were causing some breakage, so we've fix a few of the major ones that have been reported thus far.

- Fixed an issue where an annoying warning toast would pop up on the screen complaining about items missing a dexterity modifier.
- Fixed an issue where the attackBonus field on starship weapons wasn't being accounted for in the attack roll.
- Adjusted the new custom Combat class to allow for a "none" turn
- Fixed an issue where the ACP calculations were using the absolute value of modifiers.
- Created new chat card settings for the new combat tracker so that you can turn them on or off.
- Fixed an issue where adding the lowest or highest value was being calculated incorrectly.
- Tweaked the limited character sheet styling.
- Added code that should update a characters proficiencies from there class automatically.

# v0.6.1.0 - Starfinder

This is a hot fix release. There was an issue with class, theme, and race entries not outputting their chat cards when clicked on. This fixes that.

# v0.6.0.0 - Starfinder

This is mostly an update to bring the system into compatibility with the newest version of Foundry VTT, v0.7.5. There are a few bug fixes and new features, though:

- Added enhancements to the combat tracker. This allows for smoother starship combat! Please test this thoroughly and let us know how it's working out!
- A bunch of updates to put Starfinder back in line with the FoundryVTT API
- Fixed some issues with conditions not linking properly. There's still some known funkiness with conditions, so we'll be keeping an eye on these.
- More additions to the Alien Archive compendiums
- Added German translation
- Fix that wasn't allowing augmentations from adding in modifiers
- Localized the drop down items on the create Actor and create Item dialogs
- Added the `DiceSFRPG` class to the global `game.sfrpg` object. Module and macro developers can access this at `game.sfrpg.dice`
- Modified the `DiceSFRPG.d20Roll()` and `DiceSFRPG.damageRoll()` methods to return a `Promise` that resolves to a `Roll` object.
- The `DiceSFRPG` methods no longer require an `Event` object to be passed into them. This will make it easier for modules and macros to use these methods
- Added an Auto Fast-Forward setting to the systems configuration
- Removed the old traits from the Trait Selector. These have been replaced by the modifiers system.

**IMPORTANT** Due to breaking API changes made in the core Foundry VTT, this release breaks backwards compatibility. It *will* not function correctly on versions of Foundry less then v0.7.5. If you have sessions coming up in the next few days, it is *strongly* advised that you hold off on updating to both this version and to Foundry v0.7.5 until you have some time to do some testing. Though it appears that Starfinder is working fine with the new version, it is very possible that many modules will not. Be prepared to do some trouble shooting!

# v0.5.1.0 - Starfinder

This is a hotfix release to correct some issues with broken conditions.

# v0.5.0.0 - Starfinder

Sorry for taking so long to get this one out the door, but real life things got in the way 😄. This is another huge release, one that many have been waiting semi patiently for. Here is a quick rundown of what's included:

- Containers! Items can now be associated with other items. Useful for things like backpacks and *Null Space Chambers.* You can also use these to place things like weapon fusions on weapons and armor upgrades on armor.
- Added a "loot" type actor. This allows you to drop items on the map, and you're PC's can interact with them.
- Classes from Character Operations Manual added to the compendiums.
- Fixed a bug that locked character sheets if you dropped an item that they weren't allowed to carry onto them.
- Ability score now calculates theme and race ability mods
- Added ability check and ability check modifiers.
- Updates some of the Japanese translation strings.
- Fixed a bug where right clicking on a spell would duplicate it.
- Fixed a bug where you could delete a skill from a sheet and couldn't restore it.
- First batch of Aliens from the Alien Archives added to the compendiums.
- Added a field to classes that allows them to be flagged as a spell caster class.
- Fixes to some issues with items.
- Added an Item browser.
- Fix for roll formula's not working for skills.
- Added fields to items to track HP, hardness, and AC
- Changes to how the DC fields in items work.
- Added support for inline roll data to item descriptions when rolled to chat.
- Enabled reload button for NPC's
- Added support for adding items with a type selection screen.
- Bug fix for damage buttons in chat card not working when rolling from an actor sheet from the sidebar with no actor selected on the canvas.
- Fix for feats not supporting attack/damage buttons.
- Shields! Added shields as an item type
- Ability Score Increases are now handled with an item.

I'd like to thank everyone for there contributions for this round of updates (there wouldn't be much otherwise!). 

This will most likely be the last update for the current stable branch of Foundry (v0.6.6). After this release, we will switch our focus to bringing the Starfinder system inline with the current beta (v0.7.3). Because of how module and system releases are handled in foundry, the next couple of releases won't come through the normal update channels, so be watching discord to see when the next release of Starfinder comes out. Once the v0.7.x branch of Foundry hits stable, we will do a proper release at that time. Thanks for all of the support, it is appreciated!

# v0.4.1.0 - Starfinder

This is a huge release, with a lot of new added features and a ton of added and updated content for the compendiums.

- Added new Class Features compendium
- Fixed a bug adding modifiers to all intelligence based skills if you assigned a modifier to the intimidate skill because they both started with the letters "int".
- Overrode the core foundry measured templates for cones and sphere's to be more in line with the Starfinder rules set
- Updated the spells compendium
- Added a ton of new icons
- Fixed an issue where NPC's were adding in there ability bonus to weapon attacks
- The usage field for weapon capacity is now a drop down field with the allowed values
- Drone sheets now allow a way to configure if a module is free or not, so you can load free modules you get at drone creation without them taking up module slots
- Added a method that calculates total wealth based on carried items
- Added some error messages to the Drone sheet that tells you if you don't have a chassis installed
- Added auto calculation of Hit points based on race and class
- Added auto calculation of Stamina points based on class and constitution bonus
- Added auto calculation of Resolve points
- Added ability to add modifiers to base attack bonus
- Added ability to add roll formulas to modifiers
- Added ability to add modifiers to Attack rolls and damage
- Fixes Drone sheets not adding in AC correctly
- Updates to the race compendium
- Fixes an issue where the `rollMode` on the roll dialog boxes wasn't being honored
- Fix for an issue where the Maximum Dexterity modifier was being calculated correctly on a piece of armor that has a max dex of 0
- A few of the chat cards where not allowing the descriptive text to be collapsed, this has been fixed
- Added a bunch of localization strings
- Added a bunch of new weapons and armor to the equipment compendium
- Fix issue with the roll mode in dice dialogs not being honored
- Corrected a few weapons that had incorrect capacity and usage information
- Added a few fields to the NPC sheet for values like Aura, grafts, race, etc...
- Added space and reach as values in the data template
- Added a universal Creature Rules compendium for NPC's
- Added all theme's to the compendium

I'd like to thank everyone that has contributed to this release. What I thought was going to be a fairly mediocre release turned into a gargantuan one because of all the help we got from the community.

# v0.4.0.1 Beta - Starfinder

This is a beta snapshot of the current development branch. This release should be fairly stable, but there is a chance there are some game breaking bugs, so download and use at your own risk! 

This being a beta release, it will not appear in the foundry module browser, nor will you get a message in foundry that there is an update available. If you are adventurous and wouldn't mind helping us find some bugs, you can download the update from here:

`https://raw.githubusercontent.com/wildj79/foundryvtt-starfinder/v0.4.0.1/src/system.json`

There are a lot of juicy new things in here, so here is the change log:

- Added new Class Features compendium
- Fixed a bug adding modifiers to all intelligence based skills if you assigned a modifier to the intimidate skill because they both started with the letters "int".
- Overrode the core foundry measured templates for cones and sphere's to be more in line with the Starfinder rules set
- Updated the spells compendium
- Fixed an issue where NPC's were adding in there ability bonus to weapon attacks
- The usage field for weapon capacity is now a drop down field with the allowed values
- Drone sheets now allow a way to configure if a module is free or not, so you can load free modules you get at drone creation without them taking up module slots
- Added a method that calculates total wealth based on carried items
- Added some error messages to the Drone sheet that tells you if you don't have a chassis installed
- Added auto calculation of Hit points based on race and class
- Added auto calculation of Stamina points based on class and constitution bonus
- Added auto calculation of Resolve points
- Added ability to add modifiers to base attack bonus
- Added ability to add roll formulas to modifiers
- Added ability to add modifiers to Attack rolls and damage
- Fixes Drone sheets not adding in AC correctly
- Updates to the race compendium 
- Fixes an issue where the `rollMode` on the roll dialog boxes wasn't being honored
- Fix for an issue where the Maximum Dexterity modifier was being calculated correctly on a piece of armor that has a max dex of 0
- A few of the chat cards where not allowing the descriptive text to be collapsed, this has been fixed

Behind the scenese, @TimToxopeus has added a really cool feature that should help with content submissions greatly. It's still early days with this new system, but I'm confident that it will help make content submissions a much more smoother experience for both contributors and developers.

I'd like to thank @TimToxopeus for the tremendous amount of work he put into this release. I'd also like to thank @Juxtaposedwords, `@cmd`, and @decad7never for there content contributions this cycle. And, if I missed mentioning anyone, I apologize.

# v0.3.5 - Starfinder

Hotfix release to fix a copy paste error.

# v0.3.4 - Starfinder

This release adds a new setting, a new actor sheet type, and various bug fixes.

- Adds a world setting that can be used to disable the new custom chat cards.
- Adds several new translation strings
- Updated some development dependencies. Contributing developers, you might need to run `npm install`
- Adds a modifiers tab to items. Modifiers added to certain items will automatically transfer to a character.
- Adds a drone actor type and a new sheet for drones
- [Bugfix] Fixes an issue where the `attackBonus` field wasn't being used in dice rolls correctly
- Refactored the character sheet modifiers tab to remove unneeded subtabs. Any custom modifiers that you had in the "Misc" or "Item" tab will show up under the "Temporary" tab
- [Bugfix] The counter management system was throwing an error on world startup because combatants aren't completely setup when that class initializes
- Added a "Force" damage type to the damage type dropdown for weapons
- [Bugfix] The "capacity" issue with certain items that were miss configured should now be fixed
- Spell ranges have been normalized in the spells compendium pack
- Cleaned up the character sheet a little. Most of these changes will be unnoticable.
    - Equipment is now equip able from the character sheet; no need to edit the item to equip it

I'd like to thank `@Deepflame#0875`, `@Decad7never#6538`, and `@Juxtaposedwords#9985` for there contributions for this release.

# v0.4.0-alpha - Starfinder

This is an out of band release that should work with Foundry v0.7.0. You'll need to manually install this one.

# v0.3.3 - Starfinder

We've been given the green light by Paizo to use the community use policy, so this release mostly returns some things I had to remove in the last update. The *system* name will remain as `sfrpg`, and if you're coming from a version prior to v0.3.2, you'll need to adjust your `world.json` file and change the `system` field to `sfrpg`. But, the public facing name will return to "Starfinder", so that's what it will show up as in the module browser in foundry. Here are other hightlights for this update:

- Changed SFRPG back Starfinder in the README
- Added legal blurb at the end of the README about how this system is using some images and names as allowed under Paizo's community use policy
- Added a ton of images that were provided by community members. 
- Added images that are available from the Paizo community use packages for Starfinder
- Includes some grammatical corrections
- New custom dice roll chat cards
- Fixes for the custom Solarian counter management system
- Fields added to weapons for critical effects
- Added a Theme comendium
- Updates to the Equipment compendium
- Updates to the Spells compendium
- Added roll data to item chat messages so the inline rolls work correctly in item descriptions
- Fix for an issue that would occur if a piece of armor didn't have a maximum DEX modifier set
- Added the Starfinder ascii art back in the main js file, where it belongs
- Adds a way to track Ability damage
- Adds a way to track Ability drain
- Adds a way to track Ability penalties

I want to thank both Logmelna and Deepflame for their contributions to the system in my absence. Without them, this would be a very sad release with little to no real meaningful updates.

# v0.3.2 - SFRPG

This is a maintenance release that I'm not particularity happy about. But it must be done. Recent events surrounding copyright issues within the community have prompted the Foundry staff to take a look at all of the systems and modules to see if they are compliant. The staff reached out to us to let us know that our system might not be in full compliance with the terms of the Open Game License. This release gets us to that point, but it's going to be painful. This release is going to require that you completely uninstall the system and reinstall it from the module browser. You will also need to edit your `world.json` file in your world and replace `starfinder` with `sfrpg`. I've tried to make this release as painless as possible to upgrade too, but unfortunately the name change is kind of forcing this to be harder than it should be.

It's not all bad news, though. There are two new features and a few bugfixs that snuck there way into the release.

# v0.3.0 - SF1e

**SF1e** - v0.3.0

This is a major release milestone for the SF1e system. This update is jam packed with awesomeness!! First up, here is a list of imporvements that everyone will be interested in:

* Added custom icon images for conditions. I'm not married to these, so if someone has better images to contribute, please do.
* Added initial implementation for the new modifier system.

    This is the first of several updates for this system. It is now possible to add modifiers to Player Characters for skills, saves, AC vs Combat Maneuvers, Electric Armor Class, Kinetic Armor Class, Initiative, and Armor Check Penalty. These are toggable items that are easy to turn on or off. This also adds the ablity to toggle conditions on or off (this doesn't auto add the associated modifiers yet, but it does toggle the status icons on the actor's token). Modifier type is being considered, and modifier bonus stacking should be working correctly. Future updates will add these to all of the actor types (Starships, NPC's, and Vehicles) as well as being able to add modifiers to items and those being auto applied to actors that have those items equipped.

* Added new Modifiers tab to the Player Character sheet.
* Added tracking for Damage Reduction.
* Added tracking for Spell Resistance.
* Changed the "Damage Resistances" label to "Energy Resistances"
* Adjusted energy resistances to correctly model how it should work, buy adding a field to them where you set a numeric value that represents the amount of resistance you have to that energy type.
* Added support for Archetypes.
* Added a new tooltip system that shows modifier breakdowns for skills, abilities, saves, etc... Also shows the syntax needed to use these values in rolls.
* Removed most auto calculations from NPC actors and made skills for NPC's toggable. This means that most fields for NPC's are free from and should make it easier to input data from stat blocks. This is an initial step towards refactoring the NPC sheet so that they resemble a stat block more than a character sheet.
* Fixed a few typo's
* Fixed a bug in initiative calculations where they were being caluculated using the wrong property from the actors data.
* Added a ton of new localization strings.
* First attempt at using a migration script. Please let me know if things aren't working correctly. (Migration on affects NPC's at the moment, since they are the only entities that would really need it currently.)
* Added a Conditions compendium pack. Thanks to @Beans#0464 for the putting this together!
* Added a Rules compendium pack. Thanks to @Logmelna#6538 for putting this together!
* Added a support for the French language. Thanks to @Logmelna#6538 for putting this together!
* Added more equipment to the equipment compendium.
* Added additional weapons properties from Pact Worlds, Near Space, Armory, Character Operations Manual, and any other sources that I can't think of at the moment. This should bring weapon properties up-to-date with all published material to date.
* Bumped the compatibleCoreVersion number to 0.6.3
* Updated OGL to add additional copyright notices for better compliance with that license.
* BUGFIX: Saving throw button was staying disabled if no target was selected when attempting a save.
* Added a warning to the user if an item has no ammunition left.
* BUGFIX: Dragging a crew member to a different role on the starship sheet after reloading or restarting the application was throwing an error.

And for those that are interested in contributing:

* Added a CONTRIBUTING.md file that should give a pretty decent rundown of how you can contribute code.

I'd like to thank @Logmelna#6538, @Beans#0464, @Maximus#6001, and @Athenos#1514 for their awesome contributions for this release.

# v0.2.5 - Starfinder

This is a big update with a few bug fixes and a lot of new features and content.

* Updated OGL to conform to the license a little better.
* Added a legal section to the README
* Added community use images provided by Paizo
* More localization additions.
* Made some minor style changes.
* Added a `classes` property when you call `actor.getRollData()`. This will allow players to use `@classes.<class-name>.levels` syntax in roll formulas
* Added some code abstractions to the back end that should help with the upcoming modifiers system.
* BUGFIX: Fixed a piece of deprecated code that should have been updated a while a go but got missed.
* Refactored starship drag & drop code.
* Added multiple damage types (where there is the ability to add more than one damage type to a weapon) to the `STARFINDER.damageTypes` object
* Fixed the critical and fail dice highlighting.
* Item chat card description text can now be toggled to be open or closed.
* Added a system setting that allows a player to auto close Item chat card descriptions.
* Enhanced the class item 
* Enhanced the race item
* Added a new classes compendium item with all of the core classes from the Core Rulebook
* Added a new races compendium item with all of seven of the core races, as well as all six of the Pathfinder legacy races.
* Added a new starship weapons compendium item with all of the starship weapons from the Core Rulebook.

# v0.2.4 - Starfinder

This is a hot fix release that removes several deprecated Foundry API calls that were still in the code base. This was done to make the system compatible with the v0.6.0 release of Foundry.

# v0.2.3 - Starfinder

This compatibility release for FoundryVTT v0.5.6+

* Fixes diagonal measurement.
* Updated to Tabsv2.
* Added scrollY to the sheet default options so that scroll remembers where it was on form submission.

# v0.2.2 - Starfinder

Hot fix release to fix consumable items.

# v0.2.1 - Starfinder

This update fixes a few things, adds some new features, and adds a lot of new content!

* Fix for #33 and #32. It is now possible to add weapons manually to starship actors. 
* Adds feature request for #30. Adds an attack and damage button to items that can make attacks on the inventory tab. This is the initial release of the feature, so how and where it functions might change.
* Partial implementation for #22. This adds some ability to track the number of available hands that a character has, but doesn't go much further than that. I will consider implementing the rest of the request at a later date.
* Moves the starship data values to the `STARFINDER` configuration object.
* Lots of localization strings added.
* Adds weapon property tags in chat messages.
* Adds a lot of new items to the compendium
* Adds spells to the compendium (A-D)
* Adds feats to the compendium
* Adds more images for items. Thanks @overdox !

# v0.2.0 - Starfinder

This is a big release. The release adds some new stuff and changes a few other things.

* New icons for some equipment. Thanks to @overdox for contributing them.
* Adds several equipment items to the compendium. Again, thanks @overdox .
* Adds a feat pack to the compendium. Thanks to @overdox .
* Character sheets now auto calculate Base Attack Bonus.
* Character sheets now auto calculate base Fortitude, Reflex, and Will save bonus.
* Overall character level is now computed based on class levels.
* Skill list on the character sheet has been re styled. I made it wider and added the ranks field back in for each skill. This should make it easier to edit skills. The right click to edit skills function is still available.
* Localized most of the labels on the character sheet.

_Note to users. You will need to edit any classes that you have on your character. Once you do this, bab, fort, reflex, and will saves should calculate correctly. Also, doing this should set your overall character level._

# v0.1.12 - Starfinder

Quick hot fix for some misspelled localization stuff.

# v0.1.11 - Starfinder

This is a minor update to ensure comparability with FoundryVTT v0.5.5. Also fixes a styling issue that prevented the rest buttons from being able to be clicked on chrome.

# v0.1.10 - Starfinder

This is mostly a cosmetic release. I've changed out fonts to give the system a more science fictiony feel. I've also added a new background image for the sheets instead of the gradient background I was using. I've also attempted to unify the UI a bit by changing some of the overall foundry UI to use the same header and background that the Starfinder sheets are using.

# v0.1.9 - Release

This is mostly a bugfix release. I'm sorry that I haven't been doing more releases lately, but I've been caught up in other projects outside of Foundry. I'm still around and plan to start doing more releases soon. In the mean time, this fixes a bug in starfinder the prevents the system from working on the newest release of Foundry VTT. When creating new actor's, you aren't able to access the token's properties. This release fixes that. This release also adds localization for Japanese. Thanks Brother Sharp!

# v0.1.8 - Release

This is release fixes an issue where user's using screen resolutions less than 1920 x 1080px had the bottom of the character sheet cutoff, and they had no way of adjusting it. This is an imperfect solution, but a quick one that allows user's to use the sheet on lower resolutions. Future updates will see the sheets redesigned a little.

# v0.1.7 - Release

This release updates the system to be compatible with the new embedded entity api in the core Foundry VTT. This release is not compatible with versions of Foundry below v0.4.4. Any one still on v0.4.3 or lower should not update to this release.

Some notable changes:

* Overrode some core styling that was adding extra margin to `img` tags 
* Added the ability to drag items for the character sheet into the new Macro hot bars

# v0.1.6 - Release

This release adds all of the basic melee, advanced melee, and small arms weapons to the compendium.

# v0.1.5 - Starfinder

This is the newest release for the Starfinder system for Foundry Virtual Tabletop.

This update adds auto calculation of EAC and KAC based on Equipped armor. It also adds some compendium items. The compendium will be an on going process that will take some time to implement.

# v0.1.4 - Starfinder

This adds support for v0.4.2+ of the Foundry Virtual Tabletop.

# v0.1.3 - Starfinder system

This fixes an issue with how damage was being applied when using the apply damage context menu in the chat panel. Starfinder has different rules for this than 5e because there are two damage tracks instead of one. I also updated the README.

# v0.1.1 - Initial Release of the Starfinder system
This is the first release for the Starfinder system for the awesome Foundry Virtual Tabletop. This version isn't close to being feature complete, but I wanted to get it out there so people could start using it. 

## Bugs and Issues

If you have any issues or concerns, please don't hesitate to open an issue on the tracker [https://github.com/wildj79/foundryvtt-starfinder/issues](https://github.com/wildj79/foundryvtt-starfinder/issues) or reach out to us on the Foundry discord server: #starfinder, where either the community or `wildj79#0980` and `Deepflame#0875` can help out.

## Legal

_This game system definition uses trademarks and/or copyrights owned by Paizo Inc., which are used under Paizo's Community Use Policy. We are expressly prohibited from charging you to use or access this content. This game system definition is not published, endorsed, or specifically approved by Paizo Inc. For more information about Paizo's Community Use Policy, please visit paizo.com/communityuse. For more information about Paizo Inc. and Paizo products, please visit paizo.com._