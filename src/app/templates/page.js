import DashboardLayout from "../dashboardLayout";

export default function Template({ children }) {
    
return (
    <div style={{border:"1px yellow", padding: 200, borderRadius: 10}}>
          <DashboardLayout />
            {children}
        </div>
    );
}