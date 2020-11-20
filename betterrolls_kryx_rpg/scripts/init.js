function i18n (key) {
  return game.i18n.localize(key)
}

Hooks.once('init', () => {

  /**
   * Register better rolls setting
   */
  game.settings.register('betterrolls_kryx_rpg', 'diceEnabled', {
    name: i18n('brkr.diceEnabled.name'),
    hint: i18n('brkr.diceEnabled.hint'),
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
  })

  game.settings.register('betterrolls_kryx_rpg', 'd20Mode', {
    name: i18n('brkr.d20Mode.name'),
    hint: i18n('brkr.d20Mode.hint'),
    scope: 'world',
    config: true,
    default: 2,
    type: Number,
    choices: {
      1: i18n('brkr.d20Mode.choices.1'),
      2: i18n('brkr.d20Mode.choices.2'),
      3: i18n('brkr.d20Mode.choices.3'),
    },
  })

  /**
   * Query roll type in Roll20 style
   */
  game.settings.register('betterrolls_kryx_rpg', 'queryAdvantageEnabled', {
    name: i18n('brkr.queryAdvantageEnabled.name'),
    hint: i18n('brkr.queryAdvantageEnabled.hint'),
    scope: 'world',
    config: true,
    default: false,
    type: Boolean,
  })

  /**
   * Register added roll buttons
   */
  game.settings.register('betterrolls_kryx_rpg', 'rollButtonsEnabled', {
    name: i18n('brkr.rollButtonsEnabled.name'),
    hint: i18n('brkr.rollButtonsEnabled.hint'),
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
  })

  /**
   * Register better roll for icon
   */
  game.settings.register('betterrolls_kryx_rpg', 'imageButtonEnabled', {
    name: i18n('brkr.imageButtonEnabled.name'),
    hint: i18n('brkr.imageButtonEnabled.hint'),
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
  })

  game.settings.register('betterrolls_kryx_rpg', 'altSecondaryEnabled', {
    name: i18n('brkr.altSecondaryEnabled.name'),
    hint: i18n('brkr.altSecondaryEnabled.hint'),
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
  })

  /**
   * Register quick roll defaults for description
   */
  game.settings.register('betterrolls_kryx_rpg',
    'quickDefaultDescriptionEnabled', {
      name: i18n('brkr.quickDefaultDescriptionEnabled.name'),
      hint: i18n('brkr.quickDefaultDescriptionEnabled.hint'),
      scope: 'world',
      config: true,
      default: false,
      type: Boolean,
    })

  game.settings.register('betterrolls_kryx_rpg', 'defaultRollArt', {
    name: i18n('brkr.defaultRollArt.name'),
    hint: i18n('brkr.defaultRollArt.hint'),
    scope: 'world',
    config: true,
    default: 'actor',
    type: String,
    choices: {
      'actor': i18n('Actor'),
      'token': i18n('Token'),
    },
  })

  /**
   * Register roll label options
   */
  game.settings.register('betterrolls_kryx_rpg', 'rollTitlePlacement', {
    name: i18n('brkr.rollTitlePlacement.name'),
    hint: i18n('brkr.rollTitlePlacement.hint'),
    scope: 'world',
    config: true,
    default: '1',
    type: String,
    choices: {
      '0': i18n('brkr.damageRollPlacement.choices.0'),
      '1': i18n('brkr.damageRollPlacement.choices.1'),
    },
  })

  const damagePlacementOptions = [
    'damageTitlePlacement',
    'damageContextPlacement',
    'damageRollPlacement']

  damagePlacementOptions.forEach(placementOption => {
    game.settings.register('betterrolls_kryx_rpg', placementOption, {
      name: i18n(`brkr.${placementOption}.name`),
      hint: i18n(`brkr.${placementOption}.hint`),
      scope: 'world',
      config: true,
      default: '1',
      type: String,
      choices: {
        '0': i18n('brkr.damageRollPlacement.choices.0'),
        '1': i18n('brkr.damageRollPlacement.choices.1'),
        '2': i18n('brkr.damageRollPlacement.choices.2'),
        '3': i18n('brkr.damageRollPlacement.choices.3'),
      },
    })
  })

  const contextReplacementOptions = [
    'contextReplacesTitle',
    'contextReplacesDamage']

  contextReplacementOptions.forEach(contextOption => {
    game.settings.register('betterrolls_kryx_rpg', contextOption, {
      name: i18n(`brkr.${contextOption}.name`),
      hint: i18n(`brkr.${contextOption}.hint`),
      scope: 'world',
      config: true,
      default: false,
      type: Boolean,
    })
  })

  game.settings.register('betterrolls_kryx_rpg', 'critBehavior', {
    name: i18n('brkr.critBehavior.name'),
    hint: i18n('brkr.critBehavior.hint'),
    scope: 'world',
    config: true,
    default: '1',
    type: String,
    choices: {
      '0': i18n('brkr.critBehavior.choices.0'), // No Extra Damage
      '1': i18n('brkr.critBehavior.choices.1'), // Roll Critical Damage Dice
      '2': i18n('brkr.critBehavior.choices.2'), // Roll Base Damage, Max Critical
      '3': i18n('brkr.critBehavior.choices.3'), // Max Base & Critical Damage
    },
  })

  game.settings.register('betterrolls_kryx_rpg', 'critString', {
    name: i18n('brkr.critString.name'),
    hint: i18n('brkr.critString.hint'),
    scope: 'world',
    config: true,
    default: 'Crit',
    type: String,
  })

  game.settings.register('betterrolls_kryx_rpg', 'chatDamageButtonsEnabled', {
    name: i18n('brkr.chatDamageButtonsEnabled.name'),
    hint: i18n('brkr.chatDamageButtonsEnabled.hint'),
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
  })

  game.settings.register('betterrolls_kryx_rpg', 'playRollSounds', {
    name: i18n('brkr.playRollSounds.name'),
    hint: i18n('brkr.playRollSounds.hint'),
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
  })

  game.settings.register('betterrolls_kryx_rpg', 'hideDC', {
    name: i18n('brkr.hideDC.name'),
    hint: i18n('brkr.hideDC.hint'),
    scope: 'world',
    config: true,
    default: '0',
    type: String,
    choices: {
      '0': i18n('brkr.hideDC.choices.0'),
      '1': i18n('brkr.hideDC.choices.1'),
      '2': i18n('brkr.hideDC.choices.2'),
    },
  })
})

// Modify context menu for damage rolls (they break)
Hooks.on('getChatLogEntryContext', (html, options) => {
  let contextDamageLabels = [
    game.i18n.localize('KRYX_RPG.ChatContextDamage'),
    game.i18n.localize('KRYX_RPG.ChatContextHealing'),
    game.i18n.localize('KRYX_RPG.ChatContextDoubleDamage'),
    game.i18n.localize('KRYX_RPG.ChatContextHalfDamage'),
  ]

  for (let i = options.length - 1; i >= 0; i--) {
    let option = options[i]
    if (contextDamageLabels.includes(option.name)) {
      option.condition = li => canvas.tokens.controlled.length &&
        li.find('.dice-roll').length && !li.find('.red-full').length
    }
  }
})