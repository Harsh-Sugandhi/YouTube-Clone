
function Dashboard({ isSideMenuOpen }:
    { isSideMenuOpen: boolean }) {

    return (
        <div className={`${isSideMenuOpen ? 'opacity-10' : 'opacity-100'}` + " h-screen w-full flex items-center justify-center"}>

            <div className="rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard!</h1>
                <p className="text-gray-700">
                    This is a simple dashboard page. You can add more features here.
                </p>
            </div>

        </div >
    );
}

export default Dashboard;