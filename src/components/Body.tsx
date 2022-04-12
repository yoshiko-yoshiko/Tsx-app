import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { House } from "../types";

export default function Body() {
  // 表示
  const disData = () => {};
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
          {houseList.map((house, index) => (
            <>
              {/* 支出か収入か選ぶ */}
              <TableCell>{house.type === "0" ? "支出" : "収入"}</TableCell>
              {/* タイムスタンプ */}
              <TableCell>{`${year}-${month}-${day}`}</TableCell>
              {/* 内容 */}
              <TableCell>{houseList}</TableCell>
              {/* 金額 */}
              <TableCell>{houseAmount}</TableCell>
              {/* 削除ボタン */}
              <TableCell></TableCell>
              {/* 削除確認 */}
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
