function searchImages() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';
  
    // Replace the following array with the data from your server or database
    var imageData = [
      { src: 'https://static.gambling-malta.com/casino/CasinoGameISoftBet/GameId_594/Background_1617807124.jpg#CasinoGameISoftBet/GameId_594/Mini_1696417990.jpg', alt: 'Absolute Super Reels', link: 'absolute-super-reels' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_1414/Background_1616762028.jpg', alt: 'Age of the Gods Apollo Power', link: 'age-of-the-gods-apollo-power' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_6498/Background_1647010348.jpg', alt: 'Age of the Gods Maze Keeper', link: 'age-of-the-gods-maze-keeper' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_11595/Background_1694772767.jpg', alt: 'Animal Instinct', link: 'animal-instinct' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameSpribe/GameId_3337/Background_1688559153.jpg', alt: 'Crash Aviator', link: 'aviator' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameiSoftBet-Oryx/GameId_13721/Thumbnail_1706174196636.jpg', alt: 'Bad Bass', link: 'bad-bass' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePragmaticPlay/GameId_7207/Background_1655466135.jpg', alt: 'Big Bass Splash', link: 'big-bass-splash' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameISoftBet/GameId_11013/Background_1691567901.jpg', alt: 'Bison Valley', link: 'bison-valley' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameRedTiger/GameId_9200/Background_1674462839.jpg', alt: 'Blood Suckers Megaways', link: 'blood-sucker-megaways' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlayNGo/GameId_1593/book_of_dead.jpg', alt: 'Book Of Dead', link: 'book-of-dead' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameScientificGames/GameId_9701/Background_1677853103.jpg', alt: 'Broods of Gods', link: 'brood-of-gods' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameNetEntEvo/GameId_5856/Background_1675942063.jpg', alt: 'Divine Fortune Megaways', link: 'divine-fortune-megaways' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameWazdan/GameId_6053/Background_1644231460.jpg', alt: 'Dracula s Castle', link: 'draculas-castle' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameOryx/GameId_7936/Background_1684929852.jpg', alt: 'Egyptian Magic', link: 'egyptian-magic' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameGamomat/GameId_10548/Background_1686036819.jpg', alt: 'Fengs Fortune', link: 'fengs-fortune' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlayNGo/GameId_1830/Background_1618476156.jpg', alt: 'Game of Gladiators', link: 'game-of-gladiators' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePragmaticPlay/GameId_3588/Background_1619512420.jpg', alt: 'Gates of Olympus', link: 'gates-of-olympus' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameSpribe/GameId_10697/Background_1688556978.jpg', alt: 'Crash Goal', link: 'goal' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_12062/Background_1698405958.jpg', alt: 'Gold Hit And Link JP bacon And CO', link: 'gold-hit-and-link-j-p-bacon-and-co' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_9198/Background_1674462280.jpg', alt: 'Gold Rush: Cash Collect™', link: 'gold-rush-cash-collect' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameOryx/GameId_10411/Background_1684929718.jpg', alt: 'Golden Avalanche', link: 'golden-avalanche' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameNetEntEvo/GameId_5835/Background_1675942823.jpg', alt: 'Gonzo Quest', link: 'gonzosquest' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameSpribe/GameId_10695/Background_1688556997.jpg', alt: 'Crash Hi Lo', link: 'hilo' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameNetEntEvo/GameId_5903/Background_1643718107.png', alt: 'Jack Hammer 2 Fishy Business', link: 'jack-hammer-2-fishy-business' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePariPlay/GameId_11878/Background_1697191579.jpg', alt: 'Jack Potter and the Book of Nubia', link: 'jack-potter-and-the-book-of-nubia' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameBlueprint/GameId_11995/Background_1697806159.jpg', alt: 'King Kong Cash Even Bigger Bananas', link: 'king-kong-cash-even-bigger-bananas' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_3228/Background_1615453803.jpg', alt: 'Mega Fire Blaze Khonsu God of Moon', link: 'mega-fire-blaze-khonsu-god-of-moon' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameOryx/GameId_2582/Background_1623147947.jpg', alt: 'Mission Atlantis', link: 'mission-atlantis' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameGamomat/GameId_8644/Background_1670583572.jpg', alt: 'Nordic Fire', link: 'nordic-fire' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlayNGo/GameId_9524/Background_1677235193.jpg', alt: 'Pandoras Box of Evil', link: 'pandoras-box-of-evil' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameScientificGames/GameId_3453/Background_1619013414.jpg', alt: 'Perfect Potions Megaways', link: 'perfect-potions-megaways' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_11120/Background_1690538322.jpg', alt: 'Piggies And The Bank Mega Fire Blaze', link: 'piggies-and-the-bank-mega-fire-blaze' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameWazdan/GameId_4750/Background_1649153484.jpg', alt: 'Power Of Gods Hades', link: 'power-of-gods-hades' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameGamomat/GameId_2665/Background_1623142351.jpg', alt: 'Ramses Book', link: 'ramses-book' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameBlueprint/GameId_2268/Background_1623061202.jpg', alt: 'Rome Rise Of An Empire', link: 'rome-rise-of-an-empire' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameWazdan/GameId_12044/Background_1698395528.jpg', alt: 'Sizzling Eggs Halloween Edition', link: 'sizzling-eggs-halloween-edition' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameNetEntEvo/GameId_5944/Background_1675941920.jpg', alt: 'Starburst', link: 'starburst' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameiSoftBet-Oryx/GameId_13244/Thumbnail_1704453671630.jpg', alt: 'Team Winfast', link: 'team-winfast' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePragmatic/GameId_13182/Thumbnail_1704698980671.jpg', alt: 'The Big Dawgs', link: 'the-big-dawgs' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameBlueprint/GameId_2235/Background_1623061734.jpg', alt: 'The Goonies', link: 'the-goonies' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameRedTiger/GameId_5773/Background_1643716915.png', alt: 'Thors Vengeance', link: 'thors-vengeance' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameScientificGames/GameId_3842/Background_1621927074.jpg#CasinoGameScientificGames/GameId_3842/Mini_1706105597380.jpg', alt: 'Ultra Blazing Fire Link', link: 'ultra-blazing-fire-link' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameEvolution-RedTiger/GameId_13225/Thumbnail_1704449458572.jpg', alt: 'Vault Craker Megaways', link: 'vault-cracker-megaways' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameBlueprint/GameId_2223/Background_1623062052.jpg', alt: 'Wolf Legend Megaways', link: 'wolf-legend-megaways' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameISoftBet/GameId_4121/Background_1628072727.jpg', alt: 'Wild Hammer Megaways', link: 'wild-hammer-megaways' },
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
