export default function getNeighborhoodsList() {
  this.neighborhoodsList = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.neighborhoodsList.push(newNeighborhood);
    return this.neighborhoodsList;
  };
}
