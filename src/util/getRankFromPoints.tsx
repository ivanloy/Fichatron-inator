export const getRankFromPoints = (points: number) => {
  switch(points){
    case 120:
      return "S";
    case 80:
      return "A";
    case 40:
      return "B";
    case 30:
      return "C";
    case 20:
      return "D";
    case 10:
      return "E";
    case 2:
      return "F";
    default:
      return "F";
  }
}