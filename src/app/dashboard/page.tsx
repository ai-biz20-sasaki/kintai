"use client"
import { useState } from 'react';

export default function Dashboard() {
  const now = new Date()
  const nowYear = now.getFullYear()
  const nowMonth = now.getMonth()
  //const nowDate = now.getDate()
  const formattedNowMonth = `${nowYear}-${(nowMonth + 1).toString().padStart(2, '0')}`;
  //const formattedNowDate = `${nowYear}-${(nowMonth + 1).toString().padStart(2, '0')}-${nowDate.toString().padStart(2, '0')}`;

  // ステートとして選択した年と月を管理
  const [selectedYearMonth, setSelectedYearMonth] = useState(formattedNowMonth);

  // カレンダーの日付と曜日を計算するヘルパー関数
  const getCalendarDates = (year, month) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const dates = [];
    const dayLabels = ['日', '月', '火', '水', '木', '金', '土'];

    for (let date = new Date(firstDayOfMonth); date <= lastDayOfMonth; date.setDate(date.getDate() + 1)) {
      const dayOfWeek = dayLabels[date.getDay()];
      dates.push({ date: date.getDate(), dayOfWeek });
    }

    return dates;
  };

  // 選択した年と月に対応するカレンダーの日付と曜日を取得
  const calendarDates = getCalendarDates(
    parseInt(selectedYearMonth.split('-')[0]),
    parseInt(selectedYearMonth.split('-')[1]) - 1
  );

  const startTime01 = (dayOfWeek: string) => {
    if (dayOfWeek === "土" || dayOfWeek === "日") {
      return "";
    } else {
      return "9:30";
    }
  };

  const endTime01 = (dayOfWeek: string) => {
    if (dayOfWeek === "土" || dayOfWeek === "日") {
      return "";
    } else {
      return "12:00";
    }
  };

  const newline = (dayOfWeek: string) => {
    if (dayOfWeek === "土" || dayOfWeek === "日") {
      return "";
    } else {
      return <br />;
    }
  };

  const startTime02 = (date: number, dayOfWeek: string) => {
    if (dayOfWeek === "土" || dayOfWeek === "日") {
      return "";
    } else {
      return `${date},${dayOfWeek},13:00`;
    }
  };

  const endTime02 = (dayOfWeek: string) => {
    if (dayOfWeek === "土" || dayOfWeek === "日") {
      return "";
    } else if(dayOfWeek === "月" || dayOfWeek === "水" || dayOfWeek === "金") {
      return "16:00";
    } else {
      return "18:30";
    }
  };

  return (
    <div className="m-3">
      <div>Dashboard</div>
      <input type="month" value={selectedYearMonth} onChange={(e) => setSelectedYearMonth(e.target.value)} />
      <hr className="my-2" />
      <div>
        {calendarDates.map((item) => (
          <div key={item.date}>
            {item.date},
            {item.dayOfWeek},
            {startTime01(item.dayOfWeek)},
            {endTime01(item.dayOfWeek)},
            {newline(item.dayOfWeek)}
            {startTime02(item.date, item.dayOfWeek)},
            {endTime02(item.dayOfWeek)},

          </div>
        ))}
      </div>
    </div>
  );
}