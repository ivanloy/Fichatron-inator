export const getPointsFromRank = (rank: string) => {
  switch(rank){
    case "S":
      return 120;
    case "A":
      return 80;
    case "B":
      return 40;
    case "C":
      return 30;
    case "D":
      return 20;
    case "E":
      return 10;
    case "F":
      return 2;
    default:
      return 2;
  }
}