export default function Dashboard() {
  const now = new Date()
  const nowYear = now.getFullYear()
  const nowMonth = now.getMonth()
  //const nowDate = now.getDate()
  const formattedNowMonth = `${nowYear}-${(nowMonth + 1).toString().padStart(2, '0')}`;
  //const formattedNowDate = `${nowYear}-${(nowMonth + 1).toString().padStart(2, '0')}-${nowDate.toString().padStart(2, '0')}`;

  return (
    <>
      <div>Dashboard</div>
      <input type="month" defaultValue={formattedNowMonth}></input>
    </>
  )
}
