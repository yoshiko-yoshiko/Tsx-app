import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { db } from "./firebase";
import { collection } from "firebase/firestore";

type House = {
  docId: string;
  type: string;
  content: string;
  amount: number;
  timestamp: string;
};

type ChartPropety = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

type ChartMonthPropety = {
  month: string;
  expenditure: number;
  income: number;
};

export default function Body() {
  // 表示
  const disData = () => {
    // DBのデータ
    const ShowData = collection(db, "tHouseholdAccountbook");
    const userList: House[] = [];
    const GraphList: ChartPropety[] = [];
    const GraphMonth: ChartMonthPropety[] = [];
  };
  // 追加
  const AddTask = () => {};
  // 削除
  const DelateTask = () => {};
  // amount
  const [houseAmount, setAmount] = useState<String>("0");
  // List
  const [houseList, setHouseList] = useState<House[]>([]);
  //timestamp
  // const [timestamp, setTimestamp] = useState(new Date().getFullYear());
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  // 削除処理
  const [open, setOpen] = useState(false);

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(4),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(3),
    },
  }));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>支出 / 収入</TableCell>
            <TableCell>年月日</TableCell>
            <TableCell>内容</TableCell>
            <TableCell>金額</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {houseList.map((house, index) => ( */}
          <>
            {/* 支出か収入か選ぶ */}
            {/* <TableCell>{house.type === "0" ? "支出" : "収入"}</TableCell> */}
            {/* タイムスタンプ */}
            <TableCell>{`${year}-${month}-${day}`}</TableCell>
            {/* 内容 */}
            <TableCell>{houseList}</TableCell>
            {/* 金額 */}
            <TableCell>{houseAmount}円</TableCell>
            {/* 削除ボタン */}
            <TableCell></TableCell>
            {/* 削除確認 */}
            <div>
              <Button variant="outlined" onClick={handleClickOpen}>
                削除
              </Button>
              <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <DialogContent dividers>
                  <Typography gutterBottom>削除しますか？</Typography>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose}>
                    DELETE
                  </Button>
                </DialogActions>
              </BootstrapDialog>
            </div>
          </>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
