import Papa from 'papaparse';

function HomePage() {

    Papa.parse('/data.csv', {
        download: true,
        step: function(row) {
            console.log("Row:", row.data);
        },
        complete: function() {
            console.log("Complete.")
        }
    })
    
    return (
        <>
        <h1>test</h1>
        </>
    )
}

export default HomePage;