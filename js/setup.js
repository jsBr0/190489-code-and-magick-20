'use strict';

(function () {

  var createObject = function () {
    return {
      name: window.util.WIZARD_NAMES[window.util.getRandomInteger(0, window.util.WIZARD_NAMES.length - 1)] + ' ' + window.util.WIZARD_SURNAMES[window.util.getRandomInteger(0, window.util.WIZARD_SURNAMES.length - 1)],
      coatColor: window.util.COAT_COLORS[window.util.getRandomInteger(0, window.util.COAT_COLORS.length - 1)],
      eyesColor: window.util.EYES_COLORS[window.util.getRandomInteger(0, window.util.EYES_COLORS.length - 1)]
    };
  };

  var wizards = [];

  var createArrayObjects = function () {
    for (var i = 0; i < 4; i++) {
      wizards.push(createObject());
    }
  };

  createArrayObjects();

  document.querySelector('.setup').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var createWizardElems = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    return fragment;
  };

  similarListElement.appendChild(createWizardElems());

  document.querySelector('.setup-similar').classList.remove('hidden');
})();
