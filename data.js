module.exports = function () {
  return { 
    products: [
      { id: 1, name: "Buty adidas", category: "Obuwie", description: "Wygodne buty sportowe", price: 239.99, image: ['buty_adidas'] },
      { id: 2, name: "Kurtka sportowa", category: "Kurtki", description: "Chroni przed deszczem", price: 250.99, image: ['kurtka_adidas'] },
      { id: 3, name: "Spodenki", category: "Spodnie", description: "Stworzone z miękkiego materiału", price: 109.50, image: ['spodnie'] },
      { id: 4, name: "Piłka Nike", category: "Piłki", description: "nowa technologia", price: 159.50, image: ['pilka'] },
      { id: 5, name: "Getry", category: "Akcesoria", description: "w barwach klubowych", price: 199.50, image: ['getry'] }
      ],
      orders: []
  }
}