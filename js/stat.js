'use strict';

(function () {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_GAP = 10;
  var BAR_GAP = 50;
  var BAR_WIDTH = 40;
  var TEXT_HEIGHT = 20;
  var BAR_HEIGHT_MAX = -150;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 250, 30);
    ctx.fillText('Список результатов:', 235, 50);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      ctx.fillStyle = '#000000';
      ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - CLOUD_GAP);
      ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - CLOUD_GAP - TEXT_HEIGHT - CLOUD_GAP + BAR_HEIGHT_MAX);
      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - CLOUD_GAP - TEXT_HEIGHT, BAR_WIDTH, (BAR_HEIGHT_MAX * times[i]) / maxTime);
      } else {
        var saturation = Math.floor(Math.random() * 100) + 1;
        ctx.fillStyle = 'hsl(235,' + saturation + '%, 50%)';
        ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - CLOUD_GAP - TEXT_HEIGHT, BAR_WIDTH, (BAR_HEIGHT_MAX * times[i]) / maxTime);
      }
    }
  };
})();
