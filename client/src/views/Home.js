import Sidebar from '../components/Sidebar.js'
export default function Home() {
  return (
    <>
      <div className="d-flex col main">
        <Sidebar />
        <div className="col-9">
          <div className="border border-slate-800 bg-slate-900/70 mt-3 p-5 text-center" style={{ minHeight: "80vh" }}>
            <h1>Home</h1>
            <div className="d-flex justify-content-center">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
