import Navbar from "./../components/NavBar";

export default function DashboardLayout({ children }) {
        return(
        <div style={{border:"2px solid pink", padding: 30, borderRadius: 10, marginTop: 0}}>
          {/* <Navbar /> */}
            {children}
        </div>
    );
}