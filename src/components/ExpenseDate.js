import './css/ExpenseDate.css'
export default function ExpenseDate({tanggal}){
    const date = tanggal.toLocaleString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    return (
      <>
        <div className='expense-date'>{date}</div>
      </>
    );
}