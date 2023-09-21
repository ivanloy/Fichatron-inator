import { getPointsFromRank } from "../../util/getPointsFromRank";
import { getRankFromPoints } from "../../util/getRankFromPoints";
import { StrengthItem } from "./Strengths"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

type StrengthsTableProps = {
  data: StrengthItem[];
}

export const StrengthsTable = (props: StrengthsTableProps) => {
  const { data } = props; 

  const columns: GridColDef[] = [
    {
      field: 'rank',
      headerName: 'Rango',
      width: 80,
      sortComparator: (v1, v2, param1, param2) => {
        if(getPointsFromRank(v1) > getPointsFromRank(v2)) return -1;
        if(getPointsFromRank(v1) < getPointsFromRank(v2)) return 1;
        return 0;
      },
      valueGetter: (params: GridValueGetterParams) => getRankFromPoints(params.row.rank)
    },
    { field: 'name', headerName: 'Nombre', width: 180 },
    { field: 'description', headerName: 'Descripcion', width: 700 },
  ];
  return (
    <DataGrid
      rows={data}
      columns={columns}
    />
  );
}