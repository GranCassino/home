function searchImages() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';
  
    // Replace the following array with the data from your server or database
    var imageData = [
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlayNGo/GameId_1783/Background_1619088312.jpg', alt: ' Hand Casino Holdem', link: '3-hand-casino-holdem' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameISoftBet/GameId_594/Background_1617807124.jpg#CasinoGameISoftBet/GameId_594/Mini_1696417990.jpg', alt: 'Absolute Super Reels', link: 'absolute-super-reels' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_1414/Background_1616762028.jpg', alt: 'Age of the Gods Apollo Power', link: 'age-of-the-gods-apollo-power' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_925/Background_1673528634.jpg', alt: 'Age of The Gods God of Storms', link: 'age-of-the-gods-god-of-storms' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_6498/Background_1647010348.jpg', alt: 'Age of the Gods Maze Keeper', link: 'age-of-the-gods-maze-keeper' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_921/Background_1616762193.jpg', alt: 'Age Of The Gods Rulers Of Olympus', link: 'age-of-the-gods-rulers-of-olympus' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePragmaticPlay/GameId_3691/Background_1619533270.jpg', alt: 'American Blackjack', link: 'american-blackjack' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePariPlay/GameId_5488/Background_1640703041.jpg', alt: 'American Roulette 10c Min', link: 'american-roulette-10c-min' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePariPlay/GameId_5489/Background_1640703041.jpg', alt: 'American Roulette High Stakes', link: 'american-roulette-high-stakes' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_11595/Background_1694772767.jpg', alt: 'Animal Instinct', link: 'animal-instinct' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameSpribe/GameId_3337/Background_1688559153.jpg', alt: 'Crash Aviator', link: 'aviator' },
      { src: 'https://i.imgur.com/hIoKYb9.png', alt: 'Baccarat Multiplayer aovivo', link: 'baccarat-multiplayer-aovivo' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameiSoftBet-Oryx/GameId_13721/Thumbnail_1706174196636.jpg', alt: 'Bad Bass', link: 'bad-bass' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePragmaticPlay/GameId_10653/Background_1686909184.jpg', alt: 'Big Bass Amazon Xtreme', link: 'big-bass-amazon-xtreme' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePragmaticPlay/GameId_7207/Background_1655466135.jpg', alt: 'Big Bass Splash', link: 'big-bass-splash' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameISoftBet/GameId_11013/Background_1691567901.jpg', alt: 'Bison Valley', link: 'bison-valley' },
      { src: 'https://i.imgur.com/xQGAbfl.png', alt: 'Bingo Lotto Aovivo', link: 'bingo-lucky-lotto-aovivo' },
      { src: 'https://i.imgur.com/oBMkwUx.png', alt: 'Blackjack Kingmaster Aovivo', link: 'blackjack-kingmaster-aovivo' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlayNGo/GameId_1573/Background_1686757321.jpg', alt: 'Blackjack Multihand', link: 'blackjack-multihand' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlayNGo/GameId_1828/Background_1686757407.jpg', alt: 'Blackjack Multihand Double Exposure', link: 'blackjack-multihand-double-exposure' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_400/Background_1615468015.jpg', alt: 'Blackjack Cashback', link: 'blackjack-cashback' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameRedTiger/GameId_9200/Background_1674462839.jpg', alt: 'Blood Suckers Megaways', link: 'blood-sucker-megaways' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlayNGo/GameId_1593/book_of_dead.jpg', alt: 'Book Of Dead', link: 'book-of-dead' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameScientificGames/GameId_9701/Background_1677853103.jpg', alt: 'Broods of Gods', link: 'brood-of-gods' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlayNGo/GameId_1800/Background_1619088852.jpg', alt: 'Casino Holdem poker', link: 'casino-holdem' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameWazdan/GameId_5984/Background_1644231196.jpg', alt: 'Casino Roulette', link: 'casino-roulette' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameISoftBet/GameId_6581/Background_1649228484.jpg', alt: 'Deuces Wild', link: 'deuces-wild' },
      { src: 'https://i.imgur.com/mi3ByBC.png', alt: 'Deuces Wild Multihand', link: 'deuces-wild-multihand' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameNetEntEvo/GameId_5856/Background_1675942063.jpg', alt: 'Divine Fortune Megaways', link: 'divine-fortune-megaways' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameWazdan/GameId_6053/Background_1644231460.jpg', alt: 'Dracula s Castle', link: 'draculas-castle' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_13208/Thumbnail_1706776234926.jpg', alt: 'Double Digger', link: 'double-digger' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameOryx/GameId_7936/Background_1684929852.jpg', alt: 'Egyptian Magic', link: 'egyptian-magic' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameNetEntEvo/GameId_7386/Background_1655909421.png', alt: 'European Roulette', link: 'european-roulette' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePariPlay/GameId_5476/Background_1640703039.jpg', alt: 'European Roulette 10c Min', link: 'european-roulette-10c-min' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePariPlay/GameId_5474/Background_1640703039.jpg', alt: 'European Roulette High Stakes', link: 'european-roulette-high-stakes' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameBlueprint/GameId_2201/Background_1623060368.jpg', alt: 'Eye Of Horus Megaways', link: 'eye-of-horus-megaways' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameGamomat/GameId_10548/Background_1686036819.jpg', alt: 'Fengs Fortune', link: 'fengs-fortune' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameRelaxGaming%20-%20PGSoft/GameId_14789/Thumbnail_1712915761583.jpg', alt: 'Fortune Dragon', link: 'fortune-dragon' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameRelaxGaming%20-%20PGSoft/GameId_13616/Thumbnail_1707989735906.jpg', alt: 'Fortune Mouse', link: 'fortune-mouse' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameRelaxGaming%20-%20PGSoft/GameId_13617/Thumbnail_1707989753348.jpg', alt: 'Fortune Ox', link: 'fortune-ox' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameRelaxGaming%20-%20PGSoft/GameId_13618/Thumbnail_1707989955446.jpg', alt: 'Fortune Rabbit', link: 'fortune-rabbit' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameRelaxGaming%20-%20PGSoft/GameId_13619/Thumbnail_1707989994859.jpg', alt: 'Fortune Tiger', link: 'fortune-tiger' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePragmatic/GameId_14856/Thumbnail_1714634140787.jpg', alt: 'Fruity Treats', link: 'fruity-treats' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlayNGo/GameId_1830/Background_1618476156.jpg', alt: 'Game of Gladiators', link: 'game-of-gladiators' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePragmaticPlay/GameId_3588/Background_1619512420.jpg', alt: 'Gates of Olympus', link: 'gates-of-olympus' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameSpribe/GameId_10697/Background_1688556978.jpg', alt: 'Crash Goal', link: 'goal' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_12062/Background_1698405958.jpg', alt: 'Gold Hit And Link JP bacon And CO', link: 'gold-hit-and-link-j-p-bacon-and-co' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_9198/Background_1674462280.jpg', alt: 'Gold Rush: Cash Collect™', link: 'gold-rush-cash-collect' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameOryx/GameId_10411/Background_1684929718.jpg', alt: 'Golden Avalanche', link: 'golden-avalanche' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameNetEntEvo/GameId_5835/Background_1675942823.jpg', alt: 'Gonzo Quest', link: 'gonzosquest' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameSpribe/GameId_10695/Background_1688556997.jpg', alt: 'Crash Hi Lo', link: 'heart-of-cleopatra' },{ src: 'https://static.gambling-malta.com/casino/CasinoGamePragmatic/GameId_14931/Thumbnail_1714980260525.jpg', alt: 'Heart of Cleopatra', link: 'hilo' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameNetEntEvo/GameId_5904/Background_1675941993.jpg', alt: 'Jack Hammer', link: 'jack-hammer' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameNetEntEvo/GameId_5903/Background_1643718107.png', alt: 'Jack Hammer 2 Fishy Business', link: 'jack-hammer-2-fishy-business' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlayNGo/GameId_1690/Background_1618478079.jpg', alt: 'Jackpot Poker', link: 'jackpot-poker' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePariPlay/GameId_11878/Background_1697191579.jpg', alt: 'Jack Potter and the Book of Nubia', link: 'jack-potter-and-the-book-of-nubia' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameISoftBet/GameId_4117/Background_1626334123.jpg', alt: 'Jacks or Better', link: 'jacks-or-better' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_7706/Thumbnail_1702895114371.jpg', alt: 'Jacks or Better Classic', link: 'jacks-or-better-classic' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameWazdan/GameId_6028/Background_1644231200.jpg', alt: 'Joker Poker', link: 'joker-poker' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlayNGo/GameId_1676/Background_1618478386.jpg', alt: 'Joker Poker Multihand', link: 'joker-poker-multihand' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameBlueprint/GameId_11995/Background_1697806159.jpg', alt: 'King Kong Cash Even Bigger Bananas', link: 'king-kong-cash-even-bigger-bananas' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameRelaxGaming%20-%20PGSoft/GameId_13692/Thumbnail_1708009551489.jpg', alt: 'Leprechaun Riches', link: 'leprechaun-riches' },
      { src: 'https://i.imgur.com/nShBhPE.png', alt: 'Lux Roulette Aovivo', link: 'lux-roulette-aovivo' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_3228/Background_1615453803.jpg', alt: 'Mega Fire Blaze Khonsu God of Moon', link: 'mega-fire-blaze-khonsu-god-of-moon' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameNetEntEvo/GameId_5894/Background_1643718106.png', alt: 'Mega Fortune', link: 'megafortune' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameOryx/GameId_2582/Background_1623147947.jpg', alt: 'Mission Atlantis', link: 'mission-atlantis' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePragmaticPlay/GameId_3631/Background_1619527773.jpg', alt: 'Multihand Blackjack', link: 'multihand-blackjack' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameGamomat/GameId_8644/Background_1670583572.jpg', alt: 'Nordic Fire', link: 'nordic-fire' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlayNGo/GameId_9524/Background_1677235193.jpg', alt: 'Pandoras Box of Evil', link: 'pandoras-box-of-evil' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameScientificGames/GameId_3453/Background_1619013414.jpg', alt: 'Perfect Potions Megaways', link: 'perfect-potions-megaways' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_11120/Background_1690538322.jpg', alt: 'Piggies And The Bank Mega Fire Blaze', link: 'piggies-and-the-bank-mega-fire-blaze' },
      { src: 'https://i.imgur.com/LbMO3kK.png', alt: 'Poker Mini Flush', link: 'poker-mini-flush' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePragmatic/GameId_14250/Thumbnail_1709905860115.jpg', alt: 'Pot Of Fortune', link: 'pot-of-fortune' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameWazdan/GameId_4750/Background_1649153484.jpg', alt: 'Power Of Gods Hades', link: 'power-of-gods-hades' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_456/Background_1615468400.jpg', alt: 'Premium Blackjack', link: 'premium-blackjack' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameGamomat/GameId_2665/Background_1623142351.jpg', alt: 'Ramses Book', link: 'ramses-book' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameiSoftBet/GameId_15258/Thumbnail_1715856110742.jpg', alt: 'Republic Empire Hold And Win', link: 'republic-empire-hold-and-win' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_14146/Thumbnail_1709296908325.jpg', alt: 'Robocop Cash Collect', link: 'robocop-cash-collect' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameBlueprint/GameId_2268/Background_1623061202.jpg', alt: 'Rome Rise Of An Empire', link: 'rome-rise-of-an-empire' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameBooming%20Games/GameId_14733/Thumbnail_1713859141721.jpg', alt: 'Ronaldinho Spins', link: 'ronaldinho-spins' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePragmaticPlay/GameId_3648/Background_1619527774.jpg', alt: 'Roulette', link: 'roulette' },
      { src: 'https://i.imgur.com/m3Nu9cV.png', alt: 'Roulette BP Aovivo', link: 'roulette-bp-aovivo' },
      { src: 'https://i.imgur.com/QDhLki8.png', alt: 'Roulette Fazi Aovivo', link: 'roulette-fazi-aovivo' },
      { src: 'https://i.imgur.com/qGdFR4v.png', alt: 'Roulette Spadegaming Aovivo', link: 'roulette-spadegaming-aovivo' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameWazdan/GameId_12044/Background_1698395528.jpg', alt: 'Sizzling Eggs Halloween Edition', link: 'sizzling-eggs-halloween-edition' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameNetEntEvo/GameId_5944/Background_1675941920.jpg', alt: 'Starburst', link: 'starburst' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameiSoftBet-Oryx/GameId_13244/Thumbnail_1704453671630.jpg', alt: 'Team Winfast', link: 'team-winfast' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameISoftBet/GameId_7216/Background_1655466099.jpg', alt: 'Tens or Better', link: 'tens-or-better' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePragmatic/GameId_13182/Thumbnail_1704698980671.jpg', alt: 'The Big Dawgs', link: 'the-big-dawgs' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameBlueprint/GameId_2235/Background_1623061734.jpg', alt: 'The Goonies', link: 'the-goonies' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameRedTiger/GameId_5773/Background_1643716915.png', alt: 'Thors Vengeance', link: 'thors-vengeance' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameWazdan/GameId_6001/Background_1644231198.jpg', alt: 'Three Cards', link: 'three-cards' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameWazdan/GameId_5998/Background_1644231197.jpg', alt: 'Turbo Poker', link: 'turbo-poker' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameScientificGames/GameId_3842/Background_1621927074.jpg#CasinoGameScientificGames/GameId_3842/Mini_1706105597380.jpg', alt: 'Ultra Blazing Fire Link', link: 'ultra-blazing-fire-link' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameEvolution-RedTiger/GameId_13225/Thumbnail_1704449458572.jpg', alt: 'Vault Craker Megaways', link: 'vault-cracker-megaways' },
      { src: 'https://i.imgur.com/xFlEO6a.png', alt: 'Vip Roulette Aovivo', link: 'vip-roulette-aovivo' },
      { src: 'https://i.imgur.com/FlbXcSd.png', alt: 'Virtual Roulette Aovivo', link: 'virtual-roulette-aovivo' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameOryx/GameId_10436/Background_1684929723.jpg', alt: 'Wall Street Roulette', link: 'wall-street-roulette' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameBlueprint/GameId_2223/Background_1623062052.jpg', alt: 'Wolf Legend Megaways', link: 'wolf-legend-megaways' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameISoftBet/GameId_4121/Background_1628072727.jpg', alt: 'Wild Hammer Megaways', link: 'wild-hammer-megaways' },
        { src: 'https://i.imgur.com/jaPTX7t.png', alt: 'Poker Win Three Cards', link: 'poker-win-three-cards' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameBlueprint/GameId_2221/Background_1623062013.jpg', alt: 'Wish Upon a Jackpot MegaWays', link: 'wish-upon-a-jackpot-megaways' },

    
      // Add more image data as needed
    ];
  
    if (searchTerm !== '') {
  imageData.forEach(function (image) {
    if (image.alt.toLowerCase().includes(searchTerm)) {
      var imgElement = document.createElement('img');
      imgElement.src = image.src;
      imgElement.alt = image.alt;

      var linkElement = document.createElement('a');
      linkElement.href = image.link;
      linkElement.target = '_blank';
      linkElement.appendChild(imgElement);

      imageContainer.appendChild(linkElement);
    }
  });
} else {
  // Se o termo de pesquisa estiver em branco, você pode decidir o que fazer aqui
  console.log("O termo de pesquisa está em branco. Nenhuma busca será realizada.");
}
}
